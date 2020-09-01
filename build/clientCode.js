"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __importDefault(require("./"));
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var puppeteerSimple, page2, response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                puppeteerSimple = new _1.default();
                return [4 /*yield*/, puppeteerSimple.createPage('https://ibrod83.com/books/')];
            case 1:
                page2 = _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 5, 6, 7]);
                return [4 /*yield*/, page2.navigate()];
            case 3:
                response = _a.sent();
                // const html = await page.getHtml();
                debugger;
                // console.log(html)
                // await page.destroy();
                console.log('done!');
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
                return [4 /*yield*/, page2.close()];
            case 4:
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
                _a.sent();
                console.log('all done');
                return [3 /*break*/, 7];
            case 5:
                error_1 = _a.sent();
                debugger;
                console.log('error: ', error_1); //
                return [3 /*break*/, 7];
            case 6:
                console.log('finally');
                return [7 /*endfinally*/];
            case 7: return [2 /*return*/];
        }
    });
}); })();
// async function createDelay(mil: number) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, mil)
//     })
// }
//# sourceMappingURL=clientCode.js.map