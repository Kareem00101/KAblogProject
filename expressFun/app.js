const express = require('express');

//express app
const app = express();

//to listen using express
app.listen(3000);
app.get('/',(request, response) =>{
    response.sendFile('./pages/html1.html', {root: __dirname})
});
app.get('/about',(request, response) =>{
    response.sendFile('./pages/about.html', {root: __dirname})
});

// in order to do redirects
app.get('/about-us',(request, response)=>{
    response.redirect('/about');
});

// for 404 errors
app.use((request, response)=>{
    response.status(404).sendFile('./pages/404.html', {root:__dirname})
});