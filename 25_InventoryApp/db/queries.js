const pool = require("./pool");

async function getAllCategories() {
  const { rows } = await pool.query("SELECT category FROM categories");
  return rows;
}

async function getItemsByCategory(category) {

  const categoryQuery = await pool.query("SELECT id FROM categories WHERE category = $1", [category]);

  if (categoryQuery.rows.length === 0) {
    return [];
  }

  const category_id = categoryQuery.rows[0].id;

  const { rows } = await pool.query("SELECT * FROM items WHERE category_id = $1", [category_id]);

  return rows;
}

async function getId(category) {

  const categoryQuery = await pool.query("SELECT id FROM categories WHERE category = $1", [category]);

  if (categoryQuery.rows.length === 0) {
    return [];
  }

  const category_id = categoryQuery.rows[0].id;



  return category_id;
}

async function insertItem(name, price, category_id) {
  
  await pool.query("INSERT INTO items (name, price, category_id) VALUES ($1, $2, $3)", [name, price, category_id]);
}



module.exports = {
  getAllCategories,
  getItemsByCategory,
  getId,
  insertItem,
};