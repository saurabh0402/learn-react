import React from 'react';
import '../css/main.css';
import AddBlogForm from './add-blog-form';
import BlogList from './blog-list';
import OneBlog from './one-blog';
import Header from './header';

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
			o[t] = true;

		this.setState(o);
	}

	render(){
		const showForm = this.state.showForm;
		const showOneBlog = this.state.showOneBlog;
		return (
			<div>
				<Header onButtonClick={this.onButtonClick} />
				{ showForm ? <AddBlogForm /> : ( showOneBlog ? <OneBlog /> : <BlogList /> )}
			</div>
		)
	}
}

export default App;