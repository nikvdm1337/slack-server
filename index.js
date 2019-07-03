// Config, importing the modules
const express = require('express')
const app = express()
require('dotenv').config()

require('./db')

app.get('/api/messages', require('./controllers/get_messages'))
app.post('/api/messages', require('./controllers/post_messages'))
app.post('/api/channels', require('./controllers/post_channels'))
app.get('/api/channels', require('./controllers/get_channels'))

app.listen(process.env.PORT, (err) => {
    if (err) {
    console.log('ERROR', err)
    } else {
    console.log(`Connected to localghost ${process.env.PORT}`)
    }
})