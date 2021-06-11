# Gamers-Hideout

Project Owners - Cam, Ty, Nick, Aaron

Heroku Link: <Insert Link>

<br>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)

## Table of Contents
* [Description](#Description)
* [Features](#Features)
* [License](#License)
* [Development](#Development)
* [Future](#Future)
* [Contributions](#Contributions)
* [Credits](#Credits)

## Description
The web application allows users to create an account and leave reviews for games, with the ability to add a game to the site if there are no existing reviews for it.

Below is our User Story:

```md
AS A gamer who wants to look up game reviews, 
I WANT to be able to view a list of games, see a brief description and honest user reviews,
SO I CAN decide whether I want to invest time and money into that game. 

```

Below is our database layout. 
<insert database layout screenshot here>

## Features
Below are some features of the site:
- Users are able to search our website and database for games.
- Users are able to see a list of currently trending games.
- Users are able to see reviews, and add reviews. 
- If the game does not currently exist, users can choose to add games to our database.
- To add reviews, user must have an account and be logged in (reviewers authentication to ensure quality of reviews)

## License
MIT License
<br>
Copyright © 2021-Present 
<br>

## Development
Our main goal was to build a full stack application that helps users find reviews on games they may want to try out. 
We wanted to fill a gap in the market between a reddit forum page and an IGN game review site.
<br>

`Minimum Viable Product - Users to add game reviews to their favourite games!`


## Future
Due to the time constraints given for completion of this project, we had to scale back a lot of potential features. Moving foward, we would like to add some of these features in the future. 

1. Continue to add more games to the database & encourage users to add potential games. Looking at potentially linking an API to our database, so we can store all existing games (e.g. from Steam) in our database. 
2. Have a faster vetting system for user game submissions.
3. Functionality for users to recover lost accounts (through using email - npm package `nodemailer`). 
4. Compress game cover art images to decrease load speeds.
5. Build a bigger forum extension for games that allow for users to add other features such as video walkthroughs (integration with YouTube API).
6. Work with online retailers to link games over for purchasing.


## Contributions
For contributions, you may follow the industry standard: [Contributor Covenant](https://www.contributor-covenant.org/).
<br>


## Credits

* License badges used in this project were retrieved from GitHub user's `lukas-h` license-badge markdown file: [Markdown License badges](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba).

* Basic NPM Packages were used: [NPM Packages](https://www.npmjs.com/).

* bcrypt
* dotenv
* mysql2
* express
* express-handlebars
* express-session
* sequelize
* Typewriter effect - inspired by [Geoff](https://css-tricks.com/snippets/css/typewriter-effect/).
* CSS Hover Images with Grayscale - inspired by [Rahul](https://w3bits.com/css-image-hover-zoom/).
