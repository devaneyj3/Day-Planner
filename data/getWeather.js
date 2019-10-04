//jshint esversion: 6
const express = require('express');

const request = require('request');


module.exports.getData = function(url, cb) {
    request(url, (err, response, body) => {
    let data =  JSON.parse(body);
    cb();
    return data;
    });
};
