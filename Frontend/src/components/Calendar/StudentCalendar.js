import React, { useState } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import format from "date-fns/format";
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import { useAuth0 } from "@auth0/auth0-react";
import Footer from '../Student/Footer';
import DatePicker from "react-datepicker";
import AdminNavBar from '../Admin/AdminNavBar';
import "react-datepicker/dist/react-datepicker.css"
import "./Calendar.css"

const locales = {
  "en-US": require("date-fns/locale/en-US")
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})
const events = [
  {
    title: "Meeting with HOD",
    allDay: true,
    start: new Date(2023,4,19),
    end: new Date(2023,4,19)
  },
  {
    title: "Make LinkedIn Profile",
    start: new Date(2023,4,2),
    end: new Date(2023,4,2)
  },
  {
    title: "Placement Drive",
    start: new Date(2023,4,11),
    end: new Date(2023,4,14)
  },
]

function StudentCalendar() {
  const [newEvent, setNewEvent] = useState({title:"", start:"",end:""});
  const {user,isAuthenticated} = useAuth0();
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent])
  }

  return (
    <div>
        <div id="container">
            <AdminNavBar />
            <div className='path-admin'>
            {isAuthenticated && user.name} / Admin /<b> Calendar </b>
            </div>
            <div className="body-box">
            <div className='header-admincal'>
                <b>Calendar</b>
            </div>
            <h3 className='text-calendar'>Add New Event</h3>
            <div className='input-body'>
              <input id='input-box' type="text" placeholder='Add title'
              value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
              />
              <DatePicker id='input-box' autoComplete='off' placeholderText='Start Date' selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})} />
              <DatePicker id='input-box' autoComplete='off' placeholderText='End Date' selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})} />
              <button className='addref' onClick={handleAddEvent}>
                Add Task
              </button>
            </div>
            <div>
              <Calendar 
              localizer={localizer} 
              events={allEvents} 
              startAccessor="start" 
              endAccessor="end" 
              style={{height:400, width:900, marginTop:"40px", marginLeft:"-505px"}} />
            </div>
            <Footer />
        </div>
        </div>
    </div>
  )
}

export default StudentCalendar