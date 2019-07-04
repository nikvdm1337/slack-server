const db_user = require('../models/user')

module.exports = (req, res) => {
    console.log(req.body)

    db_user.create(req.body).then((data) => {
        res.send(data)
    }).catch((err) => {
        res.send(err)
    })
}