"use strict";
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = ["Cats", "Pumas", "Cheetahs"];
console.log("My favourite animals include:");
for (let animal of animals) {
    console.log(`${animal}`);
}
console.log("\nA statement about each animal:");
for (let animal of animals) {
    console.log(`${animal} have great eyesight and hearing ability.`);
}
console.log("\nA fact about these animals:");
console.log(animals[1], "and", animals[2], "are wild animals and cannot be kept as pets while", animals[0], "can be kept as a pet.");
