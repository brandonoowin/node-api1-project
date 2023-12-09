// BUILD YOUR SERVER HERE

const express = require('express')
const User = require('./users/model')
const server = express(); 
server.use(express.json()) //ability to read JSON data

server.post('/api/users', (req, res) => {
    const user = req.body;
    if (!user.name || !user.bio) {
        res.status(404).json({ 
            message: "Please provide name and bio for the user" 
        })
    } else {
        User.insert(user)
        .then(createdUser => {
            res.status(201).json(createdUser)
        })
        .catch(err => {
           res.status(500).json({
            message: 'error creating user',
            err: err.message,
           }) 
        })
    }
})

server.get('/api/users', (req, res) => {
    User.find()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.status(500).json({ 
            message: "The users information could not be retrieved",
            err: err.message,
            stack: err.stack,
        })
    })
})

server.get('/api/users/:id', (req, res) => {
    User.findById(req.params.id)
    .then(user => {
        if(!user) {
            res.status(404).json({ 
                message: "The user with the specified ID does not exist" 
            })
        } else {
            res.status(200).json(user)
        }
    })
    .catch(err => {
        res.status(500).json({ 
            message: "The user information could not be retrieved",
            err: err.message 
        })
    })
})






module.exports = server; // EXPORT YOUR SERVER instead of {}
