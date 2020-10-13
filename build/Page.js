"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var repeat_promise_until_resolved_1 = __importDefault(require("repeat-promise-until-resolved"));
var Page = /** @class */ (function () {
    function Page(browser, url, config) {
        this.config = {
            timeout: 30000
        };
        this.url = url;
        this.browser = browser;
        if (config) {
            this.config = __assign(__assign({}, this.config), config);
        }
    } ////
    Page.prototype.navigate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var page, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.browser.newPage()];
                    case 1:
                        page = _a.sent();
                        this.context = page;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, page.goto(this.url, {
                                waitUntil: 'networkidle0',
                                timeout: this.config.timeout
                                // waitUntil: "domcontentloaded"
                            })];
                    case 3:
                        response = _a.sent();
                        // process.kill(1,1);//
                        return [2 /*return*/, response];
                    case 4:
                        error_1 = _a.sent();
                        // console.log('goto error',error)
                        // debugger;
                        throw error_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: //
                    // await Promise.all([
                    return [4 /*yield*/, this.context.close()
                        // this.context.waitForNavigation({ waitUntil: 'networkidle0' })
                        // ])
                    ];
                    case 1:
                        // await Promise.all([
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.waitTime = function (mil) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, createDelay(mil)];
                    case 1:
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
                    // debugger;
                    // await this.focus();
                    return [4 /*yield*/, this._scrollToBottom()];
                    case 1:
                        // debugger;
                        // await this.focus();
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.focus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.context.bringToFront()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.getHtml = function () {
        return __awaiter(this, void 0, void 0, function () {
            var html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.context.evaluate(function () {
                            var _a;
                            return (_a = document.querySelector('html')) === null || _a === void 0 ? void 0 : _a.innerHTML;
                        })];
                    case 1:
                        html = _a.sent();
                        return [2 /*return*/, html];
                }
            });
        });
    };
    Page.prototype.openLink = function (selector) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // debugger;
                    return [4 /*yield*/, Promise.all([
                            this.context.waitForNavigation({ waitUntil: 'networkidle0', timeout: this.config.timeout }),
                            this._click(selector)
                        ])];
                    case 1:
                        // debugger;
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
    Page.prototype._click = function (querySelector) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: //
                    // debugger;
                    return [4 /*yield*/, repeat_promise_until_resolved_1.default(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.context.evaluate(function (querySelector, text) {
                                            // debugger;
                                            var elem = document.querySelector(querySelector);
                                            // console.log(querySelector, text)
                                            if (elem) {
                                                // debugger
                                                // alert('element!')
                                                elem.click();
                                            }
                                        }, querySelector)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, {
                            maxAttempts: 4, delay: 1000,
                            onError: function (e) {
                                // console.log('error from repeat:', e)
                            }
                        })];
                    case 1:
                        // debugger;
                        _a.sent();
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
                        })
                        // console.log('scrolled!',this.url)
                    ];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        withInterval
    ], Page.prototype, "click", null);
    __decorate([
        withInterval //
    ], Page.prototype, "scrollToBottom", null);
    return Page;
}());
exports.default = Page;
/**
 * A decorator that adds self-repetition functionality to methods. It assumes that one of the arguments of the methods
 * Contains an object, with "numRepetitions" and "delay" properties.
 * Note that this has nothing to do with "repeatPromiseUntilResolved", which repeats operations that failed(an exception was thrown).
 */
function withInterval(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value; //The original decorated method.
    descriptor.value = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // debugger;
        var config = getConfigObjectFromArgs(args); //Being that the config object argument of a decorated methods can be in any order,
        //the appropriate argument needs to be extracted.
        var numRepetitions = (config === null || config === void 0 ? void 0 : config.numRepetitions) ? config.numRepetitions : 1;
        var delay = (config === null || config === void 0 ? void 0 : config.delay) ? config.delay : 0;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var counter, interval_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: //
                    return [4 /*yield*/, originalMethod.apply(this, args)];
                    case 1:
                        _a.sent(); //Execute the original method initially without any interval.
                        return [4 /*yield*/, createDelay(delay)];
                    case 2:
                        _a.sent(); //Create the delay.
                        counter = 1;
                        if (numRepetitions > 1) { //If more than one execution was selected, create an interval(and begin from 1).
                            interval_1 = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            counter++;
                                            return [4 /*yield*/, originalMethod.apply(this, args)];
                                        case 1:
                                            _a.sent();
                                            if (!(numRepetitions - counter == 0)) return [3 /*break*/, 3];
                                            clearInterval(interval_1);
                                            return [4 /*yield*/, createDelay(delay)];
                                        case 2:
                                            _a.sent(); //Create the final delay, after all iterations are complete.
                                            resolve();
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); }, delay);
                        }
                        else { //If it's a single execution, resolve immediately after the first execution. 
                            resolve();
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
}
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
function getConfigObjectFromArgs(args) {
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var arg = args_1[_i];
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
//# sourceMappingURL=Page.js.map