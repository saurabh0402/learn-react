import React from 'react';
import fetch from 'isomorphic-fetch';
import config from './config';
import Form from './pages/form';
import Home from './pages/home';

// curWeather Object
// { placedetails: {name, administrativeArea, country id}, weatherDetails: {temp, text, icon}, lastUpdated }

class App extends React.Component {
	constructor(props){
		super(props);
		this._weatherApiKey = config.weatherId;
		this.state = {
			curWeather: [],
			showForm: false
		};

		this.toggleFrom = this.toggleFrom.bind(this);
		this.addCity = this.addCity.bind(this);
	}

	toggleFrom(){
		console.log(this.state)
		this.setState({
			showForm: !this.state.showForm
		});
	}

	componentDidMount(){}

	addCity(city){
		let t = {
			id: city.Key,
			placeDetails: {
				name: city.LocalizedName,
				country: city.Country.LocalizedName,
				administrativeArea: city.AdministrativeArea.LocalizedName
			},
			weatherDetails: {
				temp: null,
				text: '',
				icon: ''
			},
			lastUpdated: new Date(null)
		};

		let curWeather = this.state.curWeather;
		curWeather.push(t);

		this.setState({
			showForm: false,
			curWeather: curWeather
		});
	}

	render(){
		return (
			<div className="cont">
				{ this.state.showForm ?
					<Form toggleForm={this.toggleFrom} addCity={this.addCity} /> : <Home toggleForm={this.toggleFrom} cities={this.state.curWeather} />
				}
			</div>
		)
	}
};

export default App;