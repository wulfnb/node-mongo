const express = require('express')

const app = express()

app.get('/',(request, response) => {
    response.json({"name":"Noufal"})
})
app.get('/test', (request, response) => {
    response.send({ "type": "Send test" })
})

app.listen(3000)


// const http = require('http')
// const fs = require('fs')

// const aboutPage = fs.readFileSync('about.html')
// const contactPage = fs.readFileSync('contact.html')
// const homePage = fs.readFileSync('home.html')

// // asynchrones process
// // const homePage = fs.readFile('home.html',(file) => {

// // })

// const server = http.createServer((request,response) =>{
//     console.log(request.url)
//     if (request.url === '/'){
//         response.end(homePage)
//     }
//     else if (request.url === '/about') {
//         response.end(aboutPage)
//     }
//     else if (request.url === '/contact') {
//         response.end(contactPage)
//     }
//     else if (request.url === '/test') {
//         response.end('Test page')
//     }
//     else{
//         response.writeHead(404)
//         response.end('404 . Page not found')
//     }
// })

// server.listen(3000)