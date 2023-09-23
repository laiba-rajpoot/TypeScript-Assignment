//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestlist : string [] = ["Irum Ansari", "Ayesha Rajab", "Hira Khalid"];
for (let guest of guestlist) {
    console.log(`Hello ${guest}! I would like to invite you for dinner tomorrow at 8pm.`);
}