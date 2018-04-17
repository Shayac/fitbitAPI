/*var data  = {
  firstItem : "this is the first item",
  secondItem: [1,2,3,4,5],
  thirdItem: {
    itemA: "This is item A",
    itemB: ["This", "is", "B"]
  }
}

console.log(data.firstItem) //"this is the first item"

console.log(data.secondItem[2]) // 3

console.log(data.thirdItem.itemA) // "This is item A"
*/

const axios = require('axios')


async function getDataFromOpenWeather(){
	const {data: {main}} = await axios.get('http://api.openweathermap.org/data/2.5/weather?lat=40.1168431&lon=-74.257079&appid=14a600c9647935884d79f12bb5cccd9a&units=imperial');
	console.log(main);
  //myGoodData = JSON.parse(myData)
  //console.log(myGoodData);
  //console.log(myData.main)

}

getDataFromOpenWeather();