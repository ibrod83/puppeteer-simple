
import puppeteer, { LoadEvent } from 'puppeteer';
import repeatPromiseUntilResolved from 'repeat-promise-until-resolved';


export interface RepeatableConfig {
    numRepetitions: number;
    delay: number
}


export default class Page {
    context!: puppeteer.Page;//Will be assigned in init()
    url: string;
    browser: puppeteer.Browser;
    config = {
        timeout: 30000,
        waitUntil:"networkidle0" as LoadEvent
    }
    constructor(browser: puppeteer.Browser, url: string, config?: { timeout?: number,waitUntil?:LoadEvent }) {
        this.url = url;
        // debugger;
        this.browser = browser;
        if (config) {
            this.config = { ...this.config, ...config }
        }

    }////
    async navigate(): Promise<puppeteer.Response | null> {

        const page = await this.browser.newPage();
        // debugger;
        const {waitUntil,timeout} = this.config;
        this.context = page;
        try {
            // console.log('timeout',this.config.timeout)
            // throw new Error('fake error')
            const response = await page.goto(this.url, {
                waitUntil,
                timeout
                // waitUntil: "domcontentloaded"
            });
            // process.kill(1,1);//
            return response;
        } catch (error) {
            // console.log('goto error',error)
            // debugger;
            throw error;
        }


    }

    async close() {//

        // await Promise.all([
        await this.context.close()
        // this.context.waitForNavigation({ waitUntil: 'networkidle0' })
        // ])
    }

    async waitTime(mil: number) {
        await createDelay(mil);
    }

    screenshot(path: string) {
        this.context.screenshot({ path });
    }



    @withInterval
    async click(selector: string, config?: { numRepetitions?: number, delay?: number }) {
        await this._click(selector);
    }

    @withInterval//
    async scrollToBottom(config?: { numRepetitions: number, delay: number }) {
        // debugger;
        // await this.focus();
        await this._scrollToBottom();
    }

    async focus() {
        await this.context.bringToFront();
    }

    async getHtml() {//

        //
        const html = await this.context.evaluate(() => {
            return document.querySelector('html')?.innerHTML;
        })

        return html;
    }

    async openLink(selector: string) {
        // debugger;
        const {waitUntil,timeout} = this.config;
        await Promise.all([
            this.context.waitForNavigation({ waitUntil, timeout }),
            this._click(selector)
        ])
    }

    async goBack(){
        await this.context.goBack();
    }

    async typeText(querySelector: string, text: string) {
        this.context.type(querySelector, text, { delay: 20 })
    }


    private async _click(querySelector: string) {//

        // debugger;
        await repeatPromiseUntilResolved(async () => {
            await this.context.evaluate((querySelector, text) => {
                // debugger;
                const elem = document.querySelector(querySelector) as HTMLInputElement;
                // console.log(querySelector, text)
                if (elem) {
                    // debugger
                    // alert('element!')
                    elem.click();
                }

            }, querySelector);
        }, {
            maxAttempts: 4, delay: 1000,
            onError: (e: Error) => {
                // console.log('error from repeat:', e)
            }
        })

    }
    private async _scrollToBottom() {
        await this.context.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);


        })
        // console.log('scrolled!',this.url)
    }

    // async waitForNavigation(){
    //     await this.context.waitForNavigation({ waitUntil: 'domcontentloaded' })
    //     // console.log('navigation ended!')
    // }

    // async focusField(){
    //     await page.evaluate(() => {
    //         const email = document.querySelector('#email');
    //         email.value = 'test@example.com';
    //       });
    // }

    // async runJS(code:Function){
    //     await this.context.evaluate(() => {
    //        code()

    //     },code)
    // }

    // async fillInputElement(querySelector: string, text: string) {
    //     await this.context.evaluate((querySelector, text) => {
    //         const elem = document.querySelector(querySelector) as HTMLInputElement;
    //         console.log(querySelector, text)
    //         if (elem) {

    //             elem.value = text;
    //         }

    //     }, querySelector, text);
    // }

}




/**
 * A decorator that adds self-repetition functionality to methods. It assumes that one of the arguments of the methods
 * Contains an object, with "numRepetitions" and "delay" properties.
 * Note that this has nothing to do with "repeatPromiseUntilResolved", which repeats operations that failed(an exception was thrown).
 */
function withInterval(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;//The original decorated method.

    descriptor.value = function (...args: any) {
        // debugger;
        const config = getConfigObjectFromArgs(args)//Being that the config object argument of a decorated methods can be in any order,
        //the appropriate argument needs to be extracted.
        const numRepetitions = config?.numRepetitions ? config.numRepetitions : 1;
        const delay = config?.delay ? config.delay : 0;

        return new Promise<void>(async (resolve) => {//

            await originalMethod.apply(this, args);//Execute the original method initially without any interval.
            await createDelay(delay);//Create the delay.
            let counter = 1;//Set the counter to 1, because the initial execution was performed.
            if (numRepetitions > 1) {//If more than one execution was selected, create an interval(and begin from 1).

                const interval = setInterval(async () => {
                    counter++;
                    await originalMethod.apply(this, args);
                    if (numRepetitions - counter == 0) {
                        clearInterval(interval)
                        await createDelay(delay);//Create the final delay, after all iterations are complete.
                        resolve();
                    }
                }, delay);
            } else {//If it's a single execution, resolve immediately after the first execution. 
                resolve();
            }
        })
    }
}


async function createDelay(mil: number) {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, mil)
    })
}



function getConfigObjectFromArgs(args: []): RepeatableConfig | undefined {
    for (let arg of args) {
        if (typeof arg === 'object') {
            return arg;
        }
    }
}















 // repeatOperation(operation: Function, { numRepetitions = 1, delay = 0 }: { numRepetitions?: number, delay?: number }) {
    //     // console.log('numrepetitions', numRepetitions, delay)
    //     return (...args: any) => {
    //         let counter = 0;
    //         return new Promise(async (resolve) => {
    //             if (numRepetitions > 1) {
    //                 const interval = setInterval(async () => {

    //                     counter++;
    //                     // console.log(operation)    
    //                     await operation(...args);
    //                     if (numRepetitions - counter == 0) {
    //                         clearInterval(interval)
    //                         await this.createDelay(delay);
    //                         resolve();
    //                     }
    //                 }, delay);
    //             } else {
    //                 await operation(...args);
    //             }

    //         })
    //     }

    // }