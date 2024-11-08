const { Router } = require("express");
const bcrypt = require('bcryptjs');
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const { index} = require('../controllers/controller');

const router = Router();

// Configuración de la estrategia local para Passport

  
//Routes

router.get("/", index);



module.exports = router;