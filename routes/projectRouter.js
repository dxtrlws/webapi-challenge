const express = require('express');
const dbProjects = require('../data/helpers/projectModel');
const dbActions = require('../data/helpers/actionModel')
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await dbProjects.get();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Unable to process request' });
  }
});

router.get('/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const project = await dbProjects.get(id)
        res.status(200).json(project)
    }catch(err) {
        res.status(500).json({ error: 'Unable to process request' });
    }
})

// Middleware

// async function validaiteAction (req, res, next) {
//     try{
//         const { id } = req.params
//         const action = await dbActions.insert(id)
//         if(action.length) {
//             req.ac
//         }
//     }
// }

module.exports = router;
