const http = require('http');

const server = http.createServer((request,response)=>{
    console.log('the server has received the request!');
    // to check the request object
    console.log(request);
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
});

server.listen(3000, 'localhost', ()=>{
    console.log('server listening for requests, port 3000')
});
