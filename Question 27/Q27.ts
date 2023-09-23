/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

let Alien_Colour : string = "Green"
console.log("Version for Green Colour");
if(Alien_Colour == "Green"){
    console.log("You Earned 5 Points for Shooting the Alien!");
} else if (Alien_Colour == "Yellow") {
    console.log("You Earned 10 Points for Shooting the Alien!")
} else if (Alien_Colour == "Red") {
    console.log("You Earned 15 Points for Shooting the Alien!")
} else {
    console.log("Error");
}

Alien_Colour = "Yellow"
console.log("\nVersion for Yellow Colour");
if(Alien_Colour == "Green"){
    console.log("You Earned 5 Points for Shooting the Alien!");
} else if (Alien_Colour == "Yellow") {
    console.log("You Earned 10 Points for Shooting the Alien!")
} else if (Alien_Colour == "Red") {
    console.log("You Earned 15 Points for Shooting the Alien!")
} else {
    console.log("Error");
}

Alien_Colour = "Red"
console.log("\nVersion for Red Colour");
if(Alien_Colour == "Green"){
    console.log("You Earned 5 Points for Shooting the Alien!");
} else if (Alien_Colour == "Yellow") {
    console.log("You Earned 10 Points for Shooting the Alien!")
} else if (Alien_Colour == "Red") {
    console.log("You Earned 15 Points for Shooting the Alien!")
} else {
    console.log("Error");
}