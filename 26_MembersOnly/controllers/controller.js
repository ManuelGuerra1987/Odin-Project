const db = require("../db/queries");
const bcrypt = require('bcryptjs');


async function index(req, res) {

    const messages = await db.getAllmessages(); 

    res.render("index", { user: req.user, messages: messages }); 
  }

async function addUser(req, res) {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const hash_password = await bcrypt.hash(password, 10); 
        
        await db.insertUser(username, hash_password);
        
        res.redirect("/");
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).send("Error adding user");
    }
}

function logoutUser(req, res, next) {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
}

async function clubCheck(req, res) {
    try {
        const passcode_submitted = req.body.passcode;
        const passcode = "oro";
        const username = req.user.username;
        const user_id = await db.getUserId(username);
  
        if (passcode_submitted === passcode){

            await db.addUserToClub(user_id);
            console.log("Welcome to the club");
            res.redirect("/");
        }
        else{
            console.log("wrong passcode");
            res.redirect("/");
        }
        
    } catch (error) {
        console.error("Error adding user to the club:", error);
        res.status(500).send("Error adding user to the club");
    }
}


async function addMessage(req, res) {
    try {
        const title = req.body.title;
        const content = req.body.content;
        const user_id = req.user.id;
  
        await db.addMessage(title,content, user_id);
            console.log("message added");
            res.redirect("/");

    }
     catch (error) {
        console.error("Error adding message:", error);
        res.status(500).send("Error adding message");
    }
}


async function adminCheck(req, res) {
    try {
        const passcode_submitted = req.body.passcode;
        const passcode = "diamante";
        const username = req.user.username;
        const user_id = await db.getUserId(username);
  
        if (passcode_submitted === passcode){

            await db.updateUserToAdmin(user_id);
            console.log("Now you are a admin");
            res.redirect("/");
        }
        else{
            console.log("wrong passcode");
            res.redirect("/");
        }
        
    } catch (error) {
        console.error("Error adding user to the club:", error);
        res.status(500).send("Error adding user to the club");
    }
}

async function delMessage (req, res) {
    
    const messageId  = parseInt(req.params.messageId);
    await db.deleteMessage(messageId);

    res.redirect("/");

}
  

module.exports = {
    index,
    addUser,
    logoutUser,
    clubCheck,
    addMessage,
    adminCheck,
    delMessage,
  };