const User = require("./User");
const Post = require("./Post");
const Thought = require('./Thought');

// create associations
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Thought.belongsTo(User, {
  foreignKey: "user_id",
});

Thought.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Thought, {
  foreignKey: "user_id",
});

Post.hasMany(Thought, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Thought };
