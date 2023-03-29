// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    "What is your GitHub username?",
    "What is your email address?",
    "What is your project's name?",
    "Please write a short description for your project.",
    "What kind of license should your project have?",
    "What command should be run to install dependencies?",
    "What command should be run to run tests?",
    "What does the user need to know about using the repo?",
    "What does the user need to know about contributing to the repo?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("README file successfully generated!");
        };
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'username'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'email'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'description'
        },
        {
            type: 'list',
            message: questions[4],
            name: 'license',
            choices: [
                'MIT',
                'APACHE 2.0',
                'GPL 3.0',
                'BSD 3',
                'None'
            ]
        },
        {
            type: 'input',
            message: questions[5],
            name: 'install',
            default: 'npm i'
        },
        {
            type: 'input',
            message: questions[6],
            name: 'test',
            default: 'npm test'
        },
        {
            type: 'input',
            message: questions[7],
            name: 'usage'
        },
        {
            type: 'input',
            message: questions[8],
            name: 'contribution'
        },
    ])
    .then((answers) => {
        console.log(answers);
        const data = generateMarkdown(answers)
        writeToFile("README.md", data)
    })
};

// Function call to initialize app
init();
