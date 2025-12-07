const{ chromium, firefox, webkit, devices } = require('playwright');
const { BeforeAll, Before } = require('@cucumber/cucumber');

let browser, context, page, mobile;
let isMobile;

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
        case 'webkit-mobile':
            isMobile = true;
            mobile = devices['iPhone 11'];
            browser = await webkit.launch({headless:false});
            break;
        case 'chromium-mobile':
            isMobile = true;
            mobile = devices['Galaxy S5'];
            browser = await chromium.launch({headless:false});
            break;        
        default:
            browser = await chromium.launch({headless: false, launch:{args:['--start-fulscreen']}});
    }
    
});

Before(async function() {
    if(isMobile) {
        context = await browser.newContext({
            ...mobile
        })
    } else {
        context = await browser.newContext();
    }
    page = await context.newPage();
    this.page = page;
});