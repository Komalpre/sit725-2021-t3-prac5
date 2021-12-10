const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/', contactController.getAllContact);
router.post('/', contactController.insertContact);
router.delete('/:id', contactController.deleteContact);

module.exports = router;
