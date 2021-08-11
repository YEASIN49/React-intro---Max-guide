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
import PersonList from '../components/PersonList/PersonList';
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context'


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
    shouldRenderConditionally : false,
    testCounter : 0,
    authenticated: false
  }

  realtimeNameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(individualPerson => {
      return individualPerson.id === id;
    });
    const newPerson = {...this.state.persons[personIndex]} ;// this is a single person object
    newPerson.name = event.target.value;
    const updatePreviousToNewPersons = [...this.state.persons];
    updatePreviousToNewPersons[personIndex] = newPerson;
    
    this.setState((prevState, props) => { // if update depands on previous state, MUST* use this functional setState approach
      return {
        persons: updatePreviousToNewPersons,
        testCounter: prevState.testCounter + 1
      }
    })

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

  loginHandler = () => {
    this.setState({authenticated: true});
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
        <PersonList 
          persons = {this.state.persons}
          isAuthenticated={this.state.authenticated}
          nameChangeToPersonList = {this.realtimeNameChangeHandler}
          clickToDeleteViaPersonList = {this.deleteComponentHandler}
        />
        

        
        {/* this portion moved into PersonList component
        {this.state.persons.map((person, index) => {
          // return <ErrorBoundary key = {person.id}>
          return <Person 
                    deleteOnClick = {this.deleteComponentHandler.bind(this,index)} // also below line can be used
                    // click = {() => this.deleteComponentHandler(index)}
                    name = {person.name} 
                    age = {person.age}
                    key = {person.id} // moved this to ErrorBoundary if used
                    changeName = {(event) => this.realtimeNameChangeHandler(event, person.id)}
                    />
                    {/*</ErrorBoundary> *//*}
        })
      }
        */}
        
        {/******************************************************
          ********************************************************/}

          {/*<Person>This is efficient condetional render process but not dynamic which are the previous three components</Person>*/}
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
    // let test = "padding: 10px"

    //Below code shofted to cockpit components
    // let btnClass = [];
    
    // if(this.state.persons.length < 3){
    //   btnClass.push(classes.Red);
    // }
    // if(this.state.persons.length < 2){
    //   btnClass.push(classes.Bold)
    // }

    // ***********************************
    //
    // To get the fully dynamic behavior delete all items inside return function 
    // untill conditionally render component 
    // 
    // ***********************************

    return (
  //   <StyleRoot> 
        <WithClass personClass={classes.App}>
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

          {/******************************************************
          ********************************************************/}

       {/* <button 
            // style = {customStyle }
            className = {classes.Btn}
            // colorStyleCondition = {this.state.shouldRenderConditionally}
            key = "key-2"
            onClick={this.conditionallyRenderHandler}>
              Render Something Conditionally
       </button>      */}
        {/*</StyledButton>  */}      
        

         {/* {this.state.shouldRenderConditionally ? <div>
            <Person >This portion rendered conditionally but not clean</Person>
         </div>: null } */}

          {/******************************************************
          ********************************************************/}

          {/*<button 
              className = {btnClass.join(" ")}
              // className="red"
              // style = {customStyle }
              // key = "key-3"
              onClick={this.conditionallyRenderHandler}>
                Render Conditionally with efficiancy and clean code
          </button>*/}
          <h2>Counter : {this.state.testCounter}</h2>
          
          <AuthContext.Provider value={{
            authenticated: this.state.authenticated,
            logIn: this.loginHandler
          }}>
            <Cockpit 
              appTitle = {this.props.appTitle}
              persons={this.state.persons} 
              // login={this.loginHandler}
              conditionallyRenderHandlerViaCockpit = {this.conditionallyRenderHandler}
            />
            <div>
              <h2>below this portion is created with efficiancy and clean code</h2>
            </div>


            <h4>{conditionallyRender}</h4>
          </AuthContext.Provider>  

            {/******************************************************
          ********************************************************/}

        </WithClass>  
          
     // </StyleRoot> 
    );
  } 
}

// export default Radium(App);
export default App;
