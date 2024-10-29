const { Router } = require("express");
const messages = require('../db');

const indexRouter = Router();

const links = [
    { href: "/", text: "Home" },
    { href: "new", text: "New" },
  ];


indexRouter.get("/", (req, res) => {res.render("index", { links: links, messages: messages});});


module.exports = indexRouter;