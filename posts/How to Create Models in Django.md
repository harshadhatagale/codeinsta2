---
title: CSS comments
date: 25 feb 2024
thumbnail: /code.jpg
---

In this blog post, we will explore how to create models in Django, which is an essential part of building web applications. Models provide a way to define the structure of the data in your application and enable you to interact with the database.


---

## Getting Started

Before we start creating models, ensure that you have Django installed in your development environment. You can install it using `pip` by running:


```python
    pip install django
```
---


## Creating a Django Project

To get started, let's create a new Django project. Open your terminal, navigate to the desired location, and run the following command:

```python
    django-admin startproject myproject
```

This command will create a new directory called `myproject` with the basic project structure.
----


## Creating an App

Next, we need to create a Django app within our project. An app is a self-contained module that performs a specific functionality. Run the following command in your terminal:

```python
    cd myprojectpython manage.py 
startapp myapp
```

This will create a new directory called `myapp` inside your project directory.

---

## Defining Models

Now, let's define our models in the `models.py` file inside the `myapp` directory. Open the file and add the following code:

```python
    from django.db import modelsclass Book(models.Model):    title = models.CharField(max_length=100)    author = models.CharField(max_length=50)    publication_date = models.DateField()    price = models.DecimalField(max_digits=5, decimal_places=2)
```

In the above code, we have defined a `Book` model with fields for the book's title, author, publication date, and price.

---

## Running Migrations

Once we have defined our models, we need to create the corresponding database tables. Django provides a convenient way to manage database schema changes through a process called migrations.

To apply the initial migration, run the following command in your terminal:

```python
    python manage.py makemigrations
```

Next, apply the migrations by running:

```python
    python manage.py migrate
```

These commands will create the necessary database tables for our `Book` model.

---

## Registering Models in the Admin Panel

To easily manage and interact with our models, let's register the `Book` model in the Django admin panel. Open the `admin.py` file in your `myapp` directory and add the following code:

```python
    from django.contrib import adminfrom .models import Bookadmin.site.register(Book)
```

Now, start the development server by running the following command:
```python
    python manage.py runserver
```
---
Navigate to `http://localhost:8000/admin` in your web browser, and you will see a login page for the admin panel. To log in, create a superuser account by running:

```shell
    python manage.py createsuperuser
```
Enter the required information and remember your credentials.

Once logged in, you will see the `Book` model listed. Clicking on it will allow you to add, edit, or delete book entries.
---
## Conclusion

In this blog post, we have learned how to create models in Django and use them to define the structure of our data. We have also seen how to run migrations to create the necessary database tables and register models in the admin panel.

Django provides a powerful and flexible way to work with databases. With these basics, you can now create more complex models and build dynamic web applications with ease.

Feel free to experiment with different models and explore the various fields and options Django provides. Happy coding!
