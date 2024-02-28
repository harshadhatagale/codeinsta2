---
title: HTML Forms
date: 26 feb 2024
thumbnail: /post2_thumb.jpg
---

HTML forms plays important role in web development, enabling interactions & data exchahnge between users & websites. Understanding the importance of form elements is essential for building dynamic & user-friendy web pages. 

In this post we delve into the world of HTML forms, exploring thier structure, attributes, & various input types that make them versatile & powerful.

1. **Basic Form structure with input fields**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Form</title>
</head>
<body>

    <form action="/submit" method="post">
        <!-- Text Input -->
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>

        <!-- Password Input -->
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>

        <!-- Submit Button -->
        <button type="submit">Submit</button>
    </form>

</body>
</html>
```

- This is a basic structure HTML document with form that has a post method & action URLS (/submit).
- It includes two input fields: one for the username (text input) & another for password (password input).
- Both input fields have a required attribute, indicating that the user must fill them out before submitting the form.
- The form also contains a submit button.


