import{I as j}from"./index-a551829b.js";import{g as q,b as Q,f as Z}from"./elements-87b8c072.js";import{d as D,c as G,b as P}from"./components-25275440.js";import{d as J,a as l,b as m,w as K,o as W,e as X,Z as b,_ as O,p as x,f as h,h as Y,M as ee,q as ae,N as C,R as te,O as oe,az as se,i as _,S as B,ap as E,ai as ne,P as le,Q as re,F as ue}from"./vue-router.esm-bundler-10f05234.js";import{C as ce}from"./index-79633381.js";import{d as ie}from"./index-7f7c9244.js";import"./shared-5ff0af51.js";import"./index-694a1082.js";import"./index-099a024e.js";/* empty css               */const de={modelValue:{type:Boolean},disabled:{type:Boolean,default:!1},animationDuration:{type:[Number,String],default:300},successDuration:{type:[Number,String],default:2e3},bgColor:{type:String},successBgColor:{type:String},color:{type:String},successColor:{type:String},target:{type:[String,Object]},onRefresh:D(),"onUpdate:modelValue":D()},{n:$,classes:ve}=G("pull-refresh"),L=150,fe=J({name:"VarPullRefresh",components:{VarIcon:j},props:de,setup(e){let o,c;const n=l(0),u=l(null),i=l(null),d=l(0),t=l(-999),r=l("arrow-down"),s=l("default"),v=l(!1);let I=0,p=0;const S=l(!0),R=m(()=>s.value!=="loading"&&s.value!=="success"&&!e.disabled),M=m(()=>({transform:`translate3d(0px, ${t.value}px, 0px) translate(-50%, 0)`,transition:v.value?`transform ${e.animationDuration}ms`:void 0,background:y.value?e.successBgColor:e.bgColor,color:y.value?e.successColor:e.color})),f=m(()=>Math.abs(2*n.value)),y=m(()=>s.value==="success"),A=()=>new Promise(a=>{window.setTimeout(()=>{S.value=!0,a()},L)}),N=a=>{("classList"in o?o:document.body).classList[a](`${$()}--lock`)},U=a=>{I=a.touches[0].clientY,p=0},T=a=>{if(!R.value)return;const w=Z(o);if(w>0)return;const V=w===0;p=a.touches[0].clientY-I,V&&p>=0&&a.preventDefault(),s.value!=="pulling"&&(s.value="pulling",d.value=a.touches[0].clientY),V&&t.value>n.value&&N("add");const k=(a.touches[0].clientY-d.value)/2+n.value;t.value=k>=f.value?f.value:k,t.value>=f.value*.2?(S.value=!1,r.value="refresh",c=A()):r.value="arrow-down"},z=async()=>{R.value&&(v.value=!0,t.value>=f.value*.2?(await c,s.value="loading",t.value=f.value*.3,P(e["onUpdate:modelValue"],!0),P(e.onRefresh),N("remove")):(s.value="loosing",r.value="arrow-down",t.value=n.value,setTimeout(()=>{v.value=!1,N("remove")},b(e.animationDuration))))},F=()=>{const{width:a}=i.value.getBoundingClientRect();t.value=-(a+a*.25),n.value=-(a+a*.25)},H=()=>{setTimeout(()=>{s.value="default",r.value="arrow-down",v.value=!1},b(e.animationDuration))};return K(()=>e.modelValue,a=>{a===!1&&(v.value=!0,s.value="success",r.value="checkbox-marked-circle",setTimeout(()=>{t.value=n.value,H()},b(e.successDuration)))}),W(()=>{var a;o=e.target?q(e.target,"PullRefresh"):Q(u.value),F(),(a=u.value)==null||a.addEventListener("touchmove",T,{passive:!1})}),X(()=>{var a;(a=u.value)==null||a.removeEventListener("touchmove",T)}),{n:$,classes:ve,iconHasChanged:S,ICON_TRANSITION:L,refreshStatus:s,freshNode:u,controlNode:i,touchStart:U,touchMove:T,touchEnd:z,iconName:r,controlStyle:M,isSuccess:y}}});function me(e,o,c,n,u,i){const d=x("var-icon");return h(),Y("div",{ref:"freshNode",class:C(e.n()),onTouchstart:o[0]||(o[0]=(...t)=>e.touchStart&&e.touchStart(...t)),onTouchend:o[1]||(o[1]=(...t)=>e.touchEnd&&e.touchEnd(...t)),onTouchcancel:o[2]||(o[2]=(...t)=>e.touchEnd&&e.touchEnd(...t))},[ee("div",{ref:"controlNode",class:C(e.classes(e.n("control"),e.n("$-elevation--2"),[e.isSuccess,e.n("control-success")])),style:te(e.controlStyle)},[ae(d,{name:e.iconName,transition:e.ICON_TRANSITION,class:C(e.classes(e.n("icon"),[e.refreshStatus==="loading"&&e.iconHasChanged,e.n("animation")])),"var-pull-refresh-cover":""},null,8,["name","transition","class"])],6),oe(e.$slots,"default")],34)}const g=O(fe,[["render",me]]);g.install=function(e){e.component(g.name,g)};const he={setup(e){const o=Array(30).fill("List Item"),c=Array(30).fill("This is new List Item"),n=l(!1),u=l(o);function i(){setTimeout(()=>{u.value=u.value[0]==="List Item"?c:o,n.value=!1},2e3)}return se(ie),(d,t)=>(h(),_(E(g),{onRefresh:i,modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=r=>n.value=r),"success-duration":"2000"},{default:B(()=>[(h(!0),Y(ue,null,ne(u.value,(r,s)=>(h(),_(E(ce),{key:s,border:""},{default:B(()=>[le(re(r+" "+(s+1)),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]))}},Ve=O(he,[["__scopeId","data-v-6f15a34c"]]);export{Ve as default};
