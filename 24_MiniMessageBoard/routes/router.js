const { Router } = require("express");
const messages = require('../db');
const { getMessage } = require('../controllers/messageController');
const { postMessage } = require('../controllers/newController');

const router = Router();


router.get("/", (req, res) => {res.render("index", { messages: messages});});

router.get("/new", (req, res) => {res.render("form");});

router.post("/new", postMessage);

router.get("/message/:messageId", getMessage);


module.exports = router;