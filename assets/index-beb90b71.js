import{D as m}from"./index-c7e8291c.js";import{B as r}from"./index-2d956dae.js";import{I as D}from"./index-5e9b1128.js";import{S as u}from"./index-fc8776dd.js";import{C as g}from"./index-859f8453.js";import{d as A}from"./index-59604d2c.js";import{_ as $,r as z,aL as I,ac as M,aB as P,f as F,h as L,q as t,S as a,ap as e,au as y,F as V,P as l,Q as n,aC as B}from"./vue-router.esm-bundler-2ca71151.js";import{u as H,c as R,a as h,_ as q,b as E}from"./index-1e358a5a.js";import"./index-5d54e2d0.js";import"./components-fe6f9a05.js";import"./lock-8d9432a8.js";import"./index-9c02a7e3.js";import"./zIndex-3cf67761.js";/* empty css               */import"./shared-5e0af17c.js";import"./elements-9a8e8a45.js";import"./index-5db115f0.js";import"./index-e4fc01f7.js";import"./index-2b8b62c3.js";const Q={functionCall:"函数调用",basicUsage:"基本使用",modifyTitle:"修改标题",hideButton:"隐藏按钮",handleUserBehavior:"处理用户行为",asyncClose:"异步关闭",componentCall:"组件调用",title:"兰亭序",message:"兰亭临帖 行书如行云流水",customSlots:"自定义插槽",asyncCloseProgress:"正在异步关闭"},W={functionCall:"Function Call",basicUsage:"Basic Usage",modifyTitle:"Modify Title",hideButton:"Hide Button",handleUserBehavior:"Handle User Behavior",asyncClose:"Asynchronous closing",componentCall:"Component Call",title:"Beat It",message:"Don't Wanna See No Blood, Don't Be A Macho Man",customSlots:"Custom Slots",asyncCloseProgress:"Asynchronous shutdown in progress"},{add:_,use:j,pack:o,packs:de,merge:Ce}=H(),G=d=>{R(d),j(d)};h("zh-CN",q);h("en-US",E);_("zh-CN",Q);_("en-US",W);const J={setup(d){const C=m.Component,U=z({show:!1,show1:!1,show2:!1}),{show:c,show1:f,show2:p}=I(U),v={confirm:()=>u.success("confirm"),cancel:()=>u.error("cancel"),close:()=>u.info("close")};function b(){m(o.value.message)}async function S(){v[await m(o.value.message)]()}function x(){m({title:o.value.title,message:o.value.message})}function N(){m({message:o.value.message,confirmButton:!1,cancelButton:!1})}function k(w,s){u.loading(o.value.asyncCloseProgress),setTimeout(()=>{v[w](),s()},1e3)}function T(){m({message:o.value.message,onBeforeClose:k})}return M(G),P(A),(w,s)=>(F(),L(V,null,[t(e(B),null,{default:a(()=>[l(n(e(o).functionCall),1)]),_:1}),t(e(r),{type:"primary",block:"",onClick:b},{default:a(()=>[l(n(e(o).basicUsage),1)]),_:1}),t(e(r),{type:"primary",block:"",onClick:x},{default:a(()=>[l(n(e(o).modifyTitle),1)]),_:1}),t(e(r),{type:"primary",block:"",onClick:N},{default:a(()=>[l(n(e(o).hideButton),1)]),_:1}),t(e(r),{type:"primary",block:"",onClick:S},{default:a(()=>[l(n(e(o).handleUserBehavior),1)]),_:1}),t(e(r),{type:"primary",block:"",onClick:T},{default:a(()=>[l(n(e(o).asyncClose),1)]),_:1}),t(e(B),null,{default:a(()=>[l(n(e(o).componentCall),1)]),_:1}),t(e(r),{type:"warning",block:"",onClick:s[0]||(s[0]=i=>c.value=!0)},{default:a(()=>[l(n(e(o).basicUsage),1)]),_:1}),t(e(C),{show:e(c),"onUpdate:show":s[1]||(s[1]=i=>y(c)?c.value=i:null),title:e(o).title,message:e(o).message,onConfirm:s[2]||(s[2]=()=>e(u).success("confirm")),onCancel:s[3]||(s[3]=()=>e(u).error("cancel")),onClosed:s[4]||(s[4]=()=>e(u).info("closed"))},null,8,["show","title","message"]),t(e(r),{type:"warning",block:"",onClick:s[5]||(s[5]=i=>f.value=!0)},{default:a(()=>[l(n(e(o).asyncClose),1)]),_:1}),t(e(C),{show:e(f),"onUpdate:show":s[6]||(s[6]=i=>y(f)?f.value=i:null),title:e(o).title,message:e(o).message,onBeforeClose:k},null,8,["show","title","message"]),t(e(r),{type:"warning",block:"",onClick:s[7]||(s[7]=i=>p.value=!0)},{default:a(()=>[l(n(e(o).customSlots),1)]),_:1}),t(e(C),{show:e(p),"onUpdate:show":s[8]||(s[8]=i=>y(p)?p.value=i:null)},{title:a(()=>[t(e(D),{name:"information",color:"#2979ff"})]),default:a(()=>[t(e(g),null,{default:a(()=>[l(n(e(o).message),1)]),_:1}),t(e(g),null,{default:a(()=>[l(n(e(o).message),1)]),_:1}),t(e(g),null,{default:a(()=>[l(n(e(o).message),1)]),_:1})]),_:1},8,["show"])],64))}},ge=$(J,[["__scopeId","data-v-9510af88"]]);export{ge as default};
