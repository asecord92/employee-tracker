
const inquirer = require('inquirer');
const { menu, newRole, newDept, newEmployeeQ } = require('./lib/questions');

const {getEmployees, getDepartment, getRoles, addRole, addDepartment, addEmployee, updateEmployee} = require('./db/connection')


function mainMenu () {
    return inquirer
    .prompt(menu)
    .then((answer) => {
        console.log(answer);
        switch (answer.menu) {
            case "View All Employees":
                console.clear();
                getEmployees().then((employees)=>{
                    console.table(employees);
                    return mainMenu();
                });
                break;
            case "View All Departments":
                console.clear();
                getDepartment().then((department)=>{
                   console.table(department);
                    return mainMenu();
                });
                break;
            case "View All Roles":
                console.clear();
                getRoles().then((roles) => {
                    console.table(roles);
                    return mainMenu();    
                });
                break;
            case "Add Role":
                console.clear();
                return newRoles();
            case "Add Department":
                console.clear();
                return newDepartment();
            case "Add Employee":
                console.clear();
                return newEmployee();

        };
    });
};
function newRoles() {
    let roleQuestions = newRole;
    getDepartment()
    .then((departments) => {
        roleQuestions.push(selectDepartmentQuestion(departments));
        return inquirer.prompt(roleQuestions)
    })
    .then((answers) => {
        const { title, salary, department_id} = answers;
        addRole(title, salary, department_id).then((results) => {
            return mainMenu();
        })
        .catch((err) => console.error(err));
        
    });
}

function newDepartment() {
    inquirer
    .prompt(newDept)
    .then((answers)=>{
        const {name} = answers;
        addDepartment(name).then((results) =>{
            return mainMenu();
        })
    })
    
}
function newEmployee() {
    let employeeQ = newEmployeeQ;
    getRoles()
    .then((roles) => {
        employeeQ.push(selectRoleQuestion(roles));
        getDepartment()
        .then((department) => {
            employeeQ.push(selectDepartmentQuestion(department));
            return inquirer.prompt(employeeQ);
        })
        .then((answers) => {
            const {first_name, last_name, role_id } = answers;
            addEmployee(first_name, last_name, role_id).then((result)=> {
                return mainMenu();
            });
        });
        
    })

};
function selectRoleQuestion(roles) {
    let options = [];
    for (const {Title, Role_ID} of roles){
        const option = {
            name: Title,
            value: Role_ID,
        };
        options.push(option);
       

    }
    return {
        type: "list",
        name: "role_id",
        message: "Select Employee Role",
        choices: options
    }
    
}

function selectDepartmentQuestion(departments) {
    console.log(departments)
    let options = [];
    for (const {Department, id} of departments){
        const option = {
            name: Department,
            value: id,
        };
        options.push(option);
    }
    return {
        type: "list",
        name: "department_id",
        message: "Select Department",
        choices: options
    };
    
};
mainMenu();


