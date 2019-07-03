const db = require('../db')

const db_message = db.model('message', {
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    body: {
        type: String,
        required: [true, 'You cannot send an empty message.']
    },
})

module.exports = db_message