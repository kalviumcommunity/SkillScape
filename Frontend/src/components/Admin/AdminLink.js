import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle } from 'react-icons/fa';
import { FaExclamationTriangle } from 'react-icons/fa';
import { FaTimesCircle } from 'react-icons/fa';
import AdminNavBar from './AdminNavBar';
import './AdminLink.css';
import Delete from '../Welcome/imagesw/delete.png';
import { useAuth0 } from "@auth0/auth0-react";

function ReferenceList() {
  const [references, setReferences] = useState([]);
  const [newReference, setNewReference] = useState("");
  const [newLink, setNewLink] = useState("");
  const {user,isAuthenticated} = useAuth0()

  // Fetch references from the API when the component mounts
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKENDURL}/references`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch references from the server.");
        }
        return response.json();
      })
      .then((data) => {
        setReferences(data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to get links from database", {
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
      });
  }, []);

  const addReference = () => {
    fetch(`${process.env.REACT_APP_BACKENDURL}/references`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newReference, link: newLink }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add reference to the server.");
        }
        return response.json();
      })
      .then((data) => {
        setReferences([...references, data]);
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
        setNewReference("");
        setNewLink("");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to add reference link to database", {
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
      });
  };


  // Delete a reference from the API and update the state
  const deleteReference = (id) => {
    fetch(`${process.env.REACT_APP_BACKENDURL}/references/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete reference from the server.");
        }
        setReferences(references.filter((reference) => reference._id !== id));
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
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to delete link from database", {
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
      });
  };

  return (
    <div>
      <div id="container">
        <AdminNavBar />
        <ToastContainer />
        <div className="test8">
        <div className='path-admin'>
            {isAuthenticated && user.name} / Admin /<b> Reference List </b>
        </div>
        <div className='header-adminl'>
            <b>Reference List</b>
        </div>
        <div className="flex-ref">
      <form
      style={{display:"flex", gap:"1.5rem"}}
        onSubmit={(event) => {
          event.preventDefault();
          addReference();
        }}
      >
        <label htmlFor="newReference"></label>
        <input
          type="text"
          placeholder="New Reference"
          id="input-box"
          value={newReference}
          onChange={(event) => setNewReference(event.target.value)}
        />
        <label htmlFor="newLink"></label>
        <input
          type="text"
          placeholder="Reference Link"
          id="input-box"
          value={newLink}
          onChange={(event) => setNewLink(event.target.value)}
        />
        <button className="addref" type="submit">Add Link</button>
      </form>
      <ul className="reflist">
        {references.map((reference) => (
          <div className="ref" key={reference._id}>
            <div className="ref-body">
              <p className="ref-text">
                <a style={{textDecoration:"none", color:"#3E9ECA"}} href={reference.link} target="_blank" rel="noreferrer">
                  {reference.title}
                </a>
              </p>
              <img onClick={() => deleteReference(reference._id)} className="trash-icon-ref" src={Delete} alt="" />
            </div>
          </div>
        ))}
      </ul>
      </div>
      </div>
      </div>
    </div>
  );
}

export default ReferenceList;