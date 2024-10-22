## Primitive data types


DEFINITION: **Primitive** data types are the basic types of values in JavaScript. These types hold simple data and are not objects. 

Here are the most common ones:

1. **Number** - Represents both whole numbers and decimals.

```js
let age = 25;
console.log(typeof age); // Output: number

const height = 175.5;
console.log(typeof height); // Output: number
```

2. **String** - Represents text, written inside quotes.

```js
let firstName = "John"; // double quotes
let lastName = 'Smith' // single quotes

console.log(`Guest: ${firstName} ${lastName}`) // backticks for template literals.

console.log(typeof(firstName)); // Output: string
```

3. **Boolean** - Represents true or false values.

```js
let isStudent = true;
console.log(typeof isStudent); // Output: boolean
```

4. **Undefined** - A variable that has been declared but not yet given a value.

```js
let car; // This is Undefined because it has no value yet
console.log(car); // Output: undefined
console.log(typeof car); // Output: undefined
```

5. **Null** - Represents the intentional absence of any value.

```js
let emptyValue = null; // This is Null
console.log(emptyValue); // null
console.log(typeof emptyValue); // object 
```

**📝 Important Note:** When you check the type of ```null``` using ```typeof```, JavaScript says it's an object. But ```null``` isn't actually an object - it just represents *'nothing'* or *'empty*.
This is a bug in JavaScript from when it was first created, and it was never fixed to avoid breaking old code. So, it's something we just remember!

6. **Symbol** - is used to create objects which will always be unique. These objects can be created using Symbol constructor. (Less common for beginners).

```js
let sym = Symbol("Hello")
console.log(sym); // Output: Symbol(Hello)
console.log(typeof(sym)); // symbol
```