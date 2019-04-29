import $ from 'jquery';
import '@babel/polyfill';
import apiValidator from './Models/ApiCheck';

// API Key b9036571a9ba3bebe8a88fa39384a0c1

/** *************************** Global state of the app
 * - API Key
 * - Location Data
 * - Weather Data
 */
const state = {};

/**
 *************************** API form controller
 */

$('#apiForm').on('submit', (e) => {
	e.preventDefault();

	// get the value from the form
	const value = $("[name='api-key']").val();

	// run the form through the api check
	apiValidator(value).then((data) => {
		console.log(data);
	}).catch((err) => {
		console.log(err);
	});

	// if () {
	// 	// Store the key
	// 	state.key = value;
	// 	// Update the HTML
	// 	console.log('API saved');
	// } else {
	// 	// Display error message
	// 	// Reset the form
	// 	console.log('error invalid API');
	// }
});

/**
 *************************** Postcode form controller
 */

/**
 *************************** Location button controller
 */

/**
 *************************** Location, weather and time boxes
 */
