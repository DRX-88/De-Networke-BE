const { User, Post } = require('../models');

const postController = { 
    getAllPosts: async (req, res) => {
        try {
            const postData = await Post.find();
            res.json(postData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    getPostById: async ({ params }, res) => {
        try {
            const postData = await Post.findById(params.id);
            if (!postData) {
                res.status(404).json({ message: 'No post found with this id!' });
                return;
            }
            res.json(postData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    createPost: async ({ body }, res) => {
        const { username } = body;
        try {
            const userData = await User.findOne({ username });
            if (!userData) {
                res.status(400).json({ message: 'No user found with this username!' });
                return;
            }
            const postData = await Post.create(body);
            userData.posts.push(postData._id);
            await userData.save();
            res.json(postData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    updatePost: async ({ params, body }, res) => {
        try {
            const postData = await Post.findByIdAndUpdate(params.id, body, { new: true, runValidators: true });
            if (!postData) {
                res.status(404).json({ message: 'No post found with this id!' });
                return;
            }
            res.json(postData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    deletePost: async ({ params }, res) => {
        try {
            const postData = await Post.findByIdAndDelete(params.id);
            if (!postData) {
                res.status(404).json({ message: 'No post found with this id!' });
                return;
            }
            res.json(postData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    addComment: async ({ params, body }, res) => {
        try {
            const commentData = await Comment.create(body);
            const addComment = await Comment.findOneAndUpdate(
                { _id: params.commentId },
                { $push: { comments: commentData._id } },
                { new: true }
            );
            if (!addComment) {
                res.status(404).json({ message: 'No comment found with this id!' });
                return;
            }
            res.json(addComment);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    deleteComment: async ({ params }, res) => {
        try {
            const commentData = await Comment.findByIdAndDelete(params.commentId);
            if (!commentData) {
                res.status(404).json({ message: 'No comment found with this id!' });
                return;
            }
            res.json(commentData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
};

module.exports = postController;