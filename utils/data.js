const username = [
    'James',
    'John',
    'Robert',
    'Michael',
    'William',
    'David',
    'Richard',
    'Joseph',
    'Charles',
    'Thomas',
    'Christopher',
    'Daniel',
    'Matthew',
    'Anthony',
];

const posts = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Vivamus bibendum turpis sit amet urna ultrices, eget dignissim felis sodales.',
    'Sed vel turpis nec velit tincidunt ultricies.',
    'Vestibulum nec nunc sit amet elit cursus lacinia.',
    'Nullam nec odio nec justo ultricies vehicula.',
    'In hac habitasse platea dictumst.',
    'Sed nec libero non justo tincidunt tincidunt.',
];

const getRandom = (arr) => {
    const randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
};

const getRandUsername = () => getRandom(username);

const getRandPost = () => {
    const postText = getRandom(posts);
    const username = getRandUsername();
    return { postText, username };
};

module.exports = { getRandUsername, getRandPost };