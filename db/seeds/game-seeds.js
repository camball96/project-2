const { Game } = require('../../models');


const gameData = [
    {
        game_id: 1  
        game_name: "Resident Evil 4",
        game_desc: "Six years after the events in Raccoon City, Leon Kennedy, now a federal agent, is sent to a rural part of Spain to rescue the U.S. President's kidnapped daughter, Ashley Graham from a sinister cult.",
        picture: "picplaceholder"
    },
    {
        game_id: 2
        game_name: "Call Of Duty",
        game_desc: "A first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II. Over time, the series has seen games set in the midst of the Cold War, futuristic worlds, and outer space.",
        picture: "picplaceholder"
    },
    {
        game_id: 3
        game_name: "Pokemon Sword and Shield",
        game_desc: "A new generation of Pokémon on the Nintendo Switch system. Embark on a journey in the new Galar region, where you’ll challenge the troublemakers of Team Yell, while unraveling the mystery behind the Legendary Pokémon Zacian and Zamazenta!",
        picture: "picplaceholder"
    },
    {
        game_id: 4
        game_name: "Fortnite",
        game_desc: "Fortnite is a survival game where 100 players fight against each other in player versus player combat to be the last one standing. It is a fast-paced, action-packed game, not unlike The Hunger Games, where strategic thinking is a must in order to survive.",
        picture: "picplaceholder"
    },
    {
        game_id: 5
        game_name: "Mortal Kombat 11",
        game_desc: "The long awaited eleventh main installment in the Mortal Kombat series, and a sequel to 2015's Mortal Kombat X.",
        picture: "picplaceholder"
    },
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
