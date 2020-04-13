const assert = require('assert');
const LoginPage = require('../pages/loginPage');

const loginPage = new LoginPage();

describe('User', () => {
  beforeSuite('', () => {
    console.log('BEGIN SUITE EXECUTION...');
    loginPage.launchApp();
  });

  afterSuite('', () => {
    console.log('END SUITE EXECUTION...');
    loginPage.closeApp();
  });

  it('should be able to login', () => {
    loginPage.login('test@test.com', 'Password');
    assert(loginPage.isLoggedIn());
  });
});
