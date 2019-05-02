import $ from 'jquery';
import loaderSVG from '../../img/Loader.svg';

export const renderLoader = (parent) => {
	const loader = `
        <div class="loader">
			<svg>
                <use href="${loaderSVG}#Loader"></use>
			</svg>
        </div>
	`;
	$('#primaryContent').html(loader);
};

export const clearLoader = () => {
	$('.loader').remove();
};
