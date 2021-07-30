const http = require('http')
const {readFileSync} = require('fs')

//get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {

    //console.log(req.method)
    const url = req.url;

    //HomePage
    if(url === '/') {
        res.writeHead(200, { 'content-type': 'text/html'});
        res.end(homePage)
        res.end()
    }
    //about page
    else if(url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'}) 
        res.write('<h1>about page</h1>')
        res.end()
    }
    // Style
    else if(url === '/styles.css') {
        res.writeHead( 200, {'content-type': 'text/css' })
        res.write(homeStyle)
        res.end()
    }

    else if(url === '/logo.svg') {
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    else if(url === '/browser-app.js') {
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end();
    }
})

server.listen(5000)