//jshint esversion:6
const express = require('express');
const route = express.Router();

const week = require('../data/getCurrentWeek');
const APIdata = require('../data/getWeather');

let dates = [];

const apikey ='64f62dc83f15692ea7febf3994776d4b';
let location = 'Whitmore Lake, US';
let weatherURL =`https://api.openweathermap.org/data/2.5/weather?q=${location},uk&appid=${apikey}`;

//render the main page
route.get('/', (req, res) => {
  week.getFullDate(dates);
  APIdata.getData(weatherURL, res.render({ dates }));
  
});

//get indivual page for the dates based on the variable "ID"
route.get("/datePage/:id", ( req, res ) => {
  let date = req.params.id;
  date = dates[date]; //find the index of the date array based on the id variable exp: 0, 1, 2..

  res.render("datePage", { date });
});

module.exports = route;
