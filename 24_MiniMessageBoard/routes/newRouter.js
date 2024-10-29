const { Router } = require("express");
const { postMessage } = require('../controllers/newController');

const newRouter = Router();

const links = [
    { href: "/", text: "Home" },
    { href: "new", text: "New" },
  ];


newRouter.get("/", (req, res) => {res.render("form", { links: links});});

newRouter.post("/", postMessage);

module.exports = newRouter;
