import React from 'react';
import "./Welcome.css"
import LoginButton from '../auth0/login';
import animation from './imagesw/animation1.gif'
import logo from './imagesw/skillscape.png'
import Typewriter from "typewriter-effect";
import Footer from '../Student/Footer';

function Welcome() {
  return (
    <div className='home-container'>
      <div className='skillscape'>
        <img src={logo} alt="" />
      </div>
    <div className='homepage'>
      <div className='details'>
        <h2>
          <Typewriter 
          options={{
            autoStart: true,
            loop: true,
            delay: 60,
            strings: ["Simplifying profiles with ease", "Your personal roadmap to the perfect profile", "Make your candidature remarkable", "Where your profile meets perfection"],
          }}
        />
        </h2>
        <p>The ultimate destination for crafting a perfect profile to land your
            dream job. Our website offers expert guidance and comprehensive
            training to college freshers to help them meet the prerequisites
            required by top companies during placement drives.</p>
      <LoginButton />
      </div>
      <div className='gif'>
        <img src={animation} alt="" />
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default Welcome