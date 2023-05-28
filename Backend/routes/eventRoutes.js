const express = require('express');
const router = express.Router();
const {
    getAllEvents,
    addEvent,
    updateEvent
} = require('../controllers/eventController')

// Get all events
router.get('/events', getAllEvents);

// Add a new event
router.post('/events', addEvent);

// Update an event
router.patch('/events/:id', updateEvent);

module.exports = router;