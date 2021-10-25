
const inquirer = require('inquirer');
const { menu } = require('./lib/questions');

const { getEmployees } = require('./db/connection')


function mainMenu () {
    return inquirer
    .prompt(menu)
    .then((answer) => {
        console.log(answer);
        switch (answer.menu) {
            case "View All Employees":
                console.log('test')
                getEmployees().then((employees)=>{
                    console.table(employees);
                    return mainMenu();
                });
                break;
            
        };
    });
};

function createTable(data) {
    console.log('-----------------------------------------------------');
    console.table(data);
    console.log('-----------------------------------------------------');
};
mainMenu();

