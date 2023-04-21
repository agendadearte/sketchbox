import{a as v,j as m}from"./jsx-runtime-670450c2.js";var l={};Object.defineProperty(l,"__esModule",{value:!0});var O=l.ColorPrimaryDark=P=l.ColorPrimaryLight=A=l.ColorPrimaryBase=l.ColorNeutral000=l.ColorNeutral010=l.ColorNeutral020=l.ColorNeutral040=l.ColorNeutral060=l.ColorNeutral080=l.ColorNeutral090=l.ColorNeutral095=l.ColorNeutral100=void 0;l.ColorNeutral100="hsla(200, 10%, 100%, 1)";l.ColorNeutral095="hsla(200, 10%, 95%, 1)";l.ColorNeutral090="hsla(200, 10%, 90%, 1)";l.ColorNeutral080="hsla(200, 10%, 80%, 1)";l.ColorNeutral060="hsla(200, 10%, 60%, 1)";l.ColorNeutral040="hsla(200, 10%, 40%, 1)";l.ColorNeutral020="hsla(200, 10%, 20%, 1)";l.ColorNeutral010="hsla(200, 10%, 10%, 1)";l.ColorNeutral000="hsla(200, 10%, 0%, 1)";var A=l.ColorPrimaryBase="hsla(200, 10%, 10%, 1)",P=l.ColorPrimaryLight="hsla(200, 10%, 40%, 1)";O=l.ColorPrimaryDark="hsla(200, 10%, 0%, 1)";let q=0;const z=Object.create(null),E=["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","columns","counter-increment","counter-reset","flex","flex-grow","flex-positive","flex-shrink","flex-negative","flex-order","font-weight","grid-area","grid-column","grid-column-end","grid-column-span","grid-column-start","grid-row","grid-row-end","grid-row-span","grid-row-start","line-clamp","line-height","opacity","order","orphans","tab-size","widows","z-index","zoom","fill-opacity","flood-opacity","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width"];for(const r of E)for(const e of["-webkit-","-ms-","-moz-","-o-",""])z[e+r]=!0;function M(r){return r.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`).replace(/^ms-/,"-ms-")}function G(r){let e=5381,t=r.length;for(;t--;)e=e*33^r.charCodeAt(t);return(e>>>0).toString(36)}function T(r,e){return e&&typeof e=="number"&&!z[r]?`${r}:${e}px`:`${r}:${e}`}function k(r){return r.sort((e,t)=>e[0]>t[0]?1:-1)}function D(r,e){const t=[],n=[];for(const a of Object.keys(r)){const i=a.trim(),s=r[a];i.charCodeAt(0)!==36&&s!=null&&(typeof s=="object"&&!Array.isArray(s)?n.push([i,s]):t.push([M(i),s]))}return{style:K(k(t)),nested:e?n:k(n),isUnique:!!r.$unique}}function K(r){return r.map(([e,t])=>Array.isArray(t)?t.map(n=>T(e,n)).join(";"):T(e,t)).join(";")}function B(r,e){return r.indexOf("&")===-1?`${e} ${r}`:r.replace(/&/g,e)}function p(r,e,t,n,a){const{style:i,nested:s,isUnique:o}=D(e,r!=="");let u=i;if(r.charCodeAt(0)===64){const c={selector:r,styles:[],rules:[],style:a?"":i};t.push(c),i&&a&&c.styles.push({selector:a,style:i,isUnique:o});for(const[d,h]of s)u+=d+p(d,h,c.rules,c.styles,a)}else{const c=a?B(r,a):r;i&&n.push({selector:c,style:i,isUnique:o});for(const[d,h]of s)u+=d+p(d,h,t,n,c)}return u}function _(r,e,t,n,a,i){for(const{selector:s,style:o,isUnique:u}of n){const c=i?B(s,a):s,d=u?`u\0${(++q).toString(36)}`:`s\0${e}\0${o}`,h=new b(o,d);h.add(new V(c,`k\0${e}\0${c}`)),r.add(h)}for(const{selector:s,style:o,rules:u,styles:c}of t){const d=new w(s,o,`r\0${e}\0${s}\0${o}`);_(d,e,u,c,a,i),r.add(d)}}function L(r){let e="";for(let t=0;t<r.length;t++)e+=r[t];return e}const H={add:()=>{},change:()=>{},remove:()=>{}};class g{constructor(e=H){this.changes=e,this.sheet=[],this.changeId=0,this._keys=[],this._children=Object.create(null),this._counters=Object.create(null)}add(e){const t=this._counters[e.id]||0,n=this._children[e.id]||e.clone();if(this._counters[e.id]=t+1,t===0)this._children[n.id]=n,this._keys.push(n.id),this.sheet.push(n.getStyles()),this.changeId++,this.changes.add(n,this._keys.length-1);else if(n instanceof g&&e instanceof g){const a=this._keys.indexOf(e.id),i=n.changeId;n.merge(e),n.changeId!==i&&(this.sheet.splice(a,1,n.getStyles()),this.changeId++,this.changes.change(n,a,a))}}remove(e){const t=this._counters[e.id];if(t){this._counters[e.id]=t-1;const n=this._children[e.id],a=this._keys.indexOf(n.id);if(t===1)delete this._counters[e.id],delete this._children[e.id],this._keys.splice(a,1),this.sheet.splice(a,1),this.changeId++,this.changes.remove(n,a);else if(n instanceof g&&e instanceof g){const i=n.changeId;n.unmerge(e),n.changeId!==i&&(this.sheet.splice(a,1,n.getStyles()),this.changeId++,this.changes.change(n,a,a))}}}values(){return this._keys.map(e=>this._children[e])}merge(e){for(const t of e.values())this.add(t);return this}unmerge(e){for(const t of e.values())this.remove(t);return this}clone(){return new g().merge(this)}}class V{constructor(e,t){this.selector=e,this.id=t}getStyles(){return this.selector}clone(){return this}}class b extends g{constructor(e,t){super(),this.style=e,this.id=t}getStyles(){return`${this.sheet.join(",")}{${this.style}}`}clone(){return new b(this.style,this.id).merge(this)}}class w extends g{constructor(e,t,n){super(),this.rule=e,this.style=t,this.id=n}getStyles(){return`${this.rule}{${this.style}${L(this.sheet)}}`}clone(){return new w(this.rule,this.style,this.id).merge(this)}}function F(r,e){return`f${G(r)}`}class x extends g{constructor(e,t){super(t),this.id=e}registerStyle(e){const t=[],n=[],a=p("&",e,t,n),i=F(a),s=`.${i}`;return _(this,a,t,n,s,!0),i}registerKeyframes(e){return this.registerHashRule("@keyframes",e)}registerHashRule(e,t){const n=[],a=[],i=p("",t,n,a),s=F(i),o=`${e} ${s}`,u=new w(o,"",`h\0${i}\0${e}`);return _(u,i,n,a,"",!1),this.add(u),s}registerRule(e,t){const n=[],a=[],i=p(e,t,n,a);_(this,i,n,a,"",!1)}registerCss(e){return this.registerRule("",e)}getStyles(){return L(this.sheet)}clone(){return new x(this.id,this.changes).merge(this)}}function W(r){return new x(`f${(++q).toString(36)}`,r)}function $(r){var e={};for(var t in r){var n=r[t];if(t==="$nest"){var a=n;for(var i in a){var s=a[i];e[i]=$(s)}}else t==="$debugName"?e.$displayName=n:e[t]=n}return e}function Y(r){var e={};for(var t in r)t!=="$debugName"&&(e[t]=r[t]);return r.$debugName&&(e.$displayName=r.$debugName),e}var Z=typeof requestAnimationFrame>"u"?function(r){return setTimeout(r)}:typeof window>"u"?requestAnimationFrame:requestAnimationFrame.bind(window);function C(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];for(var t={},n=0,a=r;n<a.length;n++){var i=a[n];if(!(i==null||i===!1))for(var s in i){var o=i[s];!o&&o!==0||(s==="$nest"&&o?t[s]=t.$nest?C(t.$nest,o):o:s.indexOf("&")!==-1||s.indexOf("@media")===0?t[s]=t[s]?C(t[s],o):o:t[s]=o)}}return t}var I=function(){return W()},J=function(){function r(e){var t=this,n=e.autoGenerateTag;this.cssRaw=function(i){i&&(t._raw+=i||"",t._pendingRawChange=!0,t._styleUpdated())},this.cssRule=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];var u=$(C.apply(void 0,s));t._freeStyle.registerRule(i,u),t._styleUpdated()},this.forceRenderStyles=function(){var i=t._getTag();i&&(i.textContent=t.getStyles())},this.fontFace=function(){for(var i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];for(var o=t._freeStyle,u=0,c=i;u<c.length;u++){var d=c[u];o.registerRule("@font-face",d)}t._styleUpdated()},this.getStyles=function(){return(t._raw||"")+t._freeStyle.getStyles()},this.keyframes=function(i){var s=Y(i),o=t._freeStyle.registerKeyframes(s);return t._styleUpdated(),o},this.reinit=function(){var i=I();t._freeStyle=i,t._lastFreeStyleChangeId=i.changeId,t._raw="",t._pendingRawChange=!1;var s=t._getTag();s&&(s.textContent="")},this.setStylesTarget=function(i){t._tag&&(t._tag.textContent=""),t._tag=i,t.forceRenderStyles()},this.stylesheet=function(i){for(var s=Object.getOwnPropertyNames(i),o={},u=0,c=s;u<c.length;u++){var d=c[u],h=i[d];h&&(h.$debugName=d,o[d]=t.style(h))}return o};var a=I();this._autoGenerateTag=n,this._freeStyle=a,this._lastFreeStyleChangeId=a.changeId,this._pending=0,this._pendingRawChange=!1,this._raw="",this._tag=void 0,this.style=this.style.bind(this)}return r.prototype._afterAllSync=function(e){var t=this;this._pending++;var n=this._pending;Z(function(){n===t._pending&&e()})},r.prototype._getTag=function(){if(this._tag)return this._tag;if(this._autoGenerateTag){var e=typeof window>"u"?{textContent:""}:document.createElement("style");return typeof document<"u"&&document.head.appendChild(e),this._tag=e,e}},r.prototype._styleUpdated=function(){var e=this,t=this._freeStyle.changeId,n=this._lastFreeStyleChangeId;!this._pendingRawChange&&t===n||(this._lastFreeStyleChangeId=t,this._pendingRawChange=!1,this._afterAllSync(function(){return e.forceRenderStyles()}))},r.prototype.style=function(){var e=this._freeStyle.registerStyle($(C.apply(void 0,arguments)));return this._styleUpdated(),e},r}(),f=new J({autoGenerateTag:!0});f.setStylesTarget;f.cssRaw;f.cssRule;f.forceRenderStyles;f.fontFace;f.getStyles;f.keyframes;f.reinit;var S=f.style;f.stylesheet;const Q=S({padding:".5rem"}),X=S({marginTop:0,marginBottom:0,fontSize:"1.5rem",fontFamily:"Rubik, sans-serif",fontWeight:400,color:`var(--color-primary-dark, ${O})`}),ee=S({marginTop:0,marginBottom:".5rem",fontSize:"1.2rem",fontFamily:"Rubik, sans-serif",fontWeight:300,color:`var(--color-primary-light, ${P})`}),te=S({marginBottom:".5rem",fontSize:"1rem",fontFamily:"Rubik, sans-serif",fontWeight:400,color:`var(--color-primary-base, ${A})`}),re=S({display:"block",width:"100%"}),N=({author:r,title:e,dates:t,images:n})=>v("article",{className:Q,children:[m("h1",{className:X,children:r}),m("h2",{className:ee,children:e}),m("div",{className:te,children:v("span",{children:["Del ",v("time",{dateTime:t.initialUTF,children:[t.initialString,"."]})," al"," ",v("time",{dateTime:t.finalUTF,children:[t.finalString,"."]})]})}),n.length&&m("img",{className:re,src:n[0],alt:""})]});try{N.displayName="Card",N.__docgenInfo={description:"",displayName:"Card",props:{author:{defaultValue:null,description:"",name:"author",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},dates:{defaultValue:null,description:"",name:"dates",required:!0,type:{name:"{ initialString: string; initialUTF: string; finalString: string; finalUTF: string; }"}},images:{defaultValue:null,description:"",name:"images",required:!0,type:{name:"string[]"}}}}}catch{}const ne={title:"Card",component:N,tags:[],decorators:[r=>m("div",{style:{width:"20rem"},children:r()})]},y={args:{author:"Eduardo Chillida",title:"Berlín",dates:{initialString:"21 Feb",initialUTF:"2022-21-02",finalString:"16 Mar",finalUTF:"2022-16-03"},images:["https://upload.wikimedia.org/wikipedia/commons/d/d0/Chillida_berlin_Bundeskanzleramt.jpg"]}};var R,U,j;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    author: "Eduardo Chillida",
    title: "Berlín",
    dates: {
      initialString: "21 Feb",
      initialUTF: "2022-21-02",
      finalString: "16 Mar",
      finalUTF: "2022-16-03"
    },
    images: ["https://upload.wikimedia.org/wikipedia/commons/d/d0/Chillida_berlin_Bundeskanzleramt.jpg"]
  }
}`,...(j=(U=y.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};const ie=["Default"],ae=Object.freeze(Object.defineProperty({__proto__:null,Default:y,__namedExportsOrder:ie,default:ne},Symbol.toStringTag,{value:"Module"}));export{ae as C,O as a,P as b,A as c};
//# sourceMappingURL=Card.stories-5870f646.js.map
