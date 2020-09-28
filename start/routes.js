'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.get('/', () => { return "API ok"});

Route.post('/user', 'UserController.create');

Route.post('/login', 'UserController.login');



Route.group(() => {
  Route.post('/', 'MovieController.create');
  Route.get('/', 'MovieController.list');
  Route.get(':id', 'MovieController.show');
})
  .middleware(["auth"])
  .prefix('/movies');