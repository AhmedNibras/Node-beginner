const http = require('http');

const server = http.createServer((req, res) => 
{
    if(req.url === '/')
    { 
        res.end('Welcome to our HomePage..')
    }
    if(req.url === '/about')
    {
        res.end('Here is our short History')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We Can't seem to find the page you are looking for </p>
        <a href="/"> back home </a>
    `)
}) 

server.listen(5000)