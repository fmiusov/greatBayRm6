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

// into a function where the user is sent back to if bid failed (startingState)
inquirer.prompt([
    {
      type: "checkbox",
      name: "userAction",
      message: "What would you like to do?",
      choices: [
          "Post an item",
          "Bid on an item",
          "Quit"
      ]
    }
]).then(function (answers) {
    console.log('----- ' + answers.choices + ' -----')
    if (answers.choice[0] === "Post an item") {
        postAnItem()
    } else if (answers.choice[1] === "Bid on an item") {
        bidAnItem()
    } else {
    displayDb()
    }
  });
    // If user selects Post Item
    // Prompt user for item name, description, starting bid
    // CREATE SQL inside postAnItem function


    // If user selects Bid on Item
    // run bidAnItem function
    // Run SQL query to display full table of items
    // User selects item id that they want to bid on
    // When id is chosen, run SQL query to display just that item (using item id)
    // Inquirer prompt asking how much they would like to bid
    // Their input needs to be compared to the current highest bid (conditional statement)
    // Success - Condition where user bid is higher
    // Success condition involves UPDATE SQL and then display updated table (using id)
    // Failure - Let user know their bid is equal/lower, send them back to initial prompt
}
)
    