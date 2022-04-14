const express = require("express");
const app = express();
const hbs = require("express-handlebars")
require("dotenv").config();
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 6868;

let students = ["test","master"];

app.get("/students", (req, res) => {
    res.send(students)
})

app.post("/students", (req, res) => {
    let result = req.body.name
    students.push(result)
//    res.send({ status: 'SUCCESS' });
})

app.listen(PORT, (req, res) => {
    console.log("vous etes sur le PORT " + PORT)
})