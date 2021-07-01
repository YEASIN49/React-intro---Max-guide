import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import HookIntro from './Person/HookIntro'
import './Person/Person.css'

class App extends Component {
  state = {
    persons: [
      {name: "newMax", age:39},
      {name: "newAvg", age:38},
      {name: "newMin", age:37}
    ],
    otherState: "random text"
  }

  realtimeNameChangeHandler = (event) => {

    this.setState({persons: [
      {name: "newMax", age:39},
      {name: event.target.value, age:38},
      {name: "newMin", age:37}
    ]})

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

    const customSyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
      <HookIntro n="from hook's person"/>
        <h1>Hello !</h1>
        <button onClick={this.switchNameHandler.bind(this,"nameByBindOnHandlerParameter")}>Switch Name</button>
        <button
          style = {customSyle}
          onClick={() => {this.switchNameHandler("another but less efficiant way to pass parameter from component")}}>Switch 2</button>
        <Person 
        name={this.state.persons[0].name} 
        age ={this.state.persons[0].age}
        /> 
        <Person 
        name={this.state.persons[1].name} 
        age ={this.state.persons[1].age}
        click= {this.switchNameHandler.bind(this,"nameByBindOnHandlerParameterInPersonComponent")}
        changeName = {this.realtimeNameChangeHandler}> <i>internal info</i></Person> 
        
        <Person 
        name={this.state.persons[2].name} 
        age ={this.state.persons[2].age}/> 
      </div>
    );
  } 
}

export default App;
