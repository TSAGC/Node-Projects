//1.1
const cities = require("cities");
var myCity = cities.zip_lookup("2740");
console.log(myCity);



// messages 

const messageModule = require("./message.js");
messageModule.messages.forEach(index => console.log(index));