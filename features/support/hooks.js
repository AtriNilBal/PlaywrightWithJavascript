const{ chromium, firefox, webkit, devices } = require('playwright');
const { BeforeAll, Before, After, setDefaultTimeout, Status } = require('@cucumber/cucumber');

let browser, context, page, mobile;
let isMobile;

setDefaultTimeout(60 * 1000);

Before(async function() {
    console.log('In Before hook: Launching browser/context for scenario.');
    await this.launch();
});

After(async function(scenario){
    if(scenario.result?.status === Status.FAILED) {
        const screenshot = await this.page.screenshot({ fullPage: true, path: `reports/screenshots/${scenario.pickle.name.replace(/\s/g, '_')}.png`})
        await this.attach(screenshot, 'image/png');
    }
    // Handle Browser stack session status setting here if required
});