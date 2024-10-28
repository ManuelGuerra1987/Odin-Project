const { Router } = require("express");

const newRouter = Router();

const links = [
    { href: "/", text: "Home" },
    { href: "new", text: "New" },
  ];



newRouter.get("/", (req, res) => {res.render("new", { links: links});});


module.exports = newRouter;