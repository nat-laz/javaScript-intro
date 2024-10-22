## JavaScript: Comparison Operators

DEFINITION: **Comparison operators** are used to compare two values. They return a Boolean result (true or false) based on the comparison.

**1. `==` (Equal To)**

Compares two values for **equality**. It performs type coercion, meaning it converts the values to the same type before comparing.

```js
console.log(5 == "5"); // true (because "5" is converted to number)
console.log(5 == 5); // true
console.log(5 == 10); // false
```

**2. `!=` (Not Equal To)**

Compares two values for **inequality**. It performs type coercion before comparing.

```js
console.log(5 != "5"); // false (because "5" is converted to number)
console.log(5 != 10); // true
```

**3. `===` (Strict Equal To)**

Compares two values for **equality** without performing type coercion. Both the value and type must be the same for it to return `true`.

```js
console.log(5 === "5"); // false (because the types are different)
console.log(5 === 5); // true (both the value and type are the same)
```

**4. `!==` (Strict Not Equal To)**

Compares two values for **inequality** without performing type coercion. It returns `true` if the values or types are different.

```js
console.log(5 !== "5"); // true (because the types are different)
console.log(5 !== 5); // false (both the value and type are the same)
```

**(5. `>` Greater Than)**

Returns `true` if the left-hand side value is **greater than** the right-hand side value.

```js
console.log(10 > 5); // true
console.log(3 > 7); // false
```

**6. `<` (Less Than)**

Returns `true` if the left-hand side value is **less than** the right-hand side value.

```js
console.log(5 < 10); // true
console.log(10 < 5); // false
```

**7. `>=`(Greater Than or Equal To)**

Returns `true` if the left-hand side value is **greater than** or equal to the right-hand side value.

```js
console.log(10 >= 10); // true
console.log(10 >= 5); // true
console.log(5 >= 10); // false
```

**📝 Important Note:**

- **Type coercion:** The `==` and `!=` operators convert values to the same type before comparing, which can sometimes produce unexpected results. For example:

```js
console.log(1 == "1"); // true (because "1" is converted to the number 1)
console.log(1 === "1"); // false (because their types are different: number vs string)
```

- **Strict comparison:** The `===` and `!==` operators compare both value and type, which is generally safer and avoids unexpected type conversions.
