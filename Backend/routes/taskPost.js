const express = require('express');
const router = express.Router();
const Task = require('../models/taskList');


// GET request to retrieve all tasks
router.get('/tasks', async (req, res) => {
    try {
      const tasks = await Task.find();
      return res.status(200).json(tasks);
    } catch (err) {
      console.error(err);
      return res.status(500).send('Server Error');
    }
  });

// POST request to add a task for a user
router.post('/tasks', async (req, res) => {
  const { description } = req.body;

  try {
    let task;
    if (task) {
      
      task.description = description;
      await task.save();
      return res.status(200).json(task);
    } else {
      // add task description
      task = new Task({ description });
      await task.save();
      return res.status(201).json(task);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server Error');
  }
});

// DELETE request to delete a task by ID
router.delete('/tasks/:id', async (req, res) => {
  const taskId = req.params.id;

  try {
    const task = await Task.findByIdAndDelete(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    return res.status(200).json({ message: 'Task deleted successfully' });
  }
   catch (error) {
    console.error(error);

    return res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;


