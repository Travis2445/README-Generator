// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(data) {
  const licenseType = data.license[0];
  let licenseString = "";

  if(licenseType === "MIT") {
    licenseString = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  };

  if(licenseType === "GNU General Public License 2.0") {
    licenseString = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  };

  if(licenseType === "GNU General Public License 3.0") {
    licenseString = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  };

  if(licenseType === "Apache License 2.0") {
    licenseString = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  };

  return licenseString;
};

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#installation)
  3. [Usage](#usage)  
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [License](#license)
  7. [GitHub](#gitHub)
  8. [E-mail](#e-mail)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  ${renderLicense(data)}

  ## GitHub
  https://github.com/${data.github}

  ## E-mail
  ${data.email}

  `;
}

module.exports = generateMarkdown;
