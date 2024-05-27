const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const userRoutes = require('./routes/api/user-route');
app.use('/api/users', userRoutes);

const postRoutes = require('./routes/api/posts-route');
app.use('/api/posts', postRoutes);

const commentRoutes = require('./routes/api/comment-route');
app.use('/api/comments', commentRoutes);



mongoose.connect('mongodb://localhost/de-network-api');

app.use('api/users', require('./routes/api/user-route'));
app.use('api/posts', require('./routes/api/posts-route'));
app.use('api/comments', require('./routes/api/comment-route'));


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
