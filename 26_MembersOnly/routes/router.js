const { Router } = require("express");
const { addUser } = require('../controllers/controller');



const router = Router();


router.get("/", (req, res) => {res.render("index");});
router.get("/sign-up", (req, res) => {res.render("signup");});
router.post("/sign-up", addUser);



module.exports = router;