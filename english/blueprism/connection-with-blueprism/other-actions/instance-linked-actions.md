# Actions Linked to Instances

Below, we will delve into a series of actions that allow us to understand the state of a form instance, the token assigned to it, the response values obtained, among other aspects.

## **Get Form Instance State**

Returns the state of a form instance, indicating whether it is in draft or confirmed status. It includes the following parameters:

<table><thead><tr><th width="165">Parameters</th><th width="102">Direction</th><th width="126">Data Type</th><th>Description</th></tr></thead><tbody><tr><td><strong>formInstanceId</strong></td><td>In</td><td>Text</td><td>ID of the form instance</td></tr><tr><td><strong>state</strong></td><td>Out</td><td>Text</td><td>State of the form instance</td></tr><tr><td><strong>lastSaved</strong></td><td>Out</td><td>Text</td><td>Date and time of the last save</td></tr><tr><td><strong>Response</strong></td><td>Out</td><td>Collection</td><td>Collection containing all the above data of the form instance</td></tr></tbody></table>

## **Get Form Instance Response**

Includes the properties of _**Get Form Instance State**_ but also allows collecting the data entered in a form instance, displaying them as values. Its properties are as follows:

<table><thead><tr><th width="180">Parameters</th><th width="102">Direction</th><th width="126">Data Type</th><th>Description</th></tr></thead><tbody><tr><td><strong>formInstanceId</strong></td><td>In</td><td>Text</td><td>ID of the form instance</td></tr><tr><td><strong>formDefinitionID</strong></td><td>Out</td><td>Text</td><td>ID of the template to which the instance belongs</td></tr><tr><td><strong>formInstanceId</strong></td><td>Out</td><td>Text</td><td>ID of the form instance, as it will be included in the final output</td></tr><tr><td><strong>lastSaved</strong></td><td>Out</td><td>Text</td><td>Date and time of the last save</td></tr><tr><td><strong>state</strong></td><td>Out</td><td>Text</td><td>State of the form instance</td></tr><tr><td><strong>values</strong></td><td>Out</td><td>Collection</td><td>Values entered in the form instance</td></tr><tr><td><strong>Response</strong></td><td>Out</td><td>Collection</td><td>Collection containing all the above data of the form instance</td></tr></tbody></table>

## **Get Form Instance Token**

Allows generating a new public token for a form instance (e.g., because it has expired) by defining the following parameters:

<table><thead><tr><th width="184">Parameters</th><th width="102">Direction</th><th width="126">Data Type</th><th>Description</th></tr></thead><tbody><tr><td><strong>formInstanceId</strong></td><td>In</td><td>Text</td><td>ID of the form instance</td></tr><tr><td><strong>expiresAt</strong></td><td>In</td><td>Date and Time</td><td>Expiration date of the token</td></tr><tr><td><strong>formInstanceId</strong></td><td>Out</td><td>Text</td><td>ID of the form instance, as it will be included in the final output</td></tr><tr><td><strong>sharedFormToken</strong></td><td>Out</td><td>Text</td><td>Token that allows viewing and modifying the generated instance</td></tr><tr><td><strong>URL</strong></td><td>Out</td><td>Text</td><td>Accessible URL formed by the base URL and the token</td></tr><tr><td><strong>Response</strong></td><td>Out</td><td>Collection</td><td>Collection containing all the above data of the form instance</td></tr></tbody></table>

## **Set Form Instance Process Info**

Allows users of the portal or the Teams application to review the status of the forms they have submitted, which is reflected in the "Process Status" and "Completed" columns.

<figure><img src="../../../.gitbook/assets/rpa_blueprism_11.png" alt=""><figcaption><p>Form status visualization in the Portal</p></figcaption></figure>

This action is configured with the following parameters:

<table><thead><tr><th width="201">Parameters</th><th width="102">Direction</th><th width="126">Data Type</th><th>Description</th></tr></thead><tbody><tr><td><strong>formInstanceId</strong></td><td>In</td><td>Text</td><td>ID of the form instance</td></tr><tr><td><strong>status</strong></td><td>In</td><td>Text</td><td>Processing status of the instance to be displayed to the user</td></tr><tr><td><strong>endState</strong></td><td>In</td><td>Text</td><td>Final processing status, with options "OK" or "Error"</td></tr><tr><td><strong>completionMessage</strong></td><td>In</td><td>Text</td><td>Message specifying the conditions under which the instance was completed</td></tr></tbody></table>

## **Delete Form Instance**

Allows deleting a form instance. Its main properties are:

<table><thead><tr><th width="201">Parameters</th><th width="102">Direction</th><th width="126">Data Type</th><th>Description</th></tr></thead><tbody><tr><td><strong>formInstanceId</strong></td><td>In</td><td>Text</td><td>ID of the form instance</td></tr><tr><td><strong>force</strong></td><td>In</td><td>Flag</td><td>Forces the deletion of an instance</td></tr></tbody></table>