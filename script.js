const inquirer = require("inquirer");
const path = require ("path");
const fs = require ("fs");
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
    
]

inquirer.prompt (questions)
.then (function(response){
    let markdown = `${response.title}
## description 
${response.description}`

    fs.writeFileSync (path.join(process.cwd(),"newreadme.md"),markdown)
})