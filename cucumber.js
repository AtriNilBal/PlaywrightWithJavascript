const options = [
    '--require features/stepDefinitions/*.js',
    '--require features/support/*.js',
    '--format progress',
    '--format json:reports/cucumber-report.json',
].join(' ');
const features = ['features/', options].join(' ');
module.exports = {
 default: features,
};