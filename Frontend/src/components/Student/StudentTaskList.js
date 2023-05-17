import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle } from 'react-icons/fa';
import { FaExclamationTriangle } from 'react-icons/fa';
import { FaTimesCircle } from 'react-icons/fa';
import SideNavBar from './SideNavBar';
import './StudentTaskList.css';
import Footer from '../Student/Footer';
import Delete from '../Welcome/imagesw/delete.png';
import { useAuth0 } from "@auth0/auth0-react";

function Student() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const { user, isAuthenticated } = useAuth0();

  const addData = async () => {
    const newData = {
      description: input
    };

    // send POST request to the new API endpoint
    const response = await fetch(`${process.env.REACT_APP_BACKENDURL}/data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });

    if (!response.ok) {
      console.error('Failed to add task to the new API');
      toast.error("Failed to add task", {
        icon: <FaTimesCircle color="#3f9eca" />,
        style: {
          background: "#061b28",
          color: "#3f9eca",
        },
        progressStyle: {
          background: "#3f9eca"
        },
        theme: "dark"
      })
      return;
    }

    const data = await response.json();
    setList([...list, data]);
    toast.success("Task added successfully!", {
      icon: <FaCheckCircle color="#3f9eca" />,
      style: {
        background: "#061b28",
        color: "#3f9eca",
      },
      progressStyle: {
        background: "#3f9eca"
      },
      theme: "dark"
    })

    setInput("");
  };

  const deleteData = async (id) => {
    // send DELETE request to the new API endpoint
    const response = await fetch(`${process.env.REACT_APP_BACKENDURL}/data/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.error('Failed to delete task from the new API');
      return;
    }

    const newList = list.filter((data) => data._id !== id);

    setList(newList);
    toast.warn("Task deleted!", {
      icon: <FaExclamationTriangle color="#3f9eca" />,
      style: {
        background: "#061b28",
        color: "#3f9eca",
      },
      progressStyle: {
        background: "#3f9eca"
      },
      theme: "dark"
    })
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKENDURL}/data`);
      if (!response.ok) {
        console.error('Failed to fetch data from the new API');
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
        <SideNavBar />
        <ToastContainer />
        <div className='path-admin'>
          {isAuthenticated && user.name} / Student /<b> To-Do List </b>
        </div>
        <div className='header-admin'>
          <b>Add Self-Tasks</b>
        </div>
        <div className="tasks-students">
          <input
            id="input-box"
            type="text"
            placeholder="Insert Task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button id="add-button" onClick={addData}>
            Add Task
          </button>

          <ul id="list-admin">
            {list.map((data) => (
              <li id="task-admin" key={data._id}>
                <div className="meh">
                  {data.description}
                  <img
                    onClick={() => deleteData(data._id)}
                    className="trash-icon"
                    src={Delete}
                    alt="trash"
                  />
                </div>
              </li>
            ))}
          </ul>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Student;