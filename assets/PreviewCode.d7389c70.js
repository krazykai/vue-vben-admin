var h=Object.defineProperty,g=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var f=(e,t,o)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,_=(e,t)=>{for(var o in t||(t={}))w.call(t,o)&&f(e,o,t[o]);if(p)for(var o of p(t))F.call(t,o)&&f(e,o,t[o]);return e},m=(e,t)=>g(e,J(t));import{C as k,M as A}from"./index.c86a90f4.js";import{a as B,w as D,fs as M,bc as $,au as N,k as R,aw as v,o as O,h as P,i as b,n as r,z as C,B as y,E as S}from"./index.f5d9d1ad.js";import"./useWindowSizeFn.91188804.js";const V=B({name:"PreviewCode",components:{CodeEditor:k},props:{fileFormat:{type:String,default:"json"},editorJson:{type:String,default:""}},setup(e){const t=D({visible:!1}),o=(s,E=`file.${e.fileFormat}`)=>{let l="data:text/csv;charset=utf-8,";l+=s;const x=encodeURI(l),c=document.createElement("a");c.setAttribute("href",x),c.setAttribute("download",E),c.click()},d=()=>{o(e.editorJson)},{clipboardRef:i,copiedRef:u}=M(),{createMessage:a}=S(),n=()=>{const s=e.editorJson;if(!s){a.warning("\u4EE3\u7801\u4E3A\u7A7A\uFF01");return}i.value=s,R(u)&&a.warning("\u590D\u5236\u6210\u529F\uFF01")};return m(_({},$(t)),{exportData:o,handleCopyJson:n,handleExportJson:d,MODE:A})}}),j={class:"v-json-box"},I={class:"copy-btn-box"};function T(e,t,o,d,i,u){const a=v("CodeEditor"),n=v("a-button");return O(),P("div",null,[b("div",j,[r(a,{value:e.editorJson,ref:"myEditor",mode:e.MODE.JSON},null,8,["value","mode"])]),b("div",I,[r(n,{onClick:e.handleCopyJson,type:"primary",class:"copy-btn","data-clipboard-action":"copy","data-clipboard-text":e.editorJson},{default:C(()=>[y(" \u590D\u5236\u6570\u636E ")]),_:1},8,["onClick","data-clipboard-text"]),r(n,{onClick:e.handleExportJson,type:"primary"},{default:C(()=>[y("\u5BFC\u51FA\u4EE3\u7801")]),_:1},8,["onClick"])])])}var H=N(V,[["render",T],["__scopeId","data-v-c7ac4cc2"]]);export{H as default};
