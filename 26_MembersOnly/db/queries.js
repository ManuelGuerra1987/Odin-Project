const pool = require("./pool");

async function insertUser(username, hash_password) {

    await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [username, hash_password]);
  }

async function getUserId(username) {

    const { rows } = await pool.query("SELECT id FROM users WHERE username = $1", [username]);
    const user_id = parseInt(rows[0].id);

    return user_id;
  }  

async function addUserToClub(user_id) {

    const member_status = true;

    await pool.query("UPDATE users SET member = $1 WHERE id = $2", [member_status, user_id]);
  }  

module.exports = {
    insertUser,
    addUserToClub,
    getUserId,
};