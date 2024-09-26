// Question 06
// Stripping Names: Store a person’s name,
// and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. 
// Print the name once, so the whitespace around the name is displayed. 
// Then print the name after striping the white spaces.
// storing a person name
var personName = "\t \n Sara \n \t";
// printing name with white space
console.log("White Space Name:", personName);
// printing stipped name
console.log("Stripped Name:", personName.trim());
