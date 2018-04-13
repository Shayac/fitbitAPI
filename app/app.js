const express = require('express')
const app = express()
const request = require('request')



//getDataFromFitbit();


app.get('/', function(req, res) {
  res.send(`
   <!DOCTYPE html>
<html>
<body>

<h1>Welcome</h1>

<p>click <a href="/time">here</a> for time</p>

</body>
</html>
      
  `);
});


app.get('/time', function(req, res) {
  res.send(`
   <!DOCTYPE html>
<html>
<body>

<h1>Welcome to time page</h1>

<p>this is the current time: </p>

</body>
</html>
      
  `);
});

var d = new Date()
var time = (d.toLocaleTimeString())
var date = (d.toDateString())

//console.log('current time' + time)
//console.log(d.toDateString())



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
	});
