import PuppeteerSimple from './';
(async () => {
    const puppeteerSimple =  new PuppeteerSimple(); 
    const page = await puppeteerSimple.createPage('https://www.instagram.com/realdonaldtrump/?hl=en',{timeout:40000,waitUntil:'networkidle0'});

    

    try {
       const response =  await page.navigate();
       await page.click('._7UhW9.xLCgt.qyrsm.h_zdq.uL8Hv.l4b0S')

       await page.scrollToBottom({numRepetitions:20,delay:1500})
        // const html = await page.getHtml();
        debugger;

        console.log('done!')
        // await page.openLink('.accordion.breadcrumb a')
        // await createDelay(4000);
        // page.goBack();
        // await page.close()
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


async function createDelay(mil: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, mil)
    })
}