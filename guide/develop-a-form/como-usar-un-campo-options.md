---
description: >-
  Un campo de opciones es un elemento donde se puede escoger una opción de una
  lista acotada de valores posibles.
---

# Como usar un campo options

<div>

<figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

 

<figure><img src="../../.gitbook/assets/VE_Field_Option_Variant_ComboBox_Displayed.png" alt=""><figcaption></figcaption></figure>

</div>

## Crear un campo options

Click en ![](../../.gitbook/assets/VisualEditor\_Action\_InsertField.png)

Colocar el mouse dentro de un Column, saldrá una barra violeta.

<figure><img src="../../.gitbook/assets/VisualEditor_Field_InsertBar.png" alt=""><figcaption></figcaption></figure>

Hacer click en la barra violeta, se generará un nuevo campo.

<figure><img src="../../.gitbook/assets/VisualEditor_Field.png" alt=""><figcaption></figcaption></figure>

Ingresar un nombre al campo y seleccionar el tipo _options_

<figure><img src="../../.gitbook/assets/VisualEditor_Types_Option.png" alt=""><figcaption></figcaption></figure>

Hacer click en _OK_

<figure><img src="../../.gitbook/assets/VisualEditor_Field_Option_Save.png" alt=""><figcaption></figcaption></figure>

Hacer en click en _Add Option_

<figure><img src="../../.gitbook/assets/VisualEditor_Field_Option_AddNewValue.png" alt=""><figcaption></figcaption></figure>

Aparece una fila con el valor _Option 1_ por defecto

<figure><img src="../../.gitbook/assets/VisualEditor_Field_Option_DefaultOptions.png" alt=""><figcaption></figcaption></figure>

Ingresar las opciones requeridas

<figure><img src="../../.gitbook/assets/VisualEditor_Field_Option_Options.png" alt=""><figcaption></figcaption></figure>

## Hacer un campo options condicional a otro campo

En ocasiones necesitamos que la selección de un campo me restrinja las opciones a escoger en otro campo.

Crear un campo _continent._

Habilitar el flag _Conditional Options_

<figure><img src="../../.gitbook/assets/VisualEditor_Field_Option_EnableConditional.png" alt=""><figcaption></figcaption></figure>

Seleccionar _continent_ en _When Field_, agregar _America_ en _New Value_ y hacer click en la flecha

<figure><img src="../../.gitbook/assets/VisualEditor_Field_Option_SetUpConditional.png" alt=""><figcaption></figcaption></figure>

Agregar las opciones a mostrar cuando el campo _continent_ tenga el valor _America_

<figure><img src="../../.gitbook/assets/VisualEditor_Field_Option_ConditionalOptions.png" alt=""><figcaption></figcaption></figure>

Hacer click en _+_ para agregar más opciones condicionales a un valor del campo _continent_.

<figure><img src="../../.gitbook/assets/VisualEditor_Field_Option_AddNewValue (1).png" alt=""><figcaption></figcaption></figure>

## Cambiar la etiqueta del campo options

Con la propiedad _Label_ se modifica la etiqueta del campo, que por defecto es el nombre del campo.

<figure><img src="../../.gitbook/assets/VE_Field_Option_Label.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/VE_Field_Option_Label_Displayed.png" alt=""><figcaption></figcaption></figure>

## Cambiar el tamaño del campo options

Con la propiedad _Size_ se puede cambiar el tamaño de un campo. Se puede escoger un valor entre 1 y 12.

_**Size 12**_

<figure><img src="../../.gitbook/assets/VE_Field_Option_Size_12.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/VE_Field_Option_Size_12_Displayed.png" alt=""><figcaption></figcaption></figure>

_**Size 6**_

<figure><img src="../../.gitbook/assets/VE_Field_Option_Size_6.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/VE_Field_Option_Size_6_Displayed.png" alt=""><figcaption></figcaption></figure>

## Hacer requerido el campo options

Con la propiedad _Required en True_, se indica que el campo debe ser completado para poder enviar el formulario.

<figure><img src="../../.gitbook/assets/VE_Field_Option_Requiered_True.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/VE_Field_Option_Requiered_True_Displayed.png" alt=""><figcaption></figcaption></figure>

## Cambiar como se muestra el campo options

Con la propiedad _Variant_ en _Select_ se muestra como una lista de opciones

<figure><img src="../../.gitbook/assets/VE_Field_Option_Variant_Select.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/VE_Field_Option_Variant_Select_Displayed.png" alt=""><figcaption></figcaption></figure>

Con la propiedad _Variant_ en _Options_ se muestra como un conjuto de botones.

<figure><img src="../../.gitbook/assets/VE_Field_Option_Variant_Options.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

Con la propiedad _Variant_ en _ComboBox_ se muestra como una lista de opciones buscables.

<figure><img src="../../.gitbook/assets/VE_Field_Option_Variant_ComboBox.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/VE_Field_Option_Variant_ComboBox_Displayed.png" alt=""><figcaption></figcaption></figure>



### Hacer de solo lectura el campo options

Con la propiedad _Readonly_ activada se deshabilita el ingreso o modificacion de los datos de un campo. El campo aparece grisado y con una linea punteada.

<figure><img src="../../.gitbook/assets/image (33).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (34).png" alt=""><figcaption></figcaption></figure>
