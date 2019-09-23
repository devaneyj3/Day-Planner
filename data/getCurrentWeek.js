//jshint esversion:6

 module.exports.getFullDate = function() {
     let datesArr = [];

    const day = new Date();

    //get number 0-11 for month
    const month = day.getMonth();

    //get number day of month
    let dayNum = day.getDate();

    //get the year
    let year = day.getFullYear();

    for( i = 0; i < 10; i++) {
        let curDate = new Date(year, month, dayNum + i);
        datesArr.push(curDate);
        console.log(curDate);
    }
    //return the variables
    return { datesArr };
 };
