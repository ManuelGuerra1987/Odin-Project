const { Router } = require("express");
const messages = require('../db');

const messageRouter = Router();




messageRouter.get("/:messageId", (req, res) => {
    
    const messageId  = parseInt(req.params.messageId);

    console.log(messageId)

    const message = messages[messageId];

    if (!message) {
        return res.status(404).send("Mensaje no encontrado.");
    }

    res.render("message", { message: message});});


module.exports = messageRouter;