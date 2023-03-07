import{d as _,_ as C,f,h as v,M as m,Z as U,N as $,R as S,F as H,b as B,O as h,i as D,aH as R,j as z,Q as a,a as b,ac as E,aB as Z,q as o,S as n,ap as s,P as u,aC as M}from"./vue-router.esm-bundler-2ca71151.js";import{c as N}from"./components-fe6f9a05.js";import{a as V,t as I}from"./elements-9a8e8a45.js";import{B as d}from"./index-2d956dae.js";import{P as L}from"./index-5d54e2d0.js";import{S as P}from"./index-d1824a34.js";import{d as T}from"./index-59604d2c.js";import{u as W,c as Q,a as q,_ as F,b as O}from"./index-1e358a5a.js";import"./shared-5e0af17c.js";import"./index-5db115f0.js";import"./index-9c02a7e3.js";/* empty css               */import"./index-e4fc01f7.js";import"./index-2b8b62c3.js";import"./lock-8d9432a8.js";import"./zIndex-3cf67761.js";function j(e){return["info","success","warning","error","question","empty"].includes(e)}const G={imageSize:{type:[String,Number]},type:{type:String,default:"success",validator:j},title:{type:String},description:{type:String},animation:{type:Boolean,default:!0}},K=_({}),J={xmlns:"http://www.w3.org/2000/svg",viewBox:"2 3.6 20 20"},X=m("path",{d:"M11,9H13V7H11M11,20H13V11H11V20Z"},null,-1),Y=[X];function x(e,c,p,l,y,g){return f(),v("svg",J,Y)}const ee=C(K,[["render",x]]),se=_({}),te={xmlns:"http://www.w3.org/2000/svg",viewBox:"2 2 20 20"},oe=m("path",{d:"M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"},null,-1),ne=[oe];function re(e,c,p,l,y,g){return f(),v("svg",te,ne)}const ie=C(se,[["render",re]]),ae=_({}),le={xmlns:"http://www.w3.org/2000/svg",viewBox:"-6 -4 35 35"},ue=m("path",{d:"M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"},null,-1),ce=[ue];function pe(e,c,p,l,y,g){return f(),v("svg",le,ce)}const de=C(ae,[["render",pe]]),{n:fe,classes:me}=N("result"),$e=_({props:{animation:{type:Boolean},borderSize:{type:String}},setup(){return{n:fe,classes:me,toNumber:U}}});function ve(e,c,p,l,y,g){return f(),v(H,null,[m("span",{class:$(e.n("success-cover-left"))},null,2),m("span",{class:$(e.classes(e.n("success-line"),e.n("success-line-tip"))),style:S({animationDuration:e.animation?"760ms":"0ms",borderRadius:`calc(${e.borderSize} * 0.625)`})},null,6),m("span",{class:$(e.classes(e.n("success-line"),e.n("success-line-long"))),style:S({animationDuration:e.animation?"770ms":"0ms",borderRadius:`calc(${e.borderSize} * 0.625)`})},null,6),m("span",{ref:"circle",class:$(e.n("success-circle")),style:S({left:`-${e.borderSize}`,top:`-${e.borderSize}`,borderWidth:e.borderSize})},null,6),m("span",{class:$(e.n("success-line-fix"))},null,2),m("span",{class:$(e.n("success-cover-right")),style:S({animationDuration:e.animation?"4250ms":"0ms"})},null,6)],64)}const ye=C($e,[["render",ve]]),ge=_({}),we={xmlns:"http://www.w3.org/2000/svg",viewBox:"-3 -3 30 30"},Ce=m("path",{d:"M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"},null,-1),_e=[Ce];function be(e,c,p,l,y,g){return f(),v("svg",we,_e)}const Le=C(ge,[["render",be]]),Se=_({}),ke={viewBox:"-4 -4 32 32"},he=m("path",{fill:"currentColor",d:"M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"},null,-1),ze=[he];function Ve(e,c,p,l,y,g){return f(),v("svg",ke,ze)}const Be=C(Se,[["render",Ve]]),{n:Me,classes:Ue}=N("result"),He=_({name:"VarResult",components:{Info:ee,Success:ye,Warning:de,Error:ie,Question:Le,Empty:Be},props:G,setup(e){const c=B(()=>{const{imageSize:l}=e;return`calc(${l?V(l):"var(--result-image-size)"} * 0.9)`}),p=B(()=>{const{imageSize:l}=e;return`calc(${l?V(e.imageSize):"var(--result-image-size)"} * 0.05)`});return{n:Me,classes:Ue,toNumber:U,toPxNum:I,toSizeUnit:V,circleSize:c,borderSize:p}}});function Ne(e,c,p,l,y,g){return f(),v("div",{class:$(e.classes(e.n(),e.n("$--box")))},[h(e.$slots,"image",{},()=>[e.type?(f(),v("div",{key:0,class:$(e.n("image-container"))},[m("div",{class:$(e.classes(e.n("image"),e.n(e.type))),style:S({width:e.circleSize,height:e.circleSize,borderWidth:e.borderSize})},[(f(),D(R(e.type),{"border-size":e.borderSize,animation:e.animation},null,8,["border-size","animation"]))],6)],2)):z("",!0)]),h(e.$slots,"title",{},()=>[e.title?(f(),v("div",{key:0,class:$(e.n("title"))},a(e.title),3)):z("",!0)]),h(e.$slots,"description",{},()=>[e.description?(f(),v("div",{key:0,class:$(e.n("description"))},a(e.description),3)):z("",!0)]),e.$slots.footer?(f(),v("div",{key:0,class:$(e.n("footer"))},[h(e.$slots,"footer")],2)):z("",!0)],2)}const w=C(He,[["render",Ne]]);w.install=function(e){e.component(w.name,w)};const qe={basicUsage:"基本使用",success:"成功",info:"信息",warning:"警告",error:"错误",question:"疑问",empty:"空值",type:"类型",button:"知道了",description:"嗨~ 我是结果页的一段描述~",changeBackgroundColor:"修改背景色"},Ae={basicUsage:"Basic Usage",success:"Success",info:"Info",warning:"Warning",error:"Error",question:"Question",empty:"Empty",type:"Type",button:"OK",successTitle:"Success",description:"Hi, I'm a result description.",changeBackgroundColor:"Change BackGround Color"},{add:A,use:De,pack:r,packs:ts,merge:os}=W(),Re=e=>{Q(e),De(e)};q("zh-CN",F);q("en-US",O);A("zh-CN",qe);A("en-US",Ae);const Ee={setup(e){const c=b(!1),p=b(!1),l=b(!1),y=b(!1),g=b(!1),k=b(!1);return E(Re),Z(T),(Ze,t)=>(f(),v(H,null,[o(s(M),null,{default:n(()=>[u(a(s(r).basicUsage),1)]),_:1}),o(s(w),{title:s(r).success,description:s(r).description},{footer:n(()=>[o(s(d),{type:"success",onClick:t[0]||(t[0]=i=>c.value=!1)},{default:n(()=>[u(a(s(r).button),1)]),_:1})]),_:1},8,["title","description"]),o(s(M),null,{default:n(()=>[u(a(s(r).type),1)]),_:1}),o(s(P),{direction:"column",size:"large"},{default:n(()=>[o(s(d),{type:"success",block:"",onClick:t[1]||(t[1]=i=>c.value=!0)},{default:n(()=>[u(a(s(r).success),1)]),_:1}),o(s(d),{type:"warning",block:"",onClick:t[2]||(t[2]=i=>y.value=!0)},{default:n(()=>[u(a(s(r).warning),1)]),_:1}),o(s(d),{type:"info",block:"",onClick:t[3]||(t[3]=i=>l.value=!0)},{default:n(()=>[u(a(s(r).info),1)]),_:1}),o(s(d),{type:"danger",block:"",onClick:t[4]||(t[4]=i=>p.value=!0)},{default:n(()=>[u(a(s(r).error),1)]),_:1}),o(s(d),{color:"var(--result-question-color)","text-color":"#fff",block:"",onClick:t[5]||(t[5]=i=>g.value=!0)},{default:n(()=>[u(a(s(r).question),1)]),_:1}),o(s(d),{color:"var(--result-empty-color)","text-color":"#fff",block:"",onClick:t[6]||(t[6]=i=>k.value=!0)},{default:n(()=>[u(a(s(r).empty),1)]),_:1})]),_:1}),o(s(L),{"default-style":!1,show:c.value,"onUpdate:show":t[8]||(t[8]=i=>c.value=i)},{default:n(()=>[o(s(w),{class:"result",title:s(r).success,description:s(r).description},{footer:n(()=>[o(s(d),{type:"success",onClick:t[7]||(t[7]=i=>c.value=!1)},{default:n(()=>[u(a(s(r).button),1)]),_:1})]),_:1},8,["title","description"])]),_:1},8,["show"]),o(s(L),{"default-style":!1,show:p.value,"onUpdate:show":t[10]||(t[10]=i=>p.value=i)},{default:n(()=>[o(s(w),{class:"result",type:"error",title:s(r).error,description:s(r).description},{footer:n(()=>[o(s(d),{type:"danger",onClick:t[9]||(t[9]=i=>p.value=!1)},{default:n(()=>[u(a(s(r).button),1)]),_:1})]),_:1},8,["title","description"])]),_:1},8,["show"]),o(s(L),{"default-style":!1,show:y.value,"onUpdate:show":t[12]||(t[12]=i=>y.value=i)},{default:n(()=>[o(s(w),{class:"result",type:"warning",title:s(r).warning,description:s(r).description},{footer:n(()=>[o(s(d),{type:"warning",onClick:t[11]||(t[11]=i=>y.value=!1)},{default:n(()=>[u(a(s(r).button),1)]),_:1})]),_:1},8,["title","description"])]),_:1},8,["show"]),o(s(L),{"default-style":!1,show:l.value,"onUpdate:show":t[14]||(t[14]=i=>l.value=i)},{default:n(()=>[o(s(w),{class:"result",type:"info",title:s(r).info,description:s(r).description},{footer:n(()=>[o(s(d),{type:"info",onClick:t[13]||(t[13]=i=>l.value=!1)},{default:n(()=>[u(a(s(r).button),1)]),_:1})]),_:1},8,["title","description"])]),_:1},8,["show"]),o(s(L),{"default-style":!1,show:g.value,"onUpdate:show":t[16]||(t[16]=i=>g.value=i)},{default:n(()=>[o(s(w),{class:"result",type:"question",title:s(r).question,description:s(r).description},{footer:n(()=>[o(s(d),{color:"var(--result-question-color)","text-color":"#fff",onClick:t[15]||(t[15]=i=>g.value=!1)},{default:n(()=>[u(a(s(r).button),1)]),_:1})]),_:1},8,["title","description"])]),_:1},8,["show"]),o(s(L),{"default-style":!1,show:k.value,"onUpdate:show":t[18]||(t[18]=i=>k.value=i)},{default:n(()=>[o(s(w),{class:"result",type:"empty",title:s(r).empty,description:s(r).description},{footer:n(()=>[o(s(d),{color:"var(--result-empty-color)","text-color":"#fff",onClick:t[17]||(t[17]=i=>k.value=!1)},{default:n(()=>[u(a(s(r).button),1)]),_:1})]),_:1},8,["title","description"])]),_:1},8,["show"])],64))}},ns=C(Ee,[["__scopeId","data-v-4273232a"]]);export{ns as default};
