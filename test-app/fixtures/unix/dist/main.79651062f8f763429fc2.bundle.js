/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("main",[],t):"object"==typeof exports?exports.main=t():e.main=t()}(this,function(){return dojoWebpackJsonptest_app(["main"],{"./node_modules/@dojo/webpack-contrib/promise-loader/index.js?global,Foo!./src/Foo.ts":function(e,t,n){e.exports=function(){return new Promise(function(e){n.e("Foo").then(function(t){e(n('./node_modules/umd-compat-loader/index.js?{}!./node_modules/ts-loader/index.js?{"onlyCompileBundledFiles":true,"instance":"dojo"}!./node_modules/@dojo/webpack-contrib/css-module-dts-loader/index.js?type=ts&instanceName=0_dojo!./src/Foo.ts'))}.bind(null,n)).catch(n.oe)})}},"./node_modules/@dojo/webpack-contrib/promise-loader/index.js?global,widgets!./src/Bar.ts":function(e,t,n){e.exports=function(){return new Promise(function(e){n.e("widgets").then(function(t){e(n('./node_modules/umd-compat-loader/index.js?{}!./node_modules/ts-loader/index.js?{"onlyCompileBundledFiles":true,"instance":"dojo"}!./node_modules/@dojo/webpack-contrib/css-module-dts-loader/index.js?type=ts&instanceName=0_dojo!./src/Bar.ts'))}.bind(null,n)).catch(n.oe)})}},"./node_modules/@dojo/webpack-contrib/promise-loader/index.js?global,widgets!./src/Baz.ts":function(e,t,n){e.exports=function(){return new Promise(function(e){n.e("widgets").then(function(t){e(n('./node_modules/umd-compat-loader/index.js?{}!./node_modules/ts-loader/index.js?{"onlyCompileBundledFiles":true,"instance":"dojo"}!./node_modules/@dojo/webpack-contrib/css-module-dts-loader/index.js?type=ts&instanceName=0_dojo!./src/Baz.ts'))}.bind(null,n)).catch(n.oe)})}},"./node_modules/tslib/tslib.es6.js":function(e,t,n){"use strict";function o(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}function r(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,i=n.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)c.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return c}function i(e){return this instanceof i?(this.v=e,this):new i(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.__extends=function(e,t){function n(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},n.d(t,"__assign",function(){return s}),t.__rest=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n},t.__decorate=function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},t.__param=function(e,t){return function(n,o){t(n,o,e)}},t.__metadata=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},t.__awaiter=function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function c(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(c,s)}a((o=o.apply(e,t||[])).next())})},t.__generator=function(e,t){function n(n){return function(c){return function(n){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,r&&(i=r[2&n[0]?"return":n[0]?"throw":"next"])&&!(i=i.call(r,n[1])).done)return i;switch(r=0,i&&(n=[0,i.value]),n[0]){case 0:case 1:i=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,r=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){s.label=n[1];break}if(6===n[0]&&s.label<i[1]){s.label=i[1],i=n;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(n);break}i[2]&&s.ops.pop(),s.trys.pop();continue}n=t.call(e,s)}catch(e){n=[6,e],r=0}finally{o=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,c])}}var o,r,i,c,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return c={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c},t.__exportStar=function(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])},t.__values=o,t.__read=r,t.__spread=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(r(arguments[t]));return e},t.__await=i,t.__asyncGenerator=function(e,t,n){function o(e){l[e]&&(u[e]=function(t){return new Promise(function(n,o){d.push([e,t,n,o])>1||r(e,t)})})}function r(e,t){try{!function(e){e.value instanceof i?Promise.resolve(e.value.v).then(c,s):a(d[0][2],e)}(l[e](t))}catch(e){a(d[0][3],e)}}function c(e){r("next",e)}function s(e){r("throw",e)}function a(e,t){e(t),d.shift(),d.length&&r(d[0][0],d[0][1])}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var u,l=n.apply(e,t||[]),d=[];return u={},o("next"),o("throw"),o("return"),u[Symbol.asyncIterator]=function(){return this},u},t.__asyncDelegator=function(e){function t(t,r){e[t]&&(n[t]=function(n){return(o=!o)?{value:i(e[t](n)),done:"return"===t}:r?r(n):n})}var n,o;return n={},t("next"),t("throw",function(e){throw e}),t("return"),n[Symbol.iterator]=function(){return this},n},t.__asyncValues=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator];return t?t.call(e):o(e)},t.__makeTemplateObject=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},s=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}},"./src/App.ts":function(e,t,n){"use strict";var o="object"==typeof e&&"object"==typeof e.exports;Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/tslib/tslib.es6.js"),i=n("./src/app.m.css"),c=function(){return r.__awaiter(this,void 0,void 0,function(){var e;return r.__generator(this,function(t){switch(t.label){case 0:return[4,!!o&&Promise.resolve().then(function(){return n("./node_modules/@dojo/webpack-contrib/promise-loader/index.js?global,Foo!./src/Foo.ts")()})];case 1:return e=t.sent(),[2,e.default]}})})},s=function(){return r.__awaiter(this,void 0,void 0,function(){var e;return r.__generator(this,function(t){switch(t.label){case 0:return[4,!!o&&Promise.resolve().then(function(){return n("./node_modules/@dojo/webpack-contrib/promise-loader/index.js?global,widgets!./src/Bar.ts")()})];case 1:return e=t.sent(),[2,e.default]}})})},a=function(){return r.__awaiter(this,void 0,void 0,function(){var e;return r.__generator(this,function(t){switch(t.label){case 0:return[4,!!o&&Promise.resolve().then(function(){return n("./node_modules/@dojo/webpack-contrib/promise-loader/index.js?global,widgets!./src/Baz.ts")()})];case 1:return e=t.sent(),[2,e.default]}})})};t.default=function(){return r.__awaiter(this,void 0,void 0,function(){var e,t;return r.__generator(this,function(n){switch(n.label){case 0:return console.log(i),[4,s()];case 1:return e=n.sent(),[4,a()];case 2:return t=n.sent(),e(),t(),[2,c()]}})})}},"./src/app.m.css":function(e,t){e.exports={" _key":"app",root:"YxttPEx-"}},"./src/main.css":function(e,t){e.exports={" _key":"main.css",app:"QHEFgSeI"}},"./src/main.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("./src/App.ts"),r=n("./src/app.m.css");o.default().then(function(e){console.log(e());var t=document.createElement("div");t.classList.add(r.root),document.body.appendChild(t)})},0:function(e,t,n){n("./src/main.css"),e.exports=n("./src/main.ts")}},[0])});
//# sourceMappingURL=main.79651062f8f763429fc2.bundle.js.map