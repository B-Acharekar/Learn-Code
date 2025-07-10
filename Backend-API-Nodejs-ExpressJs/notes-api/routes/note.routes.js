const express = require('express');
const router = express.Router();
const noteCtrl = require('../controllers/note.controller');

router.post('/create', noteCtrl.createNote);
router.get('/read/:id', noteCtrl.getNote);
router.put('/update/:id', noteCtrl.updateNote);
router.delete('/delete/:id', noteCtrl.deleteNote);

module.exports = router;
