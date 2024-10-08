// Question 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. 
// Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, 
// replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var guest_list = ["Marium", "Sonia", "Alishba"];
var unableToAttend = "Sonia";
console.log("".concat(unableToAttend, " can't make the dinner."));
// replacing
var newGuest = "Sana";
guest_list[guest_list.indexOf(unableToAttend)] = newGuest;
// printing message for invitation
guest_list.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner."));
});
