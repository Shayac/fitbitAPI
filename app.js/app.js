const express = require('express')
const app = express()
const request = require('request')


app.get('/', function (req, res) {
  res.send('Hello World!')
})




app.get('/fitbitData', function (req, res) {
	request.get("https://www.bhphotovideo.com/c/json/search/?N=0&InitialSearch=yes&sts=ma&Top+Nav-Search&Ntt=sony%20alpha%20a7%20iii%2024", function(error, response, body){
		res.json(body);
	}
 	})

//  res.send('Hello World!')
					



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})