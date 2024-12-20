# Acciones vinculadas a instancias

A continuación, profundizaremos en una serie de acciones que nos permitirán conocer el estado de una instancia de formulario, el token asignado a ella y los valores de las respuesta obtenidas, entre otros aspectos.

## **Get Form Instance State**

Devuelve el estado de una instancia de formulario, es decir, si se encuentra en estado de borrador o confirmada. Presenta los siguientes parámetros:

<table><thead><tr><th width="165">Parámetros</th><th width="102">Dirección</th><th width="126">Tipo de dato</th><th>Descripción</th></tr></thead><tbody><tr><td><strong>formInstanceId</strong></td><td>In</td><td>Texto</td><td>ID de la instancia de formulario</td></tr><tr><td><strong>state</strong></td><td>Out</td><td>Texto</td><td>Estado de la instancia de formulario</td></tr><tr><td><strong>lastSaved</strong></td><td>Out</td><td>Texto</td><td>Fecha y hora del último guardado</td></tr><tr><td><strong>Response</strong></td><td>Out</td><td>Colección</td><td>Colección conteniendo todos los datos anteriores de la instancia de formulario</td></tr></tbody></table>

## **Get Form Instance Response**

Incluye las propiedades de _**Get Form Instance State**_ pero permite también recopilar los datos que hayan sido ingresados en una instancia de formulario, mostrándolos como valores. Sus propiedades son las siguientes:

<table><thead><tr><th width="180">Parámetros</th><th width="102">Dirección</th><th width="126">Tipo de dato</th><th>Descripción</th></tr></thead><tbody><tr><td><strong>formInstanceId</strong></td><td>In</td><td>Texto</td><td>ID de la instancia de formulario</td></tr><tr><td><strong>formDefinitionID</strong></td><td>Out</td><td>Texto</td><td>ID de la plantilla a la cual pertenece la instancia</td></tr><tr><td><strong>formInstanceId</strong></td><td>Out</td><td>Texto</td><td>ID de la instancia de formulario, ya que se incluirá en la salida final</td></tr><tr><td><strong>lastSaved</strong></td><td>Out</td><td>Texto</td><td>Fecha y hora del último guardado</td></tr><tr><td><strong>state</strong></td><td>Out</td><td>Texto</td><td>Estado de la instancia de formulario</td></tr><tr><td><strong>values</strong></td><td>Out</td><td>Colección</td><td>Valores ingresados en la instancia de formulario</td></tr><tr><td><strong>Response</strong></td><td>Out</td><td>Colección</td><td>Colección conteniendo todos los datos anteriores de la instancia de formulario</td></tr></tbody></table>

## **Get Form Instance Token**

Permite generar un nuevo token público para una instancia de formulario (por ejemplo, porque se encuentra vencido) definiendo los siguientes parámetros:

<table><thead><tr><th width="184">Parámetros</th><th width="102">Dirección</th><th width="126">Tipo de dato</th><th>Descripción</th></tr></thead><tbody><tr><td><strong>formInstanceId</strong></td><td>In</td><td>Texto</td><td>ID de la instancia de formulario</td></tr><tr><td><strong>expiresAt</strong></td><td>In</td><td>Fecha y hora</td><td>Fecha de vencimiento del token</td></tr><tr><td><strong>formInstanceId</strong></td><td>Out</td><td>Texto</td><td>ID de la instancia de formulario, ya que se incluirá en la salida final</td></tr><tr><td><strong>sharedFormToken</strong></td><td>Out</td><td>Texto</td><td>Token que permite visualizar y modificar la instancia generada</td></tr><tr><td><strong>URL</strong></td><td>Out</td><td>Texto</td><td>Dirección accesible desde el navegador formada por la URL básica y el token</td></tr><tr><td><strong>Response</strong></td><td>Out</td><td>Colección</td><td>Colección conteniendo todos los datos anteriores de la instancia de formulario</td></tr></tbody></table>

## **Set Form Instance Process Info**

Permite brindar a las personas que utilicen el portal o la aplicación de Teams la posibilidad de revisar el estado de los formularios que hayan enviado, el cual se refleja en las columnas “Estado del Proceso” y “Completado”.

<figure><img src="../../../.gitbook/assets/rpa_blueprism_11.png" alt=""><figcaption><p>Visualización del estado de un formulario en el Portal</p></figcaption></figure>

Esta acción se configura con los siguientes parámetros:

<table><thead><tr><th width="201">Parámetros</th><th width="102">Dirección</th><th width="126">Tipo de dato</th><th>Descripción</th></tr></thead><tbody><tr><td><strong>formInstanceId</strong></td><td>In</td><td>Texto</td><td>ID de la instancia de formulario</td></tr><tr><td><strong>status</strong></td><td>In</td><td>Texto</td><td>Estado de procesamiento de la instancia que se mostrará al usuario</td></tr><tr><td><strong>endState</strong></td><td>In</td><td>Texto</td><td>Estado de procesamiento final, cuyas opciones son “OK” o “Error”</td></tr><tr><td><strong>completionMessage</strong></td><td>In</td><td>Texto</td><td>Mensaje especificando las condiciones en que finalizó la instancia</td></tr></tbody></table>

## **Delete Form Instance**

Permite borrar una instancia de formulario. Sus principales propiedades son:

<table><thead><tr><th width="201">Parámetros</th><th width="102">Dirección</th><th width="126">Tipo de dato</th><th>Descripción</th></tr></thead><tbody><tr><td><strong>formInstanceId</strong></td><td>In</td><td>Texto</td><td>ID de la instancia de formulario</td></tr><tr><td><strong>force</strong></td><td>In</td><td>Flag</td><td>Fuerza la eliminación de una instancia</td></tr></tbody></table>
