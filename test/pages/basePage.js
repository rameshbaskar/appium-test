class BasePage {
  constructor() {}

  visit(url) {
    console.log(`Launching url ${url} using the default browser...`);
    browser.url(url);
  }

  launchApp() {
    console.log('Opening the app using the available config...');
    browser.launchApp();
  }

  closeApp() {
    console.log('Closing the app...');
    browser.terminateApp();
  }

  writeInto(elIdentifier, value) {
    console.log(`Setting value ${value} into element identified by ${elIdentifier}`);
    $(elIdentifier['strategy'], elIdentifier['value']).setValue(value);
  }

  click(elIdentifier) {
    console.log(`Clicking on element identified by ${elIdentifier}`);
    $(elIdentifier['strategy'], elIdentifier['value']).click();
  }

  hasContent(content) {
    console.log(`Checking if content ${content} is available...`);
    return browser.getPageSource().includes(content);
  }
}

module.exports.BasePage = BasePage;
