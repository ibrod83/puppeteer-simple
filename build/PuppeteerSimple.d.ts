import puppeteer, { LoadEvent } from 'puppeteer';
import Page from './Page';
export declare class PuppeteerSimple {
    config: {
        headless: boolean;
    };
    browser: puppeteer.Browser;
    constructor(config?: {
        headless?: boolean;
    });
    createBrowser(): Promise<void>;
    createPage(url: string, config: {
        timeout: number;
        waitUntil: LoadEvent;
    }): Promise<Page>;
    close(): Promise<void>;
}
