"use strict";
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let Magician_names = ["Houdini", "Criss Angel", "Dynamo", "Dante", "Teller"];
function show_Magicians() {
    for (let magician of Magician_names) {
        console.log(magician);
    }
}
function make_Great() {
    for (let magician of Magician_names) {
        console.log(`The Great ${magician}`);
    }
}
console.log('\nNormal Names:');
show_Magicians();
console.log('\nGreat Names:');
make_Great();
