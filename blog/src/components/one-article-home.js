import React from 'react';

const OneArticleHome = ({article, onArticleSelect}) => {
	let d = new Date(article.date);
	let fullDate = `${d.toLocaleDateString("en-us", {month: "long"})} ${d.getDate()},  ${d.getFullYear()}`;
	return (
		<div className="article-home">
			<h1 className="article-title"> {article.title} </h1>
			<span className="article-details"> {`${article.author} | ${fullDate}`} </span>
			<div className="article-content">
				{article.desc.slice(0,450) + "..."}
			</div>
			<div className="article-home-footer">
				<button className="header-button" onClick={() => onArticleSelect(article.id)}>
					<div className="left-button"> Read More </div>
					<div className="right-button"> Read More </div>
				</button>
			</div>
		</div>
	)
}

export default OneArticleHome;