import React from 'react';

const AddBlogForm = ({onButtonClick}) => {
	return (
		<div className="add-blog-cont">
			<div className="cross-button fa fa-times-circle" onClick={() => onButtonClick('showForm')} />
			<div className="add-blog">
				<div className="add-blog-header">
					<h1> Write A Blog </h1>
				</div>
				<div className="add-blog-form">
					<form>
						<input type="text" placeholder="Your Name" />
						<input type="text" placeholder="Title of Blog" />
						<textarea placeholder = "Your Content here"></textarea>
						<button className="submit-button">
							<div className="left-button"> Submit your Blog </div>
							<div className="right-button"> Submit your Blog </div>
						</button>
					</form>
				</div>
			</div>
		</div>
	)
};

export default AddBlogForm;