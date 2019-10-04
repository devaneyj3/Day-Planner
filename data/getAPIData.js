//jshint esversion: 6
const request = require('request');

const apikey ='64f62dc83f15692ea7febf3994776d4b';
let location = 'Whitmore Lake, US';
let url =`https://api.openweathermap.org/data/2.5/weather?q=${location},uk&appid=${apikey}`;


module.exports.getData = function(cb) {
    request(url, (err, response, body) => {
    let data =  JSON.parse(body);
    cb(data);
    });
};
