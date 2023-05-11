const Task = require('../models/taskList');

//Get Request
const listTasks = async (req, res) => {
    try {
      const tasks = await Task.find();
      return res.status(200).json(tasks);
    } catch (err) {
      console.error(err);
      return res.status(500).send('Server Error');
    }
  };

//Post Request
const createTasks = async (req, res) => {
    const { description, isTodo } = req.body;
  
    try {
      let task;
      if (task) {
        
        task.description = description;
        task.isTodo = isTodo;
        console.log(task)
        await task.save();
        return res.status(200).json(task);
      } else {
        // add task description
        task = new Task({ description, isTodo });
        await task.save();
        return res.status(201).json(task);
      }
    } catch (err) {
      console.error(err);
      return res.status(500).send('Server Error');
    }
  };


//Delete request
const deleteTasks = async (req, res) => {
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
  };

module.exports = { 
    listTasks, 
    createTasks, 
    deleteTasks 
}