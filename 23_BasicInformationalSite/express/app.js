const express = require("express");
const path = require("path")
const app = express();

const PORT = 3000;
// Get directory path
const dirPath = process.cwd();

app.get("/", (req, res) => {res.sendFile(path.join(dirPath, "index.html")); });

app.get("/about", (req, res) => {res.sendFile(path.join(dirPath, "about.html")); });

app.get("/contact", (req, res) => {res.sendFile(path.join(dirPath, "contact-me.html")); });


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});