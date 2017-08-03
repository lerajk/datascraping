var mongoose = require( 'mongoose' );

var uristring = 
  process.env.MONGODB_URI ; 
  // || 'mongodb://localhost/datascrap';

var theport = process.env.PORT || 5000;

mongoose.connect(uristring, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

/*
var datascrap = mongoose.Schema({
	portal_url: {
		type: String,
		required: true
		
	},
	hub_id: {
		type: String,
		required: true
	},
	organic_search_visits: {
		type: Number,
		required: true
	},
	organic_search_percentage: {
		type: Number,
		required: true
	},
	organic_contacts_percentage: {
		type: Number,
		required: true
	},

	organic_search_customers: {
		type: Number,
		required: true
	},
	Organic_search_customers_percentage: {
		type: Number,
		required: true
	},
	referrals_visits: {
		type: Number,
		required: true
	},
	referrals_visits_percentage: {
		type: Number,
		required: true
	},
	referrals_contacts: {
		type: Number,
		required: true
	},
	referrals_contacts_percentage: {
		type: Number,
		required: true
	}


});

module.exports = var data = mongoose.model('data', datascrap); */ 








