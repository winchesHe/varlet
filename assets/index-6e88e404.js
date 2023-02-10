import{d as g,c as L}from"./components-25275440.js";import{u as E}from"./index-d82389b0.js";import{d as W,_ as B,f as y,h as M,O as k,i as N,q as t,S as n,D as F,H as j,M as b,R as V,N as C,P as l,Q as a,ah as q,E as Q,T as R,a as S,ac as X,az as Y,p as G,ap as e,F as z,aA as f,ai as J,al as K,am as Z}from"./vue-router.esm-bundler-10f05234.js";import{S as x}from"./index-6a4e7e32.js";import{B as u}from"./index-bc976077.js";import{S as A}from"./index-7377c8c2.js";import{O as w}from"./index-2dba78de.js";import{S as T}from"./index-29133017.js";import{d as ee}from"./index-7f7c9244.js";import{u as te,c as oe,a as P,_ as ne,b as le}from"./index-743dd119.js";import"./elements-87b8c072.js";import"./shared-5ff0af51.js";import"./zIndex-2b1708db.js";import"./index-099a024e.js";/* empty css               */import"./index-694a1082.js";import"./index-f4fd07ca.js";import"./index-a551829b.js";import"./index-aceef944.js";import"./index-4fa56e4b.js";import"./index-3531d71c.js";import"./lock-d6df0cf1.js";function ae(o){return["click","hover"].includes(o)}function se(o){return["top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"].includes(o)}function re(o){return["default","primary","info","success","warning","danger"].includes(o)}const ie={type:{type:String,default:"default",validator:re},color:{type:String},content:{type:String},show:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},trigger:{type:String,default:"hover",validator:ae},placement:{type:String,default:"bottom",validator:se},offsetX:{type:[Number,String],default:0},offsetY:{type:[Number,String],default:0},teleport:{type:[String,Object],default:"body"},onOpen:g(),onOpened:g(),onClose:g(),onClosed:g(),"onUpdate:show":g()},{n:pe,classes:de}=L("tooltip"),ue=W({name:"VarTooltip",props:ie,setup(o){const{popover:r,host:c,show:v,zIndex:_,handleHostClick:p,handleHostMouseenter:d,handleHostMouseleave:m,handlePopoverMouseenter:h,handlePopoverMouseleave:O,handlePopoverClose:H,open:$,close:D,resize:I}=E(o);return{popover:r,host:c,show:v,zIndex:_,n:pe,classes:de,handleHostClick:p,handlePopoverClose:H,handleHostMouseenter:d,handleHostMouseleave:m,handlePopoverMouseenter:h,handlePopoverMouseleave:O,resize:I,open:$,close:D}}});function fe(o,r,c,v,_,p){return y(),M("div",{ref:"host",class:C(o.n()),onClick:r[3]||(r[3]=(...d)=>o.handleHostClick&&o.handleHostClick(...d)),onMouseenter:r[4]||(r[4]=(...d)=>o.handleHostMouseenter&&o.handleHostMouseenter(...d)),onMouseleave:r[5]||(r[5]=(...d)=>o.handleHostMouseleave&&o.handleHostMouseleave(...d))},[k(o.$slots,"default"),(y(),N(R,{to:o.teleport},[t(Q,{name:o.n(),onAfterEnter:o.onOpened,onAfterLeave:o.onClosed},{default:n(()=>[F(b("div",{ref:"popover",class:C(o.n("tooltip")),style:V({zIndex:o.zIndex}),onClick:r[0]||(r[0]=q(()=>{},["stop"])),onMouseenter:r[1]||(r[1]=(...d)=>o.handlePopoverMouseenter&&o.handlePopoverMouseenter(...d)),onMouseleave:r[2]||(r[2]=(...d)=>o.handlePopoverMouseleave&&o.handlePopoverMouseleave(...d))},[b("div",{style:V({background:o.color}),class:C(o.classes(o.n("content-container"),o.n(`--${o.type}`)))},[k(o.$slots,"content",{},()=>[l(a(o.content),1)])],6)],38),[[j,o.show]])]),_:3},8,["name","onAfterEnter","onAfterLeave"])],8,["to"]))],34)}const i=B(ue,[["render",fe]]);i.install=function(o){o.component(i.name,i)};const me={basicUsage:"基本使用",contentSlot:"内容插槽",alignmentMethods:"对齐方式",topAlignment:"顶部对齐",tooltip:"tooltip",bottomAlignment:"底部对齐",offset:"偏移量",events:"注册事件",disabled:"禁用提示",placement:"弹出位置",trigger:"触发方式",twoWayBinding:"双向绑定",themeColorTooltip:"主题色文字提示",defaultTooltip:"默认",primaryTooltip:"主要",infoTooltip:"信息",successTooltip:"成功",warningTooltip:"警告",dangerTooltip:"危险",customColor:"自定义颜色",countDown:"秒后关闭"},ce={basicUsage:"Basic Usage",contentSlot:"Content Slot",alignmentMethods:"Alignment Methods",topAlignment:"Top Alignment",tooltip:"Tooltip",bottomAlignment:"Bottom Alignment",offset:"Offset",events:"Events",disabled:"Disabled",placement:"Placement",trigger:"Trigger",twoWayBinding:"Two-way binding",themeColorTooltip:"Theme Color Tooltip",defaultTooltip:"Default",primaryTooltip:"Primary",infoTooltip:"Info",successTooltip:"Success",warningTooltip:"Warning",dangerTooltip:"Danger",customColor:"Custom Color",countDown:"s closed"},{add:U,use:ge,pack:s,packs:je,merge:qe}=te(),ye=o=>{oe(o),ge(o)};P("zh-CN",ne);P("en-US",le);U("zh-CN",me);U("en-US",ce);const ve=o=>(K("data-v-4e76c829"),o=o(),Z(),o),Te={class:"placement-container"},be=ve(()=>b("div",{style:{"margin-bottom":"100px"}},null,-1)),_e={setup(o){const r=S("click"),c=S("top"),v=S(["top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"]);return X(ye),Y(ee),(_,p)=>{const d=G("var-icon");return y(),M(z,null,[t(e(f),null,{default:n(()=>[l(a(e(s).basicUsage),1)]),_:1}),t(e(i),{content:"Tooltip"},{default:n(()=>[t(e(u),{type:"primary"},{default:n(()=>[l(a(e(s).basicUsage),1)]),_:1})]),_:1}),t(e(f),null,{default:n(()=>[l(a(e(s).contentSlot),1)]),_:1}),t(e(i),null,{content:n(()=>[t(d,{name:"star"})]),default:n(()=>[t(e(u),{type:"primary"},{default:n(()=>[l(a(e(s).contentSlot),1)]),_:1})]),_:1}),t(e(f),null,{default:n(()=>[l(a(e(s).placement),1)]),_:1}),t(e(A),{hint:!1,modelValue:c.value,"onUpdate:modelValue":p[0]||(p[0]=m=>c.value=m)},{default:n(()=>[(y(!0),M(z,null,J(v.value,(m,h)=>(y(),N(e(w),{key:h,label:m},null,8,["label"]))),128))]),_:1},8,["modelValue"]),b("div",Te,[t(e(i),{content:"Tooltip",placement:c.value},{default:n(()=>[t(e(u),{type:"primary"},{default:n(()=>[t(d,{name:"star"})]),_:1})]),_:1},8,["placement"])]),t(e(f),null,{default:n(()=>[l(a(e(s).themeColorTooltip),1)]),_:1}),t(e(x),{size:["14vw","2.666vw"]},{default:n(()=>[t(e(i),{type:"default",content:"Tooltip"},{default:n(()=>[t(e(u),{type:"default"},{default:n(()=>[l(a(e(s).defaultTooltip),1)]),_:1})]),_:1}),t(e(i),{type:"primary",content:"Tooltip"},{default:n(()=>[t(e(u),{type:"primary"},{default:n(()=>[l(a(e(s).primaryTooltip),1)]),_:1})]),_:1}),t(e(i),{type:"info",content:"Tooltip"},{default:n(()=>[t(e(u),{type:"info"},{default:n(()=>[l(a(e(s).infoTooltip),1)]),_:1})]),_:1}),t(e(i),{type:"success",content:"Tooltip"},{default:n(()=>[t(e(u),{type:"success"},{default:n(()=>[l(a(e(s).successTooltip),1)]),_:1})]),_:1}),t(e(i),{type:"warning",content:"Tooltip"},{default:n(()=>[t(e(u),{type:"warning"},{default:n(()=>[l(a(e(s).warningTooltip),1)]),_:1})]),_:1}),t(e(i),{type:"danger",content:"Tooltip"},{default:n(()=>[t(e(u),{type:"danger"},{default:n(()=>[l(a(e(s).dangerTooltip),1)]),_:1})]),_:1})]),_:1},8,["size"]),t(e(f),null,{default:n(()=>[l(a(e(s).customColor),1)]),_:1}),t(e(i),{content:"Tooltip",color:"#d81b60"},{default:n(()=>[t(e(u),{type:"primary"},{default:n(()=>[l(a(e(s).customColor),1)]),_:1})]),_:1}),t(e(f),null,{default:n(()=>[l(a(e(s).offset),1)]),_:1}),t(e(i),{content:"Tooltip","offset-x":64,"offset-y":-10},{default:n(()=>[t(e(u),{type:"primary"},{default:n(()=>[l(a(e(s).offset),1)]),_:1})]),_:1}),t(e(f),null,{default:n(()=>[l(a(e(s).trigger),1)]),_:1}),t(e(A),{hint:!1,modelValue:r.value,"onUpdate:modelValue":p[1]||(p[1]=m=>r.value=m)},{default:n(()=>[t(e(w),{label:"click"}),t(e(w),{label:"hover"})]),_:1},8,["modelValue"]),t(e(i),{content:"Tooltip",style:{"margin-top":"15px"},trigger:r.value},{default:n(()=>[t(e(u),{type:"primary"},{default:n(()=>[l(a(e(s).trigger),1)]),_:1})]),_:1},8,["trigger"]),t(e(f),null,{default:n(()=>[l(a(e(s).events),1)]),_:1}),t(e(i),{content:"Tooltip",onOpen:p[2]||(p[2]=()=>e(T).info("open")),onOpened:p[3]||(p[3]=()=>e(T).success("opened")),onClose:p[4]||(p[4]=()=>e(T).warning("close")),onClosed:p[5]||(p[5]=()=>e(T).error("closed"))},{default:n(()=>[t(e(u),{type:"primary"},{default:n(()=>[l(a(e(s).events),1)]),_:1})]),_:1}),t(e(f),null,{default:n(()=>[l(a(e(s).disabled),1)]),_:1}),t(e(i),{content:"Tooltip",disabled:""},{default:n(()=>[t(e(u),{type:"primary",disabled:""},{default:n(()=>[l(a(e(s).disabled),1)]),_:1})]),_:1}),be],64)}}},Qe=B(_e,[["__scopeId","data-v-4e76c829"]]);export{Qe as default};
