---
description: >-
  Aprende a organizar tus formularios como etapas dentro de un recorrido,
  generando una serie de pasos para recibir información precisa y ordenada en
  cada fase de un proceso.
---

# Configuración de workflows

Un workflow es un recorrido compuesto por una serie de formularios que deberán responderse de modo escalonado. Esta modalidad resulta especialmente útil cuando la información que necesitamos obtener en el transcurso de un proceso puede desglosarse en etapas concretas y necesitamos concentrar el seguimiento de todas ellas en un solo lugar. A su vez, el uso de workflows permite al usuario final revisar las respuestas que ha brindado en el marco de un mismo proceso, facilitando la localización y consulta de todos los formularios completados tanto para quienes los envían como para quienes los reciben.

Para este ejemplo, partiremos del formulario desarrollado anteriormente para la actualización de datos, y completaremos el proceso con la información de compra y una encuesta de satisfacción. Sin embargo, el tipo y cantidad de plantillas a utilizar dependerá del flujo de trabajo para cada proyecto.

Ten presente que todos los formularios de un workflow deberán haber sido creados con anticipación al mismo, ya que al configurarlo tendremos que seleccionarlos y asociarlos entre sí.

Para comenzar, dirígete a la aplicación _**Build**_ y localiza el formulario que desees convertir en el primer paso de tu workflow. Pulsa sobre la acción _**Editar**_ con el ícono de lápiz.

<figure><img src="../.gitbook/assets/rpa_4_1.png" alt=""><figcaption><p>Acción de <em><strong>Editar</strong></em></p></figcaption></figure>

Se desplegará un apartado lateral con dos pestañas: _**Form**_, la cual hemos visto anteriormente y corresponde a la información básica del formulario, y _**Stages**_. Pulsa sobre esta última.

<figure><img src="../.gitbook/assets/rpa_4_2.png" alt=""><figcaption><p>Pestaña <em><strong>Stage</strong></em> en el apartado de edición </p></figcaption></figure>

A continuación, haz clic sobre la opción _**Add stage**_ para definir un nuevo paso. Modifica los nombres del _**Initial Stage**_ (el punto de partida desde el cual el usuario recorrerá el workflow) y el _**Stage 1**_ por los que desees y luego pulsa el desplegable para elegir el formulario correspondiente al primer paso (en este ejemplo, “Actualización de datos”).

<figure><img src="../.gitbook/assets/rpa_4_3.png" alt="" width="473"><figcaption><p>Selección de formulario para un <em><strong>Stage</strong></em></p></figcaption></figure>

Continúa añadiendo los _**Stages**_ que necesites hasta completar el proceso. Si necesitas eliminar del workflow alguno de los pasos creados, solo tienes que pulsar sobre el ícono de cesto para borrarlo. Una vez que termines, pulsa _**Save**_ para guardar los cambios.

{% embed url="https://youtu.be/4fuxPAozVI8" %}



Para darle funcionalidad a tu workflow, deberás recurrir a un conector como BluePrism. Más adelante, abordaremos en mayor profundidad las [acciones asociadas a workflows](../blueprism/conexion-con-blueprism/otras-acciones/acciones-vinculadas-a-stages.md) y su configuración, pero es importante detallar sus principales características:

* _**Create Stage:**_ generará un nuevo _**Stage**_, siempre asignado a un usuario o grupo, ya que no es posible generar un link público para un _**Stage**_.
* _**Update Stage:**_ te permitirá cancelar o regresar a estado de borrador un _**Stage**_ que haya sido completado pero su respuesta no sea apta para su procesamiento.

Una vez que hayas configurado tu workflow, podrás dar inicio a una nueva instancia desde el Portal RPA Connect o la aplicación Teams y cada paso se habilitará de forma escalonada a medida que se complete el anterior. Más adelante, conocerás [cómo gestionar la Bandeja de Entrada](../canales-de-interaccion/gestion-de-instancias-en-teams-y-el-portal/interfaz-y-funciones-comunes/bandeja-de-entrada.md) para visualizar cuál es la etapa activa a la espera de respuesta y revisar las actualizaciones de su estado.

Para obtener la respuesta a un _**Stage**_ de una instancia de formulario, puedes utilizar la acción _**Get Stage Response**_. Al momento de configurar el parámetro _**index**_, debes tener presente que el _**Stage 1**_ corresponde al índice _**0**_, el _**Stage 2**_ al índice _**1**_ y de este modo sucesivamente.

\


\
