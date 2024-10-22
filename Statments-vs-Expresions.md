 ## Building blocks of JavaScript: **statements** and **expressions**.

- *Statements* are instructions that perform actions, like declaring a variable or calling a function.
- *Expressions* are pieces of code that evaluate to a value. These can be used inside statements.

### Statement Examples:

1. Variable Declaration (Statement):
```js
let age = 25;
```

2. Function Call (Statement):
```js
alert('Welcome to the site!');
```

3. If Statement:
```js
if (age > 18) {
    console.log("You are an adult.");
}
```

4. Loop Statement:
```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

### Expression Examples:

1. Mathematical Expression::
```js
let sum = 10 + 5;
```
*```10 + 5``` is an <u>expression</u> because it evaluates to a value, which is then assigned to the variable sum.*

2. String Concatenation (Expression):
```js
let greeting = "Hello, " + "John!";
```
*```"Hello, " + "John!"``` is an <u>expression</u> because  it evaluates to the string ```"Hello, John!"```.*
*

3. Boolean Expression::
```js
let isAdult = age >= 18;
```
*```age >= 18``` is an <u>expression</u>  because it evaluates to either ```true``` or ```false```.*

4. Function Expression::
```js
let square = function(x) {
    return x * x;
};
```
*This function is an <u>expression</u>  because it evaluates to a value (the function itself) that can be assigned to a variable.*