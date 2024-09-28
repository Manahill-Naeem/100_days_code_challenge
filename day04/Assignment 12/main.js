// Question 12
// Greetings: Start with the array you used in Exercise 11, 
// but instead of just printing each person’s name, print a message to them. 
// The text of each message should be the same, 
// but each message should be personalized with the person’s name.
var friendsName = ["Aisha", "Wania", "Maria", "Neha"];
//   printing each name with message
friendsName.forEach(function (name) {
    console.log("How are you ".concat(name, "?"));
});
