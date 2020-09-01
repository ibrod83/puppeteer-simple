import puppeteer from 'puppeteer';
import Page from './Page';
export declare class PuppeteerSimple {
    browser: puppeteer.Browser;
    createBrowser(): Promise<void>;
    createPage(url: string): Promise<Page>;
    close(): Promise<void>;
}
