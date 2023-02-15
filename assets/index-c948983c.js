import{v as I}from"./index-fe1e57cf.js";import{d as V,c as N,b as y}from"./components-b625c737.js";import{X as P,W as R,d as G,a as $,o as q,aj as O,_ as w,ag as Q,f as v,h as g,F as U,D as X,N as S,R as b,O as B,b as J,ac as K,az as Y,q as t,S as o,ap as a,P as i,Q as c,aA as p,M as C}from"./vue-router.esm-bundler-882e3cdf.js";import{a as E}from"./elements-0c6ef3a9.js";import{S as s}from"./index-63d2ce31.js";import{I as A}from"./index-91f09804.js";import{I as Z}from"./index-b4d2c492.js";import{d as x}from"./index-1a542d6f.js";import{u as ee,c as ae,a as M,_ as te,b as re}from"./index-26881c17.js";import"./shared-27d68af3.js";/* empty css               */import"./provide-45d960b1.js";function oe(e){return["fill","contain","cover","none","scale-down"].includes(e)}const D=e=>["mini","small","normal","large"].includes(e);function F(e){return D(e)||P(e)||R(e)}const le={round:{type:Boolean,default:!0},size:{type:[String,Number],validator:F,default:"normal"},color:{type:String},src:{type:String},fit:{type:String,validator:oe,default:"cover"},bordered:{type:Boolean,default:!1},borderColor:{type:String},loading:{type:String},error:{type:String},lazy:{type:Boolean,default:!1},onClick:V(),onLoad:V(),onError:V()},{n:ne,classes:se}=N("avatar"),ie=G({name:"VarAvatar",directives:{Lazy:I},props:le,setup(e){const l=$(null),m=$(null),d=$(1),h=()=>{if(!l.value||!m.value){d.value=1;return}const n=l.value.offsetWidth,z=m.value.offsetWidth;n>z?d.value=1:d.value=n/z},j=n=>{const z=n.currentTarget,{lazy:W,onLoad:L,onError:H}=e;W?(z._lazy.state==="success"&&y(L,n),z._lazy.state==="error"&&y(H,n)):y(L,n)},k=n=>{y(e.onError,n)},u=n=>{y(e.onClick,n)};return q(h),O(h),{internalSizeValidator:D,sizeValidator:F,toSizeUnit:E,n:ne,classes:se,avatarElement:l,textElement:m,scale:d,handleLoad:j,handleError:k,handleClick:u}}});const de=["src","lazy-loading","lazy-error"],ue=["src"];function ce(e,l,m,d,h,j){const k=Q("lazy");return v(),g("div",{ref:"avatarElement",class:S(e.classes(e.n(),e.n("$--box"),[e.internalSizeValidator(e.size),e.n(`--${e.size}`)],[e.round,e.n("--round")],[e.bordered,e.n("--bordered")])),style:b({width:e.internalSizeValidator(e.size)?void 0:e.toSizeUnit(e.size),height:e.internalSizeValidator(e.size)?void 0:e.toSizeUnit(e.size),borderColor:e.borderColor,backgroundColor:e.color}),onClick:l[3]||(l[3]=(...u)=>e.handleClick&&e.handleClick(...u))},[e.src?(v(),g(U,{key:0},[e.lazy?X((v(),g("img",{key:0,class:S(e.n("image")),src:e.src,style:b({objectFit:e.fit}),"lazy-loading":e.loading,"lazy-error":e.error,onLoad:l[0]||(l[0]=(...u)=>e.handleLoad&&e.handleLoad(...u))},null,46,de)),[[k,e.src]]):(v(),g("img",{key:1,class:S(e.n("image")),src:e.src,style:b({objectFit:e.fit}),onLoad:l[1]||(l[1]=(...u)=>e.handleLoad&&e.handleLoad(...u)),onError:l[2]||(l[2]=(...u)=>e.handleError&&e.handleError(...u))},null,46,ue))],64)):(v(),g("div",{key:1,ref:"textElement",class:S(e.n("text")),style:b({scale:e.scale})},[B(e.$slots,"default")],6))],6)}const r=w(ie,[["render",ce]]);r.install=function(e){e.component(r.name,r)};const pe={offset:{type:[Number,String]},vertical:{type:Boolean,default:!1}},{n:fe,classes:ve}=N("avatar-group"),ge=G({name:"VarAvatarGroup",props:pe,setup(e){const l=J(()=>e.offset==null?{}:{"--avatar-group-offset":E(e.offset)});return{n:fe,classes:ve,toSizeUnit:E,rootStyles:l}}});function me(e,l,m,d,h,j){return v(),g("div",{class:S(e.classes(e.n(),[e.vertical,e.n("--column"),e.n("--row")])),style:b(e.rootStyles)},[B(e.$slots,"default")],6)}const _=w(ge,[["render",me]]);_.install=function(e){e.component(_.name,_)};const he={avatarSize:"头像尺寸",avatarShape:"头像形状",fitMode:"填充模式",fontSize:"文字自适应",backgroundColor:"背景颜色",avatarHorizontalGroup:"头像水平分组",avatarVerticalGroup:"头像垂直分组"},ze={avatarSize:"Avatar Size",avatarShape:"Avatar Shape",fitMode:"Fit Mode",fontSize:"Text Adaptive",backgroundColor:"Background Color",avatarHorizontalGroup:"Avatar Horizontal Group",avatarVerticalGroup:"Avatar Vertical Group"},{add:T,use:ye,pack:f,packs:We,merge:He}=ee(),Se=e=>{ae(e),ye(e)};M("zh-CN",te);M("en-US",re);T("zh-CN",he);T("en-US",ze);const be=C("span",null,"fill",-1),_e=C("span",null,"cover",-1),Ce=C("span",null,"contain",-1),$e=C("span",null,"none",-1),je=C("span",null,"scale-down",-1),ke=i("+2"),Ve=i("+2"),Ie={setup(e){const l=$("VARLET");return K(Se),Y(x),(m,d)=>(v(),g(U,null,[t(a(p),null,{default:o(()=>[i(c(a(f).avatarSize),1)]),_:1}),t(a(s),{align:"center"},{default:o(()=>[t(a(r),{src:"https://varlet.gitee.io/varlet-ui/cat.jpg",size:"mini"}),t(a(r),{src:"https://varlet.gitee.io/varlet-ui/cat.jpg",size:"small"}),t(a(r),{src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),t(a(r),{src:"https://varlet.gitee.io/varlet-ui/cat.jpg",size:"large"}),t(a(r),{src:"https://varlet.gitee.io/varlet-ui/cat.jpg",size:78})]),_:1}),t(a(p),null,{default:o(()=>[i(c(a(f).avatarShape),1)]),_:1}),t(a(s),null,{default:o(()=>[t(a(r),{src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),t(a(r),{src:"https://varlet.gitee.io/varlet-ui/cat.jpg",round:!1})]),_:1}),t(a(p),null,{default:o(()=>[i(c(a(f).fitMode),1)]),_:1}),t(a(s),null,{default:o(()=>[t(a(s),{direction:"column",align:"center"},{default:o(()=>[t(a(r),{src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),be]),_:1}),t(a(s),{direction:"column",align:"center"},{default:o(()=>[t(a(r),{src:"https://varlet.gitee.io/varlet-ui/cat.jpg",fit:"cover"}),_e]),_:1}),t(a(s),{direction:"column",align:"center"},{default:o(()=>[t(a(r),{src:"https://varlet.gitee.io/varlet-ui/cat.jpg",fit:"contain"}),Ce]),_:1}),t(a(s),{direction:"column",align:"center"},{default:o(()=>[t(a(r),{src:"https://varlet.gitee.io/varlet-ui/cat.jpg",fit:"none"}),$e]),_:1}),t(a(s),{direction:"column",align:"center"},{default:o(()=>[t(a(r),{src:"https://varlet.gitee.io/varlet-ui/cat.jpg",fit:"scale-down"}),je]),_:1})]),_:1}),t(a(p),null,{default:o(()=>[i(c(a(f).fontSize),1)]),_:1}),t(a(s),{direction:"column"},{default:o(()=>[t(a(s),null,{default:o(()=>[t(a(r),null,{default:o(()=>[i(c(l.value),1)]),_:1}),t(a(r),{round:!1},{default:o(()=>[i(c(l.value),1)]),_:1})]),_:1}),t(a(Z),{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=h=>l.value=h)},null,8,["modelValue"])]),_:1}),t(a(p),null,{default:o(()=>[i(c(a(f).backgroundColor),1)]),_:1}),t(a(s),null,{default:o(()=>[t(a(r),{color:"#4a79f5"},{default:o(()=>[t(a(A),{name:"fire"})]),_:1}),t(a(r),{round:!1,color:"#eb5a3f"},{default:o(()=>[t(a(A),{name:"fire"})]),_:1})]),_:1}),t(a(p),null,{default:o(()=>[i(c(a(f).avatarHorizontalGroup),1)]),_:1}),t(a(_),null,{default:o(()=>[t(a(r),{src:"https://varlet.gitee.io/varlet-ui/cat.jpg",bordered:""}),t(a(r),{src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",bordered:""}),t(a(r),{src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",bordered:""}),t(a(r),{bordered:""},{default:o(()=>[ke]),_:1})]),_:1}),t(a(p),null,{default:o(()=>[i(c(a(f).avatarVerticalGroup),1)]),_:1}),t(a(_),{vertical:""},{default:o(()=>[t(a(r),{src:"https://varlet.gitee.io/varlet-ui/cat.jpg",bordered:""}),t(a(r),{src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",bordered:""}),t(a(r),{src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",bordered:""}),t(a(r),{bordered:""},{default:o(()=>[Ve]),_:1})]),_:1})],64))}};export{Ie as default};
