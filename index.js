const express = require("express");

//set express app
const app = express();
const port = process.env.port || 888;
const path = require("path");

//define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
// set up public folder
app.use(express.static(path.join(__dirname, "public")));

//test express app
app.get("/", (request, response) => {
  //response.status(200).send("Test page again");
  response.render("index", { title: "Home" });
});
app.get("/about", (request, response) => {
  response.render("about", { title: "About" });
});

//set up server listen
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
