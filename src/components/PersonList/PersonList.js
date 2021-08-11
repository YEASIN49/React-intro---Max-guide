import React from 'react';
import Person from './Person/Person'
import AuthContext  from '../../context/auth-context';

// parenthesis can be used or nothing can instead braces
//  in functional components with arrow function
// const PersonList = (props) => (
const PersonList = (props) => {
	return ( props.persons.map((person, index) => {
				return (
						<Person 
							deleteOnClick = {props.clickToDeleteViaPersonList.bind(props,index)} // also below line can be used
							// click = {() => this.deleteComponentHandler(index)}
							name = {person.name} 
							age = {person.age}
							// isAuth={props.isAuthenticated}
							key = {person.id} // moved this to ErrorBoundary if used
							changeName = {(event) => props.nameChangeToPersonList(event, person.id)}
							/>
				);
						
							
			})
		// </AuthContext.Consumer>
	)
} 
	
// ); 

export default PersonList;