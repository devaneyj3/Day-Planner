//jshint esversion:6

 module.exports.getFullDate = function() {
//     let todayIs = dayOfWeek[today];

//     return `${todayIs} ${monthOfYear} ${date}, ${year}`;

    const day = new Date();

    //get number 0-11 for month
    const month = day.getMonth();

    //get the month string
    let monthsOfYear = ["January", "February","March",
    "April","May","June","July","August","September","October",
    "November","December"];

    //get current month
    const monthOfYear = monthsOfYear[month];

    //get the string day of the week
    const dayOfWeek = ['Sunday','Monday', 'Tuesday','Wednesday',
    'Thursday','Friday','Saturday'];

    //get the number day of the month
    let today = day.getDay();

    //get the year
    let year = day.getFullYear();

    //return the variables
    return { dayOfWeek, monthOfYear, today, year };
 };
