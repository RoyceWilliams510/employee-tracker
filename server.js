var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require('console.table');
var logic = require("./index.js")

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "company_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection()
});

function afterConnection(){
    connection.query("SELECT * FROM employees", function(err, res) {
        if (err) throw err;
        console.log("Welcome to Employee Tracker, the terminal ran application for managing your business!");
        console.log("For starters, here's a table of all of your current employees.");    
        console.table(res);
        logic();
      });
}

function insertEmployee(data){

}

module.exports = connection 