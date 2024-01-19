//import module http
const http = require('http');

//define the server hostname and portnumber
 const hostname = '127.0.0.1'; //local host
 const port = 3000;
  
 //create server
 const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world\n');
 });
   
 //make the server to listen to the defined portnumber
 server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);      
 });