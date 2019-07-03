// Config, importing the modules
const express = require('express')
const app = express()
require('dotenv').config()

app.get('/api/messages', require('./controllers/get_messages'))

app.listen(process.env.PORT, (err) => {
    if (err) {
    console.log('ERROR', err)
    } else {
    console.log(`Connected to localhost ${process.env.PORT}`)
    }
})