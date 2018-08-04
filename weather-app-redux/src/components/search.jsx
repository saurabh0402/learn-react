import React from 'react';

const SearchResult = ({city, onClick}) => {
	let name = `${city.LocalizedName}, ${city.AdministrativeArea.LocalizedName}, ${city.Country.LocalizedName}`
	return (
		<div>
			<div className="search-result" onClick={onClick} >
				<div className="search-result-back"></div>
				<div className="search-result-text"> {name} </div>
			</div>
		</div>
	)
};

export default SearchResult;