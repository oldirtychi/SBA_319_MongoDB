import express from 'express';
import User from '../models/User.js';
import Post from '../models/Post.js';
import Comment from '../models/Comment.js';

const router = express.Router();

// User Routes
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.post('/users', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json(newUser);
});

router.put('/users/:id', async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedUser);
});

router.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send('User deleted');
});

// Post Routes
router.get('/posts', async (req, res) => {
  const posts = await Post.find().populate('author');
  res.json(posts);
});

router.post('/posts', async (req, res) => {
  const newPost = new Post(req.body);
  await newPost.save();
  res.json(newPost);
});

router.put('/posts/:id', async (req, res) => {
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedPost);
});

router.delete('/posts/:id', async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.send('Post deleted');
});

// Comment Routes
router.get('/comments', async (req, res) => {
  const comments = await Comment.find().populate('author').populate('post');
  res.json(comments);
});

router.post('/comments', async (req, res) => {
  const newComment = new Comment(req.body);
  await newComment.save();
  res.json(newComment);
});

router.put('/comments/:id', async (req, res) => {
  const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedComment);
});

router.delete('/comments/:id', async (req, res) => {
  await Comment.findByIdAndDelete(req.params.id);
  res.send('Comment deleted');
});

export default router;