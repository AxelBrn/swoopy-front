# SwInput

## Props :

The directive ***v-model*** is compatible with this component.

Name | Type | Default value | Required | Description
--- | --- | --- | --- | ---
modelValue | String \|\| Number | none | false | This props is the value of input.
type | String | "text" | false | This props set the type of input.
label | String | "" | false | Set the label of input.
placeholder | String | "" | false | Set the placeholder in the input.
prepend-icon | String | '' | false | Set prepend Icon with feather icon name.
rules | CallableFunction[] | [] | false | Give the rules for validate the input. (ex: ```[(v) => !!v \|\|  'The field is required']```)

## Events

Name | Description
--- | ---
update:modelValue | This event is call when user type in the input. If you use v-model this event is useless. 

## Code examples

### Input classic
```html
<sw-input
  v-model="value"
  label="label"
  placeholder="placeholder"
  :rules="[(v) => !!v || 'The field is required']"
/>
```

### Input with prepend Icon
```html
<sw-input
  v-model="value"
  label="label"
  placeholder="placeholder"
  prepend-icon="user"
  :rules="[(v) => !!v || 'The field is required']"
/>
```
[<- Go back to components list](../library.md)