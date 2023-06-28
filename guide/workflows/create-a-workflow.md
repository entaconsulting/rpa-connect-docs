# Create a Workflow

Un "Workflow" se refiere a una secuencia de formularios interconectados que se deben completar en un orden específico. Cada formulario se puede completar por la misma persona o por diferentes personas, según corresponda.

Una vez que se completa un formulario y se valida, el flujo de trabajo avanza al siguiente formulario en la secuencia. Este proceso de completar formularios y avanzar a través de la secuencia se puede repetir varias veces, lo que permite una mayor personalización y flexibilidad en la gestión del flujo de trabajo.

Se utilizará el formulario que se generó en la sección [Create a Form](../getting-started/create-a-form.md), pero se necesitará un segundo formDefinition para establecerlo como un stage, para esto se puede utilizar la definición del siguiente formulario:

**Name:** Getting Started - Use a Stage

<details>

<summary>Schema</summary>

{% code overflow="wrap" fullWidth="true" %}
```json
{
    "Foto_4x4": {
        "type": "attachment",
        "maxSizeMb": 100,
        "validationExpressions": [
            {
                "expression": "isEmpty(Foto_4x4)",
                "message": "Requerido"
            }
        ]
    },
    "CUIL": {
        "type": "text",
        "inputMask": "99-99999999-9",
        "validationExpressions": [
            {
                "expression": "isEmpty(CUIL)",
                "message": "Requerido"
            },
            {
                "expression": "not(isEmpty(CUIL))?size(filter([20,23,24,27,30,33,34],j(x)=x==substring(Ingresante.CUIL,1,3)))==0:false",
                "message": "Prefijo incorrecto"
            },
            {
                "expression": "substring(CUIL,4,12)!=DNI",
                "message": "CUIL Inválido"
            },
            {
                "expression": "(CUIL).length!=13",
                "message": "CUIL Inválido"
            }
        ]
    },
    "Celular": {
        "type": "text",
        "matches": {
            "regex": "^[0-9]+[ ][0-9]+$",
            "message": "Formato incorrecto"
        },
        "validationExpressions": [
            {
                "expression": "isEmpty(Ingresante.Celular)",
                "message": "Requerido"
            },
            {
                "expression": "(Ingresante.Celular).length<10",
                "message": "Número inválido"
            }
        ]
    },
    "AclaracionCelular": {
        "type": "text"
    },
    "Calle": {
        "validationExpressions": [
            {
                "expression": "isEmpty(Ingresante.Calle)",
                "message": "Requerido"
            }
        ],
        "type": "text"
    },
    "Altura": {
        "validationExpressions": [
            {
                "expression": "isEmpty(Ingresante.Altura)",
                "message": "Requerido"
            }
        ],
        "type": "text",
        "inputMask": "9999999"
    },
    "Piso": {
        "type": "text",
        "inputMask": "999"
    },
    "Depto": {
        "type": "text"
    },
    "Localidad": {
        "validationExpressions": [
            {
                "expression": "isEmpty(Ingresante.Localidad)",
                "message": "Requerido"
            }
        ],
        "type": "text"
    },
    "Provincia": {
        "validationExpressions": [
            {
                "expression": "isEmpty(Ingresante.Provincia)",
                "message": "Requerido"
            }
        ],
        "type": "select",
        "options": [
            {
                "value": "Buenos Aires"
            },
            {
                "value": "CABA"
            },
            {
                "value": "Catamarca"
            },
            {
                "value": "Chaco"
            },
            {
                "value": "Chubut"
            },
            {
                "value": "Córdoba"
            },
            {
                "value": "Corrientes"
            },
            {
                "value": "Entre Ríos"
            },
            {
                "value": "Formosa"
            },
            {
                "value": "Jujuy"
            },
            {
                "value": "La Pampa"
            },
            {
                "value": "La Rioja"
            },
            {
                "value": "Mendoza"
            },
            {
                "value": "Misiones"
            },
            {
                "value": "Neuquén"
            },
            {
                "value": "Río Negro"
            },
            {
                "value": "Salta"
            },
            {
                "value": "San Juan"
            },
            {
                "value": "San Luis"
            },
            {
                "value": "Santa Cruz"
            },
            {
                "value": "Santa Fe"
            },
            {
                "value": "Santiago del Estero"
            },
            {
                "value": "Tierra del Fuego"
            },
            {
                "value": "Tucumán"
            }
        ]
    },
    "CuentaBancaria": {
        "type": "options",
        "options": [
            {
                "value": "Si"
            },
            {
                "value": "No"
            }
        ],
        "validationExpressions": [
            {
                "expression": "isEmpty(CuentaBancaria)",
                "message": "Requerido"
            }
        ]
    },
    "Constancia_de_CBU": {
        "type": "attachment",
        "maxSizeMb": 10,
        "validationExpressions": [
            {
                "expression": "and(CuentaBancaria=='Si', isEmpty(Constancia_de_CBU))",
                "message": "Requerido"
            }
        ]
    }
}
```
{% endcode %}

</details>

<details>

<summary>Layout</summary>

{% code overflow="wrap" fullWidth="true" %}
```json
{
	"spacing": 2,
	"header": {
		"elements": [
			{
				"type": "column",
				"size": 4,
				"verticalAlign": "center",
				"elements": [
					{
						"type": "text",
						"label": "Documento de Ingreso",
						"align": "center",
						"weight": "bold",
						"size": 12
					}
				]
			}
		]
	},
	"elements": [
		{
			"type": "section",
			"title": "Ingresante",
			"elements": [
				{
					"type": "column",
					"size": 12,
					"elements": [
						{
							"type": "field",
							"name": "Foto_4x4",
							"label": "Foto 4x4",
							"size": 4
						}
					]
				},
				{
					"type": "column",
					"size": 12,
					"elements": [
						{
							"type": "field",
							"name": "CUIL",
							"size": 4
						},
						{
							"type": "field",
							"name": "Celular",
							"label": "Celular",
							"size": 4
						},
						{
							"type": "text",
							"style": "italic",
							"verticalAlign": "center",
							"label": "Ingresar código de área y número separados por un espacio según el ejemplo: 011 12345678",
							"size": 4
						}
					]
				},
				{
					"type": "text",
					"label": "Domicilio",
					"size": 12,
					"margin": "25px 0px 0px 0px"
				},
				{
					"type": "column",
					"size": 12,
					"elements": [
						{
							"type": "field",
							"name": "Calle",
							"size": 3
						},
						{
							"type": "field",
							"name": "Altura",
							"size": 1
						},
						{
							"type": "field",
							"name": "Piso",
							"size": 1
						},
						{
							"type": "field",
							"name": "Depto",
							"size": 1
						},
						{
							"type": "field",
							"name": "Localidad",
							"size": 2
						},
						{
							"type": "field",
							"name": "Provincia",
							"size": 4
						}
					]
				},
				{
					"type": "text",
					"label": "Cuenta Bancaria",
					"textVariant": "h6",
					"size": 12,
					"margin": "25px 0px 0px 0px"
				},
				{
					"type": "column",
					"size": 12,
					"elements": [
						{
							"type": "field",
							"name": "CuentaBancaria",
							"label": "Posee cuenta bancaria",
							"size": 4
						},
						{
							"type": "field",
							"name": "Constancia_de_CBU",
							"visibility": "CuentaBancaria=='Si'",
							"label": "Constancia CBU",
							"size": 4
						},
						{
							"type": "text",
							"visibility": "CuentaBancaria=='Si'",
							"style": "italic",
							"verticalAlign": "center",
							"label": "En la constancia de CBU deben figurar legibles los 22 dígitos, el banco, su nombre y apellido y/o DNI/CUIL",
							"size": 4
						}
					]
				}
			]
		}
	]
}
```
{% endcode %}

</details>

Una vez creado se debe volver a la sección de developer en donde se listan los formDefinitions, se seleccionará el ícono del lápiz sobre el primer formulario creado&#x20;

<figure><img src="../../.gitbook/assets/image (17).png" alt=""><figcaption></figcaption></figure>

Se ingresará la pestaña de Stages

<figure><img src="../../.gitbook/assets/image (12).png" alt=""><figcaption></figcaption></figure>

Dentro de la pestaña de Stages se debe presionar en Add Stage

<figure><img src="../../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>

lo que generará que aparezcan 3 campos:

1\.       Initial Stage Name: Por defecto es "Envio de Formulario".

2\.       Stage 1 Name: Ingresar un nombre representativo del Stage.

3\.       Form Definition: Del desplegable se seleccionará el segundo formDef, Getting Started - Use a Stage.

Hacer click en "Save"

<figure><img src="../../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>
