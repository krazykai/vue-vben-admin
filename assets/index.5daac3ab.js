import{au as x,a as I,cG as M,b7 as k,bs as b,aE as $,b as U,s as N,f as O,aw as r,o as n,h as S,n as t,z as m,j as h,l as g,i as a,q as s,t as A,F as E,c as P,aN as R}from"./index.f5d9d1ad.js";import{D as V}from"./siteSetting.68e5b367.js";import{c as C,u as z}from"./index.b7579982.js";import{b as B}from"./index.c02b0888.js";import{h as T}from"./header.d801b988.js";import"./FullscreenOutlined.992e436d.js";import"./index.ffcbed5a.js";import"./useWindowSizeFn.91188804.js";import"./useContentViewHeight.42a3b76a.js";import"./uniqBy.3dda1602.js";import"./_baseIteratee.228345c0.js";import"./get.1ecc9830.js";import"./index.25e99aa3.js";import"./index.2bc80423.js";import"./useRefs.dbe63808.js";import"./PlusOutlined.35407629.js";import"./RedoOutlined.6a48ab6b.js";import"./index.5e57f1cd.js";import"./lock.ec08871f.js";const F=I({name:"UserDropdown",components:{Dropdown:M,Menu:k,MenuItem:C(()=>b(()=>import("./DropMenuItem.c0e5d779.js"),["assets/DropMenuItem.c0e5d779.js","assets/index.f5d9d1ad.js","assets/index.3e9a5c09.css"])),MenuDivider:k.Divider,LockAction:C(()=>b(()=>import("./LockModal.a810380b.js"),["assets/LockModal.a810380b.js","assets/LockModal.0068f88c.css","assets/index.86d55544.css","assets/index.a18cc309.css","assets/index.f5d9d1ad.js","assets/index.3e9a5c09.css","assets/index.c02b0888.js","assets/index.d0b877f3.css","assets/useWindowSizeFn.91188804.js","assets/FullscreenOutlined.992e436d.js","assets/BasicForm.b33c8b5e.js","assets/BasicForm.fca7963c.css","assets/FormItem.vue_vue_type_script_lang.766cb077.js","assets/index.e71a3d8d.js","assets/index.3a3c1369.css","assets/componentMap.c9bbc942.js","assets/componentMap.08c8b028.css","assets/index.2687e41f.js","assets/index.cb0992d5.css","assets/Checkbox.d5dcd7df.js","assets/index.7594fcb3.js","assets/index.695a0c50.css","assets/index.0b0e8cbe.js","assets/index.9a4d3b51.css","assets/index.f7077875.js","assets/index.49ada229.css","assets/index.38e14c43.js","assets/index.47f7c782.css","assets/index.70888eb3.js","assets/index.579bd49e.css","assets/index.f4f3ca9c.js","assets/index.ff4ce442.css","assets/useFormItem.adaa8348.js","assets/RadioButtonGroup.00b9407c.js","assets/get.1ecc9830.js","assets/index.699fff5b.js","assets/index.560eb672.css","assets/eagerComputed.8cc1cf99.js","assets/index.e897a661.js","assets/index.aeeee80c.css","assets/_baseIteratee.228345c0.js","assets/DeleteOutlined.1207ffac.js","assets/index.de282f61.js","assets/index.8f5fe29a.css","assets/useRefs.dbe63808.js","assets/Form.e022d05f.js","assets/Col.7e63b6a5.js","assets/useFlexGapSupport.5be92d18.js","assets/useSize.8e9544bd.js","assets/transButton.9419b259.js","assets/index.51653348.js","assets/index.cd256673.css","assets/index.acb66a72.js","assets/index.9d09be4d.css","assets/index.831c7624.js","assets/index.b1363280.css","assets/isNumber.e197a0e3.js","assets/uuid.2b29000c.js","assets/download.56d77b1a.js","assets/base64Conver.08b9f4ec.js","assets/index.12dd5b86.js","assets/index.cb030764.css","assets/index.9097c532.js","assets/index.7b8b5e30.css","assets/index.7cc9dfc0.js","assets/uniqBy.3dda1602.js","assets/index.7e529fc9.js","assets/useForm.4d475f36.js","assets/lock.ec08871f.js","assets/header.d801b988.js"]))},props:{theme:$.oneOf(["dark","light"])},setup(){const{prefixCls:e}=U("header-user-dropdown"),{t:f}=P(),{getShowDoc:_,getUseLockPage:v}=z(),d=N(),w=O(()=>{const{realName:u="",avatar:y,desc:L}=d.getUserInfo||{};return{realName:u,avatar:y||T,desc:L}}),[o,{openModal:i}]=B();function p(){i(!0)}function l(){d.confirmLoginOut()}function c(){R(V)}function D(u){switch(u.key){case"logout":l();break;case"doc":c();break;case"lock":p();break}}return{prefixCls:e,t:f,getUserInfo:w,handleMenuClick:D,getShowDoc:_,register:o,getUseLockPage:v}}}),j=["src"];function q(e,f,_,v,d,w){const o=r("MenuItem"),i=r("MenuDivider"),p=r("Menu"),l=r("Dropdown"),c=r("LockAction");return n(),S(E,null,[t(l,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m(()=>[t(p,{onClick:e.handleMenuClick},{default:m(()=>[e.getShowDoc?(n(),h(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):g("",!0),e.getShowDoc?(n(),h(i,{key:1})):g("",!0),e.getUseLockPage?(n(),h(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):g("",!0),t(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:m(()=>[a("span",{class:s([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:s(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,j),a("span",{class:s(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:s([`${e.prefixCls}__name  `,"truncate"])},A(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),t(c,{onRegister:e.register},null,8,["onRegister"])],64)}var le=x(F,[["render",q]]);export{le as default};
