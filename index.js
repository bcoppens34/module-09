const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a project description:',
    },
    // Add more prompts for other sections (installation, usage, license, etc.)
    // Customize the prompts based on the sections you want in the README
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`${fileName} file generated successfully!`);
        }
    });
}

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // Use the provided answers to structure the README content
            const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions, feel free to reach out:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
            `;

            // Write the generated content to a README file
            writeToFile('README.md', readmeContent);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function call to initialize app
init();
