const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    commentText: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
    },
    commentDate: {
        type: Date,
        default: Date.now,
    }
});


module.exports = commentSchema;