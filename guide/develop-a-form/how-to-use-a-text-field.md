---
description: >-
  A text fielD is an element where text can be entered freely, regardless of its
  content. This field should be assigned a name that will be used for
  referencing it in the future.
---

# How to use a text field

{% tabs %}
{% tab title="Visual Editor" %}

{% endtab %}

{% tab title="Code Editor" %}
<pre class="language-json" data-title="Schema"><code class="lang-json">{
<strong>	"employeeName": {
</strong><strong>		"type": "text",
</strong>	}
}
</code></pre>

<pre class="language-json" data-title="Layout"><code class="lang-json">{
	"elements": [
		{
<strong>			"type": "field",
</strong><strong>			"name": "employeeName"
</strong>		}
	]
}
</code></pre>
{% endtab %}
{% endtabs %}

## Required Field

By using the "_required_" property, it is indicated that this field must be completed in order to submit the form.



{% tabs %}
{% tab title="Visual Editor" %}

{% endtab %}

{% tab title="Code Editor" %}
<pre class="language-json" data-title="Schema"><code class="lang-json">{
	"employeeName": {
		"type": "text",
<strong>		"required": true
</strong>	}
}
</code></pre>
{% endtab %}
{% endtabs %}

## Read-only Field

If a field needs to have a fixed value that cannot be modified by the user, it can be configured using the "_readOnly_" property, which accepts a boolean value or a boolean expression.

{% tabs %}
{% tab title="Visual Editor" %}

{% endtab %}

{% tab title="Code Editor" %}
### Boolean Value

<pre class="language-json" data-title="Layout"><code class="lang-json">{
	"elements": [
		{
			"type": "field",
			"name": "employeeName",
<strong>			"readonly": true
</strong>		}
	]
}
</code></pre>

### Boolean Expression

<pre data-title="Schema"><code>{
	"isVisible": {
<strong>		"type": "boolean",
</strong>	},
	"employeeName": {
		"type": "text",
	}
}
</code></pre>

<pre data-title="Layout"><code>{
	"elements": [
		{
			"type": "field",
			"name": "employeeName",
<strong>			"readonly": "isVisible"
</strong>		}
	]
}
</code></pre>
{% endtab %}
{% endtabs %}

## Validations

### Field with Length Restrictions

To work with these properties, there are different attributes available:

* "_length_": specifies the exact length that the field should have to be considered an acceptable value.
* "_min_": sets the minimum number of characters required for the field to be considered an acceptable value.
* "_max_": sets the maximum number of characters allowed for the field to be considered an acceptable value.

{% tabs %}
{% tab title="Visual Editor" %}

{% endtab %}

{% tab title="Code Editor" %}
<pre class="language-json" data-title="Schema"><code class="lang-json">{
	"employeeName": {
		"type": "text",
<strong>		"min": 1,
</strong><strong>		"max": 20
</strong>	}
}
</code></pre>
{% endtab %}
{% endtabs %}

### Field with Set of Accepted Values

If a text field can only have a specific set of valid data, the "_whitelist_" property can be used. It accepts an array of allowed texts. If a value is entered that is not in this list, a validation will be triggered, indicating the valid options.

{% tabs %}
{% tab title="Visual Editor" %}

{% endtab %}

{% tab title="Code Editor" %}
{% code title="Schema" %}
```json
{
	"employeeName": {
		"type": "text",
			"whitelist": [
				"John Doe"
			]
		}

}
```
{% endcode %}
{% endtab %}
{% endtabs %}

### Field with Set of Rejected Values

Following the same logic as the previous point, the "_blacklist_" property can be used to list a group of data that cannot be entered.

{% tabs %}
{% tab title="Visual Editor" %}

{% endtab %}

{% tab title="Code Editor" %}
{% code title="Schema" %}
```json
{
	"employeeName": {
		"type": "text",
			"blacklist": [
				"John Doe"
			]
		}

}
```
{% endcode %}
{% endtab %}
{% endtabs %}

### Field with Mask

The field can be configured to accept values only in a specific format by using a mask. This can be done using the "_inputMask_" property.

{% tabs %}
{% tab title="Visual Editor" %}

{% endtab %}

{% tab title="Code Editor" %}
"_inputMask"_ defines ....

{% code title="Schema" %}
```
"employeeName": {
      "type": "text",
      "inputMask" : ""
}
```
{% endcode %}

other way of defining a mask is using "_charOptions" which_ defines placeholders as Regular Expressions and "_mask_" defines the format in function of the placeholder.

{% code title="Schema" %}
```json
"employeeName": {
      "type": "text",
      "inputMask" : {
            "charOptions": {
                  "A": "[A-Z]"
            },
            "mask": "AAAA"
       }
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

### Field with Regular Expressions

Another way to perform validations is by using Regular Expressions or RegEx. This can be done using the "_matches_" attribute, which takes the desired regular expression and the message to be displayed if the expression is not met.

## Advanced Validations

&#x20;
