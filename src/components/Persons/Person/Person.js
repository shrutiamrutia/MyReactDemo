import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Person.css";
import withClass from "../../../hoc/withClass";
import Auxiliary from "../../../hoc/Auxiliary";

import { AuthContext } from "../../../container/App";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] inside Constructor', props);
    this.inputElement = React.createRef();
    this.state = {
      persons: [
        { id: "abc", name: "Max", age: 28 },
        { id: "pqr", name: "Man", age: 21 },
        { id: "xyz", name: "Many", age: 24 },
      ],
      otherState: "some other value",
      showPersons: false
    };
  }

  componentWillMount() {
    console.log('[Person.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidMount()');
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    console.log('[Person.js] inside render()');
    return (
      <Auxiliary>
        <AuthContext.Consumer>
          {auth => auth ? <p>I'm authenticated!</p> : null}
        </AuthContext.Consumer>
        <div className="Person">
          <p onClick={this.props.click}>
            I'm a {this.props.name} and I am {this.props.age} year old!
          </p>
          <p>{this.props.children}</p>
          <input
            ref={this.inputElement}
            type="text"
            onChange={this.props.changed}
            value={this.props.name} />
        </div>
      </Auxiliary>

    );
    // return [
    //   <p onClick={this.props.click}>
    //     I'm a {this.props.name} and I am {this.props.age} year old!
    //   </p>,
    //   <p>{this.props.children}</p>,
    //   <input type="text"
    //     onChange={this.props.changed}
    //     value={this.props.name} />,
    // ]
  }
}
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, "Person");



// const person = (props) => {
//   return (
//     <div className="Person">
//       <p onClick={props.click}>
//         I'm a {props.name} and I am {props.age} year old!
//       </p>
//       <p>{props.children}</p>
//       <input type="text"
//         onChange={props.changed}
//         value={props.name} />
//     </div>
//   );
// };