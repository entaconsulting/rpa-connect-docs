# Acciones vinculadas a stages

Estas acciones se encuentran vinculadas a la generación de workflows, es decir, recorridos con una serie de pasos constituidos por distintos formularios que deberán responderse de modo ordenado. Si bien aún no profundizaremos en sus características, es importante tener presente esta opción para poder recurrir a ella cuando sea necesario aplicarla. Veamos en detalle su funcionamiento:

## Create Stage

Permite generar un Stage utilizando los siguientes parámetros:

<table><thead><tr><th width="217">Parámetros</th><th width="104">Dirección</th><th width="127">Tipo de dato</th><th>Descripción</th></tr></thead><tbody><tr><td><strong>formInstanceId</strong></td><td>In</td><td>Texto</td><td>ID de la instancia de formulario</td></tr><tr><td><strong>initialValues</strong></td><td>In</td><td>Texto</td><td>Objeto JSON de valores iniciales para cargar en el Stage</td></tr><tr><td><strong>notificationMessage</strong></td><td>In</td><td>Texto</td><td>Mensaje que se envía a los usuarios que utilizan Teams cuando se le asigna el Stage</td></tr><tr><td><strong>userOrGroupAssigned</strong></td><td>In</td><td>Texto</td><td>Usuario o grupo al que se le ha asignado esta instancia, el cual se define a través del mail de un usuario o el ID de un grupo Connect</td></tr><tr><td><strong>state</strong></td><td>In</td><td>Texto</td><td>Colección conteniendo todos los datos anteriores de la instancia de formulario</td></tr></tbody></table>

## **Get Stage Response**

Devuelve la respuesta de un Stage de una instancia de formulario.

<table><thead><tr><th width="176">Parámetros</th><th width="102">Dirección</th><th width="126">Tipo de dato</th><th>Descripción</th></tr></thead><tbody><tr><td><strong>formInstanceId</strong></td><td>In</td><td>Texto</td><td>ID de la instancia de formulario</td></tr><tr><td><strong>index</strong></td><td>In</td><td>Número</td><td>Stage del cual se obtienen los adjuntos</td></tr><tr><td><strong>formDefinitionID</strong></td><td>Out</td><td>Texto</td><td>ID de la plantilla a la cual pertenece la instancia</td></tr><tr><td><strong>formInstanceId</strong></td><td>Out</td><td>Texto</td><td>ID de la instancia de formulario, ya que se incluirá en la salida final</td></tr><tr><td><strong>id</strong></td><td>Out</td><td>Texto</td><td>ID del Stage</td></tr><tr><td><strong>lastSaved</strong></td><td>Out</td><td>Texto</td><td>Fecha y hora del último guardado del Stage</td></tr><tr><td><strong>values</strong></td><td>Out</td><td>Colección</td><td>Valores ingresados en el Stage</td></tr><tr><td><strong>state</strong></td><td>Out</td><td>Texto</td><td>Estado del Stage de la instancia de formulario</td></tr><tr><td><strong>stageName</strong></td><td>Out</td><td>Texto</td><td>Nombre del Stage</td></tr><tr><td><strong>Response</strong></td><td>Out</td><td>Colección</td><td>Colección conteniendo todos los datos anteriores</td></tr></tbody></table>

## Update Stage

Permite actualizar un Stage preexistente de una instancia de formulario, con los siguientes parámetros:

<table><thead><tr><th width="214">Parámetros</th><th width="102">Dirección</th><th width="126">Tipo de dato</th><th>Descripción</th></tr></thead><tbody><tr><td><strong>formInstanceId</strong></td><td>In</td><td>Texto</td><td>ID de la instancia de formulario</td></tr><tr><td><strong>initialValues</strong></td><td>In</td><td>Texto</td><td>Objeto JSON de valores iniciales para cargar en el Stage</td></tr><tr><td><strong>notificationMessage</strong></td><td>In</td><td>Texto</td><td>Mensaje que se envía a los usuarios que utilizan Teams cuando se le asigna el Stage</td></tr><tr><td><strong>userOrGroupAssigned</strong></td><td>In</td><td>Texto</td><td>Usuario o grupo al que se le ha asignado esta instancia, el cual se define a través del mail de un usuario o el ID de un grupo Connect</td></tr><tr><td><strong>index</strong></td><td>In</td><td>Número</td><td>Stage que se actualizará</td></tr><tr><td><strong>resetValues</strong></td><td>In</td><td>Flag</td><td>Descarta los valores ingresados previamente</td></tr></tbody></table>
