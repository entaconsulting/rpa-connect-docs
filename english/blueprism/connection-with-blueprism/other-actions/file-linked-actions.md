# File-Linked Actions

In this section, we will analyze how to view and download the attachments of a form, as well as add and delete resources assigned to a specific form instance.

## **Get Attachments / Download Attachment**

These actions are closely related, as the first allows listing all the attachments in the fields of a specific instance, and the second allows downloading all the files from the obtained list.

Let's look at the properties of the _**Get Attachments**_ action:

<table><thead><tr><th width="167">Parameters</th><th width="104">Direction</th><th width="127">Data Type</th><th>Description</th></tr></thead><tbody><tr><td><strong>formInstanceId</strong></td><td>In</td><td>Text</td><td>ID of the form instance</td></tr><tr><td><strong>stageIndex</strong></td><td>In</td><td>Number</td><td>Stage from which the attachments are obtained</td></tr><tr><td><strong>Attachments</strong></td><td>Out</td><td>Collection</td><td>List of URLs to download the files</td></tr></tbody></table>

On the other hand, the _**Download Attachment**_ action includes the following parameters:

<table><thead><tr><th width="171">Parameters</th><th width="102">Direction</th><th width="126">Data Type</th><th>Description</th></tr></thead><tbody><tr><td><strong>AttachmentURL</strong></td><td>In</td><td>Text</td><td>URL from which to download the file</td></tr><tr><td><strong>Path</strong></td><td>In</td><td>Number</td><td>Path where the downloaded file will be saved</td></tr></tbody></table>

## **Upload FormInstance Resource / Delete FormInstance Resource**

These actions allow, respectively, adding and deleting a resource from a form instance. The type of resources managed through this method are not included in the form design but are added as external links with downloadable material:

<figure><img src="../../../.gitbook/assets/uso_de_resource.png" alt=""><figcaption></figcaption></figure>

The properties to define when uploading a new resource are:

<table><thead><tr><th width="171">Parameters</th><th width="102">Direction</th><th width="126">Data Type</th><th>Description</th></tr></thead><tbody><tr><td><strong>formInstanceId</strong></td><td>In</td><td>Text</td><td>URL from which to download the file</td></tr><tr><td><strong>Path</strong></td><td>In</td><td>Number</td><td>Path where the file will be attached</td></tr></tbody></table>

To delete it, however, the following must be set:

<table><thead><tr><th width="171">Parameters</th><th width="102">Direction</th><th width="126">Data Type</th><th>Description</th></tr></thead><tbody><tr><td><strong>formInstanceId</strong></td><td>In</td><td>Text</td><td>URL from which to download the file</td></tr><tr><td><strong>ResourceName</strong></td><td>In</td><td>Text</td><td>Name of the resource whose attachment is to be deleted</td></tr></tbody></table>