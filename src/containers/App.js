import React, { Component } from 'react';
// import logo from './logo.svg';
import classes from './App.css';
// import Radium, {StyleRoot} from 'radium';
// import styled from 'styled-components';
import Person from '../components/PersonList/Person/Person';
// import HookIntro from './Person/HookIntro';
// import './Person/Person.css';
// import Radium from 'radium';
import ErrorBoundary from '../ErrorBoundary'


// const StyledButton = styled.button`
//   background-color: ${props => props.colorStyleCondition ? 'red' : 'green'};
//   font: inherit;
//   border: 1px solid blue;
//   padding: 5px 10px;
//   borderRadius: 10px;
//   cursor: pointer;

//   &:hover {
//     background-color : black;
//     color: white;
//   }
// `;


class App extends Component {
  state = {
    persons: [
      {id : "123", name: "newMax", age:39},
      {id : "abc", name: "newAvg", age:38},
      {id : "abc123", name: "newMin", age:37}
    ],
    otherState: "random text",
    shouldRenderConditionally : false
  }

  realtimeNameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(individualPerson => {
      return individualPerson.id === id;
    });
    const newPerson = {...this.state.persons[personIndex]} ;// this is a single person object
    newPerson.name = event.target.value;
    const updatePreviousToNewPersons = [...this.state.persons];
    updatePreviousToNewPersons[personIndex] = newPerson;
    
    this.setState({persons: updatePreviousToNewPersons})

  }
  conditionallyRenderHandler = (event) => {
    const renderConditionally = this.state.shouldRenderConditionally;
    this.setState({shouldRenderConditionally : !renderConditionally});
    console.log("shouldRenderConditionally test"+ this.state.shouldRenderConditionally)
    // btnClass.push()
  }
  deleteComponentHandler = (componentIndex) => {
    // const newPersonArrObj = this.state.persons never use this as it manupulate the main reference value
    // const newPersonArrObj = this.state.persons.slice(); // this or below line should be used because
    //  it creates a complete new copy from the this.state.person main reference arr obj.
    const newPersonArrObj = [...this.state.persons];
    newPersonArrObj.splice(componentIndex,1);
    this.setState({persons: newPersonArrObj});
  }

  switchNameHandler = (newName) => {
    console.log("clicked");
    // this.state.persons[0].name = "maxByHandler";
    this.setState({persons: [
      {name: newName, age:43},
      {name: "avgByHandler", age:42},
      {name: "minByHandler", age:41}
    ]})
  }
  render() {

    // const newStyle = {
    //   backgroundColor: "green"
    // }
    
    const customStyle = {
      padding: "10px",
      backgroundColor: "blue"
    }
    
    
    // instead we used StyledButton styled component
    // const customStyle = {
    //   backgroundColor: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '5px 10px',
    //   borderRadius: "10px",
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor : 'blue'
    //   }
    // }
    
    let conditionallyRender = null;

    if(this.state.shouldRenderConditionally){
      conditionallyRender = (
        <div>
        {this.state.persons.map((person, index) => {
          return <ErrorBoundary key = {person.id}><Person 
                    deleteOnClick = {this.deleteComponentHandler.bind(this,index)} // also below line can be used
                    // click = {() => this.deleteComponentHandler(index)}
                    name = {person.name} 
                    age = {person.age}
                    // key = {person.id} // moved this to ErrorBoundary if used
                    changeName = {(event) => this.realtimeNameChangeHandler(event, person.id)}
                    /></ErrorBoundary>
        })}
          <Person>This is efficient condetional render process but not dynamic which are the previous three components</Person>
        </div>
      );
      
      //   if(customStyle.backgroundColor === "white"){
      //     customStyle.backgroundColor = "red";
      // }
      
      // customStyle[':hover']= {
      //   backgroundColor : 'black',
      //   color: 'white'
      // }
      

    } 
    let test = "padding: 10px"

    let btnClass = [];
    
    if(this.state.persons.length < 3){
      btnClass.push(classes.Red);
    }
    if(this.state.persons.length < 2){
      btnClass.push(classes.Bold)
    }

    // ***********************************
    //
    // To get the fully dynamic behavior delete all items inside return function 
    // untill conditionally render component 
    // 
    // ***********************************

    return (
  //   <StyleRoot> 
        <div className={classes.App}>
        {/*<HookIntro name="from hook's person"/> 
        <h1>Hello !</h1>
        <button onClick={this.switchNameHandler.bind(this,"nameByBindOnHandlerParameter")}>Switch Name</button>
        <button
          style = {customStyle}
          key = "key-1"
          onClick={() => {this.switchNameHandler("another but less efficiant way to pass parameter from component")}}>Switch 2</button>
        <Person 
        name={this.state.persons[0].name} 
        age ={this.state.persons[0].age}
        /> 
        <Person 
        name={this.state.persons[1].name} 
        age ={this.state.persons[1].age}
        click= {this.switchNameHandler.bind(this,"nameByBindOnHandlerParameterInPersonComponent")}
        changeName = {this.realtimeNameChangeHandler}> <i>internal text - realtime Changeable</i></Person> 
        
        <Person 
        name={this.state.persons[1].name} 
        age ={this.state.persons[1].age}
        click= {this.switchNameHandler.bind(this,"nameByBindOnHandlerParameterInPersonComponent")}
        changeName = {this.realtimeNameChangeHandler}> <i>internal text - realtime Changeable</i></Person> 

        <Person 
        name={this.state.persons[2].name} 
        age ={this.state.persons[2].age}/>*/}
        {/*<StyledButton*/}
        <button 
            // style = {customStyle }
            className = {classes.Btn}
            // colorStyleCondition = {this.state.shouldRenderConditionally}
            key = "key-2"
            onClick={this.conditionallyRenderHandler}>
              Render Something Conditionally
        </button>      
        {/*</StyledButton>  */}      
        

          {this.state.shouldRenderConditionally ? <div>
            <Person >This portion rendered conditionally but not clean</Person>
          </div>: null }

          <button 
              className = {btnClass.join(" ")}
              // className="red"
              // style = {customStyle }
              // key = "key-3"
              onClick={this.conditionallyRenderHandler}>
                Render Conditionally with efficiancy and clean code
            </button>
          <div><h2>below this portion is created with efficiancy and clean code</h2></div>
          <h4>{conditionallyRender}</h4>
        </div>
//    </StyleRoot> 
    );
  } 
}

// export default Radium(App);
export default App;
