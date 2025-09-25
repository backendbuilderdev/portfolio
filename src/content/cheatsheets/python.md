---
title: Python Cheatsheet
description: Essential Python syntax, data structures, and built-in functions
category: Languages
lastUpdated: 2024-01-15
filename: python.md
tags: ["python", "programming", "data-structures", "functions"]
---

# Python Cheatsheet

## Basic Syntax
```python
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
print("Hello, {name}! You are {age} years old.".format(name=name, age=age))
```

## Data Structures

### Lists
```python
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
```

### Dictionaries
```python
# Creating dictionaries
person = {"name": "John", "age": 30, "city": "New York"}
empty_dict = {}
dict_from_keys = dict.fromkeys(["a", "b", "c"], 0)

# Dictionary operations
person["email"] = "john@example.com"  # Add/update
age = person.get("age", 0)           # Get with default
person.pop("city")                   # Remove and return
person.update({"country": "USA", "age": 31})  # Update multiple

# Dictionary comprehensions
squares = {x: x**2 for x in range(5)}
filtered = {k: v for k, v in person.items() if len(str(v)) > 3}
```

### Sets
```python
# Creating sets
fruits = {"apple", "banana", "orange"}
numbers = set([1, 2, 3, 4, 5])
empty_set = set()

# Set operations
fruits.add("grape")           # Add element
fruits.remove("banana")       # Remove (raises error if not found)
fruits.discard("kiwi")        # Remove (no error if not found)

# Set operations
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
union = set1 | set2           # {1, 2, 3, 4, 5, 6}
intersection = set1 & set2    # {3, 4}
difference = set1 - set2      # {1, 2}
```

### Tuples
```python
# Creating tuples
coordinates = (10, 20)
colors = ("red", "green", "blue")
single_item = ("item",)  # Note the comma

# Tuple unpacking
x, y = coordinates
first, *rest = colors  # first="red", rest=["green", "blue"]

# Named tuples
from collections import namedtuple
Point = namedtuple("Point", ["x", "y"])
p = Point(10, 20)
print(p.x, p.y)
```

## Control Flow

### Conditionals
```python
# If statements
age = 18
if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teenager")
else:
    print("Child")

# Ternary operator
status = "adult" if age >= 18 else "minor"

# Multiple conditions
if age >= 18 and age < 65:
    print("Working age")

if name in ["Alice", "Bob", "Charlie"]:
    print("Known person")
```

### Loops
```python
# For loops
for i in range(5):          # 0 to 4
    print(i)

for i in range(1, 6):       # 1 to 5
    print(i)

for i in range(0, 10, 2):   # 0, 2, 4, 6, 8
    print(i)

# Iterating over collections
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(fruit)

for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")

# Dictionary iteration
person = {"name": "John", "age": 30}
for key in person:
    print(key, person[key])

for key, value in person.items():
    print(key, value)

# While loops
count = 0
while count < 5:
    print(count)
    count += 1

# Loop control
for i in range(10):
    if i == 3:
        continue  # Skip this iteration
    if i == 7:
        break     # Exit loop
    print(i)
```

## Functions
```python
# Basic function
def greet(name):
    return f"Hello, {name}!"

# Function with default parameters
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

# Function with multiple parameters
def calculate(x, y, operation="add"):
    if operation == "add":
        return x + y
    elif operation == "multiply":
        return x * y
    else:
        return None

# Variable arguments
def sum_all(*args):
    return sum(args)

def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

# Lambda functions
square = lambda x: x**2
add = lambda x, y: x + y
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
```

## Classes and Objects
```python
class Person:
    # Class variable
    species = "Homo sapiens"
    
    def __init__(self, name, age):
        # Instance variables
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"Hi, I'm {self.name} and I'm {self.age} years old."
    
    def have_birthday(self):
        self.age += 1
    
    @classmethod
    def from_string(cls, person_str):
        name, age = person_str.split('-')
        return cls(name, int(age))
    
    @staticmethod
    def is_adult(age):
        return age >= 18

# Inheritance
class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id
    
    def study(self, subject):
        return f"{self.name} is studying {subject}"

# Usage
person = Person("Alice", 25)
student = Student("Bob", 20, "S12345")
```

## File Operations
```python
# Reading files
with open("file.txt", "r") as file:
    content = file.read()           # Read entire file
    
with open("file.txt", "r") as file:
    lines = file.readlines()       # Read all lines as list

with open("file.txt", "r") as file:
    for line in file:              # Read line by line
        print(line.strip())

# Writing files
with open("output.txt", "w") as file:
    file.write("Hello, World!")

with open("output.txt", "a") as file:  # Append mode
    file.write("\nNew line")

# JSON operations
import json

data = {"name": "John", "age": 30}
with open("data.json", "w") as file:
    json.dump(data, file, indent=2)

with open("data.json", "r") as file:
    loaded_data = json.load(file)
```

## Error Handling
```python
# Basic try-except
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")

# Multiple exceptions
try:
    value = int(input("Enter a number: "))
    result = 10 / value
except ValueError:
    print("Invalid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"An error occurred: {e}")
else:
    print(f"Result: {result}")
finally:
    print("This always executes")

# Raising exceptions
def validate_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    if age > 150:
        raise ValueError("Age seems unrealistic")
    return age
```

## Built-in Functions
```python
# Common built-ins
numbers = [1, 2, 3, 4, 5]
print(len(numbers))        # Length: 5
print(sum(numbers))        # Sum: 15
print(max(numbers))        # Maximum: 5
print(min(numbers))        # Minimum: 1
print(sorted(numbers, reverse=True))  # [5, 4, 3, 2, 1]

# Type conversion
str(123)          # "123"
int("123")        # 123
float("3.14")     # 3.14
list("hello")     # ['h', 'e', 'l', 'l', 'o']
tuple([1, 2, 3])  # (1, 2, 3)

# Useful functions
all([True, True, False])   # False
any([True, False, False])  # True
enumerate(["a", "b", "c"])  # [(0, 'a'), (1, 'b'), (2, 'c')]
zip([1, 2, 3], ["a", "b", "c"])  # [(1, 'a'), (2, 'b'), (3, 'c')]
```

## List/Dict/Set Comprehensions
```python
# List comprehensions
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]
words = [word.upper() for word in ["hello", "world"]]

# Dictionary comprehensions
square_dict = {x: x**2 for x in range(5)}
word_lengths = {word: len(word) for word in ["hello", "world"]}

# Set comprehensions
unique_lengths = {len(word) for word in ["hello", "world", "hi"]}

# Nested comprehensions
matrix = [[i*j for j in range(3)] for i in range(3)]
flattened = [item for row in matrix for item in row]
```

## Modules and Packages
```python
# Importing modules
import math
from datetime import datetime, timedelta
from collections import Counter, defaultdict
import json as js

# Using imported modules
print(math.pi)
now = datetime.now()
counter = Counter([1, 2, 2, 3, 3, 3])

# Creating your own module (mymodule.py)
def my_function():
    return "Hello from my module!"

PI = 3.14159

# Using your module
import mymodule
print(mymodule.my_function())
print(mymodule.PI)
```