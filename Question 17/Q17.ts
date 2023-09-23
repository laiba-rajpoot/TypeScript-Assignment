/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

let GuestList : string [] = ["Irum Ansari", "Ayesha Rajab", "Hira Khalid"];
for (let guest of GuestList) {
    console.log(`Hello ${guest}! I would like to invite you for dinner tomorrow at 8pm.`);
}

let Not_Available = "Hira Khalid"
console.log(`\n${Not_Available} is not available for dinner.`);

GuestList.pop()
GuestList.push("Hina Abid")
console.log("\nNew Guest List");
console.log(GuestList);

console.log("\nNew Invitations:");
for (let guest of GuestList) {
    console.log(`Hello ${guest}! Would you like to have dinner with me at 8pm tomorrow?`)
}

console.log("\nMessage for guests informing regarding the availiability of bigger table:");
for (let guest of GuestList){
    console.log(`Hello ${guest}! I found a bigger dinner table at the restaurant.`);
}
GuestList.unshift("Sara Rizwan");
GuestList.splice(1,0,"Aqsa Farooq");
GuestList.push("Khadija Imran");
console.log("\nUpdated Guest List");
console.log(GuestList);

console.log("\nNew Set of Invitations:");
for (let guest of GuestList){
    console.log(`Hello ${guest}! I would like to confirm your participation in tomorrow's dinner party. Let me know if you are coming!`);
}

console.log("\nMessage for guests indicating that only two people can be invited:")
for (let guest of GuestList){
    console.log(`Hello ${guest}! This is to inform you that the bigger table won't be available at 8pm tomorrow. Now, I want to apologize to everyone as I can only invite two people on the dinner.`);
}
console.log("\nAppology Message for Guests");
console.log((GuestList[5]), "I am sorry, I wont be able to invite you for dinner.");
GuestList.pop()
console.log((GuestList[4]), "I am sorry, I wont be able to invite you for dinner.");
GuestList.pop()
console.log((GuestList[3]), "I am sorry, I wont be able to invite you for dinner.");
GuestList.pop()
console.log((GuestList[2]), "I am sorry, I wont be able to invite you for dinner.");
GuestList.pop()
console.log("\nUpdated Guest List");
console.log(GuestList);

console.log("\nInvitation message for remaining two guests:");
for (let guest of GuestList){
    console.log(`Hello ${guest}! I just wanted to inform that you are still invited to the dinner tomorrow.`);
}

GuestList.pop()
GuestList.pop()
console.log("\nGuest List after removing everyone");
console.log(GuestList);