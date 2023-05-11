require('dotenv').config()
const router = require("./routes/taskPost")
const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors());
app.use(router);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("connected to db & listening on port", process.env.PORT, "!!")
    })
})
.catch((error) => {
    console.log(error)
})