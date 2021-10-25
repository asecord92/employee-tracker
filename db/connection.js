const mysql = require('mysql2/promise');

const db =  mysql.createPool(
    {
        host: 'localhost',
        user: 'root',
        password: '!21Herbert21!',
        database: 'employees',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    },

    console.log('Connected to the Employee Database!')
);


async function getEmployees() {
    const sql =`SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, roles.title as Title, roles.salary as Salary, department.name as Department
    FROM employee
    INNER JOIN roles
    ON employee.role_id = roles.id
    LEFT JOIN department 
    ON roles.department_id = department.id
    GROUP BY (id)
    ORDER BY last_name `;
    const result =  await db.execute(sql);
    return result[0];
};

async function getDepartment() {
    const sql = `SELECT department.id, department.name AS Department FROM department`

    const result = await db.execute(sql);
    return result[0];
};

async function getRoles() {
    const sql = `SELECT roles.id as Role_ID, roles.title as Title, roles.salary,  department.name as Department
    FROM roles
    LEFT JOIN department
    ON roles.department_id = department.id`

    const result = await db.execute(sql);
    return result[0];
};

async function addRole(title, salary, department_id) {
    const sql = `INSERT INTO roles (title, salary, department_id)
    VALUES(?, ?, ?)`

    const params = [title, salary, department_id]

    const result = await db.execute(sql, params);
    return console.log("success");


};

async function addDepartment(name) {
    const sql = `INSERT INTO department (name)
    VALUES(?)`

    const params = [name];

    const result = await db.execute(sql, params);
    return console.log("success");

};

async function addEmployee(first_name, last_name, role_id) {
    const sql = `INSERT INTO employee (first_name, last_name, role_id)
    VALUES(?, ?, ?)`

    const params = [first_name, last_name, role_id]

    const result = await db.execute(sql, params);
    return console.log("success");
};

async function updateEmployee() {

};


 module.exports = {getEmployees, getDepartment, getRoles, addRole, addDepartment, addEmployee, updateEmployee};