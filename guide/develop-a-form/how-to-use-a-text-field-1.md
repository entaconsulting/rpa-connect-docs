# How to use a date Field

Click en ![](../../.gitbook/assets/image.png)

Click dentro de Column, sale un barra roja.

<figure><img src="../../.gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>

Se genera el Field, a la derecha aparece un banner con distintas propiedades para parametrizar el Field.

<figure><img src="../../.gitbook/assets/image (32).png" alt=""><figcaption></figcaption></figure>

## User Friendly Name

Por defecto, los campos se muestran con el nombre del dato definido, que en ocasiones puede no ser amigable al usuario final, en ese caso, existe la propiedad _label_ que permite modificar el nombre por uno más acorde.

<figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption><p>Label</p></figcaption></figure>

## Change size

Por defecto, los campos ocupan todo el espacio horizontal disponible (Usando el sistema de grillas de 12 columnas). En caso de querer tener más control de cómo se muestran los elementos, contamos con la propiedad _size_ que puede tomar valores entre 1 y 12.

<figure><img src="../../.gitbook/assets/VisualEditor_Field_Text_Size.png" alt=""><figcaption><p>Size dropdown</p></figcaption></figure>

## Make it Read-only

If a field needs to have a fixed value that cannot be modified by the user, it can be configured using the "_readOnly_" property, which accepts a boolean value or a boolean expression.

#### Boolean Value

<pre class="language-json" data-title="Layout"><code class="lang-json">{
	"elements": [
		{
			"type": "field",
			"name": "employeeName",
<strong>			"readonly": true
</strong>		}
	]
}
</code></pre>

#### Boolean Expression

<pre class="language-json" data-title="Schema"><code class="lang-json">{
	"isEditable": {
<strong>		"type": "boolean",
</strong>	},
	"employeeName": {
		"type": "text",
	}
}
</code></pre>

<pre class="language-json" data-title="Layout"><code class="lang-json">{
	"elements": [
		{
			"type": "field",
			"name": "employeeName",
<strong>			"readonly": "not(isEditable)"
</strong>		}
	]
}
</code></pre>

## Make it invisible&#x20;

Se puede hacer que un campo sea o no visible con la propiedad _visibility,_ recibe valores booleanos, o una expresión que devuelva un valor booleano, lo que permite hacer visible en función de otros campos definidos.

#### Boolean Value

{% code title="Layout" %}
```json
{
	"elements": [
		{
			"type": "field",
			"name": "employeeName",
			"visibility": true
		}
	]
}
```
{% endcode %}

#### Boolean Expression

{% code title="Schema" %}
```json
{
	"isVisible": {
		"type": "boolean",
	},
	"employeeName": {
		"type": "text",
	}
}
```
{% endcode %}

{% code title="Layout" %}
```json
{
	"elements": [
		{
			"type": "field",
			"name": "employeeName",
			"visibility": "isVisible"
		}
	]
}
```
{% endcode %}

## Validations

### Required Field

By using the "_required_" property, it is indicated that this field must be completed in order to submit the form.

<figure><img src="../../.gitbook/assets/VisualEditor_Field_Text_Required_False.png" alt=""><figcaption><p>Required False</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/VisualEditor_Field_Text_Required_True.png" alt=""><figcaption><p>Required True</p></figcaption></figure>

### Field with Set of Accepted Values

If a text field can only have a specific set of valid data, the "_whitelist_" property can be used. It accepts an array of allowed texts. If a value is entered that is not in this list, a validation will be triggered, indicating the valid options.

<figure><img src="../../.gitbook/assets/VisualEditor_Field_Text_Whitelist.png" alt=""><figcaption></figcaption></figure>

### Field with Set of Rejected Values

Following the same logic as the previous point, the "_blacklist_" property can be used to list a group of data that cannot be entered.

<figure><img src="../../.gitbook/assets/VisualEditor_Field_Text_Blacklist.png" alt=""><figcaption></figcaption></figure>

## Advanced Validations

En el caso de necesitar una validación más especifica o compleja, está el atributo validationExpressions, donde podemos definir una o más validaciones. Cada validación cuenta con los atributos message y expression, en message se guarda el mensaje que saltará cuando se cumpla la condición definida en expression. Para comparar el campo de texto por igualdad contra un texto definido:

