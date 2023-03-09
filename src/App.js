import React from 'react';
import { Routes, Route } from "react-router-dom";
import './index.css';
import Student from './components/Student';
import Admin from './components/Admin';
import StudentReview from './components/StudentReview';
import StudentCompany from './components/StudentCompany';
import AdminLink from './components/AdminLink';
import AdminCompany from './components/AdminCompany';

function App() {
  return (
    <Routes>
      <Route path='/adminhome' element={<Admin />} />
      <Route path='/studenthome' element={<Student />} />
      <Route path='/studentreview' element={<StudentReview />} />
      <Route path='/studentcompany' element={<StudentCompany />} />
      <Route path='/adminlink' element={<AdminLink />} />
      <Route path='/admincompany' element={<AdminCompany />} />
    </Routes>
  )
}

export default App
