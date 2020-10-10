import puppeteer from 'puppeteer';
export interface RepeatableConfig {
    numRepetitions: number;
    delay: number;
}
export default class Page {
    context: puppeteer.Page;
    url: string;
    browser: puppeteer.Browser;
    constructor(browser: puppeteer.Browser, url: string);
    navigate(): Promise<puppeteer.Response | null>;
    close(): Promise<void>;
    waitTime(mil: number): Promise<void>;
    screenshot(path: string): void;
    click(selector: string, config?: {
        numRepetitions?: number;
        delay?: number;
    }): Promise<void>;
    scrollToBottom(config?: {
        numRepetitions: number;
        delay: number;
    }): Promise<void>;
    focus(): Promise<void>;
    getHtml(): Promise<string | undefined>;
    openLink(selector: string): Promise<void>;
    typeText(querySelector: string, text: string): Promise<void>;
    private _click;
    private _scrollToBottom;
}
