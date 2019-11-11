const express=require('express');
const Sequelize = require('sequelize');
const requireDir=require('require-dir');
const bodyParser = require('body-parser');
const app=express();
app.use(express.json());


const routes = require('./src/router');
const bd = require('./db');

//Body Parser
app.use(routes);
app.use(bodyParser.urlencoded({ extended: false }));

requireDir("./src/models");


app.use('/list',require('./src/router'));



//testar conexão do banco
bd.authenticate()
    .then(()=> console.log("Conectado ao banco..."))
    .catch(err => console.log("Error: ",err));



app.listen(3001);