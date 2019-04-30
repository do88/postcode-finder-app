// Required
import $ from 'jquery';
// Model imports
import apiValidator from './Models/ApiCheck';
// View imports
import * as messageView from './Views/messageView';
import * as apiBarView from './Views/apiBarView';

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

/**
 *************************** Location button controller
 */

/**
 *************************** Location, weather and time boxes
 */
