const sequelize = require('../config/connection');
const { User, Comment, Posting} = require('../models');

const userData = require('./userData.json');
const postingData = require('.postingData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const posts = await Posting.bulkCreate(postingData, {
        individualHooks: true,
        returning: true,
    });

    const comments = await Comment.bulkCreate(commentData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();
