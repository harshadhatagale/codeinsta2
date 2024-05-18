---
title: How to create Accordion with HTML & CSS
description: Creating an accordion with HTML and CSS is a great way to add interactivity to your website without relying on JavaScript. An accordion allows you to present content in a compact and organized way, making it easier for users to navigate and find the information they need. In this tutorial, we’ll walk you through the steps to create a simple and elegant accordion using just HTML and CSS.
thumbnail: /Post_Images/post_2/thumb_1.jpg
hor_thumb: /Post_Images/post_2/thumb2.jpg
date: 18 May 2024
---
Creating an accordion with HTML and CSS is a great way to add interactivity to your website without relying on JavaScript. An accordion allows you to present content in a compact and organized way, making it easier for users to navigate and find the information they need. In this tutorial, we’ll walk you through the steps to create a simple and elegant accordion using just HTML and CSS.

## Step 1: HTML Structure

First, let’s set up the HTML structure for our accordion. We will use a combination of `ul`, `li`, `input`, `label`, and `div` elements. The `input` elements will be of type `radio`, allowing us to control which accordion section is expanded.

Create a file named `index.html` and add the following code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accordion with HTML & CSS</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <ul class="accordion">
        <li>
            <input type="radio" name="accordion" id="first" checked>
            <label for="first">Products</label>
            <div class="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, in. Ut alias temporibus, ea perferendis mollitia odio ratione provident. Delectus?
            </div>
        </li>
        <li>
            <input type="radio" name="accordion" id="second">
            <label for="second">Cart</label>
            <div class="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, in. Ut alias temporibus, ea perferendis mollitia odio ratione provident. Delectus?
            </div>
        </li>
        <li>
            <input type="radio" name="accordion" id="third">
            <label for="third">Accounts</label>
            <div class="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, in. Ut alias temporibus, ea perferendis mollitia odio ratione provident. Delectus?
            </div>
        </li>
        <li>
            <input type="radio" name="accordion" id="fourth">
            <label for="fourth">List</label>
            <div class="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, in. Ut alias temporibus, ea perferendis mollitia odio ratione provident. Delectus?
            </div>
        </li>
    </ul>
</body>
</html>
```

In this structure, each accordion item is represented by an `li` element containing an `input` (radio button), a `label`, and a `div` with the class `content`.

## Step 2: CSS Styling

Next, we’ll style our accordion using CSS. Create a file named `index.css` and add the following code:

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.accordion {
    color: white;
    font-family: 'Roboto', sans-serif;
    margin: 60px auto;
    width: 600px;
}

.accordion li {
    width: 100%;
    margin: 20px 0;
    padding: 10px;
    list-style: none;
    background-color: #0f172a;
    border-radius: 8px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
}

.accordion li label {
    display: flex;
    align-items: center;
    font-size: 18px;
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
}

label::before {
    content: "+";
    margin-right: 24px;
    font-size: 24px;
    font-weight: 700;
}

input[type="radio"] {
    display: none;
}

.accordion .content {
    color: #cbd5e1;
    padding: 0 10px;
    line-height: 26px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s, padding 0.5s;
}

.accordion input[type="radio"]:checked + label + .content {
    max-height: 400px;
    padding: 10px;
}

.accordion input[type="radio"]:checked + label::before {
    content: "-";
}
```

In the CSS file, we’ve styled the accordion to have a sleek and modern look. Key points include:
- Importing the Roboto font for better typography.
- Styling the accordion items with a dark background, white text, and rounded corners.
- Hiding the radio inputs to make the accordion labels clickable.
- Using transitions to animate the opening and closing of the accordion content.

## Conclusion

With these simple steps, you’ve created a functional and stylish accordion using only HTML and CSS. This technique leverages the power of CSS transitions and radio buttons to create an interactive UI component without any JavaScript. Feel free to customize the styles and content to better fit your project’s needs. 

Now you have a clean, accessible, and easily maintainable accordion for your web pages. Happy coding!