const { Post } = require('../models');

const postData = [{
        title: 'eCommerce',
        content: 'This is a comment to discuss eCommerce websites that discuss new techniques.',
        user_id: 1

    },
    {
        title: 'WordPress',
        content: 'This is how wordpress sites are created and managed.',
        user_id: 2
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;