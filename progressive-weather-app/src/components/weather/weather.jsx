import React from 'react';

const Weather = ({city}) => {
	return (
		<div className="weather">
			<h1> {`${city.placeDetails.name}, ${city.placeDetails.administrativeArea}, ${city.placeDetails.country}`} </h1>
			<h1> {city.weatherDetails.temp} <sup> o </sup> C </h1>
			<img src={city.weatherDetails.icon} />
			<h1> {city.weatherDetails.text} </h1>
		</div>
	)
};

export default Weather;