const Sequelize = require('sequelize');
const db = require('../../db');


const UserPost = db.define('user_post', {
    userID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: require('./User'),
            key: 'id'
        }
    },
    postID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: require('./Post'),
            key: 'id'
        }
    }
});
//UserPost.sync({ force: true });
module.exports = UserPost;