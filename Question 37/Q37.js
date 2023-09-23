"use strict";
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
let MakeShirt = (size = "L", message = "I love TypeScript") => {
    console.log("Shirt Size:" + size + "\nMessage:" + message);
};
MakeShirt();
MakeShirt("M");
MakeShirt("XS", "Life Is Short, Enjoy Every Moment!");
