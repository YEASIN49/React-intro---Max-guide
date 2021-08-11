// IMPORTANT This is not a component but a normal javascript function that returns another function
import React from 'react';

const anotherHOC = (WrappedComponent, className) => {
	return props => (
		<div className = {className}>
			<WrappedComponent {...props}/>
		</div>

	);
}

export default anotherHOC;
