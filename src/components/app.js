import React from 'react';
import '../css/main.css';
import '../css/all.css';
import AddBlogForm from './add-blog-form';
import Home from './home';
import OneBlog from './one-blog';
import {v4} from 'uuid';

class App extends React.Component {
	constructor(props){
		super(props);
		this.defaultState = {
			showForm: false,
			showOneBlog: false,
			articles: [],
			selectedArticle: {}
		};

		this.state = this.defaultState;
		this.onButtonClick = this.onButtonClick.bind(this);
		this.addBlog = this.addBlog.bind(this);
		this.onArticleSelect = this.onArticleSelect.bind(this);
	}

	onArticleSelect(id){
		let t = this.state.articles.reduce(function(prev, e){
			if(e.id === id){
				return {...e};
			}
		}, {});
		
		this.setState({
			showOneBlog: !this.state.showOneBlog,
			selectedArticle: t
		});
	}

	addBlog(author, title, desc){
		let t = [...this.state.articles];
		t.push({
			author, title, desc,
			date: Date.now(),
			id: v4()
		});

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
		o.selectedArticle = {};

		this.setState(o);
	}

	render(){
		const showForm = this.state.showForm;
		const showOneBlog = this.state.showOneBlog;
		return (
			<div>
				{ showForm ? <AddBlogForm onButtonClick={this.onButtonClick} onFormSubmit={this.addBlog} /> : ( showOneBlog ? <OneBlog article={this.state.selectedArticle} onButtonClick={this.onButtonClick} /> : <Home articles={this.state.articles} onButtonClick={this.onButtonClick} onArticleSelect={this.onArticleSelect}/> )}
			</div>
		)
	}
}

export default App;