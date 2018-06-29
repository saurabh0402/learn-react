import React from 'react';
import '../css/main.css';
import '../css/all.css';
import AddBlogForm from './add-blog-form';
import BlogList from './blog-list';
import OneBlog from './one-blog';

class App extends React.Component {
	constructor(props){
		super(props);
		this.defaultState = {
			showForm: false,
			showOneBlog: false
		};

		this.state = this.defaultState;
		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick(t){
		let o = {
			...this.defaultState
		};

		if(t)
			o[t] = !this.state[t];

		this.setState(o);
	}

	render(){
		const showForm = this.state.showForm;
		const showOneBlog = this.state.showOneBlog;
		return (
			<div>
				{ showForm ? <AddBlogForm onButtonClick={this.onButtonClick} /> : ( showOneBlog ? <OneBlog /> : <BlogList onButtonClick={this.onButtonClick}/> )}
			</div>
		)
	}
}

export default App;