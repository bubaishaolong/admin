import{aG as M,a as $,cV as U,cW as v,dl as D,b0 as b,b as O,l as S,f as A,aI as n,o as t,h as V,j as r,p as m,aJ as f,aK as _,i as a,n as s,t as x,F as E,c as N,c_ as P}from"./index.656c725e.js";import{D as R}from"./siteSetting.c485f07c.js";import{c as y,u as B}from"./index.81e1f965.js";import{b as T}from"./index.e8ce4467.js";import{h as F}from"./header.d801b988.js";import"./FullscreenOutlined.52703f8e.js";import"./index.3b25deff.js";import"./useWindowSizeFn.2783558b.js";import"./useContentViewHeight.8799f330.js";import"./uniqBy.73b96c75.js";import"./_baseIteratee.d7866646.js";import"./index.6010d68f.js";import"./RedoOutlined.b54223ae.js";import"./lock.344c64f4.js";const W=$({name:"UserDropdown",components:{Dropdown:U,Menu:v,MenuItem:y(()=>D(()=>import("./DropMenuItem.5a72dfbe.js"),["assets/DropMenuItem.5a72dfbe.js","assets/index.656c725e.js","assets/index.189d4760.css"])),MenuDivider:v.Divider,LockAction:y(()=>D(()=>import("./LockModal.755fa18b.js"),["assets/LockModal.755fa18b.js","assets/LockModal.0068f88c.css","assets/index.656c725e.js","assets/index.189d4760.css","assets/index.e8ce4467.js","assets/index.d0b877f3.css","assets/useWindowSizeFn.2783558b.js","assets/FullscreenOutlined.52703f8e.js","assets/BasicForm.67047978.js","assets/BasicForm.fd1c49b9.css","assets/index.1f507897.js","assets/index.86d55544.css","assets/index.ddc16f9d.js","assets/index.a18cc309.css","assets/_baseIteratee.d7866646.js","assets/index.4f3dd38a.js","assets/index.3a3c1369.css","assets/index.6e6030d1.js","assets/index.542f49a8.css","assets/index.d60da1cd.js","assets/index.49ada229.css","assets/index.28987d30.js","assets/index.47f7c782.css","assets/index.2e5a1dae.js","assets/index.579bd49e.css","assets/index.873c27ee.js","assets/index.7b8b5e30.css","assets/index.38230a24.js","assets/uniqBy.73b96c75.js","assets/download.add46730.js","assets/index.2c103eba.js","assets/useForm.fec2986b.js","assets/lock.344c64f4.js","assets/header.d801b988.js"]))},props:{theme:b.oneOf(["dark","light"])},setup(){const{prefixCls:e}=O("header-user-dropdown"),{t:k}=N(),{getShowDoc:g,getUseLockPage:h}=B(),i=S(),C=A(()=>{const{nickname:d="",avatar:I,desc:L}=i.getUserInfo||{};return{nickname:d,avatar:I||F,desc:L}}),[o,{openModal:c}]=T();function l(){c(!0)}function p(){i.confirmLoginOut()}function u(){P(R)}function w(d){switch(d.key){case"logout":p();break;case"doc":u();break;case"lock":l();break}}return{prefixCls:e,t:k,getUserInfo:C,handleMenuClick:w,getShowDoc:g,register:o,getUseLockPage:h}}}),j=["src"];function z(e,k,g,h,i,C){const o=n("MenuItem"),c=n("MenuDivider"),l=n("Menu"),p=n("Dropdown"),u=n("LockAction");return t(),V(E,null,[r(p,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m(()=>[r(l,{onClick:e.handleMenuClick},{default:m(()=>[e.getShowDoc?(t(),f(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):_("",!0),e.getShowDoc?(t(),f(c,{key:1})):_("",!0),e.getUseLockPage?(t(),f(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):_("",!0),r(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:m(()=>[a("span",{class:s([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:s(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,j),a("span",{class:s(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:s([`${e.prefixCls}__name  `,"truncate"])},x(e.getUserInfo.nickname),3)],2)],2)]),_:1},8,["overlayClassName"]),r(u,{onRegister:e.register},null,8,["onRegister"])],64)}var ae=M(W,[["render",z]]);export{ae as default};
