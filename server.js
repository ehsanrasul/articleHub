const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const articleRouter = require('./Routes/articleRoutes')


app.use(express.json())

mongoose.connect(process.env.MONGO_URI,
{useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to MongoDB")).catch(err => console.log(err));

//Routes
app.use("/api/Articles", articleRouter)
app.listen(3000, () => console.log("Server Listening at Port : "+process.env.PORT))

