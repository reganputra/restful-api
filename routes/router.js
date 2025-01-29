//import express
const express = require('express')
//import validate post
const { postValidation } = require('../utils/validator');

//init express router
const router = express.Router();

//import PostController
const PostController = require('../controllers/PostController');

//define route for posts
router.get('/posts', PostController.findPosts);
//define route for create post
router.post('/posts', postValidation, PostController.createPost);

//export router
module.exports = router;