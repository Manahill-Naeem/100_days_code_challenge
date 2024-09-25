// Question 03
// Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.

// storing a person name 
let person_Name: string = "Sara"

// printing in lowercase
console.log("Lower case:",person_Name.toLowerCase());

// printing in uppercase
console.log("Upper case:",person_Name.toUpperCase());

// printing in titlecase
console.log("Title case:",person_Name.charAt(0).toUpperCase() + person_Name.slice(1).toLowerCase());


