const express = require("express")
const dotenv = require('dotenv')
const app = express();
const db = require('./db')
const authRoutes = require('./routes/authRoutes')
const cors = require('cors')
const bodyParser = require('body-parser')

dotenv.config()
app.use(bodyParser.json())
app.use(cors())





app.get('/result', function(req, res){
    res.send("hello world")
})

app.use('/api/auth', authRoutes)

app.listen(3000,  ()=>{
    console.log("server is running at 3000")
})










