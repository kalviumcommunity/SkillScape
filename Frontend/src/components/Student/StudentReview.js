import SideNavBar from "./SideNavBar";
import "./StudentReview.css";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Student() {
  const { user, isAuthenticated } = useAuth0();
  const [references, setReferences] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKENDURL}/references`)
      .then((response) => response.json())
      .then((data) => setReferences(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div id="container">
        <SideNavBar />
        <div className="path-review">
          {isAuthenticated && user.name} / Student /<b> Review Links </b>
        </div>
        <div className="header-sreview">
          <b>Reference List</b>
        </div>

        {/* <div className="refs-container">
          {references.map((reference) => (
            <div className="refs" key={reference.id}>
              <div className="refs-body">
                <a href={reference.link}>{reference.title}</a>
              </div>
            </div>
          ))}
        </div> */}
        <div className="refs-container">
          {references.map((reference) => (
            <a style={{textDecoration: "none"}} href={reference.link} key={reference.id} className="refs">
              <div className="refs-body">
                <span>{reference.title}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Student;
