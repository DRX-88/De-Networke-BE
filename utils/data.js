const userSeed = [
    {
        username: 'sarah',
        email: 'sarah@email.com'
    },
];

const postSeed = [
    { 
   
        postText: 'This is the content of post 1',
        postDate: '2021-09-15',
        username: userSeed[0].username,
        comments: [],
    }
]


// postText: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 1,
//     maxlength: 280,
// },
// postDate: {
//     type: Date,
//     default: Date.now,
//     get: (timestamp) => dateFormat(timestamp),
// },
// username: {
//     type: String,
//     required: true,
// },    
// comments: [commentSchema],
// }, {
// toJSON: {
//     virtuals: true,

// },
// id: false,

// const posts = [
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     'Vivamus bibendum turpis sit amet urna ultrices, eget dignissim felis sodales.',
//     'Sed vel turpis nec velit tincidunt ultricies.',
//     'Vestibulum nec nunc sit amet elit cursus lacinia.',
//     'Nullam nec odio nec justo ultricies vehicula.',
//     'In hac habitasse platea dictumst.',
//     'Sed nec libero non justo tincidunt tincidunt.',
// ];

module.exports = { userSeed, postSeed };