import React from 'react';
import fetch from 'isomorphic-fetch';
import config from './config';
import Form from './pages/form';
import Home from './pages/home';

// curWeather Object
// { placedetails: {name, lat, lang}, weatherDetails: {temp, temp_max, temp_min, desc, icon}, lastUpdated }

class App extends React.Component {
	constructor(props){
		super(props);
		this._weatherApiKey = config.weatherId;
		this.state = {
			curWeather: [],
			showForm: false
		};

		this.toggleFrom = this.toggleFrom.bind(this);
	}

	toggleFrom(){
		console.log(this.state)
		this.setState({
			showForm: !this.state.showForm
		});
	}

	componentDidMount(){}

	render(){
		return (
			<div className="cont">
				{ this.state.showForm ?
					<Form toggleForm={this.toggleFrom} /> : <Home toggleForm={this.toggleFrom} cities={this.state.curWeather} />
				}
			</div>
		)
	}
};

export default App;