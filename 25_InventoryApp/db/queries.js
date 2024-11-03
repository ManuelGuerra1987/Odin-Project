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

async function insertCat(category) {
  
  await pool.query("INSERT INTO categories (category) VALUES ($1)", [category]);
}


async function updatePrice(item_id, new_price) {

  try {
    await pool.query("UPDATE items SET price = $1 WHERE id = $2", [new_price, item_id]);
  
  } catch (error) {
    console.error("Error updating item price:", error);
    throw error;  
  }
}

async function deleteItem(item_id) {

  try {
    await await pool.query("DELETE FROM items WHERE id = $1", [item_id]);
  
  } catch (error) {
    console.error("Error eliminating item:", error);
    throw error;  
  }
}

module.exports = {
  getAllCategories,
  getItemsByCategory,
  getId,
  insertItem,
  insertCat,
  updatePrice,
  deleteItem,
};