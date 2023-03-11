import{B as be}from"./index-654ec1c7.js";import{d as T,b as me,c as j,a as S,u as ve}from"./components-440543a7.js";import{u as de}from"./useChildren-9d793b89.js";import{d as W,a as f,b as U,w as G,aj as fe,X as ge,ax as pe,_ as Z,p as R,f as $,h as F,O as M,i as w,S as b,m as x,j as L,N as O,R as ee,ag as Ce,D as he,M as Ne,F as ae,P as k,Q as I,ac as ye,aC as Be,q as l,ap as e,aD as P}from"./vue-router.esm-bundler-6be07501.js";import{v as ke}from"./index-18c186b5.js";import{B as Ie}from"./index-60a7ba7b.js";import{I as le}from"./index-84639265.js";import{S as Y}from"./index-80508c76.js";import{d as Se}from"./index-59604d2c.js";import{u as $e,c as Ee,a as te,_ as Ae,b as Pe}from"./index-3093d569.js";import"./index-76209a1a.js";import"./elements-323d4edc.js";import"./shared-bf7e5160.js";import"./index-d73f18e4.js";import"./index-acdd7a60.js";/* empty css               */import"./zIndex-e9e1e7c3.js";import"./lock-429dead7.js";const _e={active:{type:[Number,String],default:0},fixed:{type:Boolean,default:!1},border:{type:Boolean,default:!1},safeArea:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:1},activeColor:{type:String},inactiveColor:{type:String},onChange:T(),"onUpdate:active":T(),onBeforeChange:T(),onFabClick:T(),fabProps:{type:Object}},ne=Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");function Te(){const{childProviders:a,length:s,bindChildren:c}=de(ne);return{length:s,bottomNavigationItems:a,bindBottomNavigationItem:c}}const{n:Ue,classes:Le}=j("bottom-navigation"),{n:D}=j("bottom-navigation-item"),Q=D("--right-half-space"),X=D("--left-half-space"),J=D("--right-space"),Oe={type:"primary"},Fe=W({name:"VarBottomNavigation",components:{VarButton:be},props:_e,setup(a,{slots:s}){const c=f(null),m=U(()=>a.active),g=U(()=>a.activeColor),C=U(()=>a.inactiveColor),d=f({}),{length:r,bottomNavigationItems:h,bindBottomNavigationItem:N}=Te(),_=()=>{r.value===0||y()||B()||o()},y=()=>h.find(({name:i})=>m.value===i.value),B=()=>h.find(({index:i})=>m.value===i.value),o=()=>{ge(m.value)&&(m.value<0?S(a["onUpdate:active"],0):m.value>r.value-1&&S(a["onUpdate:active"],r.value-1))},u=i=>{m.value!==i&&(a.onBeforeChange?ie(i):H(i))},ie=i=>{let v=S(a.onBeforeChange,i);v=pe(v)?v:[v],Promise.all(v).then(E=>{E.some(A=>!A)||H(i)})},H=i=>{S(a["onUpdate:active"],i),S(a.onChange,i)},se=()=>{K().forEach(v=>{v.classList.remove(Q,X,J)})},q=i=>{const v=K(),E=v.length,A=i%2===0;v.forEach((z,V)=>{ce(A,z,V,E)})},ce=(i,v,E,A)=>{const z=E===A-1;if(!i&&z){v.classList.add(J);return}const V=E===A/2-1,ue=E===A/2;V?v.classList.add(Q):ue&&v.classList.add(X)},K=()=>Array.from(c.value.querySelectorAll(`.${D()}`)),re=()=>{S(a.onFabClick)};return N({active:m,activeColor:g,inactiveColor:C,onToggle:u}),G(()=>r.value,_),G(()=>a.fabProps,i=>{d.value={...Oe,...i}},{immediate:!0,deep:!0}),me(()=>{s.fab&&q(r.value)}),fe(()=>{se(),s.fab&&q(r.value)}),{n:Ue,classes:Le,length:r,bottomNavigationDom:c,handleFabClick:re,fabProps:d}}});function Me(a,s,c,m,g,C){const d=R("var-button");return $(),F("div",{class:O(a.classes(a.n(),[a.fixed,a.n("--fixed")],[a.border,a.n("--border")],[a.safeArea,a.n("--safe-area")])),ref:"bottomNavigationDom",style:ee(`z-index:${a.zIndex}`)},[M(a.$slots,"default"),a.$slots.fab?($(),w(d,x({key:0,class:a.classes(a.n("fab"),[a.length%2,a.n("--fab-right"),a.n("--fab-center")]),"var-bottom-navigation__fab":"",onClick:a.handleFabClick},a.fabProps,{round:""}),{default:b(()=>[M(a.$slots,"fab")]),_:3},16,["class","onClick"])):L("",!0)],6)}const p=Z(Fe,[["render",Me]]);p.install=function(a){a.component(p.name,p)};const we={name:{type:String},icon:{type:String},label:{type:String},namespace:{type:String,default:"var-icon"},badge:{type:[Boolean,Object],default:!1},onClick:T()};function De(){const{parentProvider:a,index:s,bindParent:c}=ve(ne);if(!c)throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");return{index:s,bottomNavigation:a,bindBottomNavigation:c}}const{n:ze,classes:Ve}=j("bottom-navigation-item"),Ge={type:"danger",dot:!0},Re=W({name:"VarBottomNavigationItem",components:{VarBadge:Ie,VarIcon:le},directives:{Ripple:ke},props:we,setup(a){const s=U(()=>a.name),c=U(()=>a.badge),m=f({}),{index:g,bottomNavigation:C,bindBottomNavigation:d}=De(),{active:r,activeColor:h,inactiveColor:N}=C,_={name:s,index:g},y=()=>r.value===s.value||r.value===g.value?h.value:N.value,B=()=>{const o=s.value??g.value;S(a.onClick,o),S(C.onToggle,o)};return d(_),G(()=>c.value,o=>{m.value=o===!0?Ge:c.value},{immediate:!0}),{n:ze,classes:Ve,index:g,active:r,badge:c,badgeProps:m,computeColorStyle:y,handleClick:B}}});function je(a,s,c,m,g,C){const d=R("var-icon"),r=R("var-badge"),h=Ce("ripple");return he(($(),F("button",{class:O(a.classes(a.n(),[a.active===a.index||a.active===a.name,a.n("--active")])),style:ee({color:a.computeColorStyle()}),onClick:s[0]||(s[0]=(...N)=>a.handleClick&&a.handleClick(...N))},[a.icon&&!a.$slots.icon?($(),w(d,{key:0,name:a.icon,namespace:a.namespace,class:O(a.n("icon")),"var-bottom-navigation-item-cover":""},null,8,["name","namespace","class"])):L("",!0),M(a.$slots,"icon",{active:a.active===a.index||a.active===a.name}),a.badge?($(),w(r,x({key:1},a.badgeProps,{class:a.n("badge"),"var-bottom-navigation-item-cover":""}),null,16,["class"])):L("",!0),Ne("span",{class:O(a.n("label"))},[a.$slots.default?L("",!0):($(),F(ae,{key:0},[k(I(a.label),1)],64)),M(a.$slots,"default")],2)],6)),[[h]])}const n=Z(Re,[["render",je]]);n.install=function(a){a.component(n.name,n)};const He={basicUsage:"基本使用",matchByName:"通过名称匹配",showBadge:"徽标提示",customColor:"自定义颜色",changeEvent:"监听切换事件",clickEvent:"监听点击事件",fab:"悬浮按钮",label:"标签"},qe={basicUsage:"Basic Usage",matchByName:"Match by name",showBadge:"Show Badge",customColor:"Custom Color",changeEvent:"Change Event",clickEvent:"Click Event",fab:"Fab",label:"label"},{add:oe,use:Ke,pack:t,packs:va,merge:da}=$e(),Ye=a=>{Ee(a),Ke(a)};te("zh-CN",Ae);te("en-US",Pe);oe("zh-CN",He);oe("en-US",qe);const fa={setup(a){const s=f(0),c=f("home"),m=f(0),g={type:"primary",value:"66"},C=f(0),d=f(0),r=f(0),h=f(0),N=f(!0);function _(B){Y.info(`changed to ${B}`)}function y(B){Y.success(`clicked ${B}`)}return ye(Ye),Be(Se),(B,o)=>($(),F(ae,null,[l(e(P),null,{default:b(()=>[k(I(e(t).basicUsage),1)]),_:1}),l(e(p),{active:s.value,"onUpdate:active":o[0]||(o[0]=u=>s.value=u)},{default:b(()=>[l(e(n),{label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(P),null,{default:b(()=>[k(I(e(t).matchByName),1)]),_:1}),l(e(p),{active:c.value,"onUpdate:active":o[1]||(o[1]=u=>c.value=u)},{default:b(()=>[l(e(n),{name:"home",label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{name:"search",label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{name:"heart",label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{name:"user",label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(P),null,{default:b(()=>[k(I(e(t).showBadge),1)]),_:1}),l(e(p),{active:m.value,"onUpdate:active":o[2]||(o[2]=u=>m.value=u)},{default:b(()=>[l(e(n),{label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"magnify",badge:""},null,8,["label"]),l(e(n),{label:e(t).label,icon:"heart",badge:g},null,8,["label"]),l(e(n),{label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(P),null,{default:b(()=>[k(I(e(t).customColor),1)]),_:1}),l(e(p),{"active-color":"#ba68c8",active:C.value,"onUpdate:active":o[3]||(o[3]=u=>C.value=u)},{default:b(()=>[l(e(n),{label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(P),null,{default:b(()=>[k(I(e(t).changeEvent),1)]),_:1}),l(e(p),{active:d.value,"onUpdate:active":o[4]||(o[4]=u=>d.value=u),onChange:_},{default:b(()=>[l(e(n),{label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(P),null,{default:b(()=>[k(I(e(t).clickEvent),1)]),_:1}),l(e(p),{active:r.value,"onUpdate:active":o[5]||(o[5]=u=>r.value=u)},{default:b(()=>[l(e(n),{onClick:y,label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{onClick:y,label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{onClick:y,label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{onClick:y,label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(P),null,{default:b(()=>[k(I(e(t).fab),1)]),_:1}),l(e(p),{active:h.value,"onUpdate:active":o[6]||(o[6]=u=>h.value=u),onFabClick:o[7]||(o[7]=u=>N.value=!N.value),style:{"margin-top":"10px"}},{fab:b(()=>[l(e(le),{name:"heart"})]),default:b(()=>[l(e(n),{label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"bell"},null,8,["label"]),N.value?L("",!0):($(),w(e(n),{key:0,label:e(t).label,icon:"account-circle"},null,8,["label"]))]),_:1},8,["active"])],64))}};export{fa as default};
