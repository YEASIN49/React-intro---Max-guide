import React, { Component } from 'react';
// import styled from 'styled-components';
// import Radium, {StyleRoot} from 'radium';
import classes from './Person.css'
import anotherHOC from '../../../hoc/anotherHOC';
import Auxiliary from '../../../hoc/Auxiliary'
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

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


class Person extends Component {
	constructor(props){
		super(props);
		this.inputElementRef = React.createRef(); // Reacr version >= 16.3
	}
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
	

	static contextType = AuthContext; //for class based component of React-v16.6 Now we can use context also in outside of
	//  <AuthContext> component using this.context

	componentDidMount() {
		// this.inputElementRef.focus(); //this is for React < 16.3. Newer version is in constructor and below
		this.inputElementRef.current.focus();
		console.log("{[Person.js] This is class based global context approach using contextType in class based component }"+this.context.authenticated);
	}

	render(){
		return(
			//<div className = "Person" style = {internalStyle}>
			// <StyledDiv>
				// <div className = {classes.Person}>
				<Auxiliary>
					{/*<AuthContext.Consumer> */} {/* this context now not needed as we used contextType */}
						{/*(context) => context.authenticated ? <p>Authenticated</p>:<p>Not Authenticated! Please Log In</p> */}
						{this.context.authenticated ? <p>Authenticated</p>:<p>Not Authenticated! Please Log In</p>}
					{/*</AuthContext.Consumer> */}	
						<button onClick={this.props.deleteOnClick}>Delete this component</button>
						<p onClick={this.props.click}>This is a {this.props.name} and I am {this.props.age} years old.</p>
						<p>{this.props.children}</p>
						<input 
							type="text" 
							/*ref={(inputElement) => {
								this.inputElementRef = inputElement
							}} */ // React Version < 16.3
							ref={this.inputElementRef}
							onChange={this.props.changeName} 
							value = {this.props.name}/>
				</Auxiliary>	
				// </div>
					
			// </StyledDiv>
			//</div>
				)
	}
	
}

Person.propTypes = {
	deleteOnClick: PropTypes.func,
	click: PropTypes.func,
	changeName: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number

}

// export default Radium(Person);
export default anotherHOC(Person, classes.Person);