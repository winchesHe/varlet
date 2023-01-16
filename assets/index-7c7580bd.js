import{u as x}from"./provide-b8e46d92.js";import{d as ee,n as ae}from"./elements-b756947f.js";import{d as te,c as ne,f as b}from"./components-bbfed807.js";import{d as le,a as p,b as oe,w as re,o as se,v as ue,Z as L,X as ie,_ as ve,f as k,h as I,M as ce,O as V,N as C,R as W,F as de,ai as fe,j as he}from"./vue-router.esm-bundler-596ad174.js";const me={loop:{type:Boolean,default:!0},autoplay:{type:[String,Number]},duration:{type:[String,Number],default:300},initialIndex:{type:[String,Number],default:0},indicator:{type:Boolean,default:!0},indicatorColor:{type:String},vertical:{type:Boolean,default:!1},touchable:{type:Boolean,default:!0},onChange:te()},pe=250,Te=20,{n:we,classes:ge}=ne("swipe"),Se=le({name:"VarSwipe",props:me,setup(e){const v=p(null),s=p(0),A=oe(()=>e.vertical),c=p(0),r=p(0),u=p(!1),l=p(0),{swipeItems:$,bindSwipeItems:q,length:n}=x();let T=!1,z=-1,w,g,F,f,h;const d=a=>$.find(({index:t})=>t.value===a),j=()=>{e.loop&&(r.value>=0&&d(n.value-1).setTranslate(-c.value),r.value<=-(c.value-s.value)&&d(0).setTranslate(c.value),r.value>-(c.value-s.value)&&r.value<0&&(d(n.value-1).setTranslate(0),d(0).setTranslate(0)))},E=a=>{const t=ie(a)?a:Math.floor((r.value-s.value/2)/-s.value),{loop:o}=e;return t<=-1?o?-1:0:t>=n.value?o?n.value:n.value-1:t},H=a=>{const{loop:t}=e;return a===-1?t?n.value-1:0:a===n.value?t?0:n.value-1:a},N=a=>{const{loop:t}=e;return a<0?t?n.value-1:0:a>n.value-1?t?0:n.value-1:a},D=a=>{const t=r.value>=s.value,o=r.value<=-c.value,i=0,m=-(c.value-s.value);u.value=!0,(t||o)&&(u.value=!0,r.value=o?i:m,d(0).setTranslate(0),d(n.value-1).setTranslate(0)),ae(()=>{u.value=!1,b(a)})},O=()=>{l.value=N(L(e.initialIndex))},B=()=>{const{autoplay:a}=e;!a||n.value<=1||(M(),z=window.setTimeout(()=>{X(),B()},L(a)))},M=()=>{z&&clearTimeout(z)},U=(a,t)=>{if(a>t&&a>10)return"horizontal";if(t>a&&t>10)return"vertical"},Z=a=>{if(n.value<=1||!e.touchable)return;const{clientX:t,clientY:o}=a.touches[0];w=t,g=o,F=performance.now(),T=!0,M(),D(()=>{u.value=!0})},G=a=>{const{touchable:t,vertical:o}=e;if(!T||!t)return;const{clientX:i,clientY:m}=a.touches[0],y=Math.abs(i-w),Y=Math.abs(m-g);if(U(y,Y)===(o?"vertical":"horizontal")){a.preventDefault();const Q=f!==void 0?i-f:0,_=h!==void 0?m-h:0;f=i,h=m,r.value+=o?_:Q,j()}},J=()=>{if(!T)return;const{vertical:a,onChange:t}=e,o=a?h<g:f<w,i=Math.abs(a?g-h:w-f),y=performance.now()-F<=pe&&i>=Te?E(o?l.value+1:l.value-1):E();T=!1,u.value=!1,f=void 0,h=void 0,r.value=y*-s.value;const Y=l.value;l.value=H(y),B(),Y!==l.value&&b(t,l.value)},S=()=>{v.value&&(u.value=!0,s.value=e.vertical?v.value.offsetHeight:v.value.offsetWidth,c.value=s.value*n.value,r.value=l.value*-s.value,$.forEach(a=>{a.setTranslate(0)}),B(),setTimeout(()=>{u.value=!1}))},X=a=>{if(n.value<=1)return;const{loop:t,onChange:o}=e,i=l.value;l.value=N(i+1),(a==null?void 0:a.event)!==!1&&b(o,l.value),D(()=>{if(i===n.value-1&&t){d(0).setTranslate(c.value),r.value=n.value*-s.value;return}i!==n.value-1&&(r.value=l.value*-s.value)})},R=a=>{if(n.value<=1)return;const{loop:t,onChange:o}=e,i=l.value;l.value=N(i-1),(a==null?void 0:a.event)!==!1&&b(o,l.value),D(()=>{if(i===0&&t){d(n.value-1).setTranslate(-c.value),r.value=s.value;return}i!==0&&(r.value=l.value*-s.value)})},K=(a,t)=>{if(n.value<=1||a===l.value)return;a=a<0?0:a,a=a>=n.value?n.value:a;const o=a>l.value?X:R;Array.from({length:Math.abs(a-l.value)}).forEach(()=>{o(t)})};return q({size:s,vertical:A}),re(()=>n.value,async()=>{await ee(),O(),S()}),se(()=>{window.addEventListener("resize",S)}),ue(()=>{window.removeEventListener("resize",S),M()}),{n:we,classes:ge,length:n,index:l,swipeEl:v,trackSize:c,translate:r,lockDuration:u,handleTouchstart:Z,handleTouchmove:G,handleTouchend:J,next:X,prev:R,to:K,resize:S,toNumber:L}}});const ye=["onClick"];function be(e,v,s,A,c,r){return k(),I("div",{class:C(e.n()),ref:"swipeEl"},[ce("div",{class:C(e.classes(e.n("track"),[e.vertical,e.n("--vertical")])),style:W({width:e.vertical?void 0:`${e.trackSize}px`,height:e.vertical?`${e.trackSize}px`:void 0,transform:`translate${e.vertical?"Y":"X"}(${e.translate}px)`,transitionDuration:e.lockDuration?"0ms":`${e.toNumber(e.duration)}ms`}),onTouchstart:v[0]||(v[0]=(...u)=>e.handleTouchstart&&e.handleTouchstart(...u)),onTouchmove:v[1]||(v[1]=(...u)=>e.handleTouchmove&&e.handleTouchmove(...u)),onTouchend:v[2]||(v[2]=(...u)=>e.handleTouchend&&e.handleTouchend(...u))},[V(e.$slots,"default")],38),V(e.$slots,"indicator",{index:e.index,length:e.length},()=>[e.indicator&&e.length?(k(),I("div",{key:0,class:C(e.classes(e.n("indicators"),[e.vertical,e.n("--indicators-vertical")]))},[(k(!0),I(de,null,fe(e.length,(u,l)=>(k(),I("div",{class:C(e.classes(e.n("indicator"),[e.index===l,e.n("--indicator-active")],[e.vertical,e.n("--indicator-vertical")])),style:W({background:e.indicatorColor}),key:u,onClick:$=>e.to(l)},null,14,ye))),128))],2)):he("",!0)])],2)}const P=ve(Se,[["render",be]]);P.install=function(e){e.component(P.name,P)};export{P as S,me as p};
