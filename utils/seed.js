const mongoose = require('mongoose');
const { uniq } = require('lodash');
const { User, Post } = require('../models');
const { getRandPost } = require('./data');

const { username } = require('./data');

const generateUniqueUsernames = (count) => {
    const shuffledUsernames = username.sort(() => Math.random() - 0.5);
    return uniq(shuffledUsernames.slice(0, count));
};

mongoose.connect('mongodb://localhost/de-network-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
connection.once('open', async () => {
    console.log('Connected to MongoDB');

    try {
        await User.deleteMany({});
        await Post.deleteMany({});
        console.log('Collections deleted successfully');
    } catch (error) {
        console.error('Error deleting collections:', error);
        process.exit(1);
    }

    try {
        const posts = await Post.insertMany(getRandPost(20));
        console.log('Posts seeded successfully');

        const uniqueUsernames = generateUniqueUsernames(20);

        const users = uniqueUsernames.map((username, index) => ({
            username,
            email: `user${index + 1}@email.com`,
            posts: posts.splice(0, 2).map(post => post._id)
        }));

        await User.insertMany(users);
        console.log('Users seeded successfully');
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
});
