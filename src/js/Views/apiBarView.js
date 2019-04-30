// Required
import $ from 'jquery';

// eslint-disable-next-line import/prefer-default-export
export const updateAPIBarHTML = (apiKey) => {
	const markup = `
		<p>You are currently using this app with the API key</p>
		<p class="api">${apiKey}</p>
		<a href="#" class="button button--clear">Clear Key</a>
	`;
	$('#api-bar')
		.html('')
		.html(markup);
};
