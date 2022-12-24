import{R as N}from"./index.08cd40ac.js";import{L as R}from"./index.67fbffdb.js";import{a as j}from"./elements.e0af8b84.js";import{c as $,f}from"./components.011f3236.js";import{d as B,_ as k,ag as L,D as F,f as y,h as w,N as _,R as b,ac as D,q as a,S as n,al as t,F as I,P as p,Q as u,az as c,M as l,am as M,an as V}from"./vue-router.esm-bundler.5eeb4635.js";import{R as C}from"./index.c9969c56.js";import{u as A,a as E,_ as T,b as q,c as P}from"./index.0701778a.js";import"./index.fb6ef4d0.js";/* empty css               */import"./shared.f77a40d1.js";function Q(e){return["fill","contain","cover","none","scale-down"].includes(e)}const G={src:{type:String},fit:{type:String,validator:Q,default:"fill"},alt:{type:String},title:{type:String},width:{type:[String,Number]},height:{type:[String,Number]},radius:{type:[String,Number],default:0},loading:{type:String},error:{type:String},lazy:{type:Boolean,default:!1},ripple:{type:Boolean,default:!1},block:{type:Boolean,default:!0},onClick:{type:Function},onLoad:{type:Function},onError:{type:Function}},{n:H,classes:J}=$("image"),K=B({name:"VarImage",directives:{Lazy:R,Ripple:N},props:G,setup(e){return{n:H,classes:J,toSizeUnit:j,handleLoad:r=>{const d=r.currentTarget,{lazy:h,onLoad:v,onError:z}=e;h?(d._lazy.state==="success"&&f(v,r),d._lazy.state==="error"&&f(z,r)):f(v,r)},handleError:r=>{const{lazy:d,onError:h}=e;!d&&f(h,r)}}}});const O=["alt","title","lazy-error","lazy-loading"],W=["alt","title","src"];function X(e,i,S,r,d,h){const v=L("lazy"),z=L("ripple");return F((y(),w("div",{class:_(e.classes(e.n(),e.n("$--box"),[!e.block,e.n("$--inline-block")])),style:b({width:e.toSizeUnit(e.width),height:e.toSizeUnit(e.height),"border-radius":e.toSizeUnit(e.radius)})},[e.lazy?F((y(),w("img",{key:0,class:_(e.n("image")),alt:e.alt,title:e.title,"lazy-error":e.error,"lazy-loading":e.loading,style:b({objectFit:e.fit}),onLoad:i[0]||(i[0]=(...o)=>e.handleLoad&&e.handleLoad(...o)),onError:i[1]||(i[1]=(...o)=>e.handleError&&e.handleError(...o)),onClick:i[2]||(i[2]=(...o)=>e.onClick&&e.onClick(...o))},null,46,O)),[[v,e.src]]):(y(),w("img",{key:1,class:_(e.n("image")),alt:e.alt,title:e.title,style:b({objectFit:e.fit}),src:e.src,onLoad:i[3]||(i[3]=(...o)=>e.handleLoad&&e.handleLoad(...o)),onError:i[4]||(i[4]=(...o)=>e.handleError&&e.handleError(...o)),onClick:i[5]||(i[5]=(...o)=>e.onClick&&e.onClick(...o))},null,46,W))],6)),[[z,{disabled:!e.ripple}]])}const s=k(K,[["render",X]]);s.install=function(e){e.component(s.name,s)};const Y={basicUsage:"\u57FA\u672C\u4F7F\u7528",fitMode:"\u586B\u5145\u6A21\u5F0F",setRadius:"\u8BBE\u7F6E\u5706\u89D2",useRipple:"\u5F00\u542F\u6C34\u6CE2",useLazyLoad:"\u5F00\u542F\u61D2\u52A0\u8F7D"},Z={basicUsage:"Basic Usage",fitMode:"Fit Mode",setRadius:"Set Radius",useRipple:"Use Ripple",useLazyLoad:"Use LazyLoad"},{add:U,use:x,pack:m,packs:be,merge:Se}=A(),ee=e=>{P(e),x(e)};E("zh-CN",T);E("en-US",q);U("zh-CN",Y);U("en-US",Z);const g=e=>(M("data-v-b6cd487f"),e=e(),V(),e),te={class:"image-example-fit-item"},ae=g(()=>l("div",{class:"image-example-margin-bottom"},"fill",-1)),ie={class:"image-example-fit-item"},se=g(()=>l("div",{class:"image-example-margin-bottom"},"cover",-1)),oe={class:"image-example-fit-item"},le=g(()=>l("div",{class:"image-example-margin-bottom"},"contain",-1)),re={class:"image-example-fit-item"},ne=g(()=>l("div",{class:"image-example-margin-bottom"},"none",-1)),de={class:"image-example-fit-item"},pe=g(()=>l("div",{class:"image-example-margin-bottom"},"scale-down",-1)),ue={setup(e){return D(ee),(i,S)=>(y(),w(I,null,[a(t(c),null,{default:n(()=>[p(u(t(m).basicUsage),1)]),_:1}),a(t(s),{src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),a(t(c),null,{default:n(()=>[p(u(t(m).fitMode),1)]),_:1}),a(t(C),null,{default:n(()=>[l("div",te,[a(t(s),{width:"22.666vw",height:"22.666vw",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),ae]),l("div",ie,[a(t(s),{width:"22.666vw",height:"22.666vw",fit:"cover",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),se]),l("div",oe,[a(t(s),{width:"22.666vw",height:"22.666vw",fit:"contain",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),le]),l("div",re,[a(t(s),{width:"22.666vw",height:"22.666vw",fit:"none",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),ne]),l("div",de,[a(t(s),{width:"22.666vw",height:"22.666vw",fit:"scale-down",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),pe])]),_:1}),a(t(c),null,{default:n(()=>[p(u(t(m).setRadius),1)]),_:1}),a(t(C),null,{default:n(()=>[a(t(s),{width:"22.666vw",height:"22.666vw",fit:"cover",radius:10,src:"https://varlet.gitee.io/varlet-ui/cat.jpg",class:"image-example-fit-item"}),a(t(s),{width:"22.666vw",height:"22.666vw",fit:"cover",radius:"50%",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})]),_:1}),a(t(c),null,{default:n(()=>[p(u(t(m).useRipple),1)]),_:1}),a(t(s),{ripple:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),a(t(c),null,{default:n(()=>[p(u(t(m).useLazyLoad),1)]),_:1}),a(t(s),{lazy:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})],64))}},Le=k(ue,[["__scopeId","data-v-b6cd487f"]]);export{Le as default};
