import PuppeteerSimple from './';
(async () => {
    const puppeteerSimple =  new PuppeteerSimple(); 
    // const page =await  puppeteerSimple.createPage('https://socketio-playground.ibrod83.com/');
    // const page2 =await  puppeteerSimple.createPage('http://scraper-test.localhost/pagination/7');
    const page2 = await puppeteerSimple.createPage('https://ibrod83.com/books/');
    // const page = new Page('https://twitter.com/realDonaldTrump?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor');
    // const page = new PuppeteerSimple('https://socketio-playground.ibrod83.com/');
    // const page = new PuppeteerSimple('https://analytics.google.com/analytics/web/');
    // const page = new Page('https://github.com/ibrod83/nodejs-web-scraper');
    // await page.init();
    

    try {
       const response =  await page2.navigate();
        // const html = await page.getHtml();
        debugger;
        // console.log(html)
        // await page.destroy();
        console.log('done!')

        // await page2.click('.bookCard')
        
        // const html2 = await page2.getHtml()//

        // console.log(html2)
        // await page.destroy();
        // console.log('done!2')

        
        // await page.scrollToBottom(4, 3000);
        // await page.repeatOperation(()=>{page.scrollToBottom()},4, 3000)();
        // await page.scrollToBottom({numRepetitions:15,delay:3000});
        // await page.runJS(()=>{
        //     // if(window){
        //     //   page.context.document.querySelector('body').style.backgroundColor = 'red';  
        //     // }
        //     alert('yoyo')
            
        // })
        // await page.click('.ui-autocomplete-input');
        // console.log('clicked!')
        // await page.typeText('.ui-autocomplete-input','ארבעה בתים');
        
        // await page.wait(3000);
        
    //    await page.openLink('.category_selector a');//
    //    await page.openLink('a[href="/online-playground"]');//
    //    await page.waitTime(2000)//
       
    //    await page.click('button[title="Add configuration"]');//

    //    await page.waitTime(2000)

    //    await page.click('button[tabindex="0"]');//
    //    await page.waitTime(2000)

    //    await page.openLink('a[href="/about"]');//
    //    await page.waitTime(2000)

    //    await page.openLink('a[href="/more-from-the-author"]');//

       
      
        // await page.openLink( 'a.ui-menu-item-wrapper');

        // console.log('dropdown clicked!')

        // await page.click('.add_to_cart')

        // console.log('add to cart clicked!')
        
        // await page.wait(2000);
        
        // await page.click('.load_random_products');
        // await page.click('.load_random_products',{numRepetitions:4,delay:3500});///
        // console.log('done clicking!')//
        // await page.createDelay(1000)
        // await page.screenshot({ path: 'example.png' });
        // await page.screenshot('./example.png');
        // await page2.screenshot('./example2.png');
        // await page.waitTime(2000);
        // await page.close();
        // await page2.waitTime(2000)
        await page2.close()
        console.log('all done')
    } catch (error) {
        debugger;
        console.log('error: ',error)//
    }finally{
        console.log('finally')
        // page2.close()
        // puppeteerSimple.close()//
    }


})();


// async function createDelay(mil: number) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, mil)
//     })
// }