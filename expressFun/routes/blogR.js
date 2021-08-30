const express = require('express');
const bRouter = express.Router();
const bController = require('../controllers/bController')


// here will be the blog routes

// the homepage
bRouter.get('/', bController.blog_index);

// for creation of new blogs
bRouter.get('/create', bController.create_blog);

// post requests
bRouter.post('/', bController.post_create_blog);

//for handling route parameters
bRouter.get('/:id', bController.blog_content);

// for handling delete requests
bRouter.delete('/:id', bController.delete_blog);


//exporting the router
module.exports = (bRouter);