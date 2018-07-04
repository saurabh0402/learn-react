import React from 'react';
import fetch from 'isomorphic-fetch';
import UserList from './user-list';
import Loader from './loader';
import LoadMore from './load-more';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			users: [],
			firstLoad: false,
			loading: true
		};
		this.loadUsers = this.loadUsers.bind(this);
	}

	loadUsers(){
		this.setState({
			loading: true
		}, () => {
			fetch('https://randomuser.me/api/?results=5')
				.then(res => res.json())
				.then(json => json.results)
				.then(res => {
					this.setState({
						users: this.state.users.concat(res),
						loading: false
					});
				});
		})
	}

	componentDidMount(){
		fetch('https://randomuser.me/api/?results=5')
			.then(res => res.json())
			.then(json => json.results)
			.then(res => {
				this.setState({
					users: this.state.users.concat(res),
					firstLoad: true,
					loading: false
				});
			});
	}

	render(){
		return (
			<div className="cont">
				{ this.state.firstLoad && <UserList users={this.state.users} /> }
				{ this.state.loading && <Loader /> }
				{ !this.state.loading && this.state.firstLoad && this.state.users.length > 0 && <LoadMore onClick={this.loadUsers} /> }
			</div>
		)
	}
};

export default App;