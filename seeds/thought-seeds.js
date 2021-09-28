const { Thought } = require('../models');

const thoughtdata =[
    {
        thought_text: "This is awesome",
    },
    {
        thought_text: "Great post, thank you for sharing",
    },
    {
        thought_text: "I'm not sure if I agree with your argument",
    },
    {
        thought_text: "Finally a food blog",
    },
    {
        thought_text: "This blog needs to be ran through Grammarly",
    },
    {
        thought_text: "This is awesome",
    },
    {
        thought_text: "I cannot point out what this post is about",
    },
    {
        thought_text: "Totally agree",
    }
]
const seedThoughts = () => Thought.bulkCreate(thoughtdata)

module.exports = seedThoughts;