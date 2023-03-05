import{L as q}from"./index-b6a96f47.js";import{v as A}from"./index-e0ccf07b.js";import{g as H,t as J}from"./elements-4c784a6a.js";import{d as S,g as X,c as Z,b as w}from"./components-49559557.js";import{d as G,a as D,v as K,X as W,n as Y,_ as ee,p as te,ag as ae,f as p,h as y,O as b,M as x,N as T,Q as l,q as s,j as E,D as ie,P as c,r as oe,aJ as ne,ac as se,aB as le,S as o,ap as t,au as k,F as B,ai as I,i as R}from"./vue-router.esm-bundler-c0c92185.js";import{d as re}from"./shared-99660556.js";import{p as de,u as fe,c as ue,a as M,_ as pe,b as me}from"./index-cc42749a.js";import{C as F}from"./index-ed665d7b.js";import{a as z,T as ge}from"./index-3c769d34.js";import{T as ce}from"./index-734adff0.js";import{T as V}from"./index-08f54136.js";import{d as he}from"./index-59604d2c.js";import"./index-67de6f11.js";/* empty css               */import"./index-c792e968.js";import"./index-a1ee9ca0.js";import"./index-50454e8e.js";import"./provide-37a9ac36.js";import"./provide-9f5a8ef1.js";import"./index-0683f0e2.js";const ve={loading:{type:Boolean,default:!1},immediateCheck:{type:Boolean,default:!0},finished:{type:Boolean,default:!1},error:{type:Boolean,default:!1},offset:{type:[String,Number],default:0},loadingText:{type:String},finishedText:{type:String},errorText:{type:String},onLoad:S(),"onUpdate:loading":S(),"onUpdate:error":S()},{n:Te,classes:ke}=Z("list"),ye=G({name:"VarList",directives:{Ripple:A},components:{VarLoading:q},props:ve,setup(e){const a=D(null),U=D(null);let m;const C=()=>{w(e["onUpdate:error"],!1),w(e["onUpdate:loading"],!0),w(e.onLoad)},h=()=>{const d=m===window?window.innerHeight:m.getBoundingClientRect().bottom,{bottom:g}=U.value.getBoundingClientRect();return Math.floor(g)-J(e.offset)<=d},r=async()=>{await Y();const{loading:d,finished:g,error:N}=e;!d&&!g&&!N&&h()&&C()};return X(()=>{m=H(a.value),e.immediateCheck&&r(),m.addEventListener("scroll",r)}),K(()=>{m.removeEventListener("scroll",r)}),{pack:de,listEl:a,detectorEl:U,dt:re,isNumber:W,load:C,check:r,n:Te,classes:ke}}});function Le(e,a,U,m,C,h){const r=te("var-loading"),d=ae("ripple");return p(),y("div",{class:T(e.classes(e.n(),e.n("$--box"))),ref:"listEl"},[b(e.$slots,"default"),e.loading?b(e.$slots,"loading",{key:0},()=>[x("div",{class:T(e.n("loading"))},[x("div",{class:T(e.n("loading-text"))},l(e.dt(e.loadingText,e.pack.listLoadingText)),3),s(r,{size:"mini",radius:10})],2)]):E("",!0),e.finished?b(e.$slots,"finished",{key:1},()=>[x("div",{class:T(e.n("finished"))},l(e.dt(e.finishedText,e.pack.listFinishedText)),3)]):E("",!0),e.error?b(e.$slots,"error",{key:2},()=>[ie((p(),y("div",{class:T(e.n("error")),onClick:a[0]||(a[0]=(...g)=>e.load&&e.load(...g))},[c(l(e.dt(e.errorText,e.pack.listErrorText)),1)],2)),[[d]])]):E("",!0),x("div",{class:T(e.n("detector")),ref:"detectorEl"},null,2)],2)}const L=ee(ye,[["render",Le]]);L.install=function(e){e.component(L.name,L)};const Ue={basicUsage:"基本使用",loadFail:"加载失败",tipText:"提示文字",loadingText:"正在努力输出",errorText:"出错了出错了",finishedText:"一滴都没有了",listItem:"列表项"},Ce={basicUsage:"Basic Usage",loadFail:"Load Fail",tipText:"Tip Text",loadingText:"loading QAQ",errorText:"error TNT",finishedText:"finished ORZ",listItem:"List Item"},{add:P,use:be,pack:u,packs:He,merge:Je}=fe(),xe=e=>{ue(e),be(e)};M("zh-CN",pe);M("en-US",me);P("zh-CN",Ue);P("en-US",Ce);const Xe={setup(e){const a=oe({loading:!1,loading2:!1,loading3:!1,finished:!1,finished2:!1,finished3:!1,error:!1,list:[],list2:[],list3:[],current:0}),{list:U,list2:m,list3:C,loading:h,loading2:r,loading3:d,finished:g,finished2:N,finished3:_,error:$,current:v}=ne(a);function Q(){if(a.current!==0){a.loading=!1;return}setTimeout(()=>{for(let f=0;f<20;f++)a.list.push(a.list.length+1);a.loading=!1,a.list.length>=60&&(a.finished=!0)},1e3)}function O(){if(a.current!==1){a.loading2=!1;return}setTimeout(()=>{if(a.list2.length===40){a.error=!0,a.loading2=!1;return}for(let f=0;f<20;f++)a.list2.push(a.list2.length+1);a.loading2=!1},1e3)}function j(){if(a.current!==2){a.loading3=!1;return}setTimeout(()=>{for(let f=0;f<20;f++)a.list3.push(a.list3.length+1);a.loading3=!1,a.list3.length>=60&&(a.finished3=!0)},1e3)}return se(xe),le(he),(f,n)=>(p(),y(B,null,[s(t(ge),{active:t(v),"onUpdate:active":n[0]||(n[0]=i=>k(v)?v.value=i:null),sticky:"","offset-top":"14.4vw",style:{"margin-bottom":"10px"}},{default:o(()=>[s(t(z),null,{default:o(()=>[c(l(t(u).basicUsage),1)]),_:1}),s(t(z),null,{default:o(()=>[c(l(t(u).loadFail),1)]),_:1}),s(t(z),null,{default:o(()=>[c(l(t(u).tipText),1)]),_:1})]),_:1},8,["active"]),s(t(ce),{active:t(v),"onUpdate:active":n[5]||(n[5]=i=>k(v)?v.value=i:null)},{default:o(()=>[s(t(V),null,{default:o(()=>[s(t(L),{finished:t(g),loading:t(h),"onUpdate:loading":n[1]||(n[1]=i=>k(h)?h.value=i:null),onLoad:Q},{default:o(()=>[(p(!0),y(B,null,I(t(U),i=>(p(),R(t(F),{key:i},{default:o(()=>[c(l(t(u).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["finished","loading"])]),_:1}),s(t(V),null,{default:o(()=>[s(t(L),{finished:t(N),error:t($),"onUpdate:error":n[2]||(n[2]=i=>k($)?$.value=i:null),loading:t(r),"onUpdate:loading":n[3]||(n[3]=i=>k(r)?r.value=i:null),onLoad:O},{default:o(()=>[(p(!0),y(B,null,I(t(m),i=>(p(),R(t(F),{key:i},{default:o(()=>[c(l(t(u).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["finished","error","loading"])]),_:1}),s(t(V),null,{default:o(()=>[s(t(L),{"loading-text":t(u).loadingText,"finished-text":t(u).finishedText,"error-text":t(u).errorText,finished:t(_),loading:t(d),"onUpdate:loading":n[4]||(n[4]=i=>k(d)?d.value=i:null),onLoad:j},{default:o(()=>[(p(!0),y(B,null,I(t(C),i=>(p(),R(t(F),{key:i},{default:o(()=>[c(l(t(u).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["loading-text","finished-text","error-text","finished","loading"])]),_:1})]),_:1},8,["active"])],64))}};export{Xe as default};
