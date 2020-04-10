function generateMarkdown(answers, response) {
  return `
  # ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents
  ${answers.contents.join("\n")}

  ### Installation
  ${answers.installation}

  ### Usage
  ${answers.usage}

  ### Credits
  ${answers.credits}

  ### License 
  ${answers.license}

  ### Badge
  ![badge](${answers.badge})

  ### Tests
  ${answers.tests}

  ### Questions
  ![GitHub profile image](${response.data.avatar_url}=100x100)\n
  email= ${response.data.email}

`;
}

module.exports = generateMarkdown;
