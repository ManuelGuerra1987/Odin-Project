const pool = require("./pool");

async function insertUser(username, hash_password) {

    await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [username, hash_password]);
  }

module.exports = {
    insertUser,
};