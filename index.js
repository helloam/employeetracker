const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
require("dotenv").config();


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: "employees_db"
});

connection.connect(function(err) {
    if(err) throw err;
    init();
});

function init () {
    inquirer.prompt ([
        {
            type: "list",
            message: "What action do you want to take?",
            name: "options",
            choices: [
                "Add new employee",
                "Add new role",
                "Add new department",
                "View all employees",
                "View all roles",
                "View all departments",
                "Update employee role",
                "Exit"]} 
            ]).then((answers) => {
                if(answers.options === "Add new employee") {
                    addEmployee();
                } else if(answers.options === "Add new role") {
                    addRole();
                } else if(answers.options === "Add new department") {
                    addDepartment();
                } else if(answers.options === "View all employees") {
                    viewEmployees();
                } else if(answers.options === "View all roles") {
                    viewRoles();
                } else if(answers.options === "View all departments") {
                    viewDepartments();
                } else if(answers.options === "Update employee role") {
                    updateEmployeeRole();
                } else if(answers.options === "Exit"){
                    connection.end();
                }
                })
            }


const addEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "newEmployee",
            message: "What is the name of the employee?"
        },
        {
            type: "input",
            name: "newRoleId",
            message: "What is the role ID of this employee?"
        },
        {
            type: "input",
            name: "newManagerId",
            message: "What is the ID of this employee's manager?"
        },
    ]).then((answers) => {
        connection.query (
            "INSERT INTO employee SET?",
            {
                employee_name: answers.newEmployee,
                role_id: answers.newRoleId,
                manager_id: answers.newManagerId
               
            }, (err) => {
                if(err) throw err;
                console.log("Employee addition successful.");
                init();
            }
        );
        });
}

const addRole = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "newRole",
            message: "What is the title of the role?"
        },
        {
            type: "input",
            name: "newSalary",
            message: "What is the salary amount for this role?"
        },
        {
            type: "input",
            name: "departmentID",
            message: "What is the department ID for this role?"
        }
    ]).then((answers) => {
        connection.query(
            "INSERT INTO roles SET?",
            {
                title: answers.newRole,
                salary: answers.newSalary,
                department_id: answers.departmentID
            }, (err) => {
                if(err) throw err;
                console.log("Role addition successful.");
                init();
            }
        );
    });
}

const addDepartment = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "newDepartment",
            message: "What is the name of the department?"
        }
    ]).then((answers) => {
        connection.query (
            "INSERT INTO department SET?",
            {
                department_name: answers.newDepartment
            }, (err) => {
                if(err) throw err;
                console.log("Department addition successful.");
                init();
            }
        );
        });
}

const viewEmployees = () => {
    connection.query("SELECT * FROM employee", (err, res) => {
        if(err) throw err;
        console.table(res);
        init();
    })
}
const viewRoles = () => {
    connection.query("SELECT * FROM roles", (err, res) => {
        if(err) throw err;
        console.table(res);
        init();
    })
}
const viewDepartments = () => {
    connection.query("SELECT * FROM department", (err, res) => {
        if(err) throw err;
        console.table(res);
        init();
    })
}

const updateEmployeeRole = () => {
    connection.query("SELECT * FROM employee", function (err, res) {
        if(err) throw err;
        inquirer.prompt([
            {
                name: "updatedRole",
                type: "list",
                message: "Which employee's role do you need to update?",
                choices: function () {
                    let choiceList = [];
                    for (var i = 0; i < res.length; i++) {
                        choiceList.push(res[i].employee_name);
                    }
                    return choiceList;
                }
            
            }
        ])
        .then(function(answer) {
            inquirer.prompt([
                {
                    name: "updateRole",
                    type: "input",
                    message: "What is there employee ID for this new role?"
                },
            ])
            .then(function (newRole) {
                connection.query("UPDATE employee SET role_id = ? WHERE employee_name = ?", [newRole.updateRole, answer.updatedRole]);
                console.log("Employee role update succesful.");
                init();
            })
        });
    })
};

       
 

