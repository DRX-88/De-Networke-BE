const mongoose = require('mongoose');
const Comment = require('./Comments');
const commentSchema = require('./Comments');
const { get } = require('lodash');

const postSchema = new mongoose.Schema({
    postText: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 280,
    },
    postDate: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    username: {
        type: String,
        required: true,
    },    
    comments: [commentSchema],
}, {
    toJSON: {
        virtuals: true,

    },
    id: false,
});

postSchema.virtual('commentCount').get(function() {
    return this.comments.length;
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;