 
 
var zip = 0;
var ctry = "US";
var intlCity = [];
var initialUSZip = 0;
var weatherData;
var weatherIntlData;



// dummy data - erase later
intlCity = ['Kuala Lumpur','Malaysia'];
weatherIntlData = 
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

weatherData = 
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




const intlCities = [["Stockholm","Sweden"],['Kuala Lumpur','Malyasia'],['Nice','France'],['Kobe','Japan'],['Phuket','Thailand'],['Cancun','Mexico'],['Hanoi','Vietnam']];
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
			weatherIntlData = response;
		}

	}).catch(function(err) {
			// Error
	});
}

// getWeather(zip);
getWeather(intlCity[0],intlCity[1]);



function injectIntlContent(){
  document.getElemntById('mw-city').innerHTML = intlCity[0];
  document.getElemntById('mw-ctry').innerHTML = intlCity[1];
}

