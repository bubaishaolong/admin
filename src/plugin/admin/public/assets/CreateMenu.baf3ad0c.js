var u=(a,l,o)=>new Promise((c,r)=>{var i=t=>{try{s(o.next(t))}catch(e){r(e)}},n=t=>{try{s(o.throw(t))}catch(e){r(e)}},s=t=>t.done?c(t.value):Promise.resolve(t.value).then(i,n);s((o=o.apply(a,l)).next())});import{B as h}from"./BasicForm.67047978.js";import{B as b,a as B}from"./index.e8ce4467.js";import{aG as _,r as f,a as M,aI as d,o as g,aJ as C,p as F,i as P,j as v,b5 as E,eV as k,eW as w,x as y}from"./index.656c725e.js";import"./index.1f507897.js";import"./index.ddc16f9d.js";import"./_baseIteratee.d7866646.js";import"./index.4f3dd38a.js";import"./index.6e6030d1.js";import"./index.d60da1cd.js";import"./index.28987d30.js";import"./index.2e5a1dae.js";import"./index.873c27ee.js";import"./index.38230a24.js";import"./uniqBy.73b96c75.js";import"./download.add46730.js";import"./index.2c103eba.js";import"./useWindowSizeFn.2783558b.js";import"./FullscreenOutlined.52703f8e.js";const m=f(null),A=M({components:{BasicForm:h,BasicModal:b},emits:["reload","register"],setup(a,{emit:l}){const o=f(""),c=[{field:"name",component:"Input",label:"\u540D\u5B57",colProps:{span:24},required:!0},{field:"pid",component:"ApiTreeSelect",label:"\u4E0A\u7EA7\u83DC\u5355",componentProps:{api:k,resultField:"list"},colProps:{span:24}},{field:"icon",component:"IconPicker",label:"\u56FE\u6807",colProps:{span:24}},{field:"overwrite",component:"Checkbox",label:"\u5F3A\u5236\u8986\u76D6",colProps:{span:24}}],[r,{closeModal:i}]=B(e=>u(this,null,function*(){var p;o.value=e.table,(p=m.value)==null||p.appendSchemaByField({field:"table",component:"Input",label:"",colProps:{span:0},componentProps:{hidden:!0},defaultValue:o},"")})),{createMessage:n}=y(),{success:s}=n;return{formElRef:m,handleSubmit:()=>u(this,null,function*(){try{const e=m.value;if(!e)return;const p=yield e.validate();yield w(p),i(),s("\u64CD\u4F5C\u6210\u529F"),l("reload")}catch(e){console.log(e)}}),schemas:c,register:r}}}),D={class:"mt-3"};function I(a,l,o,c,r,i){const n=d("BasicForm"),s=d("BasicModal");return g(),C(s,E(a.$attrs,{destroyOnClose:"",onRegister:a.register,title:"\u4E00\u952E\u751F\u6210\u83DC\u5355",onOk:a.handleSubmit}),{default:F(()=>[P("div",D,[v(n,{schemas:a.schemas,ref:"formElRef",labelWidth:75,showActionButtonGroup:!1},null,8,["schemas"])])]),_:1},16,["onRegister","onOk"])}var X=_(A,[["render",I]]);export{X as default};
