const readlineSync = require('readline-sync');
const makeCalendar = require('./lab-three').makeCalendar;
const getDayOfTheWeek = require('./lab-three').getDayOfTheWeek;

function getDayOfTheWeekForUserDate() {
    const userInputYear = parseInt(readlineSync.question('Please enter the year (yyyy):\n'));
    const userInputMonth = readlineSync.question('Please enter the month (mmm):\n');
    const userInputDay = parseInt(readlineSync.question('Please enter the day (d/dd):\n'));
    console.log(getDayOfTheWeek(userInputYear, userInputMonth, userInputDay));
    return getDayOfTheWeek(userInputYear, userInputMonth, userInputDay);
}

makeCalendar();
getDayOfTheWeekForUserDate();