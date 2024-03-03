"use strict";(()=>{var M=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var I=M((ut,D)=>{D.exports={prod:!0,channel:"stable",buildDate:"2024-02-19",buildOptions:{linuxlic:!1,noyt:!0,target:"google",browser:"chrome"}}});function T(r){var e=String(r);if(e==="[object Object]")try{e=JSON.stringify(r)}catch{}return e}var C=function(){function r(){}return r.prototype.isSome=function(){return!1},r.prototype.isNone=function(){return!0},r.prototype[Symbol.iterator]=function(){return{next:function(){return{done:!0,value:void 0}}}},r.prototype.unwrapOr=function(e){return e},r.prototype.expect=function(e){throw new Error("".concat(e))},r.prototype.unwrap=function(){throw new Error("Tried to unwrap None")},r.prototype.map=function(e){return this},r.prototype.mapOr=function(e,o){return e},r.prototype.mapOrElse=function(e,o){return e()},r.prototype.or=function(e){return e},r.prototype.orElse=function(e){return e()},r.prototype.andThen=function(e){return this},r.prototype.toResult=function(e){return y(e)},r.prototype.toString=function(){return"None"},r}(),b=new C;Object.freeze(b);var H=function(){function r(e){if(!(this instanceof r))return new r(e);this.value=e}return r.prototype.isSome=function(){return!0},r.prototype.isNone=function(){return!1},r.prototype[Symbol.iterator]=function(){var e=Object(this.value);return Symbol.iterator in e?e[Symbol.iterator]():{next:function(){return{done:!0,value:void 0}}}},r.prototype.unwrapOr=function(e){return this.value},r.prototype.expect=function(e){return this.value},r.prototype.unwrap=function(){return this.value},r.prototype.map=function(e){return v(e(this.value))},r.prototype.mapOr=function(e,o){return o(this.value)},r.prototype.mapOrElse=function(e,o){return o(this.value)},r.prototype.or=function(e){return this},r.prototype.orElse=function(e){return this},r.prototype.andThen=function(e){return e(this.value)},r.prototype.toResult=function(e){return m(this.value)},r.prototype.safeUnwrap=function(){return this.value},r.prototype.toString=function(){return"Some(".concat(T(this.value),")")},r.EMPTY=new r(void 0),r}(),v=H,E;(function(r){function e(){for(var u=[],s=0;s<arguments.length;s++)u[s]=arguments[s];for(var p=[],h=0,n=u;h<n.length;h++){var t=n[h];if(t.isSome())p.push(t.value);else return t}return v(p)}r.all=e;function o(){for(var u=[],s=0;s<arguments.length;s++)u[s]=arguments[s];for(var p=0,h=u;p<h.length;p++){var n=h[p];return n.isSome(),n}return b}r.any=o;function l(u){return u instanceof v||u===b}r.isOption=l})(E||(E={}));var j=function(){function r(e){if(!(this instanceof r))return new r(e);this.error=e;var o=new Error().stack.split(`
`).slice(2);o&&o.length>0&&o[0].includes("ErrImpl")&&o.shift(),this._stack=o.join(`
`)}return r.prototype.isOk=function(){return!1},r.prototype.isErr=function(){return!0},r.prototype[Symbol.iterator]=function(){return{next:function(){return{done:!0,value:void 0}}}},r.prototype.else=function(e){return e},r.prototype.unwrapOr=function(e){return e},r.prototype.expect=function(e){throw new Error("".concat(e," - Error: ").concat(T(this.error),`
`).concat(this._stack),{cause:this.error})},r.prototype.expectErr=function(e){return this.error},r.prototype.unwrap=function(){throw new Error("Tried to unwrap Error: ".concat(T(this.error),`
`).concat(this._stack),{cause:this.error})},r.prototype.unwrapErr=function(){return this.error},r.prototype.map=function(e){return this},r.prototype.andThen=function(e){return this},r.prototype.mapErr=function(e){return new y(e(this.error))},r.prototype.mapOr=function(e,o){return e},r.prototype.mapOrElse=function(e,o){return e(this.error)},r.prototype.or=function(e){return e},r.prototype.orElse=function(e){return e(this.error)},r.prototype.toOption=function(){return b},r.prototype.toString=function(){return"Err(".concat(T(this.error),")")},Object.defineProperty(r.prototype,"stack",{get:function(){return"".concat(this,`
`).concat(this._stack)},enumerable:!1,configurable:!0}),r.prototype.toAsyncResult=function(){return new O(this)},r.EMPTY=new r(void 0),r}();var y=j,R=function(){function r(e){if(!(this instanceof r))return new r(e);this.value=e}return r.prototype.isOk=function(){return!0},r.prototype.isErr=function(){return!1},r.prototype[Symbol.iterator]=function(){var e=Object(this.value);return Symbol.iterator in e?e[Symbol.iterator]():{next:function(){return{done:!0,value:void 0}}}},r.prototype.else=function(e){return this.value},r.prototype.unwrapOr=function(e){return this.value},r.prototype.expect=function(e){return this.value},r.prototype.expectErr=function(e){throw new Error(e)},r.prototype.unwrap=function(){return this.value},r.prototype.unwrapErr=function(){throw new Error("Tried to unwrap Ok: ".concat(T(this.value)),{cause:this.value})},r.prototype.map=function(e){return new m(e(this.value))},r.prototype.andThen=function(e){return e(this.value)},r.prototype.mapErr=function(e){return this},r.prototype.mapOr=function(e,o){return o(this.value)},r.prototype.mapOrElse=function(e,o){return o(this.value)},r.prototype.or=function(e){return this},r.prototype.orElse=function(e){return this},r.prototype.toOption=function(){return v(this.value)},r.prototype.safeUnwrap=function(){return this.value},r.prototype.toString=function(){return"Ok(".concat(T(this.value),")")},r.prototype.toAsyncResult=function(){return new O(this)},r.EMPTY=new r(void 0),r}();var m=R,k;(function(r){function e(){for(var p=[],h=0;h<arguments.length;h++)p[h]=arguments[h];for(var n=[],t=0,i=p;t<i.length;t++){var a=i[t];if(a.isOk())n.push(a.value);else return a}return new m(n)}r.all=e;function o(){for(var p=[],h=0;h<arguments.length;h++)p[h]=arguments[h];for(var n=[],t=0,i=p;t<i.length;t++){var a=i[t];if(a.isOk())return a;n.push(a.error)}return new y(n)}r.any=o;function l(p){try{return new m(p())}catch(h){return new y(h)}}r.wrap=l;function u(p){try{return p().then(function(h){return new m(h)}).catch(function(h){return new y(h)})}catch(h){return Promise.resolve(new y(h))}}r.wrapAsync=u;function s(p){return p instanceof y||p instanceof m}r.isResult=s})(k||(k={}));var S=function(r,e,o,l){function u(s){return s instanceof o?s:new o(function(p){p(s)})}return new(o||(o=Promise))(function(s,p){function h(i){try{t(l.next(i))}catch(a){p(a)}}function n(i){try{t(l.throw(i))}catch(a){p(a)}}function t(i){i.done?s(i.value):u(i.value).then(h,n)}t((l=l.apply(r,e||[])).next())})},N=function(r,e){var o={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},l,u,s,p;return p={next:h(0),throw:h(1),return:h(2)},typeof Symbol=="function"&&(p[Symbol.iterator]=function(){return this}),p;function h(t){return function(i){return n([t,i])}}function n(t){if(l)throw new TypeError("Generator is already executing.");for(;p&&(p=0,t[0]&&(o=0)),o;)try{if(l=1,u&&(s=t[0]&2?u.return:t[0]?u.throw||((s=u.return)&&s.call(u),0):u.next)&&!(s=s.call(u,t[1])).done)return s;switch(u=0,s&&(t=[t[0]&2,s.value]),t[0]){case 0:case 1:s=t;break;case 4:return o.label++,{value:t[1],done:!1};case 5:o.label++,u=t[1],t=[0];continue;case 7:t=o.ops.pop(),o.trys.pop();continue;default:if(s=o.trys,!(s=s.length>0&&s[s.length-1])&&(t[0]===6||t[0]===2)){o=0;continue}if(t[0]===3&&(!s||t[1]>s[0]&&t[1]<s[3])){o.label=t[1];break}if(t[0]===6&&o.label<s[1]){o.label=s[1],s=t;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(t);break}s[2]&&o.ops.pop(),o.trys.pop();continue}t=e.call(r,o)}catch(i){t=[6,i],u=0}finally{l=s=0}if(t[0]&5)throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}},O=function(){function r(e){this.promise=Promise.resolve(e)}return r.prototype.andThen=function(e){var o=this;return this.thenInternal(function(l){return S(o,void 0,void 0,function(){var u;return N(this,function(s){return l.isErr()?[2,l]:(u=e(l.value),[2,u instanceof r?u.promise:u])})})})},r.prototype.map=function(e){var o=this;return this.thenInternal(function(l){return S(o,void 0,void 0,function(){var u;return N(this,function(s){switch(s.label){case 0:return l.isErr()?[2,l]:(u=m,[4,e(l.value)]);case 1:return[2,u.apply(void 0,[s.sent()])]}})})})},r.prototype.thenInternal=function(e){return new r(this.promise.then(e))},r}();function _(r){return Object.assign(r.prototype,{find:function(e){for(let o of this)if(e(o))return v(o);return b},count:function(e){return this.reduce((o,l)=>(e(l)&&o++,o),0)},reduce:function(e,o){let l=o;for(let u of this)l=e(l,u);return l},every:function(e){return!this.any(o=>!e(o))},any:function(e){for(let o of this)if(e(o))return!0;return!1},map:function(e){return this.filterMap(o=>v(e(o)))},filter:function(e){return this.filterMap(o=>e(o)?v(o):b)},enumerate:function(){let e=this;return _(function*(){let o=0;for(let l of e)yield[o,l],o++})()},filterMap:function(e){let o=this;return _(function*(){for(let l of o){let u=e(l);u.isSome()&&(yield u.unwrap())}})()},sort:function(e){let o=this.toArray();return o.sort(e),o},toArray:function(){return[...this]}}),r}Array.prototype.as_iter||(Array.prototype.as_iter=function(){let r=this;return _(function*(){for(let e of r)yield e})()});Set.prototype.as_iter||(Set.prototype.as_iter=function(){let r=this;return _(function*(){for(let e of r)yield e})()});Map.prototype.as_iter||(Map.prototype.as_iter=function(){let r=this;return _(function*(){for(let e of r)yield e})()});weh.is_safe.then(()=>{let r=new RegExp("([\\d\\.]+)\\s*(\\S+)"),e=new Set;window.addEventListener("unload",()=>{for(let n of e)weh.rpc.call("galleryUnhighlight",n)});let o=I().buildOptions||{};o.browser!="firefox"&&(document.querySelector("html").style.width="500px");function l(){return{active:0,inactive:0,orphan:0,pinned:0,running:0}}function u(n={hits:[],hits_for_current_section:[],progress:{},actionHit:null,actions:{},logs:[],embed:null,maxHeight:void 0},t){switch(t.type){case"setActionHit":n=Object.assign({},n,{actionHit:t.payload});break;case"clearActionHit":n=Object.assign({},n,{actionHit:null,embed:null});break;case"updateData":n=Object.assign({},n,t.payload);break;case"embed":n=Object.assign({},n,{embed:t.payload});break;case"setMaxHeight":n=Object.assign({},n,{maxHeight:t.payload});break}return n}let s=createStore(u);weh.rpc.listen({hits:n=>{s.dispatch({type:"updateData",payload:{hits:n}})},progress:n=>{s.dispatch({type:"updateData",payload:{progress:n}})},logs:n=>{s.dispatch({type:"updateData",payload:{logs:n}})},copyToClipboard:n=>{var t=document.createElement("input");document.body.appendChild(t),t.value=n,t.select(),document.execCommand("Copy"),document.body.removeChild(t)},embed:n=>{s.dispatch({type:"embed",payload:n})}}),weh.prefs.then(n=>{let t=i=>{let a;switch(o.browser){case"chrome":a=590;break;case"edge":a=500;break;default:a=600}browser.windows.getLastFocused().then(c=>{s.dispatch({type:"setMaxHeight",payload:""+Math.min(a,c.height-i)+"px"})})};n.on("popupHeightLeftOver",(i,a)=>t(a)),t(n.popupHeightLeftOver)}),weh.rpc.call("getMainData").then(n=>{s.dispatch({type:"updateData",payload:n})});var p=connect((n,t)=>({hits:n.hits||[],progress:n.progress||{},actionHit:n.actionHit||null,actions:n.actions||{},logs:n.logs||[],embed:n.embed||null,maxHeight:n.maxHeight||void 0}),n=>bindActionCreators({},n))(class extends React.Component{constructor(n){super(n),this.state={section:"active",hits:[],hits_for_current_section:[],counters:l(),actionHit:null},this.call=this.call.bind(this)}componentWillReceiveProps(n){this.buildGroups(n.hits),this.setState({actionHit:n.actionHit})}call(...n){return()=>{weh.rpc.call(...n)}}canClear(){for(let n of this.state.hits)for(let t of n)if(t.status=="active"||t.status=="inactive"||t.status=="orphan")return!0;return!1}buildGroups(n,t){t=t||this.state.section;let i={counters:l()};if(!n){i.hits=[],i.hits_for_current_section=[],this.setState(i);return}for(let c of n)for(let f of c)i.counters[f.status]++;let a=n.as_iter().map(c=>c.as_iter().filter(f=>f.status==t).toArray()).filter(c=>c.length>0).toArray();for(let c of a)c[0].primary=!0;i.hits_for_current_section=a,i.hits=n,this.setState(i)}logDetails(n){return()=>{weh.rpc.call("logDetails",n)}}command(n){var t=this;return i=>{i.stopPropagation();var a=i.shiftKey,c=t.state.actionHit;c&&weh.rpc.call("actionCommand",n,c.id).then(f=>{!a&&!f?n=="copyurl"?setTimeout(()=>window.close(),500):window.close():n=="deletehit"&&s.dispatch({type:"clearActionHit"})}),t.asDefaultInput&&t.asDefaultInput.checked&&(weh.unsafe_prefs["default-action-"+(t.props.actions[n].catPriority||0)]=n)}}renderActions(){if(!this.state.actionHit||this.props.embed)return null;var n=this,t=(this.state.actionHit.actions||[]).map(i=>React.createElement("div",{key:i,className:"vdh-container click action"},React.createElement("div",{onClick:this.command(i)},React.createElement("div",{className:"action-thumbnail"},React.createElement("img",{src:n.props.actions[i].icon})),React.createElement("div",{className:"action-details"},React.createElement("div",{className:"action-title"},n.props.actions[i].title),React.createElement("div",{className:"action-descr"},n.props.actions[i].description)))));return React.createElement("div",{className:"actions"},t,React.createElement("div",{className:"default-check"},React.createElement("input",{id:"checkbox1",type:"checkbox",ref:i=>this.asDefaultInput=i}),React.createElement("label",{htmlFor:"checkbox1"},weh._("action_as_default"))))}renderEmbed(){return this.props.embed?React.createElement(Embedded,{className:"embed",src:this.props.embed}):null}renderLog(){var n=this,t=this.props.logs.map(i=>React.createElement("div",{key:i.key,className:"vdh-log vdh-log-"+i.type},i.videoTitle&&React.createElement("div",{className:"log-video-title"},i.videoTitle),i.message,i.details&&React.createElement("a",{onClick:n.logDetails(i.key),href:"#"},weh._("details_parenthesis"))));return React.createElement("div",{className:"logs"},t)}renderNoHit(){return this.state.section=="active"?React.createElement("div",{className:"no-media"},React.createElement("h2",null,weh._("no_media_current_tab")),React.createElement("p",null,weh._("no_media_to_process_descr"))):React.createElement("div",{className:"no-media"},React.createElement("h2",null,weh._("no_media_to_process")))}renderHits(){if(this.state.section=="log")return this.renderLog();if(this.state.hits_for_current_section.length==0)return this.renderNoHit();let n=this;return React.createElement("div",{className:"has-media"},this.state.hits_for_current_section.map(t=>{let i=t[0],a=t.length==1,c=i.thumbnailUrl??i.thumbnail??"./images/no-thumbnail.png";return React.createElement("div",{key:i.group,className:(a?"hit-group-single":"")+" hit-group"},React.createElement("div",{className:"hit-thumbnail"},React.createElement("img",{src:c})),React.createElement("div",null,t.map(f=>{let g=n.props.actions[f.actions[0]],d=n.props.progress[f.id];return React.createElement(h,{key:f.id,hit:f,progress:d,defaultAction:g})})))}))}renderFooterButtons(){return React.createElement("div",{className:"buttons"},React.createElement("div",{className:"buttons-container"},React.createElement("div",{className:"buttons-opener"},React.createElement("img",{src:"images/icon-3dots-64.png"})),React.createElement("button",{onClick:this.call("openAbout"),title:weh._("about")},React.createElement("img",{src:"images/icon-about-64.png"})),o.browser=="firefox"&&React.createElement("button",{onClick:this.call("openSites"),title:weh._("supported_sites")},React.createElement("img",{src:"images/icon-sites-list-64.png"})),React.createElement("button",{onClick:this.call("analyzePage"),title:weh._("analyze_page")},React.createElement("img",{src:"images/icon-photo-64.png"})),React.createElement("button",{onClick:this.call("convertLocal"),title:weh._("convert_local_files")},React.createElement("img",{src:"images/icon-action-convert-b-64.png"})),React.createElement("button",{onClick:this.call("mergeLocal"),title:weh._("merge_local_files")},React.createElement("img",{src:"images/icon-merger-64.png"})),React.createElement("div",{className:"separator"}),React.createElement("div",{className:"separator"},"\xA0"),this.canClear()&&React.createElement("button",{onClick:this.call("clearHits","all"),title:weh._("clear_hits")},React.createElement("img",{src:"images/icon-action-delete-64.png"}))))}setSection(n){var t=this;return()=>{t.buildGroups(t.state.hits,n),t.setState({section:n})}}clearLogs(){var n=this;return()=>{weh.rpc.call("clearLogs").then(n.setSection("active"))}}shouldDisplayGroupText(n){if(this.state.section==n||n=="log"&&this.props.logs.length==0)return!1;for(var t=Object.keys(this.state.counters),i=0;i<t.length;i++){var a=t[i],c=this.state.counters[a];if(a==n&&c==0||a!=n&&a!=this.state.section&&c>0)return!1}return!(n!="log"&&this.props.logs.length>0)}showGroupBadge(n,t){var i="",a=0,c=n;if(this.state.section==n)return null;if(n=="log"){if(a=this.props.logs.length,a==0)return null;var f=this.props.logs.filter(g=>g.type=="error");f.length>0?(i=weh._("errors"),a=f.length,n="error"):i=weh._("logs")}else{if(this.state.counters[n]==0)return;i=weh._(t),a=this.state.counters[n]}return React.createElement("div",{className:"click group group-"+n,onClick:this.setSection(c),title:i},React.createElement("div",null,React.createElement("div",null,a)))}showGroupText(n,t){if(this.shouldDisplayGroupText(n)){var i=this.props.logs.filter(a=>a.type=="error").length;return n=="log"&&i>0&&(t="errors"),React.createElement("div",{className:"click group-text",onClick:this.setSection(n)},weh._(t))}else return null}renderFooterGroups(){return React.createElement("div",{className:"groups"},this.showGroupBadge("active","in_current_tab"),this.showGroupText("active","in_current_tab"),this.showGroupBadge("inactive","in_other_tab"),this.showGroupText("inactive","in_other_tab"),this.showGroupBadge("orphan","orphan"),this.showGroupText("orphan","orphan"),this.showGroupBadge("pinned","pinned"),this.showGroupText("pinned","pinned"),this.showGroupBadge("running","running"),this.showGroupText("running","running"),this.showGroupBadge("log","logs"),this.showGroupText("log","logs"))}renderFooter(){return React.createElement("footer",null,React.createElement("div",{className:"right-side"},React.createElement("div",{className:"separator"},"\xA0"),React.createElement("button",{onClick:this.call("openSettings"),title:weh._("settings")},React.createElement("img",{src:"images/icon-settings-64.png"}))),this.renderFooterButtons(),this.renderFooterGroups())}clearActionHit(){return()=>{s.dispatch({type:"clearActionHit"})}}render(){return React.createElement("div",{className:"main-panel "+((this.state.actionHit||this.props.embed)&&"actions-open "||" ")},this.renderActions(),this.renderEmbed(),React.createElement("div",{className:"main-content section-"+this.state.section,style:{maxHeight:this.props.maxHeight}},React.createElement("img",{className:"click back-active",onClick:this.setSection("active"),src:"images/icon-chevron-left-64.png"}),this.state.section=="log"&&React.createElement("img",{className:"click clear-logs",onClick:this.clearLogs(),src:"images/icon-action-delete-64.png",title:weh._("clear_logs")}),React.createElement("div",{className:"click back-margin",onClick:this.setSection("active")}),React.createElement("main",{className:"content-hits"},this.renderHits(),React.createElement("div",{className:"main-content-mask",onClick:this.clearActionHit()})),this.renderFooter()))}});class h extends React.Component{constructor(t){super(t),this.action=this.action.bind(this),this.state={}}componentWillReceiveProps(t){this.orphanTimer||this.updateOrphanTimer(t)}componentDidMount(){this.orphanTimer||this.updateOrphanTimer()}componentWillUnmount(){this.orphanTimer&&(clearTimeout(this.orphanTimer),this.orphanTimer=null)}updateOrphanTimer(t){if(t=t||this.props,this.orphanTimer=null,this.props.hit.status=="orphan"){var i=Date.now(),a=this.props.hit.orphanT0,c=this.props.hit.orphanT;this.setState({orphanTimer:Math.max(0,Math.min(100,100*(c-i)/(c-a)))}),this.orphanTimer=setTimeout(this.updateOrphanTimer.bind(this),1e3)}}action(t){}getClass(){return""}durationString(t){t=~~t;var i=Math.floor(t/3600),a=Math.floor(t%3600/60),c=t%60;return i>0?i+":"+("00"+a).substr(-2)+":"+("00"+c).substr(-2):a+":"+("00"+c).substr(-2)}description(){var t=this.props.hit;if(t.description)return t.description;var i=[];let a=t.operation==="downloading",c=t.raw_bitrate??0;if(a){let d=this.props.progress;if(t.opStartDate&&typeof d=="number"&&d>=0){if(d===1/0)i.push(weh._("live_stream"));else if(i.push(d+"%"),d>0){let x=(Date.now()-t.opStartDate)/d*(100-d);x=Math.max(0,Math.floor(x/1e3)),i.push(this.durationString(x))}}if(c>0){let w="";c<1048576?w=weh._("KB",(~~(10*c/1024)/10).toString())+"/s":w=weh._("MB",(~~(10*c/1048576)/10).toString())+"/s",i.push(w)}}if(!a){if(t.size&&i.push(t.size),t.quality){let w=weh._("quality_"+t.quality);w==""&&(w=t.quality.toUpperCase()),i.push(w)}if(typeof t.duration=="number"&&i.push(this.durationString(t.duration)),t.bitrate){var f=t.bitrate,g="bps";t.bitrate>1e7?(g="Mbps",f=Math.round(t.bitrate/1e6)):t.bitrate>1e6?(g="Mbps",f=Math.round(t.bitrate/1e5)/10):t.bitrate>1e4?(g="Kbps",f=Math.round(t.bitrate/1e3)):t.bitrate>1e3&&(g="Kbps",f=Math.round(t.bitrate/100)/10),i.push(f+g)}let d=this.lengthString();d&&i.push(d),t.extension&&(t.originalExt&&t.originalExt!=t.extension&&i.push(t.originalExt.toUpperCase()+">"+t.extension.toUpperCase()),i.push(t.extension.toUpperCase())),t.descrPrefix&&i.push(t.descrPrefix),t.mediaDomain&&i.push(weh._("from_domain",[t.mediaDomain]))}return i.join(" - ")}lengthString(){var t=this.props.hit;return t.length?t.length>1024*1024?weh._("MB",[Math.round(t.length*10/(1024*1024))/10]):t.length>1024?weh._("KB",[Math.round(t.length*10/1024)/10]):weh._("Bytes",[t.length]):null}titleClass(){var t=["hit-title-text"];return t.push("hit-title-text-"+weh.unsafe_prefs.titleMode),t.join(" ")}progress(){return this.props.progress==1/0?{width:"100%"}:typeof this.props.progress!="number"?{width:"0%"}:{width:this.props.progress+"%"}}orphanTimerStyle(){return{width:(this.state.orphanTimer||100)+"%"}}moreActions(){var t=this;return i=>{i.stopPropagation(),s.dispatch({type:"setActionHit",payload:t.props.hit})}}call(...t){return()=>{weh.rpc.call(...t)}}callDefault(){var t=this;return i=>{i.stopPropagation();var a=i.shiftKey;let c=t.props.hit.actions[0];weh.rpc.call("actionCommand",c,t.props.hit.id).then(f=>{!a&&!f&&(c=="copyurl"?setTimeout(()=>window.close(),500):window.close())})}}onMouseEnter(){var t=this;return()=>{e.add(t.props.hit.selectorAttr),weh.rpc.call("galleryHighlight",t.props.hit.selectorAttr)}}onMouseLeave(){var t=this;return()=>{e.delete(t.props.hit.selectorAttr),weh.rpc.call("galleryUnhighlight",t.props.hit.selectorAttr)}}render(){var t=this.props.hit;return React.createElement("div",{className:"click hit "+this.getClass(),onMouseEnter:t.mouseTrack&&this.onMouseEnter(),onMouseLeave:t.mouseTrack&&this.onMouseLeave(),onClick:this.callDefault()},React.createElement("div",{className:"vdh-container"},React.createElement("div",null,React.createElement("div",{className:"vdh-fullwidth hit-descr"},t.primary&&React.createElement("div",{className:"hit-title"},React.createElement("div",{className:this.titleClass()},t.title)),React.createElement("div",{className:"hit-summary"},this.props.defaultAction&&React.createElement("div",{className:"hit-summary-action",title:this.props.defaultAction.description},React.createElement("div",null,React.createElement("img",{className:"default-action",src:this.props.defaultAction.icon}))),t.primary&&weh.unsafe_prefs.hitsGotoTab&&t.topUrl&&t.status=="inactive"&&React.createElement("img",{className:"hit-descr-button",src:"images/icon-gototab-64.png",title:weh._("hit_go_to_tab"),onClick:this.call("gotoTab",t.topUrl)}),t.operation&&React.createElement("span",{className:"hit-operation"},weh._(t.operation)+" - "),this.description()),t.status=="running"&&React.createElement("div",{className:"hit-progress"},React.createElement("div",{style:this.progress()})),t.status=="orphan"&&React.createElement("div",{className:"hit-progress hit-orphan"},React.createElement("div",{style:this.orphanTimerStyle()}))),React.createElement("div",{className:"click hit-actions",onClick:this.moreActions()},React.createElement("div",null,React.createElement("img",{className:"more-actions",src:"images/icon-3dots-64.png"}))))))}}render(React.createElement(Provider,{store:s},React.createElement(p,null)),document.getElementById("root"))});})();
