import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Student from './components/Student/Student';
import Admin from './components/Admin/Admin';
import StudentReview from './components/Student/StudentReview';
import StudentCompany from './components/Student/StudentCompany';
import AdminLink from './components/Admin/AdminLink';
import AdminCompany from './components/Admin/AdminCompany';
import Welcome from './components/Welcome/Welcome';
import About from './components/Student/About';
import AboutA from './components/Admin/AboutA';
import SkillScapeSplash from './components/Welcome/SkillScapeSplash';
import StudentCalendar from './components/Calendar/StudentCalendar';
import StudentTaskList from './components/Student/StudentTaskList';
import DeveloperChoice from './components/Student/DevChoice';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    },4000);

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      document.getElementById('show-loader').style.display='none'   
    }, 4000);
  }, [])

  return (
    <>
    <div id='show-loader' className={`${loading ? 'show' : 'hide'}`}>
      <SkillScapeSplash/>
    </div>
    <div className={`${loading ? 'hide' : 'show'}`}>
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/adminhome' element={<Admin />} />
      <Route path='/studenthome' element={<Student />} />
      <Route path='/studentreview' element={<StudentReview />} />
      <Route path='/studentcalendar' element={<StudentCalendar />} />
      <Route path='/studentcompany' element={<StudentCompany />} />
      <Route path='/adminlink' element={<AdminLink />} />
      <Route path='/admincompany' element={<AdminCompany />} />
      <Route path='/about' element={<About />} />
      <Route path='/aboutadmin' element={<AboutA />} />
      <Route path='/studenttasklist' element={<StudentTaskList />} />
      <Route path='/devchoice' element={<DeveloperChoice />} />
    </Routes>
    </div>
    </>
  )
}

export default App
