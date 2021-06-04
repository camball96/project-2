const User = require('./user');
const Game = require('./game');
const Review = require('./review');


// updated
// will add more as needed...just basic models
Review.belongsTo(Game, {
    foreignKey: 'game_id'
})

Review.belongsTo(User, {
    foreignKey: 'user_id'
})

Game.hasMany(Review, {
    foreignKey: 'game_id'
})


// Game.hasMany(Review, {
//     foreignKey: 'review_ids'
// })

// Game.hasMany(Score, {
//     foreignKey: 'score_ids'
// })

// User.hasMany(Review, {
//     foreignKey: 'review_ids'
// })

// Review.hasOne(Game, {
//     foreignKey: 'game_id'
// })

// Review.hasOne(User, {
//     foreignKey: 'user_id'
// })

// Review.hasOne(Score, {
//     foreignKey: 'score_id'
// })

module.exports = {
    Game,
    User,
    Review
};
