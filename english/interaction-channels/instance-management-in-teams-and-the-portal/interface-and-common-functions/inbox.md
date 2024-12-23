# Inbox

In the _**Inbox**_ tab, you can access the automated submissions of instances that have been assigned to your user. Unlike submissions, in this case, you do not need to select a specific form to view its instances; instead, you will receive all submissions that meet these conditions. For this reason, the _**Inbox**_ also functions as a history of received cases, whether they are answered or pending a response.

<figure><img src="../../../.gitbook/assets/rpa_3_11.png" alt=""><figcaption><p><em><strong>Inbox</strong></em> screen</p></figcaption></figure>

As in the _**Submissions**_ screen, the buttons in the upper left corner allow you to sort and filter the forms based on their data, with the ability to apply multiple filters simultaneously. The filters for the _**Inbox**_ are predefined, and it is not possible to add new options using _**tags**_.

<figure><img src="../../../.gitbook/assets/rpa_3_12.png" alt=""><figcaption><p>Sorting and filtering options</p></figcaption></figure>

Let’s take a closer look at each of the data points displayed on this screen.

## Form

This refers to the name of the template defined in the _**Name**_ field of the form definition we reviewed in the previous section.

<figure><img src="../../../.gitbook/assets/rpa_3_13.png" alt=""><figcaption><p>Fields in a form definition</p></figcaption></figure>

## Description

This is the title of the form, established through the _**Title**_ attribute in the _**Build**_ application. As we saw earlier, it can be either a fixed text or a dynamic one that updates based on the data entered in a specific field.

## Stage

This refers to the _**stage**_ a form is in within a workflow, meaning a sequence of steps that must be completed in order, each consisting of a form. As the user progresses through the process, and if the subsequent _**stages**_ are assigned to the same _**manager**_, new rows will be generated to display each active stage.

## Creation Date and Last Saved

These data points refer, respectively, to the date and time when the form instance was created and the date and time when changes were last saved. Draft forms may display the message "Never saved" if they have not yet been processed.

## Actions

The _**Open**_ option allows you to re-enter the form, whether it is a submission or a draft instance.