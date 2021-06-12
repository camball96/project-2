const User = require("./User");
const Game = require("./Game");
const Review = require("./Review");

Review.belongsTo(Game, {
	foreignKey: "game_id",
});

Review.belongsTo(User, {
	foreignKey: "user_id",
});

Game.hasMany(Review, {
	foreignKey: "game_id",
});

module.exports = {
	Game,
	User,
	Review,
};
