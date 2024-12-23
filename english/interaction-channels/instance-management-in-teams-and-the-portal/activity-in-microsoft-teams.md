# Activity in Microsoft Teams

The main difference between Teams and the RPA Connect Portal lies in the _Activity_ tab, as its functionality focuses on the notifications we previously discussed when addressing the [integration with Microsoft Entra ID](../../administracion/integracion-con-microsoft-entra-id/). When a new form instance is assigned to you, the application will send you a pop-up notification and create a new chat message in the _**Activity**_ tab.

<figure><img src="../../../.gitbook/assets/rpa_3_14.png" alt=""><figcaption><p>Notification in Microsoft Teams</p></figcaption></figure>

On this card, you will see:

* The title of the form, which is set based on the instance data.
* The stage, if it is part of a workflow, indicating the current _**stage**_ of the process.
* A personalized message for each user or form with details of the expected action for that request. To configure it, you can use the _**notificationMessage**_ parameter when creating actions with BluePrism, as we previously saw for the [_**Create Stage**_ function](../../blueprism/conexion-con-blueprism/otras-acciones/acciones-vinculadas-a-stages.md#create-stage).
* A link to the _**Inbox**_, where you can review the form instance.