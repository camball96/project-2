const { Review } = require('../../models');


const reviewData = [
    {
        game_id: 1,
        user_id: 1,
        user_name: "Nick B",
        review_score: 3,
        review_txt: "Terrible game, terrible"
    },
    {
        game_id: 1,
        user_id: 3,
        user_name: "Aaron V",
        review_score: 2,
        review_txt: "brings nothing new to the table, just a recycled version of RE3"
    },
    {
        game_id: 1,
        user_id: 2,
        user_name: "Ty S",
        review_score: 5,
        review_txt: "No idea why this is getting review bombed, such a great game real work of art"
    },
    {
        game_id: 2,
        user_id: 2,
        user_name: "Ty S",
        review_score: 5,
        review_txt: "great game"
    },
    {
        game_id: 2,
        user_id: 4,
        user_name: "Cam B",
        review_score: 5,
        review_txt: "pretty decent game"
    },
    {
        game_id: 3,
        user_id: 4,
        user_name: "Cam B",
        review_score: 5,
        review_txt: "pretty decent game"
    },
    {
        game_id: 3,
        user_id: 1,
        user_name: "Nick B",
        review_score: 4,
        review_txt: "I did not hate this game"
    },
    {
        game_id: 3,
        user_id: 3,
        user_name: "Aaron V",
        review_score: 2,
        review_txt: "Play it if there is no paint around to watch dry"
    },
    {
        game_id: 3,
        user_id: 2,
        user_name: "Ty S",
        review_score: 1,
        review_txt: "I deeply regret playing this game"
    },
    {
        game_id: 4,
        user_id: 4,
        user_name: "Cam B",
        review_score: 5,
        review_txt: "pretty decent game"
    },
    {
        game_id: 4,
        user_id: 1,
        user_name: "Nick B",
        review_score: 5,
        review_txt: "BEST GAME EVA"
    },
    {
        game_id: 4,
        user_id: 3,
        user_name: "Aaron V",
        review_score: 5,
        review_txt: "I cannot hate this game"
    },
    {
        game_id: 4,
        user_id: 2,
        user_name: "Ty S",
        review_score: 4,
        review_txt: "It was great"
    },
    {
        game_id: 5,
        user_id: 4,
        user_name: "Cam B",
        review_score: 5,
        review_txt: "pretty decent game"
    },
    {
        game_id: 5,
        user_id: 1,
        user_name: "Nick B",
        review_score: 1,
        review_txt: "waste of time"
    },
    {
        game_id: 5,
        user_id: 3,
        user_name: "Aaron V",
        review_score: 5,
        review_txt: "I cannot hate this game"
    },
    {
        game_id: 5,
        user_id: 2,
        user_name: "Ty S",
        review_score: 4,
        review_txt: "It was great"
    },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
