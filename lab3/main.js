const { question, questionInt } = require('readline-sync');
const { makeCalendar, getDayOfTheWeek, isValidDate } = require('./lab-three');

// Asks for user to input a date to return the corresponding weekday
function getDayOfTheWeekForUserDate() {
    let userInputDay;
    let userInputMonth;
    let userInputYear;
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    do {
        userInputYear = questionInt('Enter the year (yyyy):\n');
    } while ( userInputYear < 0 );
    do {
        userInputMonth = question('Enter the month (mmm):\n').toUpperCase();
        if ( !months.includes(userInputMonth) ) {
            console.log('Input valid 3 letter month abbreviation, please');
        }
    } while ( !months.includes(userInputMonth) );
    do {
        userInputDay = questionInt('Enter the day (d/dd):\n');
        if ( !isValidDate(userInputYear, userInputMonth, userInputDay) ) {
            console.log('Input valid day, please');
        }
    } while ( !isValidDate(userInputYear, userInputMonth, userInputDay) );
    console.log( userInputDay + "-" + userInputMonth + "-" + userInputYear + " is a " + getDayOfTheWeek( userInputYear, userInputMonth, userInputDay ) );
}

makeCalendar();
getDayOfTheWeekForUserDate();
