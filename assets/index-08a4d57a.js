import{B as me}from"./index-780c9b5c.js";import{d as _,e as be,c as j,a as S,u as ve}from"./components-d3c1de13.js";import{u as de}from"./useChildren-e46981d6.js";import{d as W,a as d,b as U,w as G,aj as fe,aM as ge,X as pe,_ as Z,p as R,f as $,h as F,O as M,i as w,S as m,m as x,j as L,N as O,R as ee,ag as Ce,D as he,M as Ne,F as ae,P as k,Q as I,ac as ye,aE as Be,q as l,ao as e}from"./vue-router-6d86b99d.js";import{v as ke}from"./index-a91d93ca.js";import{B as Ie}from"./index-19fe5936.js";import{I as le}from"./index-83a910b7.js";import{e as Se}from"./logger-525ef361.js";import{S as Y}from"./index-96345af7.js";import{d as $e}from"./index-dd768cde.js";import{u as Ae,a as te,_ as Ee,b as Pe,c as Te}from"./index-3c1b9f16.js";import{A as E}from"./appType-593f66f3.js";import"./index-7174c92a.js";import"./elements-ef5178c4.js";import"./shared-1843a447.js";import"./index-ffaf6c58.js";import"./index-65467f9f.js";import"./index-aa7c4fad.js";/* empty css               */import"./zIndex-ec604ca2.js";import"./lock-6e75224c.js";const _e={active:{type:[Number,String],default:0},fixed:{type:Boolean,default:!1},border:{type:Boolean,default:!1},safeArea:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:1},activeColor:{type:String},inactiveColor:{type:String},onChange:_(),"onUpdate:active":_(),onBeforeChange:_(),onFabClick:_(),fabProps:{type:Object}},ne=Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");function Ue(){const{childProviders:a,length:s,bindChildren:r}=de(ne);return{length:s,bottomNavigationItems:a,bindBottomNavigationItem:r}}const{n:Le,classes:Oe}=j("bottom-navigation"),{n:z}=j("bottom-navigation-item"),Q=z("--right-half-space"),X=z("--left-half-space"),J=z("--right-space"),Fe={type:"primary"},Me=W({name:"VarBottomNavigation",components:{VarButton:me},props:_e,setup(a,{slots:s}){const r=d(null),b=U(()=>a.active),f=U(()=>a.activeColor),C=U(()=>a.inactiveColor),v=d({}),{length:c,bottomNavigationItems:h,bindBottomNavigationItem:N}=Ue(),P=()=>{c.value===0||y()||B()||o()},y=()=>h.find(({name:i})=>b.value===i.value),B=()=>h.find(({index:i})=>b.value===i.value),o=()=>{pe(b.value)&&(b.value<0?S(a["onUpdate:active"],0):b.value>c.value-1&&S(a["onUpdate:active"],c.value-1))},u=i=>{b.value!==i&&(a.onBeforeChange?ie(i):H(i))},ie=i=>{const g=ge(S(a.onBeforeChange,i));Promise.all(g).then(A=>{A.every(Boolean)&&H(i)})},H=i=>{S(a["onUpdate:active"],i),S(a.onChange,i)},se=()=>{K().forEach(g=>{g.classList.remove(Q,X,J)})},q=i=>{const g=K(),A=g.length,T=i%2===0;g.forEach((D,V)=>{re(T,D,V,A)})},re=(i,g,A,T)=>{const D=A===T-1;if(!i&&D){g.classList.add(J);return}const V=A===T/2-1,ue=A===T/2;V?g.classList.add(Q):ue&&g.classList.add(X)},K=()=>Array.from(r.value.querySelectorAll(`.${z()}`)),ce=()=>{S(a.onFabClick)};return N({active:b,activeColor:f,inactiveColor:C,onToggle:u}),G(()=>c.value,P),G(()=>a.fabProps,i=>{v.value={...Fe,...i}},{immediate:!0,deep:!0}),be(()=>{s.fab&&q(c.value)}),fe(()=>{se(),s.fab&&q(c.value)}),{n:Le,classes:Oe,length:c,bottomNavigationDom:r,handleFabClick:ce,fabProps:v}}});function we(a,s,r,b,f,C){const v=R("var-button");return $(),F("div",{class:O(a.classes(a.n(),a.n("$--box"),[a.fixed,a.n("--fixed")],[a.border,a.n("--border")],[a.safeArea,a.n("--safe-area")])),ref:"bottomNavigationDom",style:ee(`z-index:${a.zIndex}`)},[M(a.$slots,"default"),a.$slots.fab?($(),w(v,x({key:0,class:a.classes(a.n("fab"),[a.length%2,a.n("--fab-right"),a.n("--fab-center")]),"var-bottom-navigation__fab":"",onClick:a.handleFabClick},a.fabProps,{round:""}),{default:m(()=>[M(a.$slots,"fab")]),_:3},16,["class","onClick"])):L("",!0)],6)}const p=Z(Me,[["render",we]]);p.install=function(a){a.component(p.name,p)};const ze={name:{type:String},icon:{type:String},label:{type:String},namespace:{type:String,default:"var-icon"},badge:{type:[Boolean,Object],default:!1},onClick:_()};function De(){const{parentProvider:a,index:s,bindParent:r}=ve(ne);return r||Se("BottomNavigationItem","<var-bottom-navigation-item/> must in <var-bottom-navigation/>"),{index:s,bottomNavigation:a,bindBottomNavigation:r}}const{n:Ve,classes:Ge}=j("bottom-navigation-item"),Re={type:"danger",dot:!0},je=W({name:"VarBottomNavigationItem",components:{VarBadge:Ie,VarIcon:le},directives:{Ripple:ke},props:ze,setup(a){const s=U(()=>a.name),r=U(()=>a.badge),b=d({}),{index:f,bottomNavigation:C,bindBottomNavigation:v}=De(),{active:c,activeColor:h,inactiveColor:N}=C,P={name:s,index:f},y=()=>c.value===s.value||c.value===f.value?h.value:N.value,B=()=>{const o=s.value??f.value;S(a.onClick,o),S(C.onToggle,o)};return v(P),G(()=>r.value,o=>{b.value=o===!0?Re:r.value},{immediate:!0}),{n:Ve,classes:Ge,index:f,active:c,badge:r,badgeProps:b,computeColorStyle:y,handleClick:B}}});function He(a,s,r,b,f,C){const v=R("var-icon"),c=R("var-badge"),h=Ce("ripple");return he(($(),F("button",{class:O(a.classes(a.n(),a.n("$--box"),[a.active===a.index||a.active===a.name,a.n("--active")])),style:ee({color:a.computeColorStyle()}),onClick:s[0]||(s[0]=(...N)=>a.handleClick&&a.handleClick(...N))},[a.icon&&!a.$slots.icon?($(),w(v,{key:0,name:a.icon,namespace:a.namespace,class:O(a.n("icon")),"var-bottom-navigation-item-cover":""},null,8,["name","namespace","class"])):L("",!0),M(a.$slots,"icon",{active:a.active===a.index||a.active===a.name}),a.badge?($(),w(c,x({key:1},a.badgeProps,{class:a.n("badge"),"var-bottom-navigation-item-cover":""}),null,16,["class"])):L("",!0),Ne("span",{class:O(a.n("label"))},[a.$slots.default?L("",!0):($(),F(ae,{key:0},[k(I(a.label),1)],64)),M(a.$slots,"default")],2)],6)),[[h]])}const n=Z(je,[["render",He]]);n.install=function(a){a.component(n.name,n)};const qe={basicUsage:"基本使用",matchByName:"通过名称匹配",showBadge:"徽标提示",customColor:"自定义颜色",changeEvent:"监听切换事件",clickEvent:"监听点击事件",fab:"悬浮按钮",label:"标签"},Ke={basicUsage:"Basic Usage",matchByName:"Match by name",showBadge:"Show Badge",customColor:"Custom Color",changeEvent:"Change Event",clickEvent:"Click Event",fab:"Fab",label:"label"},{add:oe,use:Ye,pack:t,packs:pa,merge:Ca}=Ae(),Qe=a=>{Te(a),Ye(a)};te("zh-CN",Ee);te("en-US",Pe);oe("zh-CN",qe);oe("en-US",Ke);const ha={__name:"index",setup(a){const s=d(0),r=d("home"),b=d(0),f={type:"primary",value:"66"},C=d(0),v=d(0),c=d(0),h=d(0),N=d(!0);function P(B){Y.info(`changed to ${B}`)}function y(B){Y.success(`clicked ${B}`)}return ye(Qe),Be($e),(B,o)=>($(),F(ae,null,[l(e(E),null,{default:m(()=>[k(I(e(t).basicUsage),1)]),_:1}),l(e(p),{active:s.value,"onUpdate:active":o[0]||(o[0]=u=>s.value=u)},{default:m(()=>[l(e(n),{label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(E),null,{default:m(()=>[k(I(e(t).matchByName),1)]),_:1}),l(e(p),{active:r.value,"onUpdate:active":o[1]||(o[1]=u=>r.value=u)},{default:m(()=>[l(e(n),{name:"home",label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{name:"search",label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{name:"heart",label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{name:"user",label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(E),null,{default:m(()=>[k(I(e(t).showBadge),1)]),_:1}),l(e(p),{active:b.value,"onUpdate:active":o[2]||(o[2]=u=>b.value=u)},{default:m(()=>[l(e(n),{label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"magnify",badge:""},null,8,["label"]),l(e(n),{label:e(t).label,icon:"heart",badge:f},null,8,["label"]),l(e(n),{label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(E),null,{default:m(()=>[k(I(e(t).customColor),1)]),_:1}),l(e(p),{"active-color":"#ba68c8",active:C.value,"onUpdate:active":o[3]||(o[3]=u=>C.value=u)},{default:m(()=>[l(e(n),{label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(E),null,{default:m(()=>[k(I(e(t).changeEvent),1)]),_:1}),l(e(p),{active:v.value,"onUpdate:active":o[4]||(o[4]=u=>v.value=u),onChange:P},{default:m(()=>[l(e(n),{label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(E),null,{default:m(()=>[k(I(e(t).clickEvent),1)]),_:1}),l(e(p),{active:c.value,"onUpdate:active":o[5]||(o[5]=u=>c.value=u)},{default:m(()=>[l(e(n),{onClick:y,label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{onClick:y,label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{onClick:y,label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{onClick:y,label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(E),null,{default:m(()=>[k(I(e(t).fab),1)]),_:1}),l(e(p),{active:h.value,"onUpdate:active":o[6]||(o[6]=u=>h.value=u),onFabClick:o[7]||(o[7]=u=>N.value=!N.value),style:{"margin-top":"10px"}},{fab:m(()=>[l(e(le),{name:"heart"})]),default:m(()=>[l(e(n),{label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"bell"},null,8,["label"]),N.value?L("",!0):($(),w(e(n),{key:0,label:e(t).label,icon:"account-circle"},null,8,["label"]))]),_:1},8,["active"])],64))}};export{ha as default};
