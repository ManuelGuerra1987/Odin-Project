const db = require("../db/queries");

async function getCategories(req, res) {

  try {
    const categories = await db.getAllCategories(); 
    res.render("index", { categories }); 
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).send("Error loading categories");
  }

}


async function getItems(req, res) {

  try {
    const category = req.params.category;
    const items = await db.getItemsByCategory(category); 
    res.render("category", { items }); 
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).send("Error loading items");
  }

}




module.exports = {
  getCategories,
  getItems,
};
