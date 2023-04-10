import React from "react";
import "./Cockpit.css";
import Auxiliary from '../../hoc/Auxiliary';


const Cockpit = (props) => {
  let assignedClasses = [];

  // let btnClass = 'classes.Button';
  // if (props.showPersons) {
  //   btnClass = [classes.Button, "Cockpit"];
  // }


  if (props.persons.length <= 2) {
    assignedClasses.push("red"); //classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push("bold"); //classes = ['red','bold']
  }
  return (
    <Auxiliary>
      <div className="Cockpit">
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(" ")}>This is really working</p>
        <button onClick={props.clicked} >Toggle Persons</button>
        <button onClick={props.login}>Log in </button>
      </div>
    </Auxiliary>

  );
};
export default React.memo(Cockpit);
