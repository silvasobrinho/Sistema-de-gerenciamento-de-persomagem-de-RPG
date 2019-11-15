'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/register', 'AuthController.register')
Route.post('/sessions', 'SessionController.create')
Route.post('/userdata', 'AuthController.getuserdata')
Route.post('/authenticate', 'AuthController.authenticate')
Route.resource('personagens', 'PersonagemController')
  .apiOnly()
  .middleware('auth')
Route.get('/dado/d4', 'DadoController.gd4')
Route.get('/dado/d6', 'DadoController.gd6')
Route.get('/dado/d8', 'DadoController.gd8')
Route.get('/dado/d10', 'DadoController.gd10')
Route.get('/dado/d12', 'DadoController.gd12')
Route.get('/dado/d20', 'DadoController.gd20')
Route.get('/dado/d100', 'DadoController.gd100')
