import{T as i}from"./index-dfc4c33f.js";import{S as B}from"./index-d1824a34.js";import{B as p}from"./index-2d956dae.js";import{S as b}from"./index-ee482dba.js";import{O as _}from"./index-732cbbd7.js";import{S as m}from"./index-fc8776dd.js";import{d as U}from"./index-59604d2c.js";import{_ as V,a as g,ac as A,aB as N,p as D,f as y,h as v,q as e,S as o,ap as t,M as S,F as C,P as l,Q as a,aC as s,ai as z,i as O,al as I,am as M}from"./vue-router.esm-bundler-2ca71151.js";import{u as L,c as P,a as w,_ as W,b as E}from"./index-1e358a5a.js";import"./components-fe6f9a05.js";import"./elements-9a8e8a45.js";import"./shared-5e0af17c.js";import"./usePopover-49dcf986.js";import"./zIndex-3cf67761.js";import"./index-9c02a7e3.js";/* empty css               */import"./index-5db115f0.js";import"./index-e4fc01f7.js";import"./index-2b8b62c3.js";import"./index-5e9b1128.js";import"./index-eeb31330.js";import"./index-bce45590.js";import"./provide-180ca459.js";import"./index-8566249f.js";import"./lock-8d9432a8.js";const F={basicUsage:"基本使用",contentSlot:"内容插槽",alignmentMethods:"对齐方式",topAlignment:"顶部对齐",tooltip:"tooltip",bottomAlignment:"底部对齐",offset:"偏移量",events:"注册事件",disabled:"禁用提示",placement:"弹出位置",trigger:"触发方式",twoWayBinding:"双向绑定",themeColorTooltip:"主题色文字提示",defaultTooltip:"默认",primaryTooltip:"主要",infoTooltip:"信息",successTooltip:"成功",warningTooltip:"警告",dangerTooltip:"危险",customColor:"自定义颜色",countDown:"秒后关闭"},$={basicUsage:"Basic Usage",contentSlot:"Content Slot",alignmentMethods:"Alignment Methods",topAlignment:"Top Alignment",tooltip:"Tooltip",bottomAlignment:"Bottom Alignment",offset:"Offset",events:"Events",disabled:"Disabled",placement:"Placement",trigger:"Trigger",twoWayBinding:"Two-way binding",themeColorTooltip:"Theme Color Tooltip",defaultTooltip:"Default",primaryTooltip:"Primary",infoTooltip:"Info",successTooltip:"Success",warningTooltip:"Warning",dangerTooltip:"Danger",customColor:"Custom Color",countDown:"s closed"},{add:h,use:q,pack:n,packs:Ct,merge:St}=L(),Q=d=>{P(d),q(d)};w("zh-CN",W);w("en-US",E);h("zh-CN",F);h("en-US",$);const j=d=>(I("data-v-4e76c829"),d=d(),M(),d),G={class:"placement-container"},H=j(()=>S("div",{style:{"margin-bottom":"100px"}},null,-1)),J={setup(d){const f=g("click"),c=g("top"),x=g(["top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"]);return A(Q),N(U),(K,r)=>{const T=D("var-icon");return y(),v(C,null,[e(t(s),null,{default:o(()=>[l(a(t(n).basicUsage),1)]),_:1}),e(t(i),{content:"Tooltip"},{default:o(()=>[e(t(p),{type:"primary"},{default:o(()=>[l(a(t(n).basicUsage),1)]),_:1})]),_:1}),e(t(s),null,{default:o(()=>[l(a(t(n).contentSlot),1)]),_:1}),e(t(i),null,{content:o(()=>[e(T,{name:"star"})]),default:o(()=>[e(t(p),{type:"primary"},{default:o(()=>[l(a(t(n).contentSlot),1)]),_:1})]),_:1}),e(t(s),null,{default:o(()=>[l(a(t(n).placement),1)]),_:1}),e(t(b),{hint:!1,modelValue:c.value,"onUpdate:modelValue":r[0]||(r[0]=u=>c.value=u)},{default:o(()=>[(y(!0),v(C,null,z(x.value,(u,k)=>(y(),O(t(_),{key:k,label:u},null,8,["label"]))),128))]),_:1},8,["modelValue"]),S("div",G,[e(t(i),{content:"Tooltip",placement:c.value},{default:o(()=>[e(t(p),{type:"primary"},{default:o(()=>[e(T,{name:"star"})]),_:1})]),_:1},8,["placement"])]),e(t(s),null,{default:o(()=>[l(a(t(n).themeColorTooltip),1)]),_:1}),e(t(B),{size:["14vw","2.666vw"]},{default:o(()=>[e(t(i),{type:"default",content:"Tooltip"},{default:o(()=>[e(t(p),{type:"default"},{default:o(()=>[l(a(t(n).defaultTooltip),1)]),_:1})]),_:1}),e(t(i),{type:"primary",content:"Tooltip"},{default:o(()=>[e(t(p),{type:"primary"},{default:o(()=>[l(a(t(n).primaryTooltip),1)]),_:1})]),_:1}),e(t(i),{type:"info",content:"Tooltip"},{default:o(()=>[e(t(p),{type:"info"},{default:o(()=>[l(a(t(n).infoTooltip),1)]),_:1})]),_:1}),e(t(i),{type:"success",content:"Tooltip"},{default:o(()=>[e(t(p),{type:"success"},{default:o(()=>[l(a(t(n).successTooltip),1)]),_:1})]),_:1}),e(t(i),{type:"warning",content:"Tooltip"},{default:o(()=>[e(t(p),{type:"warning"},{default:o(()=>[l(a(t(n).warningTooltip),1)]),_:1})]),_:1}),e(t(i),{type:"danger",content:"Tooltip"},{default:o(()=>[e(t(p),{type:"danger"},{default:o(()=>[l(a(t(n).dangerTooltip),1)]),_:1})]),_:1})]),_:1},8,["size"]),e(t(s),null,{default:o(()=>[l(a(t(n).customColor),1)]),_:1}),e(t(i),{content:"Tooltip",color:"#d81b60"},{default:o(()=>[e(t(p),{type:"primary"},{default:o(()=>[l(a(t(n).customColor),1)]),_:1})]),_:1}),e(t(s),null,{default:o(()=>[l(a(t(n).offset),1)]),_:1}),e(t(i),{content:"Tooltip","offset-x":64,"offset-y":-10},{default:o(()=>[e(t(p),{type:"primary"},{default:o(()=>[l(a(t(n).offset),1)]),_:1})]),_:1}),e(t(s),null,{default:o(()=>[l(a(t(n).trigger),1)]),_:1}),e(t(b),{hint:!1,modelValue:f.value,"onUpdate:modelValue":r[1]||(r[1]=u=>f.value=u)},{default:o(()=>[e(t(_),{label:"click"}),e(t(_),{label:"hover"})]),_:1},8,["modelValue"]),e(t(i),{content:"Tooltip",style:{"margin-top":"15px"},trigger:f.value},{default:o(()=>[e(t(p),{type:"primary"},{default:o(()=>[l(a(t(n).trigger),1)]),_:1})]),_:1},8,["trigger"]),e(t(s),null,{default:o(()=>[l(a(t(n).events),1)]),_:1}),e(t(i),{content:"Tooltip",onOpen:r[2]||(r[2]=()=>t(m).info("open")),onOpened:r[3]||(r[3]=()=>t(m).success("opened")),onClose:r[4]||(r[4]=()=>t(m).warning("close")),onClosed:r[5]||(r[5]=()=>t(m).error("closed"))},{default:o(()=>[e(t(p),{type:"primary"},{default:o(()=>[l(a(t(n).events),1)]),_:1})]),_:1}),e(t(s),null,{default:o(()=>[l(a(t(n).disabled),1)]),_:1}),e(t(i),{content:"Tooltip",disabled:""},{default:o(()=>[e(t(p),{type:"primary",disabled:""},{default:o(()=>[l(a(t(n).disabled),1)]),_:1})]),_:1}),H],64)}}},wt=V(J,[["__scopeId","data-v-4e76c829"]]);export{wt as default};
