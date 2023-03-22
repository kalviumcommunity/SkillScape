import React from 'react';
import { Routes, Route } from "react-router-dom";
import './index.css';
import Student from './components/Student/Student';
import Admin from './components/Admin/Admin';
import StudentReview from './components/Student/StudentReview';
import StudentCompany from './components/Student/StudentCompany';
import AdminLink from './components/Admin/AdminLink';
import AdminCompany from './components/Admin/AdminCompany';
import Login from './components/LoginForms/Login';
import Signup from './components/LoginForms/Signup';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/adminhome' element={<Admin />} />
      <Route path='/studenthome' element={<Student />} />
      <Route path='/studentreview' element={<StudentReview />} />
      <Route path='/studentcompany' element={<StudentCompany />} />
      <Route path='/adminlink' element={<AdminLink />} />
      <Route path='/admincompany' element={<AdminCompany />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default App
