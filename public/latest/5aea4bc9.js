import{n as r}from"./48f1a509.js";function t(t){return r({...t,state:!0})}function o(r,t){return(({finisher:r,descriptor:t})=>(o,e)=>{var n;if(void 0===e){const e=null!==(n=o.originalKey)&&void 0!==n?n:o.key,i=null!=t?{kind:"method",placement:"prototype",key:e,descriptor:t(o.key)}:{...o,key:e};return null!=r&&(i.finisher=function(t){r(t,e)}),i}{const n=o.constructor;void 0!==t&&Object.defineProperty(o,e,t(e)),null==r||r(n,e)}})({descriptor:o=>{const e={get(){var t,o;return null!==(o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(r))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof o?Symbol():"__"+o;e.get=function(){var o,e;return void 0===this[t]&&(this[t]=null!==(e=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(r))&&void 0!==e?e:null),this[t]}}return e}})}var e,n=new Uint8Array(16);function i(){if(!e&&!(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(n)}var u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var s=[],a=0;a<256;++a)s.push((a+256).toString(16).substr(1));function d(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=(s[r[t+0]]+s[r[t+1]]+s[r[t+2]]+s[r[t+3]]+"-"+s[r[t+4]]+s[r[t+5]]+"-"+s[r[t+6]]+s[r[t+7]]+"-"+s[r[t+8]]+s[r[t+9]]+"-"+s[r[t+10]]+s[r[t+11]]+s[r[t+12]]+s[r[t+13]]+s[r[t+14]]+s[r[t+15]]).toLowerCase();if(!function(r){return"string"==typeof r&&u.test(r)}(o))throw TypeError("Stringified UUID is invalid");return o}function l(r,t,o){var e=(r=r||{}).random||(r.rng||i)();if(e[6]=15&e[6]|64,e[8]=63&e[8]|128,t){o=o||0;for(var n=0;n<16;++n)t[o+n]=e[n];return t}return d(e)}export{o as i,t,l as v};
