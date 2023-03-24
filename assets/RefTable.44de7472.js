import{B as E}from"./TableImg.8800783f.js";import"./componentMap.c9bbc942.js";import{getBasicColumns as p,getBasicShortColumns as R}from"./tableData.090d35c5.js";import{au as T,a as w,v as D,aw as f,o as _,h as S,i as g,n as e,z as u,B as i,E as h,k as L}from"./index.f5d9d1ad.js";import{d as y}from"./table.3005ccf5.js";import"./index.2687e41f.js";import"./Checkbox.d5dcd7df.js";import"./index.7594fcb3.js";import"./index.699fff5b.js";import"./eagerComputed.8cc1cf99.js";import"./BasicForm.b33c8b5e.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.766cb077.js";import"./index.e71a3d8d.js";import"./index.e897a661.js";import"./_baseIteratee.228345c0.js";import"./get.1ecc9830.js";import"./DeleteOutlined.1207ffac.js";import"./index.de282f61.js";import"./useRefs.dbe63808.js";import"./Form.e022d05f.js";import"./Col.7e63b6a5.js";import"./useFlexGapSupport.5be92d18.js";import"./useSize.8e9544bd.js";import"./index.7cc9dfc0.js";import"./uniqBy.3dda1602.js";import"./index.c02b0888.js";import"./useWindowSizeFn.91188804.js";import"./FullscreenOutlined.992e436d.js";import"./index.7e529fc9.js";import"./useForm.4d475f36.js";import"./RadioButtonGroup.00b9407c.js";import"./useFormItem.adaa8348.js";import"./index.e3c514e8.js";import"./index.2457d1ca.js";import"./index.66d6253e.js";import"./useContentViewHeight.42a3b76a.js";import"./ArrowLeftOutlined.b2f3c065.js";import"./index.faf753f6.js";import"./transButton.9419b259.js";import"./index.38e14c43.js";import"./index.70888eb3.js";import"./index.f7077875.js";import"./index.0b0e8cbe.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.6a48ab6b.js";import"./index.831c7624.js";import"./isNumber.e197a0e3.js";import"./fromPairs.84aabb58.js";import"./scrollTo.1752dd79.js";import"./index.56edf59b.js";import"./index.f4f3ca9c.js";import"./index.51653348.js";import"./index.acb66a72.js";import"./download.56d77b1a.js";import"./base64Conver.08b9f4ec.js";import"./index.12dd5b86.js";import"./index.9097c532.js";import"./select.e1625f9b.js";const K=w({components:{BasicTable:E},setup(){const o=D(null),{createMessage:a}=h();function n(){const m=L(o);if(!m)throw new Error("tableAction is null");return m}function s(){n().setLoading(!0),setTimeout(()=>{n().setLoading(!1)},1e3)}function r(){n().setColumns(R())}function c(){n().setColumns(p()),n().reload({page:1})}function t(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function l(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function C(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function d(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function F(){n().setPagination({current:2}),n().reload()}function B(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function k(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function b(){n().setSelectedRowKeys(["0","1","2"])}function A(){n().clearSelectedRowKeys()}return{tableRef:o,api:y,columns:p(),changeLoading:s,changeColumns:r,reloadTable:c,getColumn:t,getTableData:l,getTableRawData:C,getPagination:d,setPaginationInfo:F,getSelectRowList:B,getSelectRowKeyList:k,setSelectedRowKeyList:b,clearSelect:A}}}),v={class:"p-4"},P={class:"mb-4"},$={class:"mb-4"};function M(o,a,n,s,r,c){const t=f("a-button"),l=f("BasicTable");return _(),S("div",v,[g("div",P,[e(t,{class:"mr-2",onClick:o.reloadTable},{default:u(()=>[i(" \u8FD8\u539F ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.changeLoading},{default:u(()=>[i(" \u5F00\u542Floading ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.changeColumns},{default:u(()=>[i(" \u66F4\u6539Columns ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.getColumn},{default:u(()=>[i(" \u83B7\u53D6Columns ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.getTableData},{default:u(()=>[i(" \u83B7\u53D6\u8868\u683C\u6570\u636E ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.getTableRawData},{default:u(()=>[i(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.setPaginationInfo},{default:u(()=>[i(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 ")]),_:1},8,["onClick"])]),g("div",$,[e(t,{class:"mr-2",onClick:o.getSelectRowList},{default:u(()=>[i(" \u83B7\u53D6\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.getSelectRowKeyList},{default:u(()=>[i(" \u83B7\u53D6\u9009\u4E2D\u884CKey ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.setSelectedRowKeyList},{default:u(()=>[i(" \u8BBE\u7F6E\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.clearSelect},{default:u(()=>[i(" \u6E05\u7A7A\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.getPagination},{default:u(()=>[i(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ")]),_:1},8,["onClick"])]),e(l,{canResize:!1,title:"RefTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528Ref\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",ref:"tableRef",api:o.api,columns:o.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])}var Jo=T(K,[["render",M]]);export{Jo as default};
