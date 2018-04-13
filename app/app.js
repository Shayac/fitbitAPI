const express = require('express')
const app = express()
const request = require('request')
const axios = require('axios')
const date = require('date')

async function getDataFromFitbit(){
  const myData = await axios.get('https://www.bhphotovideo.com/bnh/controller/home?A=getItemDetail&Q=json&O=&sku=1394217&is=REG&show=mainInfo+images+itemGrouping+qa+breadcrumbs');
  console.log(myData);
  return myData.data;
}

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

<p>current time goes here</p>

</body>
</html>
      
  `);
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
	});
