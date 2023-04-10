import React, { Component } from "react";
import "./Task.css";

class Item extends Component {
  state = {
    list: ["List 1", "List 2", "List 3"]
  };

  render() {
    return (
      <div >
        <div>
          {this.state.list.map(item => (
            <div className="block">
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Item;
