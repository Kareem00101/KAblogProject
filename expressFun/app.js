const express = require('express');
let ejs = require('ejs');
//express app
const app = express();

// starting view engine
app.set('view engine', 'ejs');
app.set('views', './views')
//to listen using express
app.listen(3001);
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