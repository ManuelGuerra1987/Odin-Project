const messages = require('../db');

const getMessage = (req, res) => {
    
    const messageId  = parseInt(req.params.messageId);

    const message = messages[messageId];

    if (!message) {
        return res.status(404).send("Message not found");
    }

    res.render("message", { message: message});};

module.exports = { getMessage };