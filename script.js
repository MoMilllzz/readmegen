const inquirer = require("inquirer");
const path = require ("path");
const fs = require ("fs");
const Choices = require("inquirer/lib/objects/choices");
const questions = [
    {
        type: "input",
        name: "title",
        message: "what do you want to call your project"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a description about your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the steps required to install your project for the Installation section."
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples of your project in use for the Usage section."
    },
    {
        type: "input",
        name: "contributing",
        message: "Provide guidelines on how other developers can contribute to your project."
    },
    {
        type: "input",
        name: "tests",
        message: "Provide any tests written for your application and provide examples on how to run them."
    },
    //{
        //type: "input",
        //name: "license",
        //message: "Choose a license for your project."
        //choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense']
    //},
    
]

inquirer.prompt (questions)
.then (function(response){
    let markdown = `${response.title}
## description 
${response.description}`



    fs.writeFileSync (path.join(process.cwd(),"newreadme.md"),markdown)
})