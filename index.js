const inquirer = require('inquirer');
const read = require('./read');
const create = require("./create");
const update = require("./update");
const del = require("./delete");


async function start() {
   await inquirer.prompt([
        {
            name: 'actions',
            message: 'What do you want me to do?',
            type: 'list',
            choices: ['CREATE', 'READ', 'UPDATE', 'DELETE']
        }
    ])
        .then((answers) => {
            console.log(answers)
            if(answers.actions === 'CREATE') { create() }
            if(answers.actions === 'READ') { read() }
            if(answers.actions === 'UPDATE') { update() }
            if(answers.actions === 'DELETE') { del() }
        })
        .catch(err => console.log('error'))
    start();
}

start();