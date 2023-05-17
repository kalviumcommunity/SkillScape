const express = require('express');
const router = express.Router();
const { 
  listData, 
  createData, 
  deleteData 
} = require('../controllers/studentController');

// GET request to retrieve all tasks
router.get('/data', listData)

// POST request to add a task for a user
router.post('/data', createData)

// DELETE request to delete a task by ID
router.delete('/data/:id', deleteData)


module.exports = router;