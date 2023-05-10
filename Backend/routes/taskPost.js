const express = require('express');
const router = express.Router();
const { listTasks, createTasks, deleteTasks } = require('../controllers/taskController')
const Task = require('../models/taskList');


// GET request to retrieve all tasks
router.get('/tasks', listTasks)

// POST request to add a task for a user
router.post('/tasks', createTasks)

// DELETE request to delete a task by ID
router.delete('/tasks/:id', deleteTasks)


module.exports = router;