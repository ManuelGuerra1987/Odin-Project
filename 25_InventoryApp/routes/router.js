const { Router } = require("express");
const { getCategories, getItems, showAddItemForm,addItemToDb } = require('../controllers/controller');



const router = Router();


router.get("/", getCategories);
router.get("/category/:category", getItems);
router.get("/additem", showAddItemForm);
router.post("/additem", addItemToDb);



module.exports = router;