const { Game } = require('../models');


const gameData = [
    {
        game_name: "Resident Evil 4",
        picture: "picplaceholder"
    },
    {
        game_name: "Call Of Duty",
        picture: "picplaceholder"
    },
    {
        game_name: "Pokemon",
        picture: "picplaceholder"
    },
    {
        game_name: "HALO",
        picture: "picplaceholder"
    },
    {
        game_name: "Mortal Kombat",
        picture: "picplaceholder"
    },
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
