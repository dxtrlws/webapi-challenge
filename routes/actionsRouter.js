const express = require('express');
const router = express.Router();
const dbActions = require('../data/helpers/actionModel');

router.get('/', async (req, res) => {
  try {
    const actions = await dbActions.get();
    res.status(200).json(actions);
  } catch (err) {
    res.status(500).json({ error: 'Unable to process request' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const actions = await dbActions.get(id);
    res.status(200).json(actions);
  } catch (err) {
    res.status(500).json({ error: 'Unable to process request' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const action = await dbActions.update(id, req.body);
    res.status(200).json(action);
  } catch (err) {
    res.status(500).json({ error: 'Unable to process request' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const action = await dbActions.remove(id);
    res.status(200).json(action);
  } catch (err) {
    res.status(500).json({ error: 'Unable to process request' });
  }
});

module.exports = router;
