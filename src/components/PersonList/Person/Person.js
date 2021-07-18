import React from 'react';
// import styled from 'styled-components';
// import Radium, {StyleRoot} from 'radium';
import classes from './Person.css'

// const StyledDiv = styled.div`
// 	width: 80%;
// 	border: 2px solid gray;
// 	padding: 15px 10px;
// 	margin: 15px auto;
// 	box-shadow: -5px 5px 6px #ccc;

// 	button{
// 		padding:10px;
// 		background-color: rgb(170, 242, 255);
// 	}

// 	@media (min-width: 550px) {
// 		width: 500px;
// 	}
// `


const Person = (props) => {
	// const internalStyle = {
	// 	'@media (min-width: 550px)': {
	// 		width: '500px'
	// 	}
	// }

	// below three lines can be used for error handling
	// const testValue = Math.random();

	// if(testValue > 0.7){
	// 	throw new Error(testValue+" This is a manual error message");
	// }

	return(
		//<div className = "Person" style = {internalStyle}>
		// <StyledDiv>
			<div className = {classes.Person}>
				<button onClick={props.deleteOnClick}>Delete this component</button>
				<p onClick={props.click}>This is a {props.name} and I am {props.age} years old.</p>
				<p>{props.children}</p>
				<input type="text" onChange={props.changeName} value = {props.name}/>
			</div>
				
		// </StyledDiv>
		//</div>
			)
}

// export default Radium(Person);
export default Person;