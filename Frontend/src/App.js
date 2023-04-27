import React from 'react';
import { Routes, Route } from "react-router-dom";
import './index.css';
import Student from './components/Student/Student';
import Admin from './components/Admin/Admin';
import StudentReview from './components/Student/StudentReview';
import StudentCompany from './components/Student/StudentCompany';
import AdminLink from './components/Admin/AdminLink';
import AdminCompany from './components/Admin/AdminCompany';
import Welcome from './components/Welcome/Welcome';
import About from './components/Student/About';
import AboutA from './components/Admin/AboutA';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/adminhome' element={<Admin />} />
      <Route path='/studenthome' element={<Student />} />
      <Route path='/studentreview' element={<StudentReview />} />
      <Route path='/studentcompany' element={<StudentCompany />} />
      <Route path='/adminlink' element={<AdminLink />} />
      <Route path='/admincompany' element={<AdminCompany />} />
      <Route path='/about' element={<About />} />
      <Route path='/aboutadmin' element={<AboutA />} />
    </Routes>
  )
}

export default App
