// ######## importing modules ########

const path = require('path')
const expressEdge = require('express-edge')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const Post = require('./database/models/Post')

// ######## App configuraitons ########
const app = express()
// database
mongoose.connect('mongodb://localhost/node-js-blog')

// static files directory
app.use(express.static('public'))
// set edge template engine
app.use(expressEdge)
// set view for edge
app.set('views', `${__dirname}/views`)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


// ######## URL's ########

app.get('/',(req, res) =>{
    // res.sendFile(path.resolve(__dirname, 'pages/index.html'))
    res.render('index')
})

app.get('/posts/new', (req, res) => {
    res.render('create')
})

app.post('/posts/store', (req, res) => {
    Post.create(req.body, (error, post) => {
        res.redirect('/')
    })
    console.log(req.body)
})

app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/post', (req, res) => {
    res.render('post')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})

// app starting
app.listen(3000,()=>{
    console.log('app started')
})