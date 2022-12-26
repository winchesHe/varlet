import{d as $,i as ie,f as S,c as ce}from"./components.011f3236.js";import{F as de,u as me}from"./provide.9d38a7a3.js";import{m as fe,i as ve}from"./elements.e0af8b84.js";import{d as be,a as D,r as he,b as y,Z as r,at as c,X as U,w as J,o as ge,n as Ve,_ as Se,p as ye,f as B,h as W,M as m,N as i,R as k,F as ke,ai as Ne,ah as K,O as Ce,q as Te,Q as pe}from"./vue-router.esm-bundler.5eeb4635.js";function Pe(e){return["always","normal","never"].includes(e)}const we={modelValue:{type:[Number,Array],default:0},step:{type:[Number,String],default:1},range:{type:Boolean,default:!1},labelVisible:{type:String,default:"normal",validator:Pe},activeColor:{type:String},trackColor:{type:String},thumbColor:{type:String},labelColor:{type:String},labelTextColor:{type:String},trackHeight:{type:[String,Number]},max:{type:[String,Number],default:100},min:{type:[String,Number],default:0},thumbSize:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rules:{type:Array},onChange:$(),onStart:$(),onEnd:$(),"onUpdate:modelValue":$()},{n:Y,classes:ze}=ce("slider");var x=(e=>(e.First="1",e.Second="2",e))(x||{});const Le=be({name:"VarSlider",components:{VarFormDetails:de},props:we,setup(e){const{bindForm:T,form:f}=me(),{errorMessage:A,validateWithTrigger:I,validate:X,resetValidation:p}=ie(),s=()=>X(e.rules,e.modelValue),d=()=>({startPosition:0,currentLeft:0,active:!1,percentValue:0}),_=()=>Ve(()=>I(["onChange"],"onChange",e.rules,e.modelValue)),M=D(null),v=D(0),P=D(!1),n=he({[1]:d(),[2]:d()}),F=y(()=>r(e.max)-r(e.min)),b=y(()=>v.value/F.value*r(e.step)),ee=y(()=>{const{modelValue:t,range:a}=e;let l=[];return a&&c(t)?l=[{value:g(t[0]),enumValue:"1",text:C(t[0])},{value:g(t[1]),enumValue:"2",text:C(t[1])}]:U(t)&&(l=[{value:g(t),enumValue:"1",text:C(t)}]),l}),te=y(()=>{const{activeColor:t,range:a,modelValue:l}=e,o=a&&c(l)?g(Math.min(l[0],l[1])):0;return{width:`${a&&c(l)?g(Math.max(l[0],l[1]))-o:g(l)}%`,left:`${o}%`,background:t}}),N=y(()=>e.disabled||(f==null?void 0:f.disabled.value)),w=y(()=>e.readonly||(f==null?void 0:f.readonly.value)),ae=t=>e.labelVisible==="always"?!0:e.labelVisible==="never"?!1:n[t].active,g=t=>{const{min:a,max:l}=e;return t<r(a)?0:t>r(l)?100:(t-r(a))/F.value*100},C=t=>{if(!U(t))return 0;let a=t;return a<Number(e.min)&&(a=Number(e.min)),a>Number(e.max)&&(a=Number(e.max)),parseInt(`${a}`,10)===a?a:r(a.toPrecision(5))},H=(t,a)=>{let l=[];const{step:o,range:u,modelValue:h,onChange:z,min:V}=e,Z=r(o),j=Math.round(t/b.value),L=j*Z+r(V),oe=n[a].percentValue*Z+r(V);if(n[a].percentValue=j,u&&c(h)&&(l=a==="1"?[L,h[1]]:[h[0],L]),oe!==L){const G=u?l.map(ue=>C(ue)):C(L);S(z,G),S(e["onUpdate:modelValue"],G),_()}},le=t=>{if(!e.range)return"1";const a=n[1].percentValue*b.value,l=n[2].percentValue*b.value,o=Math.abs(t-a),u=Math.abs(t-l);return o<=u?"1":"2"},ne=(t,a)=>{v.value||(v.value=M.value.offsetWidth),!(N.value||w.value)&&(S(e.onStart),P.value=!0,n[a].startPosition=t.touches[0].clientX)},re=(t,a)=>{if(N.value||w.value||!P.value)return;let l=t.touches[0].clientX-n[a].startPosition+n[a].currentLeft;n[a].active=!0,l<=0?l=0:l>=v.value&&(l=v.value),H(l,a)},R=t=>{const{range:a,modelValue:l,onEnd:o,step:u,min:h}=e;if(N.value||w.value)return;let z=[];n[t].currentLeft=n[t].percentValue*b.value,n[t].active=!1;const V=n[t].percentValue*r(u)+r(h);a&&c(l)&&(z=t==="1"?[V,l[1]]:[l[0],V]),S(o,a?z:V),P.value=!1},se=t=>{if(N.value||w.value||t.target.closest(`.${Y("thumb")}`))return;const a=t.clientX-ve(t.currentTarget),l=le(a);H(a,l),R(l)},q=()=>{const t=r(e.step);return isNaN(t)?(console.warn('[Varlet] Slider: type of prop "step" should be Number'),!1):t<0?(console.warn('[Varlet] Slider: "step" should be > 0'),!1):!0},O=()=>{const{range:t,modelValue:a}=e;return t&&!c(a)?(console.error('[Varlet] Slider: "modelValue" should be an Array'),!1):!t&&c(a)?(console.error('[Varlet] Slider: "modelValue" should be a Number'),!1):t&&c(a)&&a.length<2?(console.error('[Varlet] Slider: "modelValue" should have two value'),!1):!0},Q=(t=e.modelValue,a=r(e.step))=>{const l=o=>{const{min:u,max:h}=e;return o<r(u)?0:o>r(h)?F.value/a:(o-r(u))/a};e.range&&c(t)?(n[1].percentValue=l(t[0]),n[1].currentLeft=n[1].percentValue*b.value,n[2].percentValue=l(t[1]),n[2].currentLeft=n[2].percentValue*b.value):U(t)&&(n[1].currentLeft=l(t)*b.value)};return S(T,{reset:()=>{const t=e.range?[0,0]:0;S(e["onUpdate:modelValue"],t),p()},validate:s,resetValidation:p}),J([()=>e.modelValue,()=>e.step],([t,a])=>{!q()||!O()||P.value||Q(t,r(a))}),J(v,()=>Q()),ge(()=>{!q()||!O()||(v.value=M.value.offsetWidth)}),{n:Y,classes:ze,Thumbs:x,sliderEl:M,getFillStyle:te,isDisabled:N,errorMessage:A,thumbsProps:n,thumbList:ee,multiplySizeUnit:fe,toNumber:r,showLabel:ae,start:ne,move:re,end:R,click:se}}});const $e=["onTouchstart","onTouchmove","onTouchend","onTouchcancel"];function Me(e,T,f,A,I,X){const p=ye("var-form-details");return B(),W("div",{class:i(e.n())},[m("div",{class:i(e.classes(e.n("block"),[e.isDisabled,e.n("--disabled")],[e.errorMessage,e.n("--error")])),ref:"sliderEl",onClick:T[0]||(T[0]=(...s)=>e.click&&e.click(...s))},[m("div",{class:i(e.n("track"))},[m("div",{class:i(e.n("track-background")),style:k({background:e.trackColor,height:e.multiplySizeUnit(e.trackHeight)})},null,6),m("div",{class:i(e.n("track-fill")),style:k(e.getFillStyle)},null,6)],2),(B(!0),W(ke,null,Ne(e.thumbList,s=>(B(),W("div",{class:i(e.n("thumb")),key:s.enumValue,style:k({left:`${s.value}%`,zIndex:e.thumbsProps[s.enumValue].active?1:void 0}),onTouchstart:K(d=>e.start(d,s.enumValue),["stop"]),onTouchmove:K(d=>e.move(d,s.enumValue),["stop"]),onTouchend:d=>e.end(s.enumValue),onTouchcancel:d=>e.end(s.enumValue)},[Ce(e.$slots,"button",{currentValue:s.text},()=>[m("div",{class:i(e.n("thumb-block")),style:k({background:e.thumbColor})},null,6),m("div",{class:i(e.classes(e.n("thumb-ripple"),[e.thumbsProps[s.enumValue].active,e.n("thumb-ripple--active")])),style:k({background:e.thumbColor})},null,6),m("div",{class:i(e.classes(e.n("thumb-label"),[e.showLabel(s.enumValue),e.n("thumb-label--active")])),style:k({background:e.labelColor,color:e.labelTextColor,height:e.thumbSize===void 0?e.thumbSize:e.multiplySizeUnit(e.thumbSize,2),width:e.thumbSize===void 0?e.thumbSize:e.multiplySizeUnit(e.thumbSize,2)})},[m("span",null,pe(s.text),1)],6)])],46,$e))),128))],2),Te(p,{"error-message":e.errorMessage,class:i(e.n("form")),"var-slider-cover":""},null,8,["error-message","class"])],2)}const E=Se(Le,[["render",Me]]);E.install=function(e){e.component(E.name,E)};export{E as S};
