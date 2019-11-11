const Sequelize = require('sequelize')
const bd = require('../../db');

const Post = bd.define('posts',{
    title:{
        type: Sequelize.STRING
    },
    content:{
        type: Sequelize.TEXT
    }
});
// Executar na primeira vez somente  Post.sync({ force: true });
module.exports = Post;