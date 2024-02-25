---
title:  How to create radio button in html
date: 21 Aug 2024
thumbnail: /button_onclick_thumb.png
---

* ### Introduction:

Radio buttons are an essential component in web forms, allowing users to make a single selection from a list of options. If you're diving into web development and want to learn how to create radio buttons in HTML, you're in the right place. In this step-by-step guide, we'll walk you through the process of crafting radio buttons that seamlessly integrate into your web forms.

* ### Step 1: Set Up Your HTML Document

First things first, create a new HTML document or open an existing one where you want to incorporate radio buttons. Add the basic structure with the HTML, head, and body tags.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Radio Button Tutorial</title>
</head>
<body>

<!-- Your content will go here -->

</body>
</html>
```

* ### Step 2: Introduce the `<form>` Element

Encapsulate your radio buttons within a `<form>` element. This sets the stage for creating an interactive and functional form.

```html
<form>
    <!-- Radio buttons will be placed here -->
</form>
```

* ### Step 3: Add Radio Button Elements

Now, let's create the actual radio buttons. Use the `<input>` element with the `type="radio"` attribute. Each radio button should have a unique `name` attribute to group them together, allowing users to make only one selection from the group.

```html
<form>
    <input type="radio" name="gender" id="male">
    <label for="male">Male</label>

    <input type="radio" name="gender" id="female">
    <label for="female">Female</label>

    <input type="radio" name="gender" id="other">
    <label for="other">Other</label>
</form>
```

* ### Step 4: Use Labels for Accessibility

Associating radio buttons with labels improves accessibility. The `for` attribute in the `<label>` tag should match the `id` of the corresponding radio button.

* ### Step 5: Enhance with Additional Information

You can provide additional information or context using labels, paragraphs, or other HTML elements.

```html
<form>
    <p>Select your gender:</p>

    <input type="radio" name="gender" id="male">
    <label for="male">Male</label>

    <input type="radio" name="gender" id="female">
    <label for="female">Female</label>

    <input type="radio" name="gender" id="other">
    <label for="other">Other</label>
</form>
```

* ### Step 6: Style Your Radio Buttons (Optional)

Feel free to apply CSS styles to enhance the visual appeal of your radio buttons. You can use CSS to modify their appearance, spacing, and overall layout.

```css
/* Example CSS for styling radio buttons */
input[type="radio"] {
    margin-right: 8px;
}
```

* ### Conclusion:

Congratulations! You've successfully created radio buttons in HTML. By following these steps, you've laid the foundation for building interactive and user-friendly forms on your website. Experiment with different attributes, styles, and form structures to tailor the radio buttons to your specific needs. Happy coding!