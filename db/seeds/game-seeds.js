const { Game } = require("../../models");

const gameData = [
	{
		game_name: "Resident Evil 4",
		game_desc:
			"Six years after the events in Raccoon City, Leon Kennedy, now a federal agent, is sent to a rural part of Spain to rescue the U.S. President's kidnapped daughter, Ashley Graham from a sinister cult.",
		picture: "resident-evil4.jpeg",
	},
	{
		game_name: "Call Of Duty",
		game_desc:
			"A first-person shooter game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II. Over time, the series has seen games set in the midst of the Cold War, futuristic worlds, and outer space.",
		picture: "cod-cold-war.jpeg",
	},
	{
		game_name: "Pokemon Sword",
		game_desc:
			"A new generation of Pokémon on the Nintendo Switch system. Embark on a journey in the new Galar region, where you’ll challenge the troublemakers of Team Yell, while unraveling the mystery behind the Legendary Pokémon Zacian!",
		picture: "pokemon-sword.png",
	},
	{
		game_name: "Pokemon Shield",
		game_desc:
			"A new generation of Pokémon on the Nintendo Switch system. Embark on a journey in the new Galar region, where you’ll challenge the troublemakers of Team Yell, while unraveling the mystery behind the Legendary Pokémon Zamazenta!",
		picture: "pokemon-shield.jpeg",
	},
	{
		game_name: "Fortnite",
		game_desc:
			"Fortnite is a survival game where 100 players fight against each other in player versus player combat to be the last one standing. It is a fast-paced, action-packed game, not unlike The Hunger Games, where strategic thinking is a must in order to survive.",
		picture: "fortnite.jpeg",
	},
	{
		game_name: "Mortal Kombat 11",
		game_desc:
			"The long awaited eleventh main installment in the Mortal Kombat series, and a sequel to 2015's Mortal Kombat X.",
		picture: "Mortal-Kombat-11.jpg",
	},
	{
		game_name: "Halo Infinite",
		game_desc:
			"The legendary Halo series returns. When all hope is lost and humanity’s fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he’s ever faced.",
		picture: "Halo-inf.jpeg",
	},
	{
		game_name: "Final Fantasy VII",
		game_desc:
			"Final Fantasy VII Remake is a 2020 action role-playing game developed and published by Square Enix. It is the first in a planned series of games remaking the 1997 PlayStation game Final Fantasy VII. ",
		picture: "ff7.jpg",
	},
	{
		game_name: "Persona 5",
		game_desc:
			"Persona 5 is a 2016 role-playing video game developed by Atlus. It is the sixth installment in the Persona series, which is part of the larger Megami Tensei franchise.",
		picture: "persona 5.jpg",
	},
	{
		game_name: "The Witcher 3",
		game_desc:
			"The Witcher 3: Wild Hunt is an action role-playing game developed and published by Polish developer CD Projekt Red and is based on The Witcher series of fantasy novels written by Andrzej Sapkowski.",
		picture: "the-witcher-3.jpg",
	},
	{
		game_name: "Grand Theft Auto V",
		game_desc:
			"Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first main entry in the Grand Theft Auto series since 2008's Grand Theft Auto IV.",
		picture: "gta-v.jpg",
	},
	{
		game_name: "Assassins Creed Valhalla",
		game_desc:
			"Assassin's Creed Valhalla is a 2020 action role-playing video game developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth major installment and the twenty-second release in the Assassin's Creed series, and a successor to the 2018's Assassin's Creed Odyssey.",
		picture: "assassins-creed-val.jpg",
	},
	{
		game_name: "Cyberpunk 2077",
		game_desc:
			"Cyberpunk 2077 is a 2020 action role-playing video game developed and published by CD Projekt. The story takes place in Night City, an open world set in the Cyberpunk universe",
		picture: "cyberpunk-2077.jpg",
	},
	{
		game_name: "The Elder Scrolls V: Skyrim",
		game_desc:
			"The Elder Scrolls V: Skyrim is an open world action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks.",
		picture: "skyrim.jpg",
	},
	{
		game_name: "Star Wars Jedi Fallen Order",
		game_desc:
			"Star Wars Jedi: Fallen Order is an action-adventure game developed by Respawn Entertainment and published by Electronic Arts. It was released for Windows, PlayStation 4, and Xbox One",
		picture: "jedi-fallen-order.jpg",
	},
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
