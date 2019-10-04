//jshint esversion:6
const express = require('express');
const request = require('request');
const route = express.Router();

const week = require('../data/getCurrentWeek');

let dateList = [];

//render the main page
route.get('/', (req, res) => {
    
    week.getFullDate(dateList);

    //get current weather from API
    //TODO: SEPERATE IN ANOTHER MODULE
    const openWeather ='64f62dc83f15692ea7febf3994776d4b';
    request(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${openWeather}`, (err, response, body) => {
    let weather =  JSON.parse(body);
    res.render('home', { dateList, weather });
  });
});

route.get("/datePage/:id", ( req, res ) => {
  let date = req.params.id;
  date = dateList[date];

  res.render("datePage", { date });
});

module.exports = route;
