const { writeFile, copyFile, fstat } = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown.js');

//const pageHTML = generatePage(name, description);

// fs.writeFile('./index.html', pageHTML, err => {
    // if (err) throw err;

    //console.log('page complete! checkout index.html')
// });

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
            type: 'input',
            name: 'description',
            message: 'describe your project',


        },
        {
            type: 'checkbox',
            name: 'sections',
            message: 'Please pick sections that you want to include (recommendation: include all of them)',
            choices: ['Description', 'Table of Contents', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions']
        }
    ])
}

const askSection = portfolioData => {
    console.log(`
    ==================
    Add a New Section
    ==================  
    `);
  
    // If there's no 'sections' array property, create one
    if (!portfolioData.sections) {
      portfolioData.sections = [];
    }
  
    return inquirer.prompt([
      {
        type: 'input',
        name: 'Instal',
        message: 'Please add installation instructions here (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter installation instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide use case for this project (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('You need to provide use case for this project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for this project (Required)',
        validate: contributionInput => {
            if (contributionInput) {
              return true;
            } else {
              console.log('You need to provide contribution guidelines!');
              return false;
            }
          }
  
      },
      {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions for this project (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
    //   {
    //     type: 'confirm',
    //     name: 'feature',
    //     message: 'Would you like to feature this section?',
    //     default: false
    //   },
    //   {
    //     type: 'confirm',
    //     name: 'confirmAddProject',
    //     message: 'Would you like to enter another section?',
    //     default: false
    //   }
    ])

    .then(sectionData => {
        portfolioData.sections.push(sectionData);
        
    });
}

askUser()
.then(askSection)
.then(portfolioData => {
    return generatePage(portfolioData);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
})
.then(copyFileResponse => {
    console.log(copyFileResponse);
})
.catch(err => {
    console.log(err);
});
