import React, { useState, useEffect } from "react";
import AdminNavBar from './AdminNavBar';
import './Admin.css';

function Admin() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = async (todo) => {
    const newTodo = {
      description: todo,
    };

    // send POST request to server
    const response = await fetch('/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });

    if (!response.ok) {
      console.error('Failed to add task to database');
      return;
    }

    // add the new task to the list
    const task = await response.json();
    setList([...list, task]);

    // clear input box
    setInput("");
  };

  const deleteTodo = async (id) => {
    // send DELETE request to server
    const response = await fetch(`/tasks/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.error('Failed to delete task from database');
      return;
    }

    // Filter out todo with the id
    const newList = list.filter((todo) => todo._id !== id);

    setList(newList);
  };

  // send get request to server to retrieve task when component mounts
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/tasks');
      if (!response.ok) {
        console.error('Failed to fetch tasks from database');
        return;
      }
      const data = await response.json();
      setList(data);
    };
    fetchData();
  }, []);
  
  return (
    <div>
        <div id='container'>
        <AdminNavBar />
        <div className='path-admin'>
            Navaneeth Arunkumar / Admin /<b> Add tasks </b>
        </div>
        <div className='header-admin'>
            <b>Add Tasks</b>
        </div>
        <div className="tasks-admin">
          <input 
          id="input-box"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} />
          <button id="add-buttona" onClick={() => addTodo(input)}>+</button>

          <ul id="list-admin">
            {list.map((todo) => (
              <li id="task-admin" key={todo._id}>
                {todo.description}
                <button id="close-buttona" onClick={() => deleteTodo(todo._id)}>&times;</button>
              </li>
            ))}
          </ul>
        </div>
        </div>
    </div>
  )
}

export default Admin;