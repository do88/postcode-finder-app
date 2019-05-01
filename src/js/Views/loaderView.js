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
	parent.html(loader);
};

export const clearLoader = () => {
	const loader = $(`.${elementStrings.loader}`);
	if (loader) loader.remove();
};
