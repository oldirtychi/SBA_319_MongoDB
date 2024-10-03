import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './db/conn.mjs';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import commentRoutes from './routes/comments.js';

const app = express();
app.use(bodyParser.json());

connectDB();


app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});