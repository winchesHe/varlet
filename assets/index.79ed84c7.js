import{p as C,I as y}from"./index.9d7c5781.js";import{q as h,b as c,d as $,o as d,k as g,i as k,a as u,B as l,m as b,c as B,h as S,f as V,A as N,T as _}from"./vendor.17911535.js";import{p as z}from"./components.8b8d5d8f.js";import{_ as j}from"./elevation.8aaf18d0.js";function I(e){return["default","primary","info","success","warning","danger"].includes(e)}function T(e){return["normal","mini","small","large"].includes(e)}const w={type:{type:String,default:"default",validator:I},size:{type:String,default:"normal",validator:T},color:{type:String},textColor:{type:String},iconName:z(C,"name"),plain:{type:Boolean,default:!1},round:{type:Boolean,default:!0},block:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},onClose:{type:Function}};const A=h({name:"VarChip",components:{VarIcon:y},inheritAttrs:!1,props:w,setup(e){const n=c(()=>{const{plain:s,textColor:a,color:o}=e;return s?{color:a||o,borderColor:o}:{color:a,background:o}}),p=c(()=>{const{size:s,block:a,type:o,plain:r,round:t}=e,f=a?"var--flex":"var--inline-flex",m=r?`var-chip--plain var-chip--plain-${o}`:`var-chip--${o}`,v=t&&"var-chip--round";return[`var-chip--${s}`,f,m,v]});return{chipStyles:n,contentClass:p}}});function P(e,n,p,s,a,o){const r=$("var-icon");return d(),g(_,{name:"var-fade"},{default:k(()=>[u("span",N({class:["var-chip var--box",e.contentClass],style:e.chipStyles},e.$attrs),[l(e.$slots,"left"),u("span",{class:b([`var-chip--text-${e.size}`])},[l(e.$slots,"default")],2),l(e.$slots,"right"),e.closable?(d(),B("span",{key:0,class:"var-chip--close",onClick:n[0]||(n[0]=(...t)=>e.onClose&&e.onClose(...t))},[S(r,{name:`${e.iconName?e.iconName:"close-circle"}`},null,8,["name"])])):V("v-if",!0)],16)]),_:3})}var i=j(A,[["render",P]]);i.install=function(e){e.component(i.name,i)};export{i as C};
