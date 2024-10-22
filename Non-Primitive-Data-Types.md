## Composite Data Types (Non-Primitive data types)


DEFINITION: **Non-primitive** data types are more complex types that can hold multiple values or properties. Unlike primitive data types, they are mutable (their contents can change), and they are objects in JavaScript.

Here are the most common ones:

1. **Object** - A collection of key-value pairs. Objects can store various data types and provide a way to group related information.

```js
let person = {
  firstName: "John",
  lastName: "Smith",
  age: 30
};

console.log(person); // Output: { firstName: 'John', lastName: 'Smith', age: 30 }
console.log(typeof person); // Output: object
```

2.  **Array** - An ordered list of values. Arrays are a special kind of object where values are stored at numeric indexes.

```js
let fruits = ["apple", "banana", "orange"];
//Elements:   [0,        1,        2 ] 
console.log(fruits); // Output: ['apple', 'banana', 'orange']
console.log(fruits[1]); // Output: banana
console.log(typeof fruits); // Output: object

```
3. **Function** - A block of code designed to perform a particular task. Functions can also be assigned to variables and passed as arguments to other functions.

```js
function greet() {
  return "Hello!";
}

console.log(greet()); // Output: Hello!
console.log(typeof greet); // Output: function

```
