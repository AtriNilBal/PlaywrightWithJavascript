const playwrightVersion = require('playwright/package.json').version;

const capsChromeOsX = {
    browser: 'chrome',
    os: 'osx',
    os_version: 'monterey',
    'browserstack.username': 'atrinilbal_moCzgQ',
    'browserstack.accessKey': 'EYEsGefYFcrgY9GtiNjf',
    'client.playwrightVersion': playwrightVersion,
    projectName: 'playwrightwithjavascript',
    buildName: 'Chrome-On-OsX',
    "browserstack.local": false
};

module.exports = {capsChromeOsX};