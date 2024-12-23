# Actions Linked to Stages

As we saw earlier, workflows are traversed through a series of steps consisting of different forms that must be completed in an orderly manner. Let's take a closer look at the actions associated with configuring their functionality:

## Create Stage

Allows you to create a Stage using the following parameters:

<table><thead><tr><th width="217">Parameters</th><th width="104">Direction</th><th width="127">Data Type</th><th>Description</th></tr></thead><tbody><tr><td><strong>formInstanceId</strong></td><td>In</td><td>Text</td><td>ID of the form instance</td></tr><tr><td><strong>initialValues</strong></td><td>In</td><td>Text</td><td>JSON object of initial values to load into the Stage</td></tr><tr><td><strong>notificationMessage</strong></td><td>In</td><td>Text</td><td>Message sent to users using Teams when the Stage is assigned</td></tr><tr><td><strong>userOrGroupAssigned</strong></td><td>In</td><td>Text</td><td>User or group assigned to this instance, defined through a user's email or a Connect group ID</td></tr><tr><td><strong>state</strong></td><td>In</td><td>Text</td><td>Collection containing all previous data of the form instance</td></tr></tbody></table>

## **Get Stage Response**

Returns the response of a Stage from a form instance.

<table><thead><tr><th width="176">Parameters</th><th width="102">Direction</th><th width="126">Data Type</th><th>Description</th></tr></thead><tbody><tr><td><strong>formInstanceId</strong></td><td>In</td><td>Text</td><td>ID of the form instance</td></tr><tr><td><strong>index</strong></td><td>In</td><td>Number</td><td>Stage from which attachments are obtained</td></tr><tr><td><strong>formDefinitionID</strong></td><td>Out</td><td>Text</td><td>ID of the template to which the instance belongs</td></tr><tr><td><strong>formInstanceId</strong></td><td>Out</td><td>Text</td><td>ID of the form instance, as it will be included in the final output</td></tr><tr><td><strong>id</strong></td><td>Out</td><td>Text</td><td>ID of the Stage</td></tr><tr><td><strong>lastSaved</strong></td><td>Out</td><td>Text</td><td>Date and time of the last save of the Stage</td></tr><tr><td><strong>values</strong></td><td>Out</td><td>Collection</td><td>Values entered in the Stage</td></tr><tr><td><strong>state</strong></td><td>Out</td><td>Text</td><td>State of the Stage in the form instance</td></tr><tr><td><strong>stageName</strong></td><td>Out</td><td>Text</td><td>Name of the Stage</td></tr><tr><td><strong>Response</strong></td><td>Out</td><td>Collection</td><td>Collection containing all the above data</td></tr></tbody></table>

## Update Stage

Allows you to update a pre-existing Stage of a form instance with the following parameters:

<table><thead><tr><th width="214">Parameters</th><th width="102">Direction</th><th width="126">Data Type</th><th>Description</th></tr></thead><tbody><tr><td><strong>formInstanceId</strong></td><td>In</td><td>Text</td><td>ID of the form instance</td></tr><tr><td><strong>initialValues</strong></td><td>In</td><td>Text</td><td>JSON object of initial values to load into the Stage</td></tr><tr><td><strong>notificationMessage</strong></td><td>In</td><td>Text</td><td>Message sent to users using Teams when the Stage is assigned</td></tr><tr><td><strong>userOrGroupAssigned</strong></td><td>In</td><td>Text</td><td>User or group assigned to this instance, defined through a user's email or a Connect group ID</td></tr><tr><td><strong>index</strong></td><td>In</td><td>Number</td><td>Stage to be updated</td></tr><tr><td><strong>resetValues</strong></td><td>In</td><td>Flag</td><td>Discards previously entered values</td></tr></tbody></table>