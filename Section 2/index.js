const path = require('path')
const expressEdge = require('express-edge')
const express = require('express')

const app = express()

// static files directory
app.use(express.static('public'))
// set edge template engine
app.use(expressEdge)
// set view for edge
app.set('views', `${__dirname}/views`)

app.get('/',(req, res) =>{
    // res.sendFile(path.resolve(__dirname, 'pages/index.html'))
    res.render('index')
})
app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'))
})
app.get('/post', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/post.html'))
})
app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
})

// app starting
app.listen(3000,()=>{
    console.log('app started')
})