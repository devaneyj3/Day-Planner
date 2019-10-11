//jshint esversion:6
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//import in the different routes
const homeRoute = require('./routes/homeRoute');


app.use(express.static('views'));
app.use(express.static('client'));

app.set('view engine', 'pug');

// middleware for bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//middleware for cookieParser
app.use(cookieParser());

//middleware for handling routes
app.use('/', homeRoute);

app.listen('8080', function () {
  console.log("Server is running on 8080 port");
});