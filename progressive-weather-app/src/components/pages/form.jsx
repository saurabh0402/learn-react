import React from 'react';
import config from '../config';

class Form extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			searchedOnce: false,
			searching: false,
			cities: []
		};

		this._mapsApiKey = config.placesId;
		this.searchCity = this.searchCity.bind(this);
	}

	searchCity(e){
		e.preventDefault();
		console.log(this.refs.city.value);
	}

	componentDidMount(){
		this.refs.city.focus();
	}

	render(){
		const {searchedOnce, searching, cities} = this.state;
 		return (
			<div className="form-cont">
				<button className="close-form-button flying-button" onClick = {() => this.props.toggleForm()}>
					<i className="fa fa-times-circle" />
				</button>
				<div className="add-city-form">
					<form onSubmit={this.searchCity}>
						<input type="text" placeholder="Enter City Name" ref="city" />
						<button type="submit"> <span> Search City </span> </button>
					</form>
				</div>
				<div className="city-list">
					{
						searching && 
							<div className="show-message">
								<i className="fa fa-search" />
								<div className="message"> Searching! Please wait... </div>
							</div>
					}

					{ !searching && !searchedOnce && 
							<div className="show-message">
								<i className="fa fa-map-marked-alt" />
								<div className="message"> Please enter a city name and search! </div>
							</div>
					}

					{
						!searching && searchedOnce && cities.length == 0 &&
							<div className="show-message">
								<i className="fa fa-frown" />
								<div className="message"> Sorry. No results found. Try a different city name. </div>
							</div>
					}

					{
						!searching && cities.length != 0 && 
							<div className="cities">
								City List here!
							</div>
					}
				</div>
			</div>
		)
	}
};

export default Form;