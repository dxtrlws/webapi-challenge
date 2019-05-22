const express = require('express')
const projectsRouter = require('./routes/projectsRouter')
const actionssRouter = require('./routes/actionsRouter')
const server = express();

server.use(express.json())

// Routes
server.use('/api/projects', projectsRouter)
server.use('/api/actions', actionssRouter)

server.get('/', (req, res) => {
    res.send('Server is running');
})



module.exports = server