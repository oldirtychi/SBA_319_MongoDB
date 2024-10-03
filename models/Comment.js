import mongoose from 'mongoose';

const { Schema } = mongoose;

const CommentSchema = new Schema({
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    post: { type: Schema.Types.ObjectId, ref: 'Post', required: true},
    postedOn: { type: Date, default: Date.now}
});
CommentSchema.index({ content: 'text' })

const Comment = mongoose.model('Comment', CommentSchema);
export default Comment;