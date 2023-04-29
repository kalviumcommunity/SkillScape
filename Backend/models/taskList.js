const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskList = new Schema ({
    userId: {
        type: String,
        index:true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Tasks', taskList)
  
