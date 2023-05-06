import React, { useState, useEffect } from "react";
import AdminNavBar from './AdminNavBar';
import './AdminLink.css';
import Footer from '../Student/Footer';
import { useAuth0 } from "@auth0/auth0-react";

//{* Not yet implemented *}

function Admin() {
  const [links, setLinks] = useState([]);
  const [input, setInput] = useState("");
  const {user,isAuthenticated} = useAuth0();


  const addLink = async (description) => {
    const newLink = {
      description,
    };

    // send POST request to server
    const response = await fetch('/links', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newLink),
    });

    if (!response.ok) {
      console.error('Failed to add link to database');
      return;
    }

    // add the new link to the list
    const link = await response.json();
    setLinks([...links, link]);

    // clear input box
    setInput("");
  };

  const deleteLink = async (id) => {
    // send DELETE request to server
    const response = await fetch(`/links/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.error('Failed to delete link from database');
      return;
    }

    // Filter out link with the id
    const newLinks = links.filter((link) => link._id !== id);

    setLinks(newLinks);
  };

  // send get request to server to retrieve links when component mounts
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/links');
      if (!response.ok) {
        console.error('Failed to fetch links from database');
        return;
      }
      const data = await response.json();
      setLinks(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div id='container'>
        <AdminNavBar />
        <div className='path-adminlink'>
          {isAuthenticated && user.name} / Admin /<b> Update Links </b>
        </div>
        <div className='header-adminl'>
          <b>Update Links</b>
        </div>
        <div className="tasks-adminl">
          <input 
            id="input-box"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)} />
          <button id="add-buttonal" onClick={() => addLink(input)}>+</button>

          <ul id="list-admin">
            {links.map((link) => (
              <li id="task-admin" key={link._id}>
                {link.description}
                <button id="close-buttona" onClick={() => deleteLink(link._id)}>&times;</button>
              </li>
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Admin;
