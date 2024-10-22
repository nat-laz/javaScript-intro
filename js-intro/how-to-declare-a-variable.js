/*
DEFINITION: A variable is like a container that holds information. 
You can store different types of information in it, like numbers or words, 
and you can change the information later if needed.

How to name variables: 
1. Variable names can include letters, digits, underscores (_), and dollar signs ($).
2. Variable names must begin with a letter, underscore (_), or dollar sign ($). 
   They cannot begin with a digit.
3. Variable names are case-sensitive, which means `myVariable` and `myvariable` are different.
4. JavaScript reserved keywords (special words used by the language) **cannot** be used as variable names.

Keywords that cannot be used as variable names include: 
- `break`
- `case`
- `catch`
- `class`
- `const`
- `continue`
- `debugger`
- `default`
- `delete`
- `do`
- `else`
- `export`
- `extends`
- `finally`
- `for`
- `function`
- `if`
- `import`
- `in`
- `instanceof`
- `let`
- `new`
- `return`
- `super`
- `switch`
- `this`
- `throw`
- `try`
- `typeof`
- `var`
- `void`
- `while`
- `with`
- `yield`

📝 **Note**: Avoid using reserved keywords to name your variables, 
as they are part of the JavaScript syntax and have special meanings.
*/

let firstName = "Max";
// console.log(firstName);

firstName = "Maximilain";
// console.log(firstName);

let a = 2;
// let b = 3;
// console.log("Sum: ", a + b);

const dateOfBirth = "10.10.1990";

let firstName1 = "John"; // double quotes
let lastName = "Smith"; // single quotes

console.log(`Guest: ${firstName} ${lastName}`);
console.log("Guest: " + firstName + " " + lastName);

let car; // This is Undefined because it has no value yet
console.log(car); // Output: undefined
console.log(typeof car); // Output: undefined

let emptyValue = null; // This is Null
console.log(emptyValue); // null
console.log(typeof emptyValue); // object

let age = "1";
const age2 = 1;
console.log(age === age2); // Output: false => as here is compared thier types and not the value
