


import puppeteer, { LoadEvent } from 'puppeteer';
import Page from './Page';


type Config={//Any puppeteer config property will do
    [index:string]:any
}

export class PuppeteerSimple {

    // config:{ [index:string] : {showBrowser?:boolean} } = {

    // };

    config = {
        // waitUntil,'networkidle0'
        headless:false,
        // timeout:30000        
    }

    browser!: puppeteer.Browser;

    constructor(config?: Config) {
        if (config) {
            this.config = {...this.config,...config}
        }

    }



    async createBrowser() {
        if (!this.browser) {
            // console.log(this.config)
            const browser = await puppeteer.launch(this.config);
            this.browser = browser;
        }
    }

    async createPage(url: string,config:{timeout:number,waitUntil:LoadEvent}) {
        if (!this.browser) {
            await this.createBrowser();
        }

        const page = new Page(this.browser, url,{
            timeout:config.timeout,
            waitUntil:config.waitUntil
        })
        return page;
    }

    async close() {
        await this.browser.close();

    }

}

