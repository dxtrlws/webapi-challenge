const express = require('express');
const dbProjects = require('../data/helpers/projectModel');
const dbActions = require('../data/helpers/actionModel');
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
  try {
    const { id } = req.params;
    const project = await dbProjects.get(id);
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ error: 'Unable to process request' });
  }
});

router.post('/', async (req, res) => {
  try {
    const project = await dbProjects.insert(req.body);
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: 'Unable to process request' });
  }
});

router.post('/:id/actions', validiateId, async (req, res) => {
  try{
    const action = await dbActions.insert(req.body)
    res.status(201).json(action)
  }catch(err) {
    res.status(500).json({ error: 'Unable to process request' });
  }
})

router.get('/:id/actions', async (req, res) => {
  try {
    const { id } = req.params;
    const actions = await dbProjects.getProjectActions(id);
    res.status(200).json(actions);
  } catch (err) {
    res.status(500).json({ error: 'Unable to process request' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const project = await dbProjects.remove(id);
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ error: 'Unable to process request' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const project = await dbProjects.update(id, req.body);
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ error: 'Unable to process request' });
  }
});

// Middleware
async function validiateId(req, res, next) {
  try {
    const { id } = req.params;
    const action = await dbProjects.getProjectActions(id);
    if (action.length > 0) {
      next();
    } else {
      res.status(400).json({ error: 'Invalid actions ID' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Unable to process request' });
  }
}



module.exports = router;
