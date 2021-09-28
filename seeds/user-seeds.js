const sequelize = require('../config/connection');
const { User, Post } = require("../models");


const userdata = [
    {
        username: "grete1",
        password: "642N21BaLQV"
    },
    {
        username: "Farrel2",
        password: "vmSDAiSwl6"
    },
    {
        username: "Diego3",
        password: "oIfkJXzuDxU"
    },
    {
        username: "Calhoun5",
        password: "uXOUBD72qaf"
    },
    {
        username: "Felecia15",
        password: "99PPE9KO9aqr"
    },
    {
        username: "Rorie1",
        password: "VDEAlZTYJ1"
    },
    {
        username: "Emily6",
        password: "K56cHfOzZ"
    },
    {
        username: "Kalli2",
        password: "Gybd2XR7gCcg"
    },
]


const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;









// seeds generated with https://www.mockaroo.com/