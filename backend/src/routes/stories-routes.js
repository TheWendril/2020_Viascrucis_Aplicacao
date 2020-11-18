 
const express = require('express');
const router = express.Router();
const storiesController = require('../controllers/stories-controller');

router.get('/', storiesController.listStories);
router.post('/', storiesController.createStory);

module.exports = router;
