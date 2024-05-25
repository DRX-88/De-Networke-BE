const { User } = require('../models');

const userController = {

    getAllUsers: async (req, res) => {
        try {
            const userData = await User.find();
            res.json(userData); 
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    getUserById: async ({ params }, res) => {
        try {
            const userData = await User.findById(params.id);
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    createUser: async ({ body }, res) => {
        try {
            const userData = await User.create(body);
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    updateUser: async ({ params, body }, res) => {
        try {
            const userData = await User.findByIdAndUpdate(params.id, body, { new: true, runValidators: true });
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    deleteUser: async ({ params }, res) => {
        try {
            const userData = await User.findByIdAndDelete(params.id);
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    addFriend: async ({ params }, res) => {
        try {
            const userData = await User.findByIdAndUpdate(
                { _id: params.userId },
                { $push: { friends: params.friendId } },
                { new: true }
            );
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    deleteFriend: async ({ params }, res) => {
        try {
            const userData = await User.findByIdAndUpdate(
                { _id: params.userId },
                { $pull: { friends: params.friendId } },
                { new: true }
            );
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
};

module.exports = userController;