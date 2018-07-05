const express = require('express')
const pgdb = require('./config/pg/')

const app = express()

require('dotenv').load()

const PORT = process.env.PORT || 4100

pgdb()

app.listen(PORT)
console.log(`Listening on Port ${PORT}`)
