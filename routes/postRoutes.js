const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth') 
const postController = require('../controllers/posts') 
const { ensureAuth } = require("../middleware/auth");


router.post('/signup', authController.postSignup)
router.post('/login', authController.postLogin)
router.put('/win/:id/:bet', postController.win)
router.put('/lose/:id/:bet', postController.lose)

module.exports = router;