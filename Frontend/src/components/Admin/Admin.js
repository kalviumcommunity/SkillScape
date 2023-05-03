import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminNavBar from './AdminNavBar';
import './Admin.css';
import Footer from '../Student/Footer';
import Delete from '../Welcome/imagesw/delete.png'


function Admin() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = async (todo, isTodo) => {
    const newTodo = {
      description: todo,
      isTodo: isTodo
    };

    // send POST request to server
    const response = await fetch(`${process.env.REACT_APP_BACKENDURL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });

    if (!response.ok) {
      console.error('Failed to add task to database');
      toast.error("Failed to add task to database", {
        theme: "dark"
      })
      return;
    }

    // add the new task to the list
    const task = await response.json();
    setList([...list, task]);
    toast.success("Task added successfully!", {
      theme: "dark"
    })

    // clear input box
    setInput("");
  };

  const deleteTodo = async (id) => {
    // send DELETE request to server
    const response = await fetch(`${process.env.REACT_APP_BACKENDURL}/tasks/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.error('Failed to delete task from database');
      return;
    }

    // Filter out todo with the id
    const newList = list.filter((todo) => todo._id !== id);

    setList(newList);
    toast.warn("Task deleted!", {
      theme: "dark"
    })
  };

  // send get request to server to retrieve task when component mounts
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKENDURL}/tasks`);
      if (!response.ok) {
        console.error('Failed to fetch tasks from database');
        return;
      }
      const data = await response.json();
      console.log(data);
      setList(data);
    };
    fetchData();
  }, []);
  
  return (
    <div>
        <div id='container'>
        <AdminNavBar />
        <ToastContainer />
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
          placeholder="Insert Task"
          value={input}
          onChange={(e) => setInput(e.target.value)} />
          <button id="add-buttonmeet" onClick={() => addTodo(input, false)}>Meeting</button>
          <button id="add-buttontodo" onClick={() => addTodo(input, true)}>To-Do</button>

          <ul id="list-admin">
            {list.map((todo) => (
              <li id="task-admin" key={todo._id}>
                <div className="meh">
                {todo.description}
                  <img onClick={() => deleteTodo(todo._id)} className="trash-icon" src={Delete} alt="trash" />
                </div>
              </li>
            ))}
          </ul>
        <Footer />
        </div>
        </div>
    </div>
  )
}

export default Admin;