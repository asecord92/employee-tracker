const menu = [
    {
        type: 'list', 
        name: 'menu', 
        message: 'What would you like to do?',
        choices: [
            "View All Employees",
            "View All Departments",
            "View All Roles",
            "Add Department", 
            "Add Role",
            "Add Employee", 
            "Update Employee Role"
        ]
    }
]

const newRole = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter new role title:'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'Input Salary:'
    }
]

const newDept = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter new department name:'
    }
]

const newEmployeeQ = [
    {
        type: 'input',
        name: 'first_name',
        message: 'Please enter employees first name:'
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'Please enter employees last name:'
    }
]

module.exports = {menu, newRole, newDept, newEmployeeQ};