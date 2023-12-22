// Function to return a license badge based on the license type
function renderLicenseBadge(license) {
  // Implement logic to return the appropriate license badge
}

// Function to return the license link
function renderLicenseLink(license) {
  // Implement logic to return the appropriate license link
}

// Function to return the license section of the README
function renderLicenseSection(license) {
  // Implement logic to return the appropriate license section
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `
# ${data.title}

## Description
${data.description}

${licenseBadge}  ${licenseLink}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${licenseSection}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
