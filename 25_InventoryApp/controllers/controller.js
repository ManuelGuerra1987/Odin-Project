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

function addCat (req, res) {
    
  const category = req.body.category;

  db.insertCat(category);
  
  res.redirect("/");

}

function modPriceGetForm (req, res) {
    
  const item_id = req.query.item_id;
  const item_name = req.query.item_name;

  console.log(item_id);
  console.log(item_name);

  res.render("modprice", {item_name: item_name, item_id: item_id});
  
}

function modPriceGetForm (req, res) {
    
  const item_id = req.query.item_id;
  const item_name = req.query.item_name;

  res.render("modprice", {item_name: item_name, item_id: item_id});
  
}

function modPrice (req, res) {
    
  const new_price = parseFloat(req.body.new_price).toFixed(2);
  const item_id = req.body.item_id;

  db.updatePrice(item_id, new_price);
  
  res.redirect("/");

}


function delItem (req, res) {
    
  const item_id = req.body.item_id;

  db.deleteItem(item_id);
  
  res.redirect("/");

}

module.exports = {
  getCategories,
  getItems,
  showAddItemForm,
  addItemToDb,
  addCat,
  modPriceGetForm,
  modPrice,
  delItem,
};
