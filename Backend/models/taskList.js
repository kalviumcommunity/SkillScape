const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskList = new Schema ({
    userId: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Tasks', taskList)
