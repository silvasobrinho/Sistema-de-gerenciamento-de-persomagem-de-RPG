const express=require('express');

const routes=express.Router();

const PostController = require('./controllers/PostController');
const UserController = require('./controllers/UserController');
const UserPostController = require('./controllers/UserPostController');
const DadosController = require('./controllers/DadosController')
const AuthController = require('./controllers/authController');
const AuthenticateController = require('./controllers/AuthenticateController')

routes.get('/list/posts',PostController.list);
routes.get('/list/posts/:id',PostController.busca);
routes.post('/register/post',PostController.registro);
routes.put('/update/post/:id',PostController.atualiza);
routes.delete('/delete/post/:id',PostController.apaga);


routes.get('/list/users',UserController.list);
routes.get('/list/users/:id',UserController.busca);
routes.post('/register/user',UserController.registro);
routes.put('/update/user/:id',UserController.atualiza);
routes.delete('/delete/user/:id',UserController.apaga);


routes.get('/list/user_posts',UserPostController.list);
routes.get('/list/user_posts/:id',UserPostController.busca);
routes.post('/register/user_posts',UserPostController.registro);
routes.put('/update/user_posts/:id',UserPostController.atualiza);
routes.delete('/delete/user_posts/:id',UserPostController.apaga);

routes.get('/gerador/d20',DadosController.gd20);
routes.get('/gerador/d6',DadosController.gd6);
routes.get('/gerador/d4',DadosController.gd4);
routes.get('/gerador/d8',DadosController.gd8);
routes.get('/gerador/d10',DadosController.gd10);

routes.post('/register/auth',AuthController.auth);
routes.post('/authenticate',AuthenticateController.auth);

module.exports=routes;

    