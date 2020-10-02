// Determine if input year is a leap year
function isLeapYear(year) {
	return ( year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 );
}

// Determine if date entered is valid
function isValidDate(year, month, day) {
	const inputMonth = month.toUpperCase();
	const monthsWith30Days = ['APR', 'JUN', 'SEP', 'NOV'];
	const monthsWith31Days = ['JAN', 'MAR', 'MAY', 'JUL', 'AUG', 'OCT', 'DEC'];
	return (
		(monthsWith30Days.includes(inputMonth) && day < 31 && day > 0)
		|| (monthsWith31Days.includes(inputMonth) && day < 32 && day > 0)
		|| (isLeapYear(year) && day < 30 && day > 0)
		|| (!isLeapYear(year) && day < 29 && day > 0)
	)
}

// Convert month to a month code
function getMonthCode(month, year) {
	const inputMonth = month.toUpperCase();
	let code;
	switch (inputMonth) {
		case 'APR':
		case 'JUL':
			code = 0;
			break;
		case 'JAN':
		case 'OCT':
			code = 1;
			break;
		case 'MAY':
			code = 2;
			break;
		case 'AUG':
			code = 3;
			break;
		case 'FEB':
		case 'MAR':
		case 'NOV':
			code = 4;
			break;
		case 'JUN':
			code = 5;
			break;
		case 'SEP':
		case 'DEC':
			code = 6;
			break;
		default:
			console.log('Invalid month input');
	}

	// Special cases to month codes
	if ( (year >= 1600 && year < 1700) || (year >= 2000 && year < 2100) ) {
		code += 6;
	} else if ( (year >= 1700 && year < 1800) || (year >= 2100 && year < 2200) ) {
		code += 4;
	} else if (year >= 1800 && year < 1900) {
		code += 2;
	}
	if (isLeapYear(year) && (month.toUpperCase() === 'JAN' || month.toUpperCase() === 'FEB') ) {
		code -= 1;
	}
	return code;
}

// Determine weekday of input date
function getDayOfTheWeek(year, month, day) {
	// Identify last 2 digits of input year
	const yy = year % 100; //OR year.toString().substr(-2);
	// Identify month code
	const monthCode = getMonthCode(month, year);
	// Algorithm to determine what day of the week a given date is
	const weekdayCode_1 = Math.floor(yy / 12);
	const weekdayCode_2 = yy - weekdayCode_1 * 12;
	const weekdayCode_3 = Math.floor(weekdayCode_2 / 4);
	const weekdayCode = ( weekdayCode_1 + weekdayCode_2 + weekdayCode_3 + day + monthCode ) % 7;
	const weekdays = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
	if ( isValidDate(year, month, day) ) {
		return weekdays[weekdayCode];
	} else {
		console.log('Unable to determine week day');
	}
}

//Prints out calendar for year 2020
function makeCalendar() {
	const year = 2020;
	const month_days = [1, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	const months = [1, 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
	for ( i = 1; i < 13; i++ ) {
		for ( j = 1; j <= month_days[i]; j++ ) {
			let dayOfWeek = getDayOfTheWeek(year, months[i], j);
			console.log(`${i}-${j}-${year} is a ${dayOfWeek}.`);
		}
	}
}

module.exports = {
	makeCalendar, getDayOfTheWeek, isValidDate,
}
