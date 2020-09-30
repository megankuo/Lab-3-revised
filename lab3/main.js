const { question, questionInt } = require('readline-sync');
const makeCalendar = require('./lab-three').makeCalendar;
const getDayOfTheWeek = require('./lab-three').getDayOfTheWeek;

// Asks for user to input a date to return the corresponding weekday
function getDayOfTheWeekForUserDate() {
    let userInputDay;
    let userInputMonth;
    let userInputYear;
    do {
        do {
            userInputYear = questionInt('Please enter the year (yyyy):\n');
        } while ( typeof(userInputYear) != 'number' );
        do {
            userInputMonth = question('Please enter the month (mmm):\n');
            if ( userInputMonth.length != 3 ) {
                console.log('Input valid 3 letter month abbreviation, please');
            }
        } while ( userInputMonth.length != 3 );
        do {
            userInputDay = questionInt('Please enter the day (d/dd):\n');
            if ( userInputDay > 31 ) {
                console.log('Input valid date, please');
            }
        } while ( typeof(userInputDay) != 'number' || userInputDay > 31 );
    } while ( typeof(userInputYear) != 'number' || userInputMonth.length != 3 || typeof(userInputDay) != 'number' );
    console.log( getDayOfTheWeek( userInputYear, userInputMonth, userInputDay ) );
}

makeCalendar();
getDayOfTheWeekForUserDate();
