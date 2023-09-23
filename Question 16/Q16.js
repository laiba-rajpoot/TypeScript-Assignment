"use strict";
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
let Guestlist = ["Irum Ansari", "Ayesha Rajab", "Hira Khalid"];
for (let guest of Guestlist) {
    console.log(`Hello ${guest}! I would like to invite you for dinner tomorrow at 8pm.`);
}
let not_available = "Hira Khalid";
console.log(`\n${not_available} is not available for dinner.`);
Guestlist.pop();
Guestlist.push("Hina Abid");
console.log("\nNew Guest List");
console.log(Guestlist);
console.log("\nNew Invitations:");
for (let guest of Guestlist) {
    console.log(`Hello ${guest}! Would you like to have dinner with me at 8pm tomorrow?`);
}
console.log("\nMessage for guests informing regarding the availiability of bigger table:");
for (let guest of Guestlist) {
    console.log(`Hello ${guest}! I found a bigger dinner table at the restaurant.`);
}
Guestlist.unshift("Sara Rizwan");
Guestlist.splice(1, 0, "Aqsa Farooq");
Guestlist.push("Khadija Imran");
console.log("\nUpdated Guest List");
console.log(Guestlist);
console.log("\nNew Set of Invitations:");
for (let guest of Guestlist) {
    console.log(`Hello ${guest}! I would like to confirm your participation in tomorrow's dinner party. Let me know if you are coming!`);
}
