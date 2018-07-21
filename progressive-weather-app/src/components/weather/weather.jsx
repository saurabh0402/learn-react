import React from 'react';

const Weather = ({city, deleteCity, refreshCity}) => {
	let t = new Date(city.lastUpdated);
	let hrs = t.getHours() > 9 ? t.getHours() : "0" + t.getHours(),
		min = t.getMinutes() > 9 ? t.getMinutes() : "0" + t.getMinutes(),
		sec = t.getSeconds() > 9 ? t.getSeconds() : "0" + t.getSeconds(),
		date = t.getDate() > 9 ? t.getDate() : "0" + t.getDate(),
		mon = t.getMonth() > 8 ? t.getMonth()+1 : "0" + (t.getMonth()+1),
		yr = t.getFullYear(); 
	return (
		<div className="weather">
			<div className="left">
				<div className="city-name"> {`${city.placeDetails.name}, ${city.placeDetails.administrativeArea}, ${city.placeDetails.country}`} </div>
				<div className="temp"> {city.weatherDetails.temp} <sup> o </sup> C </div>
				<div className="last-update"> Last Updated : {`${hrs}:${min}:${sec}, ${date}\/${mon}\/${yr}`} </div>
			</div>
			<div className="right">
				<div className="weather-image">
					<img src={city.weatherDetails.icon} />
				</div>
				<div className="weather-details"> {city.weatherDetails.text} </div>
			</div>
			<div className="button-cont">
				<button className="refresh-button" onClick={() => refreshCity(city.id)}>
					<i className="fas fa-redo-alt"></i>
				</button>
				<button className="remove-button" onClick={() => deleteCity(city.id)}>
					<i className="fas fa-times"></i>
				</button>
			</div>
		</div>
	)
};

export default Weather;