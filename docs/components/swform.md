# SwForm

## Slots :

Name | Description
--- | ---
default | The default slot.

## Validate method

This method return a boolean.

It allows you to know if all the inputs are valid.

### How to use ?

Set ***ref*** directive in your form :

*Example :*
```html
<sw-form ref="form">
  <!-- Default Slot  -->
</sw-form>
```

```js
// Example of use case
export default {
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Write your logical here
      }
    }
  },
}
```


## Code example

```html
<sw-form ref="form">
  <!-- Default Slot  -->
</sw-form>
```
[<- Go back to components list](../library.md)