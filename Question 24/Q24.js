"use strict";
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
let FavFood = "Sandwich";
console.log("Test for Equality & Inequality With Strings");
console.log("Is FavFood == Sandwich? I predict True.");
console.log(FavFood == "Sandwich");
console.log("Is FavFood != Sandwich? I predict False.");
console.log(FavFood != "Sandwich");
let colour = "Purple";
console.log("\nTest involving Lower Case Funtion");
console.log("Is colour == Purple? I predict True.");
console.log(colour == "Purple");
console.log("Is colour == purple? I predict False.");
console.log(colour == "purple");
let FavNum = 8;
console.log("\nNumerical Tests");
console.log("Is FavNum == 8? I predict True.");
console.log(FavNum == 8);
console.log("Is FavNum != 8? I predict False.");
console.log(FavNum != 8);
console.log("Is FavNum > 7? I predict True.");
console.log(FavNum > 7);
console.log("Is FavNum < 7? I predict False.");
console.log(FavNum < 7);
console.log("Is FavNum >= 5? I predict True.");
console.log(FavNum >= 5);
console.log("Is FavNum <= 5? I predict False.");
console.log(FavNum <= 5);
console.log("\nTests using 'and' and 'or' Operators");
console.log("Is FavNum > 7 && FavNum == 8? I predict True.");
console.log(FavNum > 7 && FavNum == 8);
console.log("Is FavNum < 9 && FavNum == 7? I predict False.");
console.log(FavNum < 9 && FavNum == 7);
console.log("Is FavNum > 7 || FavNum == 7? I predict True.");
console.log(FavNum > 7 || FavNum == 7);
console.log("Is FavNum < 7 || FavNum != 8? I predict False.");
console.log(FavNum < 7 || FavNum != 8);
let array = [FavFood, colour];
console.log("\n Test whether an item is in an array");
console.log("Does array include Sandwich? I predict True.");
console.log(array.includes("Sandwich"));
console.log("\n Test whether an item is not in an array");
console.log("Does array include Pizza? I predict False.");
console.log(array.includes("Pizza"));
