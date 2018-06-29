import React from 'react';

class AddBlogForm extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			error: false,
			errMsg: ''
		};

		this.submit = this.submit.bind(this);
	}

	submit(e){
		e.preventDefault();
		const {_author, _title, _desc} = this.refs;
		let title  = _title.value,
			author = _author.value,
			desc   = _desc.value;

		if(typeof(author) !== 'string' && author.trim().length == 0){
			this.setState({
				error: true,
				errMsg: 'Please enter your name!'
			});
		} else if(typeof(title) !== 'string' && title.trim().length > 5){
			this.setState({
				error: true,
				errMsg: 'Please enter a title greater than 5 characters of length!'
			})
		} else if(typeof(desc) !== 'string' && desc.trim().length > 50){
			this.setState({
				error: true,
				errMsg: 'Please write a proper blog greater than 50 characters of length!'
			})
		} else {
			this.setState({
				error: false,
				errMsg: ''
			}, () => {
				this.props.onFormSubmit(title, author, desc);
			})
		}
	}

	render(){
		return (
			<div className="add-blog-cont">
				<div className="cross-button fa fa-times-circle" onClick={() => this.props.onButtonClick('showForm')} />
				<div className="add-blog">
					<div className="add-blog-header">
						<h1> Write A Blog </h1>
					</div>
					<div className="add-blog-form">
						<form>
							<input type="text" placeholder="Your Name" ref="_author" />
							<input type="text" placeholder="Title of Blog" ref="_title" />
							<textarea placeholder = "Your Content here" ref="_desc" ></textarea>
							<button className="submit-button" onClick={this.submit}>
								<div className="left-button"> Submit your Blog </div>
								<div className="right-button"> Submit your Blog </div>
							</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default AddBlogForm;