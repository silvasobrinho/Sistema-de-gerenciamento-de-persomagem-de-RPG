const Sequelize=require('sequelize');

const sequelize = new Sequelize('posts','postgres','postgres',{
    host:'localhost',
    port:'5432',
    dialect:'postgres'
});

module.exports = sequelize;