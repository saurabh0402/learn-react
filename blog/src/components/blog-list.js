import React from 'react';
import OneArticleHome from './one-article-home'

const BlogList = function({articles, onArticleSelect}){
	return (
		<div className='blog-list'>
			{
				articles.map(function(a, i){
					return <OneArticleHome key={'article' + i} article={a} onArticleSelect={onArticleSelect} />
				})
			}
		</div>
	)
}

export default BlogList;