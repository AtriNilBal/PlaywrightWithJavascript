const reporter = require('multiple-cucumber-html-reporter');
const fs = require('fs');
const path = require('path');
const os = require('os');

const reportsDir = './reports/';

function enrichJsonWithBrowser(filePath, browserName) {
    const jsonContent = fs.readFileSync(filePath, 'utf-8');
    const features = JSON.parse(jsonContent);

    features.forEach(feature => {
        feature.metadata = {
            browser: {
                name: browserName
            },
            device: 'Local Test Machine',
            platform: {
                name: os.platform(),
                version: os.release()
            }
        };
    });
    fs.writeFileSync(filePath, JSON.stringify(features, null, 2), 'utf-8');
}

if(fs.existsSync(path.join(reportsDir, 'chromium-report.json'))) {
    enrichJsonWithBrowser(path.join(reportsDir, 'chromium-report.json'), 'chrome');
}
if(fs.existsSync(path.join(reportsDir, 'firefox-report.json'))) {
    enrichJsonWithBrowser(path.join(reportsDir, 'firefox-report.json'), 'firefox');
}
if(fs.existsSync(path.join(reportsDir, 'webkit-report.json'))) {
    enrichJsonWithBrowser(path.join(reportsDir, 'webkit-report.json'), 'safari');
}

reporter.generate({
    jsonDir: reportsDir,
    reportPath: 'reports/html-report/',
    customData: {
        title: 'Cross-Browser Test Report',
        data: [
            {label: 'Project', value: 'Playwright Cucumber JS'}
        ],
    },
    launchReport: true,
    pageTitle: 'Cross-Browser Test Report',
    reportName: 'Playwright Sauce Labs Demo WebApplication Report'
});