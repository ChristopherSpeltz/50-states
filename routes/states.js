let express = require('express')
let States = require('../models').States

let router = express.Router()


// code created for get API used to fetch states
router.get('/states', function (req, res, next) {
    States.findAll({ order: ['name']}).then( states => {
        return res.json(states)
    })
    .catch(err => next(err) )
})
module.exports = router