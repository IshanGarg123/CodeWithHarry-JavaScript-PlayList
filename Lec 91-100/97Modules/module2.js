// const hello = require("./module1");
// hello.hello();
// hello.ahello("Rahul Garg");

// as now hello is a object
// destructuring of the object will be done

// it will run the hello function
// require is used to import a file which exports some
// functions in it

// import from module1.js file
// const {hello,ahello} = require("./module1");
// hello();
// ahello("RAM GARG");


// by using ES6 Function export
// harry is a default function
// 
import harry,{hello,ahello} from "./module3.js"
hello();
ahello("RAM GARG");
harry();
