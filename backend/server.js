require('dotenv').config()

const express = require('express')
const app = express()

const connectDB = require('./config/db')
connectDB();

const router = require('./routes')
app.use('/', router)

const PORT = process.env.PORT || 5001
app.listen(PORT, () => { console.log(`Server listen on PORT ${PORT}`) })