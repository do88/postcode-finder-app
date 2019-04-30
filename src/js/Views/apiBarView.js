// Required
import $ from 'jquery';

// eslint-disable-next-line import/prefer-default-export
export const updateAPIBarHTML = (apiKey) => {
	// amount of chars to show at end of line
	const charsToShow = 4;
	// replace string with * symbol
	const hashKey = apiKey
		.substring(0, apiKey.length - charsToShow)
		.split('')
		.map(item => '*')
		.join('');
	// create string to show end of api key
	const lastFourChars = apiKey.slice(apiKey.length - charsToShow);
	// HTML markup for the api bar
	const markup = `
		<p>You are currently using this app with the API key</p>
		<p class="api">${hashKey}${lastFourChars}</p>
		<a href="#" class="button button--clear">Clear Key</a>
	`;
	// Render HTML markup
	$('#api-bar')
		.html('')
		.html(markup);
};
