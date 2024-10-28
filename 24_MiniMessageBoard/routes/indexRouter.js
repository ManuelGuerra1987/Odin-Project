const { Router } = require("express");

const indexRouter = Router();

const links = [
    { href: "/", text: "Home" },
    { href: "new", text: "New" },
  ];

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];


indexRouter.get("/", (req, res) => {res.render("index", { links: links, messages: messages});});


module.exports = indexRouter;