import{r as I,bm as Ae,a7 as et,a as ce,f as Y,j as f,bl as ne,S as ge,J as D,a3 as De,_ as Z,aO as Wt,bv as G,R as B,ak as je,V as he,dU as Dt,cW as jt,dV as Ft,dW as zt,aa as Fe,N as Ht,O as Vt,aH as Gt,C as ft,dX as Be,aS as bt,T as ue,bw as Pt,aA as Ut,ah as It,aQ as $t,G as qt,bA as Xt,aF as Yt,bL as Je,U as Zt,D as Jt,cS as Qt,bp as yt,aE as ea}from"./index.656c725e.js";import{u as ta}from"./uniqBy.73b96c75.js";function aa(o){var e=I(),t=I(!1);function r(){for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];t.value||(Ae.cancel(e.value),e.value=Ae(function(){o.apply(void 0,n)}))}return et(function(){t.value=!0,Ae.cancel(e.value)}),r}function na(o){var e=I([]),t=I(typeof o=="function"?o():o),r=aa(function(){var n=t.value;e.value.forEach(function(l){n=l(n)}),e.value=[],t.value=n});function a(n){e.value.push(n),r()}return[t,a]}var ia=ce({name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup:function(e,t){var r=t.expose,a=t.attrs,n=I();function l(v){var s;!((s=e.tab)===null||s===void 0)&&s.disabled||e.onClick(v)}r({domRef:n});function c(v){var s;v.preventDefault(),v.stopPropagation(),e.editable.onEdit("remove",{key:(s=e.tab)===null||s===void 0?void 0:s.key,event:v})}var u=Y(function(){var v;return e.editable&&e.closable!==!1&&!(!((v=e.tab)===null||v===void 0)&&v.disabled)});return function(){var v,s,b=e.prefixCls,g=e.id,O=e.active,P=e.tab,j=P.key,k=P.tab,z=P.disabled,x=P.closeIcon,d=e.renderWrapper,A=e.removeAriaLabel,H=e.editable,L=e.onFocus,E="".concat(b,"-tab"),M=f("div",{key:j,ref:n,class:ge(E,(v={},D(v,"".concat(E,"-with-remove"),u.value),D(v,"".concat(E,"-active"),O),D(v,"".concat(E,"-disabled"),z),v)),style:a.style,onClick:l},[f("div",{role:"tab","aria-selected":O,id:g&&"".concat(g,"-tab-").concat(j),class:"".concat(E,"-btn"),"aria-controls":g&&"".concat(g,"-panel-").concat(j),"aria-disabled":z,tabindex:z?null:0,onClick:function(K){K.stopPropagation(),l(K)},onKeydown:function(K){[ne.SPACE,ne.ENTER].includes(K.which)&&(K.preventDefault(),l(K))},onFocus:L},[typeof k=="function"?k():k]),u.value&&f("button",{type:"button","aria-label":A||"remove",tabindex:0,class:"".concat(E,"-remove"),onClick:function(K){K.stopPropagation(),c(K)}},[(x==null?void 0:x())||((s=H.removeIcon)===null||s===void 0?void 0:s.call(H))||"\xD7"])]);return d?d(M):M}}}),mt={width:0,height:0,left:0,top:0};function ra(o,e){var t=I(new Map);return De(function(){for(var r,a,n=new Map,l=o.value,c=e.value.get((r=l[0])===null||r===void 0?void 0:r.key)||mt,u=c.left+c.width,v=0;v<l.length;v+=1){var s=l[v].key,b=e.value.get(s);b||(b=e.value.get((a=l[v-1])===null||a===void 0?void 0:a.key)||mt);var g=n.get(s)||Z({},b);g.right=u-g.left-g.width,n.set(s,g)}t.value=new Map(n)}),t}var kt=ce({name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup:function(e,t){var r=t.expose,a=t.attrs,n=I();return r({domRef:n}),function(){var l=e.prefixCls,c=e.editable,u=e.locale;return!c||c.showAdd===!1?null:f("button",{ref:n,type:"button",class:"".concat(l,"-nav-add"),style:a.style,"aria-label":(u==null?void 0:u.addAriaLabel)||"Add tab",onClick:function(s){c.onEdit("add",{event:s})}},[c.addIcon?c.addIcon():"+"])}}}),la={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},oa=la;function ht(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){ua(o,a,t[a])})}return o}function ua(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}var tt=function(e,t){var r=ht({},e,t.attrs);return f(Wt,ht({},r,{icon:oa}),null)};tt.displayName="PlusOutlined";tt.inheritAttrs=!1;var ca=tt,va={prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:Fe.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function}},sa=ce({name:"OperationNode",inheritAttrs:!1,props:va,emits:["tabClick"],slots:["moreIcon"],setup:function(e,t){var r=t.attrs,a=t.slots,n=G(!1),l=B(n,2),c=l[0],u=l[1],v=G(null),s=B(v,2),b=s[0],g=s[1],O=function(d){for(var A=e.tabs.filter(function(U){return!U.disabled}),H=A.findIndex(function(U){return U.key===b.value})||0,L=A.length,E=0;E<L;E+=1){H=(H+d+L)%L;var M=A[H];if(!M.disabled){g(M.key);return}}},P=function(d){var A=d.which;if(!c.value){[ne.DOWN,ne.SPACE,ne.ENTER].includes(A)&&(u(!0),d.preventDefault());return}switch(A){case ne.UP:O(-1),d.preventDefault();break;case ne.DOWN:O(1),d.preventDefault();break;case ne.ESC:u(!1);break;case ne.SPACE:case ne.ENTER:b.value!==null&&e.onTabClick(b.value,d);break}},j=Y(function(){return"".concat(e.id,"-more-popup")}),k=Y(function(){return b.value!==null?"".concat(j.value,"-").concat(b.value):null}),z=function(d,A){d.preventDefault(),d.stopPropagation(),e.editable.onEdit("remove",{key:A,event:d})};return je(function(){he(b,function(){var x=document.getElementById(k.value);x&&x.scrollIntoView&&x.scrollIntoView(!1)},{flush:"post",immediate:!0})}),he(c,function(){c.value||g(null)}),function(){var x,d=e.prefixCls,A=e.id,H=e.tabs,L=e.locale,E=e.mobile,M=e.moreIcon,U=M===void 0?((x=a.moreIcon)===null||x===void 0?void 0:x.call(a))||f(Dt,null,null):M,K=e.moreTransitionName,F=e.editable,ve=e.tabBarGutter,S=e.rtl,i=e.onTabClick,y="".concat(d,"-dropdown"),T=L==null?void 0:L.dropdownAriaLabel,W=D({},S?"marginRight":"marginLeft",ve);H.length||(W.visibility="hidden",W.order=1);var R=ge(D({},"".concat(y,"-rtl"),S)),_=E?null:f(zt,{prefixCls:y,trigger:["hover"],visible:c.value,transitionName:K,onVisibleChange:u,overlayClassName:R,mouseEnterDelay:.1,mouseLeaveDelay:.1},{overlay:function(){return f(jt,{onClick:function(w){var $=w.key,ie=w.domEvent;i($,ie),u(!1)},id:j.value,tabindex:-1,role:"listbox","aria-activedescendant":k.value,selectedKeys:[b.value],"aria-label":T!==void 0?T:"expanded dropdown"},{default:function(){return[H.map(function(w){var $,ie,Te=F&&w.closable!==!1&&!w.disabled;return f(Ft,{key:w.key,id:"".concat(j.value,"-").concat(w.key),role:"option","aria-controls":A&&"".concat(A,"-panel-").concat(w.key),disabled:w.disabled},{default:function(){return[f("span",null,[typeof w.tab=="function"?w.tab():w.tab]),Te&&f("button",{type:"button","aria-label":e.removeAriaLabel||"remove",tabindex:0,class:"".concat(y,"-menu-item-remove"),onClick:function(se){se.stopPropagation(),z(se,w.key)}},[(($=w.closeIcon)===null||$===void 0?void 0:$.call(w))||((ie=F.removeIcon)===null||ie===void 0?void 0:ie.call(F))||"\xD7"])]}})})]}})},default:function(){return f("button",{type:"button",class:"".concat(d,"-nav-more"),style:W,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":j.value,id:"".concat(A,"-more"),"aria-expanded":c.value,onKeydown:P},[U])}});return f("div",{class:ge("".concat(d,"-nav-operations"),r.class),style:r.style},[_,f(kt,{prefixCls:d,locale:L,editable:F},null)])}}}),Et=Symbol("tabsContextKey"),_t=function(e){Ht(Et,e)},Bt=function(){return Vt(Et,{tabs:I([]),prefixCls:I()})};ce({name:"TabsContextProvider",inheritAttrs:!1,props:{tabs:{type:Object,default:void 0},prefixCls:{type:String,default:void 0}},setup:function(e,t){var r=t.slots;return _t(Gt(e)),function(){var a;return(a=r.default)===null||a===void 0?void 0:a.call(r)}}});var da=.1,gt=.01,Ke=20,St=Math.pow(.995,Ke);function fa(o,e){var t=G(),r=B(t,2),a=r[0],n=r[1],l=G(0),c=B(l,2),u=c[0],v=c[1],s=G(0),b=B(s,2),g=b[0],O=b[1],P=G(),j=B(P,2),k=j[0],z=j[1],x=I();function d(S){var i=S.touches[0],y=i.screenX,T=i.screenY;n({x:y,y:T}),clearInterval(x.value)}function A(S){if(!!a.value){S.preventDefault();var i=S.touches[0],y=i.screenX,T=i.screenY,W=y-a.value.x,R=T-a.value.y;e(W,R),n({x:y,y:T});var _=Date.now();O(_-u.value),v(_),z({x:W,y:R})}}function H(){if(!!a.value){var S=k.value;if(n(null),z(null),S){var i=S.x/g.value,y=S.y/g.value,T=Math.abs(i),W=Math.abs(y);if(Math.max(T,W)<da)return;var R=i,_=y;x.value=setInterval(function(){if(Math.abs(R)<gt&&Math.abs(_)<gt){clearInterval(x.value);return}R*=St,_*=St,e(R*Ke,_*Ke)},Ke)}}}var L=I();function E(S){var i=S.deltaX,y=S.deltaY,T=0,W=Math.abs(i),R=Math.abs(y);W===R?T=L.value==="x"?i:y:W>R?(T=i,L.value="x"):(T=y,L.value="y"),e(-T,-T)&&S.preventDefault()}var M=I({onTouchStart:d,onTouchMove:A,onTouchEnd:H,onWheel:E});function U(S){M.value.onTouchStart(S)}function K(S){M.value.onTouchMove(S)}function F(S){M.value.onTouchEnd(S)}function ve(S){M.value.onWheel(S)}je(function(){var S,i;document.addEventListener("touchmove",K,{passive:!1}),document.addEventListener("touchend",F,{passive:!1}),(S=o.value)===null||S===void 0||S.addEventListener("touchstart",U,{passive:!1}),(i=o.value)===null||i===void 0||i.addEventListener("wheel",ve,{passive:!1})}),et(function(){document.removeEventListener("touchmove",K),document.removeEventListener("touchend",F)})}function pt(o,e){var t=I(o);function r(a){var n=typeof a=="function"?a(t.value):a;n!==t.value&&e(n,t.value),t.value=n}return[t,r]}var xt={width:0,height:0,left:0,top:0,right:0},ba=function(){return{id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:{type:Object,default:void 0},editable:{type:Object},moreIcon:Fe.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:{type:Object,default:void 0},onTabClick:{type:Function},onTabScroll:{type:Function}}},Tt=ce({name:"TabNavList",inheritAttrs:!1,props:ba(),slots:["moreIcon","leftExtra","rightExtra","tabBarExtraContent"],emits:["tabClick","tabScroll"],setup:function(e,t){var r=t.attrs,a=t.slots,n=Bt(),l=n.tabs,c=n.prefixCls,u=I(),v=I(),s=I(),b=I(),g=ta(),O=B(g,2),P=O[0],j=O[1],k=Y(function(){return e.tabPosition==="top"||e.tabPosition==="bottom"}),z=pt(0,function(h,p){k.value&&e.onTabScroll&&e.onTabScroll({direction:h>p?"left":"right"})}),x=B(z,2),d=x[0],A=x[1],H=pt(0,function(h,p){!k.value&&e.onTabScroll&&e.onTabScroll({direction:h>p?"top":"bottom"})}),L=B(H,2),E=L[0],M=L[1],U=G(0),K=B(U,2),F=K[0],ve=K[1],S=G(0),i=B(S,2),y=i[0],T=i[1],W=G(null),R=B(W,2),_=R[0],xe=R[1],Se=G(null),w=B(Se,2),$=w[0],ie=w[1],Te=G(0),pe=B(Te,2),Ce=pe[0],se=pe[1],we=G(0),J=B(we,2),ze=J[0],Re=J[1],Ne=na(new Map),Oe=B(Ne,2),He=Oe[0],Pe=Oe[1],Le=ra(l,He),wt=Y(function(){return"".concat(c.value,"-nav-operations-hidden")}),Ie=I(0),ke=I(0);De(function(){k.value?e.rtl?(Ie.value=0,ke.value=Math.max(0,F.value-_.value)):(Ie.value=Math.min(0,_.value-F.value),ke.value=0):(Ie.value=Math.min(0,$.value-y.value),ke.value=0)});var Ve=function(p){return p<Ie.value?Ie.value:p>ke.value?ke.value:p},at=I(),Rt=G(),nt=B(Rt,2),Ge=nt[0],it=nt[1],Ue=function(){it(Date.now())},$e=function(){clearTimeout(at.value)},rt=function(p,m){p(function(N){var C=Ve(N+m);return C})};fa(u,function(h,p){if(k.value){if(_.value>=F.value)return!1;rt(A,h)}else{if($.value>=y.value)return!1;rt(M,p)}return $e(),Ue(),!0}),he(Ge,function(){$e(),Ge.value&&(at.value=setTimeout(function(){it(0)},100))});var lt=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activeKey,m=Le.value.get(p)||{width:0,height:0,left:0,right:0,top:0};if(k.value){var N=d.value;e.rtl?m.right<d.value?N=m.right:m.right+m.width>d.value+_.value&&(N=m.right+m.width-_.value):m.left<-d.value?N=-m.left:m.left+m.width>-d.value+_.value&&(N=-(m.left+m.width-_.value)),M(0),A(Ve(N))}else{var C=E.value;m.top<-E.value?C=-m.top:m.top+m.height>-E.value+$.value&&(C=-(m.top+m.height-$.value)),A(0),M(Ve(C))}},qe=I(0),Xe=I(0);De(function(){var h,p,m,N,C,q,X,be=Le.value;["top","bottom"].includes(e.tabPosition)?(p="width",C=_.value,q=F.value,X=Ce.value,m=e.rtl?"right":"left",N=Math.abs(d.value)):(p="height",C=$.value,q=F.value,X=ze.value,m="top",N=-E.value);var Q=C;q+X>C&&q<C&&(Q=C-X);var re=l.value;if(!re.length){var le;return le=[0,0],qe.value=le[0],Xe.value=le[1],le}for(var ye=re.length,V=ye,te=0;te<ye;te+=1){var ae=be.get(re[te].key)||xt;if(ae[m]+ae[p]>N+Q){V=te-1;break}}for(var oe=0,ee=ye-1;ee>=0;ee-=1){var me=be.get(re[ee].key)||xt;if(me[m]<N){oe=ee+1;break}}return h=[oe,V],qe.value=h[0],Xe.value=h[1],h});var Ye=function(){var p,m,N,C,q,X=((p=u.value)===null||p===void 0?void 0:p.offsetWidth)||0,be=((m=u.value)===null||m===void 0?void 0:m.offsetHeight)||0,Q=((N=b.value)===null||N===void 0?void 0:N.$el)||{},re=Q.offsetWidth||0,le=Q.offsetHeight||0;xe(X),ie(be),se(re),Re(le);var ye=(((C=v.value)===null||C===void 0?void 0:C.offsetWidth)||0)-re,V=(((q=v.value)===null||q===void 0?void 0:q.offsetHeight)||0)-le;ve(ye),T(V),Pe(function(){var te=new Map;return l.value.forEach(function(ae){var oe=ae.key,ee,me=j.value.get(oe),fe=((ee=me)===null||ee===void 0?void 0:ee.$el)||me;fe&&te.set(oe,{width:fe.offsetWidth,height:fe.offsetHeight,left:fe.offsetLeft,top:fe.offsetTop})}),te})},ot=Y(function(){return[].concat(ft(l.value.slice(0,qe.value)),ft(l.value.slice(Xe.value+1)))}),Nt=G(),ut=B(Nt,2),Ot=ut[0],Lt=ut[1],de=Y(function(){return Le.value.get(e.activeKey)}),ct=I(),vt=function(){Ae.cancel(ct.value)};he([de,k,function(){return e.rtl}],function(){var h={};de.value&&(k.value?(e.rtl?h.right=Be(de.value.right):h.left=Be(de.value.left),h.width=Be(de.value.width)):(h.top=Be(de.value.top),h.height=Be(de.value.height))),vt(),ct.value=Ae(function(){Lt(h)})}),he([function(){return e.activeKey},de,Le,k],function(){lt()},{flush:"post"}),he([function(){return e.rtl},function(){return e.tabBarGutter},function(){return e.activeKey},function(){return l.value}],function(){Ye()},{flush:"post"});var Ze=function(p){var m=p.position,N=p.prefixCls,C=p.extra;if(!C)return null;var q=C==null?void 0:C({position:m});return q?f("div",{class:"".concat(N,"-extra-content")},[q]):null};return et(function(){$e(),vt()}),function(){var h,p=e.id,m=e.animated,N=e.activeKey,C=e.rtl,q=e.editable,X=e.locale,be=e.tabPosition,Q=e.tabBarGutter,re=e.onTabClick,le=r.class,ye=r.style,V=c.value,te=!!ot.value.length,ae="".concat(V,"-nav-wrap"),oe,ee,me,fe;k.value?C?(ee=d.value>0,oe=d.value+_.value<F.value):(oe=d.value<0,ee=-d.value+_.value<F.value):(me=E.value<0,fe=-E.value+$.value<y.value);var Me={};be==="top"||be==="bottom"?Me[C?"marginRight":"marginLeft"]=typeof Q=="number"?"".concat(Q,"px"):Q:Me.marginTop=typeof Q=="number"?"".concat(Q,"px"):Q;var st=l.value.map(function(Ee,dt){var _e=Ee.key;return f(ia,{id:p,prefixCls:V,key:_e,tab:Ee,style:dt===0?void 0:Me,closable:Ee.closable,editable:q,active:_e===N,removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:P(_e),onClick:function(Kt){re(_e,Kt)},onFocus:function(){lt(_e),Ue(),u.value&&(C||(u.value.scrollLeft=0),u.value.scrollTop=0)}},a)});return f("div",{role:"tablist",class:ge("".concat(V,"-nav"),le),style:ye,onKeydown:function(){Ue()}},[f(Ze,{position:"left",prefixCls:V,extra:a.leftExtra},null),f(bt,{onResize:Ye},{default:function(){return[f("div",{class:ge(ae,(h={},D(h,"".concat(ae,"-ping-left"),oe),D(h,"".concat(ae,"-ping-right"),ee),D(h,"".concat(ae,"-ping-top"),me),D(h,"".concat(ae,"-ping-bottom"),fe),h)),ref:u},[f(bt,{onResize:Ye},{default:function(){return[f("div",{ref:v,class:"".concat(V,"-nav-list"),style:{transform:"translate(".concat(d.value,"px, ").concat(E.value,"px)"),transition:Ge.value?"none":void 0}},[st,f(kt,{ref:b,prefixCls:V,locale:X,editable:q,style:Z(Z({},st.length===0?void 0:Me),{visibility:te?"hidden":null})},null),f("div",{class:ge("".concat(V,"-ink-bar"),D({},"".concat(V,"-ink-bar-animated"),m.inkBar)),style:Ot.value},null)])]}})])]}}),f(sa,ue(ue({},e),{},{removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:s,prefixCls:V,tabs:ot.value,class:!te&&wt.value}),Pt(a,["moreIcon"])),f(Ze,{position:"right",prefixCls:V,extra:a.rightExtra},null),f(Ze,{position:"right",prefixCls:V,extra:a.tabBarExtraContent},null)])}}}),ya=ce({name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup:function(e){var t=Bt(),r=t.tabs,a=t.prefixCls;return function(){var n=e.id,l=e.activeKey,c=e.animated,u=e.tabPosition,v=e.rtl,s=e.destroyInactiveTabPane,b=c.tabPane,g=a.value,O=r.value.findIndex(function(P){return P.key===l});return f("div",{class:"".concat(g,"-content-holder")},[f("div",{class:["".concat(g,"-content"),"".concat(g,"-content-").concat(u),D({},"".concat(g,"-content-animated"),b)],style:O&&b?D({},v?"marginRight":"marginLeft","-".concat(O,"00%")):null},[r.value.map(function(P){return Ut(P.node,{key:P.key,prefixCls:g,tabKey:P.key,id:n,animated:b,active:P.key===l,destroyInactiveTabPane:s})})])])}}}),Ct=0,At=function(){return{prefixCls:{type:String},id:{type:String},activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:{type:String},animated:{type:[Boolean,Object]},renderTabBar:{type:Function},tabBarGutter:{type:Number},tabBarStyle:{type:Object},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean},hideAdd:Boolean,type:{type:String},size:{type:String},centered:Boolean,onEdit:{type:Function},onChange:{type:Function},onTabClick:{type:Function},onTabScroll:{type:Function},"onUpdate:activeKey":{type:Function},locale:{type:Object,default:void 0},onPrevClick:Function,onNextClick:Function,tabBarExtraContent:Fe.any}};function ma(o){return o.map(function(e){if(qt(e)){for(var t=Z({},e.props||{}),r=0,a=Object.entries(t);r<a.length;r++){var n=B(a[r],2),l=n[0],c=n[1];delete t[l],t[Xt(l)]=c}var u=e.children||{},v=e.key!==void 0?e.key:void 0,s=t.tab,b=s===void 0?u.tab:s,g=t.disabled,O=t.forceRender,P=t.closable,j=t.animated,k=t.active,z=t.destroyInactiveTabPane;return Z(Z({key:v},t),{node:e,closeIcon:u.closeIcon,tab:b,disabled:g===""||g,forceRender:O===""||O,closable:P===""||P,animated:j===""||j,active:k===""||k,destroyInactiveTabPane:z===""||z})}return null}).filter(function(e){return e})}var ha=ce({name:"InternalTabs",inheritAttrs:!1,props:Z(Z({},It(At(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{tabs:{type:Array}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var r=t.attrs,a=t.slots;Je(e.onPrevClick===void 0&&e.onNextClick===void 0,"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),Je(e.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),Je(a.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");var n=Zt("tabs",e),l=n.prefixCls,c=n.direction,u=n.size,v=n.rootPrefixCls,s=Y(function(){return c.value==="rtl"}),b=Y(function(){var i=e.animated,y=e.tabPosition;return i===!1||["left","right"].includes(y)?{inkBar:!1,tabPane:!1}:i===!0?{inkBar:!0,tabPane:!0}:Z({inkBar:!0,tabPane:!1},Jt(i)==="object"?i:{})}),g=G(!1),O=B(g,2),P=O[0],j=O[1];je(function(){j(Qt())});var k=yt(function(){var i;return(i=e.tabs[0])===null||i===void 0?void 0:i.key},{value:Y(function(){return e.activeKey}),defaultValue:e.defaultActiveKey}),z=B(k,2),x=z[0],d=z[1],A=G(function(){return e.tabs.findIndex(function(i){return i.key===x.value})}),H=B(A,2),L=H[0],E=H[1];De(function(){var i,y=e.tabs.findIndex(function(T){return T.key===x.value});y===-1&&(y=Math.max(0,Math.min(L.value,e.tabs.length-1)),d((i=e.tabs[y])===null||i===void 0?void 0:i.key)),E(y)});var M=yt(null,{value:Y(function(){return e.id})}),U=B(M,2),K=U[0],F=U[1],ve=Y(function(){return P.value&&!["left","right"].includes(e.tabPosition)?"top":e.tabPosition});je(function(){e.id||(F("rc-tabs-".concat(Ct)),Ct+=1)});var S=function(y,T){var W,R;(W=e.onTabClick)===null||W===void 0||W.call(e,y,T);var _=y!==x.value;d(y),_&&((R=e.onChange)===null||R===void 0||R.call(e,y))};return _t({tabs:Y(function(){return e.tabs}),prefixCls:l}),function(){var i,y=e.id,T=e.type,W=e.tabBarGutter,R=e.tabBarStyle,_=e.locale,xe=e.destroyInactiveTabPane,Se=e.renderTabBar,w=Se===void 0?a.renderTabBar:Se,$=e.onTabScroll,ie=e.hideAdd,Te=e.centered,pe={id:K.value,activeKey:x.value,animated:b.value,tabPosition:ve.value,rtl:s.value,mobile:P.value},Ce;T==="editable-card"&&(Ce={onEdit:function(Re,Ne){var Oe=Ne.key,He=Ne.event,Pe;(Pe=e.onEdit)===null||Pe===void 0||Pe.call(e,Re==="add"?He:Oe,Re)},removeIcon:function(){return f(ea,null,null)},addIcon:a.addIcon?a.addIcon:function(){return f(ca,null,null)},showAdd:ie!==!0});var se,we=Z(Z({},pe),{moreTransitionName:"".concat(v.value,"-slide-up"),editable:Ce,locale:_,tabBarGutter:W,onTabClick:S,onTabScroll:$,style:R});w?se=w(Z(Z({},we),{DefaultTabBar:Tt})):se=f(Tt,we,Pt(a,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));var J=l.value;return f("div",ue(ue({},r),{},{id:y,class:ge(J,"".concat(J,"-").concat(ve.value),(i={},D(i,"".concat(J,"-").concat(u.value),u.value),D(i,"".concat(J,"-card"),["card","editable-card"].includes(T)),D(i,"".concat(J,"-editable-card"),T==="editable-card"),D(i,"".concat(J,"-centered"),Te),D(i,"".concat(J,"-mobile"),P.value),D(i,"".concat(J,"-editable"),T==="editable-card"),D(i,"".concat(J,"-rtl"),s.value),i),r.class)}),[se,f(ya,ue(ue({destroyInactiveTabPane:xe},pe),{},{animated:b.value}),null)])}}}),We=ce({name:"ATabs",inheritAttrs:!1,props:It(At(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var r=t.attrs,a=t.slots,n=t.emit,l=function(u){n("update:activeKey",u),n("change",u)};return function(){var c,u=ma($t((c=a.default)===null||c===void 0?void 0:c.call(a)));return f(ha,ue(ue(ue({},Yt(e,["onUpdate:activeKey"])),r),{},{onChange:l,tabs:u}),a)}}}),ga=function(){return{tab:Fe.any,disabled:{type:Boolean},forceRender:{type:Boolean},closable:{type:Boolean},animated:{type:Boolean},active:{type:Boolean},destroyInactiveTabPane:{type:Boolean},prefixCls:{type:String},tabKey:{type:[String,Number]},id:{type:String}}},Qe=ce({name:"ATabPane",inheritAttrs:!1,__ANT_TAB_PANE:!0,props:ga(),slots:["closeIcon","tab"],setup:function(e,t){var r=t.attrs,a=t.slots,n=I(e.forceRender);he([function(){return e.active},function(){return e.destroyInactiveTabPane}],function(){e.active?n.value=!0:e.destroyInactiveTabPane&&(n.value=!1)},{immediate:!0});var l=Y(function(){return e.active?{}:e.animated?{visibility:"hidden",height:0,overflowY:"hidden"}:{display:"none"}});return function(){var c,u=e.prefixCls,v=e.forceRender,s=e.id,b=e.active,g=e.tabKey;return f("div",{id:s&&"".concat(s,"-panel-").concat(g),role:"tabpanel",tabindex:b?0:-1,"aria-labelledby":s&&"".concat(s,"-tab-").concat(g),"aria-hidden":!b,style:[l.value,r.style],class:["".concat(u,"-tabpane"),b&&"".concat(u,"-tabpane-active"),r.class]},[(b||n.value||v)&&((c=a.default)===null||c===void 0?void 0:c.call(a))])}}});We.TabPane=Qe;We.install=function(o){return o.component(We.name,We),o.component(Qe.name,Qe),o};export{We as T};
