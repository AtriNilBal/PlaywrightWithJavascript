console.log('Loading Custom World file');

const{ setWorldConstructor, World} = require('@cucumber/cucumber');
const{ chromium, firefox, webkit, devices} = require('playwright');
const { capsChromeOsX } = require('../../browserstack.chromeosx.config');
const { capsChromeWin } = require('../../browserstack.chromewin.config');


class CustomWorld extends World {
    constructor(options) {
        super(options);
        this.browser = null;
        this.context = null;
        this.page = null;
        this.isMobile = null;
        this.mobileDevice = null;
    }

    async launch() {
        const browserName = process.env.BROWSER || 'chromium';

        if(browserName.includes('-bs')) {
            console.log('Connecting to Browserstack');
            let wsEndpoint;
            switch(browserName) {
                case 'chromium-osx-bs': wsEndpoint = `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(capsChromeOsX))}`;
                break;
                case 'chromium-win-bs': wsEndpoint = `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(capsChromeWin))}`;
                break;
                default: throw new Error(`Unknown BS browser: ${browserName}`);
            }
            this.browser = await chromium.connect({wsEndpoint});
            this.context = await this.browser.newContext();
            this.page = await this.context.newPage();
            console.log('Connected to Browserstack');
            return;
        }

        let browserType;
        if(browserName.includes('firefox')) browserType = firefox;
        else if (browserName.includes('webkit')) browserType = webkit;
        else browserType = chromium;

        if (browserName.includes('-mobile')) {
            this.isMobile = true;
            this.mobileDevice = devices[browserName === 'chromium-mobile' ? 'Galaxy S5' : 'iPhone 11'];
            this.browser = await browserType.launch({headless:false});
            this.context = await this.browser.newContext({...this.mobileDevice});
        } else {
            //desktop launch
            this.browser= await browserType.launch({
                headless: false,
                viewport: null
            });
            this.context = await this.browser.newContext({});
        }
        this.page = await this.context.newPage();
        const monitorDimentions = await this.page.evaluate(()=>{
            return {
                width: screen.availWidth,
                height: screen.availHeight
            };
        });
        this.page.setViewportSize({
            width: monitorDimentions.width,
            height: monitorDimentions.height
        });
        console.log('Local session started');
    }

    async close () {
        if (this.connect) await this.context.close();
        if (this.browser) await this.browser.close();
    }
}

//Tell Cucumber to use this custom World class
setWorldConstructor(CustomWorld);