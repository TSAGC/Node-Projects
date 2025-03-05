//1.1
const cities = require("cities");
var myCity = cities.zip_lookup("2740");
console.log(myCity);

//1.2
const messageModule = require("./message.js");
messageModule.messages.forEach(index => console.log(index));