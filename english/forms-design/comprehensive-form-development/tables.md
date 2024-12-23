# Tables

Tables are a highly functional and useful tool for creating forms. In addition to offering configuration options for permissions and sorting to facilitate both data entry and processing, they also allow you to adapt the column types to restrict and specify what type of data will be accepted in each case, just as with individual fields.

<figure><img src="../../.gitbook/assets/RPA_2_27.png" alt=""><figcaption><p>Selection of the <em><strong>Table</strong></em> form element</p></figcaption></figure>

As we saw earlier, there are tools with a series of unique properties for their type. Let’s look at each of the features you can configure when working with tables:

## Table Properties

### Table Columns

In this section, you can create the columns you need using the _**Add column**_ button, as well as hide or show them (eye-shaped icon) and delete them (trash can icon). It is important at this point to define what data you expect to collect so that the entered information is complete, as users will not be able to add new columns or remove existing ones.

<figure><img src="../../.gitbook/assets/RPA_2_28.png" alt=""><figcaption><p><em><strong>Table Columns</strong></em> section with options to add, hide, and delete columns</p></figcaption></figure>

### Validations

This property behaves similarly across all fields, although in this case, you can set the minimum (e.g., 1) and maximum (e.g., 10) number of rows allowed.

<figure><img src="../../.gitbook/assets/RPA_2_29.png" alt=""><figcaption><p>Validation properties for tables</p></figcaption></figure>

### Behavior

In addition to the _**Readonly**_ and _**Visibility**_ options, this section includes a series of checkboxes you can select to allow actions or grant permissions to the user. These are:

* **Show error markers:** If enabled, error indicators will be displayed when the entered data does not meet the field validations.
* **Can Add:** Allows the user to add new rows to the table.
* **Can Delete:** Allows the user to delete rows.
* **Can Sort:** Allows the user to sort the rows of a column based on a value (e.g., alphabetically by text).
* **Can Shrink:** Allows the table to adjust its size within the form based on the entered data.

<figure><img src="../../.gitbook/assets/RPA_2_30.png" alt=""><figcaption><p>Behavior properties for tables</p></figcaption></figure>

## Table Configuration

We will analyze in greater detail how this type of element works by adding a new section and incorporating a full-width table. We will define the _**Label**_ as “Order History” and the _**Name**_ as “order\_history.” In the _**Validations**_ section, set the minimum number of rows to 1 and the maximum to 10. In _**Behavior**_, enable the options _**Can Add**_, _**Can Delete**_, and _**Can Sort**_ so that users can add new rows, remove them, and sort the entered data.

{% embed url="https://youtu.be/yf5IBrUUsa0" %}

Next, go to the _**Table columns**_ section and add 5 columns. We will use these to allow the user to enter the type of product requested, the number of units, the order code, the request date, and the receipt.

<figure><img src="../../.gitbook/assets/RPA_2_31.png" alt=""><figcaption><p>Adding columns to a table</p></figcaption></figure>

Once you have created the columns, click on the name of the first one to start configuring it. A new panel will open with specific properties for that column. First, set the _**Name**_ to “order\_history\_product” and in the _**Type**_ section, choose the field type as _**Options**_, assuming we have a limited number of products for the user to choose from. Click _OK_ to save. Next, set the _**Label**_ to “Product” and the _**Size**_ to 3 units.

{% embed url="https://youtu.be/_nKjwpLcpdc" %}

In the options section, define the values as “Red,” “Green,” and “Blue.” Click _**Back**_ to return to the table properties.

{% embed url="https://youtu.be/RTsupoVjQak" %}

Now select the second column. Set the _**Name**_ to “order\_history\_quantity” and the field type to _**Number**_. Its _**Label**_ will be “Quantity,” and it will have a size of 2 units. Set the _**Placeholder**_ to “Requested units” and the maximum value to 100.

Return to the table properties to select the third column, which you will name “order\_history\_code,” and set the field type to _**Text**_. Its _**Label**_ will be “Order Code.” Enable real-time preview and click the "+" sign at the top of the table to add two rows.

<figure><img src="../../.gitbook/assets/RPA_2_32.png" alt=""><figcaption><p>Adding rows to a table</p></figcaption></figure>

Let’s imagine the codes are structured as follows, with the first two letters and the first three numbers always fixed: SP ZYR-30032905BC. This structure can be reproduced using the **Prefix** and **Mask** properties. Try configuring this field and then test entering the following codes:

* **Correct code:** SP ATI-30058452YT
* **Incorrect code:** SP RU-8001573PH1

The form should prevent the incorrect data from being entered. Check the parameters below that can be used for code validation:

{% embed url="https://youtu.be/v-xfq1sLh5o" %}

Set the field size to 3 units and go back to select the fourth column. Set the _**Name**_ property to “order\_history\_date” and choose the field type as _**Date**_. Its _**Label**_ will be “Request Date,” and its size will be 2 units.

Finally, go to the table properties and select the last column, which we will name “order\_history\_receipt.” Set the field type to _**Attachment**_, define its _**Label**_ as “Order Receipt,” and since we have already used 10 of the 12 total width units with the other columns, set its size to 2 units.

Once you have finished, your form should look like the following:

<figure><img src="../../.gitbook/assets/RPA_2_33.png" alt=""><figcaption><p>New fields added to the "Personal Data Update" form</p></figcaption></figure>