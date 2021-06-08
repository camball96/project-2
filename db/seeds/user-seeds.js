const { User } = require('../../models');

const userData = [
    {
        user_id: 1
        user_name: "Nick B",
        user_email: "email@email.com",
        password: "passwerd"
    },
    {
        user_id: 2
        user_name: "Ty S",
        user_email: "email1@email.com",
        password: "passwerd"
    },
    {
        user_id: 3
        user_name: "Aaron V",
        user_email: "email2@email.com",
        password: "passwerd"
    },
    {
        user_id: 4
        user_name: "Cam B",
        user_email: "email3@email.com",
        password: "passwerd"
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
