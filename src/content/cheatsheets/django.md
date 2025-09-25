---
title: Django Cheatsheet
description: Django web framework essentials for rapid development
category: Backend
lastUpdated: 2024-01-15
filename: django.md
tags: ["django", "python", "web-framework", "backend"]
---

# Django Cheatsheet

## Project Setup
```bash
# Install Django
pip install django

# Create project
django-admin startproject myproject
cd myproject

# Create app
python manage.py startapp myapp

# Run development server
python manage.py runserver
python manage.py runserver 8080  # Custom port
```

## Models
```python
from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = "categories"
    
    def __str__(self):
        return self.name

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    tags = models.ManyToManyField('Tag', blank=True)
    published = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
```

## Database Operations
```bash
# Create migrations
python manage.py makemigrations
python manage.py makemigrations myapp

# Apply migrations
python manage.py migrate

# Show migrations
python manage.py showmigrations

# Create superuser
python manage.py createsuperuser

# Database shell
python manage.py dbshell
```

## QuerySet Operations
```python
# Basic queries
Post.objects.all()
Post.objects.filter(published=True)
Post.objects.exclude(published=False)
Post.objects.get(id=1)
Post.objects.first()
Post.objects.last()

# Field lookups
Post.objects.filter(title__icontains='django')
Post.objects.filter(created_at__year=2024)
Post.objects.filter(author__username='john')

# Ordering
Post.objects.order_by('-created_at')
Post.objects.order_by('title', '-created_at')

# Limiting
Post.objects.all()[:5]  # First 5
Post.objects.all()[5:10]  # Offset 5, limit 5

# Aggregation
from django.db.models import Count, Avg
Post.objects.aggregate(Count('id'))
Post.objects.values('category').annotate(count=Count('id'))
```

## Views
```python
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.views.generic import ListView, DetailView
from django.contrib.auth.decorators import login_required

# Function-based view
def post_list(request):
    posts = Post.objects.filter(published=True)
    return render(request, 'posts/list.html', {'posts': posts})

def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk, published=True)
    return render(request, 'posts/detail.html', {'post': post})

# Class-based views
class PostListView(ListView):
    model = Post
    template_name = 'posts/list.html'
    context_object_name = 'posts'
    paginate_by = 10
    
    def get_queryset(self):
        return Post.objects.filter(published=True)

class PostDetailView(DetailView):
    model = Post
    template_name = 'posts/detail.html'
    context_object_name = 'post'
```

## URLs
```python
# myproject/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('myapp.urls')),
    path('api/', include('myapp.api_urls')),
]

# myapp/urls.py
from django.urls import path
from . import views

app_name = 'myapp'
urlpatterns = [
    path('', views.PostListView.as_view(), name='post-list'),
    path('post/<int:pk>/', views.PostDetailView.as_view(), name='post-detail'),
    path('category/<slug:slug>/', views.category_posts, name='category-posts'),
]
```

## Templates
```html
<!-- base.html -->
<!DOCTYPE html>
<html>
<head>
    <title>{% block title %}My Site{% endblock %}</title>
</head>
<body>
    <nav>
        <a href="{% url 'myapp:post-list' %}">Home</a>
    </nav>
    
    <main>
        {% block content %}
        {% endblock %}
    </main>
</body>
</html>

<!-- posts/list.html -->
{% extends 'base.html' %}

{% block title %}Posts{% endblock %}

{% block content %}
    {% for post in posts %}
        <article>
            <h2><a href="{% url 'myapp:post-detail' post.pk %}">{{ post.title }}</a></h2>
            <p>{{ post.content|truncatewords:30 }}</p>
            <small>By {{ post.author.username }} on {{ post.created_at|date:"M d, Y" }}</small>
        </article>
    {% empty %}
        <p>No posts available.</p>
    {% endfor %}
{% endblock %}
```

## Forms
```python
from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'content', 'category', 'published']
        widgets = {
            'content': forms.Textarea(attrs={'rows': 10}),
            'title': forms.TextInput(attrs={'class': 'form-control'}),
        }
    
    def clean_title(self):
        title = self.cleaned_data['title']
        if len(title) < 5:
            raise forms.ValidationError("Title must be at least 5 characters.")
        return title

# In views
def create_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.save()
            return redirect('myapp:post-detail', pk=post.pk)
    else:
        form = PostForm()
    return render(request, 'posts/create.html', {'form': form})
```

## Admin
```python
from django.contrib import admin
from .models import Post, Category

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'author', 'category', 'published', 'created_at']
    list_filter = ['published', 'category', 'created_at']
    search_fields = ['title', 'content']
    prepopulated_fields = {'slug': ('title',)}
    date_hierarchy = 'created_at'
    ordering = ['-created_at']

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}
```

## Management Commands
```bash
# Built-in commands
python manage.py collectstatic    # Collect static files
python manage.py check           # Check for errors
python manage.py shell          # Django shell
python manage.py dumpdata       # Export data
python manage.py loaddata       # Import data
python manage.py test          # Run tests

# Custom management command
# myapp/management/commands/my_command.py
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'My custom command'
    
    def handle(self, *args, **options):
        self.stdout.write('Hello World!')
```

## Settings Configuration
```python
# settings.py essentials
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.environ.get('SECRET_KEY', 'your-secret-key')
DEBUG = os.environ.get('DEBUG', 'False').lower() == 'true'
ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS', 'localhost').split(',')

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'myapp',
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ.get('DB_NAME', 'mydb'),
        'USER': os.environ.get('DB_USER', 'user'),
        'PASSWORD': os.environ.get('DB_PASSWORD', 'password'),
        'HOST': os.environ.get('DB_HOST', 'localhost'),
        'PORT': os.environ.get('DB_PORT', '5432'),
    }
}

STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'
```