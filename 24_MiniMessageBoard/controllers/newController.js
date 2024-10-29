const messages = require('../db');

const postMessage = (req, res) => {
    
    const newMessage = {text: req.body.messageText, user: req.body.messageUser, added: new Date()};

    messages.push(newMessage);
  
    res.redirect("/");

};

module.exports = { postMessage };