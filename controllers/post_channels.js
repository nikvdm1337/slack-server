const db_channel = require('../models/channel')

module.exports = (req, res) => {
    db_channel.create({
        name: "programming"
    }).then((data) => {
        res.send(data)
    }).catch((err) => {
        res.send(err)
    })
}