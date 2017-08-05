const loginCommands = {
  login(email, pass) {
    return this
      .waitForElementVisible('@emailInput')
      .setValue('@emailInput', email)
      .waitForElementVisible('@passInput')
      .setValue('@passInput', pass)
      .waitForElementVisible('@loginButton')
      .click('@loginButton');
  }
};

export default {
  url: 'https://kirkpatrick-recipes.surge.sh',
  commands: [loginCommands],
  elements: {
    emailInput: {
      selector: 'input[type=email]'
    },
    passInput: {
      selector: 'input[name=password]'
    },
    loginButton: {
      selector: 'button[type=submit]'
    }
  }
};
