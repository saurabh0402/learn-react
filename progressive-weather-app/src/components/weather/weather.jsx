import React from 'react';

const Weather = ({city}) => {
	return (
		<h1> {city.placeDetails.name} </h1>
	)
};

export default Weather;