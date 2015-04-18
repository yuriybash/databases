var controllers = require('./controllers');
var router = require('express').Router();

console.log('hello!');

for (var route in controllers) {
  console.log("ROUTE: " + route)
  router.route("/" + route)
    .get(controllers[route].get)
    .post(controllers[route].post);
}

module.exports = router;

