import React from 'react';
import User from './user';

const UserList = ({users}) => {
	if(users.length === 0){
		return <h3> No Users to Display :( </h3>
	} else {
		return (
			<div className="user-list">
				{
					users.map((user, i) => <User key={"user"+i} userDetails={user} />) 
				}
			</div>
		);
	}
};

export default UserList;