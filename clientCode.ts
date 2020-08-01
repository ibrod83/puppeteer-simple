import Page from './index';
(async () => {
    const page = new Page('https://ibrod83.com/books/');
    // const page = new Page('https://www.inn.co.il/');
    // const page = new Page('https://github.com/ibrod83/nodejs-web-scraper');
    await page.init();
    try {
        // await page.scrollToBottom(4, 3000);
        // await page.repeatOperation(()=>{page.scrollToBottom()},4, 3000)();
        // await page.scrollToBottom({numRepetitions:10,delay:3000});
        // await page.runJS(()=>{
        //     // if(window){
        //     //   page.context.document.querySelector('body').style.backgroundColor = 'red';  
        //     // }
        //     alert('yoyo')
            
        // })
        // await page.click('.ui-autocomplete-input');
        console.log('clicked!')
        // await page.fillInputElement('.ui-autocomplete-input','ארבעה בתים');
        await page.typeText('.ui-autocomplete-input','ארבעה בתים');
        // await page.click('.load_random_products');
        // await page.click('.load_random_products',{numRepetitions:4,delay:3500});///
        console.log('done clicking!')
        // await page.createDelay(1000)
        // await page.screenshot({ path: 'example.png' });
        await page.screenshot('./example.png');
    } catch (error) {
        console.log(error)//
    }


})();