"use strict";
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(items) {
    console.log(`This sandwich has ${items.join(", ")}.`);
}
sandwich(['Chicken Teriyaki', 'Thousand Island Sauce', 'Lettuce']);
sandwich(['Turkey Bacon', 'Cheese', 'Onions']);
sandwich(['Grilled Chicken', 'Chipotle Sauce', 'Corns']);
