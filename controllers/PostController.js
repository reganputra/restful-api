//import PrismaClient
const { PrismaClient } = require('@prisma/client');
// Import validationResult from express-validator
const { validationResult } = require("express-validator");

//init prisma client
const prisma = new PrismaClient();

//function findPosts
const findPosts = async (req, res) => {
    try {
        //get all posts from database
        const posts = await prisma.post.findMany({
            select: {
                id: true,
                title: true,
                content: true,
                createdAt: true,
                updatedAt: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        //send response
        res.status(200).send({
            success: true,
            message: "Get All Posts Successfully",
            data: posts,
        });

    } catch (error) {
        console.error('Error fetching posts:', error); // Log the error
        res.status(500).send({
            success: false,
            message: "Internal server error",
            error: error.message, // Include error message in response
        });
    }
};

// create post
const createPost = async (req, res) => {

    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
            success: false,
            message: "Validation errors",
            errors: errors.array(),
        });
    }

    try {
        // insert data
        const post = await prisma.post.create({
            data: {
                title: req.body.title,
                content: req.body.content,
            },
        });

        // Send response
        res.status(200).send({
            success: true,
            message: "Post created successfully",
            data: post,
        });

    } catch (error) {
        console.error('Error creating post:', error); // Log the error
        res.status(500).send({
            success: false,
            message: "Internal server error",
            error: error.message, // Include error message in response
        });
    }
}

// get post by id
const getPostById = async (req, res) => {
    
    const {id} = req.params;
    try {
        // get post by id
        const post = await prisma.post.findUnique({
            where:{
                id: id,
            },
            select: {
                id: true,
                title: true,
                content: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        // send response
        res.status(200).send({
            success: true,
            message: `Get Post By ID :${id}`,
            data: post,
        });

    } catch (error) {
        console.error('Error creating post:', error); // Log the error
        res.status(500).send({
            success: false,
            message: "Internal server error",
            error: error.message, // Include error message in response
        });
    }
};

//export function
module.exports = {
    findPosts,
    createPost,
    getPostById,
};