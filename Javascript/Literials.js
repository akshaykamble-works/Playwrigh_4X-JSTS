/*
Value that can be assigned to the variable.
A literal is a fixed value that is written directly in the code.
For example, the number 42, the string "Hello", and the boolean value true are all literals.
typeof method is used to identify which type of information is store in the variable
*/
let numberLiteral = 42; // Number literal
let stringLiteral = "Hello"; // String literal
let booleanLiteral = true; // Boolean literal
let arrayLiteral = [1, 2, 3]; // Array literal
let objectLiteral = { key: "value" }; // Object literal
let nullLiteral = null; // Null literal
let undefinedLiteral; // Undefined literal
let bigIntLiteral = 9007199254740991n; // BigInt literal
let regExpLiteral = /ab+c/; // Regular expression literal

console.log(numberLiteral); // Output: 42
console.log(stringLiteral); // Output: Hello
console.log(booleanLiteral); // Output: true
console.log(arrayLiteral); // Output: [1, 2, 3]
console.log(objectLiteral); // Output: { key: "value" }
console.log(nullLiteral); // Output: null
console.log(undefinedLiteral); // Output: undefined
console.log(bigIntLiteral); // Output: 9007199254740991n
console.log(regExpLiteral); // Output: /ab+c/
console.log("=========================================");
console.log(typeof numberLiteral); // Output: number
console.log(typeof stringLiteral); // Output: string
console.log(typeof booleanLiteral); // Output: boolean
console.log(typeof arrayLiteral); // Output: object
console.log(typeof objectLiteral); // Output: object
console.log(typeof nullLiteral); // Output: object
console.log(typeof undefinedLiteral); // Output: undefined
console.log(typeof bigIntLiteral); // Output: bigint
console.log(typeof regExpLiteral); // Output: object