// Required
import '@babel/polyfill';
import $ from 'jquery';

export default async function fetchPostcodeData(postcode) {
	try {
		const apiCall = await $.getJSON({
			url: `https://api.postcodes.io/postcodes/${postcode}`,
		});
		return apiCall;
	} catch (error) {
		return false;
	}
}
