import React from 'react';
import '../css/main.css';
import '../css/all.css';
import AddBlogForm from './add-blog-form';
import Home from './home';
import OneBlog from './one-blog';

class App extends React.Component {
	constructor(props){
		super(props);
		this.defaultState = {
			showForm: false,
			showOneBlog: false,
			articles: []
		};

		this.state = this.defaultState;
		this.onButtonClick = this.onButtonClick.bind(this);
		this.addBlog = this.addBlog.bind(this);
	}

	addBlog(author, title, desc){
		let t = [...this.state.articles];
		t.push({
			author, title, desc
		});

		console.log(t);

		this.setState({
			articles: t
		}, () => {
			this.onButtonClick('showForm');
		})
	}

	onButtonClick(t){
		let o = {
			...this.state
		};

		if(t)
			o[t] = !o[t];

		this.setState(o);
	}

	render(){
		const showForm = this.state.showForm;
		const showOneBlog = this.state.showOneBlog;
		return (
			<div>
				{ showForm ? <AddBlogForm onButtonClick={this.onButtonClick} onFormSubmit={this.addBlog} /> : ( showOneBlog ? <OneBlog /> : <Home articles={this.state.articles} onButtonClick={this.onButtonClick}/> )}
			</div>
		)
	}
}

export default App;