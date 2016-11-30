var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Send mail */
router.post('/postmail', function (req, res) {
    console.log(req.body.title);
    console.log(req.body.description);
});

module.exports = router;
