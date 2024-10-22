## JavaScript Conditionals

DEFINITION: A **condition** is an expression that evaluates to either true or false. In programming, conditions are used to make decisions by executing certain code blocks based on whether the condition is met (true) or not met (false).

For example:

- If a condition is true, one set of actions will be taken.
- If the condition is false, a different action (or no action) can occur.

**1. If Statement:**

Executes a block of code if a specified condition is ```true```.
```js
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}

```

**2. If-Else Statement:**

Executes one block of code if the condition is ```true```, and another block if it is ```false```.
```js
let age = 16;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

**3. If - Else If - Else Statement:**

Allows multiple conditions to be checked in sequence.
```js
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

```

**4.  Ternary Operator:**

A shorthand for ```if-else``` statements. It takes three operands.
```js
let isLoggedIn = true;

// Syntax: condition ? expression1 : expression2
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);

```