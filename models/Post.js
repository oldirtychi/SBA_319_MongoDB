import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    postedOn: { type: Date, default: Date.now }
});
PostSchema.index({ title: 'text' })

const Post = mongoose.model('Post', PostSchema);
export default Post;