import{A as m}from"./index-a3db92af.js";import{B as u}from"./index-780c9b5c.js";import{S as g}from"./index-d7c41126.js";import{S as r}from"./index-96345af7.js";import{d as V}from"./index-dd768cde.js";import{r as $,a as f,ac as E,aE as L,f as M,h as q,q as n,S as l,ao as o,F as P,P as c,Q as s}from"./vue-router-6d86b99d.js";import{u as Q,a as T,_ as Y,b as j,c as G}from"./index-3c1b9f16.js";import{A as I}from"./appType-593f66f3.js";import"./index-a91d93ca.js";import"./index-aa7c4fad.js";import"./elements-ef5178c4.js";import"./shared-1843a447.js";import"./logger-525ef361.js";import"./components-d3c1de13.js";/* empty css               */import"./index-925194e4.js";import"./lock-6e75224c.js";import"./zIndex-ec604ca2.js";import"./index-83a910b7.js";import"./index-7174c92a.js";import"./index-ffaf6c58.js";import"./index-65467f9f.js";import"./useChildren-e46981d6.js";const H={functionCall:"函数调用",basicUsage:"基本使用",modifyTitle:"修改标题",componentCall:"组件调用",yourSelected:"您选择的是:",customTitle:"选择一个你喜欢的吧",disableCloseOnClickAction:"禁用点击选项时关闭动作面板",disabled:"禁用选项",customActionStyles:"自定义选项样式"},J={functionCall:"Function Call",basicUsage:"Basic Usage",modifyTitle:"Modify Title",componentCall:"Component Call",yourSelected:"Your selected is:",customTitle:"Choose whichever you like",disableCloseOnClickAction:"Disable close on click action",disabled:"Action Disabled",customActionStyles:"Custom Action Styles"},{add:N,use:K,pack:t,packs:vo,merge:Ao}=Q();function R(w){G(w),K(w)}T("zh-CN",Y);T("en-US",j);N("zh-CN",H);N("en-US",J);const $o={__name:"index",setup(w){const d=m.Component,y=[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi"}],h=[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi",disabled:!0}],U=[{name:"Item 01",icon:"account-circle",color:"#00c48f"},{name:"Item 02",icon:"notebook",color:"#ff9800"},{name:"Item 03",icon:"wifi",color:"#00afef"}],k=$(y),x=$(h),z=$(U),C=f(!1),b=f(!1),S=f(!1),v=f(!1),A=f(!1);async function B(){const i=await m({actions:y});i!=="close"&&r(`${t.value.yourSelected}${i.name}`)}async function O(){const i=await m({actions:y,title:t.value.customTitle});i!=="close"&&r(`${t.value.yourSelected}${i.name}`)}async function D(){const i=await m({actions:h});i!=="close"&&r(`${t.value.yourSelected}${i.name}`)}async function _(){const i=await m({actions:U});i!=="close"&&r(`${t.value.yourSelected}${i.name}`)}function F(){m({actions:[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi"}],closeOnClickAction:!1,onSelect:i=>r(`${t.value.yourSelected}${i.name}`)})}function p(i){r(`${t.value.yourSelected}${i.name}`)}return E(R),L(V),(i,e)=>(M(),q(P,null,[n(o(I),null,{default:l(()=>[c(s(o(t).functionCall),1)]),_:1}),n(o(g),{direction:"column",size:["3vw","4vw"]},{default:l(()=>[n(o(u),{type:"primary",block:"",onClick:B},{default:l(()=>[c(s(o(t).basicUsage),1)]),_:1}),n(o(u),{type:"primary",block:"",onClick:O},{default:l(()=>[c(s(o(t).modifyTitle),1)]),_:1}),n(o(u),{type:"primary",block:"",onClick:D},{default:l(()=>[c(s(o(t).disabled),1)]),_:1}),n(o(u),{type:"primary",block:"",onClick:F},{default:l(()=>[c(s(o(t).disableCloseOnClickAction),1)]),_:1}),n(o(u),{type:"primary",block:"",onClick:_},{default:l(()=>[c(s(o(t).customActionStyles),1)]),_:1})]),_:1}),n(o(I),null,{default:l(()=>[c(s(o(t).componentCall),1)]),_:1}),n(o(g),{direction:"column",size:["3vw","4vw"]},{default:l(()=>[n(o(u),{type:"warning",block:"",onClick:e[0]||(e[0]=a=>C.value=!0)},{default:l(()=>[c(s(o(t).basicUsage),1)]),_:1}),n(o(u),{type:"warning",block:"",onClick:e[1]||(e[1]=a=>b.value=!0)},{default:l(()=>[c(s(o(t).modifyTitle),1)]),_:1}),n(o(u),{type:"warning",block:"",onClick:e[2]||(e[2]=a=>S.value=!0)},{default:l(()=>[c(s(o(t).disabled),1)]),_:1}),n(o(u),{type:"warning",block:"",onClick:e[3]||(e[3]=a=>v.value=!0)},{default:l(()=>[c(s(o(t).disableCloseOnClickAction),1)]),_:1}),n(o(u),{type:"warning",block:"",onClick:e[4]||(e[4]=a=>A.value=!0)},{default:l(()=>[c(s(o(t).customActionStyles),1)]),_:1})]),_:1}),n(o(d),{actions:k,show:C.value,"onUpdate:show":e[5]||(e[5]=a=>C.value=a),onSelect:p},null,8,["actions","show"]),n(o(d),{title:o(t).customTitle,actions:k,show:b.value,"onUpdate:show":e[6]||(e[6]=a=>b.value=a),onSelect:p},null,8,["title","actions","show"]),n(o(d),{actions:x,show:S.value,"onUpdate:show":e[7]||(e[7]=a=>S.value=a),onSelect:p},null,8,["actions","show"]),n(o(d),{"close-on-click-action":!1,actions:k,show:v.value,"onUpdate:show":e[8]||(e[8]=a=>v.value=a),onSelect:p},null,8,["actions","show"]),n(o(d),{actions:z,show:A.value,"onUpdate:show":e[9]||(e[9]=a=>A.value=a),onSelect:p},null,8,["actions","show"])],64))}};export{$o as default};
