import React from 'react';

const Header = ({onButtonClick}) => {
	return (
		<div className="header">
			<button className="header-button" onClick={() => onButtonClick('showForm')}>
				<div className="left-button fa fa-pen-nib"></div>
				<div className="right-button"> Write A Blog </div>
			</button>
		</div>
	)
};

export default Header;