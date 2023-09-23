/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/

let pizzas : string [] = ["Chicken Fajita Pizza", "Peri Peri Pizza", "All Cheese Pizza"];

console.log("Some of my favourite pizza flavours are:");
for (let pizza of pizzas) {
    console.log(`${pizza}`);
}

console.log("\nThe pizzas I like:");
for (let pizza of pizzas) {
    console.log(`I like ${pizza}.`);
}

console.log("\nThe pizza I like the most:");
console.log("My absolute favourite pizza is", pizzas[1], "I mostly order this pizza from Papa John's which is an international food chain with multiple branches across Pakistan.");
console.log("I really love pizza.");