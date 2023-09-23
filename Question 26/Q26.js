"use strict";
/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.*/
let alien_colour = "Green";
console.log("Version that runs 'If' Block");
if (alien_colour == "Green") {
    console.log("You Earned 5 Points for Shooting the Alien!");
}
else {
    console.log("You Earned 10 Points for Shooting the Alien!");
}
alien_colour = "Red";
console.log("\nVersion that runs 'Else' Block");
if (alien_colour == "Green") {
    console.log("You Earned 5 Points for Shooting the Alien!");
}
else {
    console.log("You Earned 10 Points for Shooting the Alien!");
}
