"use strict";
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
let locations = ["Bali", "Athens", "Ibiza", "Santorini", "Rome"];
console.log("\nOriginal Order");
console.log(locations);
console.log("\nAlphabetical Order with Modifying Original Order of Array");
console.log([...locations].sort());
console.log("\nOriginal Order since List is not Modified");
console.log(locations);
console.log("\nReverse Alphabetical Order without Modifying the List");
console.log([...locations].sort().reverse());
console.log("\nOriginal Order again since List is not Modified");
console.log(locations);
console.log("\nReverse Order");
console.log(locations.reverse());
console.log("\nReversing the Array Order Again to change it to Original");
console.log(locations.reverse());
console.log("\nSorting array to store in Alphabetical Order");
console.log(locations.sort());
console.log("\nSorting array to store in Reverse Alphabetical Order");
console.log(locations.sort().reverse());
