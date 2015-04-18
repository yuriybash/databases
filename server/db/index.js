var mysql = require('mysql');

exports.connection = mysql.createConnection({
      user: "root",
      password: "",
      database: "chat"
    });

exports.addMessage = function(messageContent) {
  //access each property
  //add properties to db
  //messageContent = {"message": "blahblahblah", "username": "obscyuriy", roomname:"homeroom"}


  var queryString = "INSERT INTO messages (text, username, roomname) values (:message, :username, :roomname)"
  exports.connection.query(queryString, messageContent);


}

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


//dbConnection.query(queryString, queryArgs, function(err, results) {})

// //message_id mediumint auto_increment,
//   text varchar(255),
//   username varchar(30),
//   user_id mediumint,
//   roomname varchar(30),
//   created_at timestamp default current_timestamp,
