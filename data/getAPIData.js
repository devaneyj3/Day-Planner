//jshint esversion: 6
const request = require('request');


module.exports.getData = function(cb) {
    request(url, (err, response, body) => {
    let data =  JSON.parse(body);
    cb(data);
    });
};
