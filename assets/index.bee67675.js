import{au as f,a as g,cD as C,v as _,bH as p,aw as n,o as F,j as k,z as o,n as t,B as l,t as w,i as S}from"./index.f5d9d1ad.js";import{P as b}from"./index.e3c514e8.js";import"./index.2457d1ca.js";import"./index.66d6253e.js";import"./useSize.8e9544bd.js";import"./eagerComputed.8cc1cf99.js";import"./useWindowSizeFn.91188804.js";import"./useContentViewHeight.42a3b76a.js";import"./ArrowLeftOutlined.b2f3c065.js";import"./index.faf753f6.js";import"./transButton.9419b259.js";const h=g({components:{CollapseContainer:C,PageWrapper:b},setup(){const e=_(null),{enter:s,toggle:a,exit:i,isFullscreen:c}=p(),{toggle:m}=p(e);return{enter:s,toggleDom:m,toggle:a,isFullscreen:c,exit:i,domRef:e}}}),y={ref:"domRef",class:"flex items-center justify-center w-1/2 h-64 mx-auto mt-10 bg-white rounded-md"};function D(e,s,a,i,c,m){const r=n("a-button"),u=n("CollapseContainer"),d=n("PageWrapper");return F(),k(d,{title:"\u5168\u5C4F\u793A\u4F8B"},{default:o(()=>[t(u,{class:"w-full h-32 bg-white rounded-md",title:"Window Full Screen"},{default:o(()=>[t(r,{type:"primary",disabled:e.isFullscreen,onClick:e.enter,class:"mr-2"},{default:o(()=>[l(" Enter Window Full Screen ")]),_:1},8,["disabled","onClick"]),t(r,{color:"success",onClick:e.toggle,class:"mr-2"},{default:o(()=>[l(" Toggle Window Full Screen ")]),_:1},8,["onClick"]),t(r,{color:"error",onClick:e.exit,class:"mr-2"},{default:o(()=>[l(" Exit Window Full Screen ")]),_:1},8,["onClick"]),l(" Current State: "+w(e.isFullscreen),1)]),_:1}),t(u,{class:"w-full mt-5 bg-white rounded-md",title:"Dom Full Screen"},{default:o(()=>[t(r,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:o(()=>[l(" Enter Dom Full Screen ")]),_:1},8,["onClick"])]),_:1}),S("div",y,[t(r,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:o(()=>[l(" Exit Dom Full Screen ")]),_:1},8,["onClick"])],512)]),_:1})}var T=f(h,[["render",D]]);export{T as default};
