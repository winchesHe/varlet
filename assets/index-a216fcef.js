import{I as w}from"./index-a551829b.js";import{F as L,u as q}from"./index-4fa56e4b.js";import{v as A}from"./index-694a1082.js";import{d as k,i as E,b as c,c as X}from"./components-25275440.js";import{a as I}from"./elements-87b8c072.js";import{d as Z,Z as s,n as j,_ as G,p as z,ag as H,f as b,h,M as J,F as K,ai as O,D as Q,R as B,N as u,q as D}from"./vue-router.esm-bundler-10f05234.js";const Y={modelValue:{type:[String,Number],default:0},count:{type:[String,Number],default:5},color:{type:String},icon:{type:String,default:"star"},emptyColor:{type:String},emptyIcon:{type:String,default:"star-outline"},size:{type:[String,Number]},gap:{type:[String,Number]},namespace:{type:String},half:{type:Boolean,default:!1},halfIcon:{type:String,default:"star-half-full"},disabled:{type:Boolean,default:!1},disabledColor:{type:String},readonly:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},rules:{type:Array},onChange:k(),"onUpdate:modelValue":k()},{n:i}=X("rate"),x=Z({name:"VarRate",components:{VarIcon:w,VarFormDetails:L},directives:{Ripple:A},props:Y,setup(e){const{form:a,bindForm:S}=q(),{errorMessage:m,validateWithTrigger:V,validate:N,resetValidation:l}=E(),p=t=>{const{count:n,gap:o}=e;return{color:r(t).color,marginRight:t!==s(n)?I(o):0}},y=t=>{const{name:n,color:o}=r(t);return{[i("content")]:!0,[i("--disabled")]:(a==null?void 0:a.disabled.value)||e.disabled,[i("--error")]:m.value,[i("--primary")]:n!==e.emptyIcon&&!o}},r=t=>{const{modelValue:n,disabled:o,disabledColor:d,color:g,half:M,emptyColor:$,icon:P,halfIcon:T,emptyIcon:W}=e;let v=g;return(o||a!=null&&a.disabled.value)&&(v=d),t<=s(n)?{color:v,name:P}:M&&t<=s(n)+.5?{color:v,name:T}:{color:o||a!=null&&a.disabled.value?d:$,name:W}},f=(t,n)=>{if(e.half){const{offsetWidth:o}=n.target;n.offsetX<=Math.floor(o/2)&&(t-=.5)}c(e["onUpdate:modelValue"],t)},R=()=>N(e.rules,s(e.modelValue)),F=()=>j(()=>V(["onChange"],"onChange",e.rules,e.modelValue)),U=(t,n)=>{const{readonly:o,disabled:d,onChange:g}=e;o||d||a!=null&&a.disabled.value||a!=null&&a.readonly.value||(f(t,n),c(g,t),F())},_=()=>{c(e["onUpdate:modelValue"],0),l()};return c(S,{reset:_,validate:R,resetValidation:l}),{errorMessage:m,formDisabled:a==null?void 0:a.disabled,formReadonly:a==null?void 0:a.readonly,getStyle:p,getClass:y,getCurrentState:r,handleClick:U,reset:_,validate:R,resetValidation:l,toSizeUnit:I,toNumber:s,n:i}}});const ee=["onClick"];function ae(e,a,S,m,V,N){const l=z("var-icon"),p=z("var-form-details"),y=H("ripple");return b(),h("div",{class:u(e.n("wrap"))},[J("div",{class:u(e.n())},[(b(!0),h(K,null,O(e.toNumber(e.count),r=>Q((b(),h("div",{key:r,style:B(e.getStyle(r)),class:u(e.getClass(r)),onClick:f=>e.handleClick(r,f)},[D(l,{class:u(e.n("content-icon")),"var-rate-cover":"",transition:0,namespace:e.namespace,name:e.getCurrentState(r).name,style:B({fontSize:e.toSizeUnit(e.size)})},null,8,["class","namespace","name","style"])],14,ee)),[[y,{disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled||!e.ripple}]])),128))],2),D(p,{"error-message":e.errorMessage},null,8,["error-message"])],2)}const C=G(x,[["render",ae]]);C.install=function(e){e.component(C.name,C)};export{C as R};
