const express = require("express");
const app = express();
const cors = require('cors');
const router = require("./routes/router");
const path = require("node:path");
require('dotenv').config();
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

app.use(cors());
app.use(express.json());

const assetsPath = path.join(__dirname, "public"); 
app.use(express.static(assetsPath)); 

app.use(express.urlencoded({ extended: true })); 

app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "ejs"); 

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());

app.use("/api/blog", router);


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});