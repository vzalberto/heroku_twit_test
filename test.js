var Twit = require('twit')
require('./config.js')

var t = new Twit({

consumer_key : CONSUMER_KEY 
, consumer_secret : CONSUMER_SECRET 
, access_token: ACCESS_TOKEN
, access_token_secret: ACCESS_TOKEN_SECRET

})

/*
narcovoz = ""

if(process.argv[2])
	narcovoz = process.argv[2]
else
	process.exit()
*/

narcovoz = "Heroku es habitable. tqm @paranoidhominid"

t.post('statuses/update',
		{status: narcovoz},
		function(err,reply){console.log(err)}
		)



