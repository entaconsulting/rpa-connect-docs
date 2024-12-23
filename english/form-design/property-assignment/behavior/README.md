# Behavior

The properties grouped in the _**Behavior**_ section will allow you to set more advanced configurations that regulate the field's behavior. The options you will find are:

<table><thead><tr><th width="128">Property</th><th>Function</th></tr></thead><tbody><tr><td><strong>Readonly</strong></td><td>Can be set to <em><strong>True</strong></em> to establish preloaded data that the end user cannot modify.</td></tr><tr><td><strong>Visibility</strong></td><td>Using the <strong>False</strong> value, allows certain fields to be hidden.</td></tr></tbody></table>

The _**readonly**_ and _**visibility**_ properties can also be configured using an expression that assigns them _**true**_ or _**false**_ values based on the data entered in another form field. To do this, you need to access the dropdown menu and select the _**Edit expression**_ option, located below the _**true**_ and _**false**_ options.

The editor will allow you to add an expression which, if met, will return a _**true**_ value for that property, and otherwise will return _**false**_.

The _**readonly**_ and _**visibility**_ behaviors are often accompanied by the configuration of more advanced conditions, through which it can be determined that certain fields are interdependent and are enabled or disabled based on other data. Let’s take a closer look below.