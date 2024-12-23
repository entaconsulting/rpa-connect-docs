# Advanced Validations

The _**Validation Expressions**_ section allows you to configure data logic validations, which are especially efficient for verifying that the value entered by the user in each field matches the expected data type. Its functionality consists of checking whether a specific condition is met.

<figure><img src="../../../.gitbook/assets/rpa4_1.png" alt=""><figcaption><p><em><strong>Validation Expressions</strong></em> section</p></figcaption></figure>

If the condition is met and the result is true, an error message is displayed, and the user cannot submit the form until it is corrected. If the condition is false, no action will be taken, and the user can proceed with the process.

These types of validations can refer to the data entered in the field where they are defined (e.g., checking if it meets a specific length), in another field (e.g., showing an error in the "Quantity" field if the "Product" field is invalid), or by comparing data between two fields (e.g., checking if the start date for a given period is later than the end date).

<figure><img src="../../../.gitbook/assets/rpa4_2.png" alt=""><figcaption><p>Example of an error message when the entered expression is validated</p></figcaption></figure>

Each expression consists of two values:

<table><thead><tr><th width="131">Value</th><th>Description</th></tr></thead><tbody><tr><td>Message</td><td>The text to be displayed to the user to warn of the error when the validated condition is met, preventing the form from being submitted</td></tr><tr><td>Expression</td><td>The associated formula that will execute the validation for which the message is displayed</td></tr></tbody></table>

<figure><img src="../../../.gitbook/assets/rpa4_3.png" alt=""><figcaption><p>Details of message and expression</p></figcaption></figure>

The _**Add Expression**_ option in the top-right corner of the section allows you to include additional functions, enabling new fields for messages and expressions. This is useful for validating multiple conditions within the same field, such as ensuring a date falls within a specific period, is more recent than the date in another field, and is different from a third field. Applying multiple formulas with specific criteria allows for more precise control over the type of data accepted, helping to reduce the margin of error.

<figure><img src="../../../.gitbook/assets/rpa4_4.png" alt=""><figcaption><p>Configuring multiple expressions for the same field with <em><strong>Add Expression</strong></em></p></figcaption></figure>

Below, we will analyze the following expressions in detail:

<table><thead><tr><th width="273">Function</th><th width="187">Validation Type</th><th>Result</th></tr></thead><tbody><tr><td>isEmpty(Field)</td><td>Content Validation</td><td>Returns <em><strong>true</strong></em> (error message) if a field is empty</td></tr><tr><td>count(Table)==0</td><td>Content Validation</td><td>Returns <em><strong>true</strong></em> if the rows in a table are empty</td></tr><tr><td>sum(Table,Column)!=N</td><td>Content Validation</td><td>Returns <em><strong>true</strong></em> if the total of a column is different from the allowed value</td></tr><tr><td>dateDifferenceInBusinessDays(Date1,Date2)&#x3C;=N</td><td>Content Validation</td><td>Returns <em><strong>true</strong></em> if the number of business days is less than the rule allows</td></tr><tr><td>equal(Field1,Field2)</td><td>Comparison Validation</td><td>Returns <em><strong>true</strong></em> if two fields have the same value</td></tr><tr><td>smaller(Date1,Date2)</td><td>Comparison Validation</td><td>Returns <em><strong>true</strong></em> if the first date is earlier than the second</td></tr><tr><td>larger(Date1,Date2)</td><td>Comparison Validation</td><td>Returns <em><strong>true</strong></em> if the first date is later than the second</td></tr><tr><td>smallerEq(Date1,Date2)</td><td>Comparison Validation</td><td>Returns <em><strong>true</strong></em> if the first date is earlier than or equal to the second</td></tr><tr><td>largerEq(Date1,Date2)</td><td>Comparison Validation</td><td>Returns <em><strong>true</strong></em> if the first date is later than or equal to the second</td></tr><tr><td>not(Field)</td><td>Logical Operator Validation</td><td>Returns <em><strong>true</strong></em> if the field has a negative result</td></tr><tr><td>not(Expression)</td><td>Logical Operator Validation</td><td>Returns <em><strong>true</strong></em> if the expression has a negative result</td></tr><tr><td>and(Expression1,Expression2)</td><td>Logical Operator Validation</td><td>Returns <em><strong>true</strong></em> if both expressions are true</td></tr><tr><td>or(Expression1,Expression2)</td><td>Logical Operator Validation</td><td>Returns <em><strong>true</strong></em> if one of the two expressions is true</td></tr><tr><td>ConditionalExpression?TrueConditionExpression:FalseConditionExpression</td><td>Ternary Operator Validation</td><td>Returns the result of a second expression depending on whether the first condition is met</td></tr></tbody></table>

Keep in mind that formula components are enclosed in parentheses. The editor will display an error message if the number of open parentheses in the formula does not match the number of closed parentheses, helping you identify inconsistencies in more complex functions.

<figure><img src="../../../.gitbook/assets/rpa4_5.png" alt=""><figcaption><p>Alert for an error in the expression structure</p></figcaption></figure>

## Content Validations

Certain formulas allow us to evaluate the validity of data based on whether the values entered meet specific characteristics established for that field, such as ensuring it is not blank or does not exceed certain limits. Let’s explore some of these and their functionality below.

### Validation of Blank Fields

As we saw earlier, validation expressions allow us to enhance certain functionalities of our form, such as configuring required fields. Below, we will use the _**isEmpty()**_ expression to define a field as mandatory and display a custom error message when the user attempts to submit it blank.

Select the "Last Name and First Name" field and set the _**Required**_ property to _**False**_ to disable it. Then, go to the _**Validation Expressions**_ section.

<figure><img src="../../../.gitbook/assets/rpa4_6.png" alt=""><figcaption><p>Modifying the <em><strong>Required</strong></em> property</p></figcaption></figure>

In the _**Message**_ field, write the text that will be displayed to the user if they do not complete the field, for example: "You must enter your first and last name."

Next, you will need to set the formula that controls this condition. Click the _**fx**_ icon on the far right of the _**Expression**_ field to open the editor and enter the formula:

> isEmpty(last_name_first_name)

<figure><img src="../../../.gitbook/assets/rpa4_7.png" alt=""><figcaption><p><em><strong>Edit Expression</strong></em> option</p></figcaption></figure>

Whenever you add an expression, make sure to verify that the field names are written correctly, respecting uppercase and lowercase letters. The editor will display a warning if a field name is not present in the schema when an undeclared value is entered, but it cannot detect if you have written the name of another existing field instead.

Once you have added the expression, click _**Confirm**_ to finish. If the condition is met, meaning the "Last Name and First Name" field is blank, the function will return the value _**true**_ and display the message "You must enter your first and last name," preventing the user from submitting the form until this data is entered. Conversely, if the condition is not met because the field is complete, it will return the value _**false**_, and the user will be able to submit the form successfully.

{% embed url="https://youtu.be/ydmlaTGgBNQ" %}

This type of validation can also be applied to tables to verify if rows are loaded or to _**Attachment**_ fields to check if a file has been attached. If no information is present, the formula will return the value _**true**_ and display an error message.

<figure><img src="../../../.gitbook/assets/rpa4_8.png" alt=""><figcaption><p>Applying the <em><strong>isEmpty()</strong></em> function to an <em><strong>Attachment</strong></em> field</p></figcaption></figure>

### Validation of Blank Fields in a Table

The _**count()**_ formula is useful for counting the number of characters entered in a field and, when applied to a table, allows you to count the number of complete rows. To build a validation expression using this function, you can add an operator to return an error if the total equals zero.

> count(Table)==0

<figure><img src="../../../.gitbook/assets/rpa4_9.png" alt=""><figcaption><p>Content validation in a table</p></figcaption></figure>

Other simple operators can also be used to validate that the count is within the allowed limits:

<table><thead><tr><th width="123">Operator</th><th width="184">Example</th><th>Validation</th></tr></thead><tbody><tr><td>==</td><td>count(Table)==0</td><td>Returns <em><strong>true</strong></em> (error) if the total equals zero</td></tr><tr><td>!=</td><td>count(Table)!=100</td><td>Returns <em><strong>true</strong></em> if the total is not equal to 100</td></tr><tr><td>></td><td>count(Table)>100</td><td>Returns <em><strong>true</strong></em> if the total is greater than 100</td></tr><tr><td>&#x3C;</td><td>count(Table)&#x3C;10</td><td>Returns <em><strong>true</strong></em> if the total is less than 10</td></tr></tbody></table>

### Validation of Column Totals in a Table

The _**sum()**_ function adds all the numbers within the range of a column to calculate a total. By adding operators to this function, it can be turned into a validation expression that compares the total against a preset number and returns an error when the entered data does not match the expected value. For example, in a sales table where the "percentage" column represents the portion of revenue for each product type, the sum of each cell should total 100.

The following function will detect if the total is different from 100 and display an error message if this condition is met:

> sum(SalesTable,PercentageColumn)!=100

### Validation of Business Days Between Two Dates

The _**dateDifferenceInBusinessDays()**_ function calculates the total number of business days (Monday through Friday) between two dates. Similar to _**count()**_, adding an operator to the calculation allows it to be compared against a minimum or maximum value. For example:

> dateDifferenceInBusinessDays(RequestDate,DeliveryDate)<=5

This formula will count the days between the request date and the delivery date, excluding weekends, and display an error message if the condition is true, i.e., if the period between the two dates is less than or equal to 5 days.

<figure><img src="../../../.gitbook/assets/rpa4_10.png" alt=""><figcaption><p>Validation of the elapsed period between two dates</p></figcaption></figure>

## Validation of Field Comparisons

Other highly useful expressions are those that allow you to compare data entered in different fields in terms of similarity or difference between their values.

### Validation of Identical Values

The _**equal()**_ function checks both values (whether text, numbers, or dates) and returns _**true**_ if they are identical, displaying an error message and preventing the instance from being submitted.

Using the form you’ve designed as a base, create a new _**Number**_ field with the _**label**_ "Mobile Phone" and the name "mobile_phone" in the "Contact Information" section.

To ensure that the number entered in this field is different from the one entered in the "Phone" field, you can use this validation expression. Click the _**fx**_ icon on the far right of the _**Expression**_ field and write the formula:

> equal(phone,mobile_phone)

Next, press _**Confirm**_. If this condition is met, an alert will be displayed, which we will define in the _**Message**_ field, for example: "The landline and mobile phone numbers cannot be the same."

<figure><img src="../../../.gitbook/assets/rpa4_11.png" alt=""><figcaption></figcaption></figure>

A simpler alternative to this function can be constructed using operators for the comparison. For example, if you replace the _**equal()**_ formula from the previous example with the expression _**phone==mobile_phone**_, the same validation will be performed, and you will get the same results.

<figure><img src="../../../.gitbook/assets/rpa4_12.png" alt=""><figcaption><p>Alternative to the <em><strong>equal()</strong></em> expression using operators</p></figcaption></figure>

Let’s look at the different types of operators you can use to compare data from two fields, along with an example of each and the action:

<table><thead><tr><th width="123">Operator</th><th width="184">Expression</th><th width="242">Example</th><th>Validation</th></tr></thead><tbody><tr><td>==</td><td>Field1==Field2</td><td>FirstName==LastName</td><td>Checks if the fields are equal</td></tr><tr><td>!=</td><td>Field1!=Field2</td><td>Email!=ConfirmEmail</td><td>Checks if the fields are different</td></tr><tr><td>></td><td>Field1>Field2</td><td>UnitsSold>Stock</td><td>Checks if the first field is greater than the second</td></tr><tr><td>&#x3C;</td><td>Field1&#x3C;Field2</td><td>Quantity&#x3C;MinimumQuantity</td><td>Checks if the first field is less than the second</td></tr></tbody></table>

You can also combine the _greater than_ (**>**) and _less than_ (**<**) operators with the _equal_ (**=**) operator for more specific results, e.g., _**RecommendedQuantity>=MaximumQuantity**_. In all these cases, meeting the condition will return the value _**true**_ and display the error message entered in the _**Message**_ property.

### Date Validation

The _**smaller()**_ function allows you to compare the dates entered in two fields and return an error message if the first is earlier than the second, for example, "The end date cannot be earlier than the start date." Its structure is as follows:

> smaller(StartDate,EndDate)

<figure><img src="../../../.gitbook/assets/rpa4_13.png" alt=""><figcaption><p>Comparison between dates using the <em><strong>smaller()</strong></em> function</p></figcaption></figure>

Conversely, the _**larger()**_ function checks if the first date is later than the second and returns an error message if this condition is met. Its structure is shown below:

> larger(EndDate,StartDate)

<figure><img src="../../../.gitbook/assets/rpa4_14.png" alt=""><figcaption><p>Comparison between dates using the <em><strong>larger()</strong></em> function</p></figcaption></figure>

There are variations for both expressions that also return an error message if the two dates are identical, i.e., applying the functionality of _**equal()**_. To do this, we need to modify the arguments of these functions as follows:

* _**smallerEq (Date1,Date2)**_: checks that the first date is earlier than or equal to the second
* _**largerEq (Date1,Date2)**_: checks that the first date is later than or equal to the second

<figure><img src="../../../.gitbook/assets/rpa4_15.png" alt=""><figcaption><p>Applying the <em><strong>largerEq()</strong></em> expression</p></figcaption></figure>

These functions can also be used to compare other types of values, such as numbers or text strings.

## Logical Operator Validation

Expressions based on _**AND**_, _**OR**_, and _**NOT**_ operators allow validations based on the fulfillment of certain _true/false_ conditions, either in the value of a field or expression (in the case of _**NOT**_) or in the result of two expressions applied to a field (_**AND**_ and _**OR**_). Let’s explore each of these logical validations in detail.

### NOT Operator

The _**not()**_ function returns _**true**_ if the field has a negative value and is typically used for boolean fields, which act as a toggle that can be activated or deactivated based on a binary _yes/no_ logic. We will explore this type of field in more detail later [in this section](../../desarrollo-integral-de-un-formulario/campos-de-seleccion-de-opciones.md).

If the boolean is deactivated, i.e., if the response is negative, the expression will return an error message. For example, it can be applied to a boolean field named "Confirmation" to display an error message "You must accept the terms and conditions to continue" if the following expression returns _**true**_:

> not(Confirmation)

<figure><img src="../../../.gitbook/assets/rpa4_16.png" alt=""><figcaption><p>Validation of a boolean field</p></figcaption></figure>

More complex validations can also be performed by applying the _**not()**_ expression to the evaluation of other functions, for example:

> not(equal(Field1,Field2))

If the condition that fields 1 and 2 are equal is not met, an error message will be displayed. Remember that the editor will display an error message if the number of open parentheses in the formula does not match the number of closed parentheses.

<figure><img src="../../../.gitbook/assets/rpa4_17.png" alt=""><figcaption><p>Checking for differences between values</p></figcaption></figure>

### AND Operator

With the _**and()**_ expression, you can check the simultaneous fulfillment of two different expressions and display an error message when this occurs (i.e., when both return _**true**_), using the following logical check:

<table><thead><tr><th width="207">Expression1 Result</th><th width="192">Expression2 Result</th><th>Result of and(Expression1,Expression2)</th></tr></thead><tbody><tr><td>false</td><td>false</td><td>false</td></tr><tr><td>true</td><td>false</td><td>false</td></tr><tr><td>false</td><td>true</td><td>false</td></tr><tr><td>true</td><td>true</td><td>true</td></tr></tbody></table>

For example, if you have a form with two boolean fields where at least one must be activated, such as requesting a physical receipt or a virtual receipt, the _**and()**_ function can be applied to display an error if both checkboxes are deactivated.

> and(not(PhysicalReceipt),not(VirtualReceipt))

{% embed url="https://youtu.be/4cUxGGoN0qo" %}

Let’s analyze how this expression works:

<table><thead><tr><th width="212">Expression1 Result</th><th width="194">Expression2 Result</th><th>Result of and(Expression1,Expression2)</th></tr></thead><tbody><tr><td>false: The user has requested a physical receipt</td><td>false: The user has requested a virtual receipt</td><td>false: No error message is displayed, as neither condition is met</td></tr><tr><td>true: The user has not requested a physical receipt</td><td>false: The user has requested a virtual receipt</td><td>false: No error message is displayed, as only one condition is met</td></tr><tr><td>false: The user has requested a physical receipt</td><td>true: The user has not requested a virtual receipt</td><td>false: No error message is displayed, as only one condition is met</td></tr><tr><td>true: The user has not requested a physical receipt</td><td>true: The user has not requested a virtual receipt</td><td>true: The error message is displayed because both conditions are met</td></tr></tbody></table>

More complex structures can be built for this type of validation by nesting other formulas with the _**AND**_ operator within the field function to control a greater number of expressions:

> and(Expression1,and(Expression1,Expression2))

In this way, the evaluation of expression 1 will return a _**true**_ or _**false**_ value that will be compared with the total _**true**_ or _**false**_ value returned by the second _**and()**_ function when checking expressions 2 and 3. These functions can continue to be nested as long as the same structure is maintained.

### OR Operator

The _**or()**_ expression allows you to verify that at least one of two expressions is met and display an error message unless both return _**false**_, using this logical check:

<table><thead><tr><th width="202">Expression1 Result</th><th width="199">Expression2 Result</th><th>Result of or(Expression1,Expression2)</th></tr></thead><tbody><tr><td>false</td><td>false</td><td>false</td></tr><tr><td>true</td><td>false</td><td>true</td></tr><tr><td>false</td><td>true</td><td>true</td></tr><tr><td>true</td><td>true</td><td>true</td></tr></tbody></table