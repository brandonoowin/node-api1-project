// BUILD YOUR SERVER HERE

const express = require('express')

const server = express(); 

server.use(express.json()) //ability to read JSON data

server.get('/api/users', (req, res) => {
    res.status(200).json({
        id: "a_unique_id", // String, required
        name: "Jane Doe",  // String, required
        bio: "Having fun", // String, required
      })
})
module.exports = server; // EXPORT YOUR SERVER instead of {}
