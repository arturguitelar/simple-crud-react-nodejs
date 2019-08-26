const express = require('express');
const UserController = require('./app/controllers/UserController');

const router = new express.Router();

router.get('/api', UserController.index);

router.post('/api', UserController.create);

router.put('/api/:id', UserController.update);

router.delete('/api/:id', UserController.destroy);

module.exports = router;