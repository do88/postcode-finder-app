// Required
import $ from 'jquery';
import moment from 'moment';
// SVG Files
import LogoSmall from '../../img/LogoSmall.svg';
import Snow from '../../img/003-snow.svg';
import Fog from '../../img/004-fog.svg';
import Hurricane from '../../img/006-hurricane.svg';
import Wind from '../../img/005-wind-sign.svg';
import Sunrise from '../../img/002-sunny.svg';
import Sunset from '../../img/001-moonset.svg';

// eslint-disable-next-line import/prefer-default-export
export const renderWeatherBox = (stateObject) => {
	const currentData = moment().format('Mo MMMM YYYY');
	const currentTime = moment().format('HH:mm');
	const temperatureInC = Math.round(stateObject.weatherData.main.temp - 273.15);
	const sunriseTime = moment(stateObject.weatherData.sys.sunrise * 1000).format('HH:mma');
	const sunsetTime = moment(stateObject.weatherData.sys.sunset * 1000).format('HH:mma');

	// HTML markup for the api bar
	const markup = `
	<!-- BOXES -->
	<div class="boxes">

		<!-- LOGO & TIME -->
		<div class="title-bar">
			<div class="logo">
				<svg>
					<use href="${LogoSmall}#Logo"></use>
				</svg>
			</div>
			<div class="info">
				<div class="date">${currentData}</div>
				<div class="time">${currentTime}</div>
			</div>
		</div>

		<!-- LOCATION BOX -->
		<div class="location">
			<div class="row">
				<div class="center">
					<p class="small">Postcode</p>
					<p class="big">${stateObject.locationData.postcode}</p>
				</div>
			</div>
			<div class="row">
				<div class="center">
					<p class="small">Town</p>
					<p class="big">${stateObject.locationData.admin_district}</p>
				</div>
			</div>
			<div class="row">
				<div class="center">
					<p class="small">Ward</p>
					<p class="big">${stateObject.locationData.admin_ward}</p>
				</div>
			</div>
			<div class="row">
				<div class="center">
					<p class="small">Region</p>
					<p class="big">${stateObject.locationData.nhs_ha}</p>
				</div>
			</div>
		</div>

		<!-- WEATHER BOX -->
		<div class="weather">
			<div class="row">
				<div class="center">
					<div class="summary">
						<div class="icon">
						<img src="http://openweathermap.org/img/w/${stateObject.weatherData.weather[0].icon}.png" alt="">
						</div>
						<div class="temp">${temperatureInC}</div>
						<div class="unit">ºC</div>
						<div class="text">${stateObject.weatherData.weather[0].main}</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="center">
					<div class="col">
						<div class="icon">
							<svg>
								<use href="${Snow}#003-snow"></use>
							</svg>
						</div>
						<div>
							<p class="small">Pressure</p>
							<p class="big">${stateObject.weatherData.weather[0].main}</p>
						</div>
					</div>
					<div class="col">
						<div class="icon">
							<svg>
								<use href="${Fog}#004-fog"></use>
							</svg>
						</div>
						<div>
							<p class="small">Humidy</p>
							<p class="big">${stateObject.weatherData.main.humidity}%</p>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="center">
					<div class="col">
						<div class="icon">
							<svg>
								<use href="${Hurricane}#006-hurricane"></use>
							</svg>
						</div>
						<div>
							<p class="small">Windspeed</p>
							<p class="big">${stateObject.weatherData.wind.speed}m/s</p>
						</div>
					</div>
					<div class="col">
						<div class="icon">
							<svg>
								<use href="${Wind}#005-wind-sign"></use>
							</svg>
						</div>
						<div>
							<p class="small">Wind direction</p>
							<p class="big">${stateObject.weatherData.wind.deg}º</p>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="center">
					<div class="col">
						<div class="icon">
							<svg>
								<use href="${Sunrise}#002-sunny"></use>
							</svg>
						</div>
						<div>
							<p class="small">Sunrise Time</p>
							<p class="big">${sunriseTime}</p>
						</div>
					</div>
					<div class="col">
						<div class="icon">
							<svg>
								<use href="${Sunset}#001-moonset"></use>
							</svg>
						</div>
						<div>
							<p class="small">Sunset Time</p>
							<p class="big">${sunsetTime}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	`;
	// Render HTML markup
	$('#primaryContent').html(markup);
};
