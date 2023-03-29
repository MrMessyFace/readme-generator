// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const links = [
    ''
  ]

  if (license === 'MIT') {
    return links[0];
  } else if (license === 'APACHE 2.0') {
    return links[1];
  } else if (license === 'GPL 3.0') {
    return links[2];
  } else if (license === 'BSD 3') {
    return links[3];
  } else if (license === 'None') {
    return '';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = [
    '',
    '',
    ''
  ]
  
  if (license === 'MIT') {
    return links[0];
  } else if (license === 'APACHE 2.0') {
    return links[1];
  } else if (license === 'GPL 3.0') {
    return links[2];
  } else if (license === 'BSD 3') {
    return links[3];
  } else if (license === 'None') {
    return '';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let boilerplate = 'Distributed under the'

  if (license === 'MIT') {
    return;
  } else if (license === 'APACHE 2.0') {
    return;
  } else if (license === 'GPL 3.0') {
    return;
  } else if (license === 'BSD 3') {
    return;
  } else if (license === 'None') {
    return 'No license.';
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  {data.username, data.email, data.title, data.description, data.license, data.install, data.test, data.usage, data.contribution}
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies, run the following command: ${data.install}
  
  ## Usage

  ${data.usage}
  
  ## Contributing

  ${data.contribution}

  ## Tests
  
  To run tests, run the following command: ${data.test}
  
  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}/).
  
  ## License

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
