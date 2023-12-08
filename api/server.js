// BUILD YOUR SERVER HERE

const express = require('express')
const User = require('./users/model')
const server = express(); 

server.get('/api/users', (req, res) => {
    User.find()
    .then(users => {
        res.status(200).json({users})
    })
    .catch(err => {
        res.status(500).json({
            message: 'error getting users',
            err: err.message,
        })
    })
})

server.get('/api/users/:id', (req, res) => {
    User.findById(req.params.id)
    .then(user => {
        res.status(200).json({user})
    })
    .catch(err => {
        res.status(500).json({
            message: 'error getting users by ID',
            err: err.message,
        })
    })
})

server.use(express.json()) //ability to read JSON data


module.exports = server; // EXPORT YOUR SERVER instead of {}
