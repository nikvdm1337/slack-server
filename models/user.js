const db = require('../db')

const db_user = db.model('user', {
    name: {
        type: String,
        required: [true, "Username is required"],
    },
    email: {
        type: String,
        required: [true, "Username is required"],
    },
    password: {
        type: String,
        required: [true, "Password required"]
    }
})

module.exports = db_user