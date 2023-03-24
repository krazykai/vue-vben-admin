var v=(a,n,s)=>new Promise((i,F)=>{var b=r=>{try{u(s.next(r))}catch(o){F(o)}},m=r=>{try{u(s.throw(r))}catch(o){F(o)}},u=r=>r.done?i(r.value):Promise.resolve(r.value).then(b,m);u((s=s.apply(a,n)).next())});import{au as h,a as k,cD as E,v as y,ao as $,aw as d,bQ as A,x as D,o as _,j as C,z as p,i as T,n as f,B as g,h as P,F as V,az as w,ax as K,d3 as S,E as R}from"./index.f5d9d1ad.js";import{T as B}from"./index.2bc80423.js";import{P as W}from"./index.e3c514e8.js";import{B as j}from"./BasicForm.b33c8b5e.js";import"./componentMap.c9bbc942.js";import{u as M}from"./useForm.4d475f36.js";import"./RadioButtonGroup.00b9407c.js";import"./useRefs.dbe63808.js";import"./PlusOutlined.35407629.js";import"./index.2457d1ca.js";import"./index.66d6253e.js";import"./useSize.8e9544bd.js";import"./eagerComputed.8cc1cf99.js";import"./useWindowSizeFn.91188804.js";import"./useContentViewHeight.42a3b76a.js";import"./ArrowLeftOutlined.b2f3c065.js";import"./index.faf753f6.js";import"./transButton.9419b259.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.766cb077.js";import"./index.e71a3d8d.js";import"./index.e897a661.js";import"./_baseIteratee.228345c0.js";import"./get.1ecc9830.js";import"./DeleteOutlined.1207ffac.js";import"./index.de282f61.js";import"./Form.e022d05f.js";import"./Col.7e63b6a5.js";import"./useFlexGapSupport.5be92d18.js";import"./index.7cc9dfc0.js";import"./uniqBy.3dda1602.js";import"./index.c02b0888.js";import"./FullscreenOutlined.992e436d.js";import"./index.7e529fc9.js";import"./index.2687e41f.js";import"./Checkbox.d5dcd7df.js";import"./index.7594fcb3.js";import"./index.0b0e8cbe.js";import"./index.f7077875.js";import"./index.38e14c43.js";import"./index.70888eb3.js";import"./index.f4f3ca9c.js";import"./useFormItem.adaa8348.js";import"./index.699fff5b.js";import"./index.51653348.js";import"./index.acb66a72.js";import"./index.831c7624.js";import"./isNumber.e197a0e3.js";import"./uuid.2b29000c.js";import"./download.56d77b1a.js";import"./base64Conver.08b9f4ec.js";import"./index.12dd5b86.js";import"./index.9097c532.js";const N=k({name:"TabsFormDemo",components:{Tabs:B,TabPane:B.TabPane,PageWrapper:W,CollapseContainer:E,BasicForm:j},setup(){const{createMessage:a}=R(),n=y("tabs2"),s=y(!1),i=[],F={showActionButtonGroup:!1,labelWidth:100},b={};for(let o=1;o<=5;++o){const e=`tabs${o}`,l=[],c={};for(let t=1;t<=8;++t)l.push({field:`${e}.field${t}`,label:`${e}-field${t}`,component:"Input",colProps:{span:24}}),c[`field${t}`]=`field: ${e}.field${t}, default value`;b[e]=c,i.push({key:e,tab:e,forceRender:!0,Form:M(Object.assign({schemas:l},F))})}function m(){return v(this,null,function*(){for(const o of i){const{resetFields:e}=o.Form[1];yield e()}})}function u(){return v(this,null,function*(){let o="";s.value=!0;try{const e={};for(const l of i){o=l.key;const{validate:c,getFieldsValue:t}=l.Form[1];yield c(),S(e,t())}a.success("\u63D0\u4EA4\u6210\u529F\uFF01\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B")}catch(e){n.value=o}finally{s.value=!1}})}function r(){return v(this,null,function*(){for(const o of i){const{setFieldsValue:e}=o.Form[1];yield e(b)}})}return{omit:$,loading:s,activeKey:n,tabsFormSchema:i,handleReset:m,handleSubmit:u,handleSetValues:r}}}),z={class:"mb-4"};function G(a,n,s,i,F,b){const m=d("a-button"),u=d("BasicForm"),r=d("TabPane"),o=d("Tabs"),e=d("CollapseContainer"),l=d("PageWrapper"),c=A("loading");return D((_(),C(l,{title:"\u6807\u7B7E\u9875+\u591A\u7EA7field\u8868\u5355"},{default:p(()=>[T("div",z,[f(m,{onClick:a.handleReset,class:"mr-2"},{default:p(()=>[g(" \u91CD\u7F6E\u8868\u5355 ")]),_:1},8,["onClick"]),f(m,{onClick:a.handleSetValues,class:"mr-2"},{default:p(()=>[g(" \u8BBE\u7F6E\u9ED8\u8BA4\u503C ")]),_:1},8,["onClick"]),f(m,{onClick:a.handleSubmit,class:"mr-2",type:"primary"},{default:p(()=>[g(" \u63D0\u4EA4\u8868\u5355 ")]),_:1},8,["onClick"])]),f(e,{title:"\u6807\u7B7E\u9875+\u591A\u7EA7field\u8868\u5355"},{default:p(()=>[f(o,{activeKey:a.activeKey,"onUpdate:activeKey":n[0]||(n[0]=t=>a.activeKey=t)},{default:p(()=>[(_(!0),P(V,null,w(a.tabsFormSchema,t=>(_(),C(r,K({key:t.key},a.omit(t,["Form","key"])),{default:p(()=>[f(u,{onRegister:t.Form[0]},null,8,["onRegister"])]),_:2},1040))),128))]),_:1},8,["activeKey"])]),_:1})]),_:1})),[[c,a.loading]])}var Oo=h(N,[["render",G]]);export{Oo as default};
