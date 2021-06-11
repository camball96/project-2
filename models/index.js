const User = require("./user");
const Game = require("./game");
const Review = require("./review");

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
