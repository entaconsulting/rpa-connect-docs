---
description: >-
  Un campo number es elemento donde se puede ingresar números, usando como
  separador de decimal el punto.
---

# Como usar un campo number

<figure><img src="../../.gitbook/assets/VE_Field_Number_Size_12_Displayed.png" alt=""><figcaption></figcaption></figure>

## Crear un campo number

Click en ![](../../.gitbook/assets/VisualEditor\_Action\_InsertField.png)

Colocar el mouse dentro de un Column, saldrá una barra violeta.

<figure><img src="../../.gitbook/assets/VisualEditor_Field_InsertBar.png" alt=""><figcaption></figcaption></figure>

Hacer click en la barra violeta, se generará un nuevo campo.

<figure><img src="../../.gitbook/assets/VisualEditor_Field.png" alt=""><figcaption></figcaption></figure>

Ingresar un nombre al campo y seleccionar el tipo _number_

<figure><img src="../../.gitbook/assets/VE_Types_Number.png" alt=""><figcaption></figcaption></figure>

Hacer click en _OK_

<figure><img src="../../.gitbook/assets/VE_Field_Number_OK.png" alt=""><figcaption></figcaption></figure>

## Cambiar la etiqueta del campo number

Con la propiedad _Label_ se modifica la etiqueta del campo, que por defecto es el nombre del campo.

<figure><img src="../../.gitbook/assets/VE_Field_Option_Label.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/VE_Field_Option_Label_Displayed.png" alt=""><figcaption></figcaption></figure>

## Cambiar el tamaño del campo number

Con la propiedad _Size_ se puede cambiar el tamaño de un campo. Se puede escoger un valor entre 1 y 12.

_**Size 12**_

<figure><img src="../../.gitbook/assets/VE_Field_Option_Size_12.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/VE_Field_Option_Size_12_Displayed.png" alt=""><figcaption></figcaption></figure>

_**Size 6**_

<figure><img src="../../.gitbook/assets/VE_Field_Option_Size_6.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/VE_Field_Option_Size_6_Displayed.png" alt=""><figcaption></figcaption></figure>

## Hacer requerido el campo number

Con la propiedad _Required en True_, se indica que el campo debe ser completado para poder enviar el formulario.

<figure><img src="../../.gitbook/assets/VE_Field_Option_Requiered_True.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/VE_Field_Option_Requiered_True_Displayed.png" alt=""><figcaption></figcaption></figure>

### Mostrar un placeholder en el campo numero

Se puede mostrar una cadena de caracteres cualquiera al hacer click en campo usando la propiedad placeholder. Esta cadena de caracteres no se guarda en campo si se envía el formulario con este campo vacío,

IMAGENES

### Mostrar un prefijo en el campo numero

Se puede mostrar una cadena de caracteres cualquiera en el lado izquierdo del campo usando la propiedad prefix. Esta cadena de caracteres no se concatena al campo.

IMAGENES

### Validar formato del número con mascara

Se puede configurar el campo para tener un formato definido, usando el atributo _Mask_. Donde el _**9**_ representa cualquier digito de _**0**_ a **9**, **.** representa el separador decimal, si se utiliza un digito entre **1** y **8** o **\9** se espera ese digito específicamente y el campo lo completa automáticamente.

### Validar número con cotas

Con las propiedades _Min_ y _Max,_ se puede definir que el campo sea mayor o igual que un numero o menor igual que otro número.

IMAGENES

### Validar número en conjunto de valores aceptados

En el caso que un campo numérico solo pueda tener un conjunto de datos válidos, se puede utilizar la propiedad _whitelist_, ingresando cada valor que pueda tomar el campo. En caso de que se ingrese un valor que no se encuentre en esta lista, se disparará una validación informando los valores válidos.

IMAGENES

### Validar número en conjunto de valores no aceptados

En el caso que un campo numérico pueda tener un conjunto de datos inválidos, se puede utilizar la propiedad _blacklist,_ ingresando cada valor que no pueda tomar el campo. En caso de que se ingrese un valor que se encuentre en esta lista, se disparará una validación informando los valores inválidos.

IMAGENES

### Hacer de solo lectura el campo number

Con la propiedad _Readonly_ activada se deshabilita el ingreso o modificacion de los datos de un campo. El campo aparece grisado y con una linea punteada.

IMAGENES

### Hacer visible/invisible el campo number

Se puede hacer que un campo sea o no visible con la propiedad _visibility._

IMAGENES

