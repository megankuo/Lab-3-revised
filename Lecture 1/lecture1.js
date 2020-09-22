// Add user suggested movie name to list of favorite movies if movie does not have the word 'The'
const favoriteMovies = [];

function addFavoriteMovie(movieName) {
	let movieWords = movieName.split( " " ); // can skip this step
	if (!movieWords.includes("The")) { // write directly (!movieName.includes("The"))
		favoriteMovies.push(movieName);
	}
}

// Prints the list of favorite movies and number of movies in the list
function printFavoriteMovies() {
	if (favoriteMovies.length == 0) {
		console.log("You have no favorite movies.");
	} else if (favoriteMovies.length == 1) {
		console.log("You have 1 favorite movie. It is: " + favoriteMovies);
	} else {
		console.log("You have " + favoriteMovies.length + " favorite movies. They are: ");
		for (i =0; i < favoriteMovies.length; i++) {
			console.log(favoriteMovies[i]);
		}
	}
}

addFavoriteMovie("The Dark Knight");
addFavoriteMovie("Riddick");
addFavoriteMovie("The Pirates of the Caribbean");
addFavoriteMovie("Mulan");
printFavoriteMovies(); // Prints: You have 2 favorite movies. They are: Riddick Mulan


// Convert fahrenheit to celcius
function convertFtoC(fahrenheit) {
	let conversion = (fahrenheit - 32) * (5/9);
	let celcius = Math.round(conversion * 100) / 100;
	return celcius;
}

// Suggest to user what to wear for the current temperature
function whatToWear(temperature, unit) {
	let celcius;
	if(unit === "fahrenheit"){
		celcius = convertFtoC(temperature); // Convert fahrenheit to celcius
	} else if(unit === "celcius"){
		celcius = temperature;
	} else {
		console.log("This is an invalid unit. Please specify celcius or fahrenheit.");
		return; // Prints error message and ends function
	}
	if(celcius <= 5){
		console.log("It is very cold right now, you need a thick sweater, a winter coat and insulated boots.");
	} else if(celcius <= 10){
		console.log("It is cold right now, you should wear a sweater with long pants or leggings");
	} else if(celcius <= 18){
		console.log("It is chilly right now, you should bring a light jacket.");
	} else if(celcius <= 22){
		console.log("You will probably be comfortable in a T-shirt and pants or leggings.");
	} else {
		console.log("Put on your summer clothes!");
	}
}

whatToWear(32, "fahrenheit"); // Prints It is very cold right now, you need a thick sweater, a winter coat and insulated boots.