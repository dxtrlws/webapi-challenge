const express = require('express')
const projectsRouter = require('./routes/projectRouter')
const server = express();

server.use(express.json())

// Routes
server.use('/api/projects', projectsRouter)

server.get('/', (req, res) => {
    res.send('Server is running');
})



module.exports = server