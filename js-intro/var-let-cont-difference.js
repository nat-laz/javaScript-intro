var globalVar = "This is declared with var"; // Function-scoped
let blockScopedLet = "This is declared with let"; // Block-scoped
const blockScopedConst = "This is declared with const"; // Block-scoped and cannot be reassigned

console.log(globalVar);
console.log(blockScopedLet);
console.log(blockScopedConst);

// Block scoping example
{
  let insideBlock = "This is block-scoped";
  console.log(insideBlock); // Accessible here
}
// console.log(insideBlock); // Error: insideBlock is not defined, because it's block-scoped

// Function scoping example with var
function testVar() {
  var insideFunction = "This is function-scoped";
  console.log(insideFunction); // Accessible within the function
}
testVar();
// console.log(insideFunction); // Error: insideFunction is not defined outside the function
