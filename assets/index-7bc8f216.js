import{u as v}from"./elements-daad42ba.js";import{a as b,c as x}from"./components-105afbd7.js";import{d as N,az as P,r as R,a as U,aa as w,v as E,a1 as z,f as B,h as F,q as a,S as s,ap as t,F as $,P as u,Q as i,aE as y}from"./vue-router-3467edf1.js";import{R as j}from"./index-3f752fdf.js";import{S as L}from"./index-1c3f0bad.js";import{B as h}from"./index-47bb486f.js";import{d as O}from"./index-dd768cde.js";import{u as q,c as A,a as _,_ as D,b as K}from"./index-3e5cce21.js";import"./shared-72da4837.js";import"./logger-525ef361.js";import"./index-73a90170.js";import"./provide-d4683ddf.js";import"./useChildren-6152c626.js";import"./index-0aad7ce4.js";import"./index-3c38205a.js";/* empty css               */import"./index-6c867e4a.js";import"./index-614c1e59.js";import"./index-c6b57f8c.js";const Q={styleVars:{type:Object,default:()=>({})},tag:{type:String,default:"div"}},{n:G}=x("style-provider"),l=N({name:"VarStyleProvider",props:Q,setup(e,{slots:n}){return()=>P(e.tag,{class:G(),style:v(e.styleVars)},b(n.default))}});const g=[];function c(e){g.forEach(o=>document.documentElement.style.removeProperty(o)),g.length=0;const n=v(e??{});Object.entries(n).forEach(([o,r])=>{document.documentElement.style.setProperty(o,r),g.push(o)})}c.Component=l;l.install=function(e){e.component(l.name,l)};c.install=function(e){e.component(l.name,l)};const H={componentCall:"组件调用",functionCall:"函数调用",toggleTheme:"切换样式变量",toggleRootTheme:"切换根节点样式变量"},I={componentCall:"Component Call",functionCall:"Function Call",toggleTheme:"Toggle Theme",toggleRootTheme:"Toggle Root Theme"},{add:C,use:J,pack:p,packs:ye,merge:he}=q(),M=e=>{A(e),J(e)};_("zh-CN",D);_("en-US",K);C("zh-CN",H);C("en-US",I);const ve={__name:"index",setup(e){const n=c.Component,o=R({score:5,license:!0}),r=U(null);let d=null;const T={"--rate-primary-color":"var(--color-success)","--button-primary-color":"var(--color-success)","--switch-handle-active-background":"var(--color-success)","--switch-track-active-background":"var(--color-success)"},V={"--color-primary":"#3f51b5"};function S(){r.value=r.value?null:T}function k(){d=d?null:V,c(d)}return w(M),E(()=>{c(z()==="darkTheme"?O:null)}),(W,m)=>(B(),F($,null,[a(t(y),null,{default:s(()=>[u(i(t(p).componentCall),1)]),_:1}),a(t(n),{"style-vars":r.value},{default:s(()=>[a(t(j),{modelValue:o.score,"onUpdate:modelValue":m[0]||(m[0]=f=>o.score=f)},null,8,["modelValue"]),a(t(L),{modelValue:o.license,"onUpdate:modelValue":m[1]||(m[1]=f=>o.license=f)},null,8,["modelValue"]),a(t(h),{style:{"margin-top":"10px"},type:"primary",block:"",onClick:S},{default:s(()=>[u(i(t(p).toggleTheme),1)]),_:1})]),_:1},8,["style-vars"]),a(t(y),null,{default:s(()=>[u(i(t(p).functionCall),1)]),_:1}),a(t(h),{type:"primary",block:"",onClick:k},{default:s(()=>[u(i(t(p).toggleRootTheme),1)]),_:1})],64))}};export{ve as default};
