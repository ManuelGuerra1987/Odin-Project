const { Router } = require("express");
const { getCategories, getItems } = require('../controllers/controller');



const router = Router();


router.get("/", getCategories);
router.get("/category/:category", getItems);



module.exports = router;