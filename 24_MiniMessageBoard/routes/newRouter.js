const { Router } = require("express");
const messages = require('../db');

const newRouter = Router();

const links = [
    { href: "/", text: "Home" },
    { href: "new", text: "New" },
  ];


newRouter.get("/", (req, res) => {res.render("form", { links: links});});

newRouter.post("/", (req, res) => {

  const newMessage = {text: req.body.messageText, user: req.body.messageUser, added: new Date()};

  messages.push(newMessage);

  res.redirect("/");

});


module.exports = newRouter;
