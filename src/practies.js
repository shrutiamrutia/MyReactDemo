// class components
import React, { Component } from "react";
class Item extends Component {
    render() {
        return (
            <div >
                <div>
                    <div class="block">List 1</div>
                    <div class="block">List 1</div>
                    <div class="block">List 1</div>
                    <div class="block">List 1</div>
                </div>
            </div>
        );
    }
}
export default Item;

//function component
// import React from "react";

const FunComponent = (props) => {
    return (
        <div>
            <div className="block">1</div>
            <div className="block">2</div>
            <div className="block">3</div>
            <div className="block">4</div>
            <div className="block">5</div>
        </div>
    );
};
// export default FunComponent;


//Now let’s create one array based on that render block elements.function base
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

//Now let’s create one array based on that render block elements class base
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


//Now let’s create one array based on that render block elements  in increment and decrement array 
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

//Add and sub count
import React, { Component } from "react";
import Person from "./components/Persons/Person/Person";
class App extends Component {
    state = {
        count: 0,
    };

    addHandler = () => {
        const count = this.state.count;
        this.setState({ count: count + 1 });
    };
    subHandler = () => {
        const count = this.state.count;
        this.setState({ count: count - 1 });
    };

    <button onClick={this.addHandler}>ADD </button>
    <button onClick={this.subHandler}>SUB </button>
    <div>Count : {this.state.count}</div>
};

export default App;

// hoc higher order Component
//Aux Auxiliary


// const data = [{
//     Date: '2017-09-29 01:22',
//     OrderID: 200398,
//     Name: "iPhone X 64Gb Grey",
//     Price: "$999.00",
//     Quantity: 1,
//     Total: "$999.00"
// }]






// Create table as above link in our react app and Add,Delete,Remove Method use 


import "./Task3.css";

import React, { useState } from 'react'

const Task3 = (props) => {
    const [list, setList] = useState(
        [1, 2, 3, 4, 5]
    );
    console.log("data", list);

    const handleAddElementFromList = () => {
        const updatedResult = list;
        updatedResult.push(list[list.length - 1] + 1)
        setList([...updatedResult])
    }
    const handleDeleteElementFromList = () => {
        console.log("check")
        const updatedResult = list;
        updatedResult.pop()
        setList([...updatedResult])
    }


    function handleRemove(index) {
        const newList = list.filter((raw, i) => i !== index);
        setList(newList);
    }

    return (

        <div class="container-table100">
            <div id="main">
                <table class="card">
                    <thead>
                        <tr id="list">
                            <th>id</th>
                            <th>Date</th>
                            <th>Order ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {list.map((raw, index) => {
                            console.log("i", index);
                            console.log("raw", raw);
                            return (
                                <tr class="odd">
                                    <td>{index}</td>
                                    <td>2017-09-29 01:22</td>
                                    <td>200398</td>
                                    <td>iPhone</td>
                                    <td>$999.00	</td>
                                    <td>1</td>
                                    <td>$999.00</td>
                                    <button type="button" onClick={() => handleRemove(index)}>
                                        Delete
                                    </button> </tr>
                            )
                        })}
                    </tbody>
                </table>

                <div class="button">
                    <button onClick={() => handleAddElementFromList()}>Add</button>
                    <button onClick={() => handleDeleteElementFromList()}>Sub</button>
                </div>

            </div>
        </div>
    )
}

export default Task3



//daynamic table
import "./Task3.css";

import React from 'react'

const Task3 = () => {
    const list = [
        { id: 1, Date: '2017-09-29 01:22', OrderID: 200398, Name: '	iPhone X 64Gb Grey', Price: "$999.00", Quantity: 1, Total: "$999.00" },
        { id: 2, Date: '2017-09-29 01:22', OrderID: 200398, Name: '	iPhone X 64Gb Grey', Price: "$999.00", Quantity: 1, Total: "$999.00" },
        { id: 3, Date: '2017-09-29 01:22', OrderID: 200398, Name: '	iPhone X 64Gb Grey', Price: "$999.00", Quantity: 1, Total: "$999.00" },
        { id: 4, Date: '2017-09-29 01:22', OrderID: 200398, Name: '	iPhone X 64Gb Grey', Price: "$999.00", Quantity: 1, Total: "$999.00" }
    ];
    return (

        <div class="container-table100">
            <div id="main">
                <table class="card">
                    <thead>
                        <tr >
                            <th>id</th>
                            <th>Date</th>
                            <th>OrderID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {list.map(({ id, Date, OrderID, Name, Price, Quantity, Total }) => (
                            <tr >
                                <td >{id}</td>
                                <td >{Date}</td>
                                <td >{OrderID}</td>
                                <td >{Name}</td>
                                <td >{Price}</td>
                                <td >{Quantity}</td>
                                <td >{Total}</td>
                                {/* <button type="button" onClick={() => handleRemove(index)}>
                                    Delete
                                </button> */}
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* <div class="button">
                <button onClick={() => handleAddElementFromList()}>Add</button>
                <button onClick={() => handleDeleteElementFromList()}>Sub</button>
            </div> */}

            </div>
        </div >
    );
};

export default Task3;



//crete list data = value
import "./Task3.css";
import React, { useState } from 'react'

const Task3 = () => {
    // const person = {
    //     school: 3,
    //     mobile: 3,
    //     fruits: 8,
    //     office: 2
    // };

    const [list, setList] = useState({
        school: 3,
        mobile: 3,
        fruits: 8,
        office: 2
    });


    const handleRemove = (key) => {
        console.log("key", key);
        const result = list;
        // result.school = 8
        // result[key] = list[key] + 1
        list.school = list.school + 1
        delete result[key];
        console.log("key", result);
        const upDate = Object.assign({}, result)
        setList(upDate)
    };

    return (
        <div>
            {
                Object.keys(list).map((key, index) => {
                    return (
                        <div className="box-wrapper">
                            <div  >
                                {key}
                            </div>
                            <div className='count-key'>
                                {list[key]}
                            </div>
                            <button onClick={() => handleRemove(key)}>Delete</button>
                        </div>
                    );
                })
            }
        </div>

    );
};

export default Task3;



//direct object assign to add item

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

//list in Add,delete,remove

import "./Task3.css";
import React, { useState } from 'react'

const Task3 = () => {
    const [list, setList] = useState({
        school: 3,
        mobile: 3,
        fruits: 8,
        office: 2
    });

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
        const upDate = Object.assign({}, { school: 5 }, { mobile: 10 }, { fruits: 12 }, { office: 8 })
        setList(upDate)
    }

    const handleRemove = (key) => {
        console.log("key", key);
        const result = list;
        result.car = 8
        result[key] = list[key] - 1;
        const upDate = Object.assign({}, result)
        setList(upDate)
    }

    return (
        <div>

            {
                Object.keys(list).map((key, index) => {
                    return (
                        <div className="box-wrapper">
                            <div  >
                                {key}
                            </div>
                            <div className='count-key'>
                                {list[key]}
                            </div>
                            <button onClick={() => handleDelete(key)}>Delete</button>
                            <button onClick={() => handleAdd(key)}>Add</button>
                            <button onClick={() => handleRemove(key)}>Remove</button>
                            {/* <button onClick={() => handleRemoveUpdate(key)}>Remove</button> */}
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Task3;



//list total
const [count, setCount] = useState(0);

const handleTotal = (list) => {
    const output = Object.values(list).reduce((accumulator, keys) => {
        console.log("acc", accumulator)
        console.log("val", keys)
        return accumulator + keys
    }, 0)
    setCount(output)
}
<button class="box-wrapper" onClick={() => handleTotal(list)}>Total:{count} </button>




//reset
const [count, setCount] = useState(0);
const reset = (key) => {
    console.log("key", key);
    console.log("list", list)
    const upDate = Object.assign(list, { [key]: list[key] = 0 })
    console.log("up", upDate)
    setList(Object.assign({}, upDate))
};
<button onClick={() => reset(key)}>Reset count</button>




// how to pass data into table from a form using react components in react js
const [name, setName] = useState('');
const [value, setValue] = useState('');

const changeName = (event) => {
    setName(event.target.value);
};
const changeValue = (event) => {
    setValue(event.target.value);
};
const transferValue = (event) => {

    const upDate = Object.assign(list, { [name]: value })
    console.log("up", upDate)
    setList(Object.assign({}, upDate))
};
<div className="box">
    <div>
        <label>Name</label>
        <input type="text" value={name} onChange={changeName} />
        <label>Value</label>
        <input type="text" value={value} onChange={changeValue} />
        <button onClick={transferValue}> Add</button>
    </div>
</div>