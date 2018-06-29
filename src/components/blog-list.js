import React from 'react';

const BlogList = function({articles}){
	return (
		<div className='blog-list'>
			{
				articles.map(function(a, i){
					return <h1 key={'article' + i}> {a.title} </h1>
				})
			}
		</div>
	)
}

export default BlogList;