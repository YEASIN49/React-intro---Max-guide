import React from 'react';
import classes from './Cockpit.css';
import { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

	const toggleBtnRef = useRef(null);
	const functionalContext = useContext(AuthContext); // this recommended context usage is for React v16.6 for 
	// functional compo. Now no need <AuthContext> component

	console.log("{[Cockpit.js] This is using functiona global context approach } ")

	useEffect(() => {
		console.log("[cockpit.js] Use Effect with empty parameter");
		// HTTP request...
		setTimeout(() => {
			alert("[cockpit.js] This is useEffect with empty parameter that load once");
		},1500);
		toggleBtnRef.current.click();
		return () => {
			console.log("[cockpit.js] This cleanup the useEffect");
		};
	},[]);

	const btnClass = [];
    
    if(props.persons.length < 3){
      btnClass.push(classes.Red);
    }
    if(props.persons.length < 2){
      btnClass.push(classes.Bold)
    }
	
	return(
		<div className={classes.Cockpit}>
		   <h1>{props.appTitle}</h1>
			<button 
			className = {btnClass.join(" ")}
			// className="red"
			// style = {customStyle }
			// key = "key-3"
			// style={{backgroundColor: "lightblue"}}
			ref={toggleBtnRef}
			onClick={props.conditionallyRenderHandlerViaCockpit}
			>
				Render Conditionally with efficiancy and clean code via Cockpit
			</button>
			{/*<AuthContext.Consumer>
				{(context) => <button onClick={context.logIn}>Log in</button>}
			</AuthContext.Consumer>*/}
			<button onClick={functionalContext.logIn}>Log in</button>
		</div>
		
	);
}

export default Cockpit;