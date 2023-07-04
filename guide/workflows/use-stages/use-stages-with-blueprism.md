# Use Stages with BluePrism

Se recomiendo realizar previamente el tutorial [Use a Form wirth BluePrism](../../getting-started/use-a-form/use-a-form-with-blueprism.md)

Los requisitos para utilizar stages son:

* Haber generado un formulario con stages, y haber obtnedio el id del formDefinition inicial.
* Haber generado una ApiKey y haberle dado rol de manager al formDefinition mencionado en el ítem anterior.
* Haber descargado el conector de BluePrism del digital Exchange el cual incluye el objeto “RPA Forms” y el proceso “Getting Started with RPA Forms” [https://digitalexchange.blueprism.com/dx/search?keyword=rpa%20forms](https://digitalexchange.blueprism.com/dx/search?keyword=rpa%20forms)

Una vez abierto el proceso RPA Connect - Getting Started  en BluePrism se deben completar los siguientes Data Items en el Main Page:

* formDefinitionID (dato obtenido previamente durante la [creación del formulario](../../getting-started/create-a-form.md))
* ApiKey (dato obtenido previamente durante la [creación de ApiKey](../../administrator/create-apikey.md))
* Host: Se debe completar con “app.rpaforms.com”

Agregar la hoja Generate Stage e ingresar los parametros de entrada.

**userOrGruopAssigned:** email o GUID de group a quien se asigna la instancia, debe crearse por un [Administrador](../../administrator/users-and-groups.md)

**state:** Estado que tendrá el formulario, puede ser Draft, Confirmed, Ended

<figure><img src="../../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

Generar Formulario Inicial

Acceder al formulario con el URL, cargar la información y enviar

<figure><img src="../../../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

Obtener la respuesta del formulario.

Ejecutar la hoja Create a Stage.

