import React from 'react';
import './AboutA.css';
import AdminNavBar from './AdminNavBar';
import Footer from '../Student/Footer';
import { useAuth0 } from '@auth0/auth0-react';

function AboutA() {
  const {user,isAuthenticated} = useAuth0();

  return (
    <div className='admin-portal'>
        <div className="container">
        <AdminNavBar />
        <div className="test11">
        <div className="path-aboutA">
				{isAuthenticated && user.name} / Admin /<b> About </b>
			</div>
			<div className="header-aboutA">
				<b>About</b>
			</div>
      <div className="display-box">
        <p>Welcome to our professional profile building website! Our platform is designed specifically for students who are preparing for job placements and seeking to create a professional profile that highlights their skills and achievements.
          Our goal is to help students create a professional image that accurately reflects their skills and accomplishments, and to give them the confidence to succeed in their job search.
          So if you're a student preparing for job placements, sign up today and start building your professional profile with our user-friendly platform.
          <strong> SkillScape, building profiles & shaping futures.</strong></p>
      </div>
      <Footer />
        </div>
        </div>
    </div>
  )
}

export default AboutA