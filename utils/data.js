const userSeed = [
    {
        username: 'sarah',
        email: 'sarah@email.com'
    },
    {
        username: 'john',
        email: 'john@email.com'
    },
    {
        username: 'jane',
        email: 'jane@email.com'
    },
    {
        username: 'joe',
        email: 'joe@email.com'
    },
];

const postSeed = [
    { 
   
        postText: 'This is the content of post 1',
        postDate: '2021-09-15',
        username: userSeed[0].username,
        comments: [],
    },
    {
        postText: 'This is the content of post 2',
        postDate: '2021-09-16',
        username: userSeed[1].username,
        comments: [],
    },
    {
        postText: 'This is the content of post 3',
        postDate: '2021-09-17',
        username: userSeed[2].username,
        comments: [],
    },
    {
        postText: 'This is the content of post 4',
        postDate: '2021-09-18',
        username: userSeed[3].username,
        comments: [],
    },
]


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