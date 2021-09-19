# SwButton

## Props :

Name | Type | Default value | Required | Description
--- | --- | --- | --- | ---
label | String | 'Button' | false | The label is the text in button. If props icon is set to "true", this props is the name of the icon.  See [Feather Icon Docs](https://feathericons.com/).
loading | Boolean | false | false | This props active the loader.
icon | Boolean | false | false | This props transform the label into an icon.
outlined | Boolean | false | false | This props change the style of button with a border gradient.

## Events

Name | Description
--- | ---
click | Event is emit when the button is clicked.

## Code examples

### Normal button
```html
<sw-btn label="Button" @click="functionExample" />
```

### Loading Button
```html
<sw-btn
  label="Button"
  :loading="true"
  @click="functionExample"
/>
```

### Icon button
```html
<sw-btn
  label="Button"
  icon
  @click="functionExample"
/>
```

### Outlined button
```html
<sw-btn
  label="Button"
  outlined
  @click="functionExample"
/>
```

[<- Go back to components list](../library.md)