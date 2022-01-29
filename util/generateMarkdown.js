// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, licenseChoices) {
  if (license == licenseChoices[0]){
    var bag = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
  } else if (license == licenseChoices[1]){
    var bag = "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (license == licenseChoices[2]){
    var bag = "https://img.shields.io/badge/License-IPL_1.0-blue.svg";
  } else {  
    var bag = "";
 }

 return "![GitHub license](" + bag + ")";
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, licenseChoices) {
 if (license == licenseChoices[0]){
   var lic = "https://opensource.org/licenses/Apache-2.0";
 } else if (license == licenseChoices[1]){
   var lic = "https://opensource.org/licenses/MIT";
 } else if (license == licenseChoices[2]){
   var lic = "https://opensource.org/licenses/IPL-1.0";
 } else {
   var lic = "";
 }
 
 return "[View License](" + lic + ")";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, licenseChoices) {
 if (license == "None"){
   return "";
 }
 var badge = renderLicenseBadge(license, licenseChoices);
 var link = renderLicenseLink(license, licenseChoices);

 return badge + " \r" + link + " ";
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data, licenseChoices) {
 var sec = renderLicenseSection(data.License, licenseChoices);

 return `# ${data.Title}
 
 ## ${sec}
 
 # GitHub Repository Link

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

 # Screenshot
 ![alt text](assets/images/screenshot.png)

 # Installation
 The following must be installed to run this application.
 ${data.Installation}

 # Usage
 In order to use this app, ${data.Usage}

 # License 
 > This project is licensed under the ${data.License} license.
 >
 > Click the above link adjacent to badge to read further details.
 

 # contributing
 Contributors: ${data.Contribution}

 # Tests
 The following is needed to run the test: ${data.Tests}

 # Questions
 If you have any questions about the repo/project, please open an issue or contact by: 
 
 my github username: [${data.Github}](https://github.com/${data.Github}) 
 
 my email: ${data.Email}
 
`;
}

module.exports = generateMarkdown;
