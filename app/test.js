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
	try {
		//const {data} = await axios.get('https://redsky.target.com/v1/plp/search/?count=24&offset=0&category=4ykaf&visitorId=016264341A2B0101109506EEE79B61A0&pageId=%2Fc%2F4ykaf&channel=web');
		const {data: {main: {temp}}} = await axios.get('http://api.openweathermap.org/data/2.5/weather?lat=40.1168431&lon=-74.257079&appid=14a600c9647935884d79f12bb5cccd9a&units=imperial');
		console.log(temp);
		return temp
		}
	catch (error) {
		console.log(error);

	}
  //myGoodData = JSON.parse(myData)
  //console.log(myGoodData);
  //console.log(myData.main)

}

getDataFromOpenWeather();

/*

async function getDataFromOpenWeather(){
	try {
		//const {data} = await axios.get('https://redsky.target.com/v1/plp/search/?count=24&offset=0&category=4ykaf&visitorId=016264341A2B0101109506EEE79B61A0&pageId=%2Fc%2F4ykaf&channel=web');
		const {data: {main: {temp}}} = await axios.get('http://api.openweathermap.org/data/2.5/weather?lat=40.1168431&lon=-74.257079&appid=14a600c9647935884d79f12bb5cccd9a&units=imperial');
		console.log(temp);
		return temp
		}
	catch (error) {
		console.log(error);

}
getDataFromOpenWeather();

*/
