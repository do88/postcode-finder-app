import $ from 'jquery';
import apiValidator from './Models/ApiCheck';
import postcodeIsValid from './Models/PostcodeCheck';
import fetchPostcodeData from './Models/Search';
import fetchWeatherData from './Models/Weather';
import fetchPostcodeFromLocation from './Models/LocationPostcodeFetch';
import * as messageView from './Views/messageView';
import * as apiBarView from './Views/apiBarView';
import * as loaderView from './Views/loaderView';
import * as weatherView from './Views/weatherView';

/** *************************** Global state of the app
 * - API Key: b9036571a9ba3bebe8a88fa39384a0c1
 * - API Key = key
 * - Location Data = location
 * - Weather Data = weather
 */
let state = {};

/**
 *************************** API form controller
 */

$('#apiForm').on('submit', (ev) => {
	ev.preventDefault();
	// get the value from the form
	const value = $("[name='api-key']").val();

	// run the value through the api check
	apiValidator(value).then((data) => {
		if (data.name === 'London') {
			// if response successful from London saved the API key to the state
			state.key = value;
			// Display success message
			messageView.displayUserMessage('API Key is now saved.', 'success');
			// Update top HTML bar
			apiBarView.updateAPIBarHTML(value);
			// Unlock the postcode form input field
			$('#postcodeForm input').prop('disabled', false);
		}
	}).catch((err) => {
		// Display error message
		messageView.displayUserMessage(err.responseJSON.message, 'error');
	});
});

// Clear key event listener, resets object and reloads page
$('#api-bar').on('click', '.button--clear', (ev) => {
	state = {};
	// eslint-disable-next-line no-restricted-globals
	location.reload(true);
});

/**
 *************************** Postcode form controller
 */

// Check as postcode is typed if it matches regex UK postcode pattern
$('#postcodeForm').on('input', (ev) => {
	// Check if data is a valid postcode
	if (postcodeIsValid(ev.target.value.toUpperCase())) {
		// Change form BG to green when valid
		$('#postcodeForm input').css('background', '#e8fccf');
	} else {
		// Change form BG to normal white
		$('#postcodeForm input').css('background', '#fff');
	}
});

$('#postcodeForm').on('submit', (ev) => {
	ev.preventDefault();
	// get the value from the form
	const value = $("[name='postcode']").val();
	getPostcodeAndWeatherData(value);
});

function getPostcodeAndWeatherData(value) {
	if (state.key === undefined) {
		// If no API key display this error
		messageView.displayUserMessage('Please enter your openweathermap API key first.', 'error');
	} else if (postcodeIsValid(value.toUpperCase())) {
		// Check if postcode is valid against regex pattern
		// make the API call to postcode API
		fetchPostcodeData(value).then((data) => {
			if (data.status === 200) {
				// display loading message
				messageView.displayUserMessage('Fetching data weather...', 'success');
				// start loader
				loaderView.renderLoader();
				// save data to state
				state.locationData = data.result;
				// make second call to openweather API
				fetchWeatherData(state).then((dataWeather) => {
					// save data to state
					state.weatherData = dataWeather;
					// clear loader with slight delay to make it look like its loading ;)
					setTimeout(() => {
						loaderView.clearLoader();
						weatherView.renderWeatherBox(state);
						console.log(state);
					}, 1000);
				}).catch((error) => {
					messageView.displayUserMessage('Error fetching weather data, please try again', 'error');
					// eslint-disable-next-line no-restricted-globals
					location.reload();
					console.log(error);
				});
			}
		}).catch(() => {
			messageView.displayUserMessage('Invalid postcode', 'error');
		});
	} else {
		// invalid postcode display error HTML
		messageView.displayUserMessage('Invalid postcode', 'error');
	}
}

/**
 *************************** Location button controller
 */

$('.postcode-search__button').on('click', (ev) => {
	// Check if browser feature is available
	if (navigator.geolocation) {
		// Get current position
		navigator.geolocation.getCurrentPosition((position) => {
			console.log(position);
			// Make API call using long and lat location details
			fetchPostcodeFromLocation(position.coords.longitude, position.coords.latitude)
				.then((data) => {
					console.log(data.result[0].postcode);
					getPostcodeAndWeatherData(data.result[0].postcode);
				})
				.catch(error => console.log(error));
		});
	} else {
		messageView.displayUserMessage('No loco bro', 'error');
	}
});

// latitude: 52.226457599999996
// longitude: -2.3339008
