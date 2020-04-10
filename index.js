const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "username"
    },
    {
        type: "input",
        name: "title",
        message: "What is the project title?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the project description?"
    },
    {
        type: "checkbox",
        name: "contents",
        message: "What should be in the table of contents?",
        choices: [
            "* [Installation](#installation)",
            "* [Usage](#usage)",
            "* [Credits](#credits)",
            "* [License](#license)",
            "* [Badges](#badges)",
            "* [Tests](#tests)",
            "* [Questions](#questions)"
        ]
    },
    {
        type: "input",
        name: "installation",
        message: "How is the project installed?"
    },
    {
        type: "input",
        name: "usage",
        message: "How is the project used?"
    },
    {
        type: "input",
        name: "credits",
        message: "Are there any collaborators?"
    },
    {
        type: "input",
        name: "license",
        message: "How is the project licenced?"
    },
    {
        type: "list",
        name: "badge",
        message: "Would you like a badge?",
        choices: [
            "https://img.shields.io/badge/javascript-100%25-blue",
            "https://img.shields.io/badge/gluten-free-green",
        ]
    },

    {
        type: "input",
        name: "tests",
        message: "How was the project tested?"
    },
];

function promptUser() {
    return inquirer.prompt(questions);
}

promptUser()
    .then(function (answers) {
        return api.getUser(answers.username).then(function (response) {
            const md = generateMarkdown(answers, response);

            return writeFileAsync("README.md", md);
        })

    })
    .then(function () {
        console.log("file generated");
    })
    .catch(function (err) {
        console.log(err);
    })
