const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.TypesObjectId, ref: 'User', required: true },
    postedOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);