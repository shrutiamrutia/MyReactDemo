import "./Task3.css";
import React, { useState } from 'react'

const Task3 = () => {
    const [list, setList] = useState({
        school: 3,
        mobile: 3,
        fruits: 8,
        office: 2
    });

    const [count, setCount] = useState(0);

    const [name, setName] = useState('');
    const [value, setValue] = useState('');

    const changeName = (event) => {
        setName(event.target.value);
    };

    const changeValue = (event) => {
        console.log("event", event)
        setValue(event.target.value);
    };

    const transferValue = (event) => {
        const upDate = Object.assign(list, { [name]: value })
        console.log("up", upDate)
        setList(Object.assign({}, upDate))
    };

    const handleTotal = (list) => {
        const output = Object.values(list).reduce((accumulator, keys) => {
            console.log("acc", accumulator)
            console.log("val", keys)
            return accumulator + keys
        }, 0)
        setCount(output)
    }

    const handleResetAll = () => {
        setCount(0)
    }

    const handleDelete = (key) => {
        console.log("key", key);
        const result = list;
        // result.school = 8
        // result[key] = list[key] + 1
        // list.school = list.school + 1
        delete result[key];
        console.log("key", result);
        const upDate = Object.assign({}, result)
        setList(upDate)
    };

    const handleAdd = (key) => {
        console.log("key", key);
        // const result = list;
        // result.car = 8
        // result[key] = list[key] + 1;
        console.log("list", list)
        const upDate = Object.assign(list, { [key]: list[key] + 1 })
        console.log("up", upDate)
        setList(Object.assign({}, upDate))
    }

    const handleRemove = (key) => {
        console.log("key", key);
        console.log("list", list)
        const upDate = Object.assign(list, { [key]: list[key] - 1 })
        console.log("up", upDate)
        setList(Object.assign({}, upDate))
    }

    const handleReset = (key) => {
        console.log("key", key);
        console.log("list", list)
        const upDate = Object.assign(list, { [key]: list[key] = 0 })
        console.log("up", upDate)
        setList(Object.assign({}, upDate))
    };

    return (
        <div>
            {
                Object.keys(list).map((key, index) => {
                    return (
                        <div className="box-wrapper">
                            <div>
                                {key}
                            </div>
                            <div className='count-key'>
                                {list[key]}
                            </div>
                            <button onClick={() => handleDelete(key)}>Delete</button>
                            <button onClick={() => handleAdd(key)}>Add</button>
                            <button onClick={() => handleRemove(key)}>Remove</button>
                            <button onClick={() => handleReset(key)}>Reset count</button>
                        </div>
                    );
                })
            }
            <div class="box">
                <button onClick={() => handleTotal(list)}>Total:{count} </button>
                <button onClick={handleResetAll}>ResetAll</button>
            </div>

            <div className="box">
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={changeName} />
                    <label>Value</label>
                    <input type="text" value={value} onChange={changeValue} />
                    <button onClick={transferValue}> Add</button>
                </div>
            </div>
        </div>
    );
};

export default Task3;








// import React, { useState } from 'react'
// import './App.css'
// import Modal from "./Modal";
// import Table from "./Table";

// const App = (props) => {

//   const [list, setList] = useState([
//     { name: 'Salad', age: '23' },
//     { name: 'Bacon', age: '23' },
//     { name: 'Cheese', age: '24' },
//     { name: 'Meat', age: '23' },
//   ])

//   const [isOpen, setIsOpen] = useState(false);
//   const onClick = () => setIsOpen(true);
//   // const handalAdd = () => {

//   // }
//   return (

//     <div>
//       <header className="header">
//         <h2 align="center">Add A Students</h2>
//         <button onClick={() => setIsOpen(!isOpen)}>
//           Add
//         </button>
//       </header>

//       <Table />
//       <div className='Modal'>
//         {isOpen ? (
//           <Modal isOpen={isOpen} onClick={setIsOpen} />
//         ) : ""}
//       </div>

//     </div>
//   )
// }

// export default App
