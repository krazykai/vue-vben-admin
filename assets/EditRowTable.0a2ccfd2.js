var m=(i,u,o)=>new Promise((n,l)=>{var r=t=>{try{a(o.next(t))}catch(e){l(e)}},p=t=>{try{a(o.throw(t))}catch(e){l(e)}},a=t=>t.done?n(t.value):Promise.resolve(t.value).then(r,p);a((o=o.apply(i,u)).next())});import{B as w}from"./TableImg.8800783f.js";import{k as E}from"./componentMap.c9bbc942.js";import{u as h}from"./useTable.6d40a410.js";import{o as F}from"./select.e1625f9b.js";import{d as D}from"./table.3005ccf5.js";import{t as b}from"./tree.4f5a306b.js";import{au as B,a as v,v as R,aw as c,o as C,h as g,n as x,z as A,j as I,l as k,ah as y,E as T}from"./index.f5d9d1ad.js";import"./index.2687e41f.js";import"./Checkbox.d5dcd7df.js";import"./index.7594fcb3.js";import"./index.699fff5b.js";import"./eagerComputed.8cc1cf99.js";import"./BasicForm.b33c8b5e.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.766cb077.js";import"./index.e71a3d8d.js";import"./index.e897a661.js";import"./_baseIteratee.228345c0.js";import"./get.1ecc9830.js";import"./DeleteOutlined.1207ffac.js";import"./index.de282f61.js";import"./useRefs.dbe63808.js";import"./Form.e022d05f.js";import"./Col.7e63b6a5.js";import"./useFlexGapSupport.5be92d18.js";import"./useSize.8e9544bd.js";import"./index.7cc9dfc0.js";import"./uniqBy.3dda1602.js";import"./index.c02b0888.js";import"./useWindowSizeFn.91188804.js";import"./FullscreenOutlined.992e436d.js";import"./index.7e529fc9.js";import"./useForm.4d475f36.js";import"./RadioButtonGroup.00b9407c.js";import"./useFormItem.adaa8348.js";import"./index.e3c514e8.js";import"./index.2457d1ca.js";import"./index.66d6253e.js";import"./useContentViewHeight.42a3b76a.js";import"./ArrowLeftOutlined.b2f3c065.js";import"./index.faf753f6.js";import"./transButton.9419b259.js";import"./index.38e14c43.js";import"./index.70888eb3.js";import"./index.f7077875.js";import"./index.0b0e8cbe.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.6a48ab6b.js";import"./index.831c7624.js";import"./isNumber.e197a0e3.js";import"./fromPairs.84aabb58.js";import"./scrollTo.1752dd79.js";import"./index.56edf59b.js";import"./index.f4f3ca9c.js";import"./index.51653348.js";import"./index.acb66a72.js";import"./download.56d77b1a.js";import"./base64Conver.08b9f4ec.js";import"./index.12dd5b86.js";import"./index.9097c532.js";const _=[{title:"\u8F93\u5165\u6846",dataIndex:"name-group",editRow:!0,children:[{title:"\u8F93\u5165\u6846",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:150},{title:"\u9ED8\u8BA4\u8F93\u5165\u72B6\u6001",dataIndex:"name7",editRow:!0,width:150},{title:"\u8F93\u5165\u6846\u6821\u9A8C",dataIndex:"name1",editRow:!0,align:"left",editRule:!0,width:150},{title:"\u8F93\u5165\u6846\u51FD\u6570\u6821\u9A8C",dataIndex:"name2",editRow:!0,align:"right",editRule:i=>m(void 0,null,function*(){return i==="2"?"\u4E0D\u80FD\u8F93\u5165\u8BE5\u503C":""})},{title:"\u6570\u5B57\u8F93\u5165\u6846",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:150}]},{title:"\u4E0B\u62C9\u6846",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"},{label:"Option3",value:"3"}]},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:F,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9\u6811",dataIndex:"name8",editRow:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:b,resultField:"list"},width:200},{title:"\u65E5\u671F\u9009\u62E9",dataIndex:"date",editRow:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:150},{title:"\u65F6\u95F4\u9009\u62E9",dataIndex:"time",editRow:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:100},{title:"\u52FE\u9009\u6846",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:i=>i?"\u662F":"\u5426",width:100},{title:"\u5F00\u5173",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:i=>i?"\u5F00":"\u5173",width:100},{title:"\u5355\u9009\u6846",dataIndex:"radio1",editRow:!0,editComponent:"RadioGroup",editComponentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},width:200},{title:"\u5355\u9009\u6309\u94AE\u6846",dataIndex:"radio2",editRow:!0,editComponent:"RadioButtonGroup",editComponentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},width:200},{title:"\u8FDC\u7A0B\u5355\u9009\u6846",dataIndex:"radio3",editRow:!0,editComponent:"ApiRadioGroup",editComponentProps:{api:F,resultField:"list",labelField:"name",valueField:"id"},width:200}],P=v({components:{BasicTable:w,TableAction:E},setup(){const{createMessage:i}=T(),u=R(""),[o]=h({title:"\u53EF\u7F16\u8F91\u884C\u793A\u4F8B",titleHelpMessage:["\u672C\u4F8B\u4E2D\u4FEE\u6539[\u6570\u5B57\u8F93\u5165\u6846]\u8FD9\u4E00\u5217\u65F6\uFF0C\u540C\u4E00\u884C\u7684[\u8FDC\u7A0B\u4E0B\u62C9]\u5217\u7684\u5F53\u524D\u7F16\u8F91\u6570\u636E\u4E5F\u4F1A\u540C\u6B65\u53D1\u751F\u6539\u53D8"],api:D,columns:_,showIndexColumn:!1,showTableSetting:!0,tableSetting:{fullScreen:!0},actionColumn:{width:160,title:"Action",dataIndex:"action"}});function n(t){var e;u.value=t.key,(e=t.onEdit)==null||e.call(t,!0)}function l(t){var e;u.value="",(e=t.onEdit)==null||e.call(t,!1,!1)}function r(t){return m(this,null,function*(){var d,s;if(i.loading({content:"\u6B63\u5728\u4FDD\u5B58...",duration:0,key:"saving"}),yield(d=t.onValid)==null?void 0:d.call(t))try{const f=y(t.editValueRefs);(yield(s=t.onEdit)==null?void 0:s.call(t,!1,!0))&&(u.value=""),i.success({content:"\u6570\u636E\u5DF2\u4FDD\u5B58",key:"saving"})}catch(f){i.error({content:"\u4FDD\u5B58\u5931\u8D25",key:"saving"})}else i.error({content:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u6570\u636E",key:"saving"})})}function p(t,e){return t.editable?[{label:"\u4FDD\u5B58",onClick:r.bind(null,t,e)},{label:"\u53D6\u6D88",popConfirm:{title:"\u662F\u5426\u53D6\u6D88\u7F16\u8F91",confirm:l.bind(null,t,e)}}]:[{label:"\u7F16\u8F91",disabled:u.value?u.value!==t.key:!1,onClick:n.bind(null,t)}]}function a({column:t,value:e,record:d}){t.dataIndex==="id"&&(d.editValueRefs.name4.value=`${e}`)}return{registerTable:o,handleEdit:n,createActions:p,onEditChange:a}}}),M={class:"p-4"};function S(i,u,o,n,l,r){const p=c("TableAction"),a=c("BasicTable");return C(),g("div",M,[x(a,{onRegister:i.registerTable,onEditChange:i.onEditChange},{bodyCell:A(({column:t,record:e})=>[t.key==="action"?(C(),I(p,{key:0,actions:i.createActions(e,t)},null,8,["actions"])):k("",!0)]),_:1},8,["onRegister","onEditChange"])])}var Kt=B(P,[["render",S]]);export{Kt as default};
