const bcrypt = require('bcryptjs');


async function index(req, res) {

    res.render("index"); 
  }


  

module.exports = {
    index,
  };