import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import Modal from '@mui/material/Modal';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import { useAuth0 } from '@auth0/auth0-react';
import Footer from '../Student/Footer';
import DatePicker from 'react-datepicker';
import AdminNavBar from '../Admin/AdminNavBar';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css';

const locales = {
  'en-US': require('date-fns/locale/en-US')
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

const DnDCalendar = withDragAndDrop(Calendar);

function StudentCalendar() {
  const { user, isAuthenticated } = useAuth0();
  const [allEvents, setAllEvents] = useState([
    {
      id: 1,
      title: 'Meeting with HOD',
      allDay: true,
      start: new Date(2023, 4, 19),
      end: new Date(2023, 4, 19)
    },
    {
      id: 2,
      title: 'Make LinkedIn Profile',
      start: new Date(2023, 4, 2),
      end: new Date(2023, 4, 2)
    },
    {
      id: 3,
      title: 'Placement Drive',
      start: new Date(2023, 4, 11),
      end: new Date(2023, 4, 14)
    }
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleAddEvent() {
    if (newEvent.title && newEvent.start && newEvent.end) {
      const event = {
        id: allEvents.length + 1,
        title: newEvent.title,
        start: newEvent.start,
        end: newEvent.end
      };
      setAllEvents([...allEvents, event]);
      setNewEvent({ title: '', start: '', end: '' });
    }
  }

  function moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) {
    const { allDay } = event;
    if (!allDay && droppedOnAllDaySlot) {
      event.allDay = true;
    }

    setAllEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((ev) => {
        if (ev.id === event.id) {
          return { ...ev, start, end, allDay };
        }
        return ev;
      });
      return updatedEvents;
    });
  }

  function resizeEvent({ event, start, end }) {
    setAllEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((ev) => {
        if (ev.id === event.id) {
          return { ...ev, start, end };
        }
        return ev;
      });
      return updatedEvents;
    });
  }

  function handleUpdateEvent() {
    setAllEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((ev) =>
        ev.id === selectedEvent.id ? selectedEvent : ev
      );
      return updatedEvents;
    });

    handleCloseModal();
  }

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setSelectedEvent(null);
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
            <input
              id='input-box'
              type="text"
              placeholder='Add title'
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            />
            <DatePicker
              id='input-box'
              autoComplete='off'
              placeholderText='Start Date'
              selected={newEvent.start}
              onChange={(start) => setNewEvent({ ...newEvent, start })}
            />
            <DatePicker
              id='input-box'
              autoComplete='off'
              placeholderText='End Date'
              selected={newEvent.end}
              onChange={(end) => setNewEvent({ ...newEvent, end })}
            />
            <button className='addref' onClick={handleAddEvent}>
              Add Task
            </button>
          </div>
          <div>
            <DnDCalendar
              localizer={localizer}
              selectable={true}
              events={allEvents}
              startAccessor="start"
              endAccessor="end"
              onEventDrop={moveEvent}
              resizable={true}
              onEventResize={resizeEvent}
              onSelectEvent={(event) => {
                setSelectedEvent(event);
                handleOpenModal();
              }}
              style={{ height: 400, width: 900, marginTop: "40px", marginLeft: "-505px" }}
            />
          </div>
          <Footer />
        </div>
      </div>
      <Modal open={isModalOpen} onClose={handleCloseModal} className="modal-container">
        <div className="modal-content">
          {selectedEvent && (
            <>
              <h3 style={{marginTop:"2px"}}>Edit Event</h3>
              <input
                type="text"
                id='input-box'
                placeholder="Event title"
                value={selectedEvent.title}
                onChange={(e) =>
                  setSelectedEvent({ ...selectedEvent, title: e.target.value })
                }
              />
              <button className='addref' onClick={handleUpdateEvent}>Save</button>
              <button className='addref' onClick={handleCloseModal}>Cancel</button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default StudentCalendar;