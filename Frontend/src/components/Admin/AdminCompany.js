import React, { useState } from "react";
import AdminNavBar from './AdminNavBar';
import './AdminCompany.css';

function Admin() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    // add the todo to the list
    setList([...list, newTodo]);

    // clear input box
    setInput("");
  };

  const deleteTodo = (id) => {
    // Filter out todo with the id
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <div>
        <div id='container'>
        <AdminNavBar />
        <div className='path-admincomp'>
            Navaneeth Arunkumar / Admin /<b> Add Companies </b>
        </div>
        <div className='header-adminc'>
            <b>Add Companies</b>
        </div>
        <div className="tasks-adminc">
          <input 
          id="input-box"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} />
          <button id="add-buttonac" onClick={() => addTodo(input)}>+</button>
          <ul id="list-admin">
            {list.map((todo) => (
              <li id="task-admin" key={todo.id}>
                {todo.todo}
                <button id="close-buttona" onClick={() => deleteTodo(todo.id)}>&times;</button>
              </li>
            ))}
          </ul>
        </div>
        </div>
    </div>
  )
}

export default Admin