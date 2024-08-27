import{r as e,_ as t,s as i,i as n,x as o,n as r}from"./48f1a509.js";import{i as a,t as s,v as l}from"./5aea4bc9.js";import{c as d}from"./env.js";const h=!(window.ShadyDOM&&window.ShadyDOM.inUse);let c,p;function u(e){c=(!e||!e.shimcssproperties)&&(h||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(p=window.ShadyCSS.cssBuild);const m=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?c=window.ShadyCSS.nativeCss:window.ShadyCSS?(u(window.ShadyCSS),window.ShadyCSS=void 0):u(window.WebComponents&&window.WebComponents.flags);const f=c;class v{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function g(e){return y(function(e){let t=new v;t.start=0,t.end=e.length;let i=t;for(let n=0,o=e.length;n<o;n++)if(e[n]===w){i.rules||(i.rules=[]);let e=i,t=e.rules[e.rules.length-1]||null;i=new v,i.start=n+1,i.parent=e,i.previous=t,e.rules.push(i)}else e[n]===x&&(i.end=n+1,i=i.parent||t);return t}(e=e.replace(C.comments,"").replace(C.port,"")),e)}function y(e,t){let i=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=i.trim(),e.parent){let n=e.previous?e.previous.end:e.parent.start;i=t.substring(n,e.start-1),i=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(i),i=i.replace(C.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let o=e.parsedSelector=e.selector=i.trim();e.atRule=0===o.indexOf(M),e.atRule?0===o.indexOf(S)?e.type=b.MEDIA_RULE:o.match(C.keyframesRule)&&(e.type=b.KEYFRAMES_RULE,e.keyframesName=e.selector.split(C.multipleSpaces).pop()):0===o.indexOf(z)?e.type=b.MIXIN_RULE:e.type=b.STYLE_RULE}let n=e.rules;if(n)for(let e,i=0,o=n.length;i<o&&(e=n[i]);i++)y(e,t);return e}function _(e,t,i=""){let n="";if(e.cssText||e.rules){let i=e.rules;if(i&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(z)}(i))for(let e,o=0,r=i.length;o<r&&(e=i[o]);o++)n=_(e,t,n);else n=t?e.cssText:function(e){return e=function(e){return e.replace(C.customProp,"").replace(C.mixinProp,"")}(e),function(e){return e.replace(C.mixinApply,"").replace(C.varApply,"")}(e)}(e.cssText),n=n.trim(),n&&(n="  "+n+"\n")}return n&&(e.selector&&(i+=e.selector+" "+w+"\n"),i+=n,e.selector&&(i+=x+"\n\n")),i}const b={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},w="{",x="}",C={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},z="--",S="@media",M="@",E=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,k=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,T=/@media\s(.*)/,A=new Set,L="shady-unscoped";function P(e){const t=e.textContent;if(!A.has(t)){A.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function H(e){return e.hasAttribute(L)}function O(e,t){return e?("string"==typeof e&&(e=g(e)),t&&V(e,t),_(e,f)):""}function I(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=g(e.textContent)),e.__cssRules||null}function V(e,t,i,n){if(!e)return;let o=!1,r=e.type;if(n&&r===b.MEDIA_RULE){let t=e.selector.match(T);t&&(window.matchMedia(t[1]).matches||(o=!0))}r===b.STYLE_RULE?t(e):i&&r===b.KEYFRAMES_RULE?i(e):r===b.MIXIN_RULE&&(o=!0);let a=e.rules;if(a&&!o)for(let e,o=0,r=a.length;o<r&&(e=a[o]);o++)V(e,t,i,n)}function N(e,t){let i=e.indexOf("var(");if(-1===i)return t(e,"","","");let n=function(e,t){let i=0;for(let n=t,o=e.length;n<o;n++)if("("===e[n])i++;else if(")"===e[n]&&0==--i)return n;return-1}(e,i+3),o=e.substring(i+4,n),r=e.substring(0,i),a=N(e.substring(n+1),t),s=o.indexOf(",");return-1===s?t(r,o.trim(),"",a):t(r,o.substring(0,s).trim(),o.substring(s+1).trim(),a)}window.ShadyDOM&&window.ShadyDOM.wrap;const D="css-build";function R(e){if(void 0!==p)return p;if(void 0===e.__cssBuild){const t=e.getAttribute(D);if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if(e[0]===D)return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}(e),e.__cssBuild=t}}return e.__cssBuild||""}function F(e){return""!==R(e)}function q(e,t){for(let i in t)null===i?e.style.removeProperty(i):e.style.setProperty(i,t[i])}function B(e,t){const i=window.getComputedStyle(e).getPropertyValue(t);return i?i.trim():""}const j=/;\s*/m,U=/^\s*(initial)|(inherit)\s*$/,Y=/\s*!important/,W="_-_";class K{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let J=null;class X{constructor(){this._currentElement=null,this._measureElement=null,this._map=new K}detectMixin(e){return function(e){const t=k.test(e)||E.test(e);return k.lastIndex=0,E.lastIndex=0,t}(e)}gatherStyles(e){const t=function(e){const t=[],i=e.querySelectorAll("style");for(let e=0;e<i.length;e++){const n=i[e];H(n)?h||(P(n),n.parentNode.removeChild(n)):(t.push(n.textContent),n.parentNode.removeChild(n))}return t.join("").trim()}(e.content);if(t){const i=document.createElement("style");return i.textContent=t,e.content.insertBefore(i,e.content.firstChild),i}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const i=e._gatheredStyle;return i?this.transformStyle(i,t):null}transformStyle(e,t=""){let i=I(e);return this.transformRules(i,t),e.textContent=O(i),i}transformCustomStyle(e){let t=I(e);return V(t,(e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)})),e.textContent=O(t),t}transformRules(e,t){this._currentElement=t,V(e,(e=>{this.transformRule(e)})),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(E,((e,i,n,o)=>this._produceCssProperties(e,i,n,o,t))),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const i={};let n=!1;return V(t,(t=>{n=n||t===e,n||t.selector===e.selector&&Object.assign(i,this._cssTextToMap(t.parsedCssText))})),i}_consumeCssProperties(e,t){let i=null;for(;i=k.exec(e);){let n=i[0],o=i[1],r=i.index,a=r+n.indexOf("@apply"),s=r+n.length,l=e.slice(0,a),d=e.slice(s),h=t?this._fallbacksFromPreviousRules(t):{};Object.assign(h,this._cssTextToMap(l));let c=this._atApplyToCssProperties(o,h);e=`${l}${c}${d}`,k.lastIndex=r+c.length}return e}_atApplyToCssProperties(e,t){e=e.replace(j,"");let i=[],n=this._map.get(e);if(n||(this._map.set(e,{}),n=this._map.get(e)),n){let o,r,a;this._currentElement&&(n.dependants[this._currentElement]=!0);const s=n.properties;for(o in s)a=t&&t[o],r=[o,": var(",e,W,o],a&&r.push(",",a.replace(Y,"")),r.push(")"),Y.test(s[o])&&r.push(" !important"),i.push(r.join(""))}return i.join("; ")}_replaceInitialOrInherit(e,t){let i=U.exec(t);return i&&(t=i[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let i,n,o=e.split(";"),r={};for(let e,a,s=0;s<o.length;s++)e=o[s],e&&(a=e.split(":"),a.length>1&&(i=a[0].trim(),n=a.slice(1).join(":"),t&&(n=this._replaceInitialOrInherit(i,n)),r[i]=n));return r}_invalidateMixinEntry(e){if(J)for(let t in e.dependants)t!==this._currentElement&&J(t)}_produceCssProperties(e,t,i,n,o){if(i&&N(i,((e,t)=>{t&&this._map.get(t)&&(n=`@apply ${t};`)})),!n)return e;let r=this._consumeCssProperties(""+n,o),a=e.slice(0,e.indexOf("--")),s=this._cssTextToMap(r,!0),l=s,d=this._map.get(t),h=d&&d.properties;h?l=Object.assign(Object.create(h),s):this._map.set(t,l);let c,p,u=[],m=!1;for(c in l)p=s[c],void 0===p&&(p="initial"),h&&!(c in h)&&(m=!0),u.push(`${t}${W}${c}: ${p}`);return m&&this._invalidateMixinEntry(d),d&&(d.properties=l),i&&(a=`${e};${a}`),`${a}${u.join("; ")};`}}X.prototype.detectMixin=X.prototype.detectMixin,X.prototype.transformStyle=X.prototype.transformStyle,X.prototype.transformCustomStyle=X.prototype.transformCustomStyle,X.prototype.transformRules=X.prototype.transformRules,X.prototype.transformRule=X.prototype.transformRule,X.prototype.transformTemplate=X.prototype.transformTemplate,X.prototype._separator=W,Object.defineProperty(X.prototype,"invalidCallback",{get:()=>J,set(e){J=e}});const G={},Z="_applyShimCurrentVersion",Q="_applyShimNextVersion",ee="_applyShimValidatingVersion",te=Promise.resolve();function ie(e){let t=G[e];t&&function(e){e[Z]=e[Z]||0,e[ee]=e[ee]||0,e[Q]=(e[Q]||0)+1}(t)}function ne(e){return e[Z]===e[Q]}let oe,re=null,ae=window.HTMLImports&&window.HTMLImports.whenReady||null;function se(e){requestAnimationFrame((function(){ae?ae(e):(re||(re=new Promise((e=>{oe=e})),"complete"===document.readyState?oe():document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&oe()}))),re.then((function(){e&&e()})))}))}const le="__seenByShadyCSS",de="__shadyCSSCachedStyle";let he=null,ce=null;class pe{constructor(){this.customStyles=[],this.enqueued=!1,se((()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()}))}enqueueDocumentValidation(){!this.enqueued&&ce&&(this.enqueued=!0,se(ce))}addCustomStyle(e){e[le]||(e[le]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[de])return e[de];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const i=e[t];if(i[de])continue;const n=this.getStyleForCustomStyle(i);if(n){const e=n.__appliedElement||n;he&&he(e),i[de]=e}}return e}}pe.prototype.addCustomStyle=pe.prototype.addCustomStyle,pe.prototype.getStyleForCustomStyle=pe.prototype.getStyleForCustomStyle,pe.prototype.processStyles=pe.prototype.processStyles,Object.defineProperties(pe.prototype,{transformCallback:{get:()=>he,set(e){he=e}},validateCallback:{get:()=>ce,set(e){let t=!1;ce||(t=!0),ce=e,t&&this.enqueueDocumentValidation()}}});const ue=new X;class me{constructor(){this.customStyleInterface=null,ue.invalidCallback=ie}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{ue.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame((()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()}))})}prepareTemplate(e,t){if(this.ensure(),F(e))return;G[t]=e;let i=ue.transformTemplate(e,t);e._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let i=e[t],n=this.customStyleInterface.getStyleForCustomStyle(i);n&&ue.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&q(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,i="",n="";return t?t.indexOf("-")>-1?i=t:(n=t,i=e.getAttribute&&e.getAttribute("is")||""):(i=e.is,n=e.extends),{is:i,typeExtension:n}}(e),i=G[t];if((!i||!F(i))&&i&&!ne(i)){(function(e){return!ne(e)&&e[ee]===e[Q]})(i)||(this.prepareTemplate(i,t),function(e){e[ee]=e[Q],e._validating||(e._validating=!0,te.then((function(){e[Z]=e[Q],e._validating=!1})))}(i));let n=e.shadowRoot;if(n){let e=n.querySelector("style");e&&(e.__cssRules=i._styleAst,e.textContent=O(i._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new me;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,i,n){e.flushCustomStyles(),e.prepareTemplate(t,i)},prepareTemplateStyles(e,t,i){window.ShadyCSS.prepareTemplate(e,t,i)},prepareTemplateDom(e,t){},styleSubtree(t,i){e.flushCustomStyles(),e.styleSubtree(t,i)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>B(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:f,nativeShadow:h,cssBuild:p,disableRuntime:m},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=ue,window.JSCompiler_renameProperty=function(e,t){return e};let fe,ve,ge=/(url\()([^)]*)(\))/g,ye=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function _e(e,t){if(e&&ye.test(e))return e;if("//"===e)return e;if(void 0===fe){fe=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",fe="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),fe)try{return new URL(e,t).href}catch(t){return e}return ve||(ve=document.implementation.createHTMLDocument("temp"),ve.base=ve.createElement("base"),ve.head.appendChild(ve.base),ve.anchor=ve.createElement("a"),ve.body.appendChild(ve.anchor)),ve.base.href=t,ve.anchor.href=e,ve.anchor.href||e}function be(e,t){return e.replace(ge,(function(e,i,n,o){return i+"'"+_e(n.replace(/["']/g,""),t)+"'"+o}))}function we(e){return e.substring(0,e.lastIndexOf("/")+1)}const xe=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const Ce=xe&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch(e){return!1}})();let ze=window.Polymer&&window.Polymer.rootPath||we(document.baseURI||window.location.href),Se=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Me=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,Ee=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,ke=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Te=window.Polymer&&window.Polymer.legacyOptimizations||!1,Ae=window.Polymer&&window.Polymer.legacyWarnings||!1,Le=window.Polymer&&window.Polymer.syncInitialRender||!1,Pe=window.Polymer&&window.Polymer.legacyUndefined||!1,He=window.Polymer&&window.Polymer.orderedComputed||!1,Oe=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Ie=window.Polymer&&window.Polymer.fastDomIf||!1,Ve=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,Ne=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,De=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,Re=0;const Fe=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=Re++;return function(n){let o=n.__mixinSet;if(o&&o[i])return n;let r=t,a=r.get(n);if(!a){a=e(n),r.set(n,a);let t=Object.create(a.__mixinSet||o||null);t[i]=!0,a.__mixinSet=t}return a}};let $e={},qe={};function Be(e,t){$e[e]=qe[e.toLowerCase()]=t}function je(e){return $e[e]||qe[e.toLowerCase()]}class Ue extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let i=je(e);return i&&t?i.querySelector(t):i}return null}attributeChangedCallback(e,t,i,n){t!==i&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=_e(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=we(t)}return this.__assetpath}register(e){if(e=e||this.id){if(Ee&&void 0!==je(e))throw Be(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,Be(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}Ue.prototype.modules=$e,customElements.define("dom-module",Ue);const Ye="link[rel=import][type~=css]",We="include",Ke="shady-unscoped";function Je(e){return Ue.import(e)}function Xe(e){const t=be((e.body?e.body:e).textContent,e.baseURI),i=document.createElement("style");return i.textContent=t,i}function Ge(e){const t=e.trim().split(/\s+/),i=[];for(let e=0;e<t.length;e++)i.push(...Ze(t[e]));return i}function Ze(e){const t=Je(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...et(t));const i=t.querySelector("template");i&&e.push(...Qe(i,t.assetpath)),t._styles=e}return t._styles}function Qe(e,t){if(!e._styles){const i=[],n=e.content.querySelectorAll("style");for(let e=0;e<n.length;e++){let o=n[e],r=o.getAttribute(We);r&&i.push(...Ge(r).filter((function(e,t,i){return i.indexOf(e)===t}))),t&&(o.textContent=be(o.textContent,t)),i.push(o)}e._styles=i}return e._styles}function et(e){const t=[],i=e.querySelectorAll(Ye);for(let e=0;e<i.length;e++){let n=i[e];if(n.import){const e=n.import,i=n.hasAttribute(Ke);if(i&&!e._unscopedStyle){const t=Xe(e);t.setAttribute(Ke,""),e._unscopedStyle=t}else e._style||(e._style=Xe(e));t.push(i?e._unscopedStyle:e._style)}}return t}function tt(e){let t=Je(e);if(t&&void 0===t._cssText){let e=function(e){let t="",i=et(e);for(let e=0;e<i.length;e++)t+=i[e].textContent;return t}(t),i=t.querySelector("template");i&&(e+=function(e,t){let i="";const n=Qe(e,t);for(let e=0;e<n.length;e++){let t=n[e];t.parentNode&&t.parentNode.removeChild(t),i+=t.textContent}return i}(i,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}const it=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;function nt(e){return e.indexOf(".")>=0}function ot(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function rt(e,t){return 0===e.indexOf(t+".")}function at(e,t){return 0===t.indexOf(e+".")}function st(e,t,i){return t+i.slice(e.length)}function lt(e){if(Array.isArray(e)){let t=[];for(let i=0;i<e.length;i++){let n=e[i].toString().split(".");for(let e=0;e<n.length;e++)t.push(n[e])}return t.join(".")}return e}function dt(e){return Array.isArray(e)?lt(e).split("."):e.toString().split(".")}function ht(e,t,i){let n=e,o=dt(t);for(let e=0;e<o.length;e++){if(!n)return;n=n[o[e]]}return i&&(i.path=o.join(".")),n}function ct(e,t,i){let n=e,o=dt(t),r=o[o.length-1];if(o.length>1){for(let e=0;e<o.length-1;e++){if(n=n[o[e]],!n)return}n[r]=i}else n[t]=i;return o.join(".")}const pt={},ut=/-[a-z]/g,mt=/([A-Z])/g;function ft(e){return pt[e]||(pt[e]=e.indexOf("-")<0?e:e.replace(ut,(e=>e[1].toUpperCase())))}function vt(e){return pt[e]||(pt[e]=e.replace(mt,"-$1").toLowerCase())}let gt=0,yt=0,_t=[],bt=0,wt=!1,xt=document.createTextNode("");new window.MutationObserver((function(){wt=!1;const e=_t.length;for(let t=0;t<e;t++){let e=_t[t];if(e)try{e()}catch(e){setTimeout((()=>{throw e}))}}_t.splice(0,e),yt+=e})).observe(xt,{characterData:!0});const Ct={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},zt={run:e=>(wt||(wt=!0,xt.textContent=bt++),_t.push(e),gt++),cancel(e){const t=e-yt;if(t>=0){if(!_t[t])throw new Error("invalid async handle: "+e);_t[t]=null}}},St=zt,Mt=Fe((e=>class extends e{static createProperties(e){const t=this.prototype;for(let i in e)i in t||t._createPropertyAccessor(i)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,i){let n=this.__data[e],o=this._shouldPropertyChange(e,t,n);return o&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=n),this.__data[e]=t,this.__dataPending[e]=t),o}_isPropertyPending(e){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,St.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const e=this.__data,t=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(e,t,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,i)),this.__dataCounter--}_shouldPropertiesChange(e,t,i){return Boolean(t)}_propertiesChanged(e,t,i){}_shouldPropertyChange(e,t,i){return i!==t&&(i==i||t==t)}attributeChangedCallback(e,t,i,n){t!==i&&this._attributeToProperty(e,i),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,i,n)}_attributeToProperty(e,t,i){if(!this.__serializing){const n=this.__dataAttributes,o=n&&n[e]||e;this[o]=this._deserializeValue(t,i||this.constructor.typeForProperty(o))}}_propertyToAttribute(e,t,i){this.__serializing=!0,i=arguments.length<3?this[e]:i,this._valueToNodeAttribute(this,i,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,i){const n=this._serializeValue(t);"class"!==i&&"name"!==i&&"slot"!==i||(e=it(e)),void 0===n?e.removeAttribute(i):e.setAttribute(i,""===n&&window.trustedTypes?window.trustedTypes.emptyScript:n)}_serializeValue(e){return"boolean"==typeof e?e?"":void 0:null!=e?e.toString():void 0}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}})),Et={};let kt=HTMLElement.prototype;for(;kt;){let e=Object.getOwnPropertyNames(kt);for(let t=0;t<e.length;t++)Et[e[t]]=!0;kt=Object.getPrototypeOf(kt)}const Tt=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1;const At=Fe((e=>{const t=Mt(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(ft(e[t]))}static attributeNameForProperty(e){return vt(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const i=this;i.hasAttribute(e)||this._valueToNodeAttribute(i,t,e)}_serializeValue(e){if("object"==typeof e){if(e instanceof Date)return e.toString();if(e){if(Tt(e))return e;try{return JSON.stringify(e)}catch(e){return""}}}return super._serializeValue(e)}_deserializeValue(e,t){let i;switch(t){case Object:try{i=JSON.parse(e)}catch(t){i=e}break;case Array:try{i=JSON.parse(e)}catch(t){i=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:i=isNaN(e)?String(e):Number(e),i=new Date(i);break;default:i=super._deserializeValue(e,t)}return i}_definePropertyAccessor(e,t){!function(e,t){if(!Et[t]){let i=e[t];void 0!==i&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}})),Lt={"dom-if":!0,"dom-repeat":!0};let Pt=!1,Ht=!1;function Ot(e){(function(){if(!Pt){Pt=!0;const e=document.createElement("textarea");e.placeholder="a",Ht=e.placeholder===e.textContent}return Ht})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}const It=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(t,i,n)=>{const o=i.getAttribute(n);e&&n.startsWith("on-")?t.setAttribute(n,e.createScript(o,n)):t.setAttribute(n,o)}})();function Vt(e){let t=e.getAttribute("is");if(t&&Lt[t]){let i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;){const{name:t}=i.attributes[0];It(e,i,t),i.removeAttribute(t)}}return e}function Nt(e,t){let i=t.parentInfo&&Nt(e,t.parentInfo);if(!i)return e;for(let e=i.firstChild,n=0;e;e=e.nextSibling)if(t.parentIndex===n++)return e}function Dt(e,t,i,n){n.id&&(t[n.id]=i)}function Rt(e,t,i){if(i.events&&i.events.length)for(let n,o=0,r=i.events;o<r.length&&(n=r[o]);o++)e._addMethodEventListenerToNode(t,n.name,n.value,e)}function Ft(e,t,i,n){i.templateInfo&&(t._templateInfo=i.templateInfo,t._parentTemplateInfo=n)}const $t=Fe((e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let i=e._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=Boolean(t),i.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute&&e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,i,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,i){return this._parseTemplateNode(e.content,t,i)}static _parseTemplateNode(e,t,i){let n=!1,o=e;return"template"!=o.localName||o.hasAttribute("preserve-content")?"slot"===o.localName&&(t.hasInsertionPoint=!0):n=this._parseTemplateNestedTemplate(o,t,i)||n,Ot(o),o.firstChild&&this._parseTemplateChildNodes(o,t,i),o.hasAttributes&&o.hasAttributes()&&(n=this._parseTemplateNodeAttributes(o,t,i)||n),n||i.noted}static _parseTemplateChildNodes(e,t,i){if("script"!==e.localName&&"style"!==e.localName)for(let n,o=e.firstChild,r=0;o;o=n){if("template"==o.localName&&(o=Vt(o)),n=o.nextSibling,o.nodeType===Node.TEXT_NODE){let i=n;for(;i&&i.nodeType===Node.TEXT_NODE;)o.textContent+=i.textContent,n=i.nextSibling,e.removeChild(i),i=n;if(t.stripWhiteSpace&&!o.textContent.trim()){e.removeChild(o);continue}}let a={parentIndex:r,parentInfo:i};this._parseTemplateNode(o,t,a)&&(a.infoIndex=t.nodeInfoList.push(a)-1),o.parentNode&&r++}}static _parseTemplateNestedTemplate(e,t,i){let n=e,o=this._parseTemplate(n,t);return(o.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),i.templateInfo=o,!0}static _parseTemplateNodeAttributes(e,t,i){let n=!1,o=Array.from(e.attributes);for(let r,a=o.length-1;r=o[a];a--)n=this._parseTemplateNodeAttribute(e,t,i,r.name,r.value)||n;return n}static _parseTemplateNodeAttribute(e,t,i,n,o){return"on-"===n.slice(0,3)?(e.removeAttribute(n),i.events=i.events||[],i.events.push({name:n.slice(3),value:o}),!0):"id"===n&&(i.id=o,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let i=(t=t||this.constructor._parseTemplate(e)).nodeInfoList,n=t.content||e.content,o=document.importNode(n,!0);o.__noInsertionPoint=!t.hasInsertionPoint;let r=o.nodeList=new Array(i.length);o.$={};for(let e,n=0,a=i.length;n<a&&(e=i[n]);n++){let i=r[n]=Nt(o,e);Dt(0,o.$,i,e),Ft(0,i,e,t),Rt(this,i,e)}return o}_addMethodEventListenerToNode(e,t,i,n){let o=function(e,t,i){return e=e._methodHost||e,function(t){e[i]?e[i](t,t.detail):console.warn("listener method `"+i+"` not defined")}}(n=n||e,0,i);return this._addEventListenerToNode(e,t,o),o}_addEventListenerToNode(e,t,i){e.addEventListener(t,i)}_removeEventListenerFromNode(e,t,i){e.removeEventListener(t,i)}}));let qt=0;const Bt=[],jt={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Ut="__computeInfo",Yt=/[A-Z]/;function Wt(e,t,i){let n=e[t];if(n){if(!e.hasOwnProperty(t)&&(n=e[t]=Object.create(e[t]),i))for(let e in n){let t=n[e],i=n[e]=Array(t.length);for(let e=0;e<t.length;e++)i[e]=t[e]}}else n=e[t]={};return n}function Kt(e,t,i,n,o,r){if(t){let a=!1;const s=qt++;for(let l in i){let d=t[o?ot(l):l];if(d)for(let t,h=0,c=d.length;h<c&&(t=d[h]);h++)t.info&&t.info.lastRun===s||o&&!Xt(l,t.trigger)||(t.info&&(t.info.lastRun=s),t.fn(e,l,i,n,t.info,o,r),a=!0)}return a}return!1}function Jt(e,t,i,n,o,r,a,s){let l=!1,d=t[a?ot(n):n];if(d)for(let t,h=0,c=d.length;h<c&&(t=d[h]);h++)t.info&&t.info.lastRun===i||a&&!Xt(n,t.trigger)||(t.info&&(t.info.lastRun=i),t.fn(e,n,o,r,t.info,a,s),l=!0);return l}function Xt(e,t){if(t){let i=t.name;return i==e||!(!t.structured||!rt(i,e))||!(!t.wildcard||!at(i,e))}return!0}function Gt(e,t,i,n,o){let r="string"==typeof o.method?e[o.method]:o.method,a=o.property;r?r.call(e,e.__data[a],n[a]):o.dynamicFn||console.warn("observer method `"+o.method+"` not defined")}function Zt(e,t,i){let n=ot(t);if(n!==t){return Qt(e,vt(n)+"-changed",i[t],t),!0}return!1}function Qt(e,t,i,n){let o={value:i,queueProperty:!0};n&&(o.path=n),it(e).dispatchEvent(new CustomEvent(t,{detail:o}))}function ei(e,t,i,n,o,r){let a=(r?ot(t):t)!=t?t:null,s=a?ht(e,a):e.__data[t];a&&void 0===s&&(s=i[t]),Qt(e,o.eventName,s,a)}function ti(e,t,i,n,o){let r=e.__data[t];Se&&(r=Se(r,o.attrName,"attribute",e)),e._propertyToAttribute(t,o.attrName,r)}function ii(e,t,i,n){let o=e[jt.COMPUTE];if(o)if(He){qt++;const r=function(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const i=e[jt.COMPUTE];let n,{counts:o,ready:r,total:a}=function(e){const t=e[Ut],i={},n=e[jt.COMPUTE],o=[];let r=0;for(let e in t){const n=t[e];r+=i[e]=n.args.filter((e=>!e.literal)).length+(n.dynamicFn?1:0)}for(let e in n)t[e]||o.push(e);return{counts:i,ready:o,total:r}}(e);for(;n=r.shift();){t.set(n,t.size);const e=i[n];e&&e.forEach((e=>{const t=e.info.methodInfo;--a,0==--o[t]&&r.push(t)}))}if(0!==a){const t=e;console.warn(`Computed graph for ${t.localName} incomplete; circular?`)}e.constructor.__orderedComputedDeps=t}return t}(e),a=[];for(let e in t)oi(e,o,a,r,n);let s;for(;s=a.shift();)ri(e,"",t,i,s)&&oi(s.methodInfo,o,a,r,n);Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let r=t;for(;Kt(e,o,r,i,n);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),r=e.__dataPending,e.__dataPending=null}}const ni=(e,t,i)=>{let n=0,o=t.length-1,r=-1;for(;n<=o;){const a=n+o>>1,s=i.get(t[a].methodInfo)-i.get(e.methodInfo);if(s<0)n=a+1;else{if(!(s>0)){r=a;break}o=a-1}}r<0&&(r=o+1),t.splice(r,0,e)},oi=(e,t,i,n,o)=>{const r=t[o?ot(e):e];if(r)for(let t=0;t<r.length;t++){const a=r[t];a.info.lastRun===qt||o&&!Xt(e,a.trigger)||(a.info.lastRun=qt,ni(a.info,i,n))}};function ri(e,t,i,n,o){let r=pi(e,t,i,n,o);if(r===Bt)return!1;let a=o.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[a]?e._setPendingProperty(a,r,!0):(e[a]=r,!1)}function ai(e,t,i,n,o,r,a){i.bindings=i.bindings||[];let s={kind:n,target:o,parts:r,literal:a,isCompound:1!==r.length};if(i.bindings.push(s),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(s)){let{event:e,negate:t}=s.parts[0];s.listenerEvent=e||vt(o)+"-changed",s.listenerNegate=t}let l=t.nodeInfoList.length;for(let i=0;i<s.parts.length;i++){let n=s.parts[i];n.compoundIndex=i,si(e,t,s,n,l)}}function si(e,t,i,n,o){if(!n.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let r=n.dependencies,a={index:o,binding:i,part:n,evaluator:e};for(let i=0;i<r.length;i++){let n=r[i];"string"==typeof n&&(n=_i(n),n.wildcard=!0),e._addTemplatePropertyEffect(t,n.rootProperty,{fn:li,info:a,trigger:n})}}}function li(e,t,i,n,o,r,a){let s=a[o.index],l=o.binding,d=o.part;if(r&&d.source&&t.length>d.source.length&&"property"==l.kind&&!l.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[l.target]){let n=i[t];t=st(d.source,l.target,t),s._setPendingPropertyOrPath(t,n,!1,!0)&&e._enqueueClient(s)}else{let a=o.evaluator._evaluateBinding(e,d,t,i,n,r);a!==Bt&&function(e,t,i,n,o){o=function(e,t,i,n){if(i.isCompound){let o=e.__dataCompoundStorage[i.target];o[n.compoundIndex]=t,t=o.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,o,i,n),Se&&(o=Se(o,i.target,i.kind,t));if("attribute"==i.kind)e._valueToNodeAttribute(t,o,i.target);else{let n=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[n]?t[jt.READ_ONLY]&&t[jt.READ_ONLY][n]||t._setPendingProperty(n,o)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,n,o)}}(e,s,l,d,a)}}function di(e,t){if(t.isCompound){let i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),n=t.parts,o=new Array(n.length);for(let e=0;e<n.length;e++)o[e]=n[e].literal;let r=t.target;i[r]=o,t.literal&&"property"==t.kind&&("className"===r&&(e=it(e)),e[r]=t.literal)}}function hi(e,t,i){if(i.listenerEvent){let n=i.parts[0];e.addEventListener(i.listenerEvent,(function(e){!function(e,t,i,n,o){let r,a=e.detail,s=a&&a.path;s?(n=st(i,n,s),r=a&&a.value):r=e.currentTarget[i],r=o?!r:r,t[jt.READ_ONLY]&&t[jt.READ_ONLY][n]||!t._setPendingPropertyOrPath(n,r,!0,Boolean(s))||a&&a.queueProperty||t._invalidateProperties()}(e,t,i.target,n.source,n.negate)}))}}function ci(e,t,i,n,o,r){r=t.static||r&&("object"!=typeof r||r[t.methodName]);let a={methodName:t.methodName,args:t.args,methodInfo:o,dynamicFn:r};for(let o,r=0;r<t.args.length&&(o=t.args[r]);r++)o.literal||e._addPropertyEffect(o.rootProperty,i,{fn:n,info:a,trigger:o});return r&&e._addPropertyEffect(t.methodName,i,{fn:n,info:a}),a}function pi(e,t,i,n,o){let r=e._methodHost||e,a=r[o.methodName];if(a){let n=e._marshalArgs(o.args,t,i);return n===Bt?Bt:a.apply(r,n)}o.dynamicFn||console.warn("method `"+o.methodName+"` not defined")}const ui=[],mi="(?:[a-zA-Z_$][\\w.:$\\-*]*)",fi="(?:("+mi+"|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)",vi=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?"+("("+mi+"\\s*"+("(?:\\(\\s*(?:"+("(?:"+fi+"(?:,\\s*"+fi+")*)")+"?)\\)\\s*)")+"?)")+"(?:]]|}})","g");function gi(e){let t="";for(let i=0;i<e.length;i++){t+=e[i].literal||""}return t}function yi(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:ui};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let i=_i(e);return i.literal||(t.static=!1),i}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function _i(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},n=t[0];switch("-"===n&&(n=t[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0}return i.literal||(i.rootProperty=ot(t),i.structured=nt(t),i.structured&&(i.wildcard=".*"==t.slice(-2),i.wildcard&&(i.name=t.slice(0,-2)))),i}function bi(e,t,i){let n=ht(e,i);return void 0===n&&(n=t[i]),n}function wi(e,t,i,n){const o={indexSplices:n};Pe&&!e._overrideLegacyUndefined&&(t.splices=o),e.notifyPath(i+".splices",o),e.notifyPath(i+".length",t.length),Pe&&!e._overrideLegacyUndefined&&(o.indexSplices=[])}function xi(e,t,i,n,o,r){wi(e,t,i,[{index:n,addedCount:o,removed:r,object:t,type:"splice"}])}const Ci=Fe((e=>{const t=$t(At(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return jt}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(zi.length){let e=zi[zi.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[jt.READ_ONLY];for(let i in e)t&&t[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=e[i])}_addPropertyEffect(e,t,i){this._createPropertyAccessor(e,t==jt.READ_ONLY);let n=Wt(this,t,!0)[e];n||(n=this[t][e]=[]),n.push(i)}_removePropertyEffect(e,t,i){let n=Wt(this,t,!0)[e],o=n.indexOf(i);o>=0&&n.splice(o,1)}_hasPropertyEffect(e,t){let i=this[t];return Boolean(i&&i[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,jt.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,jt.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,jt.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,jt.COMPUTE)}_setPendingPropertyOrPath(e,t,i,n){if(n||ot(Array.isArray(e)?e[0]:e)!==e){if(!n){let i=ht(this,e);if(!(e=ct(this,e,t))||!super._shouldPropertyChange(e,t,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,i))return function(e,t,i){let n=e.__dataLinkedPaths;if(n){let o;for(let r in n){let a=n[r];at(r,t)?(o=st(r,a,t),e._setPendingPropertyOrPath(o,i,!0,!0)):at(a,t)&&(o=st(a,r,t),e._setPendingPropertyOrPath(o,i,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,i);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,i){i===e[t]&&"object"!=typeof i||("className"===t&&(e=it(e)),e[t]=i)}_setPendingProperty(e,t,i){let n=this.__dataHasPaths&&nt(e),o=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,o[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),n?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(n||this[jt.NOTIFY]&&this[jt.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=i),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let i=e[t];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let i in e)!t&&this[jt.READ_ONLY]&&this[jt.READ_ONLY][i]||this._setPendingPropertyOrPath(i,e[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,i){let n,o=this.__dataHasPaths;this.__dataHasPaths=!1,ii(this,t,i,o),n=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,i,o),this._flushClients(),Kt(this,this[jt.REFLECT],t,i,o),Kt(this,this[jt.OBSERVE],t,i,o),n&&function(e,t,i,n,o){let r,a,s=e[jt.NOTIFY],l=qt++;for(let a in t)t[a]&&(s&&Jt(e,s,l,a,i,n,o)||o&&Zt(e,a,i))&&(r=!0);r&&(a=e.__dataHost)&&a._invalidateProperties&&a._invalidateProperties()}(this,n,t,i,o),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,i){this[jt.PROPAGATE]&&Kt(this,this[jt.PROPAGATE],e,t,i),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,i)}_runEffectsForTemplate(e,t,i,n){const o=(t,n)=>{Kt(this,e.propertyEffects,t,i,n,e.nodeList);for(let o=e.firstChild;o;o=o.nextSibling)this._runEffectsForTemplate(o,t,i,n)};e.runEffects?e.runEffects(o,t,n):o(t,n)}linkPaths(e,t){e=lt(e),t=lt(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=lt(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let i={path:""};wi(this,ht(this,e,i),i.path,t)}get(e,t){return ht(t||this,e)}set(e,t,i){i?ct(i,e,t):this[jt.READ_ONLY]&&this[jt.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let i={path:""},n=ht(this,e,i),o=n.length,r=n.push(...t);return t.length&&xi(this,n,i.path,o,t.length,[]),r}pop(e){let t={path:""},i=ht(this,e,t),n=Boolean(i.length),o=i.pop();return n&&xi(this,i,t.path,i.length,0,[o]),o}splice(e,t,i,...n){let o,r={path:""},a=ht(this,e,r);return t<0?t=a.length-Math.floor(-t):t&&(t=Math.floor(t)),o=2===arguments.length?a.splice(t):a.splice(t,i,...n),(n.length||o.length)&&xi(this,a,r.path,t,n.length,o),o}shift(e){let t={path:""},i=ht(this,e,t),n=Boolean(i.length),o=i.shift();return n&&xi(this,i,t.path,0,0,[o]),o}unshift(e,...t){let i={path:""},n=ht(this,e,i),o=n.unshift(...t);return t.length&&xi(this,n,i.path,0,t.length,[]),o}notifyPath(e,t){let i;if(1==arguments.length){let n={path:""};t=ht(this,e,n),i=n.path}else i=Array.isArray(e)?lt(e):e;this._setPendingPropertyOrPath(i,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var i;this._addPropertyEffect(e,jt.READ_ONLY),t&&(this["_set"+(i=e,i[0].toUpperCase()+i.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,i){let n={property:e,method:t,dynamicFn:Boolean(i)};this._addPropertyEffect(e,jt.OBSERVE,{fn:Gt,info:n,trigger:{name:e}}),i&&this._addPropertyEffect(t,jt.OBSERVE,{fn:Gt,info:n,trigger:{name:t}})}_createMethodObserver(e,t){let i=yi(e);if(!i)throw new Error("Malformed observer expression '"+e+"'");ci(this,i,jt.OBSERVE,pi,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,jt.NOTIFY,{fn:ei,info:{eventName:vt(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,jt.REFLECT,{fn:ti,info:{attrName:t}})}_createComputedProperty(e,t,i){let n=yi(t);if(!n)throw new Error("Malformed computed expression '"+t+"'");const o=ci(this,n,jt.COMPUTE,ri,e,i);Wt(this,Ut)[e]=o}_marshalArgs(e,t,i){const n=this.__data,o=[];for(let r=0,a=e.length;r<a;r++){let{name:a,structured:s,wildcard:l,value:d,literal:h}=e[r];if(!h)if(l){const e=at(a,t),o=bi(n,i,e?t:a);d={path:e?t:a,value:o,base:e?ht(n,a):o}}else d=s?bi(n,i,a):n[a];if(Pe&&!this._overrideLegacyUndefined&&void 0===d&&e.length>1)return Bt;o[r]=d}return o}static addPropertyEffect(e,t,i){this.prototype._addPropertyEffect(e,t,i)}static createPropertyObserver(e,t,i){this.prototype._createPropertyObserver(e,t,i)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,i){this.prototype._createComputedProperty(e,t,i)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let i=this.constructor._parseTemplate(e),n=this.__preBoundTemplateInfo==i;if(!n)for(let e in i.propertyEffects)this._createPropertyAccessor(e);if(t)if(i=Object.create(i),i.wasPreBound=n,this.__templateInfo){const t=e._parentTemplateInfo||this.__templateInfo,n=t.lastChild;i.parent=t,t.lastChild=i,i.previousSibling=n,n?n.nextSibling=i:t.firstChild=i}else this.__templateInfo=i;else this.__preBoundTemplateInfo=i;return i}static _addTemplatePropertyEffect(e,t,i){(e.hostProps=e.hostProps||{})[t]=!0;let n=e.propertyEffects=e.propertyEffects||{};(n[t]=n[t]||[]).push(i)}_stampTemplate(e,t){t=t||this._bindTemplate(e,!0),zi.push(this);let i=super._stampTemplate(e,t);if(zi.pop(),t.nodeList=i.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=i.firstChild;t;t=t.nextSibling)e.push(t)}return i.templateInfo=t,function(e,t){let{nodeList:i,nodeInfoList:n}=t;if(n.length)for(let t=0;t<n.length;t++){let o=n[t],r=i[t],a=o.bindings;if(a)for(let t=0;t<a.length;t++){let i=a[t];di(r,i),hi(r,e,i)}r.__dataHost=e}}(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),i}_removeBoundDom(e){const t=e.templateInfo,{previousSibling:i,nextSibling:n,parent:o}=t;i?i.nextSibling=n:o&&(o.firstChild=n),n?n.previousSibling=i:o&&(o.lastChild=i),t.nextSibling=t.previousSibling=null;let r=t.childNodes;for(let e=0;e<r.length;e++){let t=r[e];it(it(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,i,n){let o=t._parseTemplateNode.call(this,e,i,n);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,i);t&&(e.textContent=gi(t)||" ",ai(this,i,n,"text","textContent",t),o=!0)}return o}static _parseTemplateNodeAttribute(e,i,n,o,r){let a=this._parseBindings(r,i);if(a){let t=o,r="property";Yt.test(o)?r="attribute":"$"==o[o.length-1]&&(o=o.slice(0,-1),r="attribute");let s=gi(a);return s&&"attribute"==r&&("class"==o&&e.hasAttribute("class")&&(s+=" "+e.getAttribute(o)),e.setAttribute(o,s)),"attribute"==r&&"disable-upgrade$"==t&&e.setAttribute(o,""),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===r&&(o=ft(o)),ai(this,i,n,r,o,a,s),!0}return t._parseTemplateNodeAttribute.call(this,e,i,n,o,r)}static _parseTemplateNestedTemplate(e,i,n){let o=t._parseTemplateNestedTemplate.call(this,e,i,n);const r=e.parentNode,a=n.templateInfo,s="dom-if"===r.localName,l="dom-repeat"===r.localName;Oe&&(s||l)&&(r.removeChild(e),(n=n.parentInfo).templateInfo=a,n.noted=!0,o=!1);let d=a.hostProps;if(Ie&&s)d&&(i.hostProps=Object.assign(i.hostProps||{},d),Oe||(n.parentInfo.noted=!0));else{let e="{";for(let t in d){ai(this,i,n,"property","_host_"+t,[{mode:e,source:t,dependencies:[t],hostProp:!0}])}}return o}static _parseBindings(e,t){let i,n=[],o=0;for(;null!==(i=vi.exec(e));){i.index>o&&n.push({literal:e.slice(o,i.index)});let r=i[1][0],a=Boolean(i[2]),s=i[3].trim(),l=!1,d="",h=-1;"{"==r&&(h=s.indexOf("::"))>0&&(d=s.substring(h+2),s=s.substring(0,h),l=!0);let c=yi(s),p=[];if(c){let{args:e,methodName:i}=c;for(let t=0;t<e.length;t++){let i=e[t];i.literal||p.push(i)}let n=t.dynamicFns;(n&&n[i]||c.static)&&(p.push(i),c.dynamicFn=!0)}else p.push(s);n.push({source:s,mode:r,negate:a,customEvent:l,signature:c,dependencies:p,event:d}),o=vi.lastIndex}if(o&&o<e.length){let t=e.substring(o);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(e,t,i,n,o,r){let a;return a=t.signature?pi(e,i,n,0,t.signature):i!=t.source?ht(e,t.source):r&&nt(i)?ht(e,i):e.__data[i],t.negate&&(a=!a),a}}})),zi=[];const Si=Fe((e=>{const t=Mt(e);function i(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof o?t:null}function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const i=e.properties;i&&(t=function(e){const t={};for(let i in e){const n=e[i];t[i]="function"==typeof n?{type:n}:n}return t}(i))}e.__ownProperties=t}return e.__ownProperties}class o extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const e=this._properties;this.__observedAttributes=e?Object.keys(e).map((e=>this.prototype._addPropertyToAttributeMap(e))):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=i(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=n(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=i(this);this.__properties=Object.assign({},e&&e._properties,n(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return o})),Mi=window.ShadyCSS&&window.ShadyCSS.cssBuild,Ei=Fe((e=>{const t=Si(Ci(e));function i(e,t,i,n){i.computed&&(i.readOnly=!0),i.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,i.computed,n)),i.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!i.computed):!1===i.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),i.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===i.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),i.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===i.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),i.observer&&e._createPropertyObserver(t,i.observer,n[i.observer]),e._addPropertyToAttributeMap(t)}function n(e,t,i,n){if(!Mi){const o=t.content.querySelectorAll("style"),r=Qe(t),a=function(e){let t=Je(e);return t?et(t):[]}(i),s=t.content.firstElementChild;for(let i=0;i<a.length;i++){let o=a[i];o.textContent=e._processStyleText(o.textContent,n),t.content.insertBefore(o,s)}let l=0;for(let t=0;t<r.length;t++){let i=r[t],a=o[l];a!==i?(i=i.cloneNode(!0),a.parentNode.insertBefore(i,a)):l++,i.textContent=e._processStyleText(i.textContent,n)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,i),De&&Mi&&Ce){const i=t.content.querySelectorAll("style");if(i){let t="";Array.from(i).forEach((e=>{t+=e.textContent,e.parentNode.removeChild(e)})),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}return class extends t{static get polymerElementVersion(){return"3.5.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((i=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",i))||(i.__ownObservers=i.hasOwnProperty(JSCompiler_renameProperty("observers",i))?i.observers:null),i.__ownObservers);var i;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):Te||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){const i=this.prototype;for(let n=0;n<e.length;n++)i._createMethodObserver(e[n],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let e=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;"function"==typeof e&&(e=e()),this._template=void 0!==e?e:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(e){let t=null;if(e&&(!Ee||ke)&&(t=Ue.import(e,"template"),Ee&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=we(e.url);else{const e=Ue.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=ze,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let i in t){let n=t[i];"value"in n&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[i]=n)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let i=e[t];if(this._canApplyPropertyDefault(t)){let e="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return be(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const i=this.importPath;n(this,t,e,i?_e(i):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=it(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Le&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=_e(this.importPath)),_e(e,t)}static _parseTemplateContent(e,i,n){return i.dynamicFns=i.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,i,n)}static _addTemplatePropertyEffect(e,i,n){return!Ae||i in this._properties||n.info.part.signature&&n.info.part.signature.static||n.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${i}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,i,n)}}}));class ki{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run((()=>{this._timer=null,Ti.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),Ti.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,i){return e instanceof ki?e._cancelAsync():e=new ki,e.setConfig(t,i),e}}let Ti=new Set;const Ai=function(e){Ti.add(e)},Li=function(){const e=Boolean(Ti.size);return Ti.forEach((e=>{try{e.flush()}catch(e){setTimeout((()=>{throw e}))}})),e};let Pi="string"==typeof document.head.style.touchAction,Hi="__polymerGestures",Oi="__polymerGesturesHandled",Ii="__polymerGesturesTouchAction",Vi=["mousedown","mousemove","mouseup","click"],Ni=[0,1,4,2],Di=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function Ri(e){return Vi.indexOf(e)>-1}let Fi=!1;function $i(e){if(!Ri(e)&&"touchend"!==e)return Pi&&Fi&&Me?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){Fi=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let qi=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Bi=[],ji={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Ui={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Yi(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];try{let i=e.getRootNode();if(e.id){let n=i.querySelectorAll(`label[for = '${e.id}']`);for(let e=0;e<n.length;e++)t.push(n[e])}}catch(e){}}return t}let Wi=function(e){let t=e.sourceCapabilities;var i;if((!t||t.firesTouchEvents)&&(e[Oi]={skip:!0},"click"===e.type)){let t=!1,n=Qi(e);for(let e=0;e<n.length;e++){if(n[e].nodeType===Node.ELEMENT_NODE)if("label"===n[e].localName)Bi.push(n[e]);else if(i=n[e],ji[i.localName]){let i=Yi(n[e]);for(let e=0;e<i.length;e++)t=t||Bi.indexOf(i[e])>-1}if(n[e]===Xi.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function Ki(e){let t=qi?["click"]:Vi;for(let i,n=0;n<t.length;n++)i=t[n],e?(Bi.length=0,document.addEventListener(i,Wi,!0)):document.removeEventListener(i,Wi,!0)}function Ji(e){let t=e.type;if(!Ri(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!Di&&(t=Ni[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let Xi={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Gi(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function Zi(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){Xi.mouse.mouseIgnoreJob||Ki(!0),Xi.mouse.target=Qi(e)[0],Xi.mouse.mouseIgnoreJob=ki.debounce(Xi.mouse.mouseIgnoreJob,Ct.after(2500),(function(){Ki(),Xi.mouse.target=null,Xi.mouse.mouseIgnoreJob=null}))}),!!Fi&&{passive:!0});const Qi=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],en={},tn=[];function nn(e){const t=Qi(e);return t.length>0?t[0]:e.target}function on(e){let t,i=e.type,n=e.currentTarget[Hi];if(!n)return;let o=n[i];if(o){if(!e[Oi]&&(e[Oi]={},"touch"===i.slice(0,5))){let t=e.changedTouches[0];if("touchstart"===i&&1===e.touches.length&&(Xi.touch.id=t.identifier),Xi.touch.id!==t.identifier)return;Pi||"touchstart"!==i&&"touchmove"!==i||function(e){let t=e.changedTouches[0],i=e.type;if("touchstart"===i)Xi.touch.x=t.clientX,Xi.touch.y=t.clientY,Xi.touch.scrollDecided=!1;else if("touchmove"===i){if(Xi.touch.scrollDecided)return;Xi.touch.scrollDecided=!0;let i=function(e){let t="auto",i=Qi(e);for(let e,n=0;n<i.length;n++)if(e=i[n],e[Ii]){t=e[Ii];break}return t}(e),n=!1,o=Math.abs(Xi.touch.x-t.clientX),r=Math.abs(Xi.touch.y-t.clientY);e.cancelable&&("none"===i?n=!0:"pan-x"===i?n=r>o:"pan-y"===i&&(n=o>r)),n?e.preventDefault():hn("track")}}(e)}if(t=e[Oi],!t.skip){for(let i,n=0;n<tn.length;n++)i=tn[n],o[i.name]&&!t[i.name]&&i.flow&&i.flow.start.indexOf(e.type)>-1&&i.reset&&i.reset();for(let n,r=0;r<tn.length;r++)n=tn[r],o[n.name]&&!t[n.name]&&(t[n.name]=!0,n[i](e))}}}function rn(e,t,i){return!!en[t]&&(function(e,t,i){let n=en[t],o=n.deps,r=n.name,a=e[Hi];a||(e[Hi]=a={});for(let t,i,n=0;n<o.length;n++)t=o[n],qi&&Ri(t)&&"click"!==t||(i=a[t],i||(a[t]=i={_count:0}),0===i._count&&e.addEventListener(t,on,$i(t)),i[r]=(i[r]||0)+1,i._count=(i._count||0)+1);e.addEventListener(t,i),n.touchAction&&ln(e,n.touchAction)}(e,t,i),!0)}function an(e,t,i){return!!en[t]&&(function(e,t,i){let n=en[t],o=n.deps,r=n.name,a=e[Hi];if(a)for(let t,i,n=0;n<o.length;n++)t=o[n],i=a[t],i&&i[r]&&(i[r]=(i[r]||1)-1,i._count=(i._count||1)-1,0===i._count&&e.removeEventListener(t,on,$i(t)));e.removeEventListener(t,i)}(e,t,i),!0)}function sn(e){tn.push(e);for(let t=0;t<e.emits.length;t++)en[e.emits[t]]=e}function ln(e,t){Pi&&e instanceof HTMLElement&&zt.run((()=>{e.style.touchAction=t})),e[Ii]=t}function dn(e,t,i){let n=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=i,it(e).dispatchEvent(n),n.defaultPrevented){let e=i.preventer||i.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function hn(e){let t=function(e){for(let t,i=0;i<tn.length;i++){t=tn[i];for(let i,n=0;n<t.emits.length;n++)if(i=t.emits[n],i===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function cn(e,t,i,n){t&&dn(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:n,prevent:function(e){return hn(e)}})}function pn(e,t,i){if(e.prevent)return!1;if(e.started)return!0;let n=Math.abs(e.x-t),o=Math.abs(e.y-i);return n>=5||o>=5}function un(e,t,i){if(!t)return;let n,o=e.moves[e.moves.length-2],r=e.moves[e.moves.length-1],a=r.x-e.x,s=r.y-e.y,l=0;o&&(n=r.x-o.x,l=r.y-o.y),dn(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:a,dy:s,ddx:n,ddy:l,sourceEvent:i,hover:function(){return function(e,t){let i=document.elementFromPoint(e,t),n=i;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let o=n;if(n=n.shadowRoot.elementFromPoint(e,t),o===n)break;n&&(i=n)}return i}(i.clientX,i.clientY)}})}function mn(e,t,i){let n=Math.abs(t.clientX-e.x),o=Math.abs(t.clientY-e.y),r=nn(i||t);!r||Ui[r.localName]&&r.hasAttribute("disabled")||(isNaN(n)||isNaN(o)||n<=25&&o<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=nn(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let i=t.getBoundingClientRect(),n=e.pageX,o=e.pageY;return!(n>=i.left&&n<=i.right&&o>=i.top&&o<=i.bottom)}return!1}(t))&&(e.prevent||dn(r,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}sn({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Zi(this.info)},mousedown:function(e){if(!Ji(e))return;let t=nn(e),i=this;Gi(this.info,(function(e){Ji(e)||(cn("up",t,e),Zi(i.info))}),(function(e){Ji(e)&&cn("up",t,e),Zi(i.info)})),cn("down",t,e)},touchstart:function(e){cn("down",nn(e),e.changedTouches[0],e)},touchend:function(e){cn("up",nn(e),e.changedTouches[0],e)}}),sn({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Zi(this.info)},mousedown:function(e){if(!Ji(e))return;let t=nn(e),i=this,n=function(e){let n=e.clientX,o=e.clientY;pn(i.info,n,o)&&(i.info.state=i.info.started?"mouseup"===e.type?"end":"track":"start","start"===i.info.state&&hn("tap"),i.info.addMove({x:n,y:o}),Ji(e)||(i.info.state="end",Zi(i.info)),t&&un(i.info,t,e),i.info.started=!0)};Gi(this.info,n,(function(e){i.info.started&&n(e),Zi(i.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=nn(e),i=e.changedTouches[0],n=i.clientX,o=i.clientY;pn(this.info,n,o)&&("start"===this.info.state&&hn("tap"),this.info.addMove({x:n,y:o}),un(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=nn(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),un(this.info,t,i))}}),sn({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){Ji(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){Ji(e)&&mn(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){mn(this.info,e.changedTouches[0],e)}});const fn=nn,vn=Fe((e=>class extends e{_addEventListenerToNode(e,t,i){rn(e,t,i)||super._addEventListenerToNode(e,t,i)}_removeEventListenerFromNode(e,t,i){an(e,t,i)||super._removeEventListenerFromNode(e,t,i)}})),gn=/:host\(:dir\((ltr|rtl)\)\)/g,yn=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,_n=/:dir\((?:ltr|rtl)\)/,bn=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),wn=[];let xn=null,Cn="";function zn(){Cn=document.documentElement.getAttribute("dir")}function Sn(e){if(!e.__autoDirOptOut){e.setAttribute("dir",Cn)}}function Mn(){zn(),Cn=document.documentElement.getAttribute("dir");for(let e=0;e<wn.length;e++)Sn(wn[e])}const En=Fe((e=>{bn||xn||(zn(),xn=new MutationObserver(Mn),xn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=At(e);class i extends t{static _processStyleText(e,i){return e=t._processStyleText.call(this,e,i),!bn&&_n.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(gn,':host([dir="$1"])'),t=t.replace(yn,':host([dir="$2"]) $1'),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(xn&&xn.takeRecords().length&&Mn(),wn.push(this),Sn(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=wn.indexOf(this);e>-1&&wn.splice(e,1)}}}return i.__activateDir=!1,i}));function kn(){document.body.removeAttribute("unresolved")}function Tn(e,t,i){return{index:e,removed:t,addedCount:i}}"interactive"===document.readyState||"complete"===document.readyState?kn():window.addEventListener("DOMContentLoaded",kn);const An=0,Ln=1,Pn=2,Hn=3;function On(e,t,i,n,o,r){let a,s=0,l=0,d=Math.min(i-t,r-o);if(0==t&&0==o&&(s=function(e,t,i){for(let n=0;n<i;n++)if(!Vn(e[n],t[n]))return n;return i}(e,n,d)),i==e.length&&r==n.length&&(l=function(e,t,i){let n=e.length,o=t.length,r=0;for(;r<i&&Vn(e[--n],t[--o]);)r++;return r}(e,n,d-s)),o+=s,r-=l,(i-=l)-(t+=s)==0&&r-o==0)return[];if(t==i){for(a=Tn(t,[],0);o<r;)a.removed.push(n[o++]);return[a]}if(o==r)return[Tn(t,[],i-t)];let h=function(e){let t=e.length-1,i=e[0].length-1,n=e[t][i],o=[];for(;t>0||i>0;){if(0==t){o.push(Pn),i--;continue}if(0==i){o.push(Hn),t--;continue}let r,a=e[t-1][i-1],s=e[t-1][i],l=e[t][i-1];r=s<l?s<a?s:a:l<a?l:a,r==a?(a==n?o.push(An):(o.push(Ln),n=a),t--,i--):r==s?(o.push(Hn),t--,n=s):(o.push(Pn),i--,n=l)}return o.reverse(),o}(function(e,t,i,n,o,r){let a=r-o+1,s=i-t+1,l=new Array(a);for(let e=0;e<a;e++)l[e]=new Array(s),l[e][0]=e;for(let e=0;e<s;e++)l[0][e]=e;for(let i=1;i<a;i++)for(let r=1;r<s;r++)if(Vn(e[t+r-1],n[o+i-1]))l[i][r]=l[i-1][r-1];else{let e=l[i-1][r]+1,t=l[i][r-1]+1;l[i][r]=e<t?e:t}return l}(e,t,i,n,o,r));a=void 0;let c=[],p=t,u=o;for(let e=0;e<h.length;e++)switch(h[e]){case An:a&&(c.push(a),a=void 0),p++,u++;break;case Ln:a||(a=Tn(p,[],0)),a.addedCount++,p++,a.removed.push(n[u]),u++;break;case Pn:a||(a=Tn(p,[],0)),a.addedCount++,p++;break;case Hn:a||(a=Tn(p,[],0)),a.removed.push(n[u]),u++}return a&&c.push(a),c}function In(e,t){return On(e,0,e.length,t,0,t.length)}function Vn(e,t){return e===t}function Nn(e){return"slot"===e.localName}let Dn=class{static getFlattenedNodes(e){const t=it(e);return Nn(e)?t.assignedNodes({flatten:!0}):Array.from(t.childNodes).map((e=>Nn(e)?it(e).assignedNodes({flatten:!0}):[e])).reduce(((e,t)=>e.concat(t)),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Nn(this._target)?this._listenSlots([this._target]):it(this._target).children&&(this._listenSlots(it(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,(e=>{this._processMutations(e)})):(this._nativeChildrenObserver=new MutationObserver((e=>{this._processMutations(e)})),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Nn(this._target)?this._unlistenSlots([this._target]):it(this._target).children&&(this._unlistenSlots(it(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,zt.run((()=>this.flush())))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let i=e[t];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),i=In(t,this._effectiveNodes);for(let t,n=0;n<i.length&&(t=i[n]);n++)for(let i,n=0;n<t.removed.length&&(i=t.removed[n]);n++)e.removedNodes.push(i);for(let n,o=0;o<i.length&&(n=i[o]);o++)for(let i=n.index;i<n.index+n.addedCount;i++)e.addedNodes.push(t[i]);this._effectiveNodes=t;let n=!1;return(e.addedNodes.length||e.removedNodes.length)&&(n=!0,this.callback.call(this._target,e)),n}_listenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];Nn(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];Nn(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};const Rn=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Li()}while(e||t)},Fn=Element.prototype,$n=Fn.matches||Fn.matchesSelector||Fn.mozMatchesSelector||Fn.msMatchesSelector||Fn.oMatchesSelector||Fn.webkitMatchesSelector,qn=function(e,t){return $n.call(e,t)};class Bn{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new Dn(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(it(this.node).contains(e))return!0;let t=e,i=e.ownerDocument;for(;t&&t!==i&&t!==this.node;)t=it(t).parentNode||it(t).host;return t===this.node}getOwnerRoot(){return it(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?it(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=it(this.node).assignedSlot;for(;t;)e.push(t),t=it(t).assignedSlot;return e}importNode(e,t){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return it(i).importNode(e,t)}getEffectiveChildNodes(){return Dn.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),i=[];for(let n,o=0,r=t.length;o<r&&(n=t[o]);o++)n.nodeType===Node.ELEMENT_NODE&&qn(n,e)&&i.push(n);return i}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function jn(e,t){for(let i=0;i<t.length;i++){let n=t[i];Object.defineProperty(e,n,{get:function(){return this.node[n]},configurable:!0})}}class Un{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}Bn.prototype.cloneNode,Bn.prototype.appendChild,Bn.prototype.insertBefore,Bn.prototype.removeChild,Bn.prototype.replaceChild,Bn.prototype.setAttribute,Bn.prototype.removeAttribute,Bn.prototype.querySelector,Bn.prototype.querySelectorAll,Bn.prototype.parentNode,Bn.prototype.firstChild,Bn.prototype.lastChild,Bn.prototype.nextSibling,Bn.prototype.previousSibling,Bn.prototype.firstElementChild,Bn.prototype.lastElementChild,Bn.prototype.nextElementSibling,Bn.prototype.previousElementSibling,Bn.prototype.childNodes,Bn.prototype.children,Bn.prototype.classList,Bn.prototype.textContent,Bn.prototype.innerHTML;let Yn=Bn;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(Bn.prototype).forEach((t=>{"activeElement"!=t&&(e.prototype[t]=Bn.prototype[t])})),jn(e.prototype,["classList"]),Yn=e,Object.defineProperties(Un.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&Wn(e).getOwnerRoot(),i=this.path;for(let e=0;e<i.length;e++){const n=i[e];if(Wn(n).getOwnerRoot()===t)return n}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let i=0;i<t.length;i++){let n=t[i];e[n]=function(){return this.node[n].apply(this.node,arguments)}}}(Bn.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),jn(Bn.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),function(e,t){for(let i=0;i<t.length;i++){let n=t[i];Object.defineProperty(e,n,{get:function(){return this.node[n]},set:function(e){this.node[n]=e},configurable:!0})}}(Bn.prototype,["textContent","innerHTML","className"]);const Wn=function(e){if((e=e||document)instanceof Yn)return e;if(e instanceof Un)return e;let t=e.__domApi;return t||(t=e instanceof Event?new Un(e):new Yn(e),e.__domApi=t),t},Kn=window.ShadyDOM,Jn=window.ShadyCSS;function Xn(e,t){return it(e).getRootNode()===t}const Gn="disable-upgrade",Zn=e=>{for(;e;){const t=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]};Fe((e=>{const t=Ei(e);let i=Zn(t);return class extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return i.call(this).concat(Gn)}_initializeProperties(){this.hasAttribute(Gn)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}attributeChangedCallback(e,t,i,n){e==Gn?this.__isUpgradeDisabled&&null==i&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,it(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(e,t,i,n)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}}));const Qn="disable-upgrade";let eo=window.ShadyCSS;const to=Fe((e=>{const t=vn(Ei(e)),i=Mi?t:En(t),n=Zn(i),o={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class r extends i{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(e,t,i){(this.__dataAttributes&&this.__dataAttributes[e]||e===Qn)&&this.attributeChangedCallback(e,t,i,null)}setAttribute(e,t){if(Ne&&!this._legacyForceObservedAttributes){const i=this.getAttribute(e);super.setAttribute(e,t),this.__attributeReaction(e,i,String(t))}else super.setAttribute(e,t)}removeAttribute(e){if(Ne&&!this._legacyForceObservedAttributes){const t=this.getAttribute(e);super.removeAttribute(e),this.__attributeReaction(e,t,null)}else super.removeAttribute(e)}static get observedAttributes(){return Ne&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype),this.__observedAttributes):n.call(this).concat(Qn)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(e,t,i,n){t!==i&&(e==Qn?this.__isUpgradeDisabled&&null==i&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,it(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(e,t,i,n),this.attributeChanged(e,t,i)))}attributeChanged(e,t,i){}_initializeProperties(){if(Te&&this.hasAttribute(Qn))this.__isUpgradeDisabled=!0;else{let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),Ne&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const e=this.attributes;for(let t=0,i=e.length;t<i;t++){const i=e[t];this.__attributeReaction(i.name,null,i.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,i){this._propertyToAttribute(e,t,i)}serializeValueToAttribute(e,t,i){this._valueToNodeAttribute(i||this,e,t)}extend(e,t){if(!e||!t)return e||t;let i=Object.getOwnPropertyNames(t);for(let n,o=0;o<i.length&&(n=i[o]);o++){let i=Object.getOwnPropertyDescriptor(t,n);i&&Object.defineProperty(e,n,i)}return e}mixin(e,t){for(let i in t)e[i]=t[i];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,i){i=i||{},t=null==t?{}:t;let n=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});n.detail=t;let o=i.node||this;return it(o).dispatchEvent(n),n}listen(e,t,i){e=e||this;let n=this.__boundListeners||(this.__boundListeners=new WeakMap),o=n.get(e);o||(o={},n.set(e,o));let r=t+i;o[r]||(o[r]=this._addMethodEventListenerToNode(e,t,i,this))}unlisten(e,t,i){e=e||this;let n=this.__boundListeners&&this.__boundListeners.get(e),o=t+i,r=n&&n[o];r&&(this._removeEventListenerFromNode(e,t,r),n[o]=null)}setScrollDirection(e,t){ln(t||this,o[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=it(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=Wn(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Wn(this).getEffectiveChildNodes()}queryDistributedElements(e){return Wn(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let i,n=0;i=e[n];n++)i.nodeType!==Node.COMMENT_NODE&&t.push(i.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?Wn(t).getDistributedNodes():[]}getContentChildren(e){let t=this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}));return t}isLightDescendant(e){const t=this;return t!==e&&it(t).contains(e)&&it(t).getRootNode()===it(e).getRootNode()}isLocalDescendant(e){return this.root===it(e).getRootNode()}scopeSubtree(e,t=!1){return function(e,t=!1){if(!Kn||!Jn)return null;if(!Kn.handlesDynamicScoping)return null;const i=Jn.ScopingShim;if(!i)return null;const n=i.scopeForNode(e),o=it(e).getRootNode(),r=e=>{if(!Xn(e,o))return;const t=Array.from(Kn.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const r=t[e];if(!Xn(r,o))continue;const a=i.currentScopeForNode(r);a!==n&&(""!==a&&i.unscopeNode(r,a),i.scopeNode(r,n))}};if(r(e),t){const t=new MutationObserver((e=>{for(let t=0;t<e.length;t++){const i=e[t];for(let e=0;e<i.addedNodes.length;e++){const t=i.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&r(t)}}}));return t.observe(e,{childList:!0,subtree:!0}),t}return null}(e,t)}getComputedStyleValue(e){return eo.getComputedStyleValue(this,e)}debounce(e,t,i){return this._debouncers=this._debouncers||{},this._debouncers[e]=ki.debounce(this._debouncers[e],i>0?Ct.after(i):zt,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?Ct.run(e.bind(this),t):~zt.run(e.bind(this))}cancelAsync(e){e<0?zt.cancel(~e):Ct.cancel(e)}create(e,t){let i=document.createElement(e);if(t)if(i.setProperties)i.setProperties(t);else for(let e in t)i[e]=t[e];return i}elementMatches(e,t){return qn(t||this,e)}toggleAttribute(e,t){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(t=!i.hasAttribute(e)),t?(it(i).setAttribute(e,""),!0):(it(i).removeAttribute(e),!1)}toggleClass(e,t,i){i=i||this,1==arguments.length&&(t=!i.classList.contains(e)),t?i.classList.add(e):i.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,i,n){n=n||this,this.transform("translate3d("+e+","+t+","+i+")",n)}arrayDelete(e,t){let i;if(Array.isArray(e)){if(i=e.indexOf(t),i>=0)return e.splice(i,1)}else{if(i=ht(this,e).indexOf(t),i>=0)return this.splice(e,i,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return r.prototype.is="",r})),io={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},no={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},oo=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},no);function ro(e,t,i,n){!function(e,t,i){const n=e._noAccessors,o=Object.getOwnPropertyNames(e);for(let r=0;r<o.length;r++){let a=o[r];if(!(a in i))if(n)t[a]=e[a];else{let i=Object.getOwnPropertyDescriptor(e,a);i&&(i.configurable=!0,Object.defineProperty(t,a,i))}}}(t,e,n);for(let e in io)t[e]&&(i[e]=i[e]||[],i[e].push(t[e]))}function ao(e,t,i){t=t||[];for(let n=e.length-1;n>=0;n--){let o=e[n];o?Array.isArray(o)?ao(o,t):t.indexOf(o)<0&&(!i||i.indexOf(o)<0)&&t.unshift(o):console.warn("behavior is null, check for missing or 404 import")}return t}function so(e,t){for(const i in t){const n=e[i],o=t[i];e[i]=!("value"in o)&&n&&"value"in n?Object.assign({value:n.value},o):o}}const lo=to(HTMLElement);function ho(e,t,i){let n;const o={};class r extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(n)for(let e,t=0;t<n.length;t++)e=n[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(n)for(let e=0;e<n.length;e++)so(t,n[e].properties);return so(t,e.properties),t}static get observers(){let t=[];if(n)for(let e,i=0;i<n.length;i++)e=n[i],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=o.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=r.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered(),Te&&a(e);const t=Object.getPrototypeOf(this);let i=o.beforeRegister;if(i)for(let e=0;e<i.length;e++)i[e].call(t);if(i=o.registered,i)for(let e=0;e<i.length;e++)i[e].call(t)}}_applyListeners(){super._applyListeners();const e=o.listeners;if(e)for(let t=0;t<e.length;t++){const i=e[t];if(i)for(let e in i)this._addMethodEventListenerToNode(this,e,i[e])}}_ensureAttributes(){const e=o.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const i=e[t];for(let e in i)this._ensureAttribute(e,i[e])}super._ensureAttributes()}ready(){super.ready();let e=o.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=o.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=o.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,i){super.attributeChanged();let n=o.attributeChanged;if(n)for(let o=0;o<n.length;o++)n[o].call(this,e,t,i)}}if(i){Array.isArray(i)||(i=[i]);let e=t.prototype.behaviors;n=ao(i,null,e),r.prototype.behaviors=e?e.concat(i):n}const a=t=>{n&&function(e,t,i){for(let n=0;n<t.length;n++)ro(e,t[n],i,oo)}(t,n,o),ro(t,e,o,no)};return Te||a(r.prototype),r.generatedFrom=e,r}const co=function(e){let t;return t="function"==typeof e?e:co.Class(e),e._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(t.is,t),t};function po(e,t,i,n,o){let r;o&&(r="object"==typeof i&&null!==i,r&&(n=e.__dataTemp[t]));let a=n!==i&&(n==n||i==i);return r&&a&&(e.__dataTemp[t]=i),a}co.Class=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let i=t?t(lo):lo;return i=ho(e,i,e.behaviors),i.is=i.prototype.is=e.is,i};const uo=Fe((e=>class extends e{_shouldPropertyChange(e,t,i){return po(this,e,t,i,!0)}})),mo=Fe((e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,i){return po(this,e,t,i,this.mutableData)}}));uo._mutablePropertyChange=po;let fo=null;function vo(){return fo}vo.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:vo,writable:!0}});const go=Ci(vo),yo=uo(go);const _o=Ci(class{});function bo(e,t){for(let i=0;i<t.length;i++){let n=t[i];if(Boolean(e)!=Boolean(n.__hideTemplateChildren__))if(n.nodeType===Node.TEXT_NODE)e?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if("slot"===n.localName)if(e)n.__polymerReplaced__=document.createComment("hidden-slot"),it(it(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const e=n.__polymerReplaced__;e&&it(it(e).parentNode).replaceChild(n,e)}else n.style&&(e?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=e,n._showHideChildren&&n._showHideChildren(e)}}class wo extends _o{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(e&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,(e=>{e.model=this,i(e)}));else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(e,t,i)}}_showHideChildren(e){bo(e,this.children)}_setUnmanagedPropertyToNode(e,t,i){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(e,t,i)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}wo.prototype.__dataHost,wo.prototype.__templatizeOptions,wo.prototype._methodHost,wo.prototype.__templatizeOwner,wo.prototype.__hostProps;const xo=uo(wo);function Co(e){let t=e.__dataHost;return t&&t._methodHost||t}function zo(e,t,i){let n=i.mutableData?xo:wo;ko.mixin&&(n=ko.mixin(n));let o=class extends n{};return o.prototype.__templatizeOptions=i,o.prototype._bindTemplate(e),function(e,t,i,n){let o=i.hostProps||{};for(let t in n.instanceProps){delete o[t];let i=n.notifyInstanceProp;i&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Eo(t,i)})}if(n.forwardHostProp&&t.__dataHost)for(let t in o)i.hasHostProps||(i.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,i){e.__dataHost._setPendingPropertyOrPath("_host_"+t,i[t],!0,!0)}})}(o,e,t,i),o}function So(e,t,i,n){let o=i.forwardHostProp;if(o&&t.hasHostProps){const r="template"==e.localName;let a=t.templatizeTemplateClass;if(!a){if(r){let e=i.mutableData?yo:go;class n extends e{}a=t.templatizeTemplateClass=n}else{const i=e.constructor;class n extends i{}a=t.templatizeTemplateClass=n}let s=t.hostProps;for(let e in s)a.prototype._addPropertyEffect("_host_"+e,a.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Mo(e,o)}),a.prototype._createNotifyingProperty("_host_"+e);Ae&&n&&function(e,t,i){const n=i.constructor._properties,{propertyEffects:o}=e,{instanceProps:r}=t;for(let e in o)if(!(n[e]||r&&r[e])){const t=o[e];for(let i=0;i<t.length;i++){const{part:n}=t[i].info;if(!n.signature||!n.signature.static){console.warn(`Property '${e}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(t,i,n)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),r)!function(e,t){fo=e,Object.setPrototypeOf(e,t.prototype),new t,fo=null}(e,a),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,a.prototype);const i=t.hostProps;for(let t in i)if(t="_host_"+t,t in e){const i=e[t];delete e[t],e.__data[t]=i}}}}function Mo(e,t){return function(e,i,n){t.call(e.__templatizeOwner,i.substring(6),n[i])}}function Eo(e,t){return function(e,i,n){t.call(e.__templatizeOwner,e,i,n[i])}}function ko(e,t,i){if(Ee&&!Co(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let n=(t?t.constructor:wo)._parseTemplate(e),o=n.templatizeInstanceClass;o||(o=zo(e,n,i),n.templatizeInstanceClass=o);const r=Co(e);So(e,n,i,r);let a=class extends o{};return a.prototype._methodHost=r,a.prototype.__dataHost=e,a.prototype.__templatizeOwner=t,a.prototype.__hostProps=n.hostProps,a}let To=!1;function Ao(){if(Te&&!xe){if(!To){To=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}const Lo=vn(mo(Ci(HTMLElement)));customElements.define("dom-bind",class extends Lo{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),Ee)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,i,n){this.mutableData=!0}connectedCallback(){Ao()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){it(it(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver((()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()}));return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});const Po=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});class Ho{constructor(e,t){Vo(e,t);const i=t.reduce(((t,i,n)=>t+Oo(i)+e[n+1]),e[0]);this.value=i.toString()}toString(){return this.value}}function Oo(e){if(e instanceof Ho)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}const Io=function(e,...t){Vo(e,t);const i=document.createElement("template");let n=t.reduce(((t,i,n)=>t+function(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Ho)return Oo(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}(i)+e[n+1]),e[0]);return Po&&(n=Po.createHTML(n)),i.innerHTML=n,i},Vo=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw new TypeError("Invalid call to the html template tag")},No=Ei(HTMLElement),Do=mo(No);class Ro extends Do{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!Ve,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),Ao()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=it(it(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const e=this;let t=this.template=e._templateInfo?e:this.querySelector("template");if(!t){let e=new MutationObserver((()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()}));return e.observe(this,{childList:!0}),!1}let i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.__ctor=ko(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(e,t){let i=this.__instances;for(let n,o=0;o<i.length&&(n=i[o]);o++)n.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,i){if((n=this.as)===(o=t)||rt(n,o)||at(n,o)){let n=e[this.itemsIndexAs];t==this.as&&(this.items[n]=i);let o=st(this.as,`${JSCompiler_renameProperty("items",this)}.${n}`,t);this.notifyPath(o,i)}var n,o}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,i=this.__getMethodHost();return function(){return i[t].apply(i,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let i=0;i<t.length;i++)0===e.indexOf(t[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||("items"===e.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,t=0){this.__renderDebouncer=ki.debounce(this.__renderDebouncer,t>0?Ct.after(t):zt,e.bind(this)),Ai(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Rn()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const t=this.__sortAndFilterItems(e),i=this.__calculateLimit(t.length);this.__updateInstances(e,i,t),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame((()=>{this.__chunkingId=null,this.__continueChunking()}))),this._setRenderedItemCount(this.__instances.length),Ve&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let t=new Array(e.length);for(let i=0;i<e.length;i++)t[i]=i;return this.__filterFn&&(t=t.filter(((t,i,n)=>this.__filterFn(e[t],i,n)))),this.__sortFn&&t.sort(((t,i)=>this.__sortFn(e[t],e[i]))),t}__calculateLimit(e){let t=e;const i=this.__instances.length;if(this.initialCount){let n;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(t=Math.min(e,this.initialCount),n=Math.max(t-i,0),this.__chunkCount=n||1):(n=Math.min(Math.max(e-i,0),this.__chunkCount),t=Math.min(i+n,e)),this.__shouldMeasureChunk=n===this.__chunkCount,this.__shouldContinueChunking=t<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,t}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,t=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*t)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,t,i){const n=this.__itemsIdxToInstIdx={};let o;for(o=0;o<t;o++){let t=this.__instances[o],r=i[o],a=e[r];n[r]=o,t?(t._setPendingProperty(this.as,a),t._setPendingProperty(this.indexAs,o),t._setPendingProperty(this.itemsIndexAs,r),t._flushProperties()):this.__insertInstance(a,o,r)}for(let e=this.__instances.length-1;e>=o;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const i=it(t.root);for(let e=0;e<t.children.length;e++){let n=t.children[e];i.appendChild(n)}return t}__attachInstance(e,t){let i=this.__instances[e];t.insertBefore(i.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,t,i){let n={};return n[this.as]=e,n[this.indexAs]=t,n[this.itemsIndexAs]=i,new this.__ctor(n)}__insertInstance(e,t,i){const n=this.__stampInstance(e,t,i);let o=this.__instances[t+1],r=o?o.children[0]:this;return it(it(this).parentNode).insertBefore(n.root,r),this.__instances[t]=n,n}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let i=e.slice(6),n=i.indexOf("."),o=n<0?i:i.substring(0,n);if(o==parseInt(o,10)){let e=n<0?"":i.substring(n+1);this.__handleObservedPaths(e);let r=this.__itemsIdxToInstIdx[o],a=this.__instances[r];if(a){let i=this.as+(e?"."+e:"");a._setPendingPropertyOrPath(i,t,!1,!0),a._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return function(e,t){let i;for(;t;)if(i=t.__dataHost?t:t.__templatizeInstance){if(i.__dataHost==e)return i;t=i.__dataHost}else t=it(t).parentNode;return null}(this.template,e)}}customElements.define(Ro.is,Ro);class Fo extends No{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=ki.debounce(this.__renderDebouncer,zt,(()=>this.__render())),Ai(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=it(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||it(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),Ao()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let t=e._templateInfo?e:it(e).querySelector("template");if(!t){let e=new MutationObserver((()=>{if(!it(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()}));return e.observe(this,{childList:!0}),!1}this.__template=t}return!0}__ensureInstance(){let e=it(this).parentNode;if(this.__hasInstance()){let t=this.__getInstanceNodes();if(t&&t.length){if(it(this).previousSibling!==t[t.length-1])for(let i,n=0;n<t.length&&(i=t[n]);n++)it(e).insertBefore(i,this)}}else{if(!e)return!1;if(!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){Rn()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),Ve&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}const $o=Ie?class extends Fo{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const t=this.__dataHost||this;if(Ee&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const i=t._bindTemplate(this.__template,!0);i.runEffects=(e,t,i)=>{let n=this.__syncInfo;if(this.if)n&&(this.__syncInfo=null,this._showHideChildren(),t=Object.assign(n.changedProps,t)),e(t,i);else if(this.__instance)if(n||(n=this.__syncInfo={runEffects:e,changedProps:{}}),i)for(const e in t){const t=ot(e);n.changedProps[t]=this.__dataHost[t]}else Object.assign(n.changedProps,t)},this.__instance=t._stampTemplate(this.__template,i),it(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,bo(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}:class extends Fo{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=ko(this.__template,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[ot(e)]=!0))}})),this.__instance=new this.__ctor,it(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=it(e[0]).parentNode;if(t){t=it(t);for(let i,n=0;n<e.length&&(i=e[n]);n++)t.removeChild(i)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}};customElements.define($o.is,$o);let qo=Fe((e=>{let t=Ei(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let i=t.path;if(i==JSCompiler_renameProperty("items",this)){let i=t.base||[],n=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),n){let e=In(i,n);this.__applySplices(e)}this.__lastItems=i,this.__lastMulti=e}else if(t.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(t.value.indexSplices);else{let e=i.slice(`${JSCompiler_renameProperty("items",this)}.`.length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let i=0;i<e.length;i++){let n=e[i];t.forEach(((e,i)=>{e<n.index||(e>=n.index+n.removed.length?t.set(i,e+n.addedCount-n.removed.length):t.set(i,-1))}));for(let e=0;e<n.addedCount;e++){let i=n.index+e;t.has(this.items[i])&&t.set(this.items[i],i)}}this.__updateLinks();let i=0;t.forEach(((e,n)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,t.delete(n)):i++}))}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach((t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)}))}else this.__selectedMap.forEach((e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)}))}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach(((i,n)=>{t==e++&&this.deselect(n)}))}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let i;this.__selectedMap.delete(e),this.multi&&(i=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})),Bo=qo(No);class jo extends Bo{static get is(){return"array-selector"}static get template(){return null}}customElements.define(jo.is,jo);const Uo=new pe;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,i){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,i){},styleSubtree(e,t){Uo.processStyles(),q(e,t)},styleElement(e){Uo.processStyles()},styleDocument(e){Uo.processStyles(),q(document.body,e)},getComputedStyleValue:(e,t)=>B(e,t),flushCustomStyles(){},nativeCss:f,nativeShadow:h,cssBuild:p,disableRuntime:m}),window.ShadyCSS.CustomStyleInterface=Uo;const Yo="include",Wo=window.ShadyCSS.CustomStyleInterface;class Ko extends HTMLElement{constructor(){super(),this._style=null,Wo.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute(Yo);return t&&(e.removeAttribute(Yo),e.textContent=function(e){let t=e.trim().split(/\s+/),i="";for(let e=0;e<t.length;e++)i+=tt(t[e]);return i}(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",Ko);const Jo=to(HTMLElement).prototype;var Xo={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},Go={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},Zo={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},Qo=/[a-z0-9*]/,er=/U\+/,tr=/^arrow/,ir=/^space(bar)?/,nr=/^escape$/;function or(e,t){var i="";if(e){var n=e.toLowerCase();" "===n||ir.test(n)?i="space":nr.test(n)?i="esc":1==n.length?t&&!Qo.test(n)||(i=n):i=tr.test(n)?n.replace("arrow",""):"multiply"==n?"*":n}return i}function rr(e,t){return e.key?or(e.key,t):e.detail&&e.detail.key?or(e.detail.key,t):(i=e.keyIdentifier,n="",i&&(i in Xo?n=Xo[i]:er.test(i)?(i=parseInt(i.replace("U+","0x"),16),n=String.fromCharCode(i).toLowerCase()):n=i.toLowerCase()),n||function(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):Go[e]),t}(e.keyCode)||"");var i,n}function ar(e,t){return rr(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function sr(e){return e.trim().split(" ").map((function(e){return function(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce((function(e,t){var i=t.split(":"),n=i[0],o=i[1];return n in Zo?(e[Zo[n]]=!0,e.hasModifiers=!0):(e.key=n,e.event=o||"keydown"),e}),{combo:e.split(":").shift()})}(e)}))}const lr={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var i=sr(t),n=0;n<i.length;++n)if(ar(i[n],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map((function(e){return e.keyBindings}));return-1===e.indexOf(this.keyBindings)&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach((function(e){for(var t in e)this._addKeyBinding(t,e[t])}),this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort((function(e,t){var i=e[0].hasModifiers;return i===t[0].hasModifiers?0:i?-1:1}))},_addKeyBinding:function(e,t){sr(e).forEach((function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(e){var t=this._keyBindings[e],i=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,i]),this.keyEventTarget.addEventListener(e,i)}),this)},_unlistenKeyEventListeners:function(){for(var e,t,i,n;this._boundKeyHandlers.length;)t=(e=this._boundKeyHandlers.pop())[0],i=e[1],n=e[2],t.removeEventListener(i,n)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var i=0;i<e.length;i++){var n=e[i][0],o=e[i][1];if(ar(n,t)&&(this._triggerKeyHandler(n,o,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,i){var n=Object.create(e);n.keyboardEvent=i;var o=new CustomEvent(e.event,{detail:n,cancelable:!0});this[t].call(this,o),o.defaultPrevented&&i.preventDefault()}},dr=Io`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;dr.setAttribute("style","display: none;"),document.head.appendChild(dr.content);var hr=document.createElement("style");hr.textContent="[hidden] { display: none !important; }",document.head.appendChild(hr);class cr{constructor(e){cr[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return cr.types[e]&&cr.types[e][t]}set value(e){var t=this.type,i=this.key;t&&i&&(t=cr.types[t]=cr.types[t]||{},null==e?delete t[i]:t[i]=e)}get list(){if(this.type){var e=cr.types[this.type];return e?Object.keys(e).map((function(e){return pr[this.type][e]}),this):[]}}byKey(e){return this.key=e,this.value}}cr[" "]=function(){},cr.types={};var pr=cr.types;co({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,i){var n=new cr({type:e,key:t});return void 0!==i&&i!==n.value?n.value=i:this.value!==n.value&&(this.value=n.value),n},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new cr({type:this.type,key:e}).value}}),co({_template:Io`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:Jo.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Wn(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Wn(this.root).appendChild(this._img))}});const ur=co({_template:Io`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},timeout:{type:Number,value:150},_text:{type:String,value:""}},created:function(){ur.instance||(ur.instance=this),document.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(e){this._text="",this.async((function(){this._text=e}),this.timeout)},_onIronAnnounce:function(e){e.detail&&e.detail.text&&this.announce(e.detail.text)}});ur.instance=null,ur.requestAvailability=function(){ur.instance||(ur.instance=document.createElement("iron-a11y-announcer")),document.body?document.body.appendChild(ur.instance):document.addEventListener("load",(function(){document.body.appendChild(ur.instance)}))};let mr=null;const fr={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){mr=new cr({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return mr&&mr.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(e){return void 0===e&&void 0!==this.value?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(e),!this.invalid},_getValidity:function(e){return!this.hasValidator()||this._validator.validate(e)}};if(co({_template:Io`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[fr],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){ur.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=Wn(this).observeNodes(function(e){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&(Wn(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var e;if(this.allowedPattern)e=new RegExp(this.allowedPattern);else if("number"===this.inputElement.type)e=/[0-9.,e-]/;return e},_bindValueChanged:function(e,t){t&&(void 0===e?t.value=null:e!==t.value&&(this.inputElement.value=e),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:e}))},_onInput:function(){this.allowedPattern&&!this._patternAlreadyChecked&&(this._checkPatternValidity()||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput));this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(e){var t=8==e.keyCode||9==e.keyCode||13==e.keyCode||27==e.keyCode,i=19==e.keyCode||20==e.keyCode||45==e.keyCode||46==e.keyCode||144==e.keyCode||145==e.keyCode||e.keyCode>32&&e.keyCode<41||e.keyCode>111&&e.keyCode<124;return!(t||0==e.charCode&&i)},_onKeypress:function(e){if(this.allowedPattern||"number"===this.inputElement.type){var t=this._patternRegExp;if(t&&!(e.metaKey||e.ctrlKey||e.altKey)){this._patternAlreadyChecked=!0;var i=String.fromCharCode(e.charCode);this._isPrintable(e)&&!t.test(i)&&(e.preventDefault(),this._announceInvalidCharacter("Invalid character "+i+" not entered."))}}},_checkPatternValidity:function(){var e=this._patternRegExp;if(!e)return!0;for(var t=0;t<this.inputElement.value.length;t++)if(!e.test(this.inputElement.value[t]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var e=this.inputElement.checkValidity();return e&&(this.required&&""===this.bindValue?e=!1:this.hasValidator()&&(e=fr.validate.call(this,this.bindValue))),this.invalid=!e,this.fire("iron-input-validate"),e},_announceInvalidCharacter:function(e){this.fire("iron-announce",{text:e})},_computeValue:function(e){return e}}),!window.polymerSkipLoadingFontRoboto){const e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.crossOrigin="anonymous",e.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(e)}const vr=Io`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`;vr.setAttribute("style","display: none;"),document.head.appendChild(vr.content);const gr={attached:function(){this.fire("addon-attached")},update:function(e){}};co({_template:Io`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,is:"paper-input-char-counter",behaviors:[gr],properties:{_charCounterStr:{type:String,value:"0"}},update:function(e){if(e.inputElement){e.value=e.value||"";var t=e.value.toString().length.toString();e.inputElement.hasAttribute("maxlength")&&(t+="/"+e.inputElement.getAttribute("maxlength")),this._charCounterStr=t}}});const yr=Io`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;yr.setAttribute("style","display: none;"),document.head.appendChild(yr.content);const _r=Io`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;_r.setAttribute("style","display: none;"),document.head.appendChild(_r.content);const br=Io`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`;br.setAttribute("style","display: none;"),document.head.appendChild(br.content),co({_template:Io`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }


      .input-content ::slotted(label):before,
      .input-content ::slotted(.paper-input-label):before {
        @apply --paper-input-container-label-before;
      }

      .input-content ::slotted(label):after,
      .input-content ::slotted(.paper-input-label):after {
        @apply --paper-input-container-label-after;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return ft(this.attrForValue)},get _inputElement(){return Wn(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&""!=this._inputElementValue?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(e){this._addons||(this._addons=[]);var t=e.target;-1===this._addons.indexOf(t)&&(this._addons.push(t),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(e){this._handleValueAndAutoValidate(e.target)},_onValueChanged:function(e){var t=e.target;this.__isFirstValueUpdate&&(this.__isFirstValueUpdate=!1,void 0===t.value||""===t.value)||this._handleValueAndAutoValidate(e.target)},_handleValue:function(e){var t=this._inputElementValue;t||0===t||"number"===e.type&&!e.checkValidity()?this._inputHasContent=!0:this._inputHasContent=!1,this.updateAddons({inputElement:e,value:t,invalid:this.invalid})},_handleValueAndAutoValidate:function(e){var t;this.autoValidate&&e&&(t=e.validate?e.validate(this._inputElementValue):e.checkValidity(),this.invalid=!t);this._handleValue(e)},_onIronInputValidate:function(e){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(e){for(var t,i=0;t=this._addons[i];i++)t.update(e)},_computeInputContentClass:function(e,t,i,n,o){var r="input-content";if(e)o&&(r+=" label-is-hidden"),n&&(r+=" is-invalid");else{var a=this.querySelector("label");t||o?(r+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",n?r+=" is-invalid":i&&(r+=" label-is-highlighted")):(a&&(this.$.labelAndInputContainer.style.position="relative"),n&&(r+=" is-invalid"))}return i&&(r+=" focused"),r},_computeUnderlineClass:function(e,t){var i="underline";return t?i+=" is-invalid":e&&(i+=" is-highlighted"),i},_computeAddOnContentClass:function(e,t){var i="add-on-content";return t?i+=" is-invalid":e&&(i+=" is-highlighted"),i}}),co({_template:Io`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      }

      #a11yWrapper {
        visibility: hidden;
      }

      :host([invalid]) #a11yWrapper {
        visibility: visible;
      }
    </style>

    <!--
    If the paper-input-error element is directly referenced by an
    \`aria-describedby\` attribute, such as when used as a paper-input add-on,
    then applying \`visibility: hidden;\` to the paper-input-error element itself
    does not hide the error.

    For more information, see:
    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description
    -->
    <div id="a11yWrapper">
      <slot></slot>
    </div>
`,is:"paper-input-error",behaviors:[gr],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(e){this._setInvalid(e.invalid)}});const wr={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}},xr={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){this._setFocused("focus"===e.type)},_disabledChanged:function(e,t){this.setAttribute("aria-disabled",e?"true":"false"),this.style.pointerEvents=e?"none":"",e?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}},Cr={NextLabelID:1,NextAddonID:1,NextInputID:1},zr={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!No&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(e,t){return e=e?e+" "+t:t},_onAddonAttached:function(e){var t=Wn(e).rootTarget;if(t.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,t.id);else{var i="paper-input-add-on-"+Cr.NextAddonID++;t.id=i,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,i)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(e){xr._focusBlurHandler.call(this,e),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(e){var t=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async((function(){this.setAttribute("tabindex",t),this._shiftTabPressed=!1}),1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(e){try{var t=this.inputElement.selectionStart;this.value=e,this.inputElement.selectionStart=t,this.inputElement.selectionEnd=t}catch(t){this.value=e}},_computeAlwaysFloatLabel:function(e,t){return t||e},_updateAriaLabelledBy:function(){var e,t=Wn(this.root).querySelector("label");t?(t.id?e=t.id:(e="paper-input-label-"+Cr.NextLabelID++,t.id=e),this._ariaLabelledBy=e):this._ariaLabelledBy=""},_generateInputId:function(){this._inputId&&""!==this._inputId||(this._inputId="input-"+Cr.NextInputID++)},_onChange:function(e){this.shadowRoot&&this.fire(e.type,{sourceEvent:e},{node:this,bubbles:e.bubbles,cancelable:e.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var e=document.activeElement;e instanceof HTMLElement&&e!==document.body&&e!==document.documentElement||this._focusableElement.focus()}}};let Sr;co({is:"paper-input",_template:Io`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]" role$="[[inputRole]]" aria-haspopup$="[[inputAriaHaspopup]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,behaviors:[[xr,lr,zr],wr],properties:{value:{type:String},inputRole:{type:String,value:void 0},inputAriaHaspopup:{type:String,value:void 0}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}});const Mr={properties:{sizingTarget:{type:Object,value:function(){return this}},fitInto:{type:Object,value:window},noOverlap:{type:Boolean},positionTarget:{type:Element},horizontalAlign:{type:String},verticalAlign:{type:String},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},autoFitOnAttach:{type:Boolean,value:!1},expandSizingTargetForScrollbars:{type:Boolean,value:!1},_fitInfo:{type:Object}},get _fitWidth(){return this.fitInto===window?this.fitInto.innerWidth:this.fitInto.getBoundingClientRect().width},get _fitHeight(){return this.fitInto===window?this.fitInto.innerHeight:this.fitInto.getBoundingClientRect().height},get _fitLeft(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().left},get _fitTop(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().top},get _defaultPositionTarget(){var e=Wn(this).parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(e=e.host),e},get _localeHorizontalAlign(){if(this._isRTL){if("right"===this.horizontalAlign)return"left";if("left"===this.horizontalAlign)return"right"}return this.horizontalAlign},get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},get _isRTL(){return void 0===this._memoizedIsRTL&&(this._memoizedIsRTL="rtl"==window.getComputedStyle(this).direction),this._memoizedIsRTL},attached:function(){this.positionTarget=this.positionTarget||this._defaultPositionTarget,this.autoFitOnAttach&&("none"===window.getComputedStyle(this).display?setTimeout(function(){this.fit()}.bind(this)):(window.ShadyDOM&&ShadyDOM.flush(),this.fit()))},detached:function(){this.__deferredFit&&(clearTimeout(this.__deferredFit),this.__deferredFit=null)},fit:function(){this.position(),this.constrain(),this.center()},_discoverInfo:function(){if(!this._fitInfo){var e=window.getComputedStyle(this),t=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:"auto"!==e.top?"top":"auto"!==e.bottom?"bottom":null,horizontally:"auto"!==e.left?"left":"auto"!==e.right?"right":null},sizedBy:{height:"none"!==t.maxHeight,width:"none"!==t.maxWidth,minWidth:parseInt(t.minWidth,10)||0,minHeight:parseInt(t.minHeight,10)||0},margin:{top:parseInt(e.marginTop,10)||0,right:parseInt(e.marginRight,10)||0,bottom:parseInt(e.marginBottom,10)||0,left:parseInt(e.marginLeft,10)||0}}}},resetFit:function(){var e=this._fitInfo||{};for(var t in e.sizerInlineStyle)this.sizingTarget.style[t]=e.sizerInlineStyle[t];for(var t in e.inlineStyle)this.style[t]=e.inlineStyle[t];this._fitInfo=null},refit:function(){var e=this.sizingTarget.scrollLeft,t=this.sizingTarget.scrollTop;this.resetFit(),this.fit(),this.sizingTarget.scrollLeft=e,this.sizingTarget.scrollTop=t},position:function(){if(!this.__shouldPosition)return;this._discoverInfo(),window.ShadyDOM&&window.ShadyDOM.flush(),this.style.position="fixed",this.sizingTarget.style.boxSizing="border-box",this.style.left="0px",this.style.top="0px";var e=this.getBoundingClientRect(),t=this.__getNormalizedRect(this.positionTarget),i=this.__getNormalizedRect(this.fitInto);let n,o,r,a;this.expandSizingTargetForScrollbars&&(n=this.sizingTarget.offsetWidth,o=this.sizingTarget.offsetHeight,r=this.sizingTarget.clientWidth,a=this.sizingTarget.clientHeight);var s=this._fitInfo.margin,l={width:e.width+s.left+s.right,height:e.height+s.top+s.bottom},d=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,l,e,t,i),h=d.left+s.left,c=d.top+s.top,p=Math.min(i.right-s.right,h+e.width),u=Math.min(i.bottom-s.bottom,c+e.height);h=Math.max(i.left+s.left,Math.min(h,p-this._fitInfo.sizedBy.minWidth)),c=Math.max(i.top+s.top,Math.min(c,u-this._fitInfo.sizedBy.minHeight));const m=Math.max(p-h,this._fitInfo.sizedBy.minWidth),f=Math.max(u-c,this._fitInfo.sizedBy.minHeight);this.sizingTarget.style.maxWidth=m+"px",this.sizingTarget.style.maxHeight=f+"px";const v=h-e.left,g=c-e.top;if(this.style.left=`${v}px`,this.style.top=`${g}px`,this.expandSizingTargetForScrollbars){const e=this.sizingTarget.offsetHeight,t=e-this.sizingTarget.clientHeight-(o-a);if(t>0){const n=i.height-s.top-s.bottom,o=Math.min(n,f+t);this.sizingTarget.style.maxHeight=`${o}px`;const r=this.sizingTarget.offsetHeight,a=r-e;let l;"top"===d.verticalAlign?l=g:"middle"===d.verticalAlign?l=g-a/2:"bottom"===d.verticalAlign&&(l=g-a),l=Math.max(i.top+s.top,Math.min(l,i.bottom-s.bottom-r)),this.style.top=`${l}px`}const l=this.sizingTarget.offsetWidth,h=l-this.sizingTarget.clientWidth-(n-r);if(h>0){const e=(()=>{if(void 0!==Sr)return Sr;const e=document.createElement("div");Object.assign(e.style,{overflow:"auto",position:"fixed",left:"0px",top:"0px",maxWidth:"100px",maxHeight:"100px"});const t=document.createElement("div");return t.style.width="200px",t.style.height="200px",e.appendChild(t),document.body.appendChild(e),Sr=Math.abs(e.offsetWidth-100)>1?e.offsetWidth-e.clientWidth:0,document.body.removeChild(e),Sr})(),t=i.width-s.left-s.right,n=Math.min(t,m+h-e);this.sizingTarget.style.maxWidth=`${n}px`;const o=this.sizingTarget.offsetWidth+e,r=o-l;let a;"left"===d.horizontalAlign?a=v:"center"===d.horizontalAlign?a=v-r/2:"right"===d.horizontalAlign&&(a=v-r),a=Math.max(i.left+s.left,Math.min(a,i.right-s.right-o)),this.style.left=`${a}px`}}},constrain:function(){if(!this.__shouldPosition){this._discoverInfo();var e=this._fitInfo;e.positionedBy.vertically||(this.style.position="fixed",this.style.top="0px"),e.positionedBy.horizontally||(this.style.position="fixed",this.style.left="0px"),this.sizingTarget.style.boxSizing="border-box";var t=this.getBoundingClientRect();e.sizedBy.height||this.__sizeDimension(t,e.positionedBy.vertically,"top","bottom","Height"),e.sizedBy.width||this.__sizeDimension(t,e.positionedBy.horizontally,"left","right","Width")}},_sizeDimension:function(e,t,i,n,o){this.__sizeDimension(e,t,i,n,o)},__sizeDimension:function(e,t,i,n,o){var r=this._fitInfo,a=this.__getNormalizedRect(this.fitInto),s="Width"===o?a.width:a.height,l=t===n,d=l?s-e[n]:e[i],h=r.margin[l?i:n],c="offset"+o,p=this[c]-this.sizingTarget[c];this.sizingTarget.style["max"+o]=s-h-d-p+"px"},center:function(){if(!this.__shouldPosition){this._discoverInfo();var e=this._fitInfo.positionedBy;if(!e.vertically||!e.horizontally){this.style.position="fixed",e.vertically||(this.style.top="0px"),e.horizontally||(this.style.left="0px");var t=this.getBoundingClientRect(),i=this.__getNormalizedRect(this.fitInto);if(!e.vertically){var n=i.top-t.top+(i.height-t.height)/2;this.style.top=n+"px"}if(!e.horizontally){var o=i.left-t.left+(i.width-t.width)/2;this.style.left=o+"px"}}}},__getNormalizedRect:function(e){return e===document.documentElement||e===window?{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}:e.getBoundingClientRect()},__getOffscreenArea:function(e,t,i){var n=Math.min(0,e.top)+Math.min(0,i.bottom-(e.top+t.height)),o=Math.min(0,e.left)+Math.min(0,i.right-(e.left+t.width));return Math.abs(n)*t.width+Math.abs(o)*t.height},__getPosition:function(e,t,i,n,o,r){var a,s=[{verticalAlign:"top",horizontalAlign:"left",top:o.top+this.verticalOffset,left:o.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:o.top+this.verticalOffset,left:o.right-i.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:o.bottom-i.height-this.verticalOffset,left:o.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:o.bottom-i.height-this.verticalOffset,left:o.right-i.width-this.horizontalOffset}];if(this.noOverlap){for(var l=0,d=s.length;l<d;l++){var h={};for(var c in s[l])h[c]=s[l][c];s.push(h)}s[0].top=s[1].top+=o.height,s[2].top=s[3].top-=o.height,s[4].left=s[6].left+=o.width,s[5].left=s[7].left-=o.width}t="auto"===t?null:t,(e="auto"===e?null:e)&&"center"!==e||(s.push({verticalAlign:"top",horizontalAlign:"center",top:o.top+this.verticalOffset+(this.noOverlap?o.height:0),left:o.left-n.width/2+o.width/2+this.horizontalOffset}),s.push({verticalAlign:"bottom",horizontalAlign:"center",top:o.bottom-i.height-this.verticalOffset-(this.noOverlap?o.height:0),left:o.left-n.width/2+o.width/2+this.horizontalOffset})),t&&"middle"!==t||(s.push({verticalAlign:"middle",horizontalAlign:"left",top:o.top-n.height/2+o.height/2+this.verticalOffset,left:o.left+this.horizontalOffset+(this.noOverlap?o.width:0)}),s.push({verticalAlign:"middle",horizontalAlign:"right",top:o.top-n.height/2+o.height/2+this.verticalOffset,left:o.right-i.width-this.horizontalOffset-(this.noOverlap?o.width:0)})),"middle"===t&&"center"===e&&s.push({verticalAlign:"middle",horizontalAlign:"center",top:o.top-n.height/2+o.height/2+this.verticalOffset,left:o.left-n.width/2+o.width/2+this.horizontalOffset});for(l=0;l<s.length;l++){var p=s[l],u=p.verticalAlign===t,m=p.horizontalAlign===e;if(!this.dynamicAlign&&!this.noOverlap&&u&&m){a=p;break}var f=(!t||u)&&(!e||m);if(this.dynamicAlign||f){if(p.offscreenArea=this.__getOffscreenArea(p,i,r),0===p.offscreenArea&&f){a=p;break}a=a||p;var v=p.offscreenArea-a.offscreenArea;(v<0||0===v&&(u||m))&&(a=p)}}return a}};var Er=new Set;const kr={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(Er.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():xe||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=Wn(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(Er.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?Er.delete(this):Er.add(this)}};var Tr=Element.prototype,Ar=Tr.matches||Tr.matchesSelector||Tr.mozMatchesSelector||Tr.msMatchesSelector||Tr.oMatchesSelector||Tr.webkitMatchesSelector;const Lr=new class{getTabbableNodes(e){var t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t}isFocusable(e){return Ar.call(e,"input, select, textarea, button, object")?Ar.call(e,":not([disabled])"):Ar.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")}isTabbable(e){return this.isFocusable(e)&&Ar.call(e,':not([tabindex="-1"])')&&this._isVisible(e)}_normalizedTabIndex(e){if(this.isFocusable(e)){var t=e.getAttribute("tabindex")||0;return Number(t)}return-1}_collectTabbableNodes(e,t){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var i=e;if(!this._isVisible(i))return!1;var n,o=this._normalizedTabIndex(i),r=o>0;o>=0&&t.push(i),n="content"===i.localName||"slot"===i.localName?Wn(i).getDistributedNodes():Wn(i.root||i).children;for(var a=0;a<n.length;a++)r=this._collectTabbableNodes(n[a],t)||r;return r}_isVisible(e){var t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&("hidden"!==(t=window.getComputedStyle(e)).visibility&&"none"!==t.display)}_sortByTabIndex(e){var t=e.length;if(t<2)return e;var i=Math.ceil(t/2),n=this._sortByTabIndex(e.slice(0,i)),o=this._sortByTabIndex(e.slice(i));return this._mergeSortByTabIndex(n,o)}_mergeSortByTabIndex(e,t){for(var i=[];e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?i.push(t.shift()):i.push(e.shift());return i.concat(e,t)}_hasLowerTabOrder(e,t){var i=Math.max(e.tabIndex,0),n=Math.max(t.tabIndex,0);return 0===i||0===n?n>i:i>n}};co({_template:Io`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--iron-overlay-backdrop-background-color, #000);
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
        @apply --iron-overlay-backdrop;
      }

      :host(.opened) {
        opacity: var(--iron-overlay-backdrop-opacity, 0.6);
        pointer-events: auto;
        @apply --iron-overlay-backdrop-opened;
      }
    </style>

    <slot></slot>
`,is:"iron-overlay-backdrop",properties:{opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},created:function(){this.__openedRaf=null},attached:function(){this.opened&&this._openedChanged(this.opened)},prepare:function(){this.opened&&!this.parentNode&&Wn(document.body).appendChild(this)},open:function(){this.opened=!0},close:function(){this.opened=!1},complete:function(){this.opened||this.parentNode!==document.body||Wn(this.parentNode).removeChild(this)},_onTransitionend:function(e){e&&e.target===this&&this.complete()},_openedChanged:function(e){if(e)this.prepare();else{var t=window.getComputedStyle(this);"0s"!==t.transitionDuration&&0!=t.opacity||this.complete()}this.isAttached&&(this.__openedRaf&&(window.cancelAnimationFrame(this.__openedRaf),this.__openedRaf=null),this.scrollTop=this.scrollTop,this.__openedRaf=window.requestAnimationFrame(function(){this.__openedRaf=null,this.toggleClass("opened",this.opened)}.bind(this)))}});const Pr=new class{constructor(){this._overlays=[],this._minimumZ=101,this._backdropElement=null,rn(document.documentElement,"tap",(function(){})),document.addEventListener("tap",this._onCaptureClick.bind(this),!0),document.addEventListener("focus",this._onCaptureFocus.bind(this),!0),document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)}get backdropElement(){return this._backdropElement||(this._backdropElement=document.createElement("iron-overlay-backdrop")),this._backdropElement}get deepActiveElement(){var e=document.activeElement;for(e&&e instanceof Element!=!1||(e=document.body);e.root&&Wn(e.root).activeElement;)e=Wn(e.root).activeElement;return e}_bringOverlayAtIndexToFront(e){var t=this._overlays[e];if(t){var i=this._overlays.length-1,n=this._overlays[i];if(n&&this._shouldBeBehindOverlay(t,n)&&i--,!(e>=i)){var o=Math.max(this.currentOverlayZ(),this._minimumZ);for(this._getZ(t)<=o&&this._applyOverlayZ(t,o);e<i;)this._overlays[e]=this._overlays[e+1],e++;this._overlays[i]=t}}}addOrRemoveOverlay(e){e.opened?this.addOverlay(e):this.removeOverlay(e)}addOverlay(e){var t=this._overlays.indexOf(e);if(t>=0)return this._bringOverlayAtIndexToFront(t),void this.trackBackdrop();var i=this._overlays.length,n=this._overlays[i-1],o=Math.max(this._getZ(n),this._minimumZ),r=this._getZ(e);if(n&&this._shouldBeBehindOverlay(e,n)){this._applyOverlayZ(n,o),i--;var a=this._overlays[i-1];o=Math.max(this._getZ(a),this._minimumZ)}r<=o&&this._applyOverlayZ(e,o),this._overlays.splice(i,0,e),this.trackBackdrop()}removeOverlay(e){var t=this._overlays.indexOf(e);-1!==t&&(this._overlays.splice(t,1),this.trackBackdrop())}currentOverlay(){var e=this._overlays.length-1;return this._overlays[e]}currentOverlayZ(){return this._getZ(this.currentOverlay())}ensureMinimumZ(e){this._minimumZ=Math.max(this._minimumZ,e)}focusOverlay(){var e=this.currentOverlay();e&&e._applyFocus()}trackBackdrop(){var e=this._overlayWithBackdrop();(e||this._backdropElement)&&(this.backdropElement.style.zIndex=this._getZ(e)-1,this.backdropElement.opened=!!e,this.backdropElement.prepare())}getBackdrops(){for(var e=[],t=0;t<this._overlays.length;t++)this._overlays[t].withBackdrop&&e.push(this._overlays[t]);return e}backdropZ(){return this._getZ(this._overlayWithBackdrop())-1}_overlayWithBackdrop(){for(var e=this._overlays.length-1;e>=0;e--)if(this._overlays[e].withBackdrop)return this._overlays[e]}_getZ(e){var t=this._minimumZ;if(e){var i=Number(e.style.zIndex||window.getComputedStyle(e).zIndex);i==i&&(t=i)}return t}_setZ(e,t){e.style.zIndex=t}_applyOverlayZ(e,t){this._setZ(e,t+2)}_overlayInPath(e){e=e||[];for(var t=0;t<e.length;t++)if(e[t]._manager===this)return e[t]}_onCaptureClick(e){var t=this._overlays.length-1;if(-1!==t)for(var i,n=Wn(e).path;(i=this._overlays[t])&&this._overlayInPath(n)!==i&&(i._onCaptureClick(e),i.allowClickThrough);)t--}_onCaptureFocus(e){var t=this.currentOverlay();t&&t._onCaptureFocus(e)}_onCaptureKeyDown(e){var t=this.currentOverlay();t&&(lr.keyboardEventMatchesKeys(e,"esc")?t._onCaptureEsc(e):lr.keyboardEventMatchesKeys(e,"tab")&&t._onCaptureTab(e))}_shouldBeBehindOverlay(e,t){return!e.alwaysOnTop&&t.alwaysOnTop}};var Hr,Or,Ir={pageX:0,pageY:0},Vr=null,Nr=[],Dr=["wheel","mousewheel","DOMMouseScroll","touchstart","touchmove"];function Rr(e){$r.indexOf(e)>=0||(0===$r.length&&function(){Hr=Hr||qr.bind(void 0);for(var e=0,t=Dr.length;e<t;e++)document.addEventListener(Dr[e],Hr,{capture:!0,passive:!1})}(),$r.push(e),Or=$r[$r.length-1])}function Fr(e){var t=$r.indexOf(e);-1!==t&&($r.splice(t,1),Or=$r[$r.length-1],0===$r.length&&function(){for(var e=0,t=Dr.length;e<t;e++)document.removeEventListener(Dr[e],Hr,{capture:!0,passive:!1})}())}const $r=[];function qr(e){if(e.cancelable&&function(e){var t=Wn(e).rootTarget;"touchmove"!==e.type&&Vr!==t&&(Vr=t,Nr=function(e){for(var t=[],i=e.indexOf(Or),n=0;n<=i;n++)if(e[n].nodeType===Node.ELEMENT_NODE){var o=e[n],r=o.style;"scroll"!==r.overflow&&"auto"!==r.overflow&&(r=window.getComputedStyle(o)),"scroll"!==r.overflow&&"auto"!==r.overflow||t.push(o)}return t}(Wn(e).path));if(!Nr.length)return!0;if("touchstart"===e.type)return!1;var i=function(e){var t={deltaX:e.deltaX,deltaY:e.deltaY};if("deltaX"in e);else if("wheelDeltaX"in e&&"wheelDeltaY"in e)t.deltaX=-e.wheelDeltaX,t.deltaY=-e.wheelDeltaY;else if("wheelDelta"in e)t.deltaX=0,t.deltaY=-e.wheelDelta;else if("axis"in e)t.deltaX=1===e.axis?e.detail:0,t.deltaY=2===e.axis?e.detail:0;else if(e.targetTouches){var i=e.targetTouches[0];t.deltaX=Ir.pageX-i.pageX,t.deltaY=Ir.pageY-i.pageY}return t}(e);return!function(e,t,i){if(!t&&!i)return;for(var n=Math.abs(i)>=Math.abs(t),o=0;o<e.length;o++){var r=e[o];if(n?i<0?r.scrollTop>0:r.scrollTop<r.scrollHeight-r.clientHeight:t<0?r.scrollLeft>0:r.scrollLeft<r.scrollWidth-r.clientWidth)return r}}(Nr,i.deltaX,i.deltaY)}(e)&&e.preventDefault(),e.targetTouches){var t=e.targetTouches[0];Ir.pageX=t.pageX,Ir.pageY=t.pageY}}const Br={properties:{opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},withBackdrop:{observer:"_withBackdropChanged",type:Boolean},noAutoFocus:{type:Boolean,value:!1},noCancelOnEscKey:{type:Boolean,value:!1},noCancelOnOutsideClick:{type:Boolean,value:!1},closingReason:{type:Object},restoreFocusOnClose:{type:Boolean,value:!1},allowClickThrough:{type:Boolean},alwaysOnTop:{type:Boolean},scrollAction:{type:String},_manager:{type:Object,value:Pr},_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],get backdropElement(){return this._manager.backdropElement},get _focusNode(){return this._focusedChild||Wn(this).querySelector("[autofocus]")||this},get _focusableNodes(){return Lr.getTabbableNodes(this)},ready:function(){this.__isAnimating=!1,this.__shouldRemoveTabIndex=!1,this.__firstFocusableNode=this.__lastFocusableNode=null,this.__rafs={},this.__restoreFocusNode=null,this.__scrollTop=this.__scrollLeft=null,this.__onCaptureScroll=this.__onCaptureScroll.bind(this),this.__rootNodes=null,this._ensureSetup()},attached:function(){this.opened&&this._openedChanged(this.opened),this._observer=Wn(this).observeNodes(this._onNodesChange)},detached:function(){for(var e in this._observer&&Wn(this).unobserveNodes(this._observer),this._observer=null,this.__rafs)null!==this.__rafs[e]&&cancelAnimationFrame(this.__rafs[e]);this.__rafs={},this._manager.removeOverlay(this),this.__isAnimating&&(this.opened?this._finishRenderOpened():(this._applyFocus(),this._finishRenderClosed()))},toggle:function(){this._setCanceled(!1),this.opened=!this.opened},open:function(){this._setCanceled(!1),this.opened=!0},close:function(){this._setCanceled(!1),this.opened=!1},cancel:function(e){this.fire("iron-overlay-canceled",e,{cancelable:!0}).defaultPrevented||(this._setCanceled(!0),this.opened=!1)},invalidateTabbables:function(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function(){this._overlaySetup||(this._overlaySetup=!0,this.style.outline="none",this.style.display="none")},_openedChanged:function(e){e?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"),this.isAttached&&(this.__isAnimating=!0,this.__deraf("__openedChanged",this.__openedChanged))},_canceledChanged:function(){this.closingReason=this.closingReason||{},this.closingReason.canceled=this.canceled},_withBackdropChanged:function(){this.withBackdrop&&!this.hasAttribute("tabindex")?(this.setAttribute("tabindex","-1"),this.__shouldRemoveTabIndex=!0):this.__shouldRemoveTabIndex&&(this.removeAttribute("tabindex"),this.__shouldRemoveTabIndex=!1),this.opened&&this.isAttached&&this._manager.trackBackdrop()},_prepareRenderOpened:function(){this.__restoreFocusNode=this._manager.deepActiveElement,this._preparePositioning(),this.refit(),this._finishPositioning(),this.noAutoFocus&&document.activeElement===this._focusNode&&(this._focusNode.blur(),this.__restoreFocusNode.focus())},_renderOpened:function(){this._finishRenderOpened()},_renderClosed:function(){this._finishRenderClosed()},_finishRenderOpened:function(){this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-opened")},_finishRenderClosed:function(){this.style.display="none",this.style.zIndex="",this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function(){this.style.transition=this.style.webkitTransition="none",this.style.transform=this.style.webkitTransform="none",this.style.display=""},_finishPositioning:function(){this.style.display="none",this.scrollTop=this.scrollTop,this.style.transition=this.style.webkitTransition="",this.style.transform=this.style.webkitTransform="",this.style.display="",this.scrollTop=this.scrollTop},_applyFocus:function(){if(this.opened)this.noAutoFocus||this._focusNode.focus();else{if(this.restoreFocusOnClose&&this.__restoreFocusNode){var e=this._manager.deepActiveElement;(e===document.body||jr(this,e))&&this.__restoreFocusNode.focus()}this.__restoreFocusNode=null,this._focusNode.blur(),this._focusedChild=null}},_onCaptureClick:function(e){this.noCancelOnOutsideClick||this.cancel(e)},_onCaptureFocus:function(e){if(this.withBackdrop){var t=Wn(e).path;-1===t.indexOf(this)?(e.stopPropagation(),this._applyFocus()):this._focusedChild=t[0]}},_onCaptureEsc:function(e){this.noCancelOnEscKey||this.cancel(e)},_onCaptureTab:function(e){if(this.withBackdrop){this.__ensureFirstLastFocusables();var t=e.shiftKey,i=t?this.__firstFocusableNode:this.__lastFocusableNode,n=t?this.__lastFocusableNode:this.__firstFocusableNode,o=!1;if(i===n)o=!0;else{var r=this._manager.deepActiveElement;o=r===i||r===this}o&&(e.preventDefault(),this._focusedChild=n,this._applyFocus())}},_onIronResize:function(){this.opened&&!this.__isAnimating&&this.__deraf("refit",this.refit)},_onNodesChange:function(){this.opened&&!this.__isAnimating&&(this.invalidateTabbables(),this.notifyResize())},__ensureFirstLastFocusables:function(){var e=this._focusableNodes;this.__firstFocusableNode=e[0],this.__lastFocusableNode=e[e.length-1]},__openedChanged:function(){this.opened?(this._prepareRenderOpened(),this._manager.addOverlay(this),this._applyFocus(),this._renderOpened()):(this._manager.removeOverlay(this),this._applyFocus(),this._renderClosed())},__deraf:function(e,t){var i=this.__rafs;null!==i[e]&&cancelAnimationFrame(i[e]),i[e]=requestAnimationFrame(function(){i[e]=null,t.call(this)}.bind(this))},__updateScrollObservers:function(e,t,i){e&&t&&this.__isValidScrollAction(i)?("lock"===i&&(this.__saveScrollPosition(),Rr(this)),this.__addScrollListeners()):(Fr(this),this.__removeScrollListeners())},__addScrollListeners:function(){if(!this.__rootNodes){if(this.__rootNodes=[],xe)for(var e=this;e;)e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host&&this.__rootNodes.push(e),e=e.host||e.assignedSlot||e.parentNode;this.__rootNodes.push(document)}this.__rootNodes.forEach((function(e){e.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})}),this)},__removeScrollListeners:function(){this.__rootNodes&&this.__rootNodes.forEach((function(e){e.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})}),this),this.isAttached||(this.__rootNodes=null)},__isValidScrollAction:function(e){return"lock"===e||"refit"===e||"cancel"===e},__onCaptureScroll:function(e){if(!(this.__isAnimating||Wn(e).path.indexOf(this)>=0))switch(this.scrollAction){case"lock":this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(e)}},__saveScrollPosition:function(){document.scrollingElement?(this.__scrollTop=document.scrollingElement.scrollTop,this.__scrollLeft=document.scrollingElement.scrollLeft):(this.__scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop),this.__scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft))},__restoreScrollPosition:function(){document.scrollingElement?(document.scrollingElement.scrollTop=this.__scrollTop,document.scrollingElement.scrollLeft=this.__scrollLeft):(document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop,document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft)}},jr=(e,t)=>{for(let n=t;n;n=(i=n).assignedSlot||i.parentNode||i.host)if(n===e)return!0;var i;return!1},Ur={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(e,t){for(var i in t)e[i]=t[i]},_cloneConfig:function(e){var t={isClone:!0};return this._copyProperties(t,e),t},_getAnimationConfigRecursive:function(e,t,i){var n;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(n=e?this.animationConfig[e]:this.animationConfig,Array.isArray(n)||(n=[n]),n)for(var o,r=0;o=n[r];r++)if(o.animatable)o.animatable._getAnimationConfigRecursive(o.type||e,t,i);else if(o.id){var a=t[o.id];a?(a.isClone||(t[o.id]=this._cloneConfig(a),a=t[o.id]),this._copyProperties(a,o)):t[o.id]=o}else i.push(o)},getAnimationConfig:function(e){var t={},i=[];for(var n in this._getAnimationConfigRecursive(e,t,i),t)i.push(t[n]);return i}},Yr={_configureAnimations:function(e){var t=[],i=[];if(e.length>0)for(let t,n=0;t=e[n];n++){let e=document.createElement(t.name);if(e.isNeonAnimation){let n=null;e.configure||(e.configure=function(e){return null}),n=e.configure(t),i.push({result:n,config:t,neonAnimation:e})}else console.warn(this.is+":",t.name,"not found!")}for(var n=0;n<i.length;n++){let e=i[n].result,o=i[n].config,r=i[n].neonAnimation;try{"function"!=typeof e.cancel&&(e=document.timeline.play(e))}catch(t){e=null,console.warn("Couldnt play","(",o.name,").",t)}e&&t.push({neonAnimation:r,config:o,animation:e})}return t},_shouldComplete:function(e){for(var t=!0,i=0;i<e.length;i++)if("finished"!=e[i].animation.playState){t=!1;break}return t},_complete:function(e){for(var t=0;t<e.length;t++)e[t].neonAnimation.complete(e[t].config);for(t=0;t<e.length;t++)e[t].animation.cancel()},playAnimation:function(e,t){var i=this.getAnimationConfig(e);if(i){this._active=this._active||{},this._active[e]&&(this._complete(this._active[e]),delete this._active[e]);var n=this._configureAnimations(i);if(0!=n.length){this._active[e]=n;for(var o=0;o<n.length;o++)n[o].animation.onfinish=function(){this._shouldComplete(n)&&(this._complete(n),delete this._active[e],this.fire("neon-animation-finish",t,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",t,{bubbles:!1})}},cancelAnimation:function(){for(var e in this._active){var t=this._active[e];for(var i in t)t[i].animation.cancel()}this._active={}}};co({_template:Io`
    <style>
      :host {
        position: fixed;
      }

      #contentWrapper ::slotted(*) {
        overflow: auto;
      }

      #contentWrapper.animating ::slotted(*) {
        overflow: hidden;
        pointer-events: none;
      }
    </style>

    <div id="contentWrapper">
      <slot id="content" name="dropdown-content"></slot>
    </div>
`,is:"iron-dropdown",behaviors:[xr,lr,[Mr,kr,Br],[Ur,Yr]],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var e=Wn(this.$.content).getDistributedNodes(),t=0,i=e.length;t<i;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),Br._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):Br._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):Br._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var e=this.containedElement,t=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),i=0;i<t.length;i++)t[i].node=e;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(e){this._readied&&(e?this.scrollAction&&"lock"!==this.scrollAction||(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var e=this.focusTarget||this.containedElement;e&&this.opened&&!this.noAutoFocus?e.focus():Br._applyFocus.apply(this,arguments)}});const Wr={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(e){if(e.timing)for(var t in e.timing)this.animationTiming[t]=e.timing[t];return this.animationTiming},setPrefixedProperty:function(e,t,i){for(var n,o={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]}[t],r=0;n=o[r];r++)e.style[n]=i;e.style[t]=i},complete:function(e){}};co({is:"fade-in-animation",behaviors:[Wr],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(e)),this._effect}}),co({is:"fade-out-animation",behaviors:[Wr],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(e)),this._effect}});const Kr=Io`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;Kr.setAttribute("style","display: none;"),document.head.appendChild(Kr.content),co({is:"paper-menu-grow-height-animation",_template:null,behaviors:[Wr],configure:function(e){var t=e.node,i=t.getBoundingClientRect().height;return this._effect=new KeyframeEffect(t,[{height:i/2+"px"},{height:i+"px"}],this.timingFromConfig(e)),this._effect}}),co({is:"paper-menu-grow-width-animation",_template:null,behaviors:[Wr],configure:function(e){var t=e.node,i=t.getBoundingClientRect().width;return this._effect=new KeyframeEffect(t,[{width:i/2+"px"},{width:i+"px"}],this.timingFromConfig(e)),this._effect}}),co({is:"paper-menu-shrink-width-animation",_template:null,behaviors:[Wr],configure:function(e){var t=e.node,i=t.getBoundingClientRect().width;return this._effect=new KeyframeEffect(t,[{width:i+"px"},{width:i-i/20+"px"}],this.timingFromConfig(e)),this._effect}}),co({is:"paper-menu-shrink-height-animation",_template:null,behaviors:[Wr],configure:function(e){var t=e.node,i=t.getBoundingClientRect().height;return this.setPrefixedProperty(t,"transformOrigin","0 0"),this._effect=new KeyframeEffect(t,[{height:i+"px",transform:"translateY(0)"},{height:i/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(e)),this._effect}});var Jr={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const Xr=co({_template:Io`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;

        @apply --paper-menu-button;
      }

      :host([disabled]) {
        cursor: auto;
        color: var(--disabled-text-color);

        @apply --paper-menu-button-disabled;
      }

      iron-dropdown {
        @apply --paper-menu-button-dropdown;
      }

      .dropdown-content {
        @apply --shadow-elevation-2dp;

        position: relative;
        border-radius: 2px;
        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));

        @apply --paper-menu-button-content;
      }

      :host([vertical-align="top"]) .dropdown-content {
        margin-bottom: 20px;
        margin-top: -10px;
        top: 10px;
      }

      :host([vertical-align="bottom"]) .dropdown-content {
        bottom: 10px;
        margin-bottom: -10px;
        margin-top: 20px;
      }

      #trigger {
        cursor: pointer;
      }
    </style>

    <div id="trigger" on-tap="toggle">
      <slot name="dropdown-trigger"></slot>
    </div>

    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled" expand-sizing-target-for-scrollbars="[[expandSizingTargetForScrollbars]]">
      <div slot="dropdown-content" class="dropdown-content">
        <slot id="content" name="dropdown-content"></slot>
      </div>
    </iron-dropdown>
`,is:"paper-menu-button",behaviors:[lr,xr],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:Jr.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:Jr.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:Jr.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},expandSizingTargetForScrollbars:{type:Boolean,value:!1},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var e=Wn(this.$.content).getDistributedNodes(),t=0,i=e.length;t<i;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(e){this.ignoreSelect||this.close()},_onIronActivate:function(e){this.closeOnActivate&&this.close()},_openedChanged:function(e,t){e?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):null!=t&&this.fire("paper-dropdown-close")},_disabledChanged:function(e){xr._disabledChanged.apply(this,arguments),e&&this.opened&&this.close()},__onIronOverlayCanceled:function(e){var t=e.detail,i=this.$.trigger;Wn(t).path.indexOf(i)>-1&&e.preventDefault()}});Object.keys(Jr).forEach((function(e){Xr[e]=Jr[e]}));var Gr={distance:function(e,t,i,n){var o=e-i,r=t-n;return Math.sqrt(o*o+r*r)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function Zr(e){this.element=e,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function Qr(e){this.element=e,this.color=window.getComputedStyle(e).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),Wn(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}Zr.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(e,t){var i=Gr.distance(e,t,0,0),n=Gr.distance(e,t,this.width,0),o=Gr.distance(e,t,0,this.height),r=Gr.distance(e,t,this.width,this.height);return Math.max(i,n,o,r)}},Qr.MAX_RADIUS=300,Qr.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var e;return this.mouseDownStart?(e=Gr.now()-this.mouseDownStart,this.mouseUpStart&&(e-=this.mouseUpElapsed),e):0},get mouseUpElapsed(){return this.mouseUpStart?Gr.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var e=this.containerMetrics.width*this.containerMetrics.width,t=this.containerMetrics.height*this.containerMetrics.height,i=1.1*Math.min(Math.sqrt(e+t),Qr.MAX_RADIUS)+5,n=1.1-i/Qr.MAX_RADIUS*.2,o=this.mouseInteractionSeconds/n,r=i*(1-Math.pow(80,-o));return Math.abs(r)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var e=.3*this.mouseUpElapsedSeconds,t=this.opacity;return Math.max(0,Math.min(e,t))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,Qr.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,Qr.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new Zr(this.element)},draw:function(){var e,t,i;this.wave.style.opacity=this.opacity,e=this.radius/(this.containerMetrics.size/2),t=this.xNow-this.containerMetrics.width/2,i=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+t+"px, "+i+"px)",this.waveContainer.style.transform="translate3d("+t+"px, "+i+"px, 0)",this.wave.style.webkitTransform="scale("+e+","+e+")",this.wave.style.transform="scale3d("+e+","+e+",1)"},downAction:function(e){var t=this.containerMetrics.width/2,i=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=Gr.now(),this.center?(this.xStart=t,this.yStart=i,this.slideDistance=Gr.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=e?e.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=e?e.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=t,this.yEnd=i,this.slideDistance=Gr.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(e){this.isMouseDown&&(this.mouseUpStart=Gr.now())},remove:function(){Wn(Wn(this.waveContainer).parentNode).removeChild(this.waveContainer)}},co({_template:Io`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[lr],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){11==Wn(this).parentNode.nodeType?this.keyEventTarget=Wn(this).getOwnerRoot().host:this.keyEventTarget=Wn(this).parentNode;var e=this.keyEventTarget;this.listen(e,"up","uiUpAction"),this.listen(e,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var e=0;e<this.ripples.length;++e)if(!this.ripples[e].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async((function(){this.upAction()}),1)},uiDownAction:function(e){this.noink||this.downAction(e)},downAction:function(e){this.holdDown&&this.ripples.length>0||(this.addRipple().downAction(e),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(e){this.noink||this.upAction(e)},upAction:function(e){this.holdDown||(this.ripples.forEach((function(t){t.upAction(e)})),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor="",this.fire("transitionend")},addRipple:function(){var e=new Qr(this);return Wn(this.$.waves).appendChild(e.waveContainer),this.$.background.style.backgroundColor=e.color,this.ripples.push(e),this._setAnimating(!0),e},removeRipple:function(e){var t=this.ripples.indexOf(e);t<0||(this.ripples.splice(t,1),e.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var e,t;for(e=0;e<this.ripples.length;++e)(t=this.ripples[e]).draw(),this.$.background.style.opacity=t.outerOpacity,t.isOpacityFullyDecayed&&!t.isRestingAtMaxRadius&&this.removeRipple(t);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(e,t){void 0!==t&&(e?this.downAction():this.upAction())}}),co({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new cr({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(e){return this.name+":"+e}),this)},applyIcon:function(e,t){this.removeIcon(e);var i=this._cloneIcon(t,this.rtlMirroring&&this._targetIsRTL(e));if(i){var n=Wn(e.root||e);return n.insertBefore(i,n.childNodes[0]),e._svgIcon=i}return null},removeIcon:function(e){e._svgIcon&&(Wn(e.root||e).removeChild(e._svgIcon),e._svgIcon=null)},_targetIsRTL:function(e){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var t=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===t.getAttribute("dir")}else e&&e.nodeType!==Node.ELEMENT_NODE&&(e=e.host),this.__targetIsRTL=e&&"rtl"===window.getComputedStyle(e).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var e=Object.create(null);return Wn(this).querySelectorAll("[id]").forEach((function(t){e[t.id]=t})),e},_cloneIcon:function(e,t){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[e],this.size,t)},_prepareSvgClone:function(e,t,i){if(e){var n=e.cloneNode(!0),o=document.createElementNS("http://www.w3.org/2000/svg","svg"),r=n.getAttribute("viewBox")||"0 0 "+t+" "+t,a="pointer-events: none; display: block; width: 100%; height: 100%;";return i&&n.hasAttribute("mirror-in-rtl")&&(a+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),o.setAttribute("viewBox",r),o.setAttribute("preserveAspectRatio","xMidYMid meet"),o.setAttribute("focusable","false"),o.style.cssText=a,o.appendChild(n).removeAttribute("id"),o}return null}});const ea=document.createElement("template");ea.setAttribute("style","display: none;"),ea.innerHTML='<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>',document.head.appendChild(ea.content);const ta=document.createElement("template");ta.setAttribute("style","display: none;"),ta.innerHTML='<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      /* paper-dropdown-menu and paper-dropdown-menu-light both delegate focus\n       * to other internal elements which manage focus styling. */\n      :host(:focus) {\n        outline: none;\n      }\n\n      :host(:dir(rtl)) {\n        text-align: right;\n\n        @apply(--paper-dropdown-menu);\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(ta.content);const ia={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(e){this._detectKeyboardFocus(e),e||this._setPressed(!1)},_detectKeyboardFocus:function(e){this._setReceivedFocusFromKeyboard(!this.pointerDown&&e)},_userActivate:function(e){this.active!==e&&(this.active=e,this.fire("change"))},_downHandler:function(e){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(e){var t=e.detail.keyboardEvent,i=Wn(t).localTarget;this.isLightDescendant(i)||(t.preventDefault(),t.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(e){var t=e.detail.keyboardEvent,i=Wn(t).localTarget;this.isLightDescendant(i)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async((function(){this.click()}),1)},_pressedChanged:function(e){this._changedButtonState()},_ariaActiveAttributeChanged:function(e,t){t&&t!=e&&this.hasAttribute(t)&&this.removeAttribute(t)},_activeChanged:function(e,t){this.toggles?this.setAttribute(this.ariaActiveAttribute,e?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},na=[lr,ia],oa=to(HTMLElement);co({_template:Io`
    <style include="paper-dropdown-menu-shared-styles"></style>

    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" dynamic-align="[[dynamicAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" expand-sizing-target-for-scrollbars="[[expandSizingTargetForScrollbars]]">
      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->
      <div class="dropdown-trigger" slot="dropdown-trigger">
        <paper-ripple></paper-ripple>
        <!-- paper-input has type="text" for a11y, do not remove -->
        <paper-input id="input" type="text" invalid="[[invalid]]" readonly disabled="[[disabled]]" value="[[value]]" placeholder="[[placeholder]]" error-message="[[errorMessage]]" always-float-label="[[alwaysFloatLabel]]" no-label-float="[[noLabelFloat]]" label="[[label]]" input-role="button" input-aria-haspopup="listbox" autocomplete="off">
          <!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> -->
          <iron-icon icon="paper-dropdown-menu:arrow-drop-down" suffix slot="suffix"></iron-icon>
        </paper-input>
      </div>
      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>
    </paper-menu-button>
`,is:"paper-dropdown-menu",behaviors:[na,xr,wr,fr],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0},label:{type:String},placeholder:{type:String},errorMessage:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,dynamicAlign:{type:Boolean},restoreFocusOnClose:{type:Boolean,value:!0},expandSizingTargetForScrollbars:{type:Boolean,value:!1}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},observers:["_selectedItemChanged(selectedItem)"],_attachDom(e){const t=it(this);return t.attachShadow({mode:"open",delegatesFocus:!0,shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),oa.prototype._attachDom.call(this,e)},focus(){this.$.input._focusableElement.focus()},attached:function(){var e=this.contentElement;e&&e.selectedItem&&this._setSelectedItem(e.selectedItem)},get contentElement(){for(var e=Wn(this.$.content).getDistributedNodes(),t=0,i=e.length;t<i;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(e){this._setSelectedItem(e.detail.item)},_onIronDeselect:function(e){this._setSelectedItem(null)},_onTap:function(e){fn(e)===this&&this.open()},_selectedItemChanged:function(e){var t="";t=e?e.label||e.getAttribute("label")||e.textContent.trim():"",this.value=t,this._setSelectedItemLabel(t)},_computeMenuVerticalOffset:function(e,t){return t||(e?-4:8)},_getValidity:function(e){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var e=this.opened?"true":"false",t=this.contentElement;t&&t.setAttribute("aria-expanded",e)}});class ra{constructor(e){this.selection=[],this.selectCallback=e}get(){return this.multi?this.selection.slice():this.selection[0]}clear(e){this.selection.slice().forEach((function(t){(!e||e.indexOf(t)<0)&&this.setItemSelected(t,!1)}),this)}isSelected(e){return this.selection.indexOf(e)>=0}setItemSelected(e,t){if(null!=e&&t!==this.isSelected(e)){if(t)this.selection.push(e);else{var i=this.selection.indexOf(e);i>=0&&this.selection.splice(i,1)}this.selectCallback&&this.selectCallback(e,t)}}select(e){this.multi?this.toggle(e):this.get()!==e&&(this.setItemSelected(this.get(),!1),this.setItemSelected(e,!0))}toggle(e){this.setItemSelected(e,!this.isSelected(e))}}const aa={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new ra(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._addListener(this.activateEvent)},detached:function(){this._observer&&Wn(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(e){return this.items?this.items.indexOf(e):-1},select:function(e){this.selected=e},selectPrevious:function(){var e=this.items.length,t=e-1;void 0!==this.selected&&(t=(Number(this._valueToIndex(this.selected))-1+e)%e),this.selected=this._indexToValue(t)},selectNext:function(){var e=0;void 0!==this.selected&&(e=(Number(this._valueToIndex(this.selected))+1)%this.items.length),this.selected=this._indexToValue(e)},selectIndex:function(e){this.select(this._indexToValue(e))},forceSynchronousItemUpdate:function(){this._observer&&"function"==typeof this._observer.flush?this._observer.flush():this._updateItems()},get _shouldUpdateSelection(){return null!=this.selected},_checkFallback:function(){this._updateSelected()},_addListener:function(e){this.listen(this,e,"_activateHandler")},_removeListener:function(e){this.unlisten(this,e,"_activateHandler")},_activateEventChanged:function(e,t){this._removeListener(t),this._addListener(e)},_updateItems:function(){var e=Wn(this).queryDistributedElements(this.selectable||"*");e=Array.prototype.filter.call(e,this._bindFilterItem),this._setItems(e)},_updateAttrForSelected:function(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(e){if(this.items){var t=this._valueToItem(this.selected);t?this._selection.select(t):this._selection.clear(),this.fallbackSelection&&this.items.length&&void 0===this._selection.get()&&(this.selected=this.fallbackSelection)}},_filterItem:function(e){return!this._excludedLocalNames[e.localName]},_valueToItem:function(e){return null==e?null:this.items[this._valueToIndex(e)]},_valueToIndex:function(e){if(!this.attrForSelected)return Number(e);for(var t,i=0;t=this.items[i];i++)if(this._valueForItem(t)==e)return i},_indexToValue:function(e){if(!this.attrForSelected)return e;var t=this.items[e];return t?this._valueForItem(t):void 0},_valueForItem:function(e){if(!e)return null;if(!this.attrForSelected){var t=this.indexOf(e);return-1===t?null:t}var i=e[ft(this.attrForSelected)];return null!=i?i:e.getAttribute(this.attrForSelected)},_applySelection:function(e,t){this.selectedClass&&this.toggleClass(this.selectedClass,t,e),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,t,e),this._selectionChange(),this.fire("iron-"+(t?"select":"deselect"),{item:e})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(e){return Wn(e).observeNodes((function(e){this._updateItems(),this._updateSelected(),this.fire("iron-items-changed",e,{bubbles:!1,cancelable:!1})}))},_activateHandler:function(e){for(var t=e.target,i=this.items;t&&t!=this;){var n=i.indexOf(t);if(n>=0){var o=this._indexToValue(n);return void this._itemActivate(o,t)}t=t.parentNode}},_itemActivate:function(e,t){this.fire("iron-activate",{selected:e,item:t},{cancelable:!0}).defaultPrevented||this.select(e)}},sa={properties:{multi:{type:Boolean,value:!1,observer:"multiChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}},selectedItems:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}}},observers:["_updateSelected(selectedValues.splices)"],select:function(e){this.multi?this._toggleSelected(e):this.selected=e},multiChanged:function(e){this._selection.multi=e,this._updateSelected()},get _shouldUpdateSelection(){return null!=this.selected||null!=this.selectedValues&&this.selectedValues.length},_updateAttrForSelected:function(){this.multi?this.selectedItems&&this.selectedItems.length>0&&(this.selectedValues=this.selectedItems.map((function(e){return this._indexToValue(this.indexOf(e))}),this).filter((function(e){return null!=e}),this)):aa._updateAttrForSelected.apply(this)},_updateSelected:function(){this.multi?this._selectMulti(this.selectedValues):this._selectSelected(this.selected)},_selectMulti:function(e){e=e||[];var t=(this._valuesToItems(e)||[]).filter((function(e){return null!=e}));this._selection.clear(t);for(var i=0;i<t.length;i++)this._selection.setItemSelected(t[i],!0);this.fallbackSelection&&!this._selection.get().length&&(this._valueToItem(this.fallbackSelection)&&this.select(this.fallbackSelection))},_selectionChange:function(){var e=this._selection.get();this.multi?(this._setSelectedItems(e),this._setSelectedItem(e.length?e[0]:null)):null!=e?(this._setSelectedItems([e]),this._setSelectedItem(e)):(this._setSelectedItems([]),this._setSelectedItem(null))},_toggleSelected:function(e){var t=this.selectedValues.indexOf(e);t<0?this.push("selectedValues",e):this.splice("selectedValues",t,1)},_valuesToItems:function(e){return null==e?null:e.map((function(e){return this._valueToItem(e)}),this)}},la={properties:{focusedItem:{observer:"_focusedItemChanged",readOnly:!0,type:Object},attrForItemTitle:{type:String},disabled:{type:Boolean,value:!1,observer:"_disabledChanged"}},_MODIFIER_KEYS:["Alt","AltGraph","CapsLock","Control","Fn","FnLock","Hyper","Meta","NumLock","OS","ScrollLock","Shift","Super","Symbol","SymbolLock"],_SEARCH_RESET_TIMEOUT_MS:1e3,_previousTabIndex:0,hostAttributes:{role:"menu"},observers:["_updateMultiselectable(multi)"],listeners:{focus:"_onFocus",keydown:"_onKeydown","iron-items-changed":"_onIronItemsChanged"},keyBindings:{up:"_onUpKey",down:"_onDownKey",esc:"_onEscKey","shift+tab:keydown":"_onShiftTabDown"},attached:function(){this._resetTabindices()},select:function(e){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null);var t=this._valueToItem(e);t&&t.hasAttribute("disabled")||(this._setFocusedItem(t),sa.select.apply(this,arguments))},_resetTabindices:function(){var e=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this.items.forEach((function(t){t.setAttribute("tabindex",t===e?"0":"-1"),t.setAttribute("aria-selected",this._selection.isSelected(t))}),this)},_updateMultiselectable:function(e){e?this.setAttribute("aria-multiselectable","true"):this.removeAttribute("aria-multiselectable")},_focusWithKeyboardEvent:function(e){if(-1===this._MODIFIER_KEYS.indexOf(e.key)){this.cancelDebouncer("_clearSearchText");for(var t,i=this._searchText||"",n=(i+=(e.key&&1==e.key.length?e.key:String.fromCharCode(e.keyCode)).toLocaleLowerCase()).length,o=0;t=this.items[o];o++)if(!t.hasAttribute("disabled")){var r=this.attrForItemTitle||"textContent",a=(t[r]||t.getAttribute(r)||"").trim();if(!(a.length<n)&&a.slice(0,n).toLocaleLowerCase()==i){this._setFocusedItem(t);break}}this._searchText=i,this.debounce("_clearSearchText",this._clearSearchText,this._SEARCH_RESET_TIMEOUT_MS)}},_clearSearchText:function(){this._searchText=""},_focusPrevious:function(){for(var e=this.items.length,t=Number(this.indexOf(this.focusedItem)),i=1;i<e+1;i++){var n=this.items[(t-i+e)%e];if(!n.hasAttribute("disabled")){var o=Wn(n).getOwnerRoot()||document;if(this._setFocusedItem(n),Wn(o).activeElement==n)return}}},_focusNext:function(){for(var e=this.items.length,t=Number(this.indexOf(this.focusedItem)),i=1;i<e+1;i++){var n=this.items[(t+i)%e];if(!n.hasAttribute("disabled")){var o=Wn(n).getOwnerRoot()||document;if(this._setFocusedItem(n),Wn(o).activeElement==n)return}}},_applySelection:function(e,t){t?e.setAttribute("aria-selected","true"):e.setAttribute("aria-selected","false"),aa._applySelection.apply(this,arguments)},_focusedItemChanged:function(e,t){t&&t.setAttribute("tabindex","-1"),!e||e.hasAttribute("disabled")||this.disabled||(e.setAttribute("tabindex","0"),e.focus())},_onIronItemsChanged:function(e){e.detail.addedNodes.length&&this._resetTabindices()},_onShiftTabDown:function(e){var t=this.getAttribute("tabindex");la._shiftTabPressed=!0,this._setFocusedItem(null),this.setAttribute("tabindex","-1"),this.async((function(){this.setAttribute("tabindex",t),la._shiftTabPressed=!1}),1)},_onFocus:function(e){if(!la._shiftTabPressed){var t=Wn(e).rootTarget;(t===this||void 0===t.tabIndex||this.isLightDescendant(t))&&(this._defaultFocusAsync=this.async((function(){var e=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this._setFocusedItem(null),e?this._setFocusedItem(e):this.items[0]&&this._focusNext()})))}},_onUpKey:function(e){this._focusPrevious(),e.detail.keyboardEvent.preventDefault()},_onDownKey:function(e){this._focusNext(),e.detail.keyboardEvent.preventDefault()},_onEscKey:function(e){var t=this.focusedItem;t&&t.blur()},_onKeydown:function(e){this.keyboardEventMatchesKeys(e,"up down esc")||this._focusWithKeyboardEvent(e),e.stopPropagation()},_activateHandler:function(e){aa._activateHandler.call(this,e),e.stopPropagation()},_disabledChanged:function(e){e?(this._previousTabIndex=this.hasAttribute("tabindex")?this.tabIndex:0,this.removeAttribute("tabindex")):this.hasAttribute("tabindex")||this.setAttribute("tabindex",this._previousTabIndex)},_shiftTabPressed:!1};co({_template:Io`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,is:"paper-listbox",behaviors:[[[aa,sa],lr,la]],hostAttributes:{role:"listbox"}});const da=document.createElement("template");da.setAttribute("style","display: none;"),da.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(da.content);co({_template:Io`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[[na,xr,{hostAttributes:{role:"option",tabindex:"0"}}]]});const ha={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(e){ia._downHandler.call(this,e),this.pressed&&this.ensureRipple(e)},ensureRipple:function(e){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var t=this._rippleContainer||this.root;if(t&&Wn(t).appendChild(this._ripple),e){var i=Wn(this._rippleContainer||this),n=Wn(e).rootTarget;i.deepContains(n)&&this._ripple.uiDownAction(e)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(e){this.hasRipple()&&(this._ripple.noink=e)}},ca={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(e){e&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=e)},_createRipple:function(){var e=ha._createRipple();return e.id="ink",e.setAttribute("center",""),e.classList.add("circle"),e}};co({is:"paper-icon-button",_template:Io`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /*
          NOTE: Both values are needed, since some phones require the value to
          be \`transparent\`.
        */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"
               alt$="[[alt]]"></iron-icon>
  `,hostAttributes:{role:"button",tabindex:"0"},behaviors:[[na,xr,ha,ca]],registered:function(){this._template.setAttribute("strip-whitespace","")},properties:{src:{type:String},icon:{type:String},alt:{type:String,observer:"_altChanged"}},_altChanged:function(e,t){var i=this.getAttribute("aria-label");i&&t!=i||this.setAttribute("aria-label",e)}});const pa=Io`<iron-iconset-svg name="icons" size="24">
<svg><defs>
<g id="3d-rotation"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></g>
<g id="accessibility"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></g>
<g id="accessible"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path></g>
<g id="account-balance"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"></path></g>
<g id="account-balance-wallet"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="account-box"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></g>
<g id="account-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g>
<g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
<g id="add-alert"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"></path></g>
<g id="add-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle-outline"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></g>
<g id="alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="alarm-add"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></g>
<g id="alarm-off"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"></path></g>
<g id="alarm-on"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"></path></g>
<g id="all-out"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path></g>
<g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>
<g id="announcement"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path></g>
<g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g>
<g id="archive"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></g>
<g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
<g id="arrow-downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
<g id="arrow-drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></g>
<g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"></path></g>
<g id="arrow-forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
<g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
<g id="aspect-ratio"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="assessment"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="assignment"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></g>
<g id="assignment-ind"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></g>
<g id="assignment-late"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="assignment-return"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></g>
<g id="assignment-returned"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></g>
<g id="assignment-turned-in"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="attachment"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"></path></g>
<g id="autorenew"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></g>
<g id="backspace"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"></path></g>
<g id="backup"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path></g>
<g id="book"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="bug-report"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></g>
<g id="build"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></g>
<g id="cached"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></g>
<g id="camera-enhance"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"></path></g>
<g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
<g id="card-giftcard"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="card-membership"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path></g>
<g id="card-travel"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path></g>
<g id="change-history"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"></path></g>
<g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
<g id="check-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="check-box-outline-blank"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="check-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="chrome-reader-mode"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></g>
<g id="class"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="cloud"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></g>
<g id="cloud-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"></path></g>
<g id="cloud-done"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"></path></g>
<g id="cloud-download"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></g>
<g id="cloud-off"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"></path></g>
<g id="cloud-queue"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></g>
<g id="cloud-upload"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="code"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></g>
<g id="compare-arrows"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></g>
<g id="content-copy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></g>
<g id="content-cut"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></g>
<g id="content-paste"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></g>
<g id="copyright"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="create"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="create-new-folder"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></g>
<g id="credit-card"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="dashboard"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></g>
<g id="date-range"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></g>
<g id="delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-forever"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-sweep"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path></g>
<g id="description"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></g>
<g id="dns"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="done"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></g>
<g id="done-all"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></g>
<g id="donut-large"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"></path></g>
<g id="donut-small"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"></path></g>
<g id="drafts"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></g>
<g id="eject"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></path></g>
<g id="error"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="euro-symbol"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></g>
<g id="event"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="event-seat"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path></g>
<g id="exit-to-app"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
<g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
<g id="explore"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path></g>
<g id="extension"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></g>
<g id="face"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></g>
<g id="favorite"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></g>
<g id="favorite-border"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>
<g id="feedback"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g>
<g id="file-download"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="file-upload"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></g>
<g id="filter-list"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></g>
<g id="find-in-page"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></g>
<g id="find-replace"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"></path></g>
<g id="fingerprint"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path></g>
<g id="first-page"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></g>
<g id="flag"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="flight-land"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"></path></g>
<g id="flight-takeoff"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></g>
<g id="flip-to-back"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></g>
<g id="flip-to-front"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></g>
<g id="folder"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></g>
<g id="folder-open"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></g>
<g id="folder-shared"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path></g>
<g id="font-download"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"></path></g>
<g id="forward"><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></g>
<g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
<g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
<g id="g-translate"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"></path></g>
<g id="gavel"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"></path></g>
<g id="gesture"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"></path></g>
<g id="get-app"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="gif"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></g>
<g id="grade"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="group-work"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
<g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
<g id="highlight-off"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="history"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="home"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
<g id="hourglass-empty"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></g>
<g id="hourglass-full"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path></g>
<g id="http"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></g>
<g id="https"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="important-devices"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></g>
<g id="inbox"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></g>
<g id="indeterminate-check-box"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g>
<g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
<g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
<g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
<g id="invert-colors"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"></path></g>
<g id="label"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></g>
<g id="label-outline"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></g>
<g id="language"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></g>
<g id="last-page"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></g>
<g id="launch"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="lightbulb-outline"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g>
<g id="line-style"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></g>
<g id="line-weight"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"></path></g>
<g id="link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="list"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></g>
<g id="lock"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="lock-open"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></g>
<g id="lock-outline"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path></g>
<g id="low-priority"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"></path></g>
<g id="loyalty"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"></path></g>
<g id="mail"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread-mailbox"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"></path></g>
<g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
<g id="more-horiz"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="motorcycle"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></g>
<g id="move-to-inbox"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></g>
<g id="next-week"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"></path></g>
<g id="note-add"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></g>
<g id="offline-pin"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></g>
<g id="opacity"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path></g>
<g id="open-in-browser"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></g>
<g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="open-with"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></g>
<g id="pageview"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path></g>
<g id="pan-tool"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></g>
<g id="payment"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="perm-camera-mic"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"></path></g>
<g id="perm-contact-calendar"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></g>
<g id="perm-data-setting"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="perm-device-information"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="perm-identity"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="perm-media"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path></g>
<g id="perm-phone-msg"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path></g>
<g id="perm-scan-wifi"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"></path></g>
<g id="pets"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></g>
<g id="picture-in-picture"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></g>
<g id="picture-in-picture-alt"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></g>
<g id="play-for-work"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"></path></g>
<g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path></g>
<g id="power-settings-new"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></g>
<g id="pregnant-woman"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"></path></g>
<g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="query-builder"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="question-answer"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
<g id="radio-button-checked"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="radio-button-unchecked"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="receipt"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></g>
<g id="record-voice-over"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></g>
<g id="redeem"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
<g id="refresh"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></g>
<g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
<g id="remove-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></g>
<g id="remove-circle-outline"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="remove-shopping-cart"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></g>
<g id="reorder"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></g>
<g id="reply"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="reply-all"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="report"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></g>
<g id="report-problem"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="restore"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="restore-page"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path></g>
<g id="room"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rounded-corner"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></g>
<g id="rowing"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"></path></g>
<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>
<g id="schedule"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
<g id="select-all"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path></g>
<g id="send"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></g>
<g id="settings"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
<g id="settings-applications"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path></g>
<g id="settings-backup-restore"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></g>
<g id="settings-bluetooth"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"></path></g>
<g id="settings-brightness"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path></g>
<g id="settings-cell"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"></path></g>
<g id="settings-ethernet"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></g>
<g id="settings-input-antenna"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="settings-input-component"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-composite"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-hdmi"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"></path></g>
<g id="settings-input-svideo"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="settings-overscan"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="settings-phone"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"></path></g>
<g id="settings-power"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"></path></g>
<g id="settings-remote"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"></path></g>
<g id="settings-voice"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"></path></g>
<g id="shop"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"></path></g>
<g id="shop-two"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"></path></g>
<g id="shopping-basket"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="shopping-cart"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="sort"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></g>
<g id="speaker-notes"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></g>
<g id="speaker-notes-off"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></g>
<g id="spellcheck"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path></g>
<g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="star-border"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="star-half"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="stars"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path></g>
<g id="store"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="subdirectory-arrow-left"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></g>
<g id="subdirectory-arrow-right"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></g>
<g id="subject"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></g>
<g id="supervisor-account"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"></path></g>
<g id="swap-horiz"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></g>
<g id="swap-vert"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></g>
<g id="swap-vertical-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"></path></g>
<g id="system-update-alt"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path></g>
<g id="tab"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"></path></g>
<g id="tab-unselected"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="text-format"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></g>
<g id="theaters"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="thumb-down"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></g>
<g id="thumb-up"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g>
<g id="thumbs-up-down"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"></path></g>
<g id="timeline"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></g>
<g id="toc"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"></path></g>
<g id="today"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></g>
<g id="toll"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"></path></g>
<g id="touch-app"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path></g>
<g id="track-changes"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"></path></g>
<g id="translate"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></g>
<g id="trending-down"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></g>
<g id="trending-flat"><path d="M22 12l-4-4v3H3v2h15v3z"></path></g>
<g id="trending-up"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></g>
<g id="turned-in"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="turned-in-not"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="unarchive"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"></path></g>
<g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
<g id="unfold-less"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path></g>
<g id="unfold-more"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></g>
<g id="update"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></g>
<g id="verified-user"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="view-agenda"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></g>
<g id="view-array"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"></path></g>
<g id="view-carousel"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></g>
<g id="view-column"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></g>
<g id="view-day"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></g>
<g id="view-headline"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></g>
<g id="view-list"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></g>
<g id="view-module"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></g>
<g id="view-quilt"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"></path></g>
<g id="view-stream"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path></g>
<g id="view-week"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path></g>
<g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="visibility-off"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></g>
<g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="watch-later"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></g>
<g id="weekend"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"></path></g>
<g id="work"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></g>
<g id="youtube-searched-for"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"></path></g>
<g id="zoom-in"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></g>
<g id="zoom-out"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></g>
</defs></svg>
</iron-iconset-svg>`;function ua(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}document.head.appendChild(pa.content);var ma={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function fa(e){return function(t){var i=t||{},n=i.width?String(i.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var va={date:fa({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:fa({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:fa({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},ga={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function ya(e){return function(t,i){var n,o=i||{};if("formatting"===(o.context?String(o.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,a=o.width?String(o.width):r;n=e.formattingValues[a]||e.formattingValues[r]}else{var s=e.defaultWidth,l=o.width?String(o.width):e.defaultWidth;n=e.values[l]||e.values[s]}return n[e.argumentCallback?e.argumentCallback(t):t]}}function _a(e){return function(t,i){var n=String(t),o=i||{},r=n.match(e.matchPattern);if(!r)return null;var a=r[0],s=n.match(e.parsePattern);if(!s)return null;var l=e.valueCallback?e.valueCallback(s[0]):s[0];return{value:l=o.valueCallback?o.valueCallback(l):l,rest:n.slice(a.length)}}}function ba(e){return function(t,i){var n=String(t),o=i||{},r=o.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],s=n.match(a);if(!s)return null;var l,d=s[0],h=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(h)?h.findIndex((function(e){return e.test(n)})):function(e,t){for(var i in e)if(e.hasOwnProperty(i)&&t(e[i]))return i}(h,(function(e){return e.test(n)})),l=e.valueCallback?e.valueCallback(l):l,{value:l=o.valueCallback?o.valueCallback(l):l,rest:n.slice(d.length)}}}var wa={formatDistance:function(e,t,i){var n;return i=i||{},n="string"==typeof ma[e]?ma[e]:1===t?ma[e].one:ma[e].other.replace("{{count}}",t),i.addSuffix?i.comparison>0?"in "+n:n+" ago":n},formatLong:va,formatRelative:function(e,t,i,n){return ga[e]},localize:{ordinalNumber:function(e,t){var i=Number(e),n=i%100;if(n>20||n<10)switch(n%10){case 1:return i+"st";case 2:return i+"nd";case 3:return i+"rd"}return i+"th"},era:ya({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:ya({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:ya({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:ya({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:ya({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:_a({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:ba({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:ba({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:ba({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:ba({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:ba({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function xa(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function Ca(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");return function(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var i=ua(e).getTime(),n=xa(t);return new Date(i+n)}(e,-xa(t))}function za(e,t){for(var i=e<0?"-":"",n=Math.abs(e).toString();n.length<t;)n="0"+n;return i+n}var Sa={y:function(e,t){var i=e.getUTCFullYear(),n=i>0?i:1-i;return za("yy"===t?n%100:n,t.length)},M:function(e,t){var i=e.getUTCMonth();return"M"===t?String(i+1):za(i+1,2)},d:function(e,t){return za(e.getUTCDate(),t.length)},a:function(e,t){var i=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return i.toUpperCase();case"aaaaa":return i[0];default:return"am"===i?"a.m.":"p.m."}},h:function(e,t){return za(e.getUTCHours()%12||12,t.length)},H:function(e,t){return za(e.getUTCHours(),t.length)},m:function(e,t){return za(e.getUTCMinutes(),t.length)},s:function(e,t){return za(e.getUTCSeconds(),t.length)},S:function(e,t){var i=t.length,n=e.getUTCMilliseconds();return za(Math.floor(n*Math.pow(10,i-3)),t.length)}};function Ma(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=ua(e),i=t.getUTCDay(),n=(i<1?7:0)+i-1;return t.setUTCDate(t.getUTCDate()-n),t.setUTCHours(0,0,0,0),t}function Ea(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=ua(e),i=t.getUTCFullYear(),n=new Date(0);n.setUTCFullYear(i+1,0,4),n.setUTCHours(0,0,0,0);var o=Ma(n),r=new Date(0);r.setUTCFullYear(i,0,4),r.setUTCHours(0,0,0,0);var a=Ma(r);return t.getTime()>=o.getTime()?i+1:t.getTime()>=a.getTime()?i:i-1}var ka=6048e5;function Ta(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=ua(e),i=Ma(t).getTime()-function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=Ea(e),i=new Date(0);return i.setUTCFullYear(t,0,4),i.setUTCHours(0,0,0,0),Ma(i)}(t).getTime();return Math.round(i/ka)+1}function Aa(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var i=t||{},n=i.locale,o=n&&n.options&&n.options.weekStartsOn,r=null==o?0:xa(o),a=null==i.weekStartsOn?r:xa(i.weekStartsOn);if(!(a>=0&&a<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=ua(e),l=s.getUTCDay(),d=(l<a?7:0)+l-a;return s.setUTCDate(s.getUTCDate()-d),s.setUTCHours(0,0,0,0),s}function La(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var i=ua(e,t),n=i.getUTCFullYear(),o=t||{},r=o.locale,a=r&&r.options&&r.options.firstWeekContainsDate,s=null==a?1:xa(a),l=null==o.firstWeekContainsDate?s:xa(o.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(n+1,0,l),d.setUTCHours(0,0,0,0);var h=Aa(d,t),c=new Date(0);c.setUTCFullYear(n,0,l),c.setUTCHours(0,0,0,0);var p=Aa(c,t);return i.getTime()>=h.getTime()?n+1:i.getTime()>=p.getTime()?n:n-1}var Pa=6048e5;function Ha(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var i=ua(e),n=Aa(i,t).getTime()-function(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var i=t||{},n=i.locale,o=n&&n.options&&n.options.firstWeekContainsDate,r=null==o?1:xa(o),a=null==i.firstWeekContainsDate?r:xa(i.firstWeekContainsDate),s=La(e,t),l=new Date(0);return l.setUTCFullYear(s,0,a),l.setUTCHours(0,0,0,0),Aa(l,t)}(i,t).getTime();return Math.round(n/Pa)+1}var Oa="midnight",Ia="noon",Va="morning",Na="afternoon",Da="evening",Ra="night",Fa={G:function(e,t,i){var n=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return i.era(n,{width:"abbreviated"});case"GGGGG":return i.era(n,{width:"narrow"});default:return i.era(n,{width:"wide"})}},y:function(e,t,i){if("yo"===t){var n=e.getUTCFullYear(),o=n>0?n:1-n;return i.ordinalNumber(o,{unit:"year"})}return Sa.y(e,t)},Y:function(e,t,i,n){var o=La(e,n),r=o>0?o:1-o;return"YY"===t?za(r%100,2):"Yo"===t?i.ordinalNumber(r,{unit:"year"}):za(r,t.length)},R:function(e,t){return za(Ea(e),t.length)},u:function(e,t){return za(e.getUTCFullYear(),t.length)},Q:function(e,t,i){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return za(n,2);case"Qo":return i.ordinalNumber(n,{unit:"quarter"});case"QQQ":return i.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return i.quarter(n,{width:"narrow",context:"formatting"});default:return i.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,i){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return za(n,2);case"qo":return i.ordinalNumber(n,{unit:"quarter"});case"qqq":return i.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return i.quarter(n,{width:"narrow",context:"standalone"});default:return i.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,i){var n=e.getUTCMonth();switch(t){case"M":case"MM":return Sa.M(e,t);case"Mo":return i.ordinalNumber(n+1,{unit:"month"});case"MMM":return i.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return i.month(n,{width:"narrow",context:"formatting"});default:return i.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,i){var n=e.getUTCMonth();switch(t){case"L":return String(n+1);case"LL":return za(n+1,2);case"Lo":return i.ordinalNumber(n+1,{unit:"month"});case"LLL":return i.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return i.month(n,{width:"narrow",context:"standalone"});default:return i.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,i,n){var o=Ha(e,n);return"wo"===t?i.ordinalNumber(o,{unit:"week"}):za(o,t.length)},I:function(e,t,i){var n=Ta(e);return"Io"===t?i.ordinalNumber(n,{unit:"week"}):za(n,t.length)},d:function(e,t,i){return"do"===t?i.ordinalNumber(e.getUTCDate(),{unit:"date"}):Sa.d(e,t)},D:function(e,t,i){var n=function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=ua(e),i=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var n=i-t.getTime();return Math.floor(n/864e5)+1}(e);return"Do"===t?i.ordinalNumber(n,{unit:"dayOfYear"}):za(n,t.length)},E:function(e,t,i){var n=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return i.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return i.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return i.day(n,{width:"short",context:"formatting"});default:return i.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,i,n){var o=e.getUTCDay(),r=(o-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(r);case"ee":return za(r,2);case"eo":return i.ordinalNumber(r,{unit:"day"});case"eee":return i.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return i.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return i.day(o,{width:"short",context:"formatting"});default:return i.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,i,n){var o=e.getUTCDay(),r=(o-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(r);case"cc":return za(r,t.length);case"co":return i.ordinalNumber(r,{unit:"day"});case"ccc":return i.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return i.day(o,{width:"narrow",context:"standalone"});case"cccccc":return i.day(o,{width:"short",context:"standalone"});default:return i.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,i){var n=e.getUTCDay(),o=0===n?7:n;switch(t){case"i":return String(o);case"ii":return za(o,t.length);case"io":return i.ordinalNumber(o,{unit:"day"});case"iii":return i.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return i.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return i.day(n,{width:"short",context:"formatting"});default:return i.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,i){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return i.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaaaa":return i.dayPeriod(n,{width:"narrow",context:"formatting"});default:return i.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(e,t,i){var n,o=e.getUTCHours();switch(n=12===o?Ia:0===o?Oa:o/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return i.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbbbb":return i.dayPeriod(n,{width:"narrow",context:"formatting"});default:return i.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(e,t,i){var n,o=e.getUTCHours();switch(n=o>=17?Da:o>=12?Na:o>=4?Va:Ra,t){case"B":case"BB":case"BBB":return i.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return i.dayPeriod(n,{width:"narrow",context:"formatting"});default:return i.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(e,t,i){if("ho"===t){var n=e.getUTCHours()%12;return 0===n&&(n=12),i.ordinalNumber(n,{unit:"hour"})}return Sa.h(e,t)},H:function(e,t,i){return"Ho"===t?i.ordinalNumber(e.getUTCHours(),{unit:"hour"}):Sa.H(e,t)},K:function(e,t,i){var n=e.getUTCHours()%12;return"Ko"===t?i.ordinalNumber(n,{unit:"hour"}):za(n,t.length)},k:function(e,t,i){var n=e.getUTCHours();return 0===n&&(n=24),"ko"===t?i.ordinalNumber(n,{unit:"hour"}):za(n,t.length)},m:function(e,t,i){return"mo"===t?i.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):Sa.m(e,t)},s:function(e,t,i){return"so"===t?i.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):Sa.s(e,t)},S:function(e,t){return Sa.S(e,t)},X:function(e,t,i,n){var o=(n._originalDate||e).getTimezoneOffset();if(0===o)return"Z";switch(t){case"X":return qa(o);case"XXXX":case"XX":return Ba(o);default:return Ba(o,":")}},x:function(e,t,i,n){var o=(n._originalDate||e).getTimezoneOffset();switch(t){case"x":return qa(o);case"xxxx":case"xx":return Ba(o);default:return Ba(o,":")}},O:function(e,t,i,n){var o=(n._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+$a(o,":");default:return"GMT"+Ba(o,":")}},z:function(e,t,i,n){var o=(n._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+$a(o,":");default:return"GMT"+Ba(o,":")}},t:function(e,t,i,n){var o=n._originalDate||e;return za(Math.floor(o.getTime()/1e3),t.length)},T:function(e,t,i,n){return za((n._originalDate||e).getTime(),t.length)}};function $a(e,t){var i=e>0?"-":"+",n=Math.abs(e),o=Math.floor(n/60),r=n%60;if(0===r)return i+String(o);var a=t||"";return i+String(o)+a+za(r,2)}function qa(e,t){return e%60==0?(e>0?"-":"+")+za(Math.abs(e)/60,2):Ba(e,t)}function Ba(e,t){var i=t||"",n=e>0?"-":"+",o=Math.abs(e);return n+za(Math.floor(o/60),2)+i+za(o%60,2)}var ja=Fa;function Ua(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}}function Ya(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}}var Wa={p:Ya,P:function(e,t){var i,n=e.match(/(P+)(p+)?/),o=n[1],r=n[2];if(!r)return Ua(e,t);switch(o){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;default:i=t.dateTime({width:"full"})}return i.replace("{{date}}",Ua(o,t)).replace("{{time}}",Ya(r,t))}},Ka=Wa,Ja=6e4;function Xa(e){var t=new Date(e.getTime()),i=t.getTimezoneOffset();t.setSeconds(0,0);var n=t.getTime()%Ja;return i*Ja+n}var Ga=["D","DD"],Za=["YY","YYYY"];function Qa(e){return-1!==Ga.indexOf(e)}function es(e){return-1!==Za.indexOf(e)}function ts(e){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===e)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===e)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===e)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var is=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ns=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,os=/^'(.*?)'?$/,rs=/''/g,as=/[a-zA-Z]/;function ss(e,t,i){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=String(t),o=i||{},r=o.locale||wa,a=r.options&&r.options.firstWeekContainsDate,s=null==a?1:xa(a),l=null==o.firstWeekContainsDate?s:xa(o.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=r.options&&r.options.weekStartsOn,h=null==d?0:xa(d),c=null==o.weekStartsOn?h:xa(o.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!r.localize)throw new RangeError("locale must contain localize property");if(!r.formatLong)throw new RangeError("locale must contain formatLong property");var p=ua(e);if(!function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=ua(e);return!isNaN(t)}(p))throw new RangeError("Invalid time value");var u=Ca(p,Xa(p)),m={firstWeekContainsDate:l,weekStartsOn:c,locale:r,_originalDate:p};return n.match(ns).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,Ka[t])(e,r.formatLong,m):e})).join("").match(is).map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return e.match(os)[1].replace(rs,"'");var i=ja[t];if(i)return!o.useAdditionalWeekYearTokens&&es(e)&&ts(e),!o.useAdditionalDayOfYearTokens&&Qa(e)&&ts(e),i(u,e,r.localize,m);if(t.match(as))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("")}function ls(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var i in t=t||{})t.hasOwnProperty(i)&&(e[i]=t[i]);return e}function ds(e,t,i){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=i||{},o=n.locale,r=o&&o.options&&o.options.weekStartsOn,a=null==r?0:xa(r),s=null==n.weekStartsOn?a:xa(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var l=ua(e),d=xa(t),h=((d%7+7)%7<s?7:0)+d-l.getUTCDay();return l.setUTCDate(l.getUTCDate()+h),l}var hs=/^(1[0-2]|0?\d)/,cs=/^(3[0-1]|[0-2]?\d)/,ps=/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,us=/^(5[0-3]|[0-4]?\d)/,ms=/^(2[0-3]|[0-1]?\d)/,fs=/^(2[0-4]|[0-1]?\d)/,vs=/^(1[0-1]|0?\d)/,gs=/^(1[0-2]|0?\d)/,ys=/^[0-5]?\d/,_s=/^[0-5]?\d/,bs=/^\d/,ws=/^\d{1,2}/,xs=/^\d{1,3}/,Cs=/^\d{1,4}/,zs=/^-?\d+/,Ss=/^-?\d/,Ms=/^-?\d{1,2}/,Es=/^-?\d{1,3}/,ks=/^-?\d{1,4}/,Ts=/^([+-])(\d{2})(\d{2})?|Z/,As=/^([+-])(\d{2})(\d{2})|Z/,Ls=/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,Ps=/^([+-])(\d{2}):(\d{2})|Z/,Hs=/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;function Os(e,t,i){var n=t.match(e);if(!n)return null;var o=parseInt(n[0],10);return{value:i?i(o):o,rest:t.slice(n[0].length)}}function Is(e,t){var i=t.match(e);return i?"Z"===i[0]?{value:0,rest:t.slice(1)}:{value:("+"===i[1]?1:-1)*(36e5*(i[2]?parseInt(i[2],10):0)+6e4*(i[3]?parseInt(i[3],10):0)+1e3*(i[5]?parseInt(i[5],10):0)),rest:t.slice(i[0].length)}:null}function Vs(e,t){return Os(zs,e,t)}function Ns(e,t,i){switch(e){case 1:return Os(bs,t,i);case 2:return Os(ws,t,i);case 3:return Os(xs,t,i);case 4:return Os(Cs,t,i);default:return Os(new RegExp("^\\d{1,"+e+"}"),t,i)}}function Ds(e,t,i){switch(e){case 1:return Os(Ss,t,i);case 2:return Os(Ms,t,i);case 3:return Os(Es,t,i);case 4:return Os(ks,t,i);default:return Os(new RegExp("^-?\\d{1,"+e+"}"),t,i)}}function Rs(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;default:return 0}}function Fs(e,t){var i,n=t>0,o=n?t:1-t;if(o<=50)i=e||100;else{var r=o+50;i=e+100*Math.floor(r/100)-(e>=r%100?100:0)}return n?i:1-i}var $s=[31,28,31,30,31,30,31,31,30,31,30,31],qs=[31,29,31,30,31,30,31,31,30,31,30,31];function Bs(e){return e%400==0||e%4==0&&e%100!=0}var js={G:{priority:140,parse:function(e,t,i,n){switch(t){case"G":case"GG":case"GGG":return i.era(e,{width:"abbreviated"})||i.era(e,{width:"narrow"});case"GGGGG":return i.era(e,{width:"narrow"});default:return i.era(e,{width:"wide"})||i.era(e,{width:"abbreviated"})||i.era(e,{width:"narrow"})}},set:function(e,t,i,n){return t.era=i,e.setUTCFullYear(i,0,1),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["R","u","t","T"]},y:{priority:130,parse:function(e,t,i,n){var o=function(e){return{year:e,isTwoDigitYear:"yy"===t}};switch(t){case"y":return Ns(4,e,o);case"yo":return i.ordinalNumber(e,{unit:"year",valueCallback:o});default:return Ns(t.length,e,o)}},validate:function(e,t,i){return t.isTwoDigitYear||t.year>0},set:function(e,t,i,n){var o=e.getUTCFullYear();if(i.isTwoDigitYear){var r=Fs(i.year,o);return e.setUTCFullYear(r,0,1),e.setUTCHours(0,0,0,0),e}var a="era"in t&&1!==t.era?1-i.year:i.year;return e.setUTCFullYear(a,0,1),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["Y","R","u","w","I","i","e","c","t","T"]},Y:{priority:130,parse:function(e,t,i,n){var o=function(e){return{year:e,isTwoDigitYear:"YY"===t}};switch(t){case"Y":return Ns(4,e,o);case"Yo":return i.ordinalNumber(e,{unit:"year",valueCallback:o});default:return Ns(t.length,e,o)}},validate:function(e,t,i){return t.isTwoDigitYear||t.year>0},set:function(e,t,i,n){var o=La(e,n);if(i.isTwoDigitYear){var r=Fs(i.year,o);return e.setUTCFullYear(r,0,n.firstWeekContainsDate),e.setUTCHours(0,0,0,0),Aa(e,n)}var a="era"in t&&1!==t.era?1-i.year:i.year;return e.setUTCFullYear(a,0,n.firstWeekContainsDate),e.setUTCHours(0,0,0,0),Aa(e,n)},incompatibleTokens:["y","R","u","Q","q","M","L","I","d","D","i","t","T"]},R:{priority:130,parse:function(e,t,i,n){return Ds("R"===t?4:t.length,e)},set:function(e,t,i,n){var o=new Date(0);return o.setUTCFullYear(i,0,4),o.setUTCHours(0,0,0,0),Ma(o)},incompatibleTokens:["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]},u:{priority:130,parse:function(e,t,i,n){return Ds("u"===t?4:t.length,e)},set:function(e,t,i,n){return e.setUTCFullYear(i,0,1),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["G","y","Y","R","w","I","i","e","c","t","T"]},Q:{priority:120,parse:function(e,t,i,n){switch(t){case"Q":case"QQ":return Ns(t.length,e);case"Qo":return i.ordinalNumber(e,{unit:"quarter"});case"QQQ":return i.quarter(e,{width:"abbreviated",context:"formatting"})||i.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return i.quarter(e,{width:"narrow",context:"formatting"});default:return i.quarter(e,{width:"wide",context:"formatting"})||i.quarter(e,{width:"abbreviated",context:"formatting"})||i.quarter(e,{width:"narrow",context:"formatting"})}},validate:function(e,t,i){return t>=1&&t<=4},set:function(e,t,i,n){return e.setUTCMonth(3*(i-1),1),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]},q:{priority:120,parse:function(e,t,i,n){switch(t){case"q":case"qq":return Ns(t.length,e);case"qo":return i.ordinalNumber(e,{unit:"quarter"});case"qqq":return i.quarter(e,{width:"abbreviated",context:"standalone"})||i.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return i.quarter(e,{width:"narrow",context:"standalone"});default:return i.quarter(e,{width:"wide",context:"standalone"})||i.quarter(e,{width:"abbreviated",context:"standalone"})||i.quarter(e,{width:"narrow",context:"standalone"})}},validate:function(e,t,i){return t>=1&&t<=4},set:function(e,t,i,n){return e.setUTCMonth(3*(i-1),1),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]},M:{priority:110,parse:function(e,t,i,n){var o=function(e){return e-1};switch(t){case"M":return Os(hs,e,o);case"MM":return Ns(2,e,o);case"Mo":return i.ordinalNumber(e,{unit:"month",valueCallback:o});case"MMM":return i.month(e,{width:"abbreviated",context:"formatting"})||i.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return i.month(e,{width:"narrow",context:"formatting"});default:return i.month(e,{width:"wide",context:"formatting"})||i.month(e,{width:"abbreviated",context:"formatting"})||i.month(e,{width:"narrow",context:"formatting"})}},validate:function(e,t,i){return t>=0&&t<=11},set:function(e,t,i,n){return e.setUTCMonth(i,1),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]},L:{priority:110,parse:function(e,t,i,n){var o=function(e){return e-1};switch(t){case"L":return Os(hs,e,o);case"LL":return Ns(2,e,o);case"Lo":return i.ordinalNumber(e,{unit:"month",valueCallback:o});case"LLL":return i.month(e,{width:"abbreviated",context:"standalone"})||i.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return i.month(e,{width:"narrow",context:"standalone"});default:return i.month(e,{width:"wide",context:"standalone"})||i.month(e,{width:"abbreviated",context:"standalone"})||i.month(e,{width:"narrow",context:"standalone"})}},validate:function(e,t,i){return t>=0&&t<=11},set:function(e,t,i,n){return e.setUTCMonth(i,1),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]},w:{priority:100,parse:function(e,t,i,n){switch(t){case"w":return Os(us,e);case"wo":return i.ordinalNumber(e,{unit:"week"});default:return Ns(t.length,e)}},validate:function(e,t,i){return t>=1&&t<=53},set:function(e,t,i,n){return Aa(function(e,t,i){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=ua(e),o=xa(t),r=Ha(n,i)-o;return n.setUTCDate(n.getUTCDate()-7*r),n}(e,i,n),n)},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","i","t","T"]},I:{priority:100,parse:function(e,t,i,n){switch(t){case"I":return Os(us,e);case"Io":return i.ordinalNumber(e,{unit:"week"});default:return Ns(t.length,e)}},validate:function(e,t,i){return t>=1&&t<=53},set:function(e,t,i,n){return Ma(function(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var i=ua(e),n=xa(t),o=Ta(i)-n;return i.setUTCDate(i.getUTCDate()-7*o),i}(e,i,n),n)},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]},d:{priority:90,parse:function(e,t,i,n){switch(t){case"d":return Os(cs,e);case"do":return i.ordinalNumber(e,{unit:"date"});default:return Ns(t.length,e)}},validate:function(e,t,i){var n=Bs(e.getUTCFullYear()),o=e.getUTCMonth();return n?t>=1&&t<=qs[o]:t>=1&&t<=$s[o]},set:function(e,t,i,n){return e.setUTCDate(i),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["Y","R","q","Q","w","I","D","i","e","c","t","T"]},D:{priority:90,parse:function(e,t,i,n){switch(t){case"D":case"DD":return Os(ps,e);case"Do":return i.ordinalNumber(e,{unit:"date"});default:return Ns(t.length,e)}},validate:function(e,t,i){return Bs(e.getUTCFullYear())?t>=1&&t<=366:t>=1&&t<=365},set:function(e,t,i,n){return e.setUTCMonth(0,i),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]},E:{priority:90,parse:function(e,t,i,n){switch(t){case"E":case"EE":case"EEE":return i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return i.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});default:return i.day(e,{width:"wide",context:"formatting"})||i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"})}},validate:function(e,t,i){return t>=0&&t<=6},set:function(e,t,i,n){return(e=ds(e,i,n)).setUTCHours(0,0,0,0),e},incompatibleTokens:["D","i","e","c","t","T"]},e:{priority:90,parse:function(e,t,i,n){var o=function(e){var t=7*Math.floor((e-1)/7);return(e+n.weekStartsOn+6)%7+t};switch(t){case"e":case"ee":return Ns(t.length,e,o);case"eo":return i.ordinalNumber(e,{unit:"day",valueCallback:o});case"eee":return i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"eeeee":return i.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});default:return i.day(e,{width:"wide",context:"formatting"})||i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"})}},validate:function(e,t,i){return t>=0&&t<=6},set:function(e,t,i,n){return(e=ds(e,i,n)).setUTCHours(0,0,0,0),e},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]},c:{priority:90,parse:function(e,t,i,n){var o=function(e){var t=7*Math.floor((e-1)/7);return(e+n.weekStartsOn+6)%7+t};switch(t){case"c":case"cc":return Ns(t.length,e,o);case"co":return i.ordinalNumber(e,{unit:"day",valueCallback:o});case"ccc":return i.day(e,{width:"abbreviated",context:"standalone"})||i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"});case"ccccc":return i.day(e,{width:"narrow",context:"standalone"});case"cccccc":return i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"});default:return i.day(e,{width:"wide",context:"standalone"})||i.day(e,{width:"abbreviated",context:"standalone"})||i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"})}},validate:function(e,t,i){return t>=0&&t<=6},set:function(e,t,i,n){return(e=ds(e,i,n)).setUTCHours(0,0,0,0),e},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]},i:{priority:90,parse:function(e,t,i,n){var o=function(e){return 0===e?7:e};switch(t){case"i":case"ii":return Ns(t.length,e);case"io":return i.ordinalNumber(e,{unit:"day"});case"iii":return i.day(e,{width:"abbreviated",context:"formatting",valueCallback:o})||i.day(e,{width:"short",context:"formatting",valueCallback:o})||i.day(e,{width:"narrow",context:"formatting",valueCallback:o});case"iiiii":return i.day(e,{width:"narrow",context:"formatting",valueCallback:o});case"iiiiii":return i.day(e,{width:"short",context:"formatting",valueCallback:o})||i.day(e,{width:"narrow",context:"formatting",valueCallback:o});default:return i.day(e,{width:"wide",context:"formatting",valueCallback:o})||i.day(e,{width:"abbreviated",context:"formatting",valueCallback:o})||i.day(e,{width:"short",context:"formatting",valueCallback:o})||i.day(e,{width:"narrow",context:"formatting",valueCallback:o})}},validate:function(e,t,i){return t>=1&&t<=7},set:function(e,t,i,n){return e=function(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var i=xa(t);i%7==0&&(i-=7);var n=ua(e),o=((i%7+7)%7<1?7:0)+i-n.getUTCDay();return n.setUTCDate(n.getUTCDate()+o),n}(e,i,n),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]},a:{priority:80,parse:function(e,t,i,n){switch(t){case"a":case"aa":case"aaa":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return i.dayPeriod(e,{width:"narrow",context:"formatting"});default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}},set:function(e,t,i,n){return e.setUTCHours(Rs(i),0,0,0),e},incompatibleTokens:["b","B","H","K","k","t","T"]},b:{priority:80,parse:function(e,t,i,n){switch(t){case"b":case"bb":case"bbb":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return i.dayPeriod(e,{width:"narrow",context:"formatting"});default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}},set:function(e,t,i,n){return e.setUTCHours(Rs(i),0,0,0),e},incompatibleTokens:["a","B","H","K","k","t","T"]},B:{priority:80,parse:function(e,t,i,n){switch(t){case"B":case"BB":case"BBB":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return i.dayPeriod(e,{width:"narrow",context:"formatting"});default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}},set:function(e,t,i,n){return e.setUTCHours(Rs(i),0,0,0),e},incompatibleTokens:["a","b","t","T"]},h:{priority:70,parse:function(e,t,i,n){switch(t){case"h":return Os(gs,e);case"ho":return i.ordinalNumber(e,{unit:"hour"});default:return Ns(t.length,e)}},validate:function(e,t,i){return t>=1&&t<=12},set:function(e,t,i,n){var o=e.getUTCHours()>=12;return o&&i<12?e.setUTCHours(i+12,0,0,0):o||12!==i?e.setUTCHours(i,0,0,0):e.setUTCHours(0,0,0,0),e},incompatibleTokens:["H","K","k","t","T"]},H:{priority:70,parse:function(e,t,i,n){switch(t){case"H":return Os(ms,e);case"Ho":return i.ordinalNumber(e,{unit:"hour"});default:return Ns(t.length,e)}},validate:function(e,t,i){return t>=0&&t<=23},set:function(e,t,i,n){return e.setUTCHours(i,0,0,0),e},incompatibleTokens:["a","b","h","K","k","t","T"]},K:{priority:70,parse:function(e,t,i,n){switch(t){case"K":return Os(vs,e);case"Ko":return i.ordinalNumber(e,{unit:"hour"});default:return Ns(t.length,e)}},validate:function(e,t,i){return t>=0&&t<=11},set:function(e,t,i,n){return e.getUTCHours()>=12&&i<12?e.setUTCHours(i+12,0,0,0):e.setUTCHours(i,0,0,0),e},incompatibleTokens:["a","b","h","H","k","t","T"]},k:{priority:70,parse:function(e,t,i,n){switch(t){case"k":return Os(fs,e);case"ko":return i.ordinalNumber(e,{unit:"hour"});default:return Ns(t.length,e)}},validate:function(e,t,i){return t>=1&&t<=24},set:function(e,t,i,n){var o=i<=24?i%24:i;return e.setUTCHours(o,0,0,0),e},incompatibleTokens:["a","b","h","H","K","t","T"]},m:{priority:60,parse:function(e,t,i,n){switch(t){case"m":return Os(ys,e);case"mo":return i.ordinalNumber(e,{unit:"minute"});default:return Ns(t.length,e)}},validate:function(e,t,i){return t>=0&&t<=59},set:function(e,t,i,n){return e.setUTCMinutes(i,0,0),e},incompatibleTokens:["t","T"]},s:{priority:50,parse:function(e,t,i,n){switch(t){case"s":return Os(_s,e);case"so":return i.ordinalNumber(e,{unit:"second"});default:return Ns(t.length,e)}},validate:function(e,t,i){return t>=0&&t<=59},set:function(e,t,i,n){return e.setUTCSeconds(i,0),e},incompatibleTokens:["t","T"]},S:{priority:30,parse:function(e,t,i,n){return Ns(t.length,e,(function(e){return Math.floor(e*Math.pow(10,3-t.length))}))},set:function(e,t,i,n){return e.setUTCMilliseconds(i),e},incompatibleTokens:["t","T"]},X:{priority:10,parse:function(e,t,i,n){switch(t){case"X":return Is(Ts,e);case"XX":return Is(As,e);case"XXXX":return Is(Ls,e);case"XXXXX":return Is(Hs,e);default:return Is(Ps,e)}},set:function(e,t,i,n){return t.timestampIsSet?e:new Date(e.getTime()-i)},incompatibleTokens:["t","T","x"]},x:{priority:10,parse:function(e,t,i,n){switch(t){case"x":return Is(Ts,e);case"xx":return Is(As,e);case"xxxx":return Is(Ls,e);case"xxxxx":return Is(Hs,e);default:return Is(Ps,e)}},set:function(e,t,i,n){return t.timestampIsSet?e:new Date(e.getTime()-i)},incompatibleTokens:["t","T","X"]},t:{priority:40,parse:function(e,t,i,n){return Vs(e)},set:function(e,t,i,n){return[new Date(1e3*i),{timestampIsSet:!0}]},incompatibleTokens:"*"},T:{priority:20,parse:function(e,t,i,n){return Vs(e)},set:function(e,t,i,n){return[new Date(i),{timestampIsSet:!0}]},incompatibleTokens:"*"}},Us=js,Ys=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ws=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ks=/^'(.*?)'?$/,Js=/''/g,Xs=/\S/,Gs=/[a-zA-Z]/;function Zs(e,t,i,n){if(arguments.length<3)throw new TypeError("3 arguments required, but only "+arguments.length+" present");var o=String(e),r=String(t),a=n||{},s=a.locale||wa;if(!s.match)throw new RangeError("locale must contain match property");var l=s.options&&s.options.firstWeekContainsDate,d=null==l?1:xa(l),h=null==a.firstWeekContainsDate?d:xa(a.firstWeekContainsDate);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=s.options&&s.options.weekStartsOn,p=null==c?0:xa(c),u=null==a.weekStartsOn?p:xa(a.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(""===r)return""===o?ua(i):new Date(NaN);var m,f={firstWeekContainsDate:h,weekStartsOn:u,locale:s},v=[{priority:10,set:Qs,index:0}],g=r.match(Ws).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,Ka[t])(e,s.formatLong,f):e})).join("").match(Ys),y=[];for(m=0;m<g.length;m++){var _=g[m];!a.useAdditionalWeekYearTokens&&es(_)&&ts(_),!a.useAdditionalDayOfYearTokens&&Qa(_)&&ts(_);var b=_[0],w=Us[b];if(w){var x=w.incompatibleTokens;if(Array.isArray(x)){for(var C=void 0,z=0;z<y.length;z++){var S=y[z].token;if(-1!==x.indexOf(S)||S===b){C=y[z];break}}if(C)throw new RangeError("The format string mustn't contain `".concat(C.fullToken,"` and `").concat(_,"` at the same time"))}else if("*"===w.incompatibleTokens&&y.length)throw new RangeError("The format string mustn't contain `".concat(_,"` and any other token at the same time"));y.push({token:b,fullToken:_});var M=w.parse(o,_,s.match,f);if(!M)return new Date(NaN);v.push({priority:w.priority,set:w.set,validate:w.validate,value:M.value,index:v.length}),o=M.rest}else{if(b.match(Gs))throw new RangeError("Format string contains an unescaped latin alphabet character `"+b+"`");if("''"===_?_="'":"'"===b&&(_=_.match(Ks)[1].replace(Js,"'")),0!==o.indexOf(_))return new Date(NaN);o=o.slice(_.length)}}if(o.length>0&&Xs.test(o))return new Date(NaN);var E=v.map((function(e){return e.priority})).sort((function(e,t){return t-e})).filter((function(e,t,i){return i.indexOf(e)===t})).map((function(e){return v.filter((function(t){return t.priority===e})).reverse()})).map((function(e){return e[0]})),k=ua(i);if(isNaN(k))return new Date(NaN);var T=Ca(k,Xa(k)),A={};for(m=0;m<E.length;m++){var L=E[m];if(L.validate&&!L.validate(T,L.value,f))return new Date(NaN);var P=L.set(T,A,L.value,f);P[0]?(T=P[0],ls(A,P[1])):T=P}return T}function Qs(e,t){if(t.timestampIsSet)return e;var i=new Date(0);return i.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),i.setHours(e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()),i}function el(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var i=ua(e),n=xa(t);return i.setDate(i.getDate()+n),i}function tl(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=ua(e);return t.setHours(0,0,0,0),t}function il(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");return ua(e).getDay()}function nl(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");return ua(e).getMonth()}function ol(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");return ua(e).getFullYear()}function rl(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var i=ua(e),n=xa(t),o=i.getMonth()+n,r=new Date(0);r.setFullYear(i.getFullYear(),o,1),r.setHours(0,0,0,0);var a=function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=ua(e),i=t.getFullYear(),n=t.getMonth(),o=new Date(0);return o.setFullYear(i,n+1,0),o.setHours(0,0,0,0),o.getDate()}(r);return i.setMonth(o,Math.min(a,i.getDate())),i}function al(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");return rl(e,12*xa(t))}function sl(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");return rl(e,-xa(t))}var ll={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXMonths:{one:"cerca de 1 mês",other:"cerca de {{count}} meses"},xMonths:{one:"1 mês",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};var dl={date:fa({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:fa({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:fa({formats:{full:"{{date}} 'às' {{time}}",long:"{{date}} 'às' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},hl={lastWeek:function(e,t,i){var n=e.getUTCDay();return"'"+(0===n||6===n?"último":"última")+"' eeee 'às' p"},yesterday:"'ontem às' p",today:"'hoje às' p",tomorrow:"'amanhã às' p",nextWeek:"eeee 'às' p",other:"P"};var cl={formatDistance:function(e,t,i){var n;return i=i||{},n="string"==typeof ll[e]?ll[e]:1===t?ll[e].one:ll[e].other.replace("{{count}}",t),i.addSuffix?i.comparison>0?"em "+n:"há "+n:n},formatLong:dl,formatRelative:function(e,t,i,n){var o=hl[e];return"function"==typeof o?o(t,i,n):o},localize:{ordinalNumber:function(e,t){var i=Number(e),n=String((t||{}).unit);return"week"===n||"isoWeek"===n?i+"ª":i+"º"},era:ya({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","depois de cristo"]},defaultWidth:"wide"}),quarter:ya({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:ya({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},defaultWidth:"wide"}),day:ya({values:{narrow:["do","2ª","3ª","4ª","5ª","6ª","sá"],short:["do","2ª","3ª","4ª","5ª","6ª","sá"],abbreviated:["dom","seg","ter","qua","qui","sex","sáb"],wide:["domingo","segunda","terça","quarta","quinta","sexta","sábado"]},defaultWidth:"wide"}),dayPeriod:ya({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:_a({matchPattern:/^(\d+)[ºªo]?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:ba({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|d\.?\s?c\.?)/i,wide:/^(antes de cristo|depois de cristo)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^antes de cristo/i,/^depois de cristo/i]},defaultParseWidth:"any"}),quarter:ba({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:ba({matchPatterns:{narrow:/^[jfmajsond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^fev/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dez/i]},defaultParseWidth:"any"}),day:ba({matchPatterns:{narrow:/^(dom|[23456]ª?|s[aá]b)/i,short:/^(dom|[23456]ª?|s[aá]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,wide:/^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i},defaultMatchWidth:"wide",parsePatterns:{short:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],narrow:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[aá]b/i]},defaultParseWidth:"any"}),dayPeriod:ba({matchPatterns:{narrow:/^(a|p|mn|md|(da) (manhã|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn|^meia[-\s]noite/i,noon:/^md|^meio[-\s]dia/i,morning:/manhã/i,afternoon:/tarde/i,evening:/tarde/i,night:/noite/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}},pl=cl,ul={lessThanXSeconds:{one:"moins d’une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d’une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d’un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu’un an",other:"presque {{count}} ans"}};var ml={date:fa({formats:{full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:fa({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:fa({formats:{full:"{{date}} 'à' {{time}}",long:"{{date}} 'à' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},fl={lastWeek:"eeee 'dernier à' p",yesterday:"'hier à' p",today:"'aujourd’hui à' p",tomorrow:"'demain à' p'",nextWeek:"eeee 'prochain à' p",other:"P"};var vl={formatDistance:function(e,t,i){var n;return i=i||{},n="string"==typeof ul[e]?ul[e]:1===t?ul[e].one:ul[e].other.replace("{{count}}",t),i.addSuffix?i.comparison>0?"dans "+n:"il y a "+n:n},formatLong:ml,formatRelative:function(e,t,i,n){return fl[e]},localize:{ordinalNumber:function(e,t){var i=Number(e),n=String((t||{}).unit);return 0===i?i:i+("year"===n||"hour"===n||"week"===n?1===i?"ère":"ème":1===i?"er":"ème")},era:ya({values:{narrow:["av. J.-C","ap. J.-C"],abbreviated:["av. J.-C","ap. J.-C"],wide:["avant Jésus-Christ","après Jésus-Christ"]},defaultWidth:"wide"}),quarter:ya({values:{narrow:["T1","T2","T3","T4"],abbreviated:["1er trim.","2ème trim.","3ème trim.","4ème trim."],wide:["1er trimestre","2ème trimestre","3ème trimestre","4ème trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:ya({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],wide:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},defaultWidth:"wide"}),day:ya({values:{narrow:["D","L","M","M","J","V","S"],short:["di","lu","ma","me","je","ve","sa"],abbreviated:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],wide:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},defaultWidth:"wide"}),dayPeriod:ya({values:{narrow:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"soir",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"matin",afternoon:"après-midi",evening:"soir",night:"matin"},wide:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"du matin",afternoon:"de l’après-midi",evening:"du soir",night:"du matin"}},defaultWidth:"wide"})},match:{ordinalNumber:_a({matchPattern:/^(\d+)(ième|ère|ème|er|e)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:ba({matchPatterns:{narrow:/^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,abbreviated:/^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(avant Jésus-Christ|après Jésus-Christ)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^av/i,/^ap/i]},defaultParseWidth:"any"}),quarter:ba({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^t[1234]/i,wide:/^[1234](er|ème|e)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:ba({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,wide:/^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^av/i,/^ma/i,/^jui/i,/^juil/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:ba({matchPatterns:{narrow:/^[lmjvsd]/i,short:/^(di|lu|ma|me|je|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,wide:/^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^lu/i,/^ma/i,/^me/i,/^je/i,/^ve/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:ba({matchPatterns:{narrow:/^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,any:/^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/soir/i,night:/nuit/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};const gl=Io`
/* Most common used flex styles*/
<dom-module id="iron-flex">
  <template>
    <style>
      .layout.horizontal,
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.inline {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      }

      .layout.horizontal {
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      }

      .layout.vertical {
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }

      .layout.wrap {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .layout.no-wrap {
        -ms-flex-wrap: nowrap;
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-auto {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      }

      .flex-none {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      }
    </style>
  </template>
</dom-module>
/* Basic flexbox reverse styles */
<dom-module id="iron-flex-reverse">
  <template>
    <style>
      .layout.horizontal-reverse,
      .layout.vertical-reverse {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.horizontal-reverse {
        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      }

      .layout.vertical-reverse {
        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      }

      .layout.wrap-reverse {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      }
    </style>
  </template>
</dom-module>
/* Flexbox alignment */
<dom-module id="iron-flex-alignment">
  <template>
    <style>
      /**
       * Alignment in cross axis.
       */
      .layout.start {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.end {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      }

      .layout.baseline {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      }

      /**
       * Alignment in main axis.
       */
      .layout.start-justified {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .layout.end-justified {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      }

      .layout.around-justified {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      }

      .layout.justified {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      }

      /**
       * Self alignment.
       */
      .self-start {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      }

      .self-center {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      }

      .self-end {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      }

      .self-stretch {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      }

      .self-baseline {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      }

      /**
       * multi-line alignment in main axis.
       */
      .layout.start-aligned {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      }

      .layout.end-aligned {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      }

      .layout.center-aligned {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      }

      .layout.between-aligned {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      }

      .layout.around-aligned {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      }
    </style>
  </template>
</dom-module>
/* Non-flexbox positioning helper styles */
<dom-module id="iron-flex-factors">
  <template>
    <style>
      .flex,
      .flex-1 {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-2 {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      }

      .flex-3 {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      }

      .flex-4 {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      }

      .flex-5 {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      }

      .flex-6 {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      }

      .flex-7 {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      }

      .flex-8 {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      }

      .flex-9 {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      }

      .flex-10 {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      }

      .flex-11 {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      }

      .flex-12 {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      }
    </style>
  </template>
</dom-module>
<dom-module id="iron-positioning">
  <template>
    <style>
      .block {
        display: block;
      }

      [hidden] {
        display: none !important;
      }

      .invisible {
        visibility: hidden !important;
      }

      .relative {
        position: relative;
      }

      .fit {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      body.fullbleed {
        margin: 0;
        height: 100vh;
      }

      .scroll {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      }

      /* fixed position */
      .fixed-bottom,
      .fixed-left,
      .fixed-right,
      .fixed-top {
        position: fixed;
      }

      .fixed-top {
        top: 0;
        left: 0;
        right: 0;
      }

      .fixed-right {
        top: 0;
        right: 0;
        bottom: 0;
      }

      .fixed-bottom {
        right: 0;
        bottom: 0;
        left: 0;
      }

      .fixed-left {
        top: 0;
        bottom: 0;
        left: 0;
      }
    </style>
  </template>
</dom-module>
`;gl.setAttribute("style","display: none;"),document.head.appendChild(gl.content);const yl=customElements.get("dom-module").import("iron-flex","template"),_l=customElements.get("dom-module").import("iron-flex-alignment","template"),bl=e(yl.content.firstElementChild.textContent),wl=e(_l.content.firstElementChild.textContent);function xl(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");return ua(e).getTime()}class Cl extends i{constructor(){super(...arguments),this.disabled=!1,this.type="seb",this.selected=!1,this.hovered=!1,this.isCurrentDate=!1,this.disabledDays=[],this.days=[]}static get styles(){return[n`
      :host {
        font-family: Roboto;
        display: block;
        width: 38px;
      }

      .day {
        text-align: center;
        height: 38px;
        width: 38px;
        margin: 0;
        padding: 0;
        color: var(--lit-datepicker-cell-text);
        border-radius: 5px;
      }

      .day.seb {
        font-size: 22px;
      }

      .day:not(.disabled):hover {
        background: var(--lit-datepicker-cell-hover, #e4e7e7);
        cursor: pointer;
      }

      .day.hovered {
        background: var(
          --lit-datepicker-cell-hovered,
          rgba(0, 150, 136, 0.5)
        ) !important;
        color: var(--lit-datepicker-cell-hovered-text, white);
      }

      .day.seb.selected {
        border-radius: 8px;
      }

      .day.selected {
        background: var(
          --lit-datepicker-cell-selected,
          rgb(0, 150, 136)
        ) !important;
        color: var(--lit-datepicker-cell-selected-text, white);
      }

      .day.currentDate .currentDayMarker {
        width: 80%;
        height: 80%;
        font-weight: var(--current-day-font-weight, bold);
        border-radius: 50%;
        background-color: var(--current-day-background-color);
        color: var(--current-day-color);
      }

      .day.seb.disabled {
        font-size: 16px;
      }

      .day.disabled {
        opacity: 0.4;
      }
    `,bl,wl]}render(){return o`
      <div
        @click="${this.handleTap}"
        @keydown="${this.handleTap}"
        @mouseover="${this.handleHover}"
        @focus="${this.handleHover}"
        class="layout horizontal center center-justified day ${this.type} ${this.isCurrentDate?"currentDate":null} ${this.selected?"selected":""} ${this.hovered?"hovered":""} ${this.isEnabled(this.day,this.min,this.max,this.disabledDays)}"
      >
        <div class="layout horizontal center center-justified currentDayMarker">
          ${this.day?this.day.title:null}
        </div>
      </div>
    `}updated(e){(e.has("dateFrom")||e.has("dateTo")||e.has("hoveredDate")||e.has("day"))&&this.dateChanged(this.dateFrom,this.dateTo,this.hoveredDate,this.day)}dateChanged(e,t,i,n){this.selected=!1,this.hovered=!1;const o=parseInt(e,10),r=parseInt(t,10);n&&(xl(tl(1e3*r))/1e3!==n.date&&xl(tl(1e3*o))/1e3!==n.date||(this.selected=!0),((i===n.date||n.date<i)&&n.date>o&&!r&&!Number.isNaN(o)&&void 0!==o&&!this.selected||n.date>o&&n.date<r)&&(this.hovered=!0))}handleTap(){this.disabled||this.dispatchEvent(new CustomEvent("date-is-selected",{detail:{date:this.day.date}}))}handleHover(){this.dispatchEvent(new CustomEvent("date-is-hovered",{detail:{date:this.day.date}}))}isEnabled(e,t,i,n){return this.disabled=!1,n&&e&&e.date&&(e.date<t||e.date>i||-1!==n.findIndex((t=>t===e.date)))||this.days&&this.day&&this.month&&!this.days.includes(`${this.day.title}/${this.month}`)?(this.disabled=!0,`disabled ${this.type}`):""}}t([r({type:Object})],Cl.prototype,"day",void 0),t([r({type:String})],Cl.prototype,"month",void 0),t([r({type:Number})],Cl.prototype,"min",void 0),t([r({type:Number})],Cl.prototype,"max",void 0),t([r({type:Number})],Cl.prototype,"dateFrom",void 0),t([r({type:Number})],Cl.prototype,"dateTo",void 0),t([r({type:Number})],Cl.prototype,"hoveredDate",void 0),t([r({type:Boolean})],Cl.prototype,"disabled",void 0),t([r({type:String})],Cl.prototype,"type",void 0),t([r({type:Boolean})],Cl.prototype,"selected",void 0),t([r({type:Boolean})],Cl.prototype,"hovered",void 0),t([r({type:Boolean})],Cl.prototype,"isCurrentDate",void 0),t([r({type:Array})],Cl.prototype,"disabledDays",void 0),t([r({type:Array})],Cl.prototype,"days",void 0),window.customElements.define("lit-datepicker-cell",Cl);const zl={en:wa,fr:vl,pt:pl};class Sl extends i{constructor(){super(...arguments),this.yearsList=[],this.dayNamesOfTheWeek=["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],this.locale="pt",this.defaultAs="today",this.narrow=!1,this.enableYearChange=!1,this.enableMonthChange=!1,this.displayGoToday=!1,this.noRange=!1,this.maxRange=0,this.currentDate=parseInt(ss(tl(Date.now()),"t"),10),this.monthsList=[],this.months=[],this.years=[],this.days=[],this.daysOfMonth=[],this.disabledDays=[],this.type="seb"}static get styles(){return[n`
      :host {
        font-family: Roboto, sans-serif;
        display: block;
        background: var(--lit-datepicker-background, white);
        min-width: 275px;
        padding: 20px;
        border-radius: 20px;
        border-style: solid;
        border-width: 1px;
        border-color: #e5e7eb;
      }

      :host > div {
        overflow: hidden;
      }

      div.table {
        border-collapse: collapse;
        table-layout: fixed;
        margin-top: 10px;
      }

      div.th {
        display: table-cell;
        color: var(--lit-datepicker-day-names-text, #333333);
        width: 38px;
        padding: 0;
        margin: 0;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 0;
        line-height: 28px;
      }

      .seb div.th {
        width: 61px;
      }

      div.tr {
        height: 38px;
        display: flex;
        justify-content: space-around;
      }

      .seb div.tr {
        height: unset;
      }

      div.td {
        display: table-cell;
        padding: 0;
        width: 38px;
        margin: 0;
      }

      .seb div.td {
        width: 61px;
      }

      @media screen and (max-width: 600px) {
        .seb div.td {
          width: 50px;
        }
        .seb div.th {
          width: 50px;
        }
      }
      @media screen and (max-width: 450px) {
        .seb div.td {
          width: 40px;
        }
        .seb div.th {
          width: 40px;
        }
      }
      .monthName {
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
        margin: 10px 0 0 0;
        text-align: center;
        color: var(--lit-datepicker-month-text);
        height: 32px;
        overflow: hidden;
      }

      .seb.monthName {
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
        width: max-content;
        margin: 10px 0 0 0;
        text-align: center;
        color: var(--lit-datepicker-cell-selected, rgb(0, 150, 136)) !important;
        height: 32px;
        overflow: hidden;
      }

      .monthName::first-letter {
        text-transform: uppercase;
      }

      .monthName > div > div {
        margin-right: 8px;
        height: 30px;
      }

      paper-listbox {
        max-height: 200px;
      }

      div.tbody {
        transition: all 0ms;
        transform: translateX(0);
      }

      .withTransition {
        transition: all 100ms;
      }

      .seb .w-full {
        width: 100%;
      }

      .moveToLeft {
        transform: translateX(-274px);
      }

      .seb .moveToLeft {
        transform: none;
      }

      .moveToRight {
        transform: translateX(274px);
      }

      .seb .moveToRight {
        transform: none;
      }

      .withTransition td,
      .moveToLeft td,
      .moveToRight td {
        border: none;
      }

      paper-dropdown-menu {
        width: 75px;
        padding: 0;
        height: auto;
      }

      .go-today {
        text-align: center;
        text-decoration: underline;
        font-size: 10px;
        color: var(--lit-datepicker-today-shortcut, rgb(0, 150, 136));
        height: 11px;
      }
      .go-today span {
        cursor: pointer;
      }
      .month-change {
        min-width: 130px;
        margin-right: 8px;
      }

      .monthName paper-icon-button {
        width: 30px;
        height: 30px;
        padding: 0px;
      }

      .table.seb .thead .tr .th {
        font-weight: bold;
        font-size: 20px;
        line-height: 28px;
        color: var(--lit-datepicker-day-names-text, rgb(0, 0, 0));
        letter-spacing: 0;
        padding-bottom: 18px;
      }

      @media screen and (max-width: 450px) {
        .table.seb .thead .tr .th {
          font-size: 18px;
          line-height: 20px;
        }
      }
      @media screen and (max-width: 450px) {
        .table.seb div.td {
          font-size: 18px;
          line-height: 20px;
        }
      }
    `,bl,wl]}render(){return o`
      <div class="lit-class ${this.type}">
        ${"seb"===this.type?o`
              <div class="seb monthName layout horizontal center w-full">
                <div class="flex layout horizontal center center-justified">
                  ${this.enableMonthChange?o`
                        <paper-icon-button
                          icon="chevron-left"
                          ?disabled="${!(this.monthsList&&this.monthsList.filter((e=>{var t;return!(null===(t=this.months)||void 0===t?void 0:t.length)||this.months.includes(e)})).includes((parseFloat(this.month)-1).toString().padStart(2,"0")))}"
                          @tap="${this.handlePrevMonth}"
                        ></paper-icon-button>
                        ${this.computeCurrentMonthName(this.month,this.year)}
                        ${this.year}
                        <paper-icon-button
                          icon="chevron-right"
                          ?disabled="${!(this.monthsList&&this.monthsList.filter((e=>{var t;return!(null===(t=this.months)||void 0===t?void 0:t.length)||this.months.includes(e)})).includes((parseFloat(this.month)+1).toString().padStart(2,"0")))}"
                          @tap="${this.handleNextMonth}"
                        ></paper-icon-button>
                      `:o`<div>
                        ${this.computeCurrentMonthName(this.month,this.year)}
                      </div>`}
                </div>
              </div>
            `:o`
              <div class="monthName layout horizontal center">
                ${(this.prev||this.narrow||this.enableYearChange)&&this.isFirstAllowedMonth()?o`<paper-icon-button
                      icon="chevron-left"
                      @tap="${this.handlePrevMonth}"
                    ></paper-icon-button>`:null}
                <div class="flex layout horizontal center center-justified">
                  ${this.enableMonthChange?o` <paper-dropdown-menu
                        class="month-change"
                        no-label-float
                      >
                        <paper-listbox
                          slot="dropdown-content"
                          selected="${this.month}"
                          @selected-changed="${this.handleMonthListChanged}"
                          attr-for-selected="data-name"
                        >
                          ${this.monthsList&&this.monthsList.filter((e=>{var t;return!(null===(t=this.months)||void 0===t?void 0:t.length)||this.months.includes(e)})).map((e=>o`<paper-item data-name="${e}"
                                  >${this.computeCurrentMonthName(e,this.year)}</paper-item
                                >`))}
                        </paper-listbox>
                      </paper-dropdown-menu>`:o`<div>
                        ${this.computeCurrentMonthName(this.month,this.year)}
                      </div>`}
                  ${this.enableYearChange&&this.years.length>1?o` <paper-dropdown-menu
                        class="year-change"
                        no-label-float
                      >
                        <paper-listbox
                          slot="dropdown-content"
                          selected="${this.year}"
                          @selected-changed="${this.handleYearListChanged}"
                          attr-for-selected="data-name"
                        >
                          ${this.yearsList&&this.yearsList.filter((e=>{var t;return!(null===(t=this.years)||void 0===t?void 0:t.length)||this.years.includes(e)})).map((e=>o`<paper-item data-name="${e}"
                                  >${e}</paper-item
                                >`))}
                        </paper-listbox>
                      </paper-dropdown-menu>`:o`${this.year}`}
                </div>
                ${(this.next||this.narrow||this.enableYearChange)&&this.isLastAllowedMonth()?o`<paper-icon-button
                      icon="chevron-right"
                      @tap="${this.handleNextMonth}"
                    ></paper-icon-button>`:null}
              </div>
            `}
        <div class="go-today">
          ${e=this.displayGoToday,t=this.month,i=this.year,!e||parseInt(t,10)===nl(new Date)+1&&parseInt(i,10)===ol(new Date)?null:o` <span @tap=${this.goToday}>Aujourd'hui</span> `}
        </div>

        <div class="table ${this.type}">
          <div class="thead">
            <div class="tr">
              ${this.dayNamesOfTheWeek&&this.dayNamesOfTheWeek.map((e=>o`<div class="th">${e}</div>`))}
            </div>
          </div>
          <div class="tbody">
            ${this.daysOfMonth&&this.daysOfMonth.map((e=>o` <div class="tr">
                ${e&&e.map((e=>o` <div
                    class="td ${e?"enabled":""}"
                  >
                    ${e?o`
                          <lit-datepicker-cell
                            .disabledDays="${this.disabledDays}"
                            .min="${this.min}"
                            .max="${this.max}"
                            .month="${this.month}"
                            .hoveredDate="${this.hoveredDate}"
                            .dateTo="${this.dateTo}"
                            .dateFrom="${this.dateFrom}"
                            .day="${e}"
                            .days="${this.days}"
                            .type="${this.type}"
                            ?isCurrentDate="${this.isCurrentDate(e)}"
                            @date-is-hovered="${this.handleDateHovered}"
                            @date-is-selected="${this.handleDateSelected}"
                          ></lit-datepicker-cell>
                        `:null}
                  </div>`))}
              </div>`))}
          </div>
        </div>
      </div>
    `;var e,t,i}isFirstAllowedMonth(){const e=ss(sl(Zs(this.month,"MM",new Date),1),"MM",{locale:zl[this.locale]});return parseInt(this.months[0],10)===parseInt(e,10)}isLastAllowedMonth(){const e=ss(rl(Zs(this.month,"MM",new Date),1),"MM",{locale:zl[this.locale]});return parseInt(this.months[this.months.length-1],10)===parseInt(e,10)}isCurrentDate(e){return e.date===this.currentDate}updated(e){e.has("enableYearChange")&&this.enableYearChangeChanged(this.enableYearChange),e.has("year")&&this.dispatchEvent(new CustomEvent("year-changed",{detail:{value:this.year}})),e.has("type")&&(this.render(),this.requestUpdate()),(e.has("year")||e.has("month"))&&this.yearAndMonthChanged(this.year,this.month)}localeChanged(){if(zl[this.locale]){const e=[];let t=0;for(;t<7;t+=1)e.push(zl[this.locale].localize.day(t,{width:"short"}));const i=zl[this.locale].options.weekStartsOn,n=e.slice().splice(0,i),o=e.slice().splice(i,e.length).concat(n);this.dayNamesOfTheWeek=o}}yearAndMonthChanged(e,t){if(e&&t){let i=t;i=i.substring(i.length-2);let n=`01/${i}/${e}`,o=Zs(n,"dd/MM/yyyy",new Date,{awareOfUnicodeTokens:!0});const r=function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=ua(e),i=t.getMonth();return t.setFullYear(t.getFullYear(),i+1,0),t.setHours(23,59,59,999),t}(o),a=ss(r,"dd/MM/yyyy",{awareOfUnicodeTokens:!0}),s=zl[this.locale].options.weekStartsOn,l=[];let d=[];const h=6;for(;n!==a;){let e=il(o)-s;e<0&&(e=6);const t={hover:!1,date:parseInt(ss(o,"t"),10),title:parseInt(ss(o,"d",{awareOfUnicodeTokens:!0}),10)};if(d.push(t),e===h){for(let e=d.length;e<h+1;e+=1)d.unshift(0);l.push(d.slice()),d=[]}if(o=el(o,1),n=ss(o,"dd/MM/yyyy",{awareOfUnicodeTokens:!0}),n===a){const e={hover:!1,date:parseInt(ss(o,"t"),10),title:parseInt(ss(o,"d",{awareOfUnicodeTokens:!0}),10)};d.push(e);for(let e=d.length;e<=h;e+=1)d.push(0);l.push(d.slice()),d=[]}}this.daysOfMonth=l}}computeCurrentMonthName(e,t){if(e&&t){const i=Zs(`${e}/${t}`,"MM/yyyy",new Date);return ss(i,"MMMM",{locale:zl[this.locale]}).charAt(0).toUpperCase()+ss(i,"MMMM",{locale:zl[this.locale]}).slice(1)}return""}handleDateSelected({detail:e}){const{date:t}=e;this.noRange?this.dateFrom=t:this.dateFrom&&this.dateTo?(this.dateFrom=t,this.dateTo=null,this.hoveredDate=void 0,this.dispatchEvent(new CustomEvent("hovered-date-changed",{detail:{value:this.hoveredDate}}))):!this.dateFrom||this.dateFrom&&t<this.dateFrom||this.maxRange>0&&t-this.dateFrom>24*this.maxRange*3600?this.dateFrom=t:(!this.dateTo||this.dateTo&&t>this.dateTo)&&(this.dateTo=t),this.dispatchEvent(new CustomEvent("date-from-changed",{detail:{value:this.dateFrom}})),this.dispatchEvent(new CustomEvent("date-to-changed",{detail:{value:this.dateTo}}))}handleDateHovered(e){this.noRange||(this.hoveredDate=e.detail.date,this.dispatchEvent(new CustomEvent("hovered-date-changed",{detail:{value:this.hoveredDate}})))}handleNextMonth(){const e=this.shadowRoot.querySelector(".tbody"),t=this.shadowRoot.querySelector(".monthName > div");e&&(e.classList.add("withTransition"),e.classList.add("moveToLeft")),t&&(t.classList.add("withTransition"),t.classList.add("moveToLeft"));const i=ss(rl(Zs(this.month,"MM",new Date),1),"MM",{locale:zl[this.locale]});if(this.month=i,"01"===this.month){const e=ss(al(Zs(this.year,"yyyy",new Date),1),"yyyy",{locale:zl[this.locale]});this.year=e}this.dispatchEvent(new CustomEvent("next-month")),setTimeout((()=>{e&&(e.classList.remove("withTransition"),e.classList.add("moveToRight"),e.classList.remove("moveToLeft")),t&&(t.classList.remove("withTransition"),t.classList.add("moveToRight"),t.classList.remove("moveToLeft")),setTimeout((()=>{e&&(e.classList.add("withTransition"),e.classList.remove("moveToRight")),t&&(t.classList.add("withTransition"),t.classList.remove("moveToRight")),setTimeout((()=>{e&&e.classList.remove("withTransition"),t&&t.classList.remove("withTransition")}),100)}),100)}),100)}handlePrevMonth(){const e=this.shadowRoot.querySelector(".tbody"),t=this.shadowRoot.querySelector(".monthName > div");if(e&&t){e.classList.add("withTransition"),e.classList.add("moveToRight"),t.classList.add("withTransition"),t.classList.add("moveToRight");const i=ss(sl(Zs(this.month,"MM",new Date),1),"MM",{locale:zl[this.locale]});if(this.month=i,"12"===this.month){const e=function(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");return al(e,-xa(t))}(Zs(this.year,"yyyy",new Date),1),t=ss(e,"yyyy",{locale:zl[this.locale]});this.year=t}this.dispatchEvent(new CustomEvent("prev-month")),setTimeout((()=>{e.classList.remove("withTransition"),e.classList.add("moveToLeft"),e.classList.remove("moveToRight"),t.classList.remove("withTransition"),t.classList.add("moveToLeft"),t.classList.remove("moveToRight"),setTimeout((()=>{e.classList.add("withTransition"),e.classList.remove("moveToLeft"),t.classList.add("withTransition"),t.classList.remove("moveToLeft"),setTimeout((()=>{t.classList.remove("withTransition"),t.classList.remove("withTransition")}),100)}),100)}),100)}}setYears(e,t){const i=[];for(let n=e;n<=t;n+=1)i.push(n);this.yearsList=i}async firstUpdated(){if(this.monthsList=["01","02","03","04","05","06","07","08","09","10","11","12"],setTimeout((()=>{this.setYears(1930,2100)})),await this.updateComplete,this.enableYearChange){this.shadowRoot.querySelector(".year-change").updateStyles({"--paper-input-container-underline_-_display":"none","--paper-input-container-shared-input-style_-_font-weight":"500","--paper-input-container-shared-input-style_-_text-align":"right","--paper-input-container-shared-input-style_-_font-size":"20px","--paper-input-container_-_width":"75px","--paper-input-container_-_padding":"0","--paper-input-container-shared-input-style_-_color":"var(--paper-datatable-navigation-bar-text-color, rgba(0, 0, 0, .54))","--paper-input-container-input-color":"var(--paper-datatable-navigation-bar-text-color, rgba(0, 0, 0, .54))","--disabled-text-color":"var(--paper-datatable-navigation-bar-text-color, rgba(0, 0, 0, .54))"})}if(this.enableMonthChange){this.shadowRoot.querySelector(".month-change").updateStyles({"--paper-input-container-underline_-_display":"none","--paper-input-container-shared-input-style_-_font-weight":"500","--paper-input-container-shared-input-style_-_text-align":"center","--paper-input-container-shared-input-style_-_font-size":"20px","--paper-input-container_-_width":"75px","--paper-input-container_-_padding":"0","--paper-input-container-shared-input-style_-_color":"var(--paper-datatable-navigation-bar-text-color, rgba(0, 0, 0, .54))","--paper-input-container-input-color":"var(--paper-datatable-navigation-bar-text-color, rgba(0, 0, 0, .54))","--disabled-text-color":"var(--paper-datatable-navigation-bar-text-color, rgba(0, 0, 0, .54))"})}}enableYearChangeChanged(e){this.enableYearChange=e}handleYearListChanged({detail:e}){this.year=e.value}handleMonthListChanged({detail:e}){this.month=e.value}goToday(){this.month=`0${nl(new Date)+1}`.slice(-2),this.year=ol(new Date)}}t([r({type:Array})],Sl.prototype,"yearsList",void 0),t([r({type:Array})],Sl.prototype,"dayNamesOfTheWeek",void 0),t([r({type:String})],Sl.prototype,"locale",void 0),t([r({type:String})],Sl.prototype,"defaultAs",void 0),t([r({type:Boolean})],Sl.prototype,"narrow",void 0),t([r({type:Boolean})],Sl.prototype,"enableYearChange",void 0),t([r({type:Boolean})],Sl.prototype,"enableMonthChange",void 0),t([r({type:Boolean})],Sl.prototype,"displayGoToday",void 0),t([r({type:Boolean})],Sl.prototype,"noRange",void 0),t([r({type:Number})],Sl.prototype,"maxRange",void 0),t([r({type:Number})],Sl.prototype,"currentDate",void 0),t([r({type:String})],Sl.prototype,"prev",void 0),t([r({type:Array})],Sl.prototype,"monthsList",void 0),t([r({type:String})],Sl.prototype,"month",void 0),t([r({type:Array})],Sl.prototype,"months",void 0),t([r({type:String})],Sl.prototype,"year",void 0),t([r({type:Array})],Sl.prototype,"years",void 0),t([r({type:Array})],Sl.prototype,"days",void 0),t([r({type:Boolean})],Sl.prototype,"next",void 0),t([r({type:Array})],Sl.prototype,"daysOfMonth",void 0),t([r({type:Array})],Sl.prototype,"disabledDays",void 0),t([r({type:Number})],Sl.prototype,"min",void 0),t([r({type:Number})],Sl.prototype,"max",void 0),t([r({type:Number})],Sl.prototype,"hoveredDate",void 0),t([r({type:Number})],Sl.prototype,"dateTo",void 0),t([r({type:Number})],Sl.prototype,"dateFrom",void 0),t([r({type:String})],Sl.prototype,"type",void 0),window.customElements.define("lit-datepicker-calendar",Sl);class Ml extends i{constructor(){super(...arguments),this.forceNarrow=!0,this.narrow=!0,this.disabledDays=[],this.defaultAs="today",this.noRange=!0,this.locale="pt",this.enableYearChange=!0,this.enableMonthChange=!0,this.type="default"}static get styles(){return[n`
      :host {
        font-family: Roboto, sans-serif;
        display: block;
      }

      #firstDatePicker {
        margin-right: 16px;
      }
    `,bl,wl]}render(){return o`
      <iron-media-query
        query="(max-width: 650px)"
        @query-matches-changed="${this.queryMatchesChanged}"
      ></iron-media-query>

      ${this.forceNarrow||this.narrow?o` <lit-datepicker-calendar
            class="${this.type}"
            .disabledDays="${this.disabledDays}"
            .min="${this.min}"
            .max="${this.max}"
            .months="${this.months}"
            .years="${this.years}"
            .days="${this.days}"
            ?enableYearChange="${this.enableYearChange}"
            ?enableMonthChange="${this.enableMonthChange}"
            ?prev="${!0}"
            ?next="${!0}"
            ?noRange="${this.noRange}"
            .month="${this.month}"
            .year="${this.year}"
            .locale="${this.locale}"
            .hoveredDate="${this.hoveredDate}"
            .dateTo="${this.dateTo}"
            .dateFrom="${this.dateFrom}"
            .type="${this.type}"
            ?narrow="${this.narrow||this.forceNarrow}"
            @hovered-date-changed="${this.hoveredDateChanged}"
            @date-to-changed="${this.dateToChanged}"
            @date-from-changed="${this.dateFromChanged}"
          >
          </lit-datepicker-calendar>`:o` <div class="layout vertical center-justified">
            <div class="layout horizontal">
              <lit-datepicker-calendar
                id="firstDatePicker"
                class="${this.type}"
                .disabledDays="${this.disabledDays}"
                .min="${this.min}"
                .max="${this.max}"
                .months="${this.months}"
                .years="${this.years}"
                .days="${this.days}"
                ?enableYearChange="${this.enableYearChange}"
                ?enableMonthChange="${this.enableMonthChange}"
                .defaultAs="${this.defaultAs}"
                ?prev="${!0}"
                ?noRange="${this.noRange}"
                .locale="${this.locale}"
                .month="${this.month}"
                .year="${this.year}"
                .hoveredDate="${this.hoveredDate}"
                .dateTo="${this.dateTo}"
                .dateFrom="${this.dateFrom}"
                .type="${this.type}"
                @hovered-date-changed="${this.hoveredDateChanged}"
                @date-to-changed="${this.dateToChanged}"
                @date-from-changed="${this.dateFromChanged}"
                @prev-month="${this.handlePrevMonth}"
              >
              </lit-datepicker-calendar>
              <lit-datepicker-calendar
                class="${this.type}"
                .disabledDays="${this.disabledDays}"
                .min="${this.min}"
                .max="${this.max}"
                .months="${this.months}"
                .years="${this.years}"
                .days="${this.days}"
                ?enableYearChange="${this.enableYearChange}"
                ?enableMonthChange="${this.enableMonthChange}"
                ?next="${!0}"
                ?noRange="${this.noRange}"
                .locale="${this.locale}"
                .month="${this._monthPlus}"
                .year="${this._yearPlus}"
                .hoveredDate="${this.hoveredDate}"
                .dateTo="${this.dateTo}"
                .dateFrom="${this.dateFrom}"
                .type="${this.type}"
                @hovered-date-changed="${this.hoveredDateChanged}"
                @date-to-changed="${this.dateToChanged}"
                @date-from-changed="${this.dateFromChanged}"
                @next-month="${this.handleNextMonth}"
              >
              </lit-datepicker-calendar>
            </div>
          </div>`}
    `}localeChanged(){if(!this.month)switch(this.defaultAs){case"dateFrom":this.month=this.dateFrom?`0${nl(Zs(this.dateFrom,"t",new Date))+1}`.slice(-2):ss(new Date,"MM",{awareOfUnicodeTokens:!0});break;case"dateTo":this.month=this.dateTo?`0${nl(Zs(this.dateTo,"t",new Date))+1}`.slice(-2):ss(new Date,"MM",{awareOfUnicodeTokens:!0});break;default:this.month=ss(new Date,"MM",{awareOfUnicodeTokens:!0})}if(!this.year)switch(this.defaultAs){case"dateFrom":this.year=this.dateFrom?ol(Zs(this.dateFrom,"t",new Date)):ss(new Date,"yyyy");break;case"dateTo":this.year=this.dateTo?ol(Zs(this.dateTo,"t",new Date)):ss(new Date,"yyyy");break;default:this.year=ss(new Date,"yyyy")}}handlePrevMonth(){this.enableYearChange||this.shadowRoot.querySelector("lit-datepicker-calendar[next]").handlePrevMonth()}handleNextMonth(){this.enableYearChange||this.shadowRoot.querySelector("lit-datepicker-calendar[prev]").handleNextMonth()}monthChanged(e,t){if(t&&e){const i="0"+(e%12+1);this._monthPlus=i.substring(i.length-2),"01"===this._monthPlus?this._yearPlus=parseInt(t,10)+1:this._yearPlus=parseInt(t,10)}}noRangeChanged(e,t){!t&&e&&(this.dateTo=void 0,this.hoveredDate=void 0)}updated(e){(e.has("month")||e.has("year"))&&this.monthChanged(this.month,this.year),e.has("noRange")&&this.noRangeChanged(this.noRange,e.get("noRange")),e.has("narrow")&&this.dispatchEvent(new CustomEvent("narrow-changed",{detail:{value:this.narrow}})),e.has("locale")&&this.localeChanged(this.locale)}queryMatchesChanged({detail:e}){this.narrow=e.value}hoveredDateChanged({detail:e}){this.hoveredDate=e.value}dateToChanged({detail:e}){this.dateTo=e.value,this.dispatchEvent(new CustomEvent("date-to-changed",{detail:{value:this.dateTo}}))}dateFromChanged({detail:e}){this.dateFrom=e.value,this.dispatchEvent(new CustomEvent("date-from-changed",{detail:{value:this.dateFrom}}))}}t([r({type:Boolean})],Ml.prototype,"forceNarrow",void 0),t([r({type:Boolean})],Ml.prototype,"narrow",void 0),t([r({type:Array})],Ml.prototype,"disabledDays",void 0),t([r({type:Number})],Ml.prototype,"min",void 0),t([r({type:Number})],Ml.prototype,"max",void 0),t([r({type:String})],Ml.prototype,"defaultAs",void 0),t([r({type:Boolean})],Ml.prototype,"noRange",void 0),t([r({type:String})],Ml.prototype,"locale",void 0),t([r({type:String})],Ml.prototype,"month",void 0),t([r({type:Array})],Ml.prototype,"months",void 0),t([r({type:Array})],Ml.prototype,"years",void 0),t([r({type:Array})],Ml.prototype,"days",void 0),t([r({type:String})],Ml.prototype,"_monthPlus",void 0),t([r({type:Number})],Ml.prototype,"_yearPlus",void 0),t([r()],Ml.prototype,"year",void 0),t([r({type:String})],Ml.prototype,"hoveredDate",void 0),t([r({type:Boolean})],Ml.prototype,"enableYearChange",void 0),t([r({type:Boolean})],Ml.prototype,"enableMonthChange",void 0),t([r({type:String})],Ml.prototype,"type",void 0),t([r({type:String})],Ml.prototype,"dateTo",void 0),t([r({type:String})],Ml.prototype,"dateFrom",void 0),window.customElements.define("seb-datepicker",Ml);class El extends i{constructor(){super(...arguments),this.schedule=null,this.times=[],this.selectedTime="",this.type="seb",this.label="",this.__handleSelectTime=e=>t=>{t.preventDefault(),this.selectedTime=e.schedulerId,this.dispatchEvent(new CustomEvent("seb-crm-schedule-id",{detail:{value:e}}))}}__getMonths(){var e;return this.schedule&&(null===(e=this.schedule.data)||void 0===e?void 0:e.months)?Object.keys(this.schedule.data.months):[]}__getYears(){var e,t;if(this.schedule&&(null===(e=this.schedule.data)||void 0===e?void 0:e.months)){const e=Object.keys(this.schedule.data.months);if(e.length>0){const i=this.schedule.data.months[e[0]],n=this.schedule.data.months[e[e.length-1]],o=null===(t=i.days[0].times[0].name.split(/\d{1,2}\/\d{1,2}\//)[1])||void 0===t?void 0:t.split(" ")[0],r=n.days[n.days.length-1].times[n.days[n.days.length-1].times.length-1].name.split(/\d{1,2}\/\d{1,2}\//)[1].split(" ")[0],a=parseInt(r,10)-parseInt(o,10);return Array.from(Array(a?a+1:1),((e,t)=>t+parseInt(o,10)))}return[]}return[]}__getDays(){var e;if(this.schedule&&(null===(e=this.schedule.data)||void 0===e?void 0:e.months)){const e=Object.keys(this.schedule.data.months),t=[];if(e.length>0){for(const i of e){const e=this.schedule.data.months[i];e.days.forEach((i=>{t.push(`${parseInt(i.day,10)}/${e.month}`)}))}return t}}return[]}__dateFromChanged({detail:e}){const t=Zs(e.value,"t",new Date),i=function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");return ua(e).getDate()}(t).toString(),n=(1+t.getMonth()).toString().padStart(2,"0");this.__getTimes(n,i.padStart(2,"0"))}__getTimes(e,t){var i;if(this.schedule&&(null===(i=this.schedule.data)||void 0===i?void 0:i.months)){const i=this.schedule.data.months[e].days.find((e=>e.day===t));if(i)return this.times=i.times,void(this.selectedTime="")}this.selectedTime="",this.times=[]}render(){return o`
      <div class="container ${this.type}">
        ${this.label&&""!==this.label&&o`
            <label class="date-label">
              ${this.label}
            </label>
          `}
        ${"seb"===this.type?o`
              <seb-datepicker
                .months="${this.__getMonths()}"
                .years="${this.__getYears()}"
                .days="${this.__getDays()}"
                .type="${this.type}"
                @date-from-changed="${this.__dateFromChanged}"
              >
              </seb-datepicker>
              ${this.times.length>0?o`
                    <div class="question">Qual o Horário?</div>
                    <ul role="listbox" class="times-container seb">
                      ${this.times.map((e=>o`
                          <li
                            class="time ${this.selectedTime===e.schedulerId?"selected":""}"
                            role="option"
                            @click="${this.__handleSelectTime(e)}"
                            @keydown="${this.__handleSelectTime(e)}"
                            aria-selected="${this.selectedTime===e.schedulerId?"true":"false"}"
                          >
                            ${e.time}
                          </li>
                        `))}
                    </ul>
                  `:o``}
            `:o`
              <seb-datepicker
                .months="${this.__getMonths()}"
                .years="${this.__getYears()}"
                .days="${this.__getDays()}"
                .type="${this.type}"
                @date-from-changed="${this.__dateFromChanged}"
              >
              </seb-datepicker>
              ${this.times.length>0?o`
                    <div role="listbox" class="times-container">
                      ${this.times.map((e=>o`
                          <div
                            class="time ${this.selectedTime===e.schedulerId?"selected":""}"
                            role="option"
                            @click="${this.__handleSelectTime(e)}"
                            @keydown="${this.__handleSelectTime(e)}"
                            aria-selected="${this.selectedTime===e.schedulerId?"true":"false"}"
                          >
                            ${e.time}
                          </div>
                        `))}
                    </div>
                  `:o``}
            `}
      </div>
    `}}El.styles=n`
    :host {
      font-family: Roboto, sans-serif;
      display: block;
      color: var(--seb-text-color, #111927);
    }

    :host .container {
    }

    :host .container.seb {
      flex-direction: column;
      align-items: flex-start;
    }

    :host .container.seb div {
      margin-left: 8px;
      padding: 4px;
    }

    :host .container.seb .question,
    :host .container .date-label {
      font-size: 1rem;
      font-weight: 600;
      line-height: 26px;
      width: 100%;
      margin: 30px 0 20px;
      color: var(--lit-datepicker-background, white);
    }

    :host .container .times-container {
      list-style: none;
      overflow-y: auto;
      width: 100%;
      background: var(--lit-datepicker-background, white);
      display: flex;
      flex-wrap: wrap;
      padding-top: 20px;
    }

    :host .container .times-container.seb {
      list-style: none;
      max-height: none;
      overflow-y: unset;
      margin: unset;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      background: unset;
      border-radius: unset;
      border-style: unset;
      border-width: unset;
      border-color: unset;

      margin: 0;
      padding: 0;
    }

    :host .container .times-container .time {
      border-radius: 20px;
      border: 1px solid rgb(231, 231, 231);
      padding: 10px 0;
      cursor: pointer;
      display: grid;
      place-items: center;
      margin: 5px 7px;
      flex: 1 1 30%;
      max-width: 29%;
    }

    :host .container .times-container.seb .time {
      display: block;
      max-width: 40%;
      width: 100%;
      cursor: pointer;
      position: relative;
      margin: 0 10px 10px 0;
      border-radius: 20px;
      border: 1px solid var(--lit-datepicker-cell-selected, rgb(0, 150, 136)) !important;
      color: var(--lit-datepicker-cell-selected, rgb(0, 150, 136)) !important;
      padding: 10px 20px;
      font-size: 18px;
      font-weight: 600;
      font-family: 'gentona', sans-serif;
      line-height: 28px;
      text-align: center;
      transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out;
    }

    :host .container .times-container .time:hover {
      background: var(--lit-datepicker-cell-hover, #e4e7e7);
    }

    :host .container .times-container.seb .time:hover {
      background: unset;
    }

    :host .container .times-container .time.selected {
      background: var(
        --lit-datepicker-cell-selected,
        rgb(0, 150, 136)
      ) !important;
      color: var(--lit-datepicker-cell-selected-text, white) !important;
    }

    @media (max-width: 600px) {
      :host .container .times-container.seb .time {
        max-width: none;
        margin: 0 0 10px;
      }
    }
  `,t([r({type:Object,converter:e=>JSON.parse(null!=e?e:"{}")})],El.prototype,"schedule",void 0),t([r({type:Object})],El.prototype,"times",void 0),t([r({type:String})],El.prototype,"selectedTime",void 0),t([r({type:String})],El.prototype,"type",void 0),t([r({type:String})],El.prototype,"label",void 0),window.customElements.define("seb-crm-schedule-datepicker",El);class kl extends i{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.button=!1,this.required=!1,this.firstSubmit=!1,this.name="",this.value="",this.searchValue="",this.label="Label"}connectedCallback(){super.connectedCallback(),window.addEventListener("seb-button-submit",(e=>this.firstSubmit=!0))}disconnectedCallback(){window.removeEventListener("csat.submit",(()=>{this.firstSubmit=!1})),super.disconnectedCallback()}__handleClick(){this.checked=!this.checked}__handleFocus(){var e,t;null===(t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("span"))||void 0===t||t.classList.add("focus")}__handleBlur(e){var t,i;const n=e.target;("cf_ptr_telefonecelular"===n.name&&this.value.startsWith("+55")&&this.value.length<19||"cf_ptr_telefonealuno"===n.name&&this.value.startsWith("+55")&&this.value.length<19)&&(n.value=""),("cf_ptr_datadenascimentoaluno"===n.name&&this.value.length<10||"cf_ptr_nascimentoresponsavel"===n.name&&this.value.length<10)&&(n.value=""),null===(i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("span"))||void 0===i||i.classList.remove("focus"),this.__handleInput(e),this.dispatchEvent(new InputEvent("input"))}__handleKeydown(e){"Backspace"===e.key&&this.__handleInput(e)}__handleInput(e){if(this.button)return this.value="",void(e.target.value="");const t=e.target;"cf_ptr_horaagenda"!==this.name&&"cf_ptr_dataagenda"!==this.name?("cf_ptr_telefonecelular"===this.name||"cf_ptr_telefonealuno"===this.name)&&t.value.startsWith("+55")&&(e instanceof KeyboardEvent&&"Backspace"===e.key&&(e.preventDefault(),t.value.length>4&&(t.value=t.value.slice(0,-1))),t.value.length>=15&&t.value.length>19)?t.value=t.value.slice(0,19):this.value=t.value:t.value=this.value}render(){var e;return o`
      <label>
        <span class=${(null===(e=null==this?void 0:this.value)||void 0===e?void 0:e.length)?"with-content":""}>
          ${this.label}
        </span>
        <input
          role="presentation"
          autocomplete="off"
          type="text"
          name=${this.name||""}
          .value=${""!==this.searchValue?this.searchValue:this.value||""}
          @click=${this.__handleClick}
          @focus=${this.__handleFocus}
          @blur=${this.__handleBlur}
          @input=${this.__handleInput}
          @keydown=${this.__handleKeydown}
          ?required=${this.required&&this.firstSubmit}
          ?disabled=${this.disabled}
        />
        <slot></slot>
      </label>
    `}}kl.shadowRootOptions={...i.shadowRootOptions,delegatesFocus:!0},kl.styles=n`
    :host {
      display: block;
      color: var(--seb-text-color, #111927);
      width: 100%;
    }

    :host:focus,
    :host label:focus {
      outline: none;
    }

    :host label {
      position: relative;
      height: 55px;
      width: 100%;
      font-size: 16px;
      box-sizing: border-box;
      transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }

    :host label span {
      position: absolute;
      top: -10px;
      left: 20px;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      color-scheme: light;
      --Grid-columns: 12;
      --Grid-columnSpacing: 32px;
      --Grid-rowSpacing: 32px;
      box-sizing: border-box;
      color: #7B8088;
      line-height: 1.4375em;
      padding: 0;
      font-family: var(--seb-textfield-span-font);
      font-size: 1rem;
      font-weight: var(--seb-textfield-font-weight, 500);
      display: block;
      transform-origin: top left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: calc(100% - 24px);
      transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      z-index: 1;
      pointer-events: none;
    }

    :host label span.focus,
    :host label span.with-content {
      top: -18px;
      transform: scale(0.75);
    }

    :host label input {
      background: white;
      font: inherit;
      letter-spacing: inherit;
      height: 55px;
      margin: 0;
      -webkit-tap-highlight-color: transparent;
      min-width: 0;
      padding: 25px 19px 8px;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      color-scheme: light;
      --Grid-columns: 12;
      --Grid-columnSpacing: 32px;
      --Grid-rowSpacing: 32px;
      font-size: 16px;
      font-weight: 400;
      font-family: var(--seb-textfield-input-font);
      line-height: 1.4375em;
      color: #111927;
      box-sizing: border-box;
      cursor: text;
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      width: 100%;
      position: relative;
      border-radius: var(--seb-border-radius, 8px);
      border-style: solid;
      border-width: 1px;
      overflow: hidden;
      transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      border-color: #e5e7eb;
    }

    :host label input:disabled {
      background: #e9eaea;
      color: #555964;
      cursor: not-allowed;
    }

    :host([button='true']) label input {
      cursor: pointer;
      caret-color: transparent;
    }

    :host label input:focus {
      outline: none;
      border: 2px solid var(--seb-primary-color, #ff0000);
    }
  `,t([r({type:Boolean})],kl.prototype,"checked",void 0),t([r({type:Boolean})],kl.prototype,"disabled",void 0),t([r({type:Boolean})],kl.prototype,"button",void 0),t([r({type:Boolean})],kl.prototype,"required",void 0),t([r({type:Boolean})],kl.prototype,"firstSubmit",void 0),t([r({type:String})],kl.prototype,"name",void 0),t([r({type:String})],kl.prototype,"value",void 0),t([r({type:String})],kl.prototype,"searchValue",void 0),t([r({type:String})],kl.prototype,"label",void 0),window.customElements.define("seb-textfield",kl);class Tl extends i{constructor(){super(...arguments),this.redirectLink=null,this.message=null,this.redirectMessage="Agendar visita"}render(){return o`
      <div>
        <p class="seb-redirect-message">${this.message}</p>
        ${this.redirectLink?o`
              <button
                @on-click
                @click=${this.__handleRedirect}
                class="seb-redirect-button"
              >
                ${this.redirectMessage}
              </button>
            `:null}
      </div>
    `}__handleRedirect(){this.redirectLink&&(window.location.href=this.redirectLink)}}function Al(e=""){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}Tl.styles=n`
    @import url('https://fonts.googleapis.com/css2?family=Gentona:wght@400;600&display=swap');

    .seb-redirect-button {
      position: relative;
      cursor: pointer;
      border-radius: 8px;
      padding: 15px 30px 15px 35px;
      max-width: 100%;
      font-size: 15px;
      font-weight: var(--redirect-button-font-weight, 600);
      letter-spacing: 0.1em;
      line-height: 25px;
      text-align: center;
      background-color: var(--redirect-button-bg-color, #409bb8);
      display: block;
      color: var(--redirect-button-color, white);
      width: -webkit-max-content;
      width: -moz-max-content;
      width: max-content;
      text-decoration: none;
      border: none;
      transition: all 0.25s ease-in-out;
    }

    .seb-redirect-button:after {
      display: var(--redirect-button-after-display);
      position: absolute;
      width: 18px;
      height: 100%;
      top: 0;
      right: -13px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAB4CAYAAACeuYApAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAotJREFUeNrs3M1twkAQBWAzSgGU4BIowblxCyXAgXOgArIVQM45xCXALbdsCSmBEugg2UWCiB/D/szMPkUZyZcIW5+e1vaLZLvXvH18V7+zdtvGTodtVXh6Z7DDbN02cUBbCkYdf6/d9unQYzTYYd5L4SjgNx43QIT5WaLCGpdagwjzs0CFNZonAkX+foEKq7VSo4R9Fqgwn9oMEbZPzeH6iDCPmiHC/DxLppYDE02NMvcXSy0X1pe6wRPDMcYutRoRJnLR5YKxp0aMx1qiwkacZZKYl8YCFcZWwblhbKlJwHxqI0QYyxkqBcuu4FKw7LUmCctKTRK2X2uptUgallwmpWHJZVIDlpSaBiwpNS1YdAXXgkWXSU1Y1EVXGxacmjYs+AZfAhZUwUvAgtZaKdjdCl4Kdje1krCbFbwk7OYZWhrWWSZLwzrXGgLsamoIsH1q57UIBVafl0kU2EWZRIKdVHAk2ElqaLBjamgwP0+osAEqrPqH/RXYFypsgwjbuW2FCHu10+EODXZMCw12TAsJtnWoF8TLhUG8jm2vPUVKiGkhwGzXM7eEmFZpmL31ADAhplUStr73uHQp2Byxj7UurS0izCA22FVIWtqwXWha2rCTWoMCOymBSLCotLRgFyUQBWZSdiKFtFpEmEndURJmc168IsS0JGE29y0wQkxLCrbmeGdOAjbnOAg3rA2tNdoww3UgTpjhSosTFl1rtGDRtUYDxp4WF8xwp8UB87WGPS0OmKmEhjLTahFh80pwUmG+1qwRYaYSHkpMyyLCxNNKgbVaH04gxLRiYS1nreGEqaUVAzOaaYXCRGoNB2wiUWtyYRPpW08szK+nx5Jfo3k4/y+6Avk8zo8AAwCbfMlf9vpM8gAAAABJRU5ErkJggg==)
        no-repeat center;
      background-size: auto 100%;
      content: '';
    }

    .seb-redirect-button:before {
      display: var(--redirect-button-before-display);
      position: absolute;
      width: 37px;
      height: 100%;
      top: 0;
      right: -34px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAB4CAYAAAAOhjujAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABJBJREFUeNrsnb1Ok1Ech9+WtmIpUEJEEhYYqAMMMrk4dHbCKwCvQLgC6BUAVwDcAbNTV11gkEEcYCExGmL5RkD0PaAn1gQ//+fjPed5km7kJA1PHg9vf6a5Jy82viTgnGqpmAx0lpJabznpKnRIHLmRvprpa2lqdHDH1fvKIZh/jPdVkrFqRfLIRirZPIKBRtXs8f2+pJjPSR2pavY0Fa1l833k+VX6yfuz8+Tlh33JI+vpa9n2+0Awj9k9OUu2j04lj5xcfftuGsFAs753mFxcid5iFlLJqggG11xcXSVbB8eif7CmrxkEA82b/RPpij23VTEEo2IIBjcVO778LF2xYQQDXbHNj0fSFZtDMNCoRxbCFZs2XTEEyxjCFUtMVwzBMlix1vmldMUeIhho1vcOpI9cQDDQqM8p1UuQelqxOoJB5u5iCEbFjFYMwTLMK9k5j2IZwUCjnokJz3mGpec8CMZdzOhdDMECqNjWwYl0xWYQDDSv04oJz3nmpOY8CBYAPs95ECwQfB0lIhgVM1oxBAvsLiY855n73zkPggWGb48tECwwfBslIhgVM1oxBAu0YsIfhE//6wfhCEbFjFYMwQLFlzkPglExoxVDsMArtnvySbpikwgGGtf/QQTBAsf1KBHBuIsZvYshWCQVczVKRLBIcDVKRLBIcDXnQbCIcDFKRDAqZrRiCBbhXczmKBHBIsTmYwsEixCbo0QEo2JGK4ZgEVfMxigRwaiY0YohWMTYGCUiGBUzWjEEo2LSc576j3MeBAOjFUMwMDpKRDAwWjEEA12xzZaoZKpi8wgGmu3DU+kjpxAM2iom/D1IwwgGbQg/eOUOBu2oUSKCQWZAMGijmM8jGJhjoLOEYGCGrkJHUi0VJI/cQTDQjHTflT5yFcFA12usWhGt19ToIE/y4Yaxvor0kQ3uYKDrNVIR/edR1WsFwcBovRAMrh9LCNer+b1eCAZG64Vg1Ev6waqqVxPBwEq9ECxi1L1LuF4rP9cLwaiX0XohWMT1Us++hOu1g2BgtV4IFiHjqVzC9WrcVi8Eiww1Jqz1dEke2Upfi7/6AQSLiAe95VSynOSRS2m9WggGTuqFYJHdvYTr1fhdvRAsEtSlvtZTljxSzXEW/+QHESwCbD6WQLAI62VqTIhgkEz090gfOfs3P4xgAaM+zB4q35E8Us1x1hAMnN+9ECyCepkeEyIY9XJaLwQLFFtjQgSjXk7rhWCB1svWmBDBqJfTeiFYYNgeEyJYRLia4yBYJLgYEyIY9XJaLwQL6O7lYkyIYBHgckyIYBHg22MJBAusXi7HhAgWOK7HhAgWMD6MCRGMu5ezuxeCZbxePowJEYy7l7O7F4JlFPVXo/D3Cak5zgaCQabuXgiW0Xr5NCZEsIBQH2gL16tlul4IliHUHEe4Xkum64VgGaqXr3McBAukXj6OCRGMejmtF4JlgIn+bul6zdqqF4J5zlC5U3qOsyY9x0GwjKI+a3x0r1fyyGb6emb7fRT4VfqH2tgLf0G72tjPu3gvCOYJ1VLxulo1ueddG9+qZeV51218FWAAdBLiW4/5dM4AAAAASUVORK5CYII=)
        no-repeat right center;
      background-size: auto 100%;
      content: '';
    }

    .seb-redirect-message {
      font-size: 18px;
      max-width: 500px;
      line-heiight: 1.35;
      color: var(--redirect-message-color, 'inherit');
      margin-top: 30px;
      font-family: 'Gentona', sans-serif;
    }
  `,t([r({type:String})],Tl.prototype,"redirectLink",void 0),t([r({type:String})],Tl.prototype,"message",void 0),t([r({type:String})],Tl.prototype,"redirectMessage",void 0),window.customElements.define("seb-message",Tl);class Ll extends i{constructor(){super(),this.checked=!1,this.select=!1,this.required=!1,this.disabled=!1,this.name="",this.value="",this.searchParam="",this.originalSearchParam="",this.redirectMessage="O agendamento de visitas desta unidade é realizado pelo site da própria unidade. Clique no botão abaixo para prosseguir.",this.label="Label",this.noResultsText="No results",this.options=[],this.redirectTo=[],this.scroolPosition=0,this.addEventListener("focusout",this.__handleFocusOut.bind(this)),this.addEventListener("blur",this.__handleBlur)}__handleFocus(e){var t,i,n,o,r,a;e.target instanceof HTMLOptionElement||(this.originalSearchParam=this.searchParam,this.searchParam="",null===(i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".datalist"))||void 0===i||i.classList.add("show"),null===(o=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelector("svg.arrow"))||void 0===o||o.classList.add("rotate"),this.selectElement&&(this.selectElement.focus(),null===(a=null===(r=this.shadowRoot)||void 0===r?void 0:r.querySelector(".datalist"))||void 0===a||a.classList.add("ios")))}__handleBlur(){var e,t,i,n;null===(t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".datalist"))||void 0===t||t.classList.remove("show"),null===(n=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector("svg.arrow"))||void 0===n||n.classList.remove("rotate")}__handleFocusOut(e){var t,i,n,o;e.target instanceof HTMLOptionElement||(null===(i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".datalist"))||void 0===i||i.classList.remove("show"),null===(o=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelector("svg.arrow"))||void 0===o||o.classList.remove("rotate"),this.value&&(this.searchParam=this.__getSelectedOptionText(this.value)))}__getSelectedOptionText(e){var t,i,n,o;return null!==(o=null!==(i=null===(t=this.__filteredOptions().find((t=>t.value===e)))||void 0===t?void 0:t.text)&&void 0!==i?i:null===(n=this.__filteredOptions().find((t=>t.text===e)))||void 0===n?void 0:n.text)&&void 0!==o?o:""}__handleOptionClick(e){const t=e.target;this.value=t.dataset.value,this.__handleBlur(),this.dispatchEvent(new CustomEvent("input",{detail:this.value||t.value}))}__handleTouchStart(e){const t=e.target;this.scroolPosition=t.offsetTop}__handleTouchEnd(e){const t=e.target;this.scroolPosition===t.offsetTop&&this.__handleSelectClick(e)}__handleSelectClick(e){var t;e.preventDefault(),e.stopPropagation();const i=e.target;if(i&&(null===(t=i.dataset)||void 0===t?void 0:t.value)){const e=this.__filteredOptions().find((e=>e.value===i.dataset.value));this.searchParam=e.text,this.value=e.value,this.__handleBlur(),this.dispatchEvent(new CustomEvent("select",{detail:{value:e.value,text:e.text}})),this.dispatchEvent(new CustomEvent("input",{detail:e.value||e.text}))}}__filteredOptions(){const e=JSON.parse(JSON.stringify(this.options||[]));return this.searchParam?e.filter((e=>{return t=e.text,i=this.searchParam,Al(t).includes(Al(i));var t,i})):e}__handleInput(e){const t=e.target;this.searchParam=t.value}__handleEnterKey(e){if("Enter"===e.key){const e=this.__filteredOptions().find((e=>e.text===this.searchParam))||!(this.__filteredOptions().filter((e=>e.text.includes(this.searchParam))).length>1)&&this.__filteredOptions().filter((e=>e.text.includes(this.searchParam)))[0];if(!e)return this.value="";this.searchParam=e.text,this.value=e.value,this.__handleBlur()}}_handleClear(){this.searchParam="",this.dispatchEvent(new CustomEvent("select",{detail:""}))}static __getOS(){var e,t;const{userAgent:i}=window.navigator,n=(null===(t=null===(e=window.navigator)||void 0===e?void 0:e.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform;let o=null;return-1!==["macOS","Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(n)?o="Mac OS":-1!==["iPhone","iPad","iPod"].indexOf(n)?o="iOS":-1!==["Win32","Win64","Windows","WinCE"].indexOf(n)?o="Windows":/Android/.test(i)?o="Android":/Linux/.test(n)&&(o="Linux"),o}render(){var e;const t=this.__filteredOptions()||[],i=0===t.length?o`<button class="option" value="">${this.noResultsText}</option>`:t.map((e=>o`
                <span
                  role="option"
                  tabindex="0"
                  class="option"
                  data-value=${e.value}
                  @click=${this.__handleSelectClick}
                >
                  ${e.text}
                </span>
              `));return o`
      <div>
        <div
          class="datalist"
        >
          ${i}
        </div>

        <seb-textfield
          .name=${this.name}
          .value=${this.searchParam}
          .label=${this.label}
          .disabled=${this.disabled}
          @keydown=${this.__handleEnterKey}
          @input=${this.__handleInput}
          @focus=${this.__handleFocus}
          @focusOut=${this.__handleFocusOut}
          ?required=${this.required}
        />

        ${(null===(e=null==this?void 0:this.searchParam)||void 0===e?void 0:e.length)>0?o`
            <svg
              role="button"
              class="close"
              width="24"
              height="24"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="CloseDropDownIcon"
              @click=${this._handleClear}
              @touchend=${this._handleClear}
            >
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              ></path>
            </svg>
          `:""}
            <svg
              class="arrow"
              width="24"
              height="24"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ArrowDropDownIcon"
            >
              <path d="M7 10l5 5 5-5z"></path>
            </svg>
          </div>
        `}}Ll.styles=n`
    :host {
      display: block;
      color: var(--seb-text-color, #111927);
    }

    :host div {
      position: relative;
    }

    :host div .datalist {
      display: block;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      opacity: 0;
      visibility: hidden;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
      box-sizing: border-box;
      list-style: none;
      margin: 0;
      padding: 8px 0;
      background-color: #fff;
      color: #111927;
      -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      border-radius: 8px;
      box-shadow: 0 6px 30px rgba(0, 0, 0, 0.08);
      background-image: none;
      -webkit-overflow-scrolling: touch;
      overflow-y: auto;
      overflow-x: hidden;
      min-width: 16px;
      min-height: 38px;
      max-height: 600px;
      outline: 0;
      z-index: 10000;
    }

    :host div .datalist.show {
      opacity: 1;
      visibility: visible;
    }

    :host div .datalist .option {
      cursor: pointer;
      width: 100%;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      list-style: none;
      -webkit-tap-highlight-color: transparent;
      outline: 0;
      border: 0;
      margin: 0;
      border-radius: 0;
      user-select: none;
      vertical-align: middle;
      -webkit-appearance: none;
      color: inherit;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
      display: flex;
      -webkit-box-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      align-items: center;
      position: relative;
      text-decoration: none;
      box-sizing: border-box;
      padding: 6px 16px;
      min-height: auto;
      background-color: transparent;
      text-align: start;
    }

    :host div .datalist .option:hover,
    :host div .datalist .option:focus {
      background-color: rgba(99, 102, 241, 0.08);
    }

    :host div svg.arrow,
    :host div svg.close {
      position: absolute;
      top: -12px;
      right: 16px;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      color-scheme: light;
      --Grid-columns: 12;
      --Grid-columnSpacing: 32px;
      --Grid-rowSpacing: 32px;
      -webkit-tap-highlight-color: transparent;
      cursor: pointer;
      text-align: center;
      color: #6C737F;
      box-sizing: border-box;
      user-select: none;
      width: 1em;
      height: 1em;
      display: inline-block;
      fill: currentColor;
      flex-shrink: 0;
      transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      font-size: 1.5rem;
    }

    :host div svg.close {
      right: 48px;
      opacity: 0;
      visibility: hidden;
    }

    :host div:hover svg.close {
      right: 48px;
      opacity: 1;
      visibility: visible;
    }

    :host([select='true']) div svg.close {
      right: 48px;
      opacity: 0;
      visibility: hidden;
    }

    :host div svg.arrow.rotate {
      transform: rotate(180deg);
    }

    .proceed-button {
      padding: 10px 20px;
      background-color: #5bc2db;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      display: block;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }

    .proceed-button:hover {
      background-color: #4aa9c8;
    }

    .proceed-button:before {
      position: absolute;
      width: 37px;
      height: 100%;
      top: 0;
      right: -34px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAB4CAYAAAAOhjujAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABJBJREFUeNrsnb1Ok1Ech9+WtmIpUEJEEhYYqAMMMrk4dHbCKwCvQLgC6BUAVwDcAbNTV11gkEEcYCExGmL5RkD0PaAn1gQ//+fjPed5km7kJA1PHg9vf6a5Jy82viTgnGqpmAx0lpJabznpKnRIHLmRvprpa2lqdHDH1fvKIZh/jPdVkrFqRfLIRirZPIKBRtXs8f2+pJjPSR2pavY0Fa1l833k+VX6yfuz8+Tlh33JI+vpa9n2+0Awj9k9OUu2j04lj5xcfftuGsFAs753mFxcid5iFlLJqggG11xcXSVbB8eif7CmrxkEA82b/RPpij23VTEEo2IIBjcVO778LF2xYQQDXbHNj0fSFZtDMNCoRxbCFZs2XTEEyxjCFUtMVwzBMlix1vmldMUeIhho1vcOpI9cQDDQqM8p1UuQelqxOoJB5u5iCEbFjFYMwTLMK9k5j2IZwUCjnokJz3mGpec8CMZdzOhdDMECqNjWwYl0xWYQDDSv04oJz3nmpOY8CBYAPs95ECwQfB0lIhgVM1oxBAvsLiY855n73zkPggWGb48tECwwfBslIhgVM1oxBAu0YsIfhE//6wfhCEbFjFYMwQLFlzkPglExoxVDsMArtnvySbpikwgGGtf/QQTBAsf1KBHBuIsZvYshWCQVczVKRLBIcDVKRLBIcDXnQbCIcDFKRDAqZrRiCBbhXczmKBHBIsTmYwsEixCbo0QEo2JGK4ZgEVfMxigRwaiY0YohWMTYGCUiGBUzWjEEo2LSc576j3MeBAOjFUMwMDpKRDAwWjEEA12xzZaoZKpi8wgGmu3DU+kjpxAM2iom/D1IwwgGbQg/eOUOBu2oUSKCQWZAMGijmM8jGJhjoLOEYGCGrkJHUi0VJI/cQTDQjHTflT5yFcFA12usWhGt19ToIE/y4Yaxvor0kQ3uYKDrNVIR/edR1WsFwcBovRAMrh9LCNer+b1eCAZG64Vg1Ev6waqqVxPBwEq9ECxi1L1LuF4rP9cLwaiX0XohWMT1Us++hOu1g2BgtV4IFiHjqVzC9WrcVi8Eiww1Jqz1dEke2Upfi7/6AQSLiAe95VSynOSRS2m9WggGTuqFYJHdvYTr1fhdvRAsEtSlvtZTljxSzXEW/+QHESwCbD6WQLAI62VqTIhgkEz090gfOfs3P4xgAaM+zB4q35E8Us1x1hAMnN+9ECyCepkeEyIY9XJaLwQLFFtjQgSjXk7rhWCB1svWmBDBqJfTeiFYYNgeEyJYRLia4yBYJLgYEyIY9XJaLwQL6O7lYkyIYBHgckyIYBHg22MJBAusXi7HhAgWOK7HhAgWMD6MCRGMu5ezuxeCZbxePowJEYy7l7O7F4JlFPVXo/D3Cak5zgaCQabuXgiW0Xr5NCZEsIBQH2gL16tlul4IliHUHEe4Xkum64VgGaqXr3McBAukXj6OCRGMejmtF4JlgIn+bul6zdqqF4J5zlC5U3qOsyY9x0GwjKI+a3x0r1fyyGb6emb7fRT4VfqH2tgLf0G72tjPu3gvCOYJ1VLxulo1ueddG9+qZeV51218FWAAdBLiW4/5dM4AAAAASUVORK5CYII=)
      no-repeat right center;
      background-size: auto 100%;
      content: '';
    }

    .proceed-button:after {
      position: absolute;
      width: 18px;
      height: 100%;
      top: 0;
      right: -13px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAB4CAYAAACeuYApAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAotJREFUeNrs3M1twkAQBWAzSgGU4BIowblxCyXAgXOgArIVQM45xCXALbdsCSmBEugg2UWCiB/D/szMPkUZyZcIW5+e1vaLZLvXvH18V7+zdtvGTodtVXh6Z7DDbN02cUBbCkYdf6/d9unQYzTYYd5L4SjgNx43QIT5WaLCGpdagwjzs0CFNZonAkX+foEKq7VSo4R9Fqgwn9oMEbZPzeH6iDCPmiHC/DxLppYDE02NMvcXSy0X1pe6wRPDMcYutRoRJnLR5YKxp0aMx1qiwkacZZKYl8YCFcZWwblhbKlJwHxqI0QYyxkqBcuu4FKw7LUmCctKTRK2X2uptUgallwmpWHJZVIDlpSaBiwpNS1YdAXXgkWXSU1Y1EVXGxacmjYs+AZfAhZUwUvAgtZaKdjdCl4Kdje1krCbFbwk7OYZWhrWWSZLwzrXGgLsamoIsH1q57UIBVafl0kU2EWZRIKdVHAk2ElqaLBjamgwP0+osAEqrPqH/RXYFypsgwjbuW2FCHu10+EODXZMCw12TAsJtnWoF8TLhUG8jm2vPUVKiGkhwGzXM7eEmFZpmL31ADAhplUStr73uHQp2Byxj7UurS0izCA22FVIWtqwXWha2rCTWoMCOymBSLCotLRgFyUQBWZSdiKFtFpEmEndURJmc168IsS0JGE29y0wQkxLCrbmeGdOAjbnOAg3rA2tNdoww3UgTpjhSosTFl1rtGDRtUYDxp4WF8xwp8UB87WGPS0OmKmEhjLTahFh80pwUmG+1qwRYaYSHkpMyyLCxNNKgbVaH04gxLRiYS1nreGEqaUVAzOaaYXCRGoNB2wiUWtyYRPpW08szK+nx5Jfo3k4/y+6Avk8zo8AAwCbfMlf9vpM8gAAAABJRU5ErkJggg==)
      no-repeat center;
      background-size: auto 100%;
      content: '';
    }
  `,t([r({type:Boolean})],Ll.prototype,"checked",void 0),t([r({type:Boolean})],Ll.prototype,"select",void 0),t([r({type:Boolean})],Ll.prototype,"required",void 0),t([r({type:Boolean})],Ll.prototype,"disabled",void 0),t([r({type:String})],Ll.prototype,"name",void 0),t([r({type:String})],Ll.prototype,"value",void 0),t([r({type:String})],Ll.prototype,"searchParam",void 0),t([r({type:String})],Ll.prototype,"originalSearchParam",void 0),t([r({type:String})],Ll.prototype,"redirectMessage",void 0),t([r({type:String})],Ll.prototype,"label",void 0),t([r({type:String})],Ll.prototype,"noResultsText",void 0),t([r({type:Array})],Ll.prototype,"options",void 0),t([r({type:Object,converter:e=>JSON.parse(null!=e?e:"[]")})],Ll.prototype,"redirectTo",void 0),t([a(".select")],Ll.prototype,"selectElement",void 0),t([s()],Ll.prototype,"scroolPosition",void 0),window.customElements.define("seb-autocomplete",Ll);class Pl extends i{constructor(){super(...arguments),this.type="button",this.disabled=!1}__click(e){"submit"===this.type?window.dispatchEvent(new CustomEvent("seb-button-submit",{detail:""})):this.click(e)}render(){return o`
      <button
        type="${this.type||"button"}"
        ?disabled="${this.disabled}"
        @click="${this.__click}"
      >
        <slot></slot>
      </button>
    `}}Pl.styles=n`
    :host {
      display: flex;
      color: var(--seb-text-color, #111927);
      margin: 0 auto;
    }

    :host button {
      margin: var(--seb-button-margin, 0 auto);
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      color-scheme: light;
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
      outline: 0;
      border: 0;
      cursor: pointer;
      user-select: none;
      vertical-align: middle;
      -webkit-appearance: none;
      text-decoration: none;
      font-weight: var(--seb-button-font-weight, 600);
      font-family: var(--seb-button-font);
      font-size: 1rem;
      line-height: 1.75;
      width: var(--seb-button-width);
      min-width: 64px;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      color: var(--seb-text-color, white);
      background-color: var(--seb-primary-color, #6366f1);
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.08);
      border-radius: var(--seb-button-border-radius, 30px);
      text-transform: var(--seb-button-text-transform, none);
      padding: var(--seb-button-padding, 8px 20px);
    }

    :host button:hover {
      filter: brightness(0.9);
    }

    :host button:active {
      filter: brightness(0.7);
    }

    :host button:disabled {
      filter: brightness(0.5) grayscale(1);
      cursor: not-allowed;
    }
  `,t([r({type:String})],Pl.prototype,"type",void 0),t([r({type:Boolean})],Pl.prototype,"disabled",void 0),t([r()],Pl.prototype,"click",void 0),window.customElements.define("seb-button",Pl),console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");class Hl extends i{constructor(){super(...arguments),this.checked=!1,this.options=[],this.name="",this.noResultsText="No results found",this.value="",this.stylized=!0,this.optionsLabels={}}__filteredOptions(){const e=JSON.parse(JSON.stringify(this.options||[]));return this.value,e}render(){const e=this.__filteredOptions()||[],t=0===e.length?o``:e.map((e=>o`
                <input
                  type="radio"
                  id=${e.value}
                  .value=${e.value}
                  @click=${this.handleClick}
                  name=${this.name}
                />
                <label
                  for=${e.value}
                  name=${this.name}
                  @click=${this.handleClick}
                  @keydown=${this.handleKeyDown}
                  >${e.text}</label
                >
              `));return o`
      <div role="radiogroup" value=${this.value} name=${this.name}>
        ${t}
      </div>
    `}handleKeyDown(e){"Enter"===e.key&&this.handleClick(e)}firstUpdated(){var e;this.addEventListener("click",this.handleClick),this.stylize_radio(),Hl.updateFieldLabels(this.value,this.optionsLabels);const t=null===(e=null==this?void 0:this.shadowRoot)||void 0===e?void 0:e.querySelectorAll('input[type="radio"]');t&&t.forEach((e=>{var t;if(e.value===this.value){e.setAttribute("checked","true");const i=null===(t=null==this?void 0:this.shadowRoot)||void 0===t?void 0:t.querySelector(`label[for="${e.id}"]`);if(i){i.classList.add("radio-checked");const e=i.querySelector(".radio-label-before"),t=i.querySelector(".radio-label-after");e&&(e.style.opacity="0"),t&&(t.style.opacity="1")}}}));document.querySelectorAll(`input[type="radio"][name="${this.name}"]`).forEach((e=>{e.value===this.value?e.setAttribute("checked","true"):e.removeAttribute("checked")})),Hl.hideElementsOnRadioChange(this.value)}stylize_radio(){const e=document.querySelector(`seb-radio-group[name="${this.name}"]`);if(e&&e.shadowRoot){if(!1===this.stylized)return;const t=e.shadowRoot.querySelectorAll('input[type="radio"]'),i=Array.from(e.shadowRoot.querySelectorAll("label"));t.forEach((e=>{const t=i.find((t=>t.htmlFor===e.id));e.style.position="absolute",e.style.left="-9999px";const n=e.checked,o=document.createElement("span");o.classList.add("radio-label-before"),o.style.content="",o.style.position="absolute",o.style.left="0",o.style.top="0",o.style.width="20px",o.style.height="20px",o.style.border="1px solid var(--seb-primary-color, #636464)",o.style.borderRadius="5px",o.style.opacity="1",o.style.background="#FFFFFF";const r=document.createElement("span");r.classList.add("radio-label-after"),r.style.content="",r.style.position="absolute",r.style.left="0",r.style.top="0",r.style.width="20px",r.style.height="20px",r.style.opacity="0",r.style.borderRadius="5px",r.style.background="var(--seb-primary-color, #49b9cf)",r.style.border="1px solid var(--seb-primary-color, #636464)",t&&(t.style.fontFamily="Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",t.style.position="relative",t.style.paddingLeft="28px",t.style.cursor="pointer",t.style.lineHeight="20px",t.style.marginRight="32px",t.style.marginBottom="10px",t.style.display="inline-block",t.style.color="var(--text-radio-color)",r.style.opacity=n?"1":"0",o.style.opacity=n?"0":"1",r.setAttribute("data-input-id",e.id),t.appendChild(o),t.appendChild(r))}))}}handleClick(e){var t;const i=e.target,n=e.target;if("SEB-RADIO"===i.tagName||"LABEL"===i.tagName||"INPUT"===i.tagName){const e=null===(t=null==this?void 0:this.shadowRoot)||void 0===t?void 0:t.querySelectorAll("input");if(e&&(e.forEach((e=>{var t,o;if(e){if(e.id===i.id||e.id===n.htmlFor){e.setAttribute("checked","true");const i=null===(t=null==this?void 0:this.shadowRoot)||void 0===t?void 0:t.querySelector(`label[for="${e.id}"]`);if(i){i.classList.add("radio-checked");const e=null==i?void 0:i.querySelector(".radio-label-before"),t=null==i?void 0:i.querySelector(".radio-label-after");e&&(e.style.opacity="0"),t&&(t.style.opacity="1")}}else{e.removeAttribute("checked");const t=null===(o=null==this?void 0:this.shadowRoot)||void 0===o?void 0:o.querySelector(`label[for="${e.id}"]`);if(t){t.classList.add("radio-checked");const e=null==t?void 0:t.querySelector(".radio-label-before"),i=null==t?void 0:t.querySelector(".radio-label-after");e&&(e.style.opacity="1"),i&&(i.style.opacity="0")}}Hl.updateFieldLabels(i.id,this.optionsLabels)}})),i.getAttribute("value"))){const e=i.getAttribute("value")||"";Hl.hideElementsOnRadioChange(e)}document.querySelectorAll(`input[type="radio"][name="${this.name}"]`).forEach((e=>{e.value===i.id||e.value===n.htmlFor?e.setAttribute("checked","true"):e.removeAttribute("checked")}))}}}Hl.styles=n`
    :host > div:first-child {
      display: flex;
    }
  `,Hl.hideElementsOnRadioChange=e=>{var t;const i=document.querySelector(".js-field-cf_ptr_nomedoaluno"),n=document.querySelector(".js-field-cf_ptr_telefonealuno"),o=document.querySelector(".js-field-cf_ptr_datadenascimentoaluno"),r=document.querySelector(".js-field-cf_ptr_nascimentoresponsavel"),a=null!==(t=document.querySelector(`label[for=${null==n?void 0:n.id}]`))&&void 0!==t?t:null;"956840001"===e?(i&&i.parentElement&&(i.parentElement.style.visibility="hidden",i.parentElement.style.height="0",i.parentElement.style.marginBottom="0",i.removeAttribute("required"),i.value=""),n&&n.parentElement&&(n.parentElement.style.visibility="hidden",n.parentElement.style.height="0",n.parentElement.style.marginBottom="0",n.removeAttribute("required"),n.value=""),o&&o.parentElement&&(o.parentElement.style.visibility="hidden",o.parentElement.style.height="0",o.parentElement.style.marginBottom="0",o.removeAttribute("required"),o.value="01/01/0001"),a&&a.parentElement&&(a.parentElement.style.visibility="hidden",a.parentElement.style.height="0",a.parentElement.style.marginBottom="0",a.removeAttribute("required")),r&&r.parentElement&&(r.parentElement.style.visibility="visible",r.parentElement.style.height="inherit",r.parentElement.style.marginBottom="revert-layer",r.setAttribute("required","required"),r.value="")):(i&&i.parentElement&&(i.parentElement.style.visibility="visible",i.parentElement.style.height="inherit",i.parentElement.style.marginBottom="revert-layer",i.setAttribute("required","required")),n&&n.parentElement&&(n.parentElement.style.visibility="visible",n.parentElement.style.height="inherit",n.parentElement.style.marginBottom="revert-layer",n.setAttribute("required","required")),o&&o.parentElement&&(o.parentElement.style.visibility="visible",o.parentElement.style.height="inherit",o.parentElement.style.marginBottom="revert-layer",o.setAttribute("required","required"),o.value=""),a&&a.parentElement&&(a.parentElement.style.visibility="visible",a.parentElement.style.height="inherit",a.parentElement.style.marginBottom="revert-layer",a.setAttribute("required","required")),r&&r.parentElement&&(r.parentElement.style.visibility="hidden",r.parentElement.style.height="0",r.parentElement.style.marginBottom="0",r.removeAttribute("required"),r.value="01/01/0001"))},Hl.updateFieldLabels=(e,t)=>{const i=t[e];i&&Object.keys(i).forEach((e=>{const t=document.querySelector(`label[for="${e}"]`),n=document.querySelector(`seb-textfield[name="${e}"]`),o=document.querySelector(`seb-autocomplete[name="${e}"]`);t&&(t.textContent=i[e]),n&&n.setAttribute("label",i[e]),o&&o.setAttribute("label",i[e])}))},t([r({type:Boolean})],Hl.prototype,"checked",void 0),t([r({type:Object,converter:e=>JSON.parse(null!=e?e:"[]")})],Hl.prototype,"options",void 0),t([r({type:String})],Hl.prototype,"name",void 0),t([r({type:String})],Hl.prototype,"noResultsText",void 0),t([r({type:String})],Hl.prototype,"value",void 0),t([r({type:Boolean})],Hl.prototype,"stylized",void 0),t([r({type:Object,converter:e=>JSON.parse(null!=e?e:"{}")})],Hl.prototype,"optionsLabels",void 0),window.customElements.define("seb-radio-group",Hl);class Ol extends i{constructor(){super(...arguments),this.primaryColor="#007bff"}render(){return o`
      <div
        style="--seb-primary-color: ${this.primaryColor}"
        class="loading-container"
      >
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    `}}function Il(e,t){t((t=>{const i=t.querySelector("input[name=cf_ptr_unidade]"),n=t.querySelector("input[name=cf_ptr_agenda]"),o=t.querySelector("input[name=cf_ptr_horaagenda]"),r=t.querySelector("input[name=cf_ptr_dataagenda]");let a;if(n&&i){n.value="";const s=l=>{(async function(e){return fetch(`https://${e.env?`${e.env}.`:""}rdstation.seb.com.br/api/crm/unit/${e.unitCrm}/schedule/available?code=${e.key}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()),alert)})({unitCrm:l,env:e.env,key:e.apiKey}).then((d=>{var h,c,p,u,m;null===(h=t.querySelector("seb-crm-schedule-datepicker"))||void 0===h||h.remove(),n.value="";const f=t.querySelector(`label[for="${n.id}"]`);f&&(f.style.display="none"),n.insertAdjacentHTML("afterend",`\n              <seb-crm-schedule-datepicker\n                type="${null!==(u=null===(p=null===(c=e.fields)||void 0===c?void 0:c.cf_ptr_agenda)||void 0===p?void 0:p.styledType)&&void 0!==u?u:""}"\n                style="--lit-datepicker-cell-selected: ${e.primaryColor}"\n                label="${null==f?void 0:f.textContent}"\n                schedule='${JSON.stringify(d)}'\n              />\n            `),n.style.display="none",n.style.opacity="0",n.style.width="0",n.style.height="0";const v=t.querySelector('seb-textfield[name="cf_ptr_horaagenda"]'),g=t.querySelector('seb-textfield[name="cf_ptr_dataagenda"]');g&&v&&(v.style.display="none",g.style.display="none"),null===(m=t.querySelector("seb-loading"))||void 0===m||m.remove();const y=t.querySelector("seb-crm-schedule-datepicker");y&&r&&y.addEventListener("seb-crm-schedule-id",(({detail:{value:{name:e}}})=>{const[t]=String(e).split(" ");r.value=t}));const _=async(i,n,d,h)=>{t.appendChild(document.createElement("seb-loading"));const c={env:e.env,unitCrm:n,scheduleUId:i,preAgendamentoId:d,code:e.apiKey};await async function(e){return fetch(`https://${e.env?`${e.env}.`:""}rdstation.seb.com.br/api/crm/unit/${e.unitCrm}/schedule/${e.scheduleUId}/userPreScheduling/${e.preAgendamentoId}/?code=${e.code}`,{method:"POST",headers:{"Content-Type":"application/json"}}).then((e=>{if(!e.ok)throw new Error("Erro ao realizar pré-agendamento");return e.json()}))}(c).then((e=>{var i,n,d;if(e.errors)alert("Ops! Esse horário já está ocupado. Que tal escolher outro?"),s(l),t.style.scrollMarginTop="200px",t.scrollIntoView({behavior:"smooth",block:"start"});else{a&&clearTimeout(a);const c=(null!==(n=null===(i=null==e?void 0:e.data)||void 0===i?void 0:i.expiresInMilliseconds)&&void 0!==n?n:36e4)+3e3;a=setTimeout((()=>{alert('Parece que o tempo para confirmar o horário expirou. Por favor, selecione o horário novamente."'),s(l),t.style.scrollMarginTop="200px",t.scrollIntoView({behavior:"smooth",block:"start"})}),c),o&&r&&(o.value=h,g&&v&&(v.value=o.value,v.style.display="",v.style.cursor="pointer",v.addEventListener("click",(()=>{t.appendChild(document.createElement("seb-loading")),s(l),t.style.scrollMarginTop="200px",t.scrollIntoView({behavior:"smooth",block:"start"})})),g.value=r.value,g.style.display="",g.style.cursor="pointer",g.addEventListener("click",(()=>{t.appendChild(document.createElement("seb-loading")),s(l),t.style.scrollMarginTop="200px",t.scrollIntoView({behavior:"smooth",block:"start"})})))),null===(d=t.querySelector("seb-crm-schedule-datepicker"))||void 0===d||d.remove(),t.style.scrollMarginTop="200px",t.scrollIntoView({behavior:"smooth",block:"start"})}})).finally((()=>{var e;null===(e=t.querySelector("seb-loading"))||void 0===e||e.remove()}))};if(y){const e=t.querySelector("input[name=cf_id_pre_agendamento]");y.addEventListener("seb-crm-schedule-id",(t=>{n.value=null==t?void 0:t.detail.value.schedulerId,i.value&&(null==e?void 0:e.value)&&_(t.detail.value.schedulerId,i.value,e.value,t.detail.value.time)}))}}))},l=e.fields?e.fields.cf_ptr_unidade:null;l&&l.value&&""!==l.value&&s(l.value),i.value&&s(i.value),t.style.scrollMarginTop="200px",t.scrollIntoView({behavior:"smooth",block:"start"}),i.addEventListener("change",(e=>{var t;s(null===(t=e.target)||void 0===t?void 0:t.value)}))}}))}function Vl(e,t,i,n){t((t=>{const o=t.querySelector("input[name=cf_ptr_evento]"),r=t.querySelector("input[name=cf_ptr_unidade]");if(o&&r){const a=t.querySelector(`label[for="${o.id}"]`);o.insertAdjacentHTML("afterend",`\n        <seb-autocomplete\n          id="select_field_event"\n          style="--seb-primary-color: ${e.primaryColor||"black"}"\n          class="field"\n          select="true"\n          name="${null==o?void 0:o.name}"\n          required="${o.required}"\n          label="${null==a?void 0:a.textContent}"\n          options='[]'\n          disabled="true"\n          noResultsText="Nenhum resultado encontrado"\n          value=""\n        />\n      `);const s=t.querySelector('seb-autocomplete[id="select_field_event"]');if(!s)return;const l=null==o?void 0:o.parentNode;l&&o&&l.insertBefore(o,s),o.style.opacity="0",o.style.width="0",o.style.height="0",o.style.position="absolute",o.style.top="50px",o.style.left="50%",a&&(a.style.height="0",a.style.width="0",a.style.display="none");const d=async(r,a)=>{var l;const d=t.querySelector('seb-autocomplete[id="select_field_event"]');if(d)if(""!==r&&""!==a){if(s){s.addEventListener("focus",(()=>{null==s||s.focus()})),s.addEventListener("input",(()=>{var e,t;if(s&&s.options){const i=null!==(t=null===(e=Array.from(s.options).find((e=>e.value===s.value)))||void 0===e?void 0:e.value)&&void 0!==t?t:"";o&&(o.value=i)}})),s.addEventListener("change",(()=>{o&&(o.value=s.value)})),d.disabled=!0,d.innerHTML="";const h=document.createElement("option");h.textContent="Aguarde",h.value="",d.appendChild(h),t.appendChild(document.createElement("seb-loading"));const c={unitCrm:r,schoolYear:a,env:e.env,key:e.apiKey};await async function(e){return fetch(`https://${e.env?`${e.env}.`:""}rdstation.seb.com.br/api/crm/unit/${e.unitCrm}/school-year/${e.schoolYear}/events/available?code=${e.key}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()),alert)}(c).then((t=>{var a,s,l,h,c,p,u;d.setAttribute("options","[]");const m=null===(s=null===(a=e.fields)||void 0===a?void 0:a.cf_ptr_evento)||void 0===s?void 0:s.filterTextByUnit,f=null===(l=(m?Object.keys(m).map((e=>({value:e,text:m[e]||""}))):[]).find((e=>e.value===r)))||void 0===l?void 0:l.text,v=null!=f?f:null===(c=null===(h=e.fields)||void 0===h?void 0:h.cf_ptr_evento)||void 0===c?void 0:c.filterText,g=void 0!==v&&""!==v?t.data.filter((e=>e.eventName.toLowerCase().includes(v.toLowerCase()))):t.data;if(0===g.length){const t=d.querySelector('option[value=""]');if(t){t.textContent="Não foram encontrados eventos";const n=null===(u=null===(p=null==e?void 0:e.fields)||void 0===p?void 0:p.cf_ptr_evento)||void 0===u?void 0:u.redirectNoEvents;i(n,"No momento, não temos concursos de bolsas em andamento. Acompanhe esta página para saber das próximas datas ou, se preferir, agende uma visita e venha conhecer nossa unidade.","cf_ptr_unidade")}}else g.forEach((e=>{const t=d.querySelector('option[value=""]');if(t){t.textContent="Selecione",t.value="";const i=Array.from(d.options).map((e=>({text:e.text,value:e.value})));i.push({text:e.eventName,value:e.eventId}),d.setAttribute("options",JSON.stringify(i)),d.disabled=!1,o.value="",d.value="",d._handleClear.call(d)}n()}))})),null===(l=t.querySelector("seb-loading"))||void 0===l||l.remove()}}else if(d){d.disabled=!0,d.innerHTML="";const e=document.createElement("option");e.textContent="Nenhuma unidade selecionada ou ano letivo informado",e.value="",d.appendChild(e)}};r&&r.addEventListener("change",(async i=>{var n,r,a,s,l,h,c,p,u;const m=null===(r=null===(n=e.fields)||void 0===n?void 0:n.cf_ptr_unidade)||void 0===r?void 0:r.redirectTo,f=i.target,v=m?Object.keys(m).map((e=>({value:e,text:m[e]||""}))):[],g=v.length>0&&(null===(a=v.find((e=>e.value===f.value)))||void 0===a?void 0:a.text),y=null===(l=null===(s=e.fields)||void 0===s?void 0:s.cf_ptr_ano)||void 0===l?void 0:l.value,_=null!==(u=null!==(c=null===(h=t.querySelector("input[name=cf_ptr_ano]"))||void 0===h?void 0:h.value)&&void 0!==c?c:null===(p=t.querySelector("seb-autocomplete[name=cf_ptr_ano]"))||void 0===p?void 0:p.value)&&void 0!==u?u:"";if(!_&&!y||!f.value||""===f.value||g)return;o&&(o.value="");const b=_&&""!==_?_:null!=y?y:"";d(f.value,b)}));const h=e.fields?e.fields.cf_ptr_unidade:null,c=e.fields?e.fields.cf_ptr_ano:null;h&&h.value&&""!==h.value&&c&&c.value&&""!==c.value&&d(h.value,c.value)}}))}function Nl(e,t){t((t=>{const i=document.querySelector("input[name=cf_ptr_cursodaunidade]"),n=document.querySelector("input[name=cf_ptr_segmento]"),o=document.querySelector("input[name=cf_ptr_unidade]");if(i){const r=t.querySelector(`label[for="${i.id}"]`);i.style.opacity="0",i.style.width="0",i.style.height="0",i.insertAdjacentHTML("afterend",`<seb-autocomplete\n            id="select_field_course"\n            style="--seb-primary-color: ${e.primaryColor||"black"}"\n            class="field"\n            select="true"\n            label="${null==r?void 0:r.textContent}"\n            options='[]'\n            name="${null==i?void 0:i.name}"\n            required="${null==i?void 0:i.required}"\n            noResultsText="Nenhum resultado encontrado"\n            value=""\n          />`);const a=async(i,r)=>{var a,s,l,d,h,c,p,u,m,f,v,g,y,_,b,w,x;const C=document.querySelector("seb-autocomplete[id=select_field_course]");if(!C)return;const z=null===(a=t.querySelector("input[name=cf_ptr_anoletivo]"))||void 0===a?void 0:a.value,S=null!==(h=null!==(d=null===(l=null===(s=e.fields)||void 0===s?void 0:s.cf_ptr_segmento)||void 0===l?void 0:l.yearSelected)&&void 0!==d?d:z)&&void 0!==h?h:null===(p=null===(c=e.fields)||void 0===c?void 0:c.cf_ptr_anoletivo)||void 0===p?void 0:p.value,M=null!==(v=null!==(f=null!=i?i:null===(m=null===(u=e.fields)||void 0===u?void 0:u.cf_ptr_segmento)||void 0===m?void 0:m.selectedSegment)&&void 0!==f?f:null==n?void 0:n.value)&&void 0!==v?v:null===(y=null===(g=e.fields)||void 0===g?void 0:g.cf_ptr_anoletivo)||void 0===y?void 0:y.value,E=null!==(_=null!=r?r:null==o?void 0:o.value)&&void 0!==_?_:null===(w=null===(b=e.fields)||void 0===b?void 0:b.cf_ptr_unidade)||void 0===w?void 0:w.value;if(""===M||!S||!E){const e={text:"Nenhuma Unidade, Segmento ou Ano Letivo Selecionado",value:""};return void C.setAttribute("options",JSON.stringify([e]))}t.appendChild(document.createElement("seb-loading")),C.setAttribute("options","[]"),C.setAttribute("value","");const k={unitCrm:E,segmentUid:M,schoolYear:S,env:e.env,key:e.apiKey};await async function(e){return fetch(`https://${e.env?`${e.env}.`:""}rdstation.seb.com.br/api/crm/unit/${e.unitCrm}/segment/${e.segmentUid}/school-year/${e.schoolYear}/unit-courses/regular/all?code=${e.key}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()),alert)}(k).then((e=>{if(C.innerHTML="",0===e.data.length){const e=C.querySelector('option[value=""]');e&&(e.textContent="Não foram encontrados segmentos")}else{let t=[];e.data.forEach((e=>{t=t.concat({text:e.unitCourseName,value:e.unitCourseId})})),C.setAttribute("options",JSON.stringify(t))}})),null===(x=t.querySelector("seb-loading"))||void 0===x||x.remove()},s=document.querySelector("seb-autocomplete[id=select_field_course]");s&&(s.addEventListener("change",(async e=>{var t;i.value=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value})),s.addEventListener("input",(async e=>{var t;i.value=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value}))),n&&n.addEventListener("change",(async e=>{null==i||i.setAttribute("value",""),s&&(s.setAttribute("value",""),s.setAttribute("searchParam","")),a(e.target.value,null)})),o&&(null==o||o.addEventListener("change",(async e=>{null==i||(i.value=""),a(null,e.target.value)})))}}))}function Dl(e,t){t((t=>{const i=t.querySelector("input[name=cf_ptr_fonte]");if(i){const n=t.querySelector(`label[for="${i.id}"]`);i.style.opacity="0",i.style.width="0",i.style.height="0",n&&(n.style.height="0",n.style.width="0"),i.insertAdjacentHTML("afterend",`<seb-autocomplete\n          id="select_field_source"\n          style="--seb-primary-color: ${e.primaryColor||"black"}"\n          class="field"\n          select="true"\n          name="${null==i?void 0:i.name}"\n          required="${null==i?void 0:i.required}"\n          label="${null==n?void 0:n.textContent}"\n          options='[]'\n          noResultsText="Nenhum resultado encontrado"\n          value=""\n        />`);const o=t.querySelector('seb-autocomplete[id="select_field_source"]');if(o){o.addEventListener("input",(()=>{i.value=o.value})),o.addEventListener("change",(()=>{i.value=o.value}));const t=e=>["a71e07dd-68e6-ec11-bb3c-000d3a88700f","b95eb65d-69e6-ec11-bb3c-000d3a88700f"].includes(e);(async function(e){return fetch(`https://${e.env?`${e.env}.`:""}rdstation.seb.com.br/api/crm/sources/Agendamento?code=${e.key}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()),alert)})({key:e.apiKey,env:e.env}).then((e=>{if(o.innerHTML="",0===e.data.length){const e=o.querySelector('option[value=""]');e&&(e.textContent="Não foram encontradas fontes")}else{let i=[];e.data.forEach((e=>{t(e.sourceId)||(i=i.concat({text:e.sourceName,value:e.sourceId}))})),o.setAttribute("options",JSON.stringify(i))}}))}}}))}async function Rl(e,t,i){var n,o;null===(o=null===(n=t.shadowRoot)||void 0===n?void 0:n.querySelector("div"))||void 0===o||o.appendChild(document.createElement("seb-loading-input"));(async function(e){return fetch(`https://${e.env?`${e.env}.`:""}rdstation.seb.com.br/api/crm/state/${e.stateUid}/cities/all?searchName=${e.searchParam?`${e.searchParam}`:""}&code=${e.key}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()),alert)})({stateUid:e,env:i.env,key:i.apiKey,searchParam:""}).then((e=>{var i,n,o;const r=t;if(r.innerHTML="",0===e.data.length){const e=r.querySelector('option[value=""]');e&&(e.textContent="Não foram encontradas cidades")}else{let i=[];e.data.forEach((e=>{i=i.concat({text:e.cityName,value:e.cityId})})),r.value="",r._handleClear.call(r),r.setAttribute("options",JSON.stringify(i)),t.removeAttribute("disabled")}const a=document.querySelector('seb-autocomplete[id="select_field_schoolorigin"]');a&&(a.innerHTML="",a.value="",a._handleClear.call(a),a.setAttribute("options","[]"),a.setAttribute("disabled","true")),null===(o=null===(n=null===(i=r.shadowRoot)||void 0===i?void 0:i.querySelector("div"))||void 0===n?void 0:n.querySelector("seb-loading-input"))||void 0===o||o.remove()}))}async function Fl(e,t){var i,n;const o=e;null===(n=null===(i=e.shadowRoot)||void 0===i?void 0:i.querySelector("div"))||void 0===n||n.appendChild(document.createElement("seb-loading-input"));(async function(e){return fetch(`https://${e.env?`${e.env}.`:""}rdstation.seb.com.br/api/crm/states/all?code=${e.key}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()),alert)})({env:t.env,key:t.apiKey}).then((e=>{var t,i,n;if(o.innerHTML="",0===e.data.length){const e=o.querySelector('option[value=""]');e&&(e.textContent="Não foram encontrados estados")}else{let t=[];e.data.forEach((e=>{t=t.concat({text:e.stateName,value:e.stateId})})),o.value="",o._handleClear.call(o),o.setAttribute("options",JSON.stringify(t));const i=document.querySelector('input[name="cf_ptr_estadoorigem"]');i&&i.value&&o.setAttribute("value",i.value)}null===(n=null===(i=null===(t=o.shadowRoot)||void 0===t?void 0:t.querySelector("div"))||void 0===i?void 0:i.querySelector("seb-loading-input"))||void 0===n||n.remove()}))}async function $l(e,t,i){var n,o;const r=t;null===(o=null===(n=r.shadowRoot)||void 0===n?void 0:n.querySelector("div"))||void 0===o||o.appendChild(document.createElement("seb-loading-input"));(async function(e){return fetch(`https://${e.env?`${e.env}.`:""}rdstation.seb.com.br/api/crm/originschools/city/${e.city}?searchName=${e.searchParam?`${e.searchParam}`:""}&code=${e.key}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()),alert)})({city:e,env:i.env,searchParam:"",key:i.apiKey}).then((e=>{var t,i,n;if(r.innerHTML="",0===e.data.length){const e=r.querySelector('option[value=""]');e&&(e.textContent="Não foram encontradas cidades")}else{let t=[];e.data.forEach((e=>{t=t.concat({text:e.originSchoolName,value:e.originSchoolId})})),r.value="",r._handleClear.call(r),r.setAttribute("options",JSON.stringify(t)),r.removeAttribute("disabled")}null===(n=null===(i=null===(t=r.shadowRoot)||void 0===t?void 0:t.querySelector("div"))||void 0===i?void 0:i.querySelector("seb-loading-input"))||void 0===n||n.remove()}))}function ql(e){let t,i=e.toString();if(null==i)return!1;if(i=i.replace(/[\s.-]*/gim,""),!i||11!==i.length||"00000000000"===i||"11111111111"===i||"22222222222"===i||"33333333333"===i||"44444444444"===i||"55555555555"===i||"66666666666"===i||"77777777777"===i||"88888888888"===i||"99999999999"===i)return!1;let n,o=0;for(t=1;t<=9;t+=1)o+=parseInt(i.substring(t-1,t),10)*(11-t);if(n=10*o%11,10!==n&&11!==n||(n=0),n!==parseInt(i.substring(9,10),10))return!1;for(o=0,t=1;t<=10;t+=1)o+=parseInt(i.substring(t-1,t),10)*(12-t);return n=10*o%11,10!==n&&11!==n||(n=0),n===parseInt(i.substring(10,11),10)}function Bl(e){let t,i,n,o,r,a,s,l=e;if(0===l.length)return!1;for(l=l.replace(/\D+/g,""),s=1,n=0;n<l.length-1;n+=1)if(l.charAt(n)!==l.charAt(n+1)){s=0;break}if(s)return!1;a=l.length-2,t=l.substring(0,a);const d=l.substring(a);for(i=0,r=a-7,n=a;n>=1;n-=1)i+=t.charAt(a-n)*(r-1),r<2&&(r=9);if(o=i%11<2?0:11-i%11,o!==d.charAt(0))return!1;for(a+=1,t=l.substring(0,a),i=0,r=a-7,n=a;n>=1;n-=1)i+=t.charAt(a-n)*(r-1),r<2&&(r=9);return o=i%11<2?0:11-i%11,o===d.charAt(1)}function jl(e,t,i){i((i=>{const n=i.querySelector(`input[name="${e}"]`);n&&(n.style.border=t?"1px solid #2e9e46":"1px solid #f00")}))}function Ul(e,t){let i=!1;return t((n=>{var o,r;const a=n.querySelector(`input[name="${e}"]`),s=n.querySelector(`seb-textfield[name="${e}"]`);a&&((null==a?void 0:a.value)&&(ql(a.value)||Bl(a.value)?(jl(e,!0,t),null==a||a.setAttribute("isValid","true"),null==a||a.setCustomValidity(""),i=!0):(jl(e,!1,t),null==a||a.setAttribute("isValid","false"),null===(r=null===(o=null==s?void 0:s.shadowRoot)||void 0===o?void 0:o.querySelector("input"))||void 0===r||r.setAttribute("style","border-color:#f00"),null==s||s.addEventListener("input",(()=>{var e,t;null===(t=null===(e=s.shadowRoot)||void 0===e?void 0:e.querySelector("input"))||void 0===t||t.setAttribute("style","border-color:#e5e7eb")})),null==a||a.setCustomValidity("CPF/CNPJ inválido"))),null==a||a.reportValidity())})),i}function Yl(e,t){let i=!1;return t((n=>{var o,r;const a=n.querySelector(`input[name="${e}"]`),s=n.querySelector(`seb-textfield[name="${e}"]`);a&&((null==a?void 0:a.value)&&(ql(a.value)?(jl(e,!0,t),null==a||a.setAttribute("isValid","true"),null==a||a.setCustomValidity(""),i=!0):(jl(e,!1,t),null==a||a.setAttribute("isValid","false"),null===(r=null===(o=null==s?void 0:s.shadowRoot)||void 0===o?void 0:o.querySelector("input"))||void 0===r||r.setAttribute("style","border-color:#f00"),null==s||s.addEventListener("input",(()=>{var e,t;null===(t=null===(e=s.shadowRoot)||void 0===e?void 0:e.querySelector("input"))||void 0===t||t.setAttribute("style","border-color:#e5e7eb")})),null==a||a.setCustomValidity("CPF inválido"))),null==a||a.reportValidity())})),i}Ol.styles=n`
    .loading-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 9999;
    }

    .spinner-border {
      width: 3rem;
      height: 3rem;
      border-width: 0.25em;
      border-color: var(--seb-primary-color, #007bff);
      border-right-color: transparent;
      border-radius: 50%;
      border-style: solid;
      animation: spinner-border 0.75s linear infinite;
    }

    @keyframes spinner-border {
      to {
        transform: rotate(360deg);
      }
    }

    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }

    .text-primary {
      color: #007bff;
    }
  `,t([r({type:String})],Ol.prototype,"primaryColor",void 0),window.customElements.define("seb-loading",Ol);class Wl extends i{constructor(){super(...arguments),this.primaryColor="#007bff",this.inputId=null,this.inputName=null}render(){return o`
      <div
        style="--seb-primary-color: ${this.primaryColor}"
        class="loading-container"
      >
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    `}firstUpdated(){if(this.inputId||this.inputName){const e=this.inputId?document.getElementById(this.inputId):document.querySelector(`[name=${this.inputName}]`);if(e){e.style.position="relative";const t=document.createElement("seb-loading-input");e.appendChild(t)}}}}function Kl(e,t){(null==e?void 0:e.stylized)&&t((i=>{const n=i.querySelectorAll("button");n&&n.forEach((n=>{n.setAttribute("style","display: none; visibility: hidden;"),n.insertAdjacentHTML("afterend",`\n              <seb-button\n                type=${n.type}\n                style="--seb-primary-color: ${e.primaryColor||"#6366F1"}; --seb-text-color: white"\n              >\n                ${n.textContent}\n              </seb-button>\n            `);const o=i.querySelector("seb-button");n.parentNode.classList.value.includes("submit")&&o?o.addEventListener("click",(o=>{var r;o.preventDefault();const a=i.querySelectorAll("input[name=cf_ptr_agenda]"),s=null===(r=a[0])||void 0===r?void 0:r.parentElement,l=s?window.getComputedStyle(s):null;let d=!0;if(e.fields&&Object.keys(e.fields).forEach((i=>{const n=e.fields[i];n&&("cpf"===n.type?d=Yl(i,t):"cpf/cnpj"===n.type&&(d=Ul(i,t)))})),a&&l&&"none"!==l.display&&"hidden"!==l.visibility&&"0"!==l.opacity&&(d=function(e,t,i){let n=!1;return t((o=>{const r=o.querySelector(`input[name="${e}"]`);r&&((null==r?void 0:r.value)&&""!==r.value?(jl(e,!0,t),null==r||r.setAttribute("isValid","true"),null==r||r.setCustomValidity(""),n=!0):(jl(e,!1,t),null==r||r.setAttribute("isValid","false"),null==r||r.setCustomValidity(`O campo ${null!=i?i:e} é obrigatório`)),r===document.activeElement&&(null==r||r.reportValidity()),"cf_ptr_agenda"===e&&""===r.value&&alert("Por favor, selecione uma data e um horário para agendar sua visita."))})),n}("cf_ptr_agenda",t)),function(e){e((e=>{e.querySelectorAll("seb-autocomplete, seb-textfield").forEach((t=>{var i,n,o,r,a,s,l;const d=window.getComputedStyle(t),h=t,c="0"!==d.opacity&&"hidden"!==d.visibility&&"none"!==d.display,p=null===(i=e.querySelector(`input[name="${h.name}"]`))||void 0===i?void 0:i.required;c&&!h.value&&p&&("SEB-TEXTFIELD"===h.tagName?null===(o=null===(n=h.shadowRoot)||void 0===n?void 0:n.querySelector("input"))||void 0===o||o.setAttribute("style","border-color:#f00"):"SEB-AUTOCOMPLETE"===h.tagName?null===(l=null===(s=null===(a=null===(r=h.shadowRoot)||void 0===r?void 0:r.querySelector("seb-textfield"))||void 0===a?void 0:a.shadowRoot)||void 0===s?void 0:s.querySelector("input"))||void 0===l||l.setAttribute("style","border-color:#f00"):h.style.borderColor="#f00",h.addEventListener("input",(()=>{var e,t,i,n,o,r;"SEB-TEXTFIELD"===h.tagName?null===(t=null===(e=h.shadowRoot)||void 0===e?void 0:e.querySelector("input"))||void 0===t||t.setAttribute("style","border-color:#e5e7eb"):"SEB-AUTOCOMPLETE"===h.tagName&&(null===(r=null===(o=null===(n=null===(i=h.shadowRoot)||void 0===i?void 0:i.querySelector("seb-textfield"))||void 0===n?void 0:n.shadowRoot)||void 0===o?void 0:o.querySelector("input"))||void 0===r||r.setAttribute("style","border-color:#e5e7eb"))})),h.addEventListener("change",(()=>{var e,t,i,n,o,r;"SEB-TEXTFIELD"===h.tagName?null===(t=null===(e=h.shadowRoot)||void 0===e?void 0:e.querySelector("input"))||void 0===t||t.setAttribute("style","border-color:#e5e7eb"):"SEB-AUTOCOMPLETE"===h.tagName&&(null===(r=null===(o=null===(n=null===(i=h.shadowRoot)||void 0===i?void 0:i.querySelector("seb-textfield"))||void 0===n?void 0:n.shadowRoot)||void 0===o?void 0:o.querySelector("input"))||void 0===r||r.setAttribute("style","border-color:#e5e7eb"))})))}))}))}(t),d){i.style.scrollMarginTop="200px",i.scrollIntoView({behavior:"smooth",block:"start"});const e="TouchEvent"in window?new TouchEvent("touchend",{bubbles:!0,cancelable:!0,view:window}):new PointerEvent("touchend",{bubbles:!1,cancelable:!0,view:window});n.dispatchEvent(e),n.click()}})):o&&o.addEventListener("click",(e=>{e.preventDefault();const t="TouchEvent"in window?new TouchEvent("touchend",{bubbles:!0,cancelable:!0,view:window}):new PointerEvent("touchend",{bubbles:!1,cancelable:!0,view:window});n.dispatchEvent(t),n.click()}))}))}))}Wl.styles=n`
    :host {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
    }

    .loading-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: var(--seb-border-radius, 8px);
      background: rgba(0, 0, 0, 0.5);
      z-index: 9999;
    }

    .spinner-border {
      width: 2rem;
      height: 2rem;
      border-width: 0.25em;
      border-color: var(--seb-primary-color, #007bff);
      border-right-color: transparent;
      border-radius: 50%;
      border-style: solid;
      animation: spinner-border 0.75s linear infinite;
    }

    @keyframes spinner-border {
      to {
        transform: rotate(360deg);
      }
    }

    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }

    .text-primary {
      color: #007bff;
    }
  `,t([r({type:String})],Wl.prototype,"primaryColor",void 0),t([r({type:String})],Wl.prototype,"inputId",void 0),t([r({type:String})],Wl.prototype,"inputName",void 0),window.customElements.define("seb-loading-input",Wl);class Jl{constructor(e){this.__forms=[],this.__options={primaryColor:"#2e9e46",apiKey:d.apiKey,env:d.env,stylized:!0,customButton:!0,clearForm:!0,fields:{cf_ptr_anoletivo:{options:{"f17b1920-4fd2-ed11-a7c7-000d3a88ffc8":"2024","203a4626-4fd2-ed11-a7c7-000d3a88ffc8":"2025"}},cf_ptr_cpfdoresponsavel:{label:"CPF do Responsável *",type:"cpf"},cf_ptr_datadenascimentoaluno:{mask:"00/00/0000",type:"date",min:"1900-01-01"},cf_ptr_nascimentoresponsavel:{mask:"00/00/0000",hide:!1,type:"date",hideOnLoad:!0,min:"1900-01-01"},cf_ptr_tipodelead:{value:"956840000",hide:!0},cf_ptr_estadoorigem:{transformInputInSelect:!0},cf_ptr_cidadeorigem:{transformInputInSelect:!0},cf_ptr_escolaorigem:{transformInputInSelect:!0},cf_seb_tipo_agenda:{value:"284360000",hide:!0},cf_ptr_origem:{value:"956840000",hide:!0},cf_ptr_ano:{value:"f17b1920-4fd2-ed11-a7c7-000d3a88ffc8",hide:!0},cf_ptr_proximatarefa:{value:"775d2310-437b-e811-a95f-000d3ac09449",hide:!0},email:{label:"Seu e-mail *"},cf_ptr_nomedoaluno:{label:"Nome do Aluno *",regex:"^[A-zÀ-ú\\s]*$"},cf_ptr_nomedoresponsavel:{regex:"^[A-zÀ-ú\\s]*$"},cf_ptr_unidade:{options:{"5e1e6f5e-e27a-e811-a95f-000d3ac09449":"Continente","601e6f5e-e27a-e811-a95f-000d3ac09449":"Ensino Médio Centro","621e6f5e-e27a-e811-a95f-000d3ac09449":"Pré-Vestibular Centro"}},cf_ptr_identificacao:{options:{95684e4:"Responsável por um aluno",956840001:"Sou Aluno e sou responsável por mim mesmo"},optionsLabels:{95684e4:{cf_ptr_nomedoresponsavel:"Nome completo do responsável",cf_ptr_cpfdoresponsavel:"CPF do responsável",email:"E-mail do responsável",cf_ptr_telefonecelular:"Celular do responsável",cf_ptr_nomedoaluno:"Nome completo do aluno",cf_ptr_datadenascimentoaluno:"Data de nascimento do aluno"},956840001:{cf_ptr_nomedoresponsavel:"Seu nome completo",cf_ptr_cpfdoresponsavel:"Seu CPF",email:"Seu e-mail",cf_ptr_telefonecelular:"Seu celular",cf_ptr_nascimentoresponsavel:"Sua data de nascimento"}},type:"radio",stylized:!0,hide:!1,value:"956840000"},cf_tipo_formulario_hidden:{hide:!0,value:"Agendamento"},cf_ptr_dataagenda:{stylized:!0},cf_ptr_horaagenda:{stylized:!0},cf_ptr_integracao:{hide:!0},cf_ptr_errointegracao:{hide:!0},cf_ptr_cursodaunidade:{stylized:!1},cf_ptr_segmento:{},cf_ptr_telefonecelular:{},cf_ptr_telefonealuno:{},cf_ptr_agenda:{stylized:!1,styledType:"default"},cf_ptr_evento:{},cf_ptr_fonte:{transformInputInSelect:!0},cf_ptr_amigoindicado:{},cf_ptr_emaildoamigoindicado:{},cf_id_pre_agendamento:{stylized:!0,hide:!1}}},window.addEventListener("DOMContentLoaded",(()=>{this.__options={...this.__options,...e,fields:{...this.__options.fields,...null==e?void 0:e.fields}},this.__forms=Array.from(document.querySelectorAll("form")),this.__clear_form(),this.__init_field_cf_ptr_custom_radio(),this.__init_fields(),this.__init_field_cf_ptr_agenda(),this.__init_field_cf_ptr_evento(),this.__init_field_cf_ptr_cursodaunidade(),this.__init_field_cf_ptr_fonte(),this.__init_field_cf_ptr_estadoorigem(),this.__init_field_cf_ptr_cidadeorigem(),this.__init_field_cf_ptr_escolaorigem(),this.__options.customButton&&this.__init_buttons(),this.__init_field_cf_id_pre_agendamento()}))}static init(e){return new Jl(e)}__clear_form(){var e;if(!(null===(e=this.__options)||void 0===e?void 0:e.clearForm))return;document.querySelectorAll("form").forEach((e=>{e.reset()}))}__init_field_cf_ptr_custom_radio(){!function(e){var t,i,n,o,r,a;const s=document.createElement("seb-radio-group"),l=null===(t=e.fields)||void 0===t?void 0:t.cf_ptr_identificacao;if(l){const t=Object.keys(null!==(i=l.options)&&void 0!==i?i:{}).map((t=>{var i,n,o,r;return{text:null!==(r=null===(o=null===(n=null===(i=e.fields)||void 0===i?void 0:i.cf_ptr_identificacao)||void 0===n?void 0:n.options)||void 0===o?void 0:o[t])&&void 0!==r?r:"",value:t}}));l.optionsLabels||(l.optionsLabels={95684e4:{cf_ptr_nomedoresponsavel:"Nome completo do responsável",cf_ptr_cpfdoresponsavel:"CPF do responsável",email:"E-mail do responsável",cf_ptr_telefonecelular:"Celular do responsável",cf_ptr_nomedoaluno:"Nome completo do aluno",cf_ptr_datadenascimentoaluno:"Data de nascimento do aluno"},956840001:{cf_ptr_nomedoresponsavel:"Seu nome completo",cf_ptr_cpfdoresponsavel:"Seu CPF",email:"Seu e-mail",cf_ptr_telefonecelular:"Seu celular",cf_ptr_nascimentoresponsavel:"Sua data de nascimento"}}),s.setAttribute("options",JSON.stringify(t)),s.setAttribute("name","cf_ptr_identificacao"),s.setAttribute("value",null!==(n=l.value)&&void 0!==n?n:""),s.setAttribute("stylized",null!==(r=null===(o=l.stylized)||void 0===o?void 0:o.toString())&&void 0!==r?r:"true"),s.setAttribute("type",null!==(a=l.type)&&void 0!==a?a:"radio"),s.setAttribute("optionsLabels",JSON.stringify(l.optionsLabels)),s.setAttribute("style",`--seb-primary-color: ${e.primaryColor||"#49b9cf"}`),document.querySelectorAll('input[name="cf_ptr_identificacao"]').forEach((e=>{const t=e;t.style.display="none",t.style.position="absolute",t.style.width="0",t.style.height="0";const i=t.parentNode;i instanceof HTMLElement&&(t.style.display="none",i.style.width="0",i.style.height="0",i.style.position="absolute");const n=null==i?void 0:i.parentNode;n instanceof HTMLElement&&n.className.includes("option")&&(n.style.display="none",n.style.width="0",n.style.height="0",n.style.position="absolute")}));const d=document.querySelector('.bricks-form__field[data-step="1"]');d&&(d.classList.add("custom-form-field-radio"),d.appendChild(s),d.querySelectorAll("label").forEach((e=>{const t=e;t.style.top="0",t.style.width="unset",t.style.height="unset"})))}}(this.__options)}__init_buttons(){Kl(this.__options,this.__for_each_form.bind(this))}__is_field_valid_cpf_to_submit(e){return Yl(e,this.__for_each_form.bind(this))}__is_field_valid_cpf_cnpj_to_submit(e){return Ul(e,this.__for_each_form.bind(this))}__init_field_cf_ptr_evento(){Vl(this.__options,this.__for_each_form.bind(this),Jl.__handleRedirect,Jl.__removeInputInvisibility)}__init_field_cf_ptr_cursodaunidade(){Nl(this.__options,this.__for_each_form.bind(this))}__init_field_cf_ptr_estadoorigem(){var e;e=this.__options,this.__for_each_form.bind(this)((t=>{var i,n;const o=t.querySelector("input[name=cf_ptr_estadoorigem]");if(o){const r=t.querySelector(`label[for="${o.id}"]`);o.style.opacity="0",o.style.width="0",o.style.height="0",r&&(r.style.height="0",r.style.width="0"),o.insertAdjacentHTML("afterend",`<seb-autocomplete\n            id="select_field_state"\n            style="--seb-primary-color: ${e.primaryColor||"black"}"\n            class="field"\n            select="true"\n            name="${null==o?void 0:o.name}"\n            required="${null==o?void 0:o.required}"\n            label="${null==r?void 0:r.textContent}"\n            options='[]'\n            noResultsText="Nenhum resultado encontrado"\n            value=""\n          />`);const a=t.querySelector('seb-autocomplete[id="select_field_state"]'),s=t.querySelector("input[name=cf_ptr_cidadeorigem]"),l=t.querySelector("input[name=cf_ptr_escolaorigem]");if(a){const r=async()=>{const i=t.querySelector('seb-autocomplete[id="select_field_city"]');if(i){const t=Array.isArray(a.options)&&a.options.find((e=>e.value===a.value)).value;i&&await Rl(t,i,e)}};a.addEventListener("input",(()=>{r(),o.value=a.value,s&&(s.value=""),l&&(l.value="")})),a.addEventListener("change",(()=>{r(),o.value=a.value})),null===(n=null===(i=a.shadowRoot)||void 0===i?void 0:i.querySelector("div"))||void 0===n||n.appendChild(document.createElement("seb-loading-input")),Fl(a,e)}}}))}__init_field_cf_ptr_cidadeorigem(){!async function(e,t){t((t=>{var i,n,o,r;const a=t.querySelector("input[name=cf_ptr_cidadeorigem]");if(a){const s=t.querySelector(`label[for="${a.id}"]`);s&&(s.style.height="0",s.style.width="0"),a.insertAdjacentHTML("afterend",`<seb-autocomplete\n            id="select_field_city"\n            style="--seb-primary-color: ${e.primaryColor||"black"}"\n            class="field"\n            select="true"\n            name="${null==a?void 0:a.name}"\n            required="${null==a?void 0:a.required}"\n            label="${null==s?void 0:s.textContent}"\n            options='[]'\n            disabled="true"\n            noResultsText="Nenhum resultado encontrado"\n            value=""\n          />`);const l=t.querySelector('seb-autocomplete[id="select_field_city"]'),d=t.querySelector("input[name=cf_ptr_escolaorigem]");if(l){const s=async()=>{const i=t.querySelector('seb-autocomplete[id="select_field_schoolorigin"]');if(i){const t=Array.isArray(l.options)&&l.options.find((e=>e.value===l.value)).value;i&&await $l(t,i,e)}};l.addEventListener("input",(()=>{s(),a.value=l.value,d&&(d.value="")})),l.addEventListener("change",(()=>{s(),a.value=l.value})),(null===(n=null===(i=e.fields)||void 0===i?void 0:i.cf_ptr_estadoorigem)||void 0===n?void 0:n.value)&&Rl(null===(r=null===(o=e.fields)||void 0===o?void 0:o.cf_ptr_estadoorigem)||void 0===r?void 0:r.value,l,e)}}}))}(this.__options,this.__for_each_form.bind(this))}__init_field_cf_ptr_escolaorigem(){!async function(e,t){t((t=>{var i,n,o,r;const a=t.querySelector("input[name=cf_ptr_escolaorigem]");if(a){const s=t.querySelector(`label[for="${a.id}"]`);s&&(s.style.height="0",s.style.width="0"),a.insertAdjacentHTML("afterend",`<seb-autocomplete\n            id="select_field_schoolorigin"\n            style="--seb-primary-color: ${e.primaryColor||"black"}"\n            class="field"\n            select="true"\n            name="${null==a?void 0:a.name}"\n            required="${null==a?void 0:a.required}"\n            label="${null==s?void 0:s.textContent}"\n            options='[]'\n            disabled="true"\n            noResultsText="Nenhum resultado encontrado"\n            value=""\n          />`);const l=t.querySelector('seb-autocomplete[id="select_field_schoolorigin"]');l&&(l.addEventListener("input",(()=>{a.value=l.value})),l.addEventListener("change",(()=>{a.value=l.value})),null===(n=null===(i=e.fields)||void 0===i?void 0:i.cf_ptr_cidadeorigem)||void 0===n?void 0:n.value)&&$l(null===(r=null===(o=e.fields)||void 0===o?void 0:o.cf_ptr_cidadeorigem)||void 0===r?void 0:r.value,l,e)}}))}(this.__options,this.__for_each_form.bind(this))}__init_field_cf_ptr_fonte(){Dl(this.__options,this.__for_each_form.bind(this))}static __handleRedirect(e,t,i){var n;const o=t&&""!==t?t:"O agendamento de visitas desta unidade é realizado pelo site da própria unidade. Clique no botão abaixo para prosseguir.";document.querySelectorAll("form").forEach((e=>{const t=e.querySelectorAll("input, textarea, select, seb-textfield, seb-autocomplete, seb-button, .phone-input-group, .bricks-form__field__option, .bricks-form__label");let n=!0;t.forEach((e=>{e.name===i&&(n=!1),n||e.name===i||(e.style.visibility="hidden")}))}));const r=document.querySelector("seb-message");r&&r.remove();const a=document.querySelector(`seb-autocomplete[name="${i}"]`)||document.querySelector(`input[name="${i}"]`);null===(n=null==a?void 0:a.parentElement)||void 0===n||n.insertAdjacentHTML("afterend",`<seb-message message="${o}" ${e&&`redirectLink=${e}`}></seb-message>`)}__init_fields(){this.__options.fields&&Object.keys(this.__options.fields).forEach((e=>{const t=this.__options.fields[e];t&&(t.value&&this.__set_field_value(e,t.value),t.label&&this.__set_field_label(e,t.label),t.options&&this.__replace_select_option_label(e,t.options),"date"===t.type&&t.min&&this.__set_field_min_date(e,t.min),this.__options.stylized&&this.__stylize_form(e),"cpf"===t.type?(this.__is_field_valid_cpf(e),this.__init_field_mask(e,"000.000.000-00")):"cpf/cnpj"===t.type?(this.__is_field_valid_cpf_cnpj(e),this.__set_field_mask_cpf_cnpj(e)):t.mask&&this.__init_field_mask(e,t.mask),t.hideOnLoad&&this.__set_field_hide_on_step(e),t.hide&&this.__set_field_hide(e),t.regex&&this.__set_field_regex(e,t.regex))}))}__set_field_min_date(e,t){!function(e,t,i){i((n=>{const o=n.querySelector(`input[name="${e}"]`);o&&o.addEventListener("input",(()=>{let n=o.value;o.value.length>10&&(n=o.value.slice(0,10));const r=new Date,a=new Date(t),[s,l,d]=n.split("/"),h=new Date(`${d}-${l}-${s}T03:24:00`);n.length>=10&&(h<r&&h>a?(jl(e,!0,i),null==o||o.setCustomValidity(""),null==o||o.reportValidity()):(jl(e,!1,i),null==o||o.setCustomValidity("Data inválida"),null==o||o.reportValidity(),o.value=""))}))}))}(e,t,this.__for_each_form.bind(this))}__set_field_mask_cpf_cnpj(e){this.__for_each_form((t=>{const i=t.querySelector(`input[name="${e}"]`);if(i){const e=$(i),t=(t,i,n,o)=>{const r=["000.000.000-000","00.000.000/0000-00"];e.mask(t.length>14?r[1]:r[0],o)};e.length>11?e.mask("00.000.000/0000-00",{onKeyPress:t}):e.mask("000.000.000-00#",{onKeyPress:t})}}))}__is_field_valid_cpf_cnpj(e){!function(e,t){t((i=>{const n=i.querySelector(`input[name="${e}"]`);n&&n.addEventListener("input",(()=>{(null==n?void 0:n.value)&&(ql(n.value)||Bl(n.value)?(jl(e,!1,t),null==n||n.setAttribute("isValid","true"),null==n||n.setCustomValidity("")):(jl(e,!1,t),null==n||n.setAttribute("isValid","false"),null==n||n.setCustomValidity("CPF/CNPJ inválido"))),n===document.activeElement&&(null==n||n.reportValidity())}))}))}(e,this.__for_each_form.bind(this))}__set_field_regex(e,t){!function(e,t,i){i((n=>{const o=n.querySelector(`input[name="${e}"]`);o&&(o.addEventListener("input",(()=>{(null==o?void 0:o.value)&&(new RegExp(t).test(o.value)?(jl(e,!0,i),null==o||o.setAttribute("isValid","true"),null==o||o.setCustomValidity("")):(jl(e,!1,i),null==o||o.setAttribute("isValid","false"),null==o||o.setCustomValidity("Campo inválido"))),o===document.activeElement&&(null==o||o.reportValidity())})),o.addEventListener("input",(e=>{const i=e.target.value.match(new RegExp(t,"g"));o.value.length>0&&!i?o.value=o.value.slice(0,-1):i&&(o.value=i.join(""))})))}))}(e,t,this.__for_each_form.bind(this))}__stylize_form(e){this.__for_each_form((t=>{var i,n,o,r,a,s,l,d,h,c,p,u,m,f,v,g,y,_;const b=t.querySelector(`input[name="${e}"]`),w=t.querySelector(`select[name="${e}"]`);if("cf_ptr_evento"!==e&&"cf_ptr_identificacao"!==e)if(b){if("hidden"===b.type)return;if(this.__options.fields&&Object.keys(this.__options.fields).includes(b.name)){if(!1===(null===(i=this.__options.fields[b.name])||void 0===i?void 0:i.stylized))return;if(null===(n=this.__options.fields[b.name])||void 0===n?void 0:n.hide)return}b.style.opacity="0",b.style.width="0",b.style.height="0",b.style.position="absolute",b.style.top="50px",b.style.left="50%";const e=t.querySelector(`label[for="${b.id}"]`);e&&(e.style.display="none",e.style.height="0",e.style.width="0");const{fields:u}=this.__options;if(u&&(null===(o=u[b.name])||void 0===o?void 0:o.transformInputInSelect)){const i=b.parentNode;i&&(null==i||i.setAttribute("style","position: relative;"));const n=null!==(a=null===(r=u[b.name])||void 0===r?void 0:r.options)&&void 0!==a?a:null;if(n){const t=Object.keys(n).map((e=>({text:null==n?void 0:n[e],value:e})));let i="O agendamento de visitas desta unidade é realizado pelo site da própria unidade. Clique no botão abaixo para prosseguir.";(null===(s=u[b.name])||void 0===s?void 0:s.redirectMessage)&&(i=u[b.name].redirectMessage||"O agendamento de visitas desta unidade é realizado pelo site da própria unidade. Clique no botão abaixo para prosseguir.");const o=null===(l=u[b.name])||void 0===l?void 0:l.redirectTo;if(o){b.addEventListener("change",(async e=>{var t,i,n;const o=(null===(t=u[b.name])||void 0===t?void 0:t.redirectMessage)||"",r=null===(i=u[b.name])||void 0===i?void 0:i.redirectTo,a=e.target,s=r?Object.keys(r).map((e=>({value:e,text:r[e]||""}))):[],l=s.length>0&&(null===(n=s.find((e=>e.value===a.value)))||void 0===n?void 0:n.text);l?Jl.__handleRedirect(l,o,"cf_ptr_unidade"):Jl.__removeInputInvisibility()}));const n=Object.keys(o).map((e=>({text:null==o?void 0:o[e],value:e})));b.insertAdjacentHTML("afterend",`\n            <seb-autocomplete\n              id="seb-${b.id}"\n              style="--seb-primary-color: ${this.__options.primaryColor||"black"}"\n              class="field"\n              select="true"\n              label="${null==e?void 0:e.textContent}"\n              name="${b.name}"\n              required="${b.required}"\n              redirectTo='${JSON.stringify(n)}'\n              redirectMessage="${i}"\n              options='${JSON.stringify(t)}'\n              noResultsText="Nenhum resultado encontrado"\n              value="${null!==(h=null===(d=u[b.name])||void 0===d?void 0:d.value)&&void 0!==h?h:""}"\n            />\n          `)}else b.insertAdjacentHTML("afterend",`\n                  <seb-autocomplete\n                    id="seb-${b.id}"\n                    style="--seb-primary-color: ${this.__options.primaryColor||"black"}"\n                    class="field"\n                    select="true"\n                    label="${null==e?void 0:e.textContent}"\n                    name="${b.name}"\n                    required="${b.required}"\n                    options='${JSON.stringify(t)}'\n                    noResultsText="Nenhum resultado encontrado"\n                    value="${null!==(p=null===(c=u[b.name])||void 0===c?void 0:c.value)&&void 0!==p?p:""}"\n                  />\n                `)}const o=t.querySelector(`seb-autocomplete[id="seb-${b.id}"]`);o&&(b.addEventListener("focus",(()=>{null==o||o.focus()})),b.addEventListener("change",(()=>{var e;null==o||(o.value=null===(e=null==o?void 0:o.options.find((e=>e.value===b.value)))||void 0===e?void 0:e.value)})),o.addEventListener("select",(e=>{var t;e.target.value&&(b.value=null===(t=e.target.__options.find((t=>t.value===e.target.value)))||void 0===t?void 0:t.value),b.dispatchEvent(new Event("change"))})))}else{b.insertAdjacentHTML("afterend",`\n          <seb-textfield\n            style="--seb-primary-color: ${this.__options.primaryColor||"black"}; ${"cf_ptr_telefonecelular"===b.name||"cf_ptr_telefonealuno"===b.name?"--seb-border-radius: 0px 8px 8px 0":""}"\n            name="${b.name}"\n            ${b.required?'required="required"':""}\n            id="seb-${b.id}"\n            class="field"\n            label="${null==e?void 0:e.textContent}"\n            value="${b.value}"\n          />\n        `);const i=t.querySelector(`seb-textfield[id="seb-${b.id}"]`);if(i){b.addEventListener("focus",(()=>{null==i||i.focus()})),i.addEventListener("input",(e=>{b.value=e.target.value,b.dispatchEvent(new Event("input")),b.dispatchEvent(new Event("keyup")),null==i||(i.value=b.value)}));const e=b.parentNode;e&&(null==e||e.setAttribute("style","position: relative;"),"cf_ptr_telefonecelular"===b.name&&(null==e||e.insertAdjacentHTML("afterbegin",`\n                    <style rel="stylesheet">\n                      #${t.id} .select2-container a.select2-choice {\n                        height: 55px !important;\n                        border-style: solid !important;\n                        border-width: 1px !important;\n                        border-color: #e5e7eb !important;\n                      }\n                      #${t.id} .select2-container .select2-choice>.select2-chosen {\n                        margin-top: 8px;\n                      }\n                    </style>\n                  `),b.addEventListener("change",(e=>{null==i||(i.value=e.target.value)}))))}}}else if(w){if("hidden"===w.type)return;if(this.__options.fields&&Object.keys(this.__options.fields).includes(w.name)){if(!1===(null===(u=this.__options.fields[w.name])||void 0===u?void 0:u.stylized))return;if(null===(m=this.__options.fields[w.name])||void 0===m?void 0:m.hide)return}w.style.opacity="0",w.style.width="0",w.style.height="0",w.style.position="absolute",w.style.top="50px",w.style.left="50%";const e=t.querySelector(`label[for="${w.id}"]`);e&&(e.style.display="none",e.style.height="0",e.style.width="0");const i=w.parentNode;i&&(null==i||i.setAttribute("style","position: relative;"));const n=Array.from(w.options).map((e=>({text:e.text,value:e.value})));w.insertAdjacentHTML("afterend",`\n          <seb-autocomplete\n            id="seb-${w.id}"\n            style="--seb-primary-color: ${this.__options.primaryColor||"black"}"\n            class="field"\n            select="true"\n            name="${w.name}"\n            label="${null==e?void 0:e.textContent}"\n            name="${w.name}"\n            required="${w.required}"\n            options='${JSON.stringify(n)}'\n            redirectMessage="${null===(g=null===(v=null===(f=this.__options)||void 0===f?void 0:f.fields)||void 0===v?void 0:v[w.name])||void 0===g?void 0:g.redirectMessage}"\n            noResultsText="Nenhum resultado encontrado"\n            value="${null!==(_=null===(y=Array.from(w.options).find((e=>e.value===w.value&&""!==w.value)))||void 0===y?void 0:y.text)&&void 0!==_?_:""}"\n          />\n        `);const o=t.querySelector(`seb-autocomplete[id="seb-${w.id}"]`);o&&(w.addEventListener("focus",(()=>{null==o||o.focus()})),w.addEventListener("change",(()=>{var e,t;null==o||(o.value=null!==(t=null===(e=Array.from(w.options).find((e=>e.value===w.value&&""!==w.value)))||void 0===e?void 0:e.text)&&void 0!==t?t:"")})),o.addEventListener("select",(e=>{if(e.target.value){const t=Array.from(w.options).find((t=>t.value===e.target.value));t&&(w.value=t.value)}else w.value=e.detail.value;w.dispatchEvent(new Event("change"))})))}}))}__init_field_cf_ptr_agenda(){Il(this.__options,this.__for_each_form.bind(this))}__replace_select_option_label(e,t){this.__for_each_form((i=>{var n,o;const r=i.querySelector(`select[name="${e}"]`);if(r)for(let e=0;e<r.options.length;e+=1){const i=r.options[e];if(i){const e=null!==(o=null===(n=i.textContent)||void 0===n?void 0:n.trim())&&void 0!==o?o:"";Object.keys(t).includes(e)&&(i.textContent=t[e])}}}))}__init_field_mask(e,t){this.__for_each_form((i=>{const n=i.querySelector(`input[name="${e}"]`);n&&$(n).mask(t,{translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}})}))}__set_field_value(e,t){this.__for_each_form((i=>{const n=i.querySelector(`input[name="${e}"]`),o=i.querySelector(`select[name="${e}"]`);n?n.value=t:o&&(o.value=t)}))}__set_field_hide_on_step(e){this.__for_each_form((t=>{var i,n,o,r,a,s;const l=t.querySelector(`input[name="${e}"]`),d=t.querySelector(`select[name="${e}"]`);l?(null===(i=l.parentElement)||void 0===i||i.style.setProperty("visibility","hidden"),null===(n=l.parentElement)||void 0===n||n.style.setProperty("height","0"),null===(o=l.parentElement)||void 0===o||o.style.setProperty("margin-bottom","0")):d&&(null===(r=d.parentElement)||void 0===r||r.style.setProperty("visibility","hidden"),null===(a=d.parentElement)||void 0===a||a.style.setProperty("height","0"),null===(s=d.parentElement)||void 0===s||s.style.setProperty("margin-bottom","0"))}))}__set_field_hide(e){this.__for_each_form((t=>{var i,n,o;const r=t.querySelector(`input[name="${e}"]`),a=t.querySelector(`select[name="${e}"]`),s=null==r?void 0:r.parentNode;if(s&&"LABEL"===s.tagName){const e=null===(i=s.parentNode)||void 0===i?void 0:i.parentNode;if(e){const t=e.querySelector("label");t&&(t.style.height="0",t.style.width="0")}}r?null===(n=r.parentElement)||void 0===n||n.style.setProperty("display","none"):a&&(null===(o=a.parentElement)||void 0===o||o.style.setProperty("display","none"))}))}__set_field_label(e,t){this.__for_each_form((i=>{const n=i.querySelector(`input[name="${e}"]`);if(n){const e=n.id,o=i.querySelector(`label[for="${e}"]`);o&&(o.textContent=t)}}))}__is_field_valid_cpf(e){!function(e,t){t((i=>{const n=i.querySelector(`input[name="${e}"]`);n&&n.addEventListener("input",(()=>{(null==n?void 0:n.value)&&(ql(n.value)?(jl(e,!0,t),null==n||n.setAttribute("isValid","true"),null==n||n.setCustomValidity("")):(jl(e,!1,t),null==n||n.setAttribute("isValid","false"))),14===n.value.length?null==n||n.reportValidity():null==n||n.setCustomValidity("")}))}))}(e,this.__for_each_form.bind(this))}__for_each_form(e){this.__forms.forEach(e)}__init_field_cf_id_pre_agendamento(){this.__for_each_form((e=>{const t=e.querySelector('input[name="cf_id_pre_agendamento"]'),i=e.querySelector('seb-textfield[name="cf_id_pre_agendamento"]'),n=l();t&&(t.value=n,t.style.display="none",i&&(i.value=t.value,i.style.display="none"))}))}}Jl.__removeInputInvisibility=()=>{const e=document.querySelector("body");if(!e)return;const t=e.querySelector("seb-message");t&&t.remove();document.querySelectorAll("form").forEach((e=>{e.querySelectorAll("input , textarea, select, seb-textfield, seb-autocomplete, seb-button, .phone-input-group, .bricks-form__field__option, .bricks-form__label").forEach((e=>{e.style.visibility=""}))}))},window.SebRdStationForm=Jl;
