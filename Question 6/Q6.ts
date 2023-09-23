//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let personName : string = "\t Muhammad Ayyan \n";
console.log("Name with White Spaces");
console.log(`My name is:${personName}`);

let strippedname : string = personName.trim();
console.log("Name after Striping the White Spaces");
console.log(`My name is: ${strippedname}`);