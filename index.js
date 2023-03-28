// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    "What is your GitHub username?",
    "What is your email address?",
    "What is your project's name?",
    "Please write a short description fo your project.",
    "What kind of license should your project have?",
    "What command should be run to install dependencies?",
    "What command should be run to run tests?",
    "What does the user need to know about using the repo?",
    "What does the user need to know about contributing to the repo?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readme = `# ${data["project-title"]}`;
    fs.writeFile(fileName, readme, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("README file generated successfully!");
        };
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", data);
    });
};

// Function call to initialize app
init();
