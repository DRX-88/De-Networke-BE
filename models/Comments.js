const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    commentId: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
    },
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