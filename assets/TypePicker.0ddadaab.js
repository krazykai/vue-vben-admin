import{au as o,a as p,bk as c,b as s,aw as f,o as i,h as n,F as b,az as _,q as a,j as m,z as u,i as r,fh as l,fi as v}from"./index.f5d9d1ad.js";const g=p({name:"MenuTypePicker",components:{Tooltip:c},props:{menuTypeList:{type:Array,default:()=>[]},handler:{type:Function,default:()=>({})},def:{type:String,default:""}},setup(){const{prefixCls:e}=s("setting-menu-type-picker");return{prefixCls:e}}}),h=e=>(l("data-v-f9bd4c82"),e=e(),v(),e),k=["onClick"],y=h(()=>r("div",{class:"mix-sidebar"},null,-1)),x=[y];function w(e,C,$,T,z,B){const d=f("Tooltip");return i(),n("div",{class:a(e.prefixCls)},[(i(!0),n(b,null,_(e.menuTypeList||[],t=>(i(),m(d,{key:t.title,title:t.title,placement:"bottom"},{default:u(()=>[r("div",{onClick:I=>e.handler(t),class:a([`${e.prefixCls}__item`,`${e.prefixCls}__item--${t.type}`,{[`${e.prefixCls}__item--active`]:e.def===t.type}])},x,10,k)]),_:2},1032,["title"]))),128))],2)}var F=o(g,[["render",w],["__scopeId","data-v-f9bd4c82"]]);export{F as default};
