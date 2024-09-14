
const http = require("http");

const server = http.createServer((req,res)=>{
   

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Home Page!\n');
      } else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the About Page!\n');
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found\n');
      }
});

server.listen(9000,()=>{
    console.log("server is running on http://localhost:9000");
    
});