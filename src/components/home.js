import React from 'react';
import Header from './header';
import BlogList from './blog-list';

const Home = ({articles=[], onButtonClick}) => {
	return (
		<div className="home-cont">
			<Header onButtonClick={onButtonClick} />
			<div className="home-blog-list">
				{ articles.length === 0 ? 
					<h1 className="no-articles"> Sorry. No Blogs Present </h1> :
					<BlogList articles={articles} />
				}
			</div>
		</div>
	)
};

export default Home;