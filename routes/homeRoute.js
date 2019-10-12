//jshint esversion:6
const express = require('express');
const route = express.Router();

const week = require('../data/getCurrentWeek');

const getData = require("../data/getAPIData").getData;

let dates = [];

week.getFullDate(dates);

//render the main page
route.get('/', (req, res) => {
    //get current weather from API
    getData ( ( data ) => {
      res.render('home', { dates, data });
   
    });
});

route.get("/datePage/:id", ( req, res ) => {
  let date = req.params.id;
  date = dates[date];

  res.render("datePage", { date });
});

module.exports = route;
