var data = require('../data/data.js');

//get data from database
module.exports.api = function(req,res){
	data.find({}, function(err,docs){
		if(err){throw err;} 
		else{
			res.send(JSON.stringify(docs));
		}
	})
}