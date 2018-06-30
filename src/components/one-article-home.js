import React from 'react';

const OneArticleHome = ({article}) => {
	let d = new Date(article.date);
	let fullDate = `${d.toLocaleDateString("en-us", {month: "long"})} ${d.getDate()},  ${d.getFullYear()}`;
	return (
		<div className="article-home">
			<h1 className="article-home-title"> {article.title} </h1>
			<span className="article-home-details"> {`${article.author} | ${fullDate}`} </span>
			<div className="article-home-content">
				{article.desc}
			</div>
			<div className="article-home-footer">
				<button className="header-button">
					<div className="left-button"> Read More </div>
					<div className="right-button"> Read More </div>
				</button>
			</div>
		</div>
	)
}

export default OneArticleHome;