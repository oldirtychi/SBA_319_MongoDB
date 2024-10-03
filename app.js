import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/index.js';


const app = express();

const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI);


app.use(bodyParser.json());

app.use('/', routes);
// app.use('/users', userRoutes);
// app.use('/posts', postRoutes);
// app.use('/comments', commentRoutes);


app.listen(5050, () => console.log('Server is running on port 5050'));