---
title: JavaScript Cheatsheet
description: ES6+ features and modern JavaScript methods
category: Languages
lastUpdated: 2024-01-15
filename: javascript.md
tags: ["javascript", "es6", "frontend", "web-development"]
---

# JavaScript Cheatsheet

## Variables & Data Types
```javascript
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
```

## Template Literals
```javascript
const name = "Alice";
const age = 25;

// Template literals
const message = `Hello, ${name}! You are ${age} years old.`;
const multiline = `
  This is a
  multiline string
  with ${name}
`;

// Tagged template literals
function highlight(strings, ...values) {
  return strings.reduce((result, string, i) => {
    return result + string + (values[i] ? `<mark>${values[i]}</mark>` : '');
  }, '');
}

const highlighted = highlight`Hello ${name}, you are ${age} years old!`;
```

## Arrow Functions
```javascript
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
```

## Destructuring
```javascript
// Array destructuring
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
const [primary, ...secondary] = colors;
const [r, g, b = "yellow"] = colors; // Default value

// Object destructuring
const person = { name: "John", age: 30, city: "NYC" };
const { name, age } = person;
const { name: fullName, age: years } = person; // Rename
const { name, age, country = "USA" } = person; // Default value

// Nested destructuring
const user = {
  id: 1,
  profile: {
    name: "Alice",
    settings: { theme: "dark" }
  }
};
const { profile: { name, settings: { theme } } } = user;

// Function parameter destructuring
function greet({ name, age = 0 }) {
  return `Hello ${name}, you are ${age} years old`;
}
```

## Spread & Rest Operators
```javascript
// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

// Rest operator
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

const [first, ...rest] = [1, 2, 3, 4, 5];
const { name, ...otherProps } = { name: "John", age: 30, city: "NYC" };
```

## Array Methods
```javascript
const numbers = [1, 2, 3, 4, 5];
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

// Transformation
const doubled = numbers.map(n => n * 2);
const names = users.map(user => user.name);

// Filtering
const evens = numbers.filter(n => n % 2 === 0);
const adults = users.filter(user => user.age >= 18);

// Reduction
const sum = numbers.reduce((acc, n) => acc + n, 0);
const totalAge = users.reduce((acc, user) => acc + user.age, 0);

// Finding
const found = numbers.find(n => n > 3);
const foundIndex = numbers.findIndex(n => n > 3);
const exists = numbers.some(n => n > 4);
const allPositive = numbers.every(n => n > 0);

// Other useful methods
numbers.forEach(n => console.log(n));
const sorted = [...numbers].sort((a, b) => b - a);
const reversed = [...numbers].reverse();
const sliced = numbers.slice(1, 4);
```

## Object Methods
```javascript
const obj = { a: 1, b: 2, c: 3 };

// Object methods
Object.keys(obj);           // ["a", "b", "c"]
Object.values(obj);         // [1, 2, 3]
Object.entries(obj);        // [["a", 1], ["b", 2], ["c", 3]]

// Object creation and manipulation
const newObj = Object.assign({}, obj, { d: 4 });
const copied = { ...obj };
const frozen = Object.freeze(obj);

// Object.fromEntries
const entries = [["name", "John"], ["age", 30]];
const person = Object.fromEntries(entries);

// Property descriptors
Object.defineProperty(obj, 'hidden', {
  value: 'secret',
  enumerable: false,
  writable: false
});
```

## Promises & Async/Await
```javascript
// Creating promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve("Success!");
    } else {
      reject(new Error("Failed!"));
    }
  }, 1000);
});\n\n// Using promises\npromise\n  .then(result => console.log(result))\n  .catch(error => console.error(error))\n  .finally(() => console.log("Done"));\n\n// Async/await\nasync function fetchData() {\n  try {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error:', error);\n    throw error;\n  }\n}\n\n// Promise utilities\nconst promises = [promise1, promise2, promise3];\nPromise.all(promises);        // Wait for all\nPromise.allSettled(promises); // Wait for all, get results\nPromise.race(promises);       // First to complete\nPromise.any(promises);        // First to resolve\n```\n\n## Classes\n```javascript\nclass Person {\n  // Private fields\n  #id;\n  \n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n    this.#id = Math.random();\n  }\n  \n  // Methods\n  greet() {\n    return `Hello, I'm ${this.name}`;\n  }\n  \n  // Getter\n  get info() {\n    return `${this.name} (${this.age})`;\n  }\n  \n  // Setter\n  set age(value) {\n    if (value < 0) throw new Error('Age cannot be negative');\n    this._age = value;\n  }\n  \n  // Static method\n  static compare(person1, person2) {\n    return person1.age - person2.age;\n  }\n  \n  // Private method\n  #generateId() {\n    return Math.random().toString(36);\n  }\n}\n\n// Inheritance\nclass Student extends Person {\n  constructor(name, age, studentId) {\n    super(name, age);\n    this.studentId = studentId;\n  }\n  \n  greet() {\n    return `${super.greet()}, I'm a student`;\n  }\n}\n```\n\n## Modules (ES6)\n```javascript\n// Exporting (math.js)\nexport const PI = 3.14159;\nexport function add(a, b) {\n  return a + b;\n}\nexport default function multiply(a, b) {\n  return a * b;\n}\n\n// Importing\nimport multiply, { PI, add } from './math.js';\nimport * as math from './math.js';\nimport { add as sum } from './math.js';\n\n// Dynamic imports\nconst module = await import('./math.js');\nconst { add } = await import('./math.js');\n```\n\n## Error Handling\n```javascript\n// Try-catch\ntry {\n  const result = riskyOperation();\n  console.log(result);\n} catch (error) {\n  if (error instanceof TypeError) {\n    console.error('Type error:', error.message);\n  } else {\n    console.error('Unknown error:', error);\n  }\n} finally {\n  console.log('Cleanup');\n}\n\n// Custom errors\nclass ValidationError extends Error {\n  constructor(message, field) {\n    super(message);\n    this.name = 'ValidationError';\n    this.field = field;\n  }\n}\n\nfunction validateEmail(email) {\n  if (!email.includes('@')) {\n    throw new ValidationError('Invalid email format', 'email');\n  }\n}\n```\n\n## Regular Expressions\n```javascript\n// Creating regex\nconst pattern1 = /hello/i;           // Literal notation\nconst pattern2 = new RegExp('hello', 'i'); // Constructor\n\n// Common patterns\nconst email = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\nconst phone = /^\\+?[1-9]\\d{1,14}$/;\nconst url = /^https?:\\/\\/.+/;\n\n// Methods\nconst text = \"Hello World\";\npattern1.test(text);        // true/false\ntext.match(pattern1);       // Match details\ntext.replace(/hello/i, 'Hi'); // \"Hi World\"\ntext.split(/\\s+/);          // [\"Hello\", \"World\"]\n\n// Groups and captures\nconst datePattern = /(\\d{4})-(\\d{2})-(\\d{2})/;\nconst match = \"2024-01-15\".match(datePattern);\n// match[0] = \"2024-01-15\", match[1] = \"2024\", etc.\n```\n\n## DOM Manipulation\n```javascript\n// Selecting elements\nconst element = document.getElementById('myId');\nconst elements = document.querySelectorAll('.myClass');\nconst first = document.querySelector('div');\n\n// Creating elements\nconst div = document.createElement('div');\ndiv.textContent = 'Hello';\ndiv.className = 'my-class';\ndiv.setAttribute('data-id', '123');\n\n// Modifying elements\nelement.innerHTML = '<strong>Bold text</strong>';\nelement.textContent = 'Plain text';\nelement.style.color = 'red';\nelement.classList.add('active');\nelement.classList.remove('inactive');\nelement.classList.toggle('visible');\n\n// Event handling\nelement.addEventListener('click', (event) => {\n  event.preventDefault();\n  console.log('Clicked!');\n});\n\n// Modern event handling\nelement.onclick = (e) => console.log('Clicked');\n```\n\n## Local Storage & Session Storage\n```javascript\n// Local Storage (persists)\nlocalStorage.setItem('user', JSON.stringify({ name: 'John' }));\nconst user = JSON.parse(localStorage.getItem('user'));\nlocalStorage.removeItem('user');\nlocalStorage.clear();\n\n// Session Storage (session only)\nsessionStorage.setItem('token', 'abc123');\nconst token = sessionStorage.getItem('token');\n\n// Check if storage is available\nfunction storageAvailable(type) {\n  try {\n    const storage = window[type];\n    const x = '__storage_test__';\n    storage.setItem(x, x);\n    storage.removeItem(x);\n    return true;\n  } catch (e) {\n    return false;\n  }\n}\n```\n\n## Fetch API\n```javascript\n// GET request\nfetch('/api/users')\n  .then(response => {\n    if (!response.ok) {\n      throw new Error('Network response was not ok');\n    }\n    return response.json();\n  })\n  .then(data => console.log(data))\n  .catch(error => console.error('Error:', error));\n\n// POST request\nfetch('/api/users', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json',\n    'Authorization': 'Bearer token'\n  },\n  body: JSON.stringify({ name: 'John', age: 30 })\n})\n.then(response => response.json())\n.then(data => console.log(data));\n\n// Async/await version\nasync function fetchUsers() {\n  try {\n    const response = await fetch('/api/users');\n    if (!response.ok) throw new Error('Failed to fetch');\n    const users = await response.json();\n    return users;\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\n```