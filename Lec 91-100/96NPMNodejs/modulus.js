console.log("Ishan Garg");

// procedure
// step 1:- node "FULL PATH"
// step 2:- npm init
// npm = Node Packet Manager
// we creating a server by it
// make server name all things

// we can use (npm init -y)
// to create a server immediatly without filling values in it
// name of server is taken as folder name

// in Nodejs we can use 3rd party modulus 
// which are known as packages
// we can use them

// we can install Nodejs modules can use them
// npm install
// is used to install some basic package req to 
// run the program from the descrition list of 
// package.json

// we have to del the node_modulus folder
// send all the remaning files
// before starting in others pc run (npm intall) in it

//Required package
var pdf = require("pdf-creator-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("template.html", "utf8");

var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};

var users = [
    {
      name: "Shyam",
      age: "26",
    },
    {
      name: "Navjot",
      age: "26",
    },
    {
      name: "Vitthal",
      age: "26",
    },
  ];
  var document = {
    html: html,
    data: {
      users: users,
    },
    path: "./output.pdf",
    type: "",
  };


pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
