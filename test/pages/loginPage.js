const BasePage = require('./basePage');

class LoginPage extends BasePage {
  constructor() {
    super();
    this.tbEmailAddress = {'strategy': 'accessibilityId', 'value': '~EmailAddress'};
    this.tbPassword = {'strategy': 'accessibilityId', 'value': '~Password'};
    this.btnLogin = {'strategy': 'accessibilityId', 'value': '~LoginSubmit'};
  }

  login(username, password) {
    super.writeInto(this.tbEmailAddress, username);
    super.writeInto(this.password, password);
    super.click(this.btnLogin);
  }

  isLoggedIn() {
    return super.hasContent('Welcome');
  }
}

module.exports.LoginPage = LoginPage;
