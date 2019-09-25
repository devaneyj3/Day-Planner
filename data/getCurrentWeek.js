//jshint esversion:6

let moment = require('moment');

 module.exports.getFullDate = function() {
    let dates = [];

    const day = new Date();

    //get number 0-11 for month
    const month = day.getMonth();

    //get number day of month
    let dayNum = day.getDate();

    //get the year
    let year = day.getFullYear();

    for( i = 0; i < 10; i++) {
        let curDate = new Date(year, month, dayNum + i);
        dates.push(moment(curDate).format('MM/DD/YYYY'));
    }
    //return the variables
    return { dates };
 };
