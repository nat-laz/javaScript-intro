const a = 10;
const b = 3;

let result = a % b;

// Explanation:
// 10 / 3 = 3 (integer division, meaning we ignore the remainder for now)
// 3 * 3 = 9 (multiply the result of the integer division by 3)
// 10 - 9 = 1 (subtract 9 from 10 to find the remainder)

// The remainder is 1, so 10 % 3 results in 1
console.log("Modulus result = ", result); // Output: Modulus result = 1
