// Required
import $ from 'jquery';

// eslint-disable-next-line import/prefer-default-export
export const displayUserMessage = (messageContent, messageType) => {
	const markup = `
		<p class="${messageType}">${messageContent}</p>
	`;
	$('#messageText')
		.stop()
		.hide()
		.html(markup)
		.fadeIn()
		.delay(2000)
		.fadeOut();
};
