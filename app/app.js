const express = require('express')
const app = express()
const request = require('request')
const axios = require('axios')


async function getDataFromOpenWeather(){
	try {
		const {data: {main: {temp}}} = await axios.get('http://api.openweathermap.org/data/2.5/weather?lat=40.1168431&lon=-74.257079&appid=14a600c9647935884d79f12bb5cccd9a&units=imperial');
		console.log(temp);
		return temp
		}
	catch (error) {
		console.log(error);
	}
};


getDataFromOpenWeather();



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

  
d = new Date()
time = (d.toLocaleTimeString())
date = (d.toDateString())

console.log("this is server date " + date +" "+ time)


  res.send(`
   <!DOCTYPE html>
<html>
<body>

<h1>Welcome to time page!</h1>

<p>this is the current date ${date} and this is the time now: ${time}:  </p>


</body>
</html>
      
  `);
});


app.get('/weather', function(req, res) {

	async function getDataFromOpenWeather(){
	try {
		const {data: {main: {temp}}} = await axios.get('http://api.openweathermap.org/data/2.5/weather?lat=40.1168431&lon=-74.257079&appid=14a600c9647935884d79f12bb5cccd9a&units=imperial');
		console.log(temp);
		return temp
		}
	catch (error) {
		console.log(error);
	}
};


getDataFromOpenWeather();

	res.send(`
	<!DOCTYPE html>
<html>
<body>

<h1>Welcome to the weather page!</h1>

<p>This is the current weather in Lakewood: ${temp} </p>


</body>
</html>
      
	`);
});






/*
<p id="dateTime"></p>

<script>
var d = new Date()
var time = (d.toLocaleTimeString())
var date = (d.toDateString())

document.getElementById("dateTime").innerHTML = "<p>Current date is " + date + " and the time right now is " + time + "  </p>"
</script>

*/ 


//console.log('current time' + time)
//console.log(d.toDateString())
app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
	});

