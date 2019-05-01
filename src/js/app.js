import $ from 'jquery';
import apiValidator from './Models/ApiCheck';
import postcodeIsValid from './Models/PostcodeCheck';
import * as messageView from './Views/messageView';
import * as apiBarView from './Views/apiBarView';
import * as loaderView from './Views/loaderView';

/** *************************** Global state of the app
 * - API Key: b9036571a9ba3bebe8a88fa39384a0c1
 * - API Key = key
 * - Location Data = location
 * - Weather Data = weather
 */
const state = {};

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
		}
	}).catch((err) => {
		// Display error message
		messageView.displayUserMessage(err.responseJSON.message, 'error');
	});
});

// Clear key event listener

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

	// Check if postcode is valid against regex pattern
	if (postcodeIsValid(value.toUpperCase())) {
		// display loading message
		messageView.displayUserMessage('Fetching data...', 'success');
		// start loader
		loaderView.renderLoader($('#primaryContent'));
		// make the API call to postcode API
		// save data to state
		// make second call to openweather API
		// save data to state
		// clear loader
		// update model HTML
	} else {
		// invalid postcode display error HTML
		messageView.displayUserMessage('Invalid postcode', 'error');
	}
});

/**
 *************************** Location button controller
 */
