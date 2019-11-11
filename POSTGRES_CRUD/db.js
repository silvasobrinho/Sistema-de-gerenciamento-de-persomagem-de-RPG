const Sequelize=require('sequelize');

const sequelize = new Sequelize('pf3','postgres','123',{
    host:'localhost',
    port:'5432',
    dialect:'postgres'
});

module.exports = sequelize;