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
      <div className="bglogo">
        <img src="https://res.cloudinary.com/dvfeh6kup/image/upload/v1666245172/dp_1_sbv3p6.webp" alt="kalvium" />
      </div>
      <div className="card">
        <p>A glass-like card to demonstrate the <strong>Glassmorphic UI Design</strong> trend.</p>
      </div>
        </div>
    </div>
  )
}

export default About