// Question 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.
// • Start with your program from Exercise 16. 
// Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, 
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, 
// letting them know they’re still invited.
// • Remove the last two names from your list,
// so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.

let guest_List:string[] = ["Rida","Marium","Sana","Fiza","Alishba","Kanwal"]

console.log("Unfortunately, I can invite only two people for dinner.");
while (guest_List.length > 2){
    let removedGuest = guest_List.pop()
    console.log(`Sorry, ${removedGuest}, I can't invite to dinner.`);
}
guest_List.forEach(name => {
    console.log(`Dear ${name}, you are still invited to dinner.`);
});
guest_List.splice(0, guest_List.length)
    console.log(guest_List);
    