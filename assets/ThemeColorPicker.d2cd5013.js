import{au as m,a as l,dZ as c,b as d,aw as _,o as i,h as r,F as f,az as u,q as p,bm as k,n as h}from"./index.f5d9d1ad.js";import{b as v}from"./index.12198db8.js";import"./index.52e5bb70.js";import"./index.25e99aa3.js";import"./ArrowLeftOutlined.b2f3c065.js";import"./index.e71a3d8d.js";import"./index.b7579982.js";import"./FullscreenOutlined.992e436d.js";import"./index.ffcbed5a.js";import"./useWindowSizeFn.91188804.js";import"./useContentViewHeight.42a3b76a.js";import"./uniqBy.3dda1602.js";import"./_baseIteratee.228345c0.js";import"./get.1ecc9830.js";import"./index.2bc80423.js";import"./useRefs.dbe63808.js";import"./PlusOutlined.35407629.js";import"./RedoOutlined.6a48ab6b.js";import"./index.5e57f1cd.js";import"./lock.ec08871f.js";const C=l({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,default:()=>[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:n}=d("setting-theme-picker");function o(s){e.event&&v(e.event,s)}return{prefixCls:n,handleClick:o}}}),b=["onClick"];function g(e,n,o,s,x,y){const a=_("CheckOutlined");return i(),r("div",{class:p(e.prefixCls)},[(i(!0),r(f,null,u(e.colorList||[],t=>(i(),r("span",{key:t,onClick:$=>e.handleClick(t),class:p([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:k({background:t})},[h(a)],14,b))),128))],2)}var J=m(C,[["render",g]]);export{J as default};
