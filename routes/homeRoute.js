//jshint esversion:6
const express = require('express');
const request = require('request');
const route = express.Router();

const week = require('../data/getCurrentWeek');

//render the main page
route.get('/', (req, res) => {
    let month = week.getFullDate().monthOfYear;
    let days = week.getFullDate().dayOfWeek;
    let year = week.getFullDate().year;
    let date = week.getFullDate().date;

    //get current weather from API
    const openWeather ='64f62dc83f15692ea7febf3994776d4b';
    request(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${openWeather}`, (err, response, body) => {
    let weather =  JSON.parse(body);
    res.render('home', { days, month, date, year, weather });
  });
});

module.exports = route;
