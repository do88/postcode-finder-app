import $ from 'jquery';

export const renderLoader = (parent) => {
	const loader = `
        <div class="loader">
			<svg>
                <use href="/src/img/Loader.svg#Loader"></use>
			</svg>
        </div>
	`;
	document.querySelector('#primaryContent').innerHTML = loader;
	// parent.html(loader);
};

export const clearLoader = () => {
	const loader = $(`.${elementStrings.loader}`);
	if (loader) loader.remove();
};
