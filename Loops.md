 ## JavaScript Loops

DEFINITION: A **loop** is a programming construct that repeats a block of code as long as a specified condition is met. Loops are useful for executing the same block of code multiple times, usually when working with arrays, objects, or iterating through a set of values.

For example:

- If the loop's condition is true, the code inside the loop will execute.
- If the loop's condition is false, the loop will terminate.

**1. ```for``` Loop:**

The ```for``` loop repeats a block of code a specified number of times. It is commonly used when the number of iterations is known in advance.
```js
for (let i = 0; i < 5; i++) {
  console.log(i); 
}
// Output: 0, 1, 2 , 3, 4
```

**2. ```for-in``` Loop:**

The ```for-in``` loop is used to iterate over the properties of an object (keys). It loops through the object’s keys and allows you to access each one.
```js
let person = { name: "John", age: 30, city: "New York" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}
/*Output: name: John
          age: 30
          city: New York
*/
```

**3. ```for-of``` Loop:**

The ```for-of loop``` is used to iterate over iterable objects such as arrays or strings. It loops through the values of an iterable.
```js
let numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log(num); 
}
// Output: 1, 2, 3, 4, 5
```

**4.  ```while``` Loop:**

The ```while``` loop repeats a block of code as long as the specified condition remains true. It is commonly used when the number of iterations is not known in advance.
```js
let hoursOpen = 0;
let closingHour = 5; // The shop closes after 5 hours

while (hoursOpen < closingHour) {
  console.log(`The shop is open. We are in hour ${hoursOpen + 1}.`);
  hoursOpen++; // Same as: hoursOpen = hoursOpen + 1
}

console.log("The shop is now closed.");
```