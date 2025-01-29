const {body} = require('express-validator');

// define validation for post 
const postValidation = [
    body('title').isLength({min: 5}).withMessage('Title must be at least 5 characters'),
    body('content').isLength({min: 10}).withMessage('Content must be at least 10 characters')
]

module.exports = {
    postValidation
};