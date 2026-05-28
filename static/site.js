(() => {
  const state = { pages: [], currentPath: 'README.md', searchIndex: [], navId: 0 };
  const els = {
    nav: document.getElementById('navTree'), content: document.getElementById('content'),
    search: document.getElementById('searchInput'), results: document.getElementById('searchResults'),
    toggle: document.getElementById('sidebarToggle'), toc: document.getElementById('pageToc')
  };

  document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('hashchange', () => loadRoute());
  els.toggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('sidebar-open');
    els.toggle.setAttribute('aria-expanded', String(open));
  });
  els.search.addEventListener('input', () => renderSearch(els.search.value));
  els.search.addEventListener('keydown', event => {
    if (event.key === 'Escape') clearSearchResults();
  });
  els.results.addEventListener('click', event => {
    if (event.target.closest('a.result-item')) clearSearchResults();
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.search-wrap')) clearSearchResults(false);
  });

  async function init() {
    try {
      marked.use({ mangle: false, headerIds: true });
      const summary = await fetchText('SUMMARY.md');
      state.pages = parseSummary(summary);
      renderNav(state.pages);
      await loadRoute();
      buildSearchIndex();
    } catch (error) { showError('No se pudo inicializar la documentación.', error); }
  }

  async function fetchText(path) {
    const response = await fetch(encodeURI(path), { cache: 'no-cache' });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${path}`);
    return response.text();
  }

  function parseSummary(markdown) {
    const root = [], stack = [{ depth: -1, children: root }];
    for (const line of markdown.split(/\r?\n/)) {
      const heading = line.match(/^(#{2,6})\s+(.+)$/);
      if (heading) {
        root.push({ type: 'section', title: heading[2].trim(), children: [] });
        stack.length = 1; stack.push({ depth: -1, children: root[root.length - 1].children });
        continue;
      }
      const item = line.match(/^(\s*)\*\s+\[([^\]]+)\]\(([^)]+)\)/);
      if (!item) continue;
      const depth = Math.floor(item[1].length / 2);
      const node = { type: 'page', title: item[2].trim(), path: normalizePath(item[3].trim()), children: [] };
      while (stack.length > 1 && stack[stack.length - 1].depth >= depth) stack.pop();
      stack[stack.length - 1].children.push(node);
      stack.push({ depth, children: node.children });
    }
    return root;
  }

  function renderNav(nodes) {
    els.nav.innerHTML = renderNodes(nodes);
    els.nav.addEventListener('click', event => {
      const button = event.target.closest('button.nav-toggle');
      if (button) {
        const item = button.closest('.nav-collapsible');
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!expanded));
        item?.classList.toggle('collapsed', expanded);
        return;
      }
      if (event.target.closest('a[data-path]')) document.body.classList.remove('sidebar-open');
    });
  }
  function renderNodes(nodes) {
    return `<ul>${nodes.map(node => {
      const children = node.children?.length ? renderNodes(node.children) : '';
      if (node.type === 'section') {
        const id = `nav-group-${++state.navId}`;
        return `<li class="nav-collapsible"><button class="nav-section nav-toggle" type="button" aria-expanded="true" aria-controls="${id}"><span>${escapeHtml(node.title)}</span></button><div id="${id}" class="nav-children">${children}</div></li>`;
      }
      if (children) {
        const id = `nav-group-${++state.navId}`;
        return `<li class="nav-collapsible"><div class="nav-row"><a href="#/${escapeAttribute(node.path)}" data-path="${escapeAttribute(node.path)}">${escapeHtml(node.title)}</a><button class="nav-toggle nav-toggle-small" type="button" aria-label="Colapsar ${escapeAttribute(node.title)}" aria-expanded="true" aria-controls="${id}"></button></div><div id="${id}" class="nav-children">${children}</div></li>`;
      }
      return `<li><a href="#/${escapeAttribute(node.path)}" data-path="${escapeAttribute(node.path)}">${escapeHtml(node.title)}</a></li>`;
    }).join('')}</ul>`;
  }

  async function loadRoute() {
    const route = decodeURIComponent(location.hash.replace(/^#\/?/, '')) || 'README.md';
    if (!route.toLowerCase().endsWith('.md')) {
      scrollToAnchor(route);
      return;
    }
    state.currentPath = normalizePath(route);
    await loadPage(state.currentPath);
  }

  async function loadPage(path) {
    els.content.innerHTML = '<p>Cargando contenido…</p>';
    try {
      const markdown = await fetchText(path);
      const prepared = preprocessMarkdown(markdown);
      const html = DOMPurify.sanitize(marked.parse(prepared), {
        ADD_TAGS: ['iframe'], ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'loading', 'target', 'rel', 'src', 'title', 'class']
      });
      els.content.innerHTML = html;
      fixRelativeUrls(path); wireContentLinks(); decoratePage(path); buildPageToc(); updateActiveNav(path); syncCollapsedNav();
      document.title = `${getPageTitle()} · RPA Connect Docs`;
      els.content.focus({ preventScroll: true }); scrollTo(0, 0);
    } catch (error) { showError(`No se pudo cargar ${path}.`, error); }
  }

  function preprocessMarkdown(markdown) {
    let text = markdown.replace(/^---[\s\S]*?---\s*/, '');
    text = text.replace(/{%\s*hint\s+style="?([^"%]+)"?\s*%}/g, (_, style) => `<div class="hint hint-${escapeAttribute(style)}">`);
    text = text.replace(/{%\s*endhint\s*%}/g, '</div>');
    text = text.replace(/{%\s*tabs\s*%}|{%\s*endtabs\s*%}/g, '');
    text = text.replace(/{%\s*tab\s+title="([^"]+)"\s*%}/g, (_, title) => `\n### ${title}\n`);
    text = text.replace(/{%\s*endtab\s*%}/g, '');
    text = text.replace(/{%\s*embed\s+url="([^"]+)"(?:\s+fullWidth="true")?\s*%}/g, (_, url) => renderEmbed(url));
    return text;
  }
  function renderEmbed(url) {
    const yt = youtubeEmbed(url);
    if (yt) return `<iframe class="embed-video" src="${yt}" title="Video embebido" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    return `<a class="embed-card" href="${escapeAttribute(url)}" target="_blank" rel="noopener">${escapeHtml(url)}</a>`;
  }
  function youtubeEmbed(url) {
    try {
      const parsed = new URL(url); let id = '';
      if (parsed.hostname.includes('youtu.be')) id = parsed.pathname.slice(1);
      if (parsed.hostname.includes('youtube.com')) id = parsed.searchParams.get('v') || '';
      return id ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}` : '';
    } catch { return ''; }
  }

  function fixRelativeUrls(pagePath) {
    const base = pagePath.includes('/') ? pagePath.slice(0, pagePath.lastIndexOf('/') + 1) : '';
    els.content.querySelectorAll('img, video, source').forEach(node => {
      const attr = node.hasAttribute('src') ? 'src' : 'href';
      const value = node.getAttribute(attr);
      if (value && !isExternal(value) && !value.startsWith('#')) node.setAttribute(attr, normalizePath(base + value));
      if (node.tagName === 'IMG') node.loading = 'lazy';
    });
  }
  function wireContentLinks() {
    els.content.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (!href || isExternal(href) || href.startsWith('#') || href.startsWith('mailto:')) return;
      const base = state.currentPath.includes('/') ? state.currentPath.slice(0, state.currentPath.lastIndexOf('/') + 1) : '';
      const target = normalizePath(base + href);
      if (target.toLowerCase().endsWith('.md')) link.setAttribute('href', `#/${target}`);
    });
  }

  function decoratePage(path) {
    els.content.querySelector('.doc-kicker')?.remove();
    const h1 = els.content.querySelector('h1');
    if (!h1) return;
    const page = findPageByPath(state.pages, path);
    const section = findSectionForPath(state.pages, path);
    const kicker = document.createElement('div');
    kicker.className = 'doc-kicker';
    kicker.innerHTML = `<span>${escapeHtml(section || 'Documentación')}</span><i class="dot" aria-hidden="true"></i><span>${escapeHtml(page?.title || h1.textContent.trim())}</span>`;
    h1.before(kicker);
  }

  function buildPageToc() {
    if (!els.toc) return;
    const headings = [...els.content.querySelectorAll('h2, h3')].slice(0, 8);
    if (!headings.length) { els.toc.innerHTML = ''; return; }
    els.toc.innerHTML = headings.map(heading => {
      if (!heading.id) heading.id = slugify(heading.textContent || 'section');
      const level = heading.tagName === 'H3' ? 'toc-subitem' : 'toc-item';
      return `<a class="${level}" href="#${escapeAttribute(heading.id)}" data-anchor="${escapeAttribute(heading.id)}">${escapeHtml(heading.textContent.trim())}</a>`;
    }).join('');
  }


  function scrollToAnchor(id) {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function findSectionForPath(nodes, path, currentSection = '') {
    for (const node of nodes) {
      if (node.type === 'section') {
        const found = findSectionForPath(node.children, path, node.title);
        if (found) return found;
      } else if (normalizePath(node.path) === normalizePath(path)) return currentSection;
      else if (node.children?.length) {
        const found = findSectionForPath(node.children, path, currentSection);
        if (found) return found;
      }
    }
    return '';
  }

  function findPageByPath(nodes, path) {
    for (const node of nodes) {
      if (node.type === 'page' && normalizePath(node.path) === normalizePath(path)) return node;
      if (node.children?.length) {
        const found = findPageByPath(node.children, path);
        if (found) return found;
      }
    }
    return null;
  }

  function slugify(value) {
    return String(value).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section';
  }

  function updateActiveNav(path) {
    els.nav.querySelectorAll('a[data-path]').forEach(link => link.classList.toggle('active', normalizePath(link.dataset.path) === normalizePath(path)));
  }

  function syncCollapsedNav() {
    els.nav.querySelectorAll('.nav-collapsible').forEach(item => {
      const hasActive = !!item.querySelector('a.active');
      item.classList.toggle('collapsed', !hasActive);
      const button = item.querySelector(':scope > .nav-toggle, :scope > .nav-row > .nav-toggle');
      button?.setAttribute('aria-expanded', String(hasActive));
    });
  }


  function getPageTitle() { return els.content.querySelector('h1')?.textContent?.trim() || 'Documentación'; }

  async function buildSearchIndex() {
    const pages = flattenPages(state.pages), results = [];
    for (const page of pages) {
      try {
        const markdown = await fetchText(page.path);
        const plain = preprocessMarkdown(markdown).replace(/<[^>]+>/g, ' ').replace(/[#*_`>\[\]()!]/g, ' ').replace(/\s+/g, ' ').trim();
        results.push({ ...page, text: plain.toLowerCase() });
      } catch { /* La búsqueda no debe romper el sitio por una página faltante. */ }
    }
    state.searchIndex = results;
  }
  function renderSearch(query) {
    const q = query.trim().toLowerCase();
    if (!q) { els.results.hidden = true; els.results.innerHTML = ''; return; }
    const hits = state.searchIndex.filter(page => page.title.toLowerCase().includes(q) || page.text.includes(q)).slice(0, 12);
    els.results.hidden = false;
    els.results.innerHTML = `<strong>${hits.length ? 'Resultados' : 'Sin resultados'}</strong>` + hits.map(page => {
      const idx = page.text.indexOf(q);
      const excerpt = idx >= 0 ? page.text.slice(Math.max(0, idx - 55), idx + 130) : page.path;
      return `<a class="result-item" href="#/${escapeAttribute(page.path)}"><b>${escapeHtml(page.title)}</b><small>${escapeHtml(excerpt)}</small></a>`;
    }).join('');
  }


  function clearSearchResults(clearInput = true) {
    els.results.hidden = true;
    els.results.innerHTML = '';
    if (clearInput) els.search.value = '';
  }

  function flattenPages(nodes, acc = []) {
    for (const node of nodes) { if (node.type === 'page') acc.push({ title: node.title, path: node.path }); if (node.children?.length) flattenPages(node.children, acc); }
    return acc;
  }
  function normalizePath(path) {
    const [rawPath, hash = ''] = path.split('#'), parts = [];
    rawPath.replace(/\\/g, '/').split('/').forEach(part => { if (!part || part === '.') return; if (part === '..') parts.pop(); else parts.push(part); });
    return parts.join('/') + (hash ? `#${hash}` : '');
  }
  function isExternal(value) { return /^(?:[a-z]+:)?\/\//i.test(value) || value.startsWith('data:'); }
  function showError(message, error) { console.error(error); els.content.innerHTML = `<div class="error"><strong>${escapeHtml(message)}</strong><br><small>${escapeHtml(error.message || String(error))}</small></div>`; }
  function escapeHtml(value) { return String(value).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch])); }
  function escapeAttribute(value) { return escapeHtml(value).replace(/'/g, '&#39;'); }
})();

