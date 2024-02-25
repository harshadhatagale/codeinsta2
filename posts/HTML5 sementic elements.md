---
title:  Understanding HTML Button Onclick attribute
date: 19 Aug 2024
thumbnail: /semantic_tags_thumbnail.jpg
---

* ### Introduction:

In the world of making websites, it's not just about how they look – it's also about how well-organized and easy to understand they are. That's where HTML semantic tags come into play. In this blog post, we'll take a closer look at what these tags are, why they matter, and how they help create websites that are both user-friendly and search engine savvy.

* ### Understanding Semantic Tags:

HTML (that language that makes websites work) has special tags called "semantic tags." Unlike regular tags, these give more meaning to the content they hold. They help browsers and developers understand what each part of a webpage is for. Let's explore some of these tags and see how they make our lives easier.

1. `<header>` and `<footer>`:

These tags are like bookends for your webpage. `<header>` holds things like your website's name and menu, while `<footer>` has stuff like copyright information. It's a neat way to keep things organized.

```html
<header>
    <!-- Your website name and menu go here -->
</header>

<!-- The main part of your webpage -->

<footer>
    <!-- Copyright info and other footer stuff go here -->
</footer>
```

2. `<nav>`:

Think of `<nav>` as a signpost for your website. It tells browsers and assistive technologies where to find your navigation links.

```html
<nav>
    <!-- Your navigation links go here -->
</nav>
```

3. `<article>` and `<section>`:

These tags help organize your content. `<article>` is for standalone pieces like blog posts, while `<section>` divides your content into different parts.

```html
<section>
    <h2>Section Heading</h2>
    <!-- Content related to this section goes here -->
</section>

<article>
    <h2>Article Title</h2>
    <!-- The main part of the article goes here -->
</article>
```

4. `<main>`:

`<main>` is where the main stuff on your webpage lives. It keeps everything important in one place.

```html
<main>
    <!-- Your main content goes here -->
</main>
```

5. `<figure>` and `<figcaption>`:

These are like a team for images and captions. `<figure>` wraps around your image, and `<figcaption>` is where you put the caption.

```html
<figure>
    <img src="image.jpg" alt="Description of the image">
    <figcaption>Caption for the image</figcaption>
</figure>
```
Expanding on HTML Semantic Tags: Building Better Websites for Everyone

Now that we've dipped our toes into the world of HTML semantic tags, let's dive a bit deeper to understand why they are like the superheroes of web development. These simple but powerful tags contribute to creating websites that not only look good but are also accessible and easily understood by both humans and machines.

6. `<aside>`:

Ever had those extra bits of information, like a sidebar or related content, that aren't the main focus but still add value? That's where `<aside>` comes in handy. It helps browsers understand that the content inside is related but not the main star of the show.

```html
<aside>
    <!-- Additional content or sidebar goes here -->
</aside>
```

7. `<details>` and `<summary>`:

Have you ever wanted to hide some details and let users decide if they want to see them? `<details>` and `<summary>` work together to create a collapsible section.

```html
<details>
    <summary>Click to reveal more details</summary>
    <!-- Hidden content goes here -->
</details>
```

8. `<mark>` and `<time>`:

Need to highlight or mark a specific part of your text? `<mark>` is your go-to tag. And if you're dealing with dates or times, `<time>` adds a semantic layer to help browsers and screen readers understand the context.

```html
<p>This is an important <mark>note</mark> for everyone.</p>
<time datetime="2024-02-22">Published on February 22, 2024</time>
```

9. `<address>`:

If you're including contact information on your webpage, using the `<address>` tag not only adds semantic meaning but also helps machines recognize it as contact information.

```html
<address>
    <p>Contact us at <a href="mailto:info@example.com">info@example.com</a></p>
</address>
```

10. `<progress>`:

When you want to show progress, like when uploading a file or completing a task, `<progress>` comes to the rescue. It creates a progress bar that visually represents the completion status.

```html
<progress value="70" max="100">70%</progress>
```

* ### Conclusion:

In the ever-expanding universe of web development, HTML semantic tags continue to be the unsung heroes, making websites more organized, accessible, and user-friendly. As you become more familiar with these tags, you'll discover creative ways to enhance your web projects and provide a better experience for your audience. So, keep exploring and harness the power of semantic tags to build websites that shine on every browser and screen. Happy coding!