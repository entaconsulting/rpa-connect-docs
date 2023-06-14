---
description: >-
  A text field in RPA Forms is an element where text can be entered freely,
  regardless of its content. This field should be assigned a name that will be
  used for referencing it in the future.
layout: editorial
---

# Use a Workflow

## Required Field

By using the "_required_" property, it is indicated that this field must be completed in order to submit the form.

{% tabs %}
{% tab title="Visual Editor" %}

{% endtab %}

{% tab title="Code Editor" %}
{% code title="Schema" %}
```json
{
    "FieldText": {
        "type": "text",
        "required": true
    }
}
```
{% endcode %}

{% code title="Layout" %}
```json
{
    "elements": [
        {
            "type": "field",
            "name": "FieldText"
        }
    ]
}
```
{% endcode %}
{% endtab %}
{% endtabs %}



## Read-only Field

If a field needs to have a fixed value that cannot be modified by the user, it can be configured using the "_readOnly_" property, which accepts the values true or false.

## Field with Length Restrictions

To work with these properties, there are different attributes available:

* "_length_": specifies the exact length that the field should have to be considered an acceptable value.
* "_min_": sets the minimum number of characters required for the field to be considered an acceptable value.
* "_max_": sets the maximum number of characters allowed for the field to be considered an acceptable value.

## Field with Set of Accepted Values

If a text field can only have a specific set of valid data, the "_whitelist_" property can be used. It accepts an array of allowed texts. If a value is entered that is not in this list, a validation will be triggered, indicating the valid options.

## Field with Set of Rejected Values

Following the same logic as the previous point, the "_blacklist_" property can be used to list a group of data that cannot be entered.

## Field with Mask

The field can be configured to accept values only in a specific format by using a mask. This can be done using the "_inputMask_" property.

## Field with Regular Expressions

Another way to perform validations is by using Regular Expressions or RegEx. This can be done using the "_matches_" attribute, which takes the desired regular expression and the message to be displayed if the expression is not met.

## Field with Advanced Validations

&#x20;
