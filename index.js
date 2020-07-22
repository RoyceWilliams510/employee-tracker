var inquirer = require("inquirer");
var mysql = require("mysql");
var cTable = require('console.table');
const util = require("util");
// second connection 
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
  })


const employeePrompts = ["what is the employee's first name: "
,"What is the employee's last name: ",
"What is this manager's office number: ",
"What is this engineer's github username: ",
"What school did this intern attend: "]

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

const logic = () =>{
    init();
}
async function init(){
    const {choice} = await inquirer.prompt({
        type: "list",
        message:"What would you like to do? ",
        name: "choice",
        choices: prompts
    })
    if(choice===prompts[0]){
        viewAll();
    }
    if(choice===prompts[1]){
        viewByDepartment();
    }
    if(choice===prompts[2]){
        addEmployee()
    }
    if(choice===prompts[3]){
        updateEmployeeRole();
    }
    if(choice===prompts[4]){
        updateEmployeeManager();
    }
    if(choice===prompts[5]){
        deleteEmployee();
    }
    if(choice===prompts[6]){
        addDepartment();
    }
    if(choice===prompts[7]){
        deleteDepartment();
    }
    if(choice===prompts[8]){
        addRole();
    }
    if(choice===prompts[9]){
        deleteRole();
    }

}

async function viewAll(){
    connection.query("SELECT * FROM employees", function(err, res) {
        if (err) throw err;
        console.table(res);
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

async function addEmployee(){
    const {name} = await inquirer.prompt({
        message: prompts[0],
        name: "name"
    })
}


async function updateEmployeeRole(){

}

async function updateEmployeeManager(){

}

async function deleteEmployee(){

}

async function addDepartment(){

}

async function deleteDepartment(){

}

async function addRole(){

}

async function deleteRole(){

}


module.exports = logic
