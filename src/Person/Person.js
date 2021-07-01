import React from 'react';
// import Person from './'

const Person = (props) => {
	return(
		<div className = "Person">
			<p onClick={props.click}>This is a {props.name} and I am {props.age} years old.</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changeName} value = {props.name}/>
		</div>
			)
}

export default Person;