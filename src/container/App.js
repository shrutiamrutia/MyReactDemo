import React, { PureComponent } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Auxiliary from "../hoc/Auxiliary";

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] inside Constructor', props);
    this.state = {
      persons: [
        { id: "abc", name: "Max", age: 28 },
        { id: "pqr", name: "Man", age: 21 },
        { id: "xyz", name: "Many", age: 24 },
      ],
      otherState: "some other value",
      showPersons: false,
      toggleClicked: 0
    };
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount()');
  }


  componentDidMount() {
    console.log('[App.js] inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside componentWillUpdate()',
      nextProps,
      nextState);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[UPDATE App.js] inside getDerivedStateFromProps',
      nextProps,
      prevState
    );
    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log('[UPDATE App.js] inside getSnapshotBeforeUpdate');
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] inside componentDidUpdate()');
  }



  // state = {
  //   persons: [
  //     { id: "abc", name: "Max", age: 28 },
  //     { id: "pqr", name: "Man", age: 21 },
  //     { id: "xyz", name: "Many", age: 24 },
  //   ],
  //   otherState: "some other value",
  //   showPersons: false
  // };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
  };

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    // throw new Error("Something went wrong");
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  };


  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {
    console.log('[App.js] inside render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonsHandler}
        changed={this.nameChangeHandler}
        isAuthenticated={this.state.authenticated}
      />;
    }
    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push("red"); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push("bold"); //classes = ['red','bold']
    }

    return (
      <Auxiliary>
        <div className="App">
          <button onClick={() => { this.setState({ showPersons: true }) }}>show Persons</button>
          <Cockpit
            title={this.props.appTitle}
            login={this.loginHandler}
            showPersons={this.state.showPersons}
            persons={this.state.showPersons}
            clicked={this.togglePersonsHandler} />

        </div>
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Auxiliary>

    );
  }
}
export default withClass(App, "App");