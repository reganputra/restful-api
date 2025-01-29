//import express
const express = require('express')
//import validate post
const { validatePost } = require('../utils/validators');

//init express router
const router = express.Router();

//import PostController
const PostController = require('../controllers/PostController');

//define route for posts
router.get('/posts', PostController.findPosts);
//define route for create post
router.post('/posts', validatePost, PostController.createPost);

//export router
module.exports = router;