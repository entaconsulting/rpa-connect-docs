# Advanced Behaviors

_**Computed Expressions**_ allow information to be automatically loaded into a field as long as a specific condition is met. Unlike validation expressions, these functions do not return a _**true**_ or _**false**_ value accompanied by an error message. Instead, they enable certain fields in the form to be auto-filled based on the data entered in another field. These functions are not executed constantly but are triggered when the form is opened and whenever a change is detected in the field on which the expression depends.

<figure><img src="../../../../.gitbook/assets/rpa4_22.png" alt=""><figcaption><p>Adding an expression in the <em><strong>Behavior</strong></em> section</p></figcaption></figure>

It is important to note that if the _**readonly**_ property is set to _**false**_, the auto-filled field will allow user modifications. However, any new information entered by the user will be lost when a change occurs in the reference field, and the result is updated on the screen. Conversely, if _**readonly**_ is set to _**true**_, the user will not be able to modify the values in this field, and they will only change when the expression is re-executed.

Let’s look at an example of this type of expression using the "Phone" field from the form you created earlier. Add a new _**Number**_ element with the _**label**_ "Contact Number" and the name "nroContacto."

<figure><img src="../../../../.gitbook/assets/rpa4_23.png" alt=""><figcaption><p>Creating a new field</p></figcaption></figure>

Go to the _**Computed Expressions**_ section within the _**Behavior**_ tab of that field and click the _**fx**_ icon on the far right to open the editor.

<figure><img src="../../../../.gitbook/assets/rpa4_24.png" alt=""><figcaption><p><em><strong>Edit Expression</strong></em> option</p></figcaption></figure>

In this case, you simply need to enter the name of the field with the "Phone" label (in this case, "tel") and click _**Confirm**_ so that the value entered there is reflected in the "Contact Number" field.

<figure><img src="../../../../.gitbook/assets/rpa4_25.png" alt=""><figcaption><p>Confirming the new expression</p></figcaption></figure>

You can test its functionality by entering data into the "Phone" field in _**Preview**_ mode.

<figure><img src="../../../../.gitbook/assets/rpa4_26.png" alt=""><figcaption><p>The "Contact Number" field will reflect the data entered in the "Phone" field</p></figcaption></figure>

It is possible to set more precise configurations by applying validation expressions to these functions. For example, we can use the _**isEmpty()**_ expression and the ternary operators we discussed earlier to set different values for "Contact Number" depending on whether the "Phone" field is empty or filled:

> isEmpty(tel)?"No contact number":tel

<figure><img src="../../../../.gitbook/assets/rpa4_28.png" alt=""><figcaption><p>isEmpty() expression within a <em><strong>Computed Expression</strong></em></p></figcaption></figure>

In this way, if the "Phone" field is empty, the first expression will return _**true**_, and the field value will be set to the text entered before the colon ("No contact number"). If "Phone" contains data, the expression will return _**false**_, and the field value will be set to the one in the last expression, i.e., the same value entered in "Phone."

<figure><img src="../../../../.gitbook/assets/rpa4_27.png" alt=""><figcaption><p>Comparison of validation functionality</p></figcaption></figure>

Another highly useful function of _**Computed Expressions**_ is performing calculations between numbers entered in the form fields. For example, with a "Quantity" field and a "Price" field, we can create a "Total" field whose content is configured by a simple expression:

> Price\*Quantity

This way, the total will be calculated without requiring the user to enter this data manually.

Using these criteria, you can create more complex expressions to automate your forms. For instance, a "Product Type" field could be automatically configured with an expression that retrieves the value of the "Product Code," or a "Country" field could auto-fill based on the value of a "Province" field. This approach saves response time and prevents incorrect or incompatible values.

Next, we will explore the different types of elements you can add to your forms and their specific characteristics. Keep in mind that in many cases, you can enhance their functionality by applying the expressions we have discussed in this section.