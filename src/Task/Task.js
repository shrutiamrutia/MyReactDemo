import React, { useState } from "react";
import "./Task.css";

const FunComponent = (props) => {
  const [list, setList] = useState(
    [1, 2, 3, 4, 5]
  );
  console.log("list", list);

  const handleDeleteElementFromList = () => {
    console.log("check")
    const updatedResult = list;
    updatedResult.pop()
    setList([...updatedResult])
  }
  const handleAddElementFromList = () => {
    const updatedResult = list;
    updatedResult.push(list[list.length - 1] + 1)
    setList([...updatedResult])
  }

  console.log("list", list)
  return (
    <div >
      <div>
        <p>You clicked {list} times</p>
        <button onClick={() => handleAddElementFromList()}>Add</button>
        <button onClick={() => handleDeleteElementFromList()}>Sub</button>

        {list.map(item => (
          <div className="block">
            List   {item}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FunComponent;


