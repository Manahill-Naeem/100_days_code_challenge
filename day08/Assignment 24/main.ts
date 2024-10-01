// Question 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, 
// greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// conditional test

// String Equality and Inequality
let string1: string = "hello";
let string2: string = "world";

console.log("Is string1 equal to 'hello'? I predict True.");
console.log(string1 == "hello");  // True

console.log("Is string1 equal to string2? I predict False.");
console.log(string1 == string2);  // False

// Using the lower case function
let upperString: string = "HELLO";

console.log("Is upperString lowercased equal to 'hello'? I predict True.");
console.log(upperString.toLowerCase() == "hello");  // True

// Numerical tests
let num1: number = 10;
let num2: number = 20;

console.log("Is num1 equal to 10? I predict True.");
console.log(num1 == 10);  // True

console.log("Is num1 not equal to num2? I predict True.");
console.log(num1 != num2);  // True

console.log("Is num1 greater than num2? I predict False.");
console.log(num1 > num2);  // False

console.log("Is num1 less than or equal to 10? I predict True.");
console.log(num1 <= 10);  // True

// Tests using "and" and "or" operators
console.log("Is num1 less than 15 and num2 greater than 15? I predict True.");
console.log(num1 < 15 && num2 > 15);  // True

console.log("Is num1 less than 5 or num2 greater than 15? I predict True.");
console.log(num1 < 5 || num2 > 15);  // True

// // Test whether an item is in an array
// let arr: number[] = [1, 2, 3, 4, 5];

// console.log("Is 3 in the array? I predict True.");
// console.log(arr.includes(3));  // True

// console.log("Is 10 in the array? I predict False.");
// console.log(arr.includes(4));  // False

// // Test whether an item is not in an array
// console.log("Is 7 not in the array? I predict True.");
// console.log(arr.includes(2));  // True
