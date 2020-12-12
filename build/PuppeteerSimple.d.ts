import puppeteer, { LoadEvent } from 'puppeteer';
import Page from './Page';
declare type Config = {
    [index: string]: any;
};
export declare class PuppeteerSimple {
    config: {
        headless: boolean;
    };
    browser: puppeteer.Browser;
    constructor(config?: Config);
    createBrowser(): Promise<void>;
    createPage(url: string, config: {
        timeout: number;
        waitUntil: LoadEvent;
    }): Promise<Page>;
    close(): Promise<void>;
}
export {};
