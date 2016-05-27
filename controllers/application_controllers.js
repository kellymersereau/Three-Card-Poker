var express = require('express');
var router  = express.Router();
var connection = require('../config/connection.js');

router.get('/', function(req, res) {
	req.session.user_id = req.params.id;
  var users = {
  	id: req.session.user_id,
  	logged_in: req.session.logged_in,
  }
  res.render('home', users);
});

module.exports = router;