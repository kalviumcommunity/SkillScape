const Data = require('../models/studentTask');

//Get Request
const listData = async (req, res) => {
    try {
      const datas = await Data.find();
      return res.status(200).json(datas);
    } catch (err) {
      console.error(err);
      return res.status(500).send('Server Error');
    }
  };

//Post Request
const createData = async (req, res) => {
    const { description } = req.body;
  
    try {
      let data;
      if (data) {
        
        data.description = description;
        console.log(data)
        await data.save();
        return res.status(200).json(data);
      } else {
        // add task description
        data = new Data({ description });
        await data.save();
        return res.status(201).json(data);
      }
    } catch (err) {
      console.error(err);
      return res.status(500).send('Server Error');
    }
  };


//Delete request
const deleteData = async (req, res) => {
    const dataId = req.params.id;
  
    try {
      const data = await Data.findByIdAndDelete(dataId);
  
      if (!data) {
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
    listData, 
    createData, 
    deleteData 
}