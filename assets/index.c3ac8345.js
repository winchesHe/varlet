var W=Object.defineProperty,G=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var M=(e,a,t)=>a in e?W(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,D=(e,a)=>{for(var t in a||(a={}))Q.call(a,t)&&M(e,t,a[t]);if(j)for(var t of j(a))X.call(a,t)&&M(e,t,a[t]);return e},O=(e,a)=>G(e,J(a));import{A as Z}from"./AppType.51e8aa5c.js";import{b as $,e as ee,a as ae,f as le}from"./components.59a7770d.js";import{d as A}from"./shared.2d2ec151.js";import{_ as P}from"./elevation.61c5e873.js";import{q as z,b as B,y as T,o as L,c as U,B as E,z as w,r as N,d as V,a as p,i as te,v as ne,m as x,l as d,t as u,h as o,p as oe,_ as ie,w as n}from"./vendor.7d218dee.js";import{r as se}from"./elements.fbcbc1e3.js";import{I as de}from"./index.d0776ff2.js";import{B as H}from"./index.812dd863.js";import{u as re,a as K,_ as ue,b as ce,c as me,w as fe}from"./en-US.c590db11.js";import"./index.aea5424f.js";import"./index.dcdb83c2.js";import"./index.b0b2fe50.js";const Y=Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"),q=Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");function ve(){const{bindChildren:e,childProviders:a}=$(Y),{length:t}=ee(q);return{length:t,collapseItem:a,bindCollapseItem:e}}const pe={modelValue:{type:[Array,String,Number]},accordion:{type:Boolean,default:!1},offset:{type:Boolean,default:!0},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const _e=z({name:"VarCollapse",props:pe,setup(e){const{length:a,collapseItem:t,bindCollapseItem:l}=ve(),m=B(()=>e.modelValue),h=B(()=>e.offset),c=()=>!e.accordion&&!A(e.modelValue)?(console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'),!1):e.accordion&&A(e.modelValue)?(console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'),!1):!0,r=(s,i)=>{if(!!c())return i?e.accordion?s:[...e.modelValue,s]:e.accordion?null:e.modelValue.filter(C=>C!==s)},_=(s,i)=>{var I,v;const C=r(s,i);(I=e["onUpdate:modelValue"])==null||I.call(e,C),(v=e.onChange)==null||v.call(e,C)},b=()=>{if(e.accordion)return t.find(({name:i})=>e.modelValue===i.value);const s=t.filter(({name:i})=>i.value===void 0?!1:e.modelValue.includes(i.value));return s.length?s:void 0},f=()=>e.accordion?t.find(({index:s,name:i})=>i.value===void 0?e.modelValue===s.value:!1):t.filter(({index:s,name:i})=>i.value===void 0?e.modelValue.includes(s.value):!1),y=()=>{if(!c())return;const s=b()||f();if(e.accordion&&!s||!e.accordion&&!s.length){t.forEach(i=>{i.init(e.accordion,!1)});return}t.forEach(i=>{const C=e.accordion?s===i:s.includes(i);i.init(e.accordion,C)})};l({active:m,offset:h,updateItem:_}),T(()=>a.value,()=>w().then(y)),T(()=>e.modelValue,()=>w().then(y))}}),he={class:"var-collapse"};function Ce(e,a,t,l,m,h){return L(),U("div",he,[E(e.$slots,"default")])}var g=P(_e,[["render",Ce]]);g.install=function(e){e.component(g.name,g)};function be(){const{parentProvider:e,bindParent:a}=ae(Y),{index:t}=le(q);if(!e||!a||!t)throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");return{index:t,collapse:e,bindCollapse:a}}const Ve={name:{type:[String,Number]},title:{type:String},icon:{type:String,default:"chevron-down"},disabled:{type:Boolean,default:!1}};const ge=z({name:"VarCollapseItem",components:{VarIcon:de},props:Ve,setup(e){const{index:a,collapse:t,bindCollapse:l}=be(),m=N(null),h=N(!1),c=N(!1),{active:r,offset:_,updateItem:b}=t,f=B(()=>e.name),y=(v,F)=>{r.value===void 0||v&&A(r.value)||F===c.value||(c.value=F,S(!0))},S=v=>{e.disabled||v||b(e.name||a.value,!c.value)},s=()=>{!m.value||(m.value.style.height="",h.value=!0,w(()=>{const{offsetHeight:v}=m.value;m.value.style.height=0+"px",se(()=>{m.value.style.height=v+"px"})}))},i=()=>{!m.value||(m.value.style.height=0+"px")},C=()=>{c.value||(h.value=!1,m.value.style.height="")};return l({index:a,name:f,init:y}),T(c,v=>{v?s():i()}),{show:h,isShow:c,offset:_,toggle:S,contentEl:m,transitionend:C}}}),ke={class:"var-collapse-item-header__title"},ye={class:"var-collapse-item-header__icon"},Ee={class:"var-collapse-item__wrap"};function Se(e,a,t,l,m,h){const c=V("var-icon");return L(),U("div",{class:x({"var-collapse-item":!0,"var-collapse-item__active":e.offset&&e.isShow,"var-collapse-item__disable":e.disabled})},[p("div",{class:"var-collapse-item-header",onClick:a[0]||(a[0]=r=>e.toggle())},[p("div",ke,[E(e.$slots,"title",{},()=>[d(u(e.title),1)])]),p("div",ye,[E(e.$slots,"icon",{},()=>[o(c,{name:e.icon,transition:400,class:x({"var-collapse-item-header__icon":!0,"var-collapse-item-header__open":e.isShow&&e.icon==="chevron-down","var-collapse-item-header__disable":e.disabled})},null,8,["name","class"])])])]),te(p("div",{class:"var-collapse-item-content",ref:"contentEl",onTransitionend:a[1]||(a[1]=(...r)=>e.transitionend&&e.transitionend(...r))},[p("div",Ee,[E(e.$slots,"default")])],544),[[ne,e.show]])],2)}var k=P(ge,[["render",Se]]);k.install=function(e){e.component(k.name,k)};var Ie={basicUsage:"\u57FA\u672C\u4F7F\u7528",hideMargin:"\u9690\u85CF\u8FB9\u8DDD",accordionMode:"\u624B\u98CE\u7434\u6A21\u5F0F",disabled:"\u7981\u7528",enable:"\u542F\u7528",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9",title:"\u6807\u9898",text:"\u6587\u672C",slotTitle:"\u8FD9\u662F\u6807\u9898",slotContent:"\u8FD9\u662F\u5185\u5BB9"},Ae={basicUsage:"Basic Usage",hideMargin:"Hide Margin",accordionMode:"Accordion Mode",disabled:"Disabled",enable:"Enable",customContent:"Custom Content",title:"Title",text:"Hello World",slotTitle:"This is a Title",slotContent:"This is a content"};const{add:R,use:Pe,pack:Be,packs:Ge,merge:Je}=re(),Te=e=>{me(e),Pe(e)};K("zh-CN",ue);K("en-US",ce);R("zh-CN",Ie);R("en-US",Ae);const Le={name:"CollapseExample",components:{[g.name]:g,[k.name]:k,[H.name]:H,AppType:Z},setup(){const e=oe({disabled:!1,value:["1"],value1:"",value2:[1],value3:["1"],value4:["2"]}),a=t=>{console.log(t)};return fe(Te),O(D({},ie(e)),{pack:Be,changeHandle:a})}},Ue={class:"collapse-demo"},we=d("^_^");function Ne(e,a,t,l,m,h){const c=V("app-type"),r=V("var-collapse-item"),_=V("var-collapse"),b=V("var-button");return L(),U("div",Ue,[p("div",null,[o(c,null,{default:n(()=>[d(u(l.pack.basicUsage),1)]),_:1}),o(_,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=f=>e.value=f),onChange:l.changeHandle},{default:n(()=>[o(r,{title:l.pack.title,name:"1"},{default:n(()=>[d(u(l.pack.text),1)]),_:1},8,["title"]),o(r,{title:l.pack.title,name:"2"},{default:n(()=>[d(u(l.pack.text),1)]),_:1},8,["title"])]),_:1},8,["modelValue","onChange"])]),p("div",null,[o(c,null,{default:n(()=>[d(u(l.pack.hideMargin),1)]),_:1}),o(_,{modelValue:e.value4,"onUpdate:modelValue":a[1]||(a[1]=f=>e.value4=f),offset:!1},{default:n(()=>[o(r,{title:l.pack.title,name:"1"},{default:n(()=>[d(u(l.pack.text),1)]),_:1},8,["title"]),o(r,{title:l.pack.title,name:"2"},{default:n(()=>[d(u(l.pack.text),1)]),_:1},8,["title"])]),_:1},8,["modelValue"])]),p("div",null,[o(c,null,{default:n(()=>[d(u(l.pack.accordionMode),1)]),_:1}),o(_,{modelValue:e.value1,"onUpdate:modelValue":a[2]||(a[2]=f=>e.value1=f),accordion:"",offset:!1},{default:n(()=>[o(r,{title:l.pack.title,name:"1"},{default:n(()=>[d(u(l.pack.text),1)]),_:1},8,["title"]),o(r,{title:l.pack.title,name:"2"},{default:n(()=>[d(u(l.pack.text),1)]),_:1},8,["title"])]),_:1},8,["modelValue"])]),p("div",null,[o(c,null,{default:n(()=>[d(u(l.pack.disabled),1)]),_:1}),o(b,{onClick:a[3]||(a[3]=f=>e.disabled=!e.disabled),style:{"margin-bottom":"8px"}},{default:n(()=>[d(u(e.disabled?l.pack.enable:l.pack.disabled),1)]),_:1}),o(_,{modelValue:e.value2,"onUpdate:modelValue":a[4]||(a[4]=f=>e.value2=f)},{default:n(()=>[o(r,{title:l.pack.title,name:1,disabled:e.disabled},{default:n(()=>[d(u(l.pack.text),1)]),_:1},8,["title","disabled"]),o(r,{title:l.pack.title,name:2,disabled:e.disabled},{default:n(()=>[d(u(l.pack.text),1)]),_:1},8,["title","disabled"])]),_:1},8,["modelValue"])]),p("div",null,[o(c,null,{default:n(()=>[d(u(l.pack.customContent),1)]),_:1}),o(_,{modelValue:e.value3,"onUpdate:modelValue":a[5]||(a[5]=f=>e.value3=f)},{default:n(()=>[o(r,{title:l.pack.slotTitle,name:"1",icon:"account-circle"},{default:n(()=>[d(u(l.pack.text),1)]),_:1},8,["title"]),o(r,{name:"2"},{title:n(()=>[d(u(l.pack.slotTitle),1)]),icon:n(()=>[we]),default:n(()=>[d(" "+u(l.pack.slotContent),1)]),_:1})]),_:1},8,["modelValue"])])])}var Qe=P(Le,[["render",Ne]]);export{Qe as default};
