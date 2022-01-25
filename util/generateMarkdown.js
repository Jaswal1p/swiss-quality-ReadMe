// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  https://github.com/${data.Github}/${data.Title}

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  # Description
  ${data.Description}
  

  # Installation
  The following must be installed to run this application.
  # Usage
  In order to use this app, ${data.Usage}
  # License
  This project is licensed under the ${data.License} license.
  ![GitHub license](https://img.shield.io/badge/license-MIT-blue.svg)
  # contributing
  Contributors: ${data.Contributing}
  # Tests
  The following is needed to run the test: ${data.Tests}
  # Questions
  If you have any questions about the repo/project, please open an issue or contact by my github username: ${data.Github} or my email: ${data.Email}
  
 `;
}

module.exports = generateMarkdown;
