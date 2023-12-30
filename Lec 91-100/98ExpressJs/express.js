// in this we are making a backend server using ExpressJs
// step-1 :- npm install express
const express = require("express");
const path = require('path');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //console.log(req);
  console.log(req.query);
  // it prints the req query;
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname,'./index.html'));
  //res.send("about");
});

app.get("/contact", (req, res) => {
  res.send("contact");
});

app.get("/map", (req, res) => {
  res.send("map");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// it is a basic server using expressJS
// you can send diff response to diff requests

// it is used to serve html css js through this
// we can serve diff things with diff req url links
// Nodemon
// it very useful it keep your changes updated every time
// without restating your server
