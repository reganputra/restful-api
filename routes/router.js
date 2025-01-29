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
// define route for get post by id
router.get('/posts/:id', PostController.getPostById);
// define route for update post
router.put('/posts/:id', postValidation, PostController.updatePost);
// define route for delete post
router.delete('/posts/:id', PostController.deletePost);

//export router
module.exports = router;