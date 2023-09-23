/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/

let guest_list : string [] = ["Irum Ansari", "Ayesha Rajab", "Hira Khalid"];
for (let guest of guest_list) {
    console.log(`Hello ${guest}! I would like to invite you for dinner tomorrow at 8pm.`);
}

let notavailable = "Hira Khalid"
console.log(`\n${notavailable} is not available for dinner.`);

guest_list.pop()
guest_list.push("Hina Abid")
console.log("\nNew Guest List");
console.log(guest_list);

console.log("\nNew Invitations:");
for (let guest of guest_list) {
    console.log(`Hello ${guest}! Would you like to have dinner with me at 8pm tomorrow?`);
}