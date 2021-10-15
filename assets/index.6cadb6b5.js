import{A as S}from"./AppType.51e8aa5c.js";import{I as A}from"./index.d0776ff2.js";import{q as j,b as y,d as g,o as m,c as B,h as e,w as n,i as F,v as L,a as V,k as N,t as d,A as I,T as R,B as U,r as _,l as u}from"./vendor.7d218dee.js";import{t as P}from"./shared.2d2ec151.js";import{_ as C}from"./elevation.61c5e873.js";import{B as b}from"./index.812dd863.js";import{C as k}from"./index.2ebb75b5.js";import{u as z,a as T,_ as q,b as M,c as W,w as G}from"./en-US.c590db11.js";import"./elements.fbcbc1e3.js";import"./index.aea5424f.js";import"./index.dcdb83c2.js";import"./index.b0b2fe50.js";import"./components.59a7770d.js";function H(t){return["default","primary","info","success","warning","danger"].includes(t)}function J(t){return["right-top","right-bottom","left-top","left-bottom"].includes(t)}const K={type:{type:String,default:"default",validator:H},hidden:{type:Boolean,default:!1},dot:{type:Boolean,default:!1},value:{type:[String,Number],default:0},maxValue:{type:[String,Number]},color:{type:String},position:{type:String,default:"right-top",validator:J},icon:{type:String}};const O=j({name:"VarBadge",components:{VarIcon:A},inheritAttrs:!1,props:K,setup(t,{slots:s}){const c=y(()=>{var v;const{type:l,position:r,dot:o,icon:i}=t,h=((v=s.default)==null?void 0:v.call(s))&&`var-badge__position var-badge--${r}`,D=o&&"var-badge__dot",w=p(),E=i&&"var-badge__icon";return[`var-badge--${l}`,h,D,w,E]}),a=y(()=>{const{dot:l,value:r,maxValue:o}=t;return l?"":r!==void 0&&o!==void 0&&P(r)>o?`${o}+`:r}),p=()=>{const{position:l,dot:r}=t;if(r&&l.includes("right"))return"var-badge__dot--right";if(r&&l.includes("left"))return"var-badge__dot--left"};return{values:a,contentClass:c}}}),Q={class:"var-badge"},X={key:1};function Y(t,s,c,a,p,l){const r=g("var-icon");return m(),B("div",Q,[e(R,{name:"var-badge-fade"},{default:n(()=>[F(V("span",I(t.$attrs,{class:["var-badge__content",t.contentClass],style:{background:t.color}}),[t.icon&&!t.dot?(m(),N(r,{key:0,name:t.icon,size:"10px"},null,8,["name"])):(m(),B("span",X,d(t.values),1))],16),[[L,!t.hidden]])]),_:1}),U(t.$slots,"default")])}var f=C(O,[["render",Y]]);f.install=function(t){t.component(f.name,f)};var Z={themeColorBadge:"\u4E3B\u9898\u8272\u5FBD\u6807",dotBadge:"\u5706\u70B9\u5FBD\u6807",customContentBadge:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u6807\u7B7E",maximum:"\u6700\u5927\u503C",differentPositioningBadges:"\u4E0D\u540C\u5B9A\u4F4D\u5FBD\u6807",upperRight:"\u53F3\u4E0A",lowerRight:"\u53F3\u4E0B",upperLeft:"\u5DE6\u4E0A",lowerLeft:"\u5DE6\u4E0B",whetherToDisplayTheBadge:"\u662F\u5426\u663E\u793A\u5FBD\u6807",clickToChangeTheState:"\u70B9\u51FB\u6539\u53D8\u72B6\u6001",badge:"\u5FBD\u6807",customBadgeColors:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u989C\u8272",customBadgeIcons:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u56FE\u6807"},$={themeColorBadge:"Theme Color Badge",dotBadge:"Dot Badge",customContentBadge:"Custom Content Badge",maximum:"Maximum",differentPositioningBadges:"Different Positioning Badges",upperRight:"The Upper Right",lowerRight:"The Lower Right",upperLeft:"The Upper Left",lowerLeft:"The Lower Left",whetherToDisplayTheBadge:"Whether To Display The Badge",clickToChangeTheState:"Click To Change The State",badge:"Badge",customBadgeColors:"Custom Badge Colors",customBadgeIcons:"Custom Badge Icons"};const{add:x,use:ee,pack:ae,packs:ve,merge:ye}=z(),te=t=>{W(t),ee(t)};T("zh-CN",q);T("en-US",M);x("zh-CN",Z);x("en-US",$);const oe={name:"BadgeExample",components:{[f.name]:f,[b.name]:b,[k.name]:k,AppType:S},setup(){const t=_(88),s=_(188),c=_(99),a=_(!1),p=()=>{a.value=!a.value};return G(te),{value:t,value1:s,maxValue:c,hidden:a,pack:ae,handleChange:p}}},ne={class:"example"};function re(t,s,c,a,p,l){const r=g("app-type"),o=g("var-badge"),i=g("var-chip"),h=g("var-button");return m(),B("div",ne,[e(r,null,{default:n(()=>[u(d(a.pack.themeColorBadge),1)]),_:1}),e(o,{type:"primary"}),e(o,{type:"info"}),e(o,{type:"warning"}),e(o,{type:"success"}),e(o,{type:"danger"}),e(o),e(r,null,{default:n(()=>[u(d(a.pack.dotBadge),1)]),_:1}),e(o,{dot:"",type:"danger"}),e(r,null,{default:n(()=>[u(d(a.pack.customContentBadge),1)]),_:1}),e(o,{type:"danger",value:"badge"}),e(o,{type:"danger",value:"hot"}),e(o,{type:"danger",value:"66"}),e(r,null,{default:n(()=>[u(d(a.pack.maximum),1)]),_:1}),e(o,{type:"danger",value:a.value,"max-value":a.maxValue},null,8,["value","max-value"]),e(o,{type:"danger",value:a.value1,"max-value":a.maxValue},null,8,["value","max-value"]),e(r,null,{default:n(()=>[u(d(a.pack.differentPositioningBadges),1)]),_:1}),e(o,{type:"danger",position:"right-top"},{default:n(()=>[e(i,{plain:"",round:!1,color:"#009688"},{default:n(()=>[u(d(a.pack.upperRight),1)]),_:1})]),_:1}),e(o,{type:"danger",position:"right-bottom"},{default:n(()=>[e(i,{plain:"",round:!1,color:"#009688"},{default:n(()=>[u(d(a.pack.lowerRight),1)]),_:1})]),_:1}),e(o,{type:"danger",position:"left-top"},{default:n(()=>[e(i,{plain:"",round:!1,color:"#009688"},{default:n(()=>[u(d(a.pack.upperLeft),1)]),_:1})]),_:1}),e(o,{type:"danger",position:"left-bottom"},{default:n(()=>[e(i,{plain:"",round:!1,color:"#009688"},{default:n(()=>[u(d(a.pack.lowerLeft),1)]),_:1})]),_:1}),e(r,null,{default:n(()=>[u(d(a.pack.whetherToDisplayTheBadge),1)]),_:1}),e(h,{onClick:a.handleChange},{default:n(()=>[u(d(a.pack.clickToChangeTheState),1)]),_:1},8,["onClick"]),e(o,{type:"danger",position:"right-top",hidden:a.hidden},{default:n(()=>[e(i,{plain:"",round:!1,color:"#009688"},{default:n(()=>[u(d(a.pack.badge),1)]),_:1})]),_:1},8,["hidden"]),e(r,null,{default:n(()=>[u(d(a.pack.customBadgeColors),1)]),_:1}),e(o,{color:"#6200ea",position:"right-top"},{default:n(()=>[e(i,{plain:"",round:!1,color:"#009688"},{default:n(()=>[u(d(a.pack.badge),1)]),_:1})]),_:1}),e(r,null,{default:n(()=>[u(d(a.pack.customBadgeIcons),1)]),_:1}),e(o,{color:"#6200ea",position:"right-top",icon:"notebook"},{default:n(()=>[e(i,{plain:"",round:!1,color:"#009688"},{default:n(()=>[u(d(a.pack.badge),1)]),_:1})]),_:1})])}var Ce=C(oe,[["render",re],["__scopeId","data-v-19ad8a81"]]);export{Ce as default};
