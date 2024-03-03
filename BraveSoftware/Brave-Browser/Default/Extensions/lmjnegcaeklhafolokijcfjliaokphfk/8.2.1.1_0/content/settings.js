"use strict";(()=>{var se=Object.create;var q=Object.defineProperty;var le=Object.getOwnPropertyDescriptor;var ce=Object.getOwnPropertyNames;var me=Object.getPrototypeOf,ue=Object.prototype.hasOwnProperty;var pe=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var de=(e,r,t,u)=>{if(r&&typeof r=="object"||typeof r=="function")for(let l of ce(r))!ue.call(e,l)&&l!==t&&q(e,l,{get:()=>r[l],enumerable:!(u=le(r,l))||u.enumerable});return e};var fe=(e,r,t)=>(t=e!=null?se(me(e)):{},de(r||!e||!e.__esModule?q(t,"default",{value:e,enumerable:!0}):t,e));var re=pe((Q,ee)=>{(function(e,r){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],r);else if(typeof Q<"u")r(ee);else{var t={exports:{}};r(t),e.browser=t.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:Q,function(e){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let r="The message port closed before a response was received.",t=u=>{let l={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(l).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class o extends WeakMap{constructor(m,f=void 0){super(f),this.createItem=m}get(m){return this.has(m)||this.set(m,this.createItem(m)),super.get(m)}}let n=s=>s&&typeof s=="object"&&typeof s.then=="function",a=(s,m)=>(...f)=>{u.runtime.lastError?s.reject(new Error(u.runtime.lastError.message)):m.singleCallbackArg||f.length<=1&&m.singleCallbackArg!==!1?s.resolve(f[0]):s.resolve(f)},c=s=>s==1?"argument":"arguments",i=(s,m)=>function(g,...x){if(x.length<m.minArgs)throw new Error(`Expected at least ${m.minArgs} ${c(m.minArgs)} for ${s}(), got ${x.length}`);if(x.length>m.maxArgs)throw new Error(`Expected at most ${m.maxArgs} ${c(m.maxArgs)} for ${s}(), got ${x.length}`);return new Promise((b,w)=>{if(m.fallbackToNoCallback)try{g[s](...x,a({resolve:b,reject:w},m))}catch(p){console.warn(`${s} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,p),g[s](...x),m.fallbackToNoCallback=!1,m.noCallback=!0,b()}else m.noCallback?(g[s](...x),b()):g[s](...x,a({resolve:b,reject:w},m))})},h=(s,m,f)=>new Proxy(m,{apply(g,x,b){return f.call(x,s,...b)}}),A=Function.call.bind(Object.prototype.hasOwnProperty),k=(s,m={},f={})=>{let g=Object.create(null),x={has(w,p){return p in s||p in g},get(w,p,T){if(p in g)return g[p];if(!(p in s))return;let _=s[p];if(typeof _=="function")if(typeof m[p]=="function")_=h(s,s[p],m[p]);else if(A(f,p)){let I=i(p,f[p]);_=h(s,s[p],I)}else _=_.bind(s);else if(typeof _=="object"&&_!==null&&(A(m,p)||A(f,p)))_=k(_,m[p],f[p]);else if(A(f,"*"))_=k(_,m[p],f["*"]);else return Object.defineProperty(g,p,{configurable:!0,enumerable:!0,get(){return s[p]},set(I){s[p]=I}}),_;return g[p]=_,_},set(w,p,T,_){return p in g?g[p]=T:s[p]=T,!0},defineProperty(w,p,T){return Reflect.defineProperty(g,p,T)},deleteProperty(w,p){return Reflect.deleteProperty(g,p)}},b=Object.create(s);return new Proxy(b,x)},M=s=>({addListener(m,f,...g){m.addListener(s.get(f),...g)},hasListener(m,f){return m.hasListener(s.get(f))},removeListener(m,f){m.removeListener(s.get(f))}}),oe=new o(s=>typeof s!="function"?s:function(f){let g=k(f,{},{getContent:{minArgs:0,maxArgs:0}});s(g)}),G=new o(s=>typeof s!="function"?s:function(f,g,x){let b=!1,w,p=new Promise(S=>{w=function(P){b=!0,S(P)}}),T;try{T=s(f,g,w)}catch(S){T=Promise.reject(S)}let _=T!==!0&&n(T);if(T!==!0&&!_&&!b)return!1;let I=S=>{S.then(P=>{x(P)},P=>{let L;P&&(P instanceof Error||typeof P.message=="string")?L=P.message:L="An unexpected error occurred",x({__mozWebExtensionPolyfillReject__:!0,message:L})}).catch(P=>{console.error("Failed to send onMessage rejected reply",P)})};return I(_?T:p),!0}),ae=({reject:s,resolve:m},f)=>{u.runtime.lastError?u.runtime.lastError.message===r?m():s(new Error(u.runtime.lastError.message)):f&&f.__mozWebExtensionPolyfillReject__?s(new Error(f.message)):m(f)},$=(s,m,f,...g)=>{if(g.length<m.minArgs)throw new Error(`Expected at least ${m.minArgs} ${c(m.minArgs)} for ${s}(), got ${g.length}`);if(g.length>m.maxArgs)throw new Error(`Expected at most ${m.maxArgs} ${c(m.maxArgs)} for ${s}(), got ${g.length}`);return new Promise((x,b)=>{let w=ae.bind(null,{resolve:x,reject:b});g.push(w),f.sendMessage(...g)})},ie={devtools:{network:{onRequestFinished:M(oe)}},runtime:{onMessage:M(G),onMessageExternal:M(G),sendMessage:$.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:$.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},F={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return l.privacy={network:{"*":F},services:{"*":F},websites:{"*":F}},k(u,ie,l)};e.exports=t(chrome)}else e.exports=globalThis.browser})});function E(e){var r=String(e);if(r==="[object Object]")try{r=JSON.stringify(e)}catch{}return r}var ge=function(){function e(){}return e.prototype.isSome=function(){return!1},e.prototype.isNone=function(){return!0},e.prototype[Symbol.iterator]=function(){return{next:function(){return{done:!0,value:void 0}}}},e.prototype.unwrapOr=function(r){return r},e.prototype.expect=function(r){throw new Error("".concat(r))},e.prototype.unwrap=function(){throw new Error("Tried to unwrap None")},e.prototype.map=function(r){return this},e.prototype.mapOr=function(r,t){return r},e.prototype.mapOrElse=function(r,t){return r()},e.prototype.or=function(r){return r},e.prototype.orElse=function(r){return r()},e.prototype.andThen=function(r){return this},e.prototype.toResult=function(r){return N(r)},e.prototype.toString=function(){return"None"},e}(),d=new ge;Object.freeze(d);var he=function(){function e(r){if(!(this instanceof e))return new e(r);this.value=r}return e.prototype.isSome=function(){return!0},e.prototype.isNone=function(){return!1},e.prototype[Symbol.iterator]=function(){var r=Object(this.value);return Symbol.iterator in r?r[Symbol.iterator]():{next:function(){return{done:!0,value:void 0}}}},e.prototype.unwrapOr=function(r){return this.value},e.prototype.expect=function(r){return this.value},e.prototype.unwrap=function(){return this.value},e.prototype.map=function(r){return y(r(this.value))},e.prototype.mapOr=function(r,t){return t(this.value)},e.prototype.mapOrElse=function(r,t){return t(this.value)},e.prototype.or=function(r){return this},e.prototype.orElse=function(r){return this},e.prototype.andThen=function(r){return r(this.value)},e.prototype.toResult=function(r){return C(this.value)},e.prototype.safeUnwrap=function(){return this.value},e.prototype.toString=function(){return"Some(".concat(E(this.value),")")},e.EMPTY=new e(void 0),e}(),y=he,V;(function(e){function r(){for(var l=[],o=0;o<arguments.length;o++)l[o]=arguments[o];for(var n=[],a=0,c=l;a<c.length;a++){var i=c[a];if(i.isSome())n.push(i.value);else return i}return y(n)}e.all=r;function t(){for(var l=[],o=0;o<arguments.length;o++)l[o]=arguments[o];for(var n=0,a=l;n<a.length;n++){var c=a[n];return c.isSome(),c}return d}e.any=t;function u(l){return l instanceof y||l===d}e.isOption=u})(V||(V={}));var ye=function(){function e(r){if(!(this instanceof e))return new e(r);this.error=r;var t=new Error().stack.split(`
`).slice(2);t&&t.length>0&&t[0].includes("ErrImpl")&&t.shift(),this._stack=t.join(`
`)}return e.prototype.isOk=function(){return!1},e.prototype.isErr=function(){return!0},e.prototype[Symbol.iterator]=function(){return{next:function(){return{done:!0,value:void 0}}}},e.prototype.else=function(r){return r},e.prototype.unwrapOr=function(r){return r},e.prototype.expect=function(r){throw new Error("".concat(r," - Error: ").concat(E(this.error),`
`).concat(this._stack),{cause:this.error})},e.prototype.expectErr=function(r){return this.error},e.prototype.unwrap=function(){throw new Error("Tried to unwrap Error: ".concat(E(this.error),`
`).concat(this._stack),{cause:this.error})},e.prototype.unwrapErr=function(){return this.error},e.prototype.map=function(r){return this},e.prototype.andThen=function(r){return this},e.prototype.mapErr=function(r){return new N(r(this.error))},e.prototype.mapOr=function(r,t){return r},e.prototype.mapOrElse=function(r,t){return r(this.error)},e.prototype.or=function(r){return r},e.prototype.orElse=function(r){return r(this.error)},e.prototype.toOption=function(){return d},e.prototype.toString=function(){return"Err(".concat(E(this.error),")")},Object.defineProperty(e.prototype,"stack",{get:function(){return"".concat(this,`
`).concat(this._stack)},enumerable:!1,configurable:!0}),e.prototype.toAsyncResult=function(){return new H(this)},e.EMPTY=new e(void 0),e}();var N=ye,Ae=function(){function e(r){if(!(this instanceof e))return new e(r);this.value=r}return e.prototype.isOk=function(){return!0},e.prototype.isErr=function(){return!1},e.prototype[Symbol.iterator]=function(){var r=Object(this.value);return Symbol.iterator in r?r[Symbol.iterator]():{next:function(){return{done:!0,value:void 0}}}},e.prototype.else=function(r){return this.value},e.prototype.unwrapOr=function(r){return this.value},e.prototype.expect=function(r){return this.value},e.prototype.expectErr=function(r){throw new Error(r)},e.prototype.unwrap=function(){return this.value},e.prototype.unwrapErr=function(){throw new Error("Tried to unwrap Ok: ".concat(E(this.value)),{cause:this.value})},e.prototype.map=function(r){return new C(r(this.value))},e.prototype.andThen=function(r){return r(this.value)},e.prototype.mapErr=function(r){return this},e.prototype.mapOr=function(r,t){return t(this.value)},e.prototype.mapOrElse=function(r,t){return t(this.value)},e.prototype.or=function(r){return this},e.prototype.orElse=function(r){return this},e.prototype.toOption=function(){return y(this.value)},e.prototype.safeUnwrap=function(){return this.value},e.prototype.toString=function(){return"Ok(".concat(E(this.value),")")},e.prototype.toAsyncResult=function(){return new H(this)},e.EMPTY=new e(void 0),e}();var C=Ae,j;(function(e){function r(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];for(var c=[],i=0,h=n;i<h.length;i++){var A=h[i];if(A.isOk())c.push(A.value);else return A}return new C(c)}e.all=r;function t(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];for(var c=[],i=0,h=n;i<h.length;i++){var A=h[i];if(A.isOk())return A;c.push(A.error)}return new N(c)}e.any=t;function u(n){try{return new C(n())}catch(a){return new N(a)}}e.wrap=u;function l(n){try{return n().then(function(a){return new C(a)}).catch(function(a){return new N(a)})}catch(a){return Promise.resolve(new N(a))}}e.wrapAsync=l;function o(n){return n instanceof N||n instanceof C}e.isResult=o})(j||(j={}));var z=function(e,r,t,u){function l(o){return o instanceof t?o:new t(function(n){n(o)})}return new(t||(t=Promise))(function(o,n){function a(h){try{i(u.next(h))}catch(A){n(A)}}function c(h){try{i(u.throw(h))}catch(A){n(A)}}function i(h){h.done?o(h.value):l(h.value).then(a,c)}i((u=u.apply(e,r||[])).next())})},U=function(e,r){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},u,l,o,n;return n={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(n[Symbol.iterator]=function(){return this}),n;function a(i){return function(h){return c([i,h])}}function c(i){if(u)throw new TypeError("Generator is already executing.");for(;n&&(n=0,i[0]&&(t=0)),t;)try{if(u=1,l&&(o=i[0]&2?l.return:i[0]?l.throw||((o=l.return)&&o.call(l),0):l.next)&&!(o=o.call(l,i[1])).done)return o;switch(l=0,o&&(i=[i[0]&2,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return t.label++,{value:i[1],done:!1};case 5:t.label++,l=i[1],i=[0];continue;case 7:i=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(i[0]===6||i[0]===2)){t=0;continue}if(i[0]===3&&(!o||i[1]>o[0]&&i[1]<o[3])){t.label=i[1];break}if(i[0]===6&&t.label<o[1]){t.label=o[1],o=i;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(i);break}o[2]&&t.ops.pop(),t.trys.pop();continue}i=r.call(e,t)}catch(h){i=[6,h],l=0}finally{u=o=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},H=function(){function e(r){this.promise=Promise.resolve(r)}return e.prototype.andThen=function(r){var t=this;return this.thenInternal(function(u){return z(t,void 0,void 0,function(){var l;return U(this,function(o){return u.isErr()?[2,u]:(l=r(u.value),[2,l instanceof e?l.promise:l])})})})},e.prototype.map=function(r){var t=this;return this.thenInternal(function(u){return z(t,void 0,void 0,function(){var l;return U(this,function(o){switch(o.label){case 0:return u.isErr()?[2,u]:(l=C,[4,r(u.value)]);case 1:return[2,l.apply(void 0,[o.sent()])]}})})})},e.prototype.thenInternal=function(r){return new e(this.promise.then(r))},e}();function v(e){return Object.assign(e.prototype,{find:function(r){for(let t of this)if(r(t))return y(t);return d},count:function(r){return this.reduce((t,u)=>(r(u)&&t++,t),0)},reduce:function(r,t){let u=t;for(let l of this)u=r(u,l);return u},every:function(r){return!this.any(t=>!r(t))},any:function(r){for(let t of this)if(r(t))return!0;return!1},map:function(r){return this.filterMap(t=>y(r(t)))},filter:function(r){return this.filterMap(t=>r(t)?y(t):d)},enumerate:function(){let r=this;return v(function*(){let t=0;for(let u of r)yield[t,u],t++})()},filterMap:function(r){let t=this;return v(function*(){for(let u of t){let l=r(u);l.isSome()&&(yield l.unwrap())}})()},sort:function(r){let t=this.toArray();return t.sort(r),t},toArray:function(){return[...this]}}),e}Array.prototype.as_iter||(Array.prototype.as_iter=function(){let e=this;return v(function*(){for(let r of e)yield r})()});Set.prototype.as_iter||(Set.prototype.as_iter=function(){let e=this;return v(function*(){for(let r of e)yield r})()});Map.prototype.as_iter||(Map.prototype.as_iter=function(){let e=this;return v(function*(){for(let r of e)yield r})()});var O=/.^/,J={Av1:{name:"Av1",type:"video",mimetype:/av01.*/i,defacto_container:"WebM"},H264:{name:"H264",type:"video",mimetype:/avc1.*/i,defacto_container:"Mp4"},H263:{name:"H263",type:"video",mimetype:O,defacto_container:"3gp"},H265:{name:"H265",type:"video",mimetype:/(hvc1|hevc|h265|h\.265).*/i,defacto_container:"Mp4"},MP4V:{name:"MP4V",type:"video",mimetype:/mp4v\.20.*/i,defacto_container:"Mp4"},MPEG1:{name:"MPEG1",type:"video",mimetype:O,defacto_container:"Mpeg"},MPEG2:{name:"MPEG2",type:"video",mimetype:O,defacto_container:"Mpeg"},Theora:{name:"Theora",type:"video",mimetype:/theora/i,defacto_container:"Ogg"},VP8:{name:"VP8",type:"video",mimetype:/vp0?8.*/i,defacto_container:"WebM"},VP9:{name:"VP9",type:"video",mimetype:/vp0?9.*/i,defacto_container:"WebM"},unknown:{name:"unknown",type:"video",mimetype:O,defacto_container:"Mp4"}},B={AAC:{name:"AAC",type:"audio",mimetype:/(aac|mp4a.40).*/i,defacto_container:"Mp4"},PCM:{name:"PCM",type:"audio",mimetype:/pcm.*/i,defacto_container:"Wav"},FLAC:{name:"FLAC",type:"audio",mimetype:/flac/i,defacto_container:"Flac"},MP3:{name:"MP3",type:"audio",mimetype:/(\.?mp3|mp4a\.69|mp4a\.6b).*/i,defacto_container:"Mpeg"},Opus:{name:"Opus",type:"audio",mimetype:/(opus|(mp4a\.ad.*))/i,defacto_container:"Ogg"},Vorbis:{name:"Vorbis",type:"audio",mimetype:/vorbis/i,defacto_container:"Ogg"},Wav:{name:"Wav",type:"audio",mimetype:O,defacto_container:"Wav"},unknown:{name:"unknown",type:"audio",mimetype:O,defacto_container:"Mp4"}},K=v(function*(){for(let e of Object.keys(J))yield J[e]}),Y=v(function*(){for(let e of Object.keys(B))yield B[e]});var Z={M2TS:{name:"M2TS",extension:"mt2s",audio_only_extension:"mp3",defacto_codecs:{audio:d,video:d},supported_video_codecs:["H264","H265","Av1","MP4V","MPEG2","VP9","unknown"],supported_audio_codecs:["Opus","MP3","FLAC","AAC"],mimetype:/(?:x-)?flv/i},MP2T:{name:"MP2T",extension:"mp2t",audio_only_extension:"mp3",defacto_codecs:{audio:y("MP3"),video:y("H264")},supported_video_codecs:["MPEG2","MPEG1"],supported_audio_codecs:["MP3"],mimetype:/(?:x-)?mp2t/i},Flash:{name:"Flash",extension:"flv",audio_only_extension:"mp3",defacto_codecs:{audio:d,video:d},supported_video_codecs:["H264"],supported_audio_codecs:["AAC"],mimetype:/(?:x-)?flv/i},Mp4:{name:"Mp4",extension:"mp4",audio_only_extension:"mp3",defacto_codecs:{audio:d,video:d},supported_video_codecs:["H264","H265","Av1","MP4V","MPEG2","unknown"],supported_audio_codecs:["Opus","MP3","FLAC","AAC","unknown"],mimetype:/(?:x-)?mp4/i},M4V:{name:"M4V",extension:"m4v",audio_only_extension:"mp3",defacto_codecs:{audio:d,video:d},supported_video_codecs:["H264","H265","Av1","MP4V","MPEG2"],supported_audio_codecs:["Opus","MP3","FLAC","AAC"],mimetype:/(?:x-)?m4v/i},Flac:{name:"Flac",extension:"flac",audio_only_extension:"flac",defacto_codecs:{audio:y("FLAC"),video:d},supported_video_codecs:[],supported_audio_codecs:["FLAC"],mimetype:/(?:x-)?flac/i},Mpeg:{name:"Mpeg",extension:"mpeg",audio_only_extension:"mp3",defacto_codecs:{audio:y("MP3"),video:y("H264")},supported_video_codecs:["MPEG2","MPEG1"],supported_audio_codecs:["MP3"],mimetype:/(?:x-)?mpeg/i},Ogg:{name:"Ogg",extension:"ogv",audio_only_extension:"oga",defacto_codecs:{audio:d,video:d},supported_video_codecs:["VP9","VP8","Theora"],supported_audio_codecs:["Opus","Vorbis","FLAC"],mimetype:/(?:x-)?og./i},Wav:{name:"Wav",extension:"wav",audio_only_extension:"wav",defacto_codecs:{audio:y("Wav"),video:d},supported_video_codecs:[],supported_audio_codecs:["Wav","PCM"],mimetype:/(?:x-)?(?:pn-)?wave?/i},Mkv:{name:"Mkv",extension:"mkv",audio_only_extension:"mp3",defacto_codecs:{audio:d,video:d},supported_video_codecs:K().filter(e=>e.name!="unknown").map(e=>e.name).toArray(),supported_audio_codecs:Y().filter(e=>e.name!="unknown").map(e=>e.name).toArray(),mimetype:/(?:x-)?matroska/i},"3gp":{name:"3gp",extension:"3gpp",audio_only_extension:"mp3",defacto_codecs:{audio:d,video:d},supported_video_codecs:["H264","H263","MP4V","VP8"],supported_audio_codecs:["MP3","AAC"],mimetype:/(?:x-)?3gpp2?/i},QuickTime:{name:"QuickTime",extension:"mov",audio_only_extension:"mp3",defacto_codecs:{audio:d,video:d},supported_video_codecs:["MPEG1","MPEG2"],supported_audio_codecs:[],mimetype:/(?:x-)?mov/i},WebM:{name:"WebM",extension:"webm",audio_only_extension:"oga",defacto_codecs:{audio:d,video:d},supported_video_codecs:["H264","VP8","VP9","Av1"],supported_audio_codecs:["Opus","Vorbis"],mimetype:/(?:x-)?webm/i}},_e=v(function*(){for(let e of Object.keys(Z))yield e}),lr=v(function*(){for(let e of _e())yield Z[e]});var X={240:{id:"240",loose_name:"Small"},360:{id:"360",loose_name:"SD"},480:{id:"480",loose_name:"SD"},720:{id:"720",loose_name:"HD"},1080:{id:"1080",loose_name:"FullHD"},1440:{id:"1440",loose_name:"UHD"},2160:{id:"2160",loose_name:"UHD"},4320:{id:"4320",loose_name:"UHD"}};var xe=v(function*(){for(let e of Object.keys(X))yield e}),fr=v(function*(){for(let e of xe())yield X[e]});var R="user_media_preferences";var te=fe(re(),1);async function ne(e){await te.storage.local.remove(e)}weh.is_safe.then(()=>{let e=combineReducers({prefs:prefsSettingsReducer}),r=createStore(e);listenPrefs(r);function t(...o){return()=>{weh.rpc.call(...o)}}let u={renderInput:function(){var o=this;return React.createElement("div",{className:"input-group",id:"weh-param-"+o.paramIndex},React.createElement("input",{ref:n=>{n&&(n.value=o.state.value)},onChange:u.onChange.bind(o),className:"form-control"}),React.createElement("span",{className:"input-group-btn"},React.createElement("button",{className:"btn",onClick:()=>u.selectDirectory.call(o)},weh._("change"))))},selectDirectory:function(){var o=this;weh.rpc.call("selectDirectory",this.state.value).then(n=>{n&&o.setCustomValue(n.directory)})},onChange:function(o){var n=this,a=o.target;weh.rpc.call("coappProxy","path.homeJoin",a.value).then(c=>(a.value=c,n.setCustomValue(c),weh.rpc.call("coappProxy","fs.stat",c))).then(c=>{if(!c||c.mode&!1)throw new Error;a.style.backgroundColor="#e8ffe8"}).catch(()=>{a.style.backgroundColor="#ffe8e8"})}};class l extends React.Component{constructor(n){super(n),this.state={activeTab:"general",moreOpen:!1,conversion:void 0,modal:null},this.fileInputChange=this.fileInputChange.bind(this)}setActiveTab(n){this.setState({activeTab:n,conversion:!1})}local(n,...a){var c=this;return()=>{c[n].apply(c,a)}}toggleMore(){var n=this;return()=>{n.setState({moreOpen:!n.state.moreOpen})}}closeModal(){this.setState({modal:null})}conversion(){var n=this;return()=>{n.setState({activeTab:"general",conversion:!0})}}reloadAddon(){var n=this;return()=>{n.setState({modal:{title:weh._("confirmation_required"),body:weh._("reload_addon_confirm"),buttons:[{text:weh._("cancel"),color:"secondary",click:(()=>{this.closeModal()}).bind(n)},{text:weh._("reload_addon"),color:"danger",click:(()=>{weh.rpc.call("reloadAddon"),this.closeModal()}).bind(n)}]}})}}import(){var n=this;return()=>{n.fileInput.click()}}reset(){var n=this,a={prefs:!0,backlist:!1,outputconfigs:!1};function c(i){return h=>{a[i]=h.target.checked}}return()=>{n.setState({modal:{title:weh._("reset_settings"),body:React.createElement("div",{className:"reset-settings"},React.createElement("div",{className:"form-group row"},React.createElement("input",{defaultChecked:a.prefs,onChange:c("prefs"),className:"form-control",type:"checkbox",id:"reset-prefs"}),React.createElement("label",{className:"col-8 col-form-label",htmlFor:"reset-prefs"},weh._("preferences"))),React.createElement("div",{className:"form-group row"},React.createElement("input",{defaultChecked:a.blacklist,onChange:c("blacklist"),className:"form-control",type:"checkbox",id:"reset-blacklist"}),React.createElement("label",{className:"col-8 col-form-label",htmlFor:"reset-blacklist"},weh._("blacklist"))),React.createElement("div",{className:"form-group row"},React.createElement("input",{defaultChecked:a.smartnaming,onChange:c("smartnaming"),className:"form-control",type:"checkbox",id:"reset-smartnaming"}),React.createElement("label",{className:"col-8 col-form-label",htmlFor:"reset-smartnaming"},weh._("smartnaming_rules"))),React.createElement("div",{className:"form-group row"},React.createElement("input",{defaultChecked:a.outputconfigs,onChange:c("outputconfigs"),className:"form-control",type:"checkbox",id:"reset-outputconfigs"}),React.createElement("label",{className:"col-8 col-form-label",htmlFor:"reset-outputconfigs"},weh._("conversion_outputs"))),React.createElement("div",{className:"form-group row"},React.createElement("input",{defaultChecked:a.convrules,onChange:c("convrules"),className:"form-control",type:"checkbox",id:"reset-convrules"}),React.createElement("label",{className:"col-8 col-form-label",htmlFor:"reset-convrules"},weh._("conversion_rules"))),React.createElement("div",{className:"form-group row"},React.createElement("input",{defaultChecked:a[R],onChange:c(R),className:"form-control",type:"checkbox",id:"reset-media-user-prefs"}),React.createElement("label",{className:"col-8 col-form-label",htmlFor:"reset-media-user-prefs"},weh._("video_qualities"))),React.createElement("div",{className:"form-group row"},React.createElement("input",{defaultChecked:a.license,onChange:c("license"),className:"form-control",type:"checkbox",id:"reset-license"}),React.createElement("label",{className:"col-8 col-form-label",htmlFor:"reset-license"},weh._("license")))),buttons:[{text:weh._("cancel"),color:"secondary",click:(()=>{this.closeModal()}).bind(n)},{text:weh._("reset_settings"),color:"danger",click:(()=>{this.doReset(a),this.closeModal()}).bind(n)}]}})}}doReset(n){n.prefs&&(r.dispatch({type:"PREFS_RESET"}),r.dispatch({type:"PREFS_UPDATED",payload:{}}),r.dispatch({type:"PREFS_SAVE",payload:{}})),n.blacklist&&weh.rpc.call("setBlacklist",{}),n.smartnaming&&weh.rpc.call("setSmartName",{}),n.outputconfigs&&weh.rpc.call("setOutputConfigs",{}),n.convrules&&weh.rpc.call("setConversionRules",[]),n[R]&&ne(R),n.license&&weh.rpc.call("setLicense",null)}fileInputChange(n){var a=this,c=a.fileInput.files[0];if(c){var i=new FileReader;i.onload=h=>{try{var A=JSON.parse(h.target.result);weh.rpc.call("importSettings",A).then(k=>{Object.keys(k).forEach(M=>{r.dispatch({type:"PREF_UPDATE",payload:{prefName:M,value:k[M]}})})})}catch{a.setState({modal:{title:weh._("error"),body:weh._("import_invalid_format"),buttons:[{text:weh._("continue"),color:"secondary",click:(()=>{this.closeModal()}).bind(a)}]}})}},i.readAsText(c)}}setFileInput(n){var a=this;return c=>{c&&c.removeEventListener("change",a.fileInputChange),a.fileInput=c,c&&c.addEventListener("change",a.fileInputChange)}}renderTabGeneral(){return React.createElement(TabPane,{tabId:"general"},!this.state.conversion&&React.createElement("div",null,React.createElement(CopyButton,null),React.createElement(AddonInfoPanel,null),React.createElement(PlatformInfoPanel,null),React.createElement(CoAppInfoPanel,null)),React.createElement(LicInfoPanel,{open:this.state.conversion}))}renderTabAppearance(){return React.createElement(TabPane,{tabId:"appearance"},React.createElement(WehParam,{prefName:"titleMode"}),React.createElement(WehParam,{prefName:"iconActivation"}),React.createElement(WehParam,{prefName:"iconBadge"}),React.createElement(WehParam,{prefName:"hitsGotoTab"}),React.createElement(WehParam,{prefName:"notifyReady"}),React.createElement(WehParam,{prefName:"noPrivateNotification"}),React.createElement(WehParam,{prefName:"fileDialogType"}),React.createElement(WehParam,{prefName:"alertDialogType"}),React.createElement(WehParam,{prefName:"dialogAutoClose"}),React.createElement(WehParam,{prefName:"contextMenuEnabled"}),weh.isBrowser("firefox")&&React.createElement(WehParam,{prefName:"toolsMenuEnabled"}))}renderTabBehavior(){return React.createElement(TabPane,{tabId:"behavior"},React.createElement(WehParam,{prefName:"coappDownloads"}),React.createElement(WehParam,{prefName:"lastDownloadDirectory",renderInput:u.renderInput}),React.createElement(WehParam,{prefName:"rememberLastDir"}),React.createElement(WehParam,{prefName:"networkProbe"}),React.createElement(WehParam,{prefName:"use_native_filepicker"}),React.createElement(WehParam,{prefName:"monitorNetworkRequests"}),React.createElement(WehParam,{prefName:"smartnamerFnameSpaces"}),React.createElement(WehParam,{prefName:"smartnamerFnameMaxlen"}),React.createElement(WehParam,{prefName:"downloadControlledMax"}),React.createElement(WehParam,{prefName:"downloadStreamControlledMax"}),React.createElement(WehParam,{prefName:"convertControlledMax"}),React.createElement(WehParam,{prefName:"autoPin"}),React.createElement(WehParam,{prefName:"mediaExtensions"}),React.createElement(WehParam,{prefName:"coappRestartDelay"}),React.createElement(WehParam,{prefName:"coappIdleExit"}),React.createElement(WehParam,{prefName:"dashHideM4s"}),React.createElement(WehParam,{prefName:"mpegtsHideTs"}),React.createElement(WehParam,{prefName:"orphanExpiration"}),React.createElement(WehParam,{prefName:"chunksEnabled"}),React.createElement(WehParam,{prefName:"hlsEnabled"}),React.createElement(WehParam,{prefName:"dashEnabled"}),React.createElement(WehParam,{prefName:"dashOnAdp"}),React.createElement(WehParam,{prefName:"hlsDownloadAsM2ts"}),React.createElement(WehParam,{prefName:"hlsRememberPrevLiveChunks"}),React.createElement(WehParam,{prefName:"hlsEndTimeout"}),React.createElement(WehParam,{prefName:"chunkedCoappManifestsRequests"}),React.createElement(WehParam,{prefName:"chunkedCoappDataRequests"}),React.createElement(WehParam,{prefName:"coappUseProxy"}),React.createElement(WehParam,{prefName:"checkCoappOnStartup"}),React.createElement(WehParam,{prefName:"networkFilterOut"}),React.createElement(WehParam,{prefName:"mediaweightThreshold"}),React.createElement(WehParam,{prefName:"mediaweightMinSize"}),React.createElement(WehParam,{prefName:"converterThreads"}),React.createElement(WehParam,{prefName:"converterAggregTuneH264"}),React.createElement(WehParam,{prefName:"avplayEnabled"}),React.createElement(WehParam,{prefName:"blacklistEnabled"}),React.createElement(WehParam,{prefName:"chunksConcurrentDownloads"}),React.createElement(WehParam,{prefName:"chunksPrefetchCount"}),React.createElement(WehParam,{prefName:"downloadRetries"}),React.createElement(WehParam,{prefName:"downloadRetryDelay"}),React.createElement(WehParam,{prefName:"converterKeepTmpFiles"}),React.createElement(WehParam,{prefName:"contentRedirectEnabled"}),React.createElement(WehParam,{prefName:"bulkEnabled"}),React.createElement(WehParam,{prefName:"galleryNaming"}),React.createElement(WehParam,{prefName:"tbvwsExtractionMethod"}))}renderTabGallery(){return React.createElement(TabPane,{tabId:"gallery"},React.createElement(WehParam,{prefName:"medialinkAutoDetect"}),React.createElement(WehParam,{prefName:"medialinkMinImgSize"}),React.createElement(WehParam,{prefName:"medialinkMinFilesPerGroup"}),React.createElement(WehParam,{prefName:"medialinkMaxHits"}),React.createElement(WehParam,{prefName:"medialinkExtensions"}),React.createElement(WehParam,{prefName:"medialinkScanImages"}),React.createElement(WehParam,{prefName:"medialinkScanLinks"}))}renderSettings(){return React.createElement("div",null,React.createElement(Nav,{tabs:!0},React.createElement(NavItem,null,React.createElement(NavLink,{href:"#",className:this.state.activeTab==="general"&&!this.state.conversion?"active":"",onClick:this.local("setActiveTab","general")},weh._("general"))),React.createElement(NavItem,null,React.createElement(NavLink,{href:"#",className:this.state.activeTab==="appearance"?"active":"",onClick:this.local("setActiveTab","appearance")},weh._("appearance"))),React.createElement(NavItem,null,React.createElement(NavLink,{href:"#",className:this.state.activeTab==="behavior"?"active":"",onClick:this.local("setActiveTab","behavior")},weh._("behavior"))),React.createElement(Dropdown,{nav:!0,isOpen:this.state.moreOpen,toggle:this.toggleMore()},React.createElement(DropdownToggle,{nav:!0,caret:!0},weh._("more")),React.createElement(DropdownMenu,null,React.createElement(DropdownItem,{onClick:this.local("setActiveTab","gallery")},weh._("gallery")),React.createElement(DropdownItem,{onClick:t("editConverterConfigs")},weh._("conversion_outputs")),React.createElement(DropdownItem,{onClick:t("editConversionRules")},weh._("conversion_rules")),React.createElement(DropdownItem,{onClick:t("editBlacklist")},weh._("blacklist")),React.createElement(DropdownItem,{onClick:t("editSmartName")},weh._("smartnaming_rules")),React.createElement(DropdownItem,{onClick:t("editMediaUserPrefs")},weh._("video_qualities")),React.createElement(DropdownItem,{onClick:this.conversion()},weh._("licensing")),React.createElement(DropdownItem,{onClick:t("openTranslation")},weh._("translation")),weh.unsafe_prefs.coappShellEnabled&&React.createElement(DropdownItem,{onClick:t("openCoapp")},weh._("coapp")),React.createElement(DropdownItem,{divider:!0}),React.createElement(DropdownItem,{onClick:t("exportSettings")},weh._("export")),React.createElement(DropdownItem,{onClick:this.import()},weh._("import")),React.createElement(DropdownItem,{onClick:this.reloadAddon()},weh._("reload_addon")),React.createElement(DropdownItem,{onClick:this.reset()},weh._("reset_settings"))))),React.createElement(TabContent,{activeTab:this.state.activeTab},this.renderTabGeneral(),this.renderTabAppearance(),this.renderTabBehavior(),this.renderTabGallery()))}renderPrefsControls(){return React.createElement("div",{className:"btn-toolbar justify-content-end"},React.createElement("div",{className:"btn-group pull-right"},React.createElement("button",{type:"button",onClick:this.props.cancel,className:"btn btn-default "+(this.props.flags.isModified?"":"disabled")},weh._("cancel")),React.createElement("button",{type:"button",onClick:this.props.reset,className:"btn btn-warning "+(this.props.flags.isDefault?"disabled":"")},weh._("default")),React.createElement("button",{type:"button",onClick:this.props.save,className:"btn btn-primary "+(this.props.flags.isModified&&this.props.flags.isValid?"":"disabled")},weh._("save"))))}render(){return React.createElement(PrefsSettingsApp,null,React.createElement(WehHeader,null),React.createElement("main",null,React.createElement("div",{className:"container settings"},React.createElement("section",null,this.renderSettings()))),this.state.activeTab!="general"&&React.createElement("footer",null,React.createElement(WehPrefsControls,{render:this.renderPrefsControls})),React.createElement("input",{type:"file",style:{display:"none"},accept:"application/json",ref:this.setFileInput()}),React.createElement(VDHModal,{modalData:this.state.modal,close:this.closeModal.bind(this)}))}}render(React.createElement(Provider,{store:r},React.createElement(l,null)),document.getElementById("root")),weh.setPageTitle(weh._("settings"))});})();