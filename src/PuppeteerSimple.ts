


import puppeteer from 'puppeteer';
import Page from './Page';


export class PuppeteerSimple {

    browser!: puppeteer.Browser;

    // constructor(public name:string,age:number){

    // }



    async createBrowser() {
        if (!this.browser) {
            const browser = await puppeteer.launch({
                headless: false,
            });
            this.browser = browser;
        }
    }

    async createPage(url: string) {
        if (!this.browser) {
            await this.createBrowser();
        }

        const page = new Page(this.browser, url)
        return page;
    }

    async close() {
        await this.browser.close();

    }

}

