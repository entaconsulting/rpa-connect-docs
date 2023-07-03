# Create a Form

Dentro de la aplicación web de RPA Forms se debe presionar en el botón **New** para generar un nuevo **formDefinition.**

<figure><img src="../../.gitbook/assets/image (23).png" alt=""><figcaption></figcaption></figure>

Se abrirá el siguiente modal

<div align="center" data-full-width="false">

<figure><img src="../../.gitbook/assets/image (1) (1).png" alt=""><figcaption></figcaption></figure>

</div>

En el cual se deben completar los siguientes campos:\
**Name:** nombre del _formDefinition_, es el nombre que figurará en el listado de plantillas creadas.\
**Description:** descripción del formulario.

**Workspace:** Espacio de trabajo al cual pertenecerá el _formDefinition_ creado. En este caso seleccionar el Workspace “Default” que se encuentra creado.

**Display Name:** Es el nombre que se visualizará en caso de disponibilizar el formulario vía Connect. En esta instancia puede ser ignorado.

**Display Description:** Es la descripción del formulario que se visualizará en caso de disponibilizarlo vía Connect. En esta instancia puede ser ignorado.

Una vez completos estos campos se debe presionar **Create** y el _formDefinition_ se visualizará al final de la lista:

<figure><img src="../../.gitbook/assets/image (20).png" alt=""><figcaption></figcaption></figure>



Al ingresar al formDefinition seleccionando su nombre se tendrán 3 áreas en pantalla:\
**Schema:** Se definen los campos a utilizar en el formulario, donde cada uno será un objeto JSON.\
**Layout:** Se define la disposición de los campos en la pantalla.\
**Preview:** Vista previa del formulario en base al Schema y al Layout establecido.

<figure><img src="../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>



El primer paso será crear un campo en el Schema, para esto debemos especificarle un nombre y un tipo de datos, para este caso se utilizará de ejemplo el DNI.

{% code title="Schema" %}
```json
{
    "DNI":{
        "type": "text"
    }
}
```
{% endcode %}

Como se observa en el ejemplo la estructura para definir un campo es la siguiente

“\<Nombre del campo>”: {

&#x20;       \<definición del campo>

}

En el caso de querer controlar que no se ingresen más de una cantidad determinada de caracteres se podría extender la definición de la siguiente manera:

{% code title="Schema" %}
```json
{
    "DNI":{
        "type": "text",
        "length": 10
    }
}
```
{% endcode %}

Es decir, manteniendo la estructura del JSON, las propiedades se separan con comas.

En caso de querer agregar un segundo campo, por ejemplo, el nombre del usuario se haría de la siguiente manera:

{% code title="Schema" %}
```json
{
    "DNI":{
        "type": "text",
        "length": 10
    },
    "Nombre": {
        "type": "text"
    }
}
```
{% endcode %}

Luego hay que definir en el "layout" como se visualizan estos elementos del schema, la plataforma recomienda ordenar la interfaz con un "header" y elementos agrupadores de tipo "section", "column" y elementos visuales de tipo "field", "image" y "text"

{% code title="Layout" %}
```json
{
	"spacing": 2,
	"header": {
		"elements": [
			{
				"type": "column",
				"size": 12,
				"elements": [
					{
						"type": "text",
						"label": "Form Title",
						"align": "center",
						"textVariant": "h4",
						"size": 12,
						"margin": 6
					}
				]
			}
		]
	},
	"elements": [
		{
			"type": "section",
			"title": "Section",
			"elements": [
				{
					"type": "column",
					"size": 6,
					"title": "Column",
					"elements": [
						{
							"type": "field",
							"name": "DNI"
						},
						{
							"type": "field",
							"name": "Nombre"
						}
					]
				},
				{
					"type": "column",
					"size": 6,
					"title": "Column",
					"elements": [
						{
							"type": "text",
							"template": "Hello: {{Nombre}}"
						}
					]
				}
			]
		}
	]
}
```
{% endcode %}

Con el schema y layout definido podemos ya visualizar en la seccion preview el formulario

<figure><img src="../../.gitbook/assets/image (26).png" alt=""><figcaption></figcaption></figure>

