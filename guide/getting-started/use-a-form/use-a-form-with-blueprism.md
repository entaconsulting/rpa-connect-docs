# Use a Form with BluePrism

Los requisitos para utilizar un formulario son:

* Haber generado el formDefinition y haber obtenido su ID.
* Haber generado una ApiKey y haberle dado rol de manager al formDefinition mencionado en el ítem anterior.
* Haber descargado el conector de BluePrism del digital Exchange el cual incluye el objeto “RPA Forms” y el proceso “Getting Started with RPA Forms” [https://digitalexchange.blueprism.com/dx/search?keyword=rpa%20forms](https://digitalexchange.blueprism.com/dx/search?keyword=rpa%20forms)

Una vez abierto el proceso RPA Connect - Getting Started  en BluePrism se deben completar los siguientes Data Items en el Main Page:

* formDefinitionID (dato obtenido previamente durante la [creación del formulario](../create-a-form.md))
* ApiKey (dato obtenido previamente durante la creación del paso 4 \<agregar referencia a ese paso>)
* Host: Se debe completar con “app.rpaforms.com”

<figure><img src="../../../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>

Referenciar en el "Main Page" la página "Create a Form" y completar los inputs y outpus con los item data correspondiente.

<figure><img src="../../../.gitbook/assets/image (30).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>

Al completar estos datos se puede iniciar la ejecución del proceso y se obtiene una instancia del formulario con su link de acceso.

Luego, debe agregar en el "Main Page" (a continuación de la página "Create a Form") la referencia a la página “Get Instance Response” y completar el input “formInstanceId” con el output obtenido de la página anterior.

Al ejecutar "Get Instance Response" hay dos caminos posibles:

* La instancia no haya sido respondida por lo que no se obtendrá información.
  *

      <figure><img src="../../../.gitbook/assets/image (13).png" alt=""><figcaption></figcaption></figure>
  *

      <figure><img src="../../../.gitbook/assets/image (16).png" alt=""><figcaption></figcaption></figure>
  * La instancia fue respondida por lo que se dispondrá en el output "values" de "Get Instance Response" la información que fue suministrada en el formulario.
    *

        <figure><img src="../../../.gitbook/assets/image (22).png" alt=""><figcaption></figcaption></figure>
    *

        <figure><img src="../../../.gitbook/assets/image (19).png" alt=""><figcaption></figcaption></figure>



