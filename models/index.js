const User = require('./user');
const Game = require('./game');
const Review = require('./review');


// will add more as needed...just basic models
Game.hasMany(Review, {
    foreignKey: 'review_ids'
})

User.hasMany(Review, {
    foreignKey: 'review_ids'
})

Review.hasOne(Game, {
    foreignKey: 'game_id'
})

module.exports = {
    Game,
    User,
    Review
};
