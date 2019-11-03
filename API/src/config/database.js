module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'pfinal',
    define:{
        timestamps: true,   //serve para saber quando as coisas foram incluidas e modificadas na base de dados
        underscored: true,
    },
};