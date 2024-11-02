const { Router } = require("express");
const { getCategories } = require('../controllers/controller');



const router = Router();


router.get("/", getCategories);



module.exports = router;