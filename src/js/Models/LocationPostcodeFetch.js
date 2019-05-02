// Required
import '@babel/polyfill';
import $ from 'jquery';

export default async function fetchPostcodeFromLocation(longitude, latitude) {
	try {
		const apiCall = await $.getJSON({
			url: 'https://api.postcodes.io/postcodes?',
			data: {
				lat: latitude, // latitude
				lon: longitude, // longitude
			},
		});
		return apiCall;
	} catch (error) {
		return false;
	}
}
