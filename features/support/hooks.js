const{ chromium, firefox, webkit } = require('playwright');
const { BeforeAll, Before } = require('@cucumber/cucumber');

let browser, context, page;

BeforeAll(async function() {
    const browserName = process.env.BROWSER || 'chromium';
    switch (browserName) {
        case 'firefox':
            browser = await firefox.launch({headless:false, launch:{args:['--start-fulscreen']}});
            break;
        case 'webkit':
            browser = await webkit.launch({headless:false, launch:{args:['--start-fulscreen']}});
            break;
        case 'chromium':
            browser = await chromium.launch({headless: false, launch:{args:['--start-fulscreen']}});
            break;
        default:
            browser = await chromium.launch({headless: false, launch:{args:['--start-fulscreen']}});
    }
    
});

Before(async function() {
    context = await browser.newContext();
    page = await context.newPage();
    this.page = page;
});