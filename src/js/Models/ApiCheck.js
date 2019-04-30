// Required
import '@babel/polyfill';
import $ from 'jquery';

export default async function apiValidator(testApi) {
	try {
		const apiCall = await $.getJSON({
			url: 'https://api.openweathermap.org/data/2.5/weather?',
			data: {
				appid: testApi, // api key
				q: 'London', // search query
			},
		});
		return apiCall;
	} catch (error) {
		return error;
	}
}
