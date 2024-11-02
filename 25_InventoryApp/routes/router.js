const { Router } = require("express");
const { getCategories, getItems, showAddItemForm,addItemToDb, addCat } = require('../controllers/controller');



const router = Router();


router.get("/", getCategories);
router.get("/category/:category", getItems);
router.get("/additem", showAddItemForm);
router.post("/additem", addItemToDb);
router.get("/addcategory", (req, res) => {res.render("addcat");});
router.post("/addcategory", addCat);


module.exports = router;