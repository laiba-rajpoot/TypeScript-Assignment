/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

let favorite_fruits : string [] = ["Peach", "Banana", "Strawberry"];
if (favorite_fruits.includes("Banana")) {
    console.log("You really like Bananas");
}
if (favorite_fruits.includes("Dragon Fruit")) {
    console.log("You really like Dragon Fruit")
}
if (favorite_fruits.includes("Peach")) {
    console.log("You really like Peaches")
}
if (favorite_fruits.includes("Pineapple")) {
    console.log("You really like Pineapples")
}
if (favorite_fruits.includes("Strawberry")) {
    console.log("You really like Starwberries")
}