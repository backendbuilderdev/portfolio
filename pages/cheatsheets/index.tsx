import React, { useState, useMemo } from 'react';
import Section from '../../src/components/structure/section';
import Container from '../../src/components/structure/container';

interface Cheatsheet {
  slug: string;
  title: string;
  description: string;
  category: string;
  lastUpdated: string;
  filename: string;
  tags: string[];
  preview: string[];
}

const cheatsheets: Cheatsheet[] = [
  {
    slug: 'git',
    title: 'Git',
    description: 'Essential Git commands for version control and collaboration',
    category: 'Development',
    lastUpdated: '2024-01-15',
    filename: 'git.md',
    tags: ['git', 'version-control', 'github'],
    preview: ['git init', 'git clone <url>', 'git add .']
  },
  {
    slug: 'docker',
    title: 'Docker',
    description: 'Complete Docker commands for containerization and deployment',
    category: 'DevOps',
    lastUpdated: '2024-01-15',
    filename: 'docker.md',
    tags: ['docker', 'containers', 'devops'],
    preview: ['docker run <image>', 'docker ps', 'docker build -t <name> .']
  },
  {
    slug: 'django',
    title: 'Django',
    description: 'Django web framework essentials for rapid development',
    category: 'Backend',
    lastUpdated: '2024-01-15',
    filename: 'django.md',
    tags: ['django', 'python', 'web-framework'],
    preview: ['python manage.py runserver', 'python manage.py migrate', 'python manage.py createsuperuser']
  },
  {
    slug: 'fastapi',
    title: 'FastAPI',
    description: 'Modern Python web framework for building APIs with automatic docs',
    category: 'Backend',
    lastUpdated: '2024-01-15',
    filename: 'fastapi.md',
    tags: ['fastapi', 'python', 'api', 'async'],
    preview: ['@app.get("/")', 'uvicorn main:app --reload', 'from pydantic import BaseModel']
  },
  {
    slug: 'python',
    title: 'Python',
    description: 'Essential Python syntax, data structures, and built-in functions',
    category: 'Languages',
    lastUpdated: '2024-01-15',
    filename: 'python.md',
    tags: ['python', 'programming', 'data-structures'],
    preview: ['def function():', 'for item in list:', 'with open("file") as f:']
  },
  {
    slug: 'javascript',
    title: 'JavaScript',
    description: 'ES6+ features and modern JavaScript methods',
    category: 'Languages',
    lastUpdated: '2024-01-15',
    filename: 'javascript.md',
    tags: ['javascript', 'es6', 'frontend'],
    preview: ['const arr = [1, 2, 3]', 'arr.map(x => x * 2)', 'const {name} = person']
  }
];

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
};

const getCheatsheetContent = (slug: string): string => {
  const contentMap: Record<string, string> = {
    git: `# Git Cheatsheet

## Setup & Configuration
\`\`\`bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --list                    # View all settings
git config --global init.defaultBranch main
\`\`\`

## Repository Initialization
\`\`\`bash
git init                             # Initialize new repository
git clone <url>                      # Clone remote repository
git clone <url> <directory>          # Clone to specific directory
git clone --depth 1 <url>            # Shallow clone (latest commit only)
\`\`\`

## Basic Workflow
\`\`\`bash
git status                           # Check repository status
git add <file>                       # Stage specific file
git add .                            # Stage all changes
git add -A                           # Stage all changes including deletions
git commit -m "message"              # Commit with message
git commit -am "message"             # Stage and commit tracked files
git push                             # Push to remote
git pull                             # Pull from remote
git fetch                            # Fetch without merging
\`\`\`

## Branching & Merging
\`\`\`bash
git branch                           # List local branches
git branch -a                        # List all branches
git branch <name>                    # Create new branch
git checkout <branch>                # Switch to branch
git checkout -b <name>               # Create and switch to branch
git switch <branch>                  # Switch to branch (Git 2.23+)
git switch -c <name>                 # Create and switch (Git 2.23+)
git merge <branch>                   # Merge branch into current
git branch -d <name>                 # Delete merged branch
git branch -D <name>                 # Force delete branch
\`\`\``,
    
    docker: `# Docker Cheatsheet

## Container Lifecycle
\`\`\`bash
docker run <image>                   # Run container
docker run -d <image>                # Run in detached mode
docker run -it <image>               # Run interactive with TTY
docker run --name <name> <image>     # Run with custom name
docker run -p 8080:80 <image>        # Port mapping
docker run -v /host:/container <image> # Volume mounting
docker run --rm <image>              # Remove after exit
docker run -e ENV_VAR=value <image>  # Set environment variable
\`\`\`

## Container Management
\`\`\`bash
docker ps                            # List running containers
docker ps -a                         # List all containers
docker start <container>             # Start stopped container
docker stop <container>              # Stop running container
docker restart <container>           # Restart container
docker pause <container>             # Pause container
docker unpause <container>           # Unpause container
docker rm <container>                # Remove container
docker rm -f <container>             # Force remove running container
\`\`\`

## Image Management
\`\`\`bash
docker images                        # List local images
docker pull <image>                  # Pull image from registry
docker push <image>                  # Push image to registry
docker build -t <name> .             # Build image from Dockerfile
docker build -t <name> -f <file> .   # Build with specific Dockerfile
docker tag <image> <new-name>        # Tag image
docker rmi <image>                   # Remove image
docker rmi -f <image>                # Force remove image
docker image prune                   # Remove unused images
\`\`\``,
    
    django: `# Django Cheatsheet

## Project Setup
\`\`\`bash
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
\`\`\`

## Models
\`\`\`python
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
    published = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
\`\`\`

## Database Operations
\`\`\`bash
# Create migrations
python manage.py makemigrations
python manage.py makemigrations myapp

# Apply migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Database shell
python manage.py dbshell
\`\`\``,
    
    fastapi: `# FastAPI Cheatsheet

## Installation & Setup
\`\`\`bash
# Install FastAPI
pip install fastapi uvicorn[standard]

# Install optional dependencies
pip install python-multipart  # For form data
pip install python-jose[cryptography]  # For JWT
pip install passlib[bcrypt]  # For password hashing
pip install sqlalchemy  # For database
\`\`\`

## Basic Application
\`\`\`python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="My API", version="1.0.0")

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}

# Run with: uvicorn main:app --reload
\`\`\`

## Pydantic Models
\`\`\`python
from pydantic import BaseModel, Field, validator
from typing import Optional, List
from datetime import datetime
from enum import Enum

class ItemStatus(str, Enum):
    active = "active"
    inactive = "inactive"

class ItemBase(BaseModel):
    title: str = Field(..., min_length=1, max_length=100)
    description: Optional[str] = Field(None, max_length=500)
    price: float = Field(..., gt=0)
    status: ItemStatus = ItemStatus.active
\`\`\``,
    
    python: `# Python Cheatsheet

## Basic Syntax
\`\`\`python
# Variables and data types
name = "John"           # String
age = 30               # Integer
height = 5.9           # Float
is_student = True      # Boolean
items = [1, 2, 3]      # List
person = {"name": "John", "age": 30}  # Dictionary

# Multiple assignment
x, y, z = 1, 2, 3
a = b = c = 0

# String formatting
name = "Alice"
age = 25
print(f"Hello, {name}! You are {age} years old.")
print("Hello, {}! You are {} years old.".format(name, age))
\`\`\`

## Data Structures

### Lists
\`\`\`python
# Creating lists
fruits = ["apple", "banana", "orange"]
numbers = list(range(1, 6))  # [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]

# List operations
fruits.append("grape")        # Add to end
fruits.insert(1, "kiwi")     # Insert at index
fruits.remove("banana")      # Remove by value
popped = fruits.pop()        # Remove and return last
fruits.extend(["mango", "peach"])  # Add multiple

# List comprehensions
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]
words = [word.upper() for word in ["hello", "world"]]
\`\`\``,
    
    javascript: `# JavaScript Cheatsheet

## Variables & Data Types
\`\`\`javascript
// Variable declarations
let name = "John";          // Block-scoped, mutable
const age = 30;             // Block-scoped, immutable
var city = "New York";      // Function-scoped (avoid)

// Data types
const string = "Hello";
const number = 42;
const boolean = true;
const array = [1, 2, 3];
const object = { key: "value" };
const nullValue = null;
const undefinedValue = undefined;
const symbol = Symbol("id");
const bigint = 123n;
\`\`\`

## Template Literals
\`\`\`javascript
const name = "Alice";
const age = 25;

// Template literals
const message = \`Hello, \${name}! You are \${age} years old.\`;
const multiline = \`
  This is a
  multiline string
  with \${name}
\`;
\`\`\`

## Arrow Functions
\`\`\`javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow functions
const add = (a, b) => a + b;
const square = x => x * x;
const greet = () => "Hello!";
const multiply = (a, b) => {
  const result = a * b;
  return result;
};

// Arrow functions in arrays
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);
\`\`\``,
    
    linux: `# Linux Cheatsheet

## File Operations
\`\`\`bash
# Navigation
pwd                         # Print working directory
ls                          # List files
ls -la                      # List with details and hidden files
ls -lh                      # List with human-readable sizes
cd /path/to/directory       # Change directory
cd ~                        # Go to home directory
cd -                        # Go to previous directory
cd ..                       # Go up one directory

# File manipulation
touch file.txt              # Create empty file
mkdir directory             # Create directory
mkdir -p path/to/dir        # Create nested directories
cp file.txt backup.txt      # Copy file
cp -r dir1 dir2             # Copy directory recursively
mv file.txt newname.txt     # Move/rename file
rm file.txt                 # Remove file
rm -rf directory            # Remove directory recursively
rmdir directory             # Remove empty directory
\`\`\`

## File Permissions
\`\`\`bash
# Permission notation
# r(read)=4, w(write)=2, x(execute)=1
# user, group, others

chmod 755 file.txt          # rwxr-xr-x
chmod 644 file.txt          # rw-r--r--
chmod +x script.sh          # Add execute permission
chmod -w file.txt           # Remove write permission
chmod u+x,g-w,o-r file.txt  # Complex permissions

# Ownership
chown user:group file.txt   # Change owner and group
chown user file.txt         # Change owner only
chgrp group file.txt        # Change group only
sudo chown -R user:group dir # Recursive ownership change
\`\`\``
  };
  
  return contentMap[slug] || 'Content not available for this cheatsheet.';
};

function CheatsheetDetail({ cheatsheet, onBack }: { cheatsheet: Cheatsheet; onBack: () => void }) {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    // Load content from static data
    const loadContent = () => {
      setLoading(true);
      const cheatsheetContent = getCheatsheetContent(cheatsheet.slug);
      setContent(cheatsheetContent);
      setLoading(false);
    };
    
    loadContent();
  }, [cheatsheet.slug]);

  const formatContent = (text: string) => {
    return text
      .replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
        return `<div class="code-block">
          <div class="code-header">
            <span class="language">${lang || 'code'}</span>
            <button class="copy-btn" onclick="copyToClipboard('${code.replace(/'/g, "\\'")}')">📋 Copy</button>
          </div>
          <pre><code class="language-${lang || 'text'}">${code}</code></pre>
        </div>`;
      })
      .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
      .replace(/^# (.+)$/gm, '<h1 class="content-h1">$1</h1>')
      .replace(/^## (.+)$/gm, '<h2 class="content-h2">$1</h2>')
      .replace(/^### (.+)$/gm, '<h3 class="content-h3">$1</h3>')
      .replace(/\n/g, '<br>');
  };

  if (loading) {
    return (
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '1.2rem', color: '#666' }}>Loading cheatsheet...</div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '2rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <button 
          onClick={onBack}
          style={{ 
            padding: '0.75rem 1.5rem', 
            backgroundColor: '#4ecdc4', 
            border: 'none', 
            borderRadius: '6px', 
            color: '#000',
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: '0.9rem',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#45b7aa'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4ecdc4'}
        >
          ← Back to Cheatsheets
        </button>
        
        <div style={{ 
          fontSize: '0.9rem', 
          color: '#666', 
          fontFamily: 'monospace',
          backgroundColor: '#2a2a2a',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          border: '1px solid #444'
        }}>
          {cheatsheet.filename}
        </div>
      </div>

      {/* Content */}
      <div style={{ 
        backgroundColor: '#1a1a1a', 
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #333'
      }}>
        <div style={{ 
          padding: '1.5rem 2rem',
          borderBottom: '1px solid #333',
          backgroundColor: '#222'
        }}>
          <h1 style={{ 
            margin: 0, 
            fontSize: '2rem', 
            color: '#fff',
            marginBottom: '0.5rem'
          }}>
            {cheatsheet.title} Cheatsheet
          </h1>
          <p style={{ 
            margin: 0, 
            color: '#999', 
            fontSize: '1rem'
          }}>
            {cheatsheet.description}
          </p>
          <div style={{ 
            marginTop: '1rem',
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap'
          }}>
            {cheatsheet.tags.map(tag => (
              <span key={tag} style={{
                backgroundColor: '#4ecdc4',
                color: '#000',
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontSize: '0.8rem',
                fontWeight: '500'
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div 
          style={{ 
            padding: '2rem',
            fontFamily: 'monospace',
            lineHeight: '1.6'
          }}
          dangerouslySetInnerHTML={{ 
            __html: formatContent(content)
          }}
        />
      </div>

      <style jsx>{`
        .code-block {
          margin: 1.5rem 0;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #444;
        }
        .code-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          background: #2a2a2a;
          border-bottom: 1px solid #444;
        }
        .language {
          color: #4ecdc4;
          font-size: 0.8rem;
          font-weight: 500;
        }
        .copy-btn {
          background: #333;
          border: none;
          color: #fff;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.8rem;
          transition: background 0.2s;
        }
        .copy-btn:hover {
          background: #555;
        }
        .code-block pre {
          margin: 0;
          padding: 1.5rem;
          background: #000;
          overflow-x: auto;
          color: #fff;
        }
        .inline-code {
          background: #333;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          color: #4ecdc4;
          font-size: 0.9em;
        }
        .content-h1 {
          font-size: 2rem;
          margin: 2.5rem 0 1rem 0;
          color: #4ecdc4;
          border-bottom: 2px solid #4ecdc4;
          padding-bottom: 0.5rem;
        }
        .content-h2 {
          font-size: 1.5rem;
          margin: 2rem 0 1rem 0;
          color: #ff6b6b;
        }
        .content-h3 {
          font-size: 1.2rem;
          margin: 1.5rem 0 0.75rem 0;
          color: #ffd93d;
        }
      `}</style>
    </div>
  );
}

function CheatsheetCard({ cheatsheet, onSelect }: { cheatsheet: Cheatsheet; onSelect: (cheatsheet: Cheatsheet) => void }) {
  return (
    <div 
      onClick={() => onSelect(cheatsheet)}
      style={{
        border: '1px solid #333',
        borderRadius: '12px',
        padding: '1.5rem',
        backgroundColor: '#1a1a1a',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = '#4ecdc4';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(78, 205, 196, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = '#333';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ marginBottom: '1rem' }}>
        <h3 style={{ 
          margin: '0 0 0.5rem 0', 
          color: '#fff', 
          fontSize: '1.25rem',
          fontWeight: '600'
        }}>
          {cheatsheet.title}
        </h3>
        <p style={{ 
          margin: 0, 
          fontSize: '0.9rem', 
          opacity: 0.8, 
          lineHeight: '1.5',
          color: '#ccc'
        }}>
          {cheatsheet.description}
        </p>
      </div>
      
      <div style={{ marginBottom: '1rem' }}>
        <div style={{ 
          fontSize: '0.8rem', 
          color: '#666', 
          marginBottom: '0.75rem'
        }}>
          Quick preview:
        </div>
        {cheatsheet.preview.slice(0, 2).map((cmd, idx) => (
          <div key={idx} style={{
            fontFamily: 'monospace',
            fontSize: '0.8rem',
            color: '#4ecdc4',
            backgroundColor: '#0a0a0a',
            padding: '0.25rem 0.5rem',
            borderRadius: '4px',
            marginBottom: '0.25rem',
            border: '1px solid #333'
          }}>
            {cmd}
          </div>
        ))}
      </div>
      
      <div style={{ 
        marginTop: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.8rem',
        color: '#666'
      }}>
        <span>Updated: {cheatsheet.lastUpdated}</span>
        <span style={{
          backgroundColor: '#333',
          padding: '0.25rem 0.5rem',
          borderRadius: '4px',
          fontFamily: 'monospace'
        }}>
          {cheatsheet.filename}
        </span>
      </div>
    </div>
  );
}

function SearchBar({ value, onChange, placeholder }: { value: string; onChange: (value: string) => void; placeholder: string }) {
  return (
    <div style={{ position: 'relative', maxWidth: '500px', margin: '0 auto' }}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '1rem 1rem 1rem 3rem',
          fontSize: '1rem',
          border: '2px solid #333',
          borderRadius: '12px',
          backgroundColor: '#1a1a1a',
          color: '#fff',
          outline: 'none',
          transition: 'border-color 0.2s'
        }}
        onFocus={(e) => e.currentTarget.style.borderColor = '#4ecdc4'}
        onBlur={(e) => e.currentTarget.style.borderColor = '#333'}
      />
      <div style={{
        position: 'absolute',
        left: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '1.2rem',
        color: '#666'
      }}>
        🔍
      </div>
    </div>
  );
}

function CategoryFilter({ categories, selected, onSelect }: { categories: string[]; selected: string; onSelect: (category: string) => void }) {
  return (
    <div style={{ 
      display: 'flex', 
      gap: '0.5rem', 
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '2rem'
    }}>
      <button
        onClick={() => onSelect('all')}
        style={{
          padding: '0.75rem 1.5rem',
          border: 'none',
          borderRadius: '25px',
          backgroundColor: selected === 'all' ? '#4ecdc4' : '#333',
          color: selected === 'all' ? '#000' : '#fff',
          cursor: 'pointer',
          fontWeight: '500',
          transition: 'all 0.2s'
        }}
      >
        All
      </button>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          style={{
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '25px',
            backgroundColor: selected === category ? '#4ecdc4' : '#333',
            color: selected === category ? '#000' : '#fff',
            cursor: 'pointer',
            fontWeight: '500',
            transition: 'all 0.2s'
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

function CheatsheetList({ onSelect }: { onSelect: (cheatsheet: Cheatsheet) => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = useMemo(() => 
    [...new Set(cheatsheets.map(c => c.category))], 
    []
  );
  
  const filteredCheatsheets = useMemo(() => {
    return cheatsheets.filter(sheet => {
      const matchesSearch = searchTerm === '' || 
        sheet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sheet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sheet.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || sheet.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);
  
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3rem)', 
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #4ecdc4, #44a08d)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '700'
        }}>
          Developer Cheatsheets
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          opacity: 0.8, 
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Quick reference guides and essential commands for modern development
        </p>
        
        <SearchBar 
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search cheatsheets, tags, or commands..."
        />
      </header>

      {/* Category Filter */}
      <CategoryFilter 
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {/* Results Count */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '2rem',
        color: '#666',
        fontSize: '0.9rem'
      }}>
        {filteredCheatsheets.length} cheatsheet{filteredCheatsheets.length !== 1 ? 's' : ''} found
      </div>

      {/* Cheatsheets Grid */}
      {filteredCheatsheets.length > 0 ? (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {filteredCheatsheets.map(sheet => (
            <CheatsheetCard 
              key={sheet.slug}
              cheatsheet={sheet}
              onSelect={onSelect}
            />
          ))}
        </div>
      ) : (
        <div style={{ 
          textAlign: 'center', 
          padding: '3rem',
          color: '#666'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
          <h3 style={{ marginBottom: '0.5rem', color: '#999' }}>No cheatsheets found</h3>
          <p>Try adjusting your search terms or category filter</p>
        </div>
      )}
    </div>
  );
}

export default function Cheatsheets() {
  const [selectedCheatsheet, setSelectedCheatsheet] = useState<Cheatsheet | null>(null);

  // Add global styles for copy functionality
  React.useEffect(() => {
    (window as any).copyToClipboard = copyToClipboard;
  }, []);

  return (
    <Section>
      <Container spacing={['verticalXXXLrg']}>
        {selectedCheatsheet ? (
          <CheatsheetDetail 
            cheatsheet={selectedCheatsheet} 
            onBack={() => setSelectedCheatsheet(null)} 
          />
        ) : (
          <CheatsheetList onSelect={setSelectedCheatsheet} />
        )}
      </Container>
    </Section>
  );
}