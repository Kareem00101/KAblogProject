const http = require('http');

const server = http.createServer((request,response)=>{
    console.log('the server has received the request!');

});

server.listen(3000, 'localhost', ()=>{
    console.log('server listening for requests, port 4000')
});
