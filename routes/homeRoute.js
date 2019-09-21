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
    res.render('home', { days, month, date, year });
});

module.exports = route;
