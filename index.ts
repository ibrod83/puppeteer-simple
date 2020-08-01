import puppeteer from 'puppeteer';


export default class Page {
    context!: puppeteer.Page;//Will be assigned in init()
    url: string;
    constructor(url: string) {
        this.url = url;

    }////
    async init() {
        const browser = await puppeteer.launch({
            headless: false,
        });
        const page = await browser.newPage();
        this.context = page;
        await page.goto(this.url, {
            waitUntil: 'domcontentloaded'
        });
    }

    screenshot(path: string) {
        this.context.screenshot({ path });
    }



    @repeatable
    async click(selector: string, config?: { numRepetitions?: number, delay?: number }) {
        await this._click(selector);
    }

    @repeatable
    async scrollToBottom(config?: { numRepetitions: number, delay: number }) {
        debugger;
        await this._scrollToBottom();
        // await this.repeatOperation(() => {
        //     this._scrollToBottom()
        // }, { numRepetitions: config?.numRepetitions, delay: config?.delay })();
    }

    async fillInputElement(querySelector: string, text: string) {
        await this.context.evaluate((querySelector,text) => {
            const elem = document.querySelector(querySelector) as HTMLInputElement;
            console.log(querySelector,text)
            if (elem) {
               
                elem.value = text;
            }

        },querySelector,text);
    }

    async typeText(querySelector:string,text:string){
        this.context.type(querySelector, text, {delay: 20})
    }

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


    private async _click(selector: string) {//
        // console.log('clicking!', selector)
        debugger;
        await this.context.click(selector)//
    }
    private async _scrollToBottom() {
        await this.context.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);

        })
    }

}

function repeatable(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    // console.log(descriptor.value)
    const originalMethod = descriptor.value;
    // console.log(originalMethod)
    descriptor.value = function (...args: any) {
        debugger;
        const config = typeof args[0] === 'object' ? args[0] : args[1];
        const numRepetitions = config?.numRepetitions ? config.numRepetitions : 1;
        const delay = config?.delay ? config.delay : 0;
        // console.log('args0', args[0])
        // console.log(numRepetitions, delay)
        return new Promise(async (resolve) => {//
            let counter = 0;
            if (numRepetitions > 1) {
                const interval = setInterval(async () => {

                    counter++;
                    // console.log(operation)    
                    await originalMethod.apply(this, args);
                    if (numRepetitions - counter == 0) {
                        clearInterval(interval)
                        await createDelay(delay);
                        resolve();
                    }
                }, delay);
            } else {
                await originalMethod.apply(this, args);
                resolve();
            }

        })
    }

    async function createDelay(mil: number) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, mil)
        })
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