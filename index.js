const http = require('http')

const server = http.createServer((request,response) =>{
    console.log(request.url)
    if (request.url === '/'){
        response.end('Hello, Welcome to homepage')
    }
    else if (request.url === '/about') {
        response.end('This is about page')
    }
    else if (request.url === '/contact') {
        response.end('Contact page')
    }
    else{
        response.writeHead(404)
        response.end('404 . Page not found')
    }
})

server.listen(3000)