import puppeteer from 'puppeteer';
import Page from './Page';
export declare class PuppeteerSimple {
    config: {
        headless: boolean;
        timeout: number;
    };
    browser: puppeteer.Browser;
    constructor(config?: {
        headless?: boolean;
    });
    createBrowser(): Promise<void>;
    createPage(url: string): Promise<Page>;
    close(): Promise<void>;
}
