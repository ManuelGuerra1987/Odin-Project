const messages = require('../db');

function postMessage (req, res) {
    
    const newMessage = {text: req.body.messageText, user: req.body.messageUser, added: new Date()};
    messages.push(newMessage);
    res.redirect("/");

}

module.exports = { postMessage };