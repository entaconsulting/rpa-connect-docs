# Submissions

Depending on the role assigned to you for each form in _**Authorization profiles**_, in the _**Submissions**_ tab, you will only see the instances you have created (_**Contributor**_ permissions) or those of all users (_**Manager**_ permissions), including draft instances that have not yet been submitted.

<figure><img src="../../../.gitbook/assets/rpa_3_6.png" alt=""><figcaption><p><em><strong>Submissions</strong></em> screen</p></figcaption></figure>

In the upper right corner, you will find sorting and filtering options to help you more easily locate the generated instances and organize them as needed.

<figure><img src="../../../.gitbook/assets/rpa_3_7.png" alt=""><figcaption><p>Sorting and filtering options</p></figcaption></figure>

The filters applied to the forms are cumulative, meaning you can use more than one at a time. To do this, expand the list, click on the first filter you want to set, and select the condition for that filter. For example, when filtering by status, you can choose confirmed or draft instances.

<figure><img src="../../../.gitbook/assets/rpa_3_8.png" alt=""><figcaption><p>Filter by form status</p></figcaption></figure>

Once the value is set, you can add a new filter by clicking on the "Add filter" option and configuring it in the same way. Instances that meet both conditions will be displayed.

\[VIDEO: SUBMISSION FILTER]

In addition to the standard filters shown in the image, it is possible to define more specific ones linked to the data and characteristics of each form. From the _**Build**_ application, one or more _**tags**_ can be configured to reference template fields and allow filtering submissions based on the values entered in them.

For example, if a form has a field named "Branch" with three response options, it can be defined as a _**tag**_ so that, when managing submissions, the branch filter is available, and all instances corresponding to each option can be selected without needing to open the submissions individually to identify them.

Additionally, the submissions screen displays a series of common data for all forms, allowing us to identify them and understand their status. Let’s review each of them below.

## Title

This is the name of the form, configured from the _**Build**_ application. The title can be either a fixed text string or a dynamic component referencing a specific field.

Except for tables, which gather a series of specific properties, you can use any field as the source for the _**Title**_ element, referencing the _**Name**_ property. The data entered in that field will be displayed as the title for the instance.

If no title is defined, a dashed line will appear in the list.

## Creation Date and Last Saved

These data refer, respectively, to the date and time when the form instance was created and the date and time when changes were last saved.

## Process Status

This is a free text field that can be entered once the form has been submitted and can continue to be updated to reflect the process's status and progress (if no information is available, a dashed line will appear).

Although there are no restrictions on this text, it is recommended to establish certain uniform criteria to facilitate identifying the stage it is in, for example:

* _Started:_ form submitted and in processing.
* _Completed:_ process successfully finished.
* _Finalized:_ process finished with an error.

The configuration of these messages is done through a connector that can be used via the API, as we previously saw with BluePrism, [using the _**Set Form Instance Process Info**_ action](../../../blueprism/conexion-con-blueprism/otras-acciones/acciones-vinculadas-a-instancias.md#set-form-instance-process-info), within the _**status**_ parameter.

## Last Update

This data indicates the date and time of the last change in the processing status of the submission, for example, when it has been finalized. If no updates have occurred and, therefore, no information is available to display, a dashed line will also appear.

Like the _**Process Status**_ field, this information is configured using the _**Set Form Instance Process Info**_ action, defining the _**endState**_ and _**completionMessage**_ parameters.

<table><thead><tr><th width="199">Parameter</th><th>Description</th></tr></thead><tbody><tr><td><em><strong>endState</strong></em></td><td>Refers to the final processing status with possible results of “OK” or “Error,” accompanied by checkmark or alert icons.</td></tr><tr><td><em><strong>completionMessage</strong></em></td><td>A free text message accompanying the status to provide more details. It is especially useful in case of errors to inform the user of the reasons for the result.</td></tr></tbody></table>

<figure><img src="../../../.gitbook/assets/rpa_3_9.png" alt=""><figcaption><p>Status message</p></figcaption></figure>

## Actions

The window icon allows you to open and review a saved or submitted instance, regardless of its status, while the trash icon allows you to discard a draft. Keep in mind that submitted instances can no longer be deleted.

<figure><img src="../../../.gitbook/assets/rpa_3_10.png" alt=""><figcaption><p>Actions on an instance</p></figcaption></figure>