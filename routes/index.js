var express = require('express');
var router = express.Router();
// require csvtojson
var csv = require("csvtojson");

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Express' });

/*
// Convert a csv file with csvtojson
csv()
  .fromFile('./csv/data.csv')
  .on("end_parsed",function(jsonArrayObj){ //when parse finished, result will be emitted here.
    console.log(jsonArrayObj); 
     res.send(jsonArrayObj);
    // res.send(jsonArrayObj.stringify());
   }) */


});

router.get('/api', function(req,res,next){

	res.send('this is api');
})

module.exports = router;
