import{ak as A,G as N,c5 as R,a as D,f as v,n as f,F as Y,_ as O,dY as T,v as E,dR as q,ar as M,a6 as B,T as S,S as x,J as U,ad as J,c7 as K,ab as Z,dZ as H,U as Q}from"./index.f5d9d1ad.js";import{u as ee}from"./useRefs.dbe63808.js";var V=A("normal","exception","active","success"),te=A("line","circle","dashboard"),re=A("default","small"),L=function(){return{prefixCls:String,type:N.oneOf(te),percent:Number,format:{type:Function},status:N.oneOf(V),showInfo:{type:Boolean,default:void 0},strokeWidth:Number,strokeLinecap:String,strokeColor:{type:[String,Object],default:void 0},trailColor:String,width:Number,success:{type:Object,default:function(){return{}}},gapDegree:Number,gapPosition:String,size:N.oneOf(re),steps:Number,successPercent:Number,title:String}};function w(r){return!r||r<0?0:r>100?100:r}function z(r){var e=r.success,s=r.successPercent,t=s;return e&&"progress"in e&&(R(!1,"Progress","`success.progress` is deprecated. Please use `success.percent` instead."),t=e.progress),e&&"percent"in e&&(t=e.percent),t}var ne=globalThis&&globalThis.__rest||function(r,e){var s={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(s[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(r);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(r,t[n])&&(s[t[n]]=r[t[n]]);return s},ae=function(){return O(O({},L()),{prefixCls:String,direction:{type:String}})},se=function(e){var s=[];return Object.keys(e).forEach(function(t){var n=parseFloat(t.replace(/%/g,""));isNaN(n)||s.push({key:n,value:e[t]})}),s=s.sort(function(t,n){return t.key-n.key}),s.map(function(t){var n=t.key,l=t.value;return"".concat(l," ").concat(n,"%")}).join(", ")},oe=function(e,s){var t=e.from,n=t===void 0?T.blue:t,l=e.to,c=l===void 0?T.blue:l,u=e.direction,d=u===void 0?s==="rtl"?"to left":"to right":u,i=ne(e,["from","to","direction"]);if(Object.keys(i).length!==0){var g=se(i);return{backgroundImage:"linear-gradient(".concat(d,", ").concat(g,")")}}return{backgroundImage:"linear-gradient(".concat(d,", ").concat(n,", ").concat(c,")")}},ie=D({name:"Line",props:ae(),setup:function(e,s){var t=s.slots,n=v(function(){var i=e.strokeColor,g=e.direction;return i&&typeof i!="string"?oe(i,g):{background:i}}),l=v(function(){return e.trailColor?{backgroundColor:e.trailColor}:void 0}),c=v(function(){var i=e.percent,g=e.strokeWidth,o=e.strokeLinecap,a=e.size;return O({width:"".concat(w(i),"%"),height:"".concat(g||(a==="small"?6:8),"px"),borderRadius:o==="square"?0:""},n.value)}),u=v(function(){return z(e)}),d=v(function(){var i=e.strokeWidth,g=e.size,o=e.strokeLinecap,a=e.success;return{width:"".concat(w(u.value),"%"),height:"".concat(i||(g==="small"?6:8),"px"),borderRadius:o==="square"?0:"",backgroundColor:a==null?void 0:a.strokeColor}});return function(){var i;return f(Y,null,[f("div",{class:"".concat(e.prefixCls,"-outer")},[f("div",{class:"".concat(e.prefixCls,"-inner"),style:l.value},[f("div",{class:"".concat(e.prefixCls,"-bg"),style:c.value},null),u.value!==void 0?f("div",{class:"".concat(e.prefixCls,"-success-bg"),style:d.value},null):null])]),(i=t.default)===null||i===void 0?void 0:i.call(t)])}}}),ce={percent:0,prefixCls:"vc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1},le=function(e){var s=E(null);return q(function(){var t=Date.now(),n=!1;e.value.forEach(function(l){var c,u=((c=l)===null||c===void 0?void 0:c.$el)||l;if(!!u){n=!0;var d=u.style;d.transitionDuration=".3s, .3s, .3s, .06s",s.value&&t-s.value<100&&(d.transitionDuration="0s, 0s")}}),n&&(s.value=Date.now())}),e},ue={gapDegree:Number,gapPosition:{type:String},percent:{type:[Array,Number]},prefixCls:String,strokeColor:{type:[Object,String,Array]},strokeLinecap:{type:String},strokeWidth:Number,trailColor:String,trailWidth:Number,transition:String},ge=globalThis&&globalThis.__rest||function(r,e){var s={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(s[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(r);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(r,t[n])&&(s[t[n]]=r[t[n]]);return s},$=0;function F(r){return+r.replace("%","")}function X(r){return Array.isArray(r)?r:[r]}function G(r,e,s,t){var n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,l=arguments.length>5?arguments[5]:void 0,c=50-t/2,u=0,d=-c,i=0,g=-2*c;switch(l){case"left":u=-c,d=0,i=2*c,g=0;break;case"right":u=c,d=0,i=-2*c,g=0;break;case"bottom":d=c,g=2*c;break}var o="M 50,50 m ".concat(u,",").concat(d,`
   a `).concat(c,",").concat(c," 0 1 1 ").concat(i,",").concat(-g,`
   a `).concat(c,",").concat(c," 0 1 1 ").concat(-i,",").concat(g),a=Math.PI*2*c,h={stroke:s,strokeDasharray:"".concat(e/100*(a-n),"px ").concat(a,"px"),strokeDashoffset:"-".concat(n/2+r/100*(a-n),"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s"};return{pathString:o,pathStyle:h}}var fe=D({name:"VCCircle",props:M(ue,ce),setup:function(e){$+=1;var s=E($),t=v(function(){return X(e.percent)}),n=v(function(){return X(e.strokeColor)}),l=ee(),c=B(l,2),u=c[0],d=c[1];le(d);var i=function(){var o=e.prefixCls,a=e.strokeWidth,h=e.strokeLinecap,b=e.gapDegree,p=e.gapPosition,m=0;return t.value.map(function(y,k){var j=n.value[k]||n.value[n.value.length-1],W=Object.prototype.toString.call(j)==="[object Object]"?"url(#".concat(o,"-gradient-").concat(s.value,")"):"",C=G(m,y,j,a,b,p),I=C.pathString,P=C.pathStyle;m+=y;var _={key:k,d:I,stroke:W,"stroke-linecap":h,"stroke-width":a,opacity:y===0?0:1,"fill-opacity":"0",class:"".concat(o,"-circle-path"),style:P};return f("path",S({ref:u(k)},_),null)})};return function(){var g=e.prefixCls,o=e.strokeWidth,a=e.trailWidth,h=e.gapDegree,b=e.gapPosition,p=e.trailColor,m=e.strokeLinecap;e.strokeColor;var y=ge(e,["prefixCls","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","strokeColor"]),k=G(0,100,p,o,h,b),j=k.pathString,W=k.pathStyle;delete y.percent;var C=n.value.find(function(P){return Object.prototype.toString.call(P)==="[object Object]"}),I={d:j,stroke:p,"stroke-linecap":m,"stroke-width":a||o,"fill-opacity":"0",class:"".concat(g,"-circle-trail"),style:W};return f("svg",S({class:"".concat(g,"-circle"),viewBox:"0 0 100 100"},y),[C&&f("defs",null,[f("linearGradient",{id:"".concat(g,"-gradient-").concat(s.value),x1:"100%",y1:"0%",x2:"0%",y2:"0%"},[Object.keys(C).sort(function(P,_){return F(P)-F(_)}).map(function(P,_){return f("stop",{key:_,offset:P,"stop-color":C[P]},null)})])]),f("path",I,null),i().reverse()])}}});function de(r){var e=r.percent,s=r.success,t=r.successPercent,n=w(z({success:s,successPercent:t}));return[n,w(w(e)-n)]}function pe(r){var e=r.success,s=e===void 0?{}:e,t=r.strokeColor,n=s.strokeColor;return[n||T.green,t||null]}var ve=D({name:"Circle",inheritAttrs:!1,props:L(),setup:function(e,s){var t=s.slots,n=v(function(){if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),l=v(function(){var a=e.width||120;return{width:typeof a=="number"?"".concat(a,"px"):a,height:typeof a=="number"?"".concat(a,"px"):a,fontSize:"".concat(a*.15+6,"px")}}),c=v(function(){return e.strokeWidth||6}),u=v(function(){return e.gapPosition||e.type==="dashboard"&&"bottom"||"top"}),d=v(function(){return de(e)}),i=v(function(){return Object.prototype.toString.call(e.strokeColor)==="[object Object]"}),g=v(function(){return pe({success:e.success,strokeColor:e.strokeColor})}),o=v(function(){var a;return a={},x(a,"".concat(e.prefixCls,"-inner"),!0),x(a,"".concat(e.prefixCls,"-circle-gradient"),i.value),a});return function(){var a;return f("div",{class:o.value,style:l.value},[f(fe,{percent:d.value,strokeWidth:c.value,trailWidth:c.value,strokeColor:g.value,strokeLinecap:e.strokeLinecap,trailColor:e.trailColor,prefixCls:e.prefixCls,gapDegree:n.value,gapPosition:u.value},null),(a=t.default)===null||a===void 0?void 0:a.call(t)])}}}),he=function(){return O(O({},L()),{steps:Number,size:{type:String},strokeColor:String,trailColor:String})},be=D({name:"Steps",props:he(),setup:function(e,s){var t=s.slots,n=v(function(){return Math.round(e.steps*((e.percent||0)/100))}),l=v(function(){return e.size==="small"?2:14}),c=v(function(){for(var u=e.steps,d=e.strokeWidth,i=d===void 0?8:d,g=e.strokeColor,o=e.trailColor,a=e.prefixCls,h=[],b=0;b<u;b+=1){var p,m=(p={},x(p,"".concat(a,"-steps-item"),!0),x(p,"".concat(a,"-steps-item-active"),b<=n.value-1),p);h.push(f("div",{key:b,class:m,style:{backgroundColor:b<=n.value-1?g:o,width:"".concat(l.value,"px"),height:"".concat(i,"px")}},null))}return h});return function(){var u;return f("div",{class:"".concat(e.prefixCls,"-steps-outer")},[c.value,(u=t.default)===null||u===void 0?void 0:u.call(t)])}}}),ke=D({name:"AProgress",props:M(L(),{type:"line",percent:0,showInfo:!0,trailColor:null,size:"default",strokeLinecap:"round"}),slots:["format"],setup:function(e,s){var t=s.slots,n=U("progress",e),l=n.prefixCls,c=n.direction;R(e.successPercent==null,"Progress","`successPercent` is deprecated. Please use `success.percent` instead.");var u=v(function(){var o,a=e.type,h=e.showInfo,b=e.size,p=l.value;return o={},x(o,p,!0),x(o,"".concat(p,"-").concat(a==="dashboard"&&"circle"||a),!0),x(o,"".concat(p,"-show-info"),h),x(o,"".concat(p,"-").concat(b),b),x(o,"".concat(p,"-rtl"),c.value==="rtl"),o}),d=v(function(){var o=e.percent,a=o===void 0?0:o,h=z(e);return parseInt(h!==void 0?h.toString():a.toString(),10)}),i=v(function(){var o=e.status;return V.indexOf(o)<0&&d.value>=100?"success":o||"normal"}),g=function(){var a=e.showInfo,h=e.format,b=e.type,p=e.percent,m=e.title,y=z(e);if(!a)return null;var k,j=h||(t==null?void 0:t.format)||function(C){return"".concat(C,"%")},W=b==="line";return h||(t==null?void 0:t.format)||i.value!=="exception"&&i.value!=="success"?k=j(w(p),w(y)):i.value==="exception"?k=W?f(J,null,null):f(K,null,null):i.value==="success"&&(k=W?f(Z,null,null):f(H,null,null)),f("span",{class:"".concat(l.value,"-text"),title:m===void 0&&typeof k=="string"?k:void 0},[k])};return function(){var o=e.type,a=e.steps,h=e.strokeColor,b=e.title,p=g(),m;o==="line"?m=a?f(be,S(S({},e),{},{strokeColor:typeof h=="string"?h:void 0,prefixCls:l.value,steps:a}),{default:function(){return[p]}}):f(ie,S(S({},e),{},{prefixCls:l.value}),{default:function(){return[p]}}):(o==="circle"||o==="dashboard")&&(m=f(ve,S(S({},e),{},{prefixCls:l.value}),{default:function(){return[p]}}));var y=O(O({},u.value),x({},"".concat(l.value,"-status-").concat(i.value),!0));return f("div",{class:y,title:b},[m])}}}),xe=Q(ke);export{xe as P};
