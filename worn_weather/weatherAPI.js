 
 
var zip = 0;
var ctry = "US";
var intlCity = [];
var initialUSZip = 0;
var weatherData;
var intlWeatherData;

intlWeatherData = 
{
  "coord": {
    "lon": 25.26,
    "lat": 59.1
  },
  "weather": [
    {
      "id": 801,
      "main": "Clouds",
      "description": "few clouds",
      "icon": "02n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 53.6,
    "pressure": 999,
    "humidity": 93,
    "temp_min": 53.6,
    "temp_max": 53.6
  },
  "visibility": 10000,
  "wind": {
    "speed": 10.29,
    "deg": 240
  },
  "clouds": {
    "all": 20
  },
  "dt": 1505499600,
  "sys": {
    "type": 1,
    "id": 5014,
    "message": 0.0084,
    "country": "EE",
    "sunrise": 1505447374,
    "sunset": 1505493406
  },
  "id": 7522323,
  "name": "Kõue vald",
  "cod": 200
};



const intlCities = [["stockholm","sweden"],['kuala lumpur','my'],['nice','france'],['kobe','japan'],['phuket','thailand'],['cancun','mexico'],['hanoi','vietnam']];
const USCities = [98599, 99599, 33040, 83002, 79010, 31414, 91911, 96811];
// Olympia WA, Anchorage AK, Key West FL, Jackson WY, Baton Rouge LA, Savannah GA, San Diego CA, Honolulu HA

function getRandomZip(array){ // returns a random US zip
	city = array[Math.floor(Math.random() * array.length)];
	console.log(city);
	return city;
}

zip = getRandomZip(USCities); // set a random zip

intlCity = getRandomZip(intlCities);






function getWeather(zip, country = "US"){ //
	var search = "zip"
	if(country != "US"){
		search = "q";
	}

	var url = `http://api.openweathermap.org/data/2.5/weather?units=imperial&${search}=${zip}&country=${country}.json&APPID=ec9d435c91a19b4eaaa33303758d378c`;
	
	fetch(url)
	.then((resp) => resp.json()) 
	.then(function(response) {
		console.log(response);
		if(country == "US"){
			weatherData = response;
		} else {
			intlWeatherData = response;
		}

	}).catch(function(err) {
			// Error
	});
}

// getWeather(zip);
getWeather(intlCity[0],intlCity[1]);





// // Print Error Messages
// function printError(error) {
// 	console.error(error.message);
// }
// // https://openweathermap.org/current
// function getWeather(city) {
// 	try { // http://api.openweathermap.org/data/2.5/weather?units=imperial&q=tampa.json&APPID=ec9d435c91a19b4eaaa33303758d378c
// 		const request = http.get(`http://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city},US.json&APPID=${weatherApi.key}`, response => {
// 		console.dir(response.statusCode);
// 			if (response.statusCode == 200){
// 				let body = "";
// 				// Read the data
// 				response.on('data', data => {
// 					body += data.toString();
// 				});

// 				response.on('end', () => {
// 					try {
// 						// Parse the data
// 						const weatherReport = JSON.parse(body);
// 						console.dir(weatherReport);
// 						// Print the data
// 							console.log(`${city}, high of ${weatherReport.main.temp_max} and low of ${weatherReport.main.temp_min}.`);

// 					} catch (error) {
// 						printError(error);
// 					}
// 				});
// 			} else {
// 				const message = `There was an error getting the weather for  ${city} (${http.STATUS_CODES[response.statusCode]})`;
// 				const statusCodeError  = new Error(message);
// 				printError(statusCodeError);
// 			}
// 		});


// 	request.on('error', error => console.error(`Problem with request: ${error.message}`));
// 	} catch (error) {
// 		printError(error);
// 	}


// }
// getWeather("Tampa");

// const city = process.argv.slice(2)
// getWeather(city);
