// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![](https://img.shields.io/badge/license-MIT-brightgreen)";
  } else if (license === "APACHE 2.0") {
    return "![](https://img.shields.io/badge/license-APACHE_2.0-brightgreen)";
  } else if (license === "GPL 3.0") {
    return "![](https://img.shields.io/badge/license-GPL_3.0-brightgreen)";
  } else if (license === "BSD 3") {
    return "![](https://img.shields.io/badge/license-BSD_3-brightgreen)";
  } else if (license === "None") {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  }
  return "* [License](#license)";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }
  return `## License
  
  This application is licensed under ${license}. To view terms and conditions, then please [visit this link](https://choosealicense.com/).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  {
    data.username,
      data.email,
      data.title,
      data.description,
      data.license,
      data.install,
      data.test,
      data.usage,
      data.contribution;
  }
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ${renderLicenseLink(data.license)}
  
  ## Installation
  
  To install necessary dependencies, run the following command: ${data.install}
  
  ## Usage

  ${data.usage}
  
  ## Contributing

  ${data.contribution}

  ## Tests
  
  To run tests, run the following command: ${data.test}
  
  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at [${data.username}](https://github.com/${
    data.username
  }/).

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
