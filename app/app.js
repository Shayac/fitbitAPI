const express = require('express')
const app = express()
const request = require('request')



app.get('/', function(req, res) {
  res.send(`
   <!DOCTYPE html>
<html>
<body>

<h1>Welcome</h1>


<button type=button><a href="/time">Click here for time</a></button>

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

<p id="dateTime"></p>

<script>
var d = new Date()
var time = (d.toLocaleTimeString())
var date = (d.toDateString())


document.getElementById("dateTime").innerHTML = "<p>Current date is " + date + " and the time right now is " + time + "  </p>"
</script>


</body>
</html>
      
  `);
});



//console.log('current time' + time)
//console.log(d.toDateString())



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
	});
