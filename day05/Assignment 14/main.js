// Question 14
// Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.
// Guest list
var guestList = ["Marium", "Sonia", "Alishba"];
// printing a  messsage
guestList.forEach(function (name) {
    console.log("Dear ".concat(name, ",you are cordially invited to dinner."));
});
