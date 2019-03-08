const mongoose = require('mongoose')

const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/node-js-test-blog')

Post.create({
    title: 'My second blog post',
    description: 'second post description',
    content: 'second ipsum content'
}, (error, post) => {
    console.log(error, post)
})

Post.find({}, (error, posts) => {
    console.log(error, posts)
})

Post.findById('5c822db86e84de01fbf8f9ae', (error, post) => {
    console.log(error, post)
})