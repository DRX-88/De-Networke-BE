const { Comment, Post } = require('../models');

const commentController = {
    addComment: async ({ params, body }, res) => {
        try {
            const commentData = await Comment.create(body);
            const addComment = await Post.findOneAndUpdate(
                { _id: params.postId },
                { $push: { comments: commentData._id } },
                { new: true }
            );
            if (!addComment) {
                return res.status(404).json({ message: 'Post not found' });
            }
            res.json(addComment);
        } catch (error) {
            console.error('Error adding comment:', error);
            res.status(500).json({ error: 'Failed to add comment' });
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