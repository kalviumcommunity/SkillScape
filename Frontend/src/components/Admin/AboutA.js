import React from 'react';
import './AboutA.css';
import AdminNavBar from './AdminNavBar';
import Footer from '../Student/Footer';

function AboutA() {
  return (
    <div>
        <div className="container">
        <AdminNavBar />
        <div className="path-aboutA">
				Navaneeth Arunkumar / Admin /<b> About </b>
			</div>
			<div className="header-aboutA">
				<b>About</b>
			</div>
      <div className="card">
        <p>Welcome to our professional profile building website! Our platform is designed specifically for students who are preparing for job placements and seeking to create a professional profile that highlights their skills and achievements.
          Our goal is to help students create a professional image that accurately reflects their skills and accomplishments, and to give them the confidence to succeed in their job search.
          So if you're a student preparing for job placements, sign up today and start building your professional profile with our user-friendly platform.
          <strong> SkillScape, building profiles & shaping futures.</strong></p>
      </div>
      <div className="bglogo">
        <img src="https://res.cloudinary.com/dvfeh6kup/image/upload/v1666245172/dp_1_sbv3p6.webp" alt="kalvium" />
      </div>
      <Footer />
        </div>
    </div>
  )
}

export default AboutA