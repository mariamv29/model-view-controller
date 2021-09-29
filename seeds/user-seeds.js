const sequelize = require('../config/connection');
const { User, Post } = require("../models");


const userdata = [
    {
        username: "Grete White",
        password: "642N21BaLQV"
    },
    {
        username: "Farrel Johnson",
        password: "vmSDAiSwl6"
    },
    {
        username: "Diego House",
        password: "oIfkJXzuDxU"
    },
    {
        username: "Mike Calhoun",
        password: "uXOUBD72qaf"
    },
    {
        username: "Felecia Ramos",
        password: "99PPE9KO9aqr"
    },
    {
        username: "Rorie Lopez",
        password: "VDEAlZTYJ1"
    },
    {
        username: "Emily Miller",
        password: "K56cHfOzZ"
    },
    {
        username: "Kalli Jo",
        password: "Gybd2XR7gCcg"
    },
]


const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;









// seeds generated with https://www.mockaroo.com/