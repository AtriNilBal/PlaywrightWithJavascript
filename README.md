Playwright with Javascript project

Installations:
1. Install node and npm
2. npm init playwright@latest

Executions:
1. run test with = npx playwright test
2. run filtered tests by tags = npx playwright test --grep "@<tagname>"
3. add test.only instead of test in spec file to run only the test case via = npx playwright test
4. to generate playwright report run = npx playwright show-report

Installations:
3. Install cucumber-js: npm install @cucumber/cucumber

Executions:
5. to run tagged cucumber feature = npx cucumber-js --tags "@<tagname>" --exit

Installation:
4. Install cross-env for providing runtime arguments to node scripts: npm install --save-dev cross-env

Executions:
6. to run tests sequentially = npm run test:sequential

Installation:
5. Install run-p package for parallel execution= npm install npm-run-all --save-dev

Executions:
7. to run tests parallely = npm run test:parallel

Installation:
6. Install multiple-cucumber-html-reporter package for reporting = npm i multiple-cucumber-html-reporter