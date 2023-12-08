// BUILD YOUR SERVER HERE

const express = require('express')
const User = require('./users/model')
const server = express(); 

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
            message: "The user information could not be retrieved" 
        })
    })
})

// server.post('/api/users', (req, res) => {
//     User.insert((req.params.name, req.params.bio))
//     .then()
//     .catch(err => {
//         res.status(500).json({
//             message: 'error creating user',
//             err: err.message,
//         })
//     })
// })

server.use(express.json()) //ability to read JSON data


module.exports = server; // EXPORT YOUR SERVER instead of {}
