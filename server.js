const mysql = require("mysql")
const inquirer = require("inquirer");
const consoleTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "savage",
    database: "employee_DB"
  });
  
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as ID "+ connection.threadId);
    
    startPrompt();
});


function startPrompt() {
    inquirer.prompt({
        name: "tracker", 
        type: "list",
        message: "What would you like to do?",
        choices: ["Add Department", "Add Role", "Add Employee", "View Departments", "View Roles","View Employees", "Update Employee Role", "Exit"]
    }).then(function (answer){
        console.log("You Selected: "+ answer.tracker);

        switch (answer.tracker){
            case "Add Department":
                addDepartment();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "View Departments":
                viewDepartments();
                break;
            case "View Roles":
                viewRoles();
                break;
            case "View Employees":
                viewEmployees();
                break;
            case "Update Employee Role":
                updateRole();
                break;
            default:
                exit();
        }

        }
    );
}



