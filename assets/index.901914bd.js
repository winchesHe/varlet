import{S as p}from"./index.317596b1.js";import{b as _,f as d}from"./components.8b8d5d8f.js";import{T as u,a as f}from"./provide.d1a7e87a.js";import{_ as v}from"./elevation.8aaf18d0.js";import{q as b,r as c,b as l,d as I,o as T,k as S,i as B,B as C,f as E,m as w}from"./vendor.17911535.js";function x(){const{parentProvider:e,bindParent:a}=_(u),{index:t}=d(f);if(!e||!a||!t)throw Error("<var-tab-item/> must in <var-tabs-items/>");return{index:t,tabsItems:e,bindTabsItems:a}}const P={name:{type:[String,Number]}};const j=b({name:"VarTabItem",components:{VarSwipeItem:p},props:P,setup(e){const a=c(!1),t=c(!1),r=l(()=>e.name),{index:n,bindTabsItems:o}=x();return o({index:n,name:r,setCurrent:m=>{!t.value&&m&&(t.value=!0),a.value=m}}),{current:a,initSlot:t}}});function A(e,a,t,r,n,o){const i=I("var-swipe-item");return T(),S(i,{class:w(["var-tab-item",[!e.current&&"var-tab-item--inactive"]]),"var-tab-item-cover":""},{default:B(()=>[e.initSlot?C(e.$slots,"default",{key:0}):E("v-if",!0)]),_:3},8,["class"])}var s=v(j,[["render",A]]);s.install=function(e){e.component(s.name,s)};export{s as T};
