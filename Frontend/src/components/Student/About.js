import React from 'react';
import './About.css';
import SideNavBar from "./SideNavBar";

function About() {
  return (
    <div>
        <div className="container">
        <SideNavBar />
        <div className="path-aboutS">
				Navaneeth Arunkumar / Checklist /<b> About </b>
			</div>
			<div className="header-aboutS">
				<b>About</b>
			</div>
        </div>
    </div>
  )
}

export default About