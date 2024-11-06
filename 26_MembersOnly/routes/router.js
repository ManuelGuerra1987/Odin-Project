const { Router } = require("express");
const bcrypt = require('bcryptjs');
const pool = require("../db/pool");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const { addUser, logoutUser, clubCheck, addMessage, index, adminCheck, delMessage } = require('../controllers/controller');

const router = Router();

// Configuración de la estrategia local para Passport
passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
        const user = rows[0];
        const match = await bcrypt.compare(password, user.password);
  
        if (!user) {
          return done(null, false, { message: "Incorrect username" });
        }
        if (!match) {
          return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user);
      } catch(err) {
        return done(err);
      }
    })
  );

  // Serialización y deserialización de usuario
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser(async (id, done) => {
    try {
      const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
      const user = rows[0];
  
      done(null, user);
    } catch(err) {
      done(err);
    }
  });
  
  
//Routes

router.get("/", index);
router.get("/sign-up", (req, res) => {res.render("signup");});
router.post("/sign-up", addUser);
router.post("/log-in", passport.authenticate("local", {successRedirect: "/", failureRedirect: "/"}));
router.get("/log-out", logoutUser);
router.get("/club", (req, res) => {res.render("clubform");});
router.post("/club", clubCheck);
router.get("/newmessage", (req, res) => {res.render("newmessageform");});  
router.post("/newmessage", addMessage);
router.get("/admin", (req, res) => {res.render("adminform");});
router.post("/admin", adminCheck);
router.get("/deletemessage/:messageId", delMessage);


module.exports = router;