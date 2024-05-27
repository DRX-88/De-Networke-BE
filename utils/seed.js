const mongoose = require('mongoose');
const { User, Post } = require('../models');
const { userSeed, postSeed } = require('../utils/data');





mongoose.connect('mongodb://localhost/api');

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
       
        const createdUsers = await User.insertMany(userSeed);
        console.log('Users seeded successfully');

        const createdPosts = await Post.insertMany(postSeed);
        console.log('Posts seeded successfully');

    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
});
        
