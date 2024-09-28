// Question 16
// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. 
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
var guestNames = ["Marium", "Sana", "Alishba"];
console.log("Great News! I found a bigger dinner table.");
// adding a guest in beginning
guestNames.unshift("Rida");
// adding a guest in middle
guestNames.splice(Math.floor(guestNames.length / 2), 0, "Fiza");
// adding guest in end
guestNames.push("Kanwal");
// printing invitation message
guestNames.forEach(function (invite) {
    console.log("Dear ".concat(invite, ", you are cordially invited to dinner."));
});
