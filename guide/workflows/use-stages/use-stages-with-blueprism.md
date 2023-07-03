# Use Stages with BluePrism

Se recomiendo realizar previamente el tutorial [Use a Form wirth BluePrism](../../getting-started/use-a-form/use-a-form-with-blueprism.md)

Los requisitos para utilizar un workflow son:

* Haber generado un formulario con stages, y haber obtnedio el id del formDefinition inicial.
* Haber generado una ApiKey y haberle dado rol de manager al formDefinition mencionado en el ítem anterior.
* Haber descargado el conector de BluePrism del digital Exchange el cual incluye el objeto “RPA Forms” y el proceso “Getting Started with RPA Forms” [https://digitalexchange.blueprism.com/dx/search?keyword=rpa%20forms](https://digitalexchange.blueprism.com/dx/search?keyword=rpa%20forms)

Una vez abierto el proceso RPA Connect - Getting Started  en BluePrism se deben completar los siguientes Data Items en el Main Page:

* formDefinitionID (dato obtenido previamente durante la [creación del formulario](../../getting-started/create-a-form.md))
* ApiKey (dato obtenido previamente durante la [creación de ApiKey](../../administrator/profiles/create-apikey.md))
* Host: Se debe completar con “app.rpaforms.com”





