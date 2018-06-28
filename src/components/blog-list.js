import React from 'react';
import Header from './header';

const BlogList = ({onButtonClick}) => {
	return (
		<div className="blog-list-cont">
			<Header onButtonClick={onButtonClick} />
			<div className="blog-list"></div>
		</div>
	)
};

export default BlogList;