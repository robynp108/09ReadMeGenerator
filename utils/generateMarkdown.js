function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents
  ${answers.contents}

  ### Installation
  ${answers.installation}

  ### Usage
  ${answers.usage}

  ### Credits
  ${answers.credits}

  ### License 
  ${answers.license}

  ### Badges
  ${answers.badges}

  ### Tests
  ${answers.tests}

  ### Questions
  ${response.data.avatar_url}
  ${response.data.email}

`;
}

module.exports = generateMarkdown;
