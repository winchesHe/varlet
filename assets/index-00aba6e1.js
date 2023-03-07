import{c as B}from"./index-9c02a7e3.js";import{c as N,m as w}from"./components-fe6f9a05.js";import{a as d}from"./elements-9a8e8a45.js";/* empty css               */import{d as x,q as a,r as O,a as U,aB as _,ac as z,f as T,h as $,S as s,ap as r,F as D,P as l,Q as c,aC as L}from"./vue-router.esm-bundler-2ca71151.js";import{B as m}from"./index-2d956dae.js";import{S as M}from"./index-d1824a34.js";import{d as V}from"./index-59604d2c.js";import{u as j,c as E,a as h,_ as F,b as I}from"./index-1e358a5a.js";import"./shared-5e0af17c.js";import"./index-5db115f0.js";import"./index-e4fc01f7.js";import"./index-2b8b62c3.js";const P={value:{type:Number,default:0},opacity:{type:Number,default:0},error:{type:Boolean,default:!1},color:{type:String},errorColor:{type:String},height:{type:[Number,String]},top:{type:[Number,String]}};const{classes:q,n:y}=N("loading-bar"),A=x({name:"VarLoadingBar",props:P,setup(e){return()=>a("div",{class:q(y(),[e.error,y("--error")]),style:{zIndex:B.zIndex+10,width:`${e.value}%`,opacity:e.opacity,height:d(e.height),backgroundColor:e.error?e.errorColor:e.color,top:d(e.top)}},null)}});let v,g,C={};const Q={value:0,opacity:0,error:!1},t=O(Q),G=e=>{Object.assign(t,e)},H=e=>{Object.assign(t,e),C=e},J=()=>{Object.keys(C).forEach(e=>{t[e]!==void 0&&(t[e]=void 0)})},b=()=>{v=window.setTimeout(()=>{if(t.value>=95)return;let e=Math.random();t.value<70&&(e=Math.round(5*Math.random())),t.value+=e,b()},200)},K=()=>{g||(g=!0,w(A,t)),(!t.error||t.value===100)&&(t.value=0),setTimeout(()=>{t.opacity=1},200),b()},R=()=>{t.value=100,setTimeout(()=>{t.opacity=0,setTimeout(()=>{t.error=!1},250)},300),window.clearTimeout(v)},W=()=>{t.error=!0,p.start(),setTimeout(p.finish,300)},p={start:K,finish:R,error:W,mergeConfig:G,setDefaultOptions:H,resetDefaultOptions:J},n=p,X={basicUsage:"基本使用",start:"开始",finish:"结束",error:"错误",custom:"设置样式",clear:"清除样式"},Y={basicUsage:"Basic Usage",start:"Start",finish:"Finish",error:"Error",custom:"Custom Style",clear:"Clear Style"},{add:S,use:Z,pack:i,packs:ye,merge:ge}=j(),ee=e=>{E(e),Z(e)};h("zh-CN",F);h("en-US",I);S("zh-CN",X);S("en-US",Y);const he={setup(e){const u=U(!1);function k(){u.value?n.resetDefaultOptions():n.setDefaultOptions({errorColor:"#ff8800",color:"#10afef",height:"5px"}),u.value=!u.value}return _(V),z(ee),n.setDefaultOptions({top:"14.5vw"}),(te,o)=>(T(),$(D,null,[a(r(L),null,{default:s(()=>[l(c(r(i).basicUsage),1)]),_:1}),a(r(M),{direction:"column",size:["3vw","4vw"]},{default:s(()=>[a(r(m),{type:"primary",block:"",onClick:o[0]||(o[0]=f=>r(n).start())},{default:s(()=>[l(c(r(i).start),1)]),_:1}),a(r(m),{type:"primary",block:"",onClick:o[1]||(o[1]=f=>r(n).finish())},{default:s(()=>[l(c(r(i).finish),1)]),_:1}),a(r(m),{type:"primary",block:"",onClick:o[2]||(o[2]=f=>r(n).error())},{default:s(()=>[l(c(r(i).error),1)]),_:1}),a(r(m),{type:"primary",block:"",onClick:k},{default:s(()=>[l(c(u.value?r(i).clear:r(i).custom),1)]),_:1})]),_:1})],64))}};export{he as default};
