//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let Magician_Names : string [] = ["Houdini", "Criss Angel", "Dynamo", "Dante", "Teller"];
function make_great(){
    for (let magician of Magician_Names){
        console.log(`The Great ${magician}`);
        
    }
}
console.log("\nGreat Magicians:");
make_great();