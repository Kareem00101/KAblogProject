const http = require('http');
const myFileSystem = require('fs');

const server = http.createServer((request,response)=>{
    console.log('the server has received the request!');
    
    // to check the request object
    //console.log(request);
    // set header content type

    // to send plain text
    /* response.setHeader('content-type', 'text/plain');
    response.write('hello, it is kareem here!');
    response.end(); */

    // to send html
    /* response.setHeader('content-type', 'text/html');
    response.write('<h1>WELCOME TO KA SITE</h1>');
    response.write('<p>hello! this is kareem`s site!</p>')
    response.end(); */

    // to send a full html page
    response.setHeader('content-type','text/html');
    let path = './pages/';
    switch(request.url){
        case '/': path += 'html1.html';
        break;
        case '/about': path += 'about.html';
        break;
        default: path+= '404.html';
        break;
    }
    myFileSystem.readFile(path, (err, data)=>{
        if(err){
            console.log(err);
            response.end();
        } else {
            response.write(data);
            response.end();
        }
    });
});

server.listen(3001, 'localhost', ()=>{
    console.log('server listening for requests, port 3001')
});
