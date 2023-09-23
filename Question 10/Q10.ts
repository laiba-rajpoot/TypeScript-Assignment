//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

//Comments:

//This program is from Question4. It decribes a way to print quotes using cancadenation method. We basically create a dynamic string using backticks, dollar sign, and curly brackets. This is also called as template literals.  

let quote1: string = "\"I was taught that the way of progress was neither swift nor easy.\"";
console.log(`Marie Curie once said, ${quote1}`);


//This program is from Question5. It also decribes a way to print quotes using cancadenation method. In this case, we are integrating the message as a variable too. We also use "\" to showcase quotation marks.

let famousperson: string = "Marie Curie";
let message1: string = "\"Have no fear of perfection; you'll never reach it.\"";
console.log(`${famousperson} once said, ${message1}`);