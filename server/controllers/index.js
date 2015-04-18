var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db/index.js'); //our database connection

// console.log("CONTROLLER FILE HAS BEEN REACHED!!!!!!!")
var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('we are here, making a GET request!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      var response = db.getAll("messages",function(data) {
        res.send(data)
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
       console.log("req.body for messages: " + JSON.stringify(req.body))
      db.add("messages", req.body)
      res.send(req.body);

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {



    },
    post: function (req, res) {
      // console.log("req.body for users: " + JSON.stringify(req.body))
      db.add("users", req.body);
      res.send(req.body);



    }
  }
};
