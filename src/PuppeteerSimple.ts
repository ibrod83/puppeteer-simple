


import puppeteer, { LoadEvent } from 'puppeteer';
import Page from './Page';



export class PuppeteerSimple {

    // config:{ [index:string] : {showBrowser?:boolean} } = {

    // };

    config = {
        // waitUntil,'networkidle0'
        headless:false,
        // timeout:30000        
    }

    browser!: puppeteer.Browser;

    constructor(config?: { headless?: boolean  }) {
        if (config) {
            this.config = {...this.config,...config}
        }

    }



    async createBrowser() {
        if (!this.browser) {
            const browser = await puppeteer.launch({
                headless: this.config.headless,
            });
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

