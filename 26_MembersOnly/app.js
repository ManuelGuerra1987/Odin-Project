const express = require("express");
const app = express();
const router = require("./routes/router");
const path = require("node:path");
require('dotenv').config();
const { createTables } = require("./db/queries");

const assetsPath = path.join(__dirname, "public"); // Our app should look for static assets in /public subdirectory
app.use(express.static(assetsPath)); // Middleware function that enables the use of static assets like CSS

app.use(express.urlencoded({ extended: true })); // In order to get and use the data from the form

app.set("views", path.join(__dirname, "views")); // Our app should look for templates in /views subdirectory
app.set("view engine", "ejs"); // This enables EJS as the view engine

app.use("/", router);


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});