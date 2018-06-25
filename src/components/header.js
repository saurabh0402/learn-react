import React from 'react';

const Header = ({onButtonClick}) => {
	return (
		<div className="header">
			<button className="header-button" onClick={() => onButtonClick()}> Home </button>
			<button className="header-button" onClick={() => onButtonClick('showForm')}> Add a Blog </button>
		</div>
	)
};

export default Header;