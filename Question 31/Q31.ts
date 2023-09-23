/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/

let Usernames : string [] = ["Admin", "Laiba", "Sarah", "Saadia", "Naadia"];
console.log("Exercise 30");
for (let username of Usernames) {
   if (username == "Admin") { 
    console.log("Hello Admin! Would you like to see a status report?"); 
    } else {
        console.log(`Hello ${username}! Thank You for logging in again.`);
        }   
     }

console.log("\nWhen the array is not empty:");
if (Usernames.length == 0) {
    console.log("We need to find some users!");
} else if (Usernames.length > 0) {
    console.log("We have users!");
}

Usernames.splice(0, 5);
console.log("\nArray after removing all users");
console.log(Usernames);

console.log("\nWhen the array is empty:");
if (Usernames.length == 0) {
    console.log("We need to find some users!");
} else if (Usernames.length > 0) {
    console.log("We have users!");
}