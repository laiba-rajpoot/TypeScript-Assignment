"use strict";
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
let current_users = ["Laiba", "Sana", "Momina", "Khadija", "Fatima"];
let new_users = ["Ayyan", "Mustafa", "Ali", "fatima", "SANA"];
let CurrentLowerCaseUsers = current_users.map(user => user.toLowerCase());
for (let users of new_users) {
    let NewLowerCaseUsers = users.toLowerCase();
    if (CurrentLowerCaseUsers.includes(NewLowerCaseUsers)) {
        console.log("Please select another username as its already been used.");
    }
    else
        console.log("Username is Available!");
}
