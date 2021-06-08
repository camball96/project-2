const { User } = require('../../models');

const userData = [
    {
        user_name: "test",
        user_email: "test@test.com",
        password: "test"
    },
    {
        user_name: "Nick B",
        user_email: "email@email.com",
        password: "passwerd"
    },
    {
        user_name: "Ty S",
        user_email: "email1@email.com",
        password: "passwerd"
    },
    {
        user_name: "Aaron V",
        user_email: "email2@email.com",
        password: "passwerd"
    },
    {
        user_name: "Cam B",
        user_email: "email3@email.com",
        password: "passwerd"
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
