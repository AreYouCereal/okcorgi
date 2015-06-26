var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

exports.index = function(req, res){
  res.render('index', {title:'AJAX Testing'});
};

exports.test = function(req, res){
  var val = parseInt(req.query.num);
  console.log(typeof val);
  if (val == 7) {
  	new_value = "Right!";
  } else {
  	new_value = "Wrong. Guess again."
  }
  res.send(new_value);
};
