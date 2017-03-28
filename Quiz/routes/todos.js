const Express = require('express');
const router  = Express.Router();

router.get('/', function (request, response) {
  // response.clearCookie("todos")
  response.render('index');
})

router.post('/todos', function (request, response) {
  const { todo, username } = request.body;
  const { todos = [] } = request.cookies;
  // const { username } = request.body;

  const { usernames = [] } = request.cookies;
  const { userpost } = request.cookies;
  const { userposts = [] } = request.cookies;

  // response.cookie('todos', [todo, ...todos])
  // response.cookie('usernames', [username, ...usernames])
  userposts.push({username: username, todo: todo});
  response.cookie('userposts', userposts);
  console.log('userposts:', userposts);
  console.log("cookies created successfully")

  response.redirect('/todos');
})

router.get('/todos', function (request, response) {
  const { todos } = request.cookies;
  const { username } = request.cookies;
  const { usernames } = request.cookies;
  const { userpost } = request.cookies;
  const { userposts } = request.cookies;
  response.render('todos/index', { todos, usernames, userposts });
})

module.exports = router;
