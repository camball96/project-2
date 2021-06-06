const { User } = require('../models');

const userData = [
    {
        user_name: "Nick B",
        user_email: "email@email.com",
        password: "passwerd"
    },
    {
        user_name: "Ty S",
        user_email: "email@email.com",
        password: "passwerd"
    },
    {
        user_name: "Aaron V",
        user_email: "email@email.com",
        password: "passwerd"
    },
    {
        user_name: "Cam B",
        user_email: "email@email.com",
        password: "passwerd"
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
