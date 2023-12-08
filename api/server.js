// BUILD YOUR SERVER HERE

const express = require('express')
const User = require('./users/model')
const server = express(); 

server.get('/api/users', (req, res) => {
    User.find()
    .then(users => {
        throw new Error('LOL RIP')
    })
    .catch(err => {
        res.status(500).json({
            message: 'error getting users',
            err: err.message,
        })
    })
})

server.use(express.json()) //ability to read JSON data


module.exports = server; // EXPORT YOUR SERVER instead of {}
