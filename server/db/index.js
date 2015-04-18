var mysql = require('mysql');

exports.connection = mysql.createConnection({
      user: "root",
      password: "",
      database: "chat"
    });

exports.add = function(table, messageContent) {

  exports.connection.query("INSERT INTO " + table +" SET ?", messageContent, function(err, result){
    if(err) console.log("error", err);
  })

}

exports.getAll = function(table, callback){

  exports.connection.query("SELECT * FROM " + table, function(err, result){
    if(err) console.log("error", err);
    else {
      console.log('result in db: '+JSON.stringify(result));
      callback(result);
    }
  })

}
