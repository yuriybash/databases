var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db/index.js'); //our database connection

console.log("CONTROLLER FILE HAS BEEN REACHED!!!!!!!")

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('we are here, making a GET request');
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('we are here, making a POST request');
      var requestBody = '';
      req.on('data', function(chunk) {
        requestBody+= chunk;
      })
      req.end(function() {
        db.addMessage(JSON.parse(requestBody));
      })



      //access request body
      //call addMessage(send requestbody)
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

