var mysql = require('mysql');

exports.connection = mysql.createConnection({
      user: "root",
      password: "",
      database: "chat"
    });

exports.addMessage = function(table, messageContent) {

  exports.connection.query("INSERT INTO " + table +" SET ?", messageContent, function(err, result){
    if(err) console.log("error", err);
    console.log(result)
  })

}

exports.getAllMessages = function(table){

  exports.connection.query("SELECT * FROM " + table, function(err, result){
    if(err) console.log("error", err);
    else console.log(result)
  })

}
