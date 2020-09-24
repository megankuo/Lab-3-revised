// Determine if input year is a leap year
function isLeapYear(year) {
    if (year % 4 !== 0) {
        return false;
    } else if (year % 100 !== 0) {
        return true;
    } else if (year % 400 !== 0) {
        return false;
    } else {
        return true;
    }
}

// Convert month to a month code for all centuries
function getMonthCode(month, year) {
    const inputMonth = month;
    let code;
    switch (inputMonth) {
        case 'Apr':
        case 'Jul':
            code = 0;
            break;
        case 'Jan':
        case 'Oct':
            code = 1;
            break;
        case 'May':
            code = 2;
            break;
        case 'Aug':
            code = 3;
            break;
        case 'Feb':
        case 'Mar':
        case 'Nov':
            code = 4;
            break;
        case 'Jun':
            code = 5;
            break;
        case 'Sep':
        case 'Dec':
            code = 6;
            break;
        default:
            console.log('Month code error')
    }
    if ( (year >= 1600 && year < 1700) || (year >= 2000 && year < 2100) ) {
        code += 6;
    } else if ( (year >= 1700 && year < 1800) || (year >= 2100 && year < 2200) ) {
        code += 4;
    } else if (year >= 1800 && year < 1900) {
        code += 2;
    }
    return code;
}

// Determine weekday of input date
function getDayOfTheWeek(year, month, day) {
    // Identify last 2 digits of input year
    const yy = year.toString().substr(-2);
    console.log(yy);
    // Identify month code with consideration of leap year
    let monthCode = getMonthCode(month, year);
    console.log(monthCode);
    if (isLeapYear(year)) {
        monthCode -= 1;
    }
    console.log(monthCode);
    //const weekdayCode = Math.floor(((yy / 12 / 4) + day + monthCode) % 7);
    let weekdayCode1 = Math.floor(yy/12); // 20 fits 1 time
    let weekdayCode2 = yy - weekdayCode1 * 12; // 20 - 1 * 12 = 8
    let weekdayCode3 = Math.floor(weekdayCode2/4); // 8/4 = 2
    let weekdayCode4 = weekdayCode1 + weekdayCode2 + weekdayCode3 + day + monthCode; // 1 + 8 + 2 + 24 + 11 = 46
    weekdayCode = weekdayCode4 % 7; // 4 <- INCORRECT should be 5
    console.log(weekdayCode1);
    console.log(weekdayCode2);
    console.log(weekdayCode3);
    console.log(weekdayCode4);
    console.log(weekdayCode);
    let weekday;
    switch (weekdayCode) {
        case 0:
            weekday = 'Sat';
            break;
        case 1:
            weekday = 'Sun';
            break;
        case 2:
            weekday = 'Mon';
            break;
        case 3:
            weekday = 'Tue';
            break;
        case 4:
            weekday = 'Wed';
            break;
        case 5:
            weekday = 'Thu';
            break;
        case 6:
            weekday = 'Fri';
            break;
        default:
            console.log('Weekday code error');
    }
    return weekday;
}
console.log(getDayOfTheWeek(2020, 'Sep', 24));