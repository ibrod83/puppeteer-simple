"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var puppeteer_1 = __importDefault(require("puppeteer"));
var Page = /** @class */ (function () {
    function Page(url) {
        this.url = url;
    } ////
    Page.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var browser, page;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, puppeteer_1.default.launch({
                            headless: false,
                        })];
                    case 1:
                        browser = _a.sent();
                        return [4 /*yield*/, browser.newPage()];
                    case 2:
                        page = _a.sent();
                        this.context = page;
                        return [4 /*yield*/, page.goto(this.url, {
                                waitUntil: 'domcontentloaded'
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.screenshot = function (path) {
        this.context.screenshot({ path: path });
    };
    Page.prototype.click = function (selector, config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._click(selector)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.scrollToBottom = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debugger;
                        return [4 /*yield*/, this._scrollToBottom()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.fillInputElement = function (querySelector, text) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.context.evaluate(function (querySelector, text) {
                            var elem = document.querySelector(querySelector);
                            console.log(querySelector, text);
                            if (elem) {
                                elem.value = text;
                            }
                        }, querySelector, text)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.typeText = function (querySelector, text) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.context.type(querySelector, text, { delay: 20 });
                return [2 /*return*/];
            });
        });
    };
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
    Page.prototype._click = function (selector) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // console.log('clicking!', selector)
                        debugger;
                        return [4 /*yield*/, this.context.click(selector)]; //
                    case 1:
                        _a.sent(); //
                        return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype._scrollToBottom = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.context.evaluate(function () {
                            window.scrollTo(0, document.body.scrollHeight);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        repeatable
    ], Page.prototype, "click", null);
    __decorate([
        repeatable
    ], Page.prototype, "scrollToBottom", null);
    return Page;
}());
exports.default = Page;
function repeatable(target, propertyKey, descriptor) {
    // console.log(descriptor.value)
    var originalMethod = descriptor.value;
    // console.log(originalMethod)
    descriptor.value = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        debugger;
        var config = typeof args[0] === 'object' ? args[0] : args[1];
        var numRepetitions = (config === null || config === void 0 ? void 0 : config.numRepetitions) ? config.numRepetitions : 1;
        var delay = (config === null || config === void 0 ? void 0 : config.delay) ? config.delay : 0;
        // console.log('args0', args[0])
        // console.log(numRepetitions, delay)
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var counter, interval_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        counter = 0;
                        if (!(numRepetitions > 1)) return [3 /*break*/, 1];
                        interval_1 = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        counter++;
                                        // console.log(operation)    
                                        return [4 /*yield*/, originalMethod.apply(this, args)];
                                    case 1:
                                        // console.log(operation)    
                                        _a.sent();
                                        if (!(numRepetitions - counter == 0)) return [3 /*break*/, 3];
                                        clearInterval(interval_1);
                                        return [4 /*yield*/, createDelay(delay)];
                                    case 2:
                                        _a.sent();
                                        resolve();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); }, delay);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, originalMethod.apply(this, args)];
                    case 2:
                        _a.sent();
                        resolve();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    function createDelay(mil) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            resolve();
                        }, mil);
                    })];
            });
        });
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
//# sourceMappingURL=index.js.map