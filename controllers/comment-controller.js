const { Comment, Post } = require('../models');

const commentController = {
    addComment: async ({ params, body }, res) => {
        const { postId } = params;
        const { commentBody, username } = body;
        try {
            const post = await Post.findById(postId);
            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
            }
            const newComment = await Comment.create({ commentBody, username });
            post.comments.push(newComment._id);
            await post.save();
            res.status(201).json(newComment);
        } catch (error) {
            console.error('Error creating comment:', error);
            res.status(400).json({ error: 'Failed to create comment' });
        }
    },


    removeComment: async ({ params }, res) => {
        const { postId, commentId } = params;
        try {
            const post = await Post.findByIdAndUpdate(
                postId,
                { $pull: { comments: commentId } },
                { new: true }
            );
            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
            }
            await Comment.findByIdAndDelete(commentId);
            res.json({ message: 'Comment deleted successfully' });
        } catch (error) {
            console.error('Error deleting comment:', error);
            res.status(500).json({ error: 'Failed to delete comment' });
        }
    }
};

module.exports = commentController;