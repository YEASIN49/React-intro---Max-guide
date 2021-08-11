import React from 'react';

const WithClass = props => (
	<div className = {props.personClass}>
		{props.children}
	</div>
);

export default WithClass;