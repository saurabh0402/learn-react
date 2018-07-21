import React from 'react';

const Weather = ({city}) => {
	return (
		<div className="weather">
			<div className="left">
				<div className="city-name"> {`${city.placeDetails.name}, ${city.placeDetails.administrativeArea}, ${city.placeDetails.country}`} </div>
				<div className="temp"> {city.weatherDetails.temp} <sup> o </sup> C </div>
			</div>
			<div className="right">
				<div className="weather-image">
					<img src={city.weatherDetails.icon} />
				</div>
				<div className="weather-details"> {city.weatherDetails.text} </div>
			</div>
			<div className="button-cont">
				<button class="refresh-button">
					<i class="fas fa-redo-alt"></i>
				</button>
				<button class="remove-button">
					<i class="fas fa-times"></i>
				</button>
			</div>
		</div>
	)
};

export default Weather;