//jshint esversion:6
const express = require('express');
const request = require('request');
const route = express.Router();

const week = require('../data/getCurrentWeek');

//render the main page
route.get('/', (req, res) => {
    let dateList = week.getFullDate().dates;

    //get current weather from API
    const openWeather ='64f62dc83f15692ea7febf3994776d4b';
    request(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${openWeather}`, (err, response, body) => {
    let weather =  JSON.parse(body);
    res.render('home', { dateList, weather });
  });
});

module.exports = route;
