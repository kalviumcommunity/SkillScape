const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskList = new Schema ({
    userId: {
        type: String,
        index:true
        // required: true
    },
    description: {
        type: String,
        required: true
    }
})

// const linkList = new Schema ({
//     userId: {
//         type: String,
//         // required: true
//     },
//     description: {
//         type: String,
//         required: true
//     }
// })



module.exports = mongoose.model('Tasks', taskList)
// module.exports = {
//     Tasks: mongoose.model('Tasks', taskList),
//     Links: mongoose.model('Links', linkList)
//   };
  
