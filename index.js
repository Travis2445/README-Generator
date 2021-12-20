// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');
const process = require('process');

// TODO: Create an array of questions for user input
const questions = ["What is a good Title for your project?", "What is a good description of your project?", "How do you install your application?", "How do you use your application?", "What liscense did you use for this repository.", "How can people contribite to your project", "How do people update and tests your project?", "What is your Github username?", "What is an email address that users and contributers can send questions?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: `${questions[0]}`,
            name:"title"
        },
        {
            type: "input",
            message: `${questions[1]}`,
            name: "description"
        },
        {
            type: "input",
            message: `${questions[2]}`,
            name: "installation"
        },
        {
            type: "input",
            message: `${questions[3]}`,
            name: "usage"
        },
        {
            type: "checkbox",
            message: `${questions[4]}`,
            choices: ["MIT", "GNU General Public License 2.0","GNU General Public License 3.0", "Apache License 2.0"],
            name: "license"
        },
        {
            type: "input",
            message: `${questions[5]}`,
            name: "contributing"
        },
        {
            type: "input",
            message: `${questions[6]}`,
            name: "tests"
        },
        {
            type: "input",
            message: `${questions[7]}`,
            name: "github"
        },
        {
            type: "input",
            message: `${questions[8]}`,
            name: "email"
        }
    ])

    .then((response) => {
        return fs.writeFileSync(path.join(process.cwd(), 'README.md'), generateMarkdown(response));
    })

    .then ((response) => {console.log(response)});

}

// Function call to initialize app
init();
