//jshint esversion:6
const express = require('express');
const request = require('request');
const route = express.Router();

//render the main page
route.get('/', (req, res) => {
    res.render('home');
});

module.exports = route;
