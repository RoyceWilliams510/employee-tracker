// Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require('console.table');


// Prompts and globals 

const prompts = [
    "View all employees",
    "View all employees by department",
    "Add employee",
    "Update employee role",
    "Update employee manager",
    "Delete employee",
    "Add department",
    "Delete department",
    "Add role",
    "Delete role"
]

const employeePrompts = ["what is the employee's first name: ",
"What is the employee's last name: ",
"What is this employee's role: ",
"Who is this employee's manager: "
]


// My sql connection

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
  console.log("Welcome to Employee Tracker, the terminal ran application for managing your business!");
  console.log("For starters, here's a table of all of your current employees.");
  console.log("---------------------------------------------------");
  viewAll();
})


// first user prompt
async function init(){
    const {choice} = await inquirer.prompt({
        type: "list",
        message:"What would you like to do? ",
        name: "choice",
        choices: prompts
    })
    if(choice===prompts[0]){viewAll();}
    if(choice===prompts[1]){viewByDepartment();}
    if(choice===prompts[2]){formatEmployees(1)}
    if(choice===prompts[3]){formatEmployees(2);}
    if(choice===prompts[4]){formatEmployees(3);}
    if(choice===prompts[5]){formatEmployees(4);}
    if(choice===prompts[6]){addDepartment();}
    if(choice===prompts[7]){deleteDepartment();}
    if(choice===prompts[8]){addRole();}
    if(choice===prompts[9]){deleteRole();}
}


// All of our crud functions
async function viewAll(){
    var query = "SELECT employees.id, employees.first_Name, employees.last_Name, roles.title FROM employees INNER JOIN roles ";
    query += "ON (employees.role_id = roles.id)"
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        console.log("---------------------------------------------------");
        init();
    })
}

async function viewByDepartment(){
    connection.query("SELECT * FROM department", function(err, res) {
        if (err) throw err;
        console.table(res);
        init();
    })
}

async function addEmployee(roles,managers){
    console.log(roles);
    const {firstName} = await inquirer.prompt({
        message: employeePrompts[0],
        name: "firstName"
    })
    const {lastName} = await inquirer.prompt({
        message: employeePrompts[1],
        name: "lastName"
    })
    const {roleId} = await inquirer.prompt({
        type: "list",
        message: employeePrompts[2],
        choices: roles,
        name: "roleId"
    })
    console.log(roleId)
    const {managerId} = await inquirer.prompt({
        type: "list",
        message: employeePrompts[3],
        choices: managers,
        name: "managerId"
    })
    console.log(managerId);
    var query = connection.query(
        "INSERT INTO employees SET ?",
        {
          first_Name: firstName,
          last_Name: lastName,
          role_id: roleId,
          manager_id:managerId
        },
        function(err, res) {
          console.log(res.affectedRows + " employee added!\n");
          console.log("---------------------------------------------------");
          init();
        })
}


async function updateEmployeeRole(employees){
    console.log("updateEmployeeRole");
    console.log(employees);
}

async function updateEmployeeManager(employees){
    console.log("updateEmployeeManager");
    console.log(employees);

}

async function deleteEmployee(employees){
    console.log("deleteEmployee");
    console.log(employees);
    const {employeeId} = await inquirer.prompt({
        type: "list",
        message: "Select the employee you would like to delete:",
        choices: employees,
        name: "employeeId"
    })
    console.log(employeeId);
    connection.query(
        "DELETE FROM employees WHERE ?",
        {
          id: employeeId
        },
        function(err, res) {
          console.log("You have successfully removed them from your roster.");
          console.log("---------------------------------------------------");
          init();
        })

}

async function addDepartment(){

}

async function deleteDepartment(){

}

async function addRole(){

}

async function deleteRole(){

}

async function formatEmployees(signal){
    await connection.query("SELECT first_Name,last_Name,id FROM employees", function(err, res) {
        var employees = []
        for(var i =0; i<res.length; i++){
            var firstName =res[i].first_Name.concat(" ");
            var fullName = firstName.concat(res[i].last_Name);
            var employee = {name: fullName, value: res[i].id }
            employees.push(employee);
        }
       
        if(signal===1){
            var pass = {name: "No Manager", value: null}
            employees.push(pass);
            formatRoles(employees);
        }
        if(signal===2){
            updateEmployeeRole(employees);
        }
        if(signal===3){
            var pass = {name: "No Manager", value: null}
            employees.push(pass);
            updateEmployeeManager(employees);
        }
        if(signal===4){
            deleteEmployee(employees);
        }
    })
}
async function formatRoles(managers){
    await connection.query("SELECT title,id FROM roles", function(err, res) {
        var roles = []
        for(var i =0; i<res.length; i++){
            var role = {name: res[i].title, value: res[i].id }
            roles.push(role);
        }
        addEmployee(roles,managers);
    })
}