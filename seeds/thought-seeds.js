const { Thought } = require('../models');

const thoughtdata =[
    {
        thought_text: "This is awesome",
        user_id: 8
    },
    {
        thought_text: "Great post, thank you for sharing",
        user_id: 7
    },
    {
        thought_text: "I'm not sure if I agree with your argument",
        user_id: 4
    },
    {
        thought_text: "Finally a food blog",
        user_id: 6
    },
    {
        thought_text: "This blog needs to be ran through Grammarly",
        user_id: 2
    },
    {
        thought_text: "This is awesome",
        user_id: 5
    },
    {
        thought_text: "I cannot point out what this post is about",
        user_id: 3
    },
    {
        thought_text: "Totally agree",
        user_id: 1
    }
]
const seedThoughts = () => Thought.bulkCreate(thoughtdata)

module.exports = seedThoughts;