require('dotenv').config()
const referenceRoutes = require("./routes/referenceRoutes");
const taskRoutes = require("./routes/taskPost");
const studentsTask = require("./routes/studentTask");
const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors());
app.use(taskRoutes);
app.use(referenceRoutes);
app.use(studentsTask);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("connected to db & listening on port", process.env.PORT, "!!")
    })
})
.catch((error) => {
    console.log(error)
})