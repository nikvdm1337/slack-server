const db_message = require('../models/message')

module.exports = (req, res) => {
    db_message.create({
        author: "Nikola",
        body: "Hey Mongo!",
        date: "03.07.2019"
    }).then ((data) => {
        res.send(data)
    }).catch((err) => {
        res.send(err)
    })
}