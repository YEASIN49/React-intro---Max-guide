import React from 'react';
import styled from 'styled-components';
// import Radium, {StyleRoot} from 'radium';
// import Person from './'

const StyledDiv = styled.div`
	width: 80%;
	border: 2px solid gray;
	padding: 15px 10px;
	margin: 15px auto;
	box-shadow: -5px 5px 6px #ccc;

	button{
		padding:10px;
		background-color: rgb(170, 242, 255);
	}

	@media (min-width: 550px) {
		width: 500px;
	}
`


const Person = (props) => {
	// const internalStyle = {
	// 	'@media (min-width: 550px)': {
	// 		width: '500px'
	// 	}
	// }
	return(
		//<div className = "Person" style = {internalStyle}>
		<StyledDiv>
			<button onClick={props.deleteOnClick}>Delete this component</button>
			<p onClick={props.click}>This is a {props.name} and I am {props.age} years old.</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changeName} value = {props.name}/>
		</StyledDiv>
		//</div>
			)
}

// export default Radium(Person);
export default Person;