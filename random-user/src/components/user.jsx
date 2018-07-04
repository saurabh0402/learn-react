import React from 'react';

const User = ({userDetails}) => {
	return (
		<div className="user-details">
			<div className="user-image">
				<img src={userDetails.picture.large} className="user-avatar" />
			</div>
			<div className="user-name"> {`${userDetails.name.first} ${userDetails.name.last}`} </div>
			<div className="user-contanct"> 
				<span className="user-contact-title"> Email: </span>
				<span className="user-contact-value"> {userDetails.email} </span>
				<span className="user-contact-separator"> | </span>
				<span className="user-contact-title"> Phone: </span>
				<span className="user-contact-value"> {userDetails.cell} </span>
			</div>
		</div>
	);
};

export default User;