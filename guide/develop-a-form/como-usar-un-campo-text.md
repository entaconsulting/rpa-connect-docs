# Como usar un campo text

<figure><img src="../../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>

## Crear un campo text

{% @guideflow/guideflow-embed requestedUrl="https://app.guideflow.com/player/qkq43vh1px" %}

### Cambiar la etiqueta del campo text

Con la propiedad _Label_ se modifica la etiqueta del campo, que por defecto es el nombre del campo.

{% @guideflow/guideflow-embed requestedUrl="https://app.guideflow.com/player/vkm055h3py" %}

## Cambiar el tamaño del campo text

Con la propiedad _Size_ se puede cambiar el tamaño de un campo. Se puede escoger un valor entre 1 y 12.

{% @guideflow/guideflow-embed requestedUrl="https://app.guideflow.com/player/6kwnv5tzky" %}

## Hacer requerido el campo text

Con la propiedad _Required en True_, se indica que el campo debe ser completado para poder enviar el formulario.

{% @guideflow/guideflow-embed requestedUrl="https://app.guideflow.com/player/lpxdgza4kn" %}

### Validar formato del texto con mascara

Se puede configurar el campo para tener un formato definido, usando el atributo _Mask_. Donde el _**9**_ representa cualquier digito de _**0**_ a **9**, **.** representa el separador decimal, si se utiliza un digito entre **1** y **8** o **\9** se espera ese digito específicamente y el campo lo completa automáticamente.

### Hacer de solo lectura el campo text

Con la propiedad _Readonly_ activada se deshabilita el ingreso o modificación de los datos de un campo. El campo aparece grisado y con una linea punteada.

{% @guideflow/guideflow-embed requestedUrl="https://app.guideflow.com/player/3r3v05hnp9" %}

### Hacer visible/invisible el campo text

Se puede hacer que un campo sea o no visible con la propiedad _visibility._

{% @guideflow/guideflow-embed requestedUrl="https://app.guideflow.com/player/er5v71t6k0" %}

