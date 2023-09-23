"use strict";
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magician_names = ["Houdini", "Criss Angel", "Dynamo", "Dante", "Teller"];
function show_magicians() {
    for (let magician of magician_names) {
        console.log(magician);
    }
}
show_magicians();
