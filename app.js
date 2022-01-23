const { writeFile, copyFile } = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./page-template.js');

const askUser = () => {
    return inquirer.prompt([
        {
           type: 'input',
           name: 'name',
           message: 'What is the title of your project (Required)',
           validate: titleInput => {
               if (titleInput) {
                   return true;
                } else {
                    console.log('Please enter title of your project');
                    return false;
                }
           }
        },
        {
            type: 'checkbox',
            name: 'sections',
            message: 'Please pick sections that you want to include (recommendation: include all of them)',
            choices: ['Description', 'Table of Contents', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions']
        }
    ])
}

askUser()
.then(portfolioData => {
    return generatePage(portfolioData);
})

