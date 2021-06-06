const seedUsers = require('./user-seeds');
const seedGames = require('./game-seeds');
const seedReviews = require('./review-seeds');


const sequelize = require('../../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- Users SEEDED -----\n');
    await seedGames();
    console.log('\n----- games SEEDED -----\n');
    await seedReviews();
    console.log('\n----- reviews SEEDED -----\n');

    process.exit(0);
};

seedAll();
