//what we require
const Blog = require('../DBmodels/blog');


// making functions for better organization
const blog_index = (request, response) =>{
    Blog.find().sort({createdAt: -1})
    .then((results)=>{
        response.render('blogs/index',{title:'All of our Blogs', blogs: results})
    })
    .catch((error)=>{
        console.log(error);
    });
};

// blog content
const blog_content = (request, response) =>{
    const blogID = request.params.id;
    Blog.findById(blogID)
    .then(results=>{
        response.status(404).render('blogs/blogBody', {blog: results, title:'Whole Blog'});
    })
    .catch(error=>{
        response.render('404', {title:'Blog not found'});
        console.log(error);
    });
};

// blog creation
const create_blog = (request, response) =>{
    response.render('blogs/create', {title:'create new blogs here'});
}

const post_create_blog = (request, response) =>{
     //because of the middleware url one.
     const blog = new Blog(request.body) //similar objects
     //save to database.
     blog.save()
     .then((results)=>{
         response.redirect('/blogs');
     })
     .catch((error)=>{
         console.log(error);
     });
}

// blog deletion
const delete_blog = (request, response) =>{
    const blogID = request.params.id;
    Blog.findByIdAndDelete(blogID)
    .then(results=>{
        response.json({ RED: '/blogs' })
    })
    .catch(error=>{
        console.log(error);
    });
}

module.exports ={
    blog_index,
    blog_content,
    create_blog,
    delete_blog,
    post_create_blog
}