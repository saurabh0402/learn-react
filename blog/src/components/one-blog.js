import React from 'react';

const OneBlog = ({onButtonClick, article}) => {
	let d = new Date(article.date);
	let fullDate = `${d.toLocaleDateString("en-us", {month: "long"})} ${d.getDate()},  ${d.getFullYear()}`;
	let desc = article.desc.split('\n\n');

	return (
		<div className="one-blog">
			<div className="cross-button fa fa-times-circle" onClick={() => onButtonClick('showOneBlog')} />
			<div className="one-blog-cont">
				<h1 className="article-title"> {article.title} </h1>
				<span className="article-details"> {`${article.author} | ${fullDate}`} </span>
				<div className="article-content">
					{
						desc.map(function(d, i){
							return <p key={i}>{d}</p>
						})
					}
				</div>
			</div>
		</div>
	)
};

export default OneBlog;