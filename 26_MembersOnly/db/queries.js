const pool = require("./pool");

async function insertUser(username, hash_password) {

    await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [username, hash_password]);
  }

async function getUserId(username) {

    const { rows } = await pool.query("SELECT id FROM users WHERE username = $1", [username]);
    const user_id = parseInt(rows[0].id);

    return user_id;
  } 
  
  async function getUsername(user_id) {

    const { rows } = await pool.query("SELECT username FROM users WHERE id = $1", [user_id]);
    const username = rows[0].username;

    return username;
  }    

async function addUserToClub(user_id) {

    const member_status = true;

    await pool.query("UPDATE users SET member = $1 WHERE id = $2", [member_status, user_id]);
  }  

async function addMessage(title,content, user_id) {

    await pool.query("INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3)", [title, content, user_id]);
  }  


async function getAllmessages() {
    const { rows } = await pool.query("SELECT * FROM posts");
    return rows;
  }  


module.exports = {
    insertUser,
    addUserToClub,
    getUserId,
    addMessage,
    getAllmessages,
    getUsername,
};