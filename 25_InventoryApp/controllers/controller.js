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
    res.render("category", { items, category }); 
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).send("Error loading items");
  }

}


async function showAddItemForm(req, res) {
  const category = req.query.category; 
  const category_id = await db.getId(category); 

  res.render("additem", { category, category_id }); 
}

function addItemToDb (req, res) {
    
  const name = req.body.name;
  const price = req.body.price;
  const category_id = req.body.category_id;

  db.insertItem(name,price,category_id);
  
  res.redirect("/");

}



module.exports = {
  getCategories,
  getItems,
  showAddItemForm,
  addItemToDb,
};
