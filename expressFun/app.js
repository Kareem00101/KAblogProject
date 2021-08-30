// test branch
// require, imports and exports
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bRoutes = require('./routes/blogR');
const aRoutes = require('./routes/axiosR');
const app = express();
//creating database
const mongoDB = 'mongodb+srv://user0:user1234@cluster0.krvgo.mongodb.net/DBone?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser:true, useUnifiedTopology:true}).then((result)=>
app.listen(process.env.PORT || 3000)/*console.log('made connection to the database!')*/).catch((error)=>console.log(error));
//second argument was used above for deprecationWarning.
// starting view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//Example for middleware
app.use((request,response, next)=>{
    console.log('server received a request');
    console.log('the host: ', request.hostname);
    console.log('the path: ', request.path);
    console.log('method used: ', request.method);
    next(); //next is used, to tell the program to move on to the next middleware
});



// Example for use of static files/middleware
app.use(express.static('public-static'));
app.use(express.urlencoded({extended: true})); //for request.body

// Example for the use of morgan middleware
app.use(morgan('dev'));

// homepage, request
app.get('/',(request, response) =>{
    response.redirect('/blogs')
});

app.get('/about',(request, response) =>{
    response.render('about', {title:'About page'});
});

// in order to do redirects
app.get('/about-us',(request, response)=>{
    response.redirect('/about',{title:'About page'});
});

// to use the blog routes
app.use('/blogs', bRoutes);

// to use the axios routes
app.use('/dailyQuote', aRoutes)
// for 404 errors
app.use((request, response)=>{
    response.render('404', {title:'404'});
});



// Edited parts of code or removed:

//to listen using express
//app.listen(3001);
/*
//database routes
app.get('/add-blog',(request, response)=>{
    const blog = new Blog({
        title: 'the second blog',
        snippet: 'lets see my new blog',
        body:'useless new blog xd'
    }); // asynchronous method takes time.
    blog.save()
    .then((result)=>{
        response.send(result);
    })
    .catch((error)=>{
        console.log(error);
    });
});
// to get all the blogs
app.get('/all-blogs',(request, response)=>{
    Blog.find()
    .then((results)=>{
        response.send(results);
    })
    .catch((error) =>{
        console.log(error);
    });
});
// to get one single blog
app.get('/aBlog',(request, response)=>{
    Blog.findById('612a3a9f2b3110af9cfec839')
    .then((results)=>{
        response.send(results);
    })
    .catch((error)=>{
        console.log(error)
    });
});
*/

/*
//homepage, request
app.get('/',(request, response) =>{
    response.redirect('/blogs')
    const blogs = [
        {title: 'my bird is singing', snippet: 'caged little bird'},
        {title: 'my dog is barking', snippet: 'the loyal hero'},
        {title: 'my cat is eating', snippet: 'cats eat alot'},
      ];
    //response.sendFile('./pages/html1.html', {root: __dirname})
    response.render('index',{title: 'Homepage', blogs});
    
});
*/

/*
// for test purposes
bRouter.get('/test',(request, response)=>{
    response.render('test');
});
*/

//const Blog = require('./DBmodels/blog');
//const ejs = require('ejs');
//response.sendFile('./pages/about.html', {root: __dirname})
//response.status(404).sendFile('./pages/404.html', {root:__dirname})