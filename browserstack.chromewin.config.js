const playwrightVersion = require('playwright/package.json').version;

const capsChromeWin = {
    browser: 'chrome',
    os: 'windows',
    os_version: '11',
    'browserstack.username': 'atrinilbal_moCzgQ',
    'browserstack.accessKey': 'EYEsGefYFcrgY9GtiNjf',
    'client.playwrightVersion': playwrightVersion,
    projectName: 'playwrightwithjavascript',
    buildName: 'Chrome-On-Win',
    "browserstack.local": false
};

module.exports = {capsChromeWin};