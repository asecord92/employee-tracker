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
    ON roles.department_id = department_id
    GROUP BY (id)
    ORDER BY last_name `;
    const result =  await db.execute(sql);
    return result[0];
};

async function getDepartment() {

};

async function getRoles() {

};

async function addRole() {

};

async function addDepartment() {

};

async function addEmployee() {

};

async function updateEmployee() {

};


 module.exports = {getEmployees, getDepartment, getRoles, addRole, addDepartment, addEmployee, updateEmployee};