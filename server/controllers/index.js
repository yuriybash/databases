var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db/index.js'); //our database connection

console.log("CONTROLLER FILE HAS BEEN REACHED!!!!!!!")
var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('we are here, making a GET request');
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("req.body for messages: " + JSON.stringify(req.body))
      db.addMessage("messages", req.body)
      res.send(req.body);



      // console.log('we are here, making a MESSAGES POST request');
      // // console.log(req);
      // headers['Content-Type'] = "text/plain";
      // res.writeHead(200, headers);
      // var requestBody = '';
      // req.on('data', function(chunk) {
      //   console.log(chunk.toString())
      //   requestBody+= chunk;
      // });
      //  req.on('end', (function()  {
      //   console.log("END SEQUENCE INITIATED")
      //   db.addMessage(JSON.parse(requestBody));
      //   console.log("WE ARE HERE, ENDING A MESSAGES POST REQUEST")
      //  }))

      //   res.end();


      //access request body
      //call addMessage(send requestbody)
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {



    },
    post: function (req, res) {
      console.log("req.body for users: " + JSON.stringify(req.body))
      db.addMessage("users", req.body);
      res.send(req.body);

      // console.log('we are here, making a USERS POST request');
      // // console.log(req);
      // headers['Content-Type'] = "text/plain";
      // res.writeHead(200, headers);
      // var requestBody = '';
      // req.on('data', function(chunk) {
      //   console.log(chunk.toString())
      //   requestBody+= chunk;
      // });
      //  req.on('end', (function()  {
      //   db.addUser(JSON.parse(requestBody));
      //   console.log("WE ARE HERE, ENDING A USERS POST REQUEST")
      //  }))

      //   res.end();


    }
  }
};
