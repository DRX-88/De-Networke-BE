const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

mongoose.connect('mongodb://localhost/de-network-be/api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('api/users', require('./routes/api/user-route'));
app.use('api/posts', require('./routes/api/posts-route'));
app.use('api/comments', require('./routes/api/comment-route'));


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
