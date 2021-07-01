import React,{useState} from 'react';
import Person from '../Person/Person'
const HookIntro = (props) => {
	const [personSt,updatePersonSt] = useState({
		persons: [
			{name: "MaxfromHookState", age:39},
			{name: "newAvg", age:38},
			{name: "newMin", age:37}
		 ],
		 otherState: "random text"
		 
	});

	const hookSwitchNameChangeHandler = () => {
		console.log("clicked on hook button");
		
		updatePersonSt({
			persons: [
				{name: "changedFromHookIntro", age:39},
				{name: "newAvg", age:38},
				{name: "newMin", age:37}
			 ]
		});
	}
	console.log(personSt);
	return(
	    <div>
		 <button onClick={hookSwitchNameChangeHandler}>Hook Switch</button>
		 	<Person name={personSt.persons[0].name} age ={personSt.persons[0].age}/>
		 </div>
		  
	)
}

export default HookIntro;