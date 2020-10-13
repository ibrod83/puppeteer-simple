


import puppeteer from 'puppeteer';
import Page from './Page';



export class PuppeteerSimple {

    // config:{ [index:string] : {showBrowser?:boolean} } = {

    // };

    config = {
        headless:false,
        timeout:30000        
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

    async createPage(url: string) {
        if (!this.browser) {
            await this.createBrowser();
        }

        const page = new Page(this.browser, url,{
            timeout:this.config.timeout
        })
        return page;
    }

    async close() {
        await this.browser.close();

    }

}

