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
			showForm: false,
			error: false
		};

		this.toggleFrom = this.toggleFrom.bind(this);
		this.addCity = this.addCity.bind(this);
	}

	toggleFrom(){
		//console.log(this.state)
		this.setState({
			showForm: !this.state.showForm
		});
	}

	componentDidMount(){
		console.log("In!!");
	}

	addCity(city){
		this.getWeather(city.Key).then((weather) => {
			//console.log(weather)

			weather = weather[0];
			let icon = "https://developer.accuweather.com/sites/default/files/";
			if(weather.WeatherIcon < 10)
				icon += "0";
			icon += weather.WeatherIcon + "-s.png"
			let t = {
				id: city.Key,
				placeDetails: {
					name: city.LocalizedName,
					country: city.Country.LocalizedName,
					administrativeArea: city.AdministrativeArea.LocalizedName
				},
				weatherDetails: {
					temp: weather.Temperature.Metric.Value,
					text: weather.WeatherText,
					icon: icon
				},
				lastUpdated: new Date(null)
			};

			let curWeather = this.state.curWeather;
			curWeather.push(t);

			this.setState({
				showForm: false,
				curWeather: curWeather
			});
		}).catch(e => {
			this.setState({
				error: true
			})
		});
	}

	getWeather(city=""){
		if(city === ""){

		} else {
			return new Promise(function(resolve, reject){
				console.log(city);
				fetch(`http://dataservice.accuweather.com/currentconditions/v1/${city}?apikey=${config.weatherId}`)
					.then(res => res.json())
					.then(res => {
						resolve(res)
					})
					.catch(e => reject(e))
			});
		}
	}

	render(){
		return (
			<div className="cont">
				{ this.state.showForm &&
					<Form toggleForm={this.toggleFrom} addCity={this.addCity} />
				}
				{ !this.state.showForm && !this.error &&
					<Home toggleForm={this.toggleFrom} cities={this.state.curWeather} />
				}
				{ !this.state.showForm && this.error &&
					<div className="show-message">
						<i className="fa fa-frown" />
						<div className="message"> Error Fetching weather! </div>
					</div>
				}
			</div>
		)
	}
};

export default App;