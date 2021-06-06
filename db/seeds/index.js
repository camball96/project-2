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
    console.log('\n----- Games SEEDED -----\n');
    await seedReviews();
    console.log('\n----- Reviews SEEDED -----\n');

    process.exit(0);
};

seedAll();
