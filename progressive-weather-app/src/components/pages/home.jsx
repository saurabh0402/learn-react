import React from 'react';
import Weather from '../weather/weather';

const Home = ({toggleForm, cities, deleteCity, refreshCity}) => {
	return (
		<div className="home-cont">
			<button className="open-form-button flying-button" onClick={() => toggleForm()}>
				<i className="fa fa-plus-circle" />
			</button>
			{
				cities.length > 0 ?
					<div className="weather-list">
						{
							cities.map(function(city, i){
								return <Weather city={city} key={'weather'+i} deleteCity={deleteCity} refreshCity={refreshCity} />
							})
						}
					</div> :
					<div className="show-message">
						<i className="far fa-grin-beam-sweat" />
						<div className="message"> No cities added. Add One to see weather report. </div>
					</div>
			}
		</div>
	)
};

export default Home;