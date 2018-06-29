import React from 'react';
import Header from './header';

const BlogList = ({articles=[], onButtonClick}) => {
	return (
		<div className="blog-list-cont">
			<Header onButtonClick={onButtonClick} />
			<div className="blog-list">
				{ articles.length === 0 ? 
					<h1 className="no-articles"> Sorry. No Blogs Present </h1> :
					<h1> Ok! </h1>
				}
			</div>
		</div>
	)
};

export default BlogList;