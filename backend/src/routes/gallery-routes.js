
const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/gallery-controller');

router.get('/', galleryController.getImages);
router.post('/', galleryController.sendImages);
router.put('/', galleryController.addUpvote);

module.exports = router;
