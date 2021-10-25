const menu = [
    {
        type: 'list', 
        name: 'menu', 
        message: 'What would you like to do?',
        choices: [
            "View All Employees",
            "View ALL Departments",
            "View All Roles",
            "Add Department", 
            "Add Role",
            "Add Employee", 
            "Update Employee"
        ]
    }
]

module.exports = {menu};