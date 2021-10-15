import{b as M,e as R,a as q,f as W}from"./components.59a7770d.js";import{_ as B}from"./elevation.61c5e873.js";import{q as P,b as f,o as u,c as S,B as I,n as E,r as b,y as G,d as h,a as g,m as k,k as j,t as r,f as H,h as a,w as i,F as J,l as c}from"./vendor.7d218dee.js";import{I as Q}from"./index.d0776ff2.js";import{S as N}from"./index.0a0031fb.js";import{O as T}from"./index.15c471ca.js";import{B as F}from"./index.812dd863.js";import{A as X}from"./AppType.51e8aa5c.js";import{u as Z,a as z,_ as ee,b as te,c as ne,w as ae}from"./en-US.c590db11.js";import"./shared.2d2ec151.js";import"./elements.fbcbc1e3.js";import"./index.c8a0843d.js";import"./zIndex.c8f68d30.js";import"./index.dcdb83c2.js";import"./index.2ebb75b5.js";import"./provide.be31179b.js";import"./index.4ef7d421.js";import"./index.aea5424f.js";import"./index.b0b2fe50.js";const U=Symbol("STEPS_BIND_STEP_KEY"),V=Symbol("STEPS_COUNT_STEP_KEY");function ie(){const{bindChildren:e,childProviders:o}=M(U),{length:s}=R(V);return{length:s,step:o,bindStep:e}}function oe(e){return["horizontal","vertical"].includes(e)}const re={active:{type:[String,Number],default:0},direction:{type:String,default:"horizontal",validator:oe},activeColor:{type:String},inactiveColor:{type:String},onClickStep:{type:Function}};const ce=P({name:"VarSteps",props:re,setup(e){const o=f(()=>e.active),s=f(()=>e.activeColor),t=f(()=>e.inactiveColor),d=f(()=>e.direction),{length:p,bindStep:l}=ie();l({active:o,length:p,direction:d,activeColor:s,inactiveColor:t,clickStep:m=>{var _;(_=e.onClickStep)==null||_.call(e,m)}})}});function se(e,o,s,t,d,p){return u(),S("div",{class:"var-steps",style:E({flexDirection:e.direction==="horizontal"?"row":"column"})},[I(e.$slots,"default")],4)}var C=B(ce,[["render",se]]);C.install=function(e){e.component(C.name,C)};const le={activeIcon:{type:String,default:"check"},currentIcon:{type:String},inactiveIcon:{type:String}};function ue(){const{parentProvider:e,bindParent:o}=q(U),{index:s}=W(V);if(!e||!o||!s)throw Error("[Varlet] Steps: <step/> must in <steps>");return{index:s,steps:e,bindSteps:o}}const de=P({name:"VarStep",components:{VarIcon:Q},props:le,setup(){const e=b(null),o=b(""),s=b(!1),{index:t,steps:d,bindSteps:p}=ue(),{active:l,length:n,activeColor:v,inactiveColor:m,direction:_,clickStep:w}=d,D=f(()=>l.value===t.value),x=f(()=>t.value!==-1&&l.value>t.value),K={index:t},L=()=>w(t.value),O=A=>{_.value==="horizontal"&&(e.value=A)};return p(K),G(n,A=>{if(s.value=A-1===t.value,e.value){const Y=e.value.offsetWidth/2-14;o.value=`0 -${Y}px`}}),{main:e,index:t,isActive:x,isCurrent:D,direction:_,lineMargin:o,activeColor:v,inactiveColor:m,isLastChild:s,click:L,getRef:O}}}),pe={class:"var-step"},ve={key:3};function fe(e,o,s,t,d,p){const l=h("var-icon");return u(),S("div",pe,[g("div",{class:k(`var-step-${e.direction}`)},[g("div",{class:k(`var-step-${e.direction}__main`),ref:e.getRef},[g("div",{class:k({[`var-step-${e.direction}__tag`]:!0,[`var-step-${e.direction}__tag--active`]:e.isActive||e.isCurrent}),style:E({backgroundColor:e.isActive||e.isCurrent?e.activeColor:e.inactiveColor}),onClick:o[0]||(o[0]=(...n)=>e.click&&e.click(...n))},[e.isActive?(u(),j(l,{key:0,class:"var-step__icon","var-step-cover":"",name:e.activeIcon},null,8,["name"])):e.isCurrent&&e.currentIcon?(u(),j(l,{key:1,class:"var-step__icon","var-step-cover":"",name:e.currentIcon},null,8,["name"])):e.inactiveIcon?(u(),j(l,{key:2,class:"var-step__icon","var-step-cover":"",name:e.inactiveIcon},null,8,["name"])):(u(),S("span",ve,r(e.index+1),1))],6),g("div",{class:k({[`var-step-${e.direction}__content`]:!0,[`var-step-${e.direction}__content--active`]:e.isActive||e.isCurrent}),onClick:o[1]||(o[1]=(...n)=>e.click&&e.click(...n))},[I(e.$slots,"default")],2)],2),e.isLastChild?H("v-if",!0):(u(),S("div",{key:0,class:k(`var-step-${e.direction}__line`),style:E({margin:e.lineMargin})},null,6))],2)])}var y=B(de,[["render",fe]]);y.install=function(e){e.component(y.name,y)};var me={basicUsage:"\u57FA\u672C\u4F7F\u7528",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",dynamicSteps:"\u52A8\u6001\u6B65\u9AA4",vertical:"\u5782\u76F4\u6A21\u5F0F",next:"\u4E0B\u4E00\u6B65",first:"\u6B65\u9AA41",second:"\u6B65\u9AA42",third:"\u6B65\u9AA43",fourth:"\u6B65\u9AA44",fifth:"\u6B65\u9AA45",placeholder:"\u6539\u53D8step\u7684\u6570\u91CF",step:"\u6B65\u9AA4",text:"\u63A5\u4E0B\u6765..."},_e={basicUsage:"Basic Usage",customStyle:"Custom Style",dynamicSteps:"Dynamic Steps",vertical:"Vertical Mode",next:"next",first:"Step1",second:"Step2",third:"Step3",fourth:"Step4",fifth:"Step5",placeholder:"Change the number of steps",step:"Step",text:"do something..."};const{add:$,use:Se,pack:he,packs:Le,merge:Oe}=Z(),ke=e=>{ne(e),Se(e)};z("zh-CN",ee);z("en-US",te);$("zh-CN",me);$("en-US",_e);const Ce={name:"StepsExample",components:{[C.name]:C,[y.name]:y,[N.name]:N,[T.name]:T,[F.name]:F,AppType:X},setup(){const e=b(0),o=()=>{e.value=(e.value+1)%4};return ae(ke),{pack:he,next:o,active:e}}};function ye(e,o,s,t,d,p){const l=h("app-type"),n=h("var-step"),v=h("var-steps"),m=h("var-button");return u(),S(J,null,[a(l,null,{default:i(()=>[c(r(t.pack.basicUsage),1)]),_:1}),a(v,{active:t.active},{default:i(()=>[a(n,null,{default:i(()=>[c(r(t.pack.first),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.second),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.third),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.fourth),1)]),_:1})]),_:1},8,["active"]),a(l,null,{default:i(()=>[c(r(t.pack.customStyle),1)]),_:1}),a(v,{active:t.active,"active-color":"#f44336","inactive-color":"#e99eb4"},{default:i(()=>[a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[c(r(t.pack.first),1)]),_:1}),a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[c(r(t.pack.second),1)]),_:1}),a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[c(r(t.pack.third),1)]),_:1}),a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[c(r(t.pack.fourth),1)]),_:1})]),_:1},8,["active"]),a(l,null,{default:i(()=>[c(r(t.pack.vertical),1)]),_:1}),a(v,{direction:"vertical",active:t.active},{default:i(()=>[a(n,null,{default:i(()=>[c(r(t.pack.first),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.second),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.third),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.fourth),1)]),_:1})]),_:1},8,["active"]),a(m,{type:"primary",block:"",onClick:t.next,style:{"margin-top":"20px"}},{default:i(()=>[c(r(t.pack.next),1)]),_:1},8,["onClick"])],64)}var Ye=B(Ce,[["render",ye]]);export{Ye as default};
