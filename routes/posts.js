const express = require('express');
const router = express.Router();
const Comment = require('../models/Post');

//GET all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().populate('author');
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


//POST create a post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    });

    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//PATCH edit a post
router.patch('/', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found '});

        if (req.body.title) post.title = req.body.title;
        if (req.body.content) post.content = req.body.content;

        const updatedPost = await post.save();
        res.json(updatedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//DELETE a post
router.delete('/', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found'});

        await post.remove();
        res.json({ message: 'Post deleted '});
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});

module.exports = router;