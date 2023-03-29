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
    return '';
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  {title, description, installation, usage, contribute, tests, github, email}
  return `# ${data.title}
  # ${title}

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Tests](#Tests)
  - [Contribute](#Contribute)
  - [Credits](#Credits)
  - [License](#License)
  
  ## Description
  ${description}
  
  ## Installation
  Installations required: <br />
  ${install}
  
  ## Usage
  ${usage}
  
  ## Tests
  Tests needed are: <br />
  ${test}
  
  ## Contribute
  ${contribution}
  
  ## Credits
  Created by Jessie Galindo. Email: ${email}. Github: [${username}](https://github.com/${username}).
  
  ## License
  ${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;
