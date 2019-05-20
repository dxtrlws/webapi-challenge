const express = require('express');
const dbProjects = require('../data/helpers/projectModel');
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


module.exports = router;
