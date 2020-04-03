var mysql = require("mysql");
var fs = require("fs");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "greatBay_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createProduct();
});

inquirer.prompt([
    {
      type: "checkbox",
      name: "userAction",
      message: "What would you like to do?",
      choices: [
          "Post an item",
          "Bid on an item"
      ]
    }
]).then(function(data) {

}
)
    