const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

//GET all comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find().populate('author').populate('post');
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//POST add comments 
router.post('/', async (req, res) => {
    const comment = new Comment({
        content: req.body.content,
        author: req.body.author,
        post: req.body.post
    });

    try {
        const newComment = await comment.save();
        res.status(201).json(newComment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//PATCH update comments
router.patch('/:id', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) return res.status(404).json({ message: 'Comment not found' });

        if (req.body.content) comment.contenet = req.body.content;

        const updatedComment = await commment.save();
        res.json(updatedComment);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
});

//DELETE a comment
router.delete('/:id', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) return res.status(404).json({ message: 'Comment not found'});

        await comment.remove();
        res.json({ message: 'Comment deleted'});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

