const express = require("express")

const app = express()

app.listen(2468)

app.get("/",(req, res) => {
    res.status(200).json({mssg:"Hello World"})
})