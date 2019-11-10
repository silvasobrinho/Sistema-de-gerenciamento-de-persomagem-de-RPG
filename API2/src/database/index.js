const mongoose = require('mongoose');
const config = require('./db');

mongoose.createConnection('mongodb://localhost:27017:27017/noderest', { useNewUrlParser : true, useUnifiedTopology:true })
.then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

mongoose.Promise = global.Promise;

console.log(mongoose.connection.readyState);
console.log("Desconectado = 0 ,Conectado = 1, Conectando = 2, desconectando = 3")


module.exports = mongoose;