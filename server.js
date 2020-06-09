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
        choices: ["Add Department", "Add Role", "Add Employee", "View Departments", "View Roles", "View Employees", "Update Employee Role", "Exit"]
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
            // case "View Departments":
            //     viewDepartments();
            //     break;
            // case "View Roles":
            //     viewRoles();
            //     break;
            // case "View Employees":
            //     viewEmployees();
            //     break;
            // case "Update Employee Role":
            //     updateEmployeeRole();
            //     break;
            default:
                exit();
        }

        }
    );
}

function addDepartment(){
    inquirer.prompt({
        type: "input",
        message: "Enter the name of the department to be added:",
        name: "departmentName"
    }).then (function(answer) {
        connection.query("INSERT INTO department (name) VALUES (?)", [answer.departmentName], function(err, res) {
            if (err) throw err;
            console.table(res)
            console.log("Successfully added Department!");
            startPrompt(); 
    })
});
}

function addRole(){
    inquirer.prompt({
        type: "input",
        message: "Enter the name of the role to be added:", 
        name: "nameRole"    
    },
    {
        type: "input",
        message: "Enter the salary of the role: ",
        name: "roleSalary"
    },
    {
        type: "input",
        message: "Enter the department id number: ",
        name: "idNum"
    }).then (function(answer){
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?)",
        [answer.nameRole, answer.roleSalary, answer.idNum],
        function (err, res){
            if (err) throw err;
            console.table(res);
            console.log("Role Added");
            startPrompt();
        });
    });
}

function addEmployee(){
    inquirer.prompt({
        type: "input",
        message: "Enter the first name of the Employee:", 
        name: "firstName"    
    },
    {
        type: "input",
        message: "Enter the last name of the Employee: ",
        name: "lastName"
    },
    {
        type: "input",
        message: "Enter the employee's role ID: ",
        name: "roleId"
    },
    {
        type: "input",
        message: "Enter the manager ID: ",
        name: "managerId"
    }
    ).then (function(answer){
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)",
        [answer.firstName, answer.lastName, answer.roleId, answer.managerId],
        function (err, res){
            if (err) throw err;
            console.table(res);
            console.log("Employee Added");
            startPrompt();
        });
    });
}

function exit(){
    connection.end();
    process.exit();
}

