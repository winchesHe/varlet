import{L as K}from"./index-7174c92a.js";import{v as X}from"./index-a91d93ca.js";import{e as Y,b as z,t as Z}from"./elements-ef5178c4.js";import{d as E,u as G,a as C,e as H,c as J}from"./components-d3c1de13.js";import{d as W,a as V,w as M,x as ee,u as te,X as ae,n as ie,_ as ne,p as oe,ag as se,f as u,h as b,O as B,M as I,N as k,Q as l,q as s,j as _,D as le,P as g,r as re,aO as de,ac as fe,aE as ue,S as n,ao as t,av as L,F as S,ai as w,i as D}from"./vue-router-6d86b99d.js";import{d as me}from"./shared-1843a447.js";import{p as pe,u as ce,a as O,_ as ge,b as ve,c as Te}from"./index-3c1b9f16.js";import{T as he,a as F}from"./index-3b74a55e.js";import{C as P}from"./index-b1320186.js";import{a as R,T as ke}from"./index-addcc0d4.js";import{T as Le}from"./index-729a774a.js";import{d as be}from"./index-dd768cde.js";import"./index-aa7c4fad.js";/* empty css               */import"./logger-525ef361.js";import"./index-3f3fb3a3.js";import"./provide-75dabba5.js";import"./useChildren-e46981d6.js";import"./provide-0fb9c476.js";import"./index-83a910b7.js";import"./index-2c18cca8.js";import"./index-995e938d.js";const ye={loading:{type:Boolean,default:!1},immediateCheck:{type:Boolean,default:!0},finished:{type:Boolean,default:!1},error:{type:Boolean,default:!1},offset:{type:[String,Number],default:0},loadingText:{type:String},finishedText:{type:String},errorText:{type:String},onLoad:E(),"onUpdate:loading":E(),"onUpdate:error":E()};function Ue(){const{parentProvider:e,bindParent:a,index:v}=G(he);return{index:v,tabItem:e,bindTabItem:a}}const{n:xe,classes:Ne}=J("list"),Ce=W({name:"VarList",directives:{Ripple:X},components:{VarLoading:K},props:ye,setup(e){const{tabItem:a,bindTabItem:v}=Ue(),U=V(null),x=V(null);let r;const m=()=>{C(e["onUpdate:error"],!1),C(e["onUpdate:loading"],!0),C(e.onLoad)},c=()=>{const{bottom:$}=z(r),{bottom:N}=z(x.value);return Math.floor(N)-Z(e.offset)<=$},T=()=>{r.removeEventListener("scroll",p)},p=async()=>{await ie(),!(e.loading||e.finished||e.error||(a==null?void 0:a.current.value)===!1||!c())&&m()};return C(v,{}),a&&M(()=>a.current.value,p),M(()=>[e.loading,e.error,e.finished],p),H(()=>{r=Y(U.value),r.addEventListener("scroll",p),e.immediateCheck&&p()}),ee(T),te(T),{pack:pe,listEl:U,detectorEl:x,dt:me,isNumber:ae,load:m,check:p,n:xe,classes:Ne}}});function Be(e,a,v,U,x,r){const m=oe("var-loading"),c=se("ripple");return u(),b("div",{class:k(e.classes(e.n(),e.n("$--box"))),ref:"listEl"},[B(e.$slots,"default"),e.loading?B(e.$slots,"loading",{key:0},()=>[I("div",{class:k(e.n("loading"))},[I("div",{class:k(e.n("loading-text"))},l(e.dt(e.loadingText,e.pack.listLoadingText)),3),s(m,{size:"mini",radius:10})],2)]):_("",!0),e.finished?B(e.$slots,"finished",{key:1},()=>[I("div",{class:k(e.n("finished"))},l(e.dt(e.finishedText,e.pack.listFinishedText)),3)]):_("",!0),e.error?B(e.$slots,"error",{key:2},()=>[le((u(),b("div",{class:k(e.n("error")),onClick:a[0]||(a[0]=(...T)=>e.load&&e.load(...T))},[g(l(e.dt(e.errorText,e.pack.listErrorText)),1)],2)),[[c]])]):_("",!0),I("div",{class:k(e.n("detector")),ref:"detectorEl"},null,2)],2)}const y=ne(Ce,[["render",Be]]);y.install=function(e){e.component(y.name,y)};const Ie={basicUsage:"基本使用",loadFail:"加载失败",tipText:"提示文字",loadingText:"正在努力输出",errorText:"出错了出错了",finishedText:"一滴都没有了",listItem:"列表项"},Se={basicUsage:"Basic Usage",loadFail:"Load Fail",tipText:"Tip Text",loadingText:"loading QAQ",errorText:"error TNT",finishedText:"finished ORZ",listItem:"List Item"},{add:Q,use:$e,pack:f,packs:et,merge:tt}=ce(),Ee=e=>{Te(e),$e(e)};O("zh-CN",ge);O("en-US",ve);Q("zh-CN",Ie);Q("en-US",Se);const at={__name:"index",setup(e){const a=re({loading:!1,loading2:!1,loading3:!1,finished:!1,finished2:!1,finished3:!1,error:!1,list:[],list2:[],list3:[],current:0}),{list:v,list2:U,list3:x,loading:r,loading2:m,loading3:c,finished:T,finished2:p,finished3:$,error:N,current:h}=de(a);function A(){setTimeout(()=>{for(let d=0;d<20;d++)a.list.push(a.list.length+1);a.loading=!1,a.list.length>=60&&(a.finished=!0)},1e3)}function j(){setTimeout(()=>{if(a.list2.length===40){a.error=!0,a.loading2=!1;return}for(let d=0;d<20;d++)a.list2.push(a.list2.length+1);a.loading2=!1},1e3)}function q(){setTimeout(()=>{for(let d=0;d<20;d++)a.list3.push(a.list3.length+1);a.loading3=!1,a.list3.length>=60&&(a.finished3=!0)},1e3)}return fe(Ee),ue(be),(d,o)=>(u(),b(S,null,[s(t(ke),{active:t(h),"onUpdate:active":o[0]||(o[0]=i=>L(h)?h.value=i:null),sticky:"","offset-top":"14.4vw",style:{"margin-bottom":"10px"}},{default:n(()=>[s(t(R),null,{default:n(()=>[g(l(t(f).basicUsage),1)]),_:1}),s(t(R),null,{default:n(()=>[g(l(t(f).loadFail),1)]),_:1}),s(t(R),null,{default:n(()=>[g(l(t(f).tipText),1)]),_:1})]),_:1},8,["active"]),s(t(Le),{active:t(h),"onUpdate:active":o[5]||(o[5]=i=>L(h)?h.value=i:null)},{default:n(()=>[s(t(F),null,{default:n(()=>[s(t(y),{finished:t(T),loading:t(r),"onUpdate:loading":o[1]||(o[1]=i=>L(r)?r.value=i:null),onLoad:A},{default:n(()=>[(u(!0),b(S,null,w(t(v),i=>(u(),D(t(P),{key:i},{default:n(()=>[g(l(t(f).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["finished","loading"])]),_:1}),s(t(F),null,{default:n(()=>[s(t(y),{finished:t(p),error:t(N),"onUpdate:error":o[2]||(o[2]=i=>L(N)?N.value=i:null),loading:t(m),"onUpdate:loading":o[3]||(o[3]=i=>L(m)?m.value=i:null),onLoad:j},{default:n(()=>[(u(!0),b(S,null,w(t(U),i=>(u(),D(t(P),{key:i},{default:n(()=>[g(l(t(f).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["finished","error","loading"])]),_:1}),s(t(F),null,{default:n(()=>[s(t(y),{"loading-text":t(f).loadingText,"finished-text":t(f).finishedText,"error-text":t(f).errorText,finished:t($),loading:t(c),"onUpdate:loading":o[4]||(o[4]=i=>L(c)?c.value=i:null),onLoad:q},{default:n(()=>[(u(!0),b(S,null,w(t(x),i=>(u(),D(t(P),{key:i},{default:n(()=>[g(l(t(f).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["loading-text","finished-text","error-text","finished","loading"])]),_:1})]),_:1},8,["active"])],64))}};export{at as default};
