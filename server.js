var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8080,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "employeesDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});
