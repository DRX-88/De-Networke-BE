const router = require('express').Router();

const {
    addComment,
    removeComment
} = require('../../controllers/comment-controller');

router.route('/')
.post(addComment)

router.route('/:commentId')
.delete(removeComment);

module.exports = router;