const inquirer = require("inquirer");

function createQuestions(){
     return inquirer.prompt([
    {
        name: 'actions',
        message: 'INPUT CARD NAME',
        type: 'input',
    }
])
    .then((answers) => {
        return answers.actions;
    })
}
createQuestions();

module.exports = createQuestions;
