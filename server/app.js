
require("dotenv").config()
const express = require('express')
const cors =require('cors')
const dbConnect = require('./config/mongo')
const { default: mongoose } = require("mongoose")
const app = express()
mongoose.set('strictQuery', false);

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("storage"));


const port = process.env.PORT || 3000


//routes calls

app.use("/api", require("./routes"))



//connection port

app.listen(port,() =>  {
    console.log('http://localhost:'+ port)
})

dbConnect();