const mongoose = require('mongoose');
const Person = require('./models/Person');
const Post = require('./models/Post');
const Comment = require('./models/Comment');


start().catch(err => { console.log(err.message) });

async function start() {
    const client = await mongoose.connect('mongodb://127.0.0.1:27017/testdb');

    const person = new Person({
        name: 'Stamat', 
        age: 24
    })
    await person.save();

    const post = new Post({
        author: person, 
        title: 'New Post', 
        content: 'This is my first related post '
    });
    await post.save();

    const comment = new Comment({
        author: person,  
        content: 'First comment', 
        post
    });
    await comment.save();

    //post.comments.push(comment);
    //await post.save();

    const myPost = await Post.findOne({}).populate('author').populate('comments');
    console.log(myPost);

}