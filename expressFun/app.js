const express = require('express');
const ejs = require('ejs');
const morgan = require('morgan');
//express app
const app = express();

// starting view engine
app.set('view engine', 'ejs');
app.set('views', './views');
//to listen using express
app.listen(3001);

//Example for middleware
app.use((request,response, next)=>{
    console.log('server received a request');
    console.log('the host: ', request.hostname);
    console.log('the path: ', request.path);
    console.log('method used: ', request.method);
    next(); //next is used, to tell the program to move on to the next middleware
});

//Example for the use of morgan middleware
app.use(morgan('dev'));

//Example for use of static files/middleware
app.use(express.static('public-static'));

//homepage, request
app.get('/',(request, response) =>{
    const blogs = [
        {title: 'my bird is singing', snippet: 'caged little bird'},
        {title: 'my dog is barking', snippet: 'the loyal hero'},
        {title: 'my cat is eating', snippet: 'cats eat alot'},
      ];
    //response.sendFile('./pages/html1.html', {root: __dirname})
    response.render('index',{title: 'Homepage', blogs});
});

app.get('/about',(request, response) =>{
    //response.sendFile('./pages/about.html', {root: __dirname})
    response.render('about', {title:'About page'});
});

// in order to do redirects
app.get('/about-us',(request, response)=>{
    response.redirect('/about',{title:'About page'});
});

app.get('/create',(request, response)=>{
    response.render('create', {title:'create new blogs here'});
});

// for test purposes
app.get('/test',(request, response)=>{
    response.render('test');
});

// for 404 errors
app.use((request, response)=>{
    //response.status(404).sendFile('./pages/404.html', {root:__dirname})
    response.render('404', {title:'404'});
});