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




module.exports = {
  getCategories,
};
