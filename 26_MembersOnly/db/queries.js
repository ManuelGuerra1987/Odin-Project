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
    const { rows } = await pool.query(`SELECT posts.id, 
                                              posts.title, 
                                              posts.content, 
                                              posts.created_at, 
                                              users.username 
                                      FROM posts 
                                      JOIN users ON posts.user_id = users.id`);


    return rows;
  }  

async function updateUserToAdmin(user_id) {

    const admin_status = true;

    await pool.query("UPDATE users SET admin = $1 WHERE id = $2", [admin_status, user_id]);
  }    


async function deleteMessage(messageId) {

    try {
      await pool.query("DELETE FROM posts WHERE id = $1", [messageId]);
    
    } catch (error) {
      console.error("Error eliminating item:", error);
      throw error;  
    }
  }      


module.exports = {
    insertUser,
    addUserToClub,
    getUserId,
    addMessage,
    getAllmessages,
    getUsername,
    updateUserToAdmin,
    deleteMessage,
};