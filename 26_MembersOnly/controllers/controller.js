const db = require("../db/queries");
const bcrypt = require('bcryptjs');


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


  

module.exports = {
    addUser,
    logoutUser,
  };