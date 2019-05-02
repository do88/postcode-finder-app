// Required
import '@babel/polyfill';
import $ from 'jquery';

export default async function apiValidator(stateObject) {
	try {
		const apiCall = await $.getJSON({
			url: 'https://api.openweathermap.org/data/2.5/weather?',
			data: {
				appid: stateObject.key, // api key
				lat: stateObject.locationData.latitude, // latitude
				lon: stateObject.locationData.longitude, // longitude
			},
		});
		return apiCall;
	} catch (error) {
		return error;
	}
}

// state.key
// state.locationData.latitude
// state.locationData.longitude
// api.openweathermap.org/data/2.5/weather?lat=35&lon=139
