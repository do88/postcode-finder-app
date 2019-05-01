// Required
import '@babel/polyfill';
import $ from 'jquery';

export default async function fetchPostcodeData(stateObject) {
	try {
		const apiCall = await $.getJSON({
			url: `https://api.postcodes.io/postcodes/${postcode}`,
		});
		return apiCall;
	} catch (error) {
		return false;
	}
}
