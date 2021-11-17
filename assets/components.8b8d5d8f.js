var j=Object.defineProperty;var u=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var m=(e,a,t)=>a in e?j(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,r=(e,a)=>{for(var t in a||(a={}))g.call(a,t)&&m(e,t,a[t]);if(u)for(var t of u(a))h.call(a,t)&&m(e,t,a[t]);return e};var k=(e,a)=>{var t={};for(var o in e)g.call(e,o)&&a.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&u)for(var o of u(e))a.indexOf(o)<0&&h.call(e,o)&&(t[o]=e[o]);return t};import{f as y}from"./elements.364c0c9c.js";import{q as O,G as x,r as P,x as f,H as w,M as L,N,p as M,O as A,b as C,P as E,z as V,Q as p,E as R,R as D,S as H}from"./vendor.17911535.js";import{a as U,r as _}from"./shared.def6a7f6.js";import{a as W}from"./utils.38ecee47.js";const d=O({name:"VarStyleProvider",props:{styleVars:{type:Object,default:()=>({})}},setup(e,{slots:a}){return()=>{var t;return x("div",{class:"var-style-provider",style:y(e.styleVars)},(t=a.default)==null?void 0:t.call(a))}}}),v=[];function b(e={}){v.forEach(t=>document.documentElement.style.removeProperty(t)),v.length=0;const a=y(e);Object.entries(a).forEach(([t,o])=>{document.documentElement.style.setProperty(t,o),v.push(t)})}b.Component=d;d.install=function(e){e.component(d.name,d)};b.install=function(e){e.component(d.name,d)};var q={"--action-sheet-background":"#1e1e1e","--action-sheet-title-color":"#aaa","--action-sheet-action-item-color":"#fff"},z={"--badge-default-color":"#555"},B={"--button-default-color":"#272727"},G={"--card-background":"#272727","--card-title-color":"#ffffff","--card-subtitle-color":"#aaaaaa","--card-description-color":"#aaaaaa"},Q={"--cell-desc-color":"#aaa","--cell-border-color":"#545454"},F={"--checkbox-unchecked-color":"#fff"},J={"--chip-default-color":"#555"},X={"--collapse-background":"#272727","--collapse-text-color":"#fff","--collapse-border-top":"thin solid rgba(255, 255, 255, 0.12)"},Y={"--date-picker-body-background-color":"#272727","--day-picker-head-item-color":"#aaaaaa","--card-description-color":"#aaaaaa"},Z={"--dialog-background":"#1e1e1e","--dialog-message-color":"#bbb"},$={"--divider-color":"rgba(255, 255, 255, 0.12)","--divider-text-color":"#aaa"},K={"--input-input-text-color":"#fff","--input-blur-color":"rgb(255, 255, 255, .7)"},T={"--pagination-list-bg-color":"#272727","--pagination-hover-bg-color":"#25293a","--pagination-list-active-bg-color":"#25293a","--pagination-list-active-color":"#4a7afe"},ee={"--picker-background":"#1e1e1e","--picker-cancel-button-text-color":"#aaa","--picker-picked-border":"1px solid rgba(255, 255, 255, 0.12)"},ae={"--popup-content-background-color":"#1e1e1e"},te={"--pull-refresh-background":"#272727"},oe={"--radio-unchecked-color":"#fff"},re={"--select-select-text-color":"#fff","--select-blur-color":"rgb(255, 255, 255, .7)","--select-scroller-background":"#272727"},ne={"--skeleton-card-background-color":"hsla(0,0%,100%,.12)","--skeleton-animation-background":`linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,"--skeleton-avatar-background-color":"hsla(0,0%,100%,.12)","--skeleton-title-background-color":"hsla(0,0%,100%,.12)"},ce={"--step-content-color":"rgba(255, 255, 255, .38)","--step-content-active-color":"#fff","--step-line-background":"#fff"},ie={"--switch-track-background":"#727272","--switch-handle-background":"#727272"},le={"--tab-inactive-color":"rgba(255, 255, 255, .65)"},se={"--table-background":"#272727","--table-thead-th-text-color":"rgba(255, 255, 255, 0.6)","--table-tbody-tr-hover-background":"#4c4b4b","--table-thead-border-bottom":"thin solid rgba(255, 255, 255, 0.12)","--table-tbody-tr-border-bottom":"thin solid rgba(255, 255, 255, 0.12)"},de={"--time-picker-clock-container-background":"#545454","--time-picker-body-background":"#403f3f","--time-picker-clock-item-disable-color":"#aaaaaa"},ue={"--uploader-action-background":"#272727","--uploader-action-icon-color":"#fff","--uploader-file-name-background":"#272727","--uploader-file-name-color":"#aaa","--uploader-file-cover-background":"#272727"},fe={"--tabs-background":"#1e1e1e"},pe=r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r({"--color-body":"#1e1e1e","--color-text":"#fff","--color-primary":"#4a7afe","--color-info":"#10afef","--color-success":"#10c48f","--color-warning":"#ff8800","--color-danger":"#ef5350","--color-disabled":"#393939","--color-text-disabled":"#757575"},B),Q),G),de),Y),ne),fe),le),ae),Z),q),J),z),ue),X),te),ie),ce),T),se),K),re),oe),F),$),ee);function xe(e,a){return Array.isArray(a)?a.reduce((t,o)=>(t[o]=e[o],t),{}):e[a]}function ve(e){const a=R(e),t=document.createElement("div");return document.body.appendChild(t),{instance:a.mount(t),unmount(){a.unmount(),document.body.removeChild(t)}}}function Pe(e,a={},t={}){const o={setup(){return()=>x(e,r(r({},a),t))}},{unmount:n}=ve(o);return{unmountInstance:n}}function be(e){const a=[],t=o=>{if(o==null?void 0:o.component){t(o==null?void 0:o.component.subTree);return}Array.isArray(o==null?void 0:o.children)&&o.children.forEach(n=>{H(n)&&(a.push(n),t(n))})};return t(e),a}function we(e){const a=M([]),t=p(),o=()=>{const i=be(t.subTree);a.sort((s,S)=>i.indexOf(s.vnode)-i.indexOf(S.vnode))};return A(e,{collect:i=>{a.push(i),o()},clear:i=>{_(a,i)},instances:a}),{length:C(()=>a.length)}}function Ae(e){if(!I(e))return{index:null};const a=E(e),{collect:t,clear:o,instances:n}=a,c=p();return f(()=>{V().then(()=>t(c))}),w(()=>{V().then(()=>o(c))}),{index:C(()=>n.indexOf(c))}}function Ce(e){const a=[],t=c=>{a.push(c)},o=c=>{_(a,c)};return{childProviders:a,bindChildren:c=>{A(e,r({collect:t,clear:o},c))}}}function Ee(e){if(!I(e))return{parentProvider:null,bindParent:null};const l=E(e),{collect:t,clear:o}=l;return{parentProvider:k(l,["collect","clear"]),bindParent:i=>{f(()=>t(i)),D(()=>o(i))}}}function I(e){const a=p();return e in a.provides}function Ve(){const e=P(""),a=async(n,c,l)=>!U(n)||!n.length?!0:!(await Promise.all(n.map(s=>s(c,l)))).some(s=>s!==!0?(e.value=String(s),!0):!1);return{errorMessage:e,validate:a,resetValidation:()=>{e.value=""},validateWithTrigger:async(n,c,l,i,s)=>{n.includes(c)&&await a(l,i,s)&&(e.value="")}}}function _e(e){f(()=>{window.addEventListener("hashchange",e),window.addEventListener("popstate",e)}),w(()=>{window.removeEventListener("hashchange",e),window.removeEventListener("popstate",e)})}function Ie(){const e=P(!1);return L(()=>{e.value=!1}),N(()=>{e.value=!0}),{disabled:e}}function Se(e){W(a=>{b(a==="darkThemes"?pe:null),e==null||e(a)})}export{b as S,Ve as a,Ee as b,Ce as c,_e as d,we as e,Ae as f,pe as g,Pe as m,xe as p,Ie as u,Se as w};
