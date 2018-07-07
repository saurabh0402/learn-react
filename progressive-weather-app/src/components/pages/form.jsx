import React from 'react';
import config from '../config';
import fetch from 'isomorphic-fetch';
import SearchResult from '../search.jsx'

class Form extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			searchedOnce: false,
			searching: false,
			cities: [],
			error: false
		};

		this.searchCity = this.searchCity.bind(this);
	}

	searchCity(e){
		e.preventDefault();
		let city = this.refs.city.value.trim();
		if(city.length < 3){
			this.setState({
				'error': true
			})
		} else {
			let url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${config.weatherId}&q=${city}`;
			this.setState({
				'searching': true
			}, () => {
				fetch(url)
					.then(res => res.json())
					.then(res => {
						this.setState({
							'cities': res,
							'searching': false,
							'searchedOnce': true,
							'error': false
						});
					});
			});
		}
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
						{ this.state.error && <div class="warning"> Please enter atleast three characters </div> }
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
								{
									this.state.cities.map((city, i) => {
										return <SearchResult city={city} key={'city'+i} onClick={() => this.props.addCity(city)} />
									})
								}
							</div>
					}
				</div>
			</div>
		)
	}
};

export default Form;