import{I as c}from"./index-ed7191f6.js";import{v as S}from"./index-b1bb7756.js";import{S as f}from"./index-295f4143.js";import{C}from"./clipboard-750479b4.js";import{d as z}from"./index-59604d2c.js";import{_ as I,r as N,a as g,o as L,ac as A,aC as D,f as d,h,q as o,S as t,ap as e,M as x,F as b,ai as U,P as l,Q as n,aD as r,D as $,R as T}from"./vue-router.esm-bundler-1e250ce9.js";import{u as B,c as M,a as v,_ as V,b as j}from"./index-5cbfee55.js";import"./components-092ce17a.js";import"./elements-13df10c1.js";import"./shared-ed6496a2.js";import"./logger-525ef361.js";import"./index-fecbe149.js";/* empty css               */import"./index-1f55ed30.js";import"./zIndex-3acc7c53.js";import"./lock-5715fbf0.js";const q=["checkbox-marked-circle","check-circle-outline","information","information-outline","warning","alert-outline","error","alert-circle-outline","checkbox-marked","checkbox-marked-outline","checkbox-blank-outline","radio-marked","checkbox-marked-circle-outline","radio-blank","close-circle","close-circle-outline","close-box","close-box-outline","minus-circle","minus-circle-outline","star","star-half-full","star-outline","heart","heart-half-full","heart-outline","delete","trash-can","trash-can-outline","minus-box","minus-box-outline","account-circle","account-circle-outline","cog","cog-outline","map-marker-radius","map-marker-radius-outline","camera","camera-outline","cart","cart-outline","phone","phone-outline","image","image-outline","bell","bell-outline","home","home-outline","map-marker","map-marker-outline","magnify-plus","magnify-plus-outline","magnify-minus","magnify-minus-outline","play-circle","play-circle-outline","help-circle","help-circle-outline","plus-circle","plus-circle-outline","check","window-close","plus","minus","chevron-up","chevron-down","chevron-left","chevron-right","menu-up","menu-down","menu-left","menu-right","upload","download","format-list-checkbox","menu","menu-open","dots-vertical","message-text-outline","message-processing-outline","white-balance-sunny","weather-cloudy","weather-lightning","weather-pouring","weather-snowy","weather-rainy","translate","magnify","github","refresh","arrow-down","power","file-document-outline","fire","wifi","wrench","cake-variant","notebook","cellphone","weather-night","xml","content-copy","qrcode-scan","barcode-scan","shopping","shopping-outline","card-account-details","card-account-details-outline","pin","pin-off","pin-outline","pin-off-outline","code-json"],E={iconSize:"图标尺寸",iconColor:"图标颜色",useImage:"使用图片",events:"注册事件",iconAnimation:"图标切换动画 (点击切换)",toggle:"切换",iconList:"图标列表 (点击复制)",copySuccess:"复制成功",clickSuccess:"点击成功"},F={iconSize:"Icon Size",iconColor:"Icon color",useImage:"Use Image",events:"Events",iconAnimation:"Icon Animation (click toggle)",toggle:"Toggle",iconList:"Icon List (click copy)",copySuccess:"copy success",clickSuccess:"Click success"},{add:y,use:R,pack:a,packs:me,merge:ue}=B(),P=u=>{M(u),R(u)};v("zh-CN",V);v("en-US",j);y("zh-CN",E);y("en-US",F);const Q={class:"icon-example__icons"},G=["data-clipboard-text"],H={class:"icon-example__icon-name"},J={setup(u){const w=N(q),s=g("information"),_=g("#fff");function k(){s.value=s.value==="information"?"checkbox-marked-circle":"information"}return L(()=>{new C(".icon-example__icon",{text:i=>`<var-icon name="${i.getAttribute("data-clipboard-text")}" />`}).on("success",i=>{f.success(`${i.text}${a.value.copySuccess}!`)})}),A(P),D(z,p=>{_.value=p==="darkTheme"?"#303030":"#fff"}),(p,i)=>(d(),h(b,null,[o(e(r),null,{default:t(()=>[l(n(e(a).iconSize),1)]),_:1}),o(e(c),{class:"icon-example__animation-icon",name:"checkbox-marked-circle"}),o(e(c),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",size:26}),o(e(r),null,{default:t(()=>[l(n(e(a).iconColor),1)]),_:1}),o(e(c),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",color:"var(--color-primary)"}),o(e(c),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",color:"var(--color-primary)",size:26}),o(e(r),null,{default:t(()=>[l(n(e(a).useImage),1)]),_:1}),o(e(c),{class:"icon-example__animation-icon",name:"https://varlet.gitee.io/varlet-ui/cat.jpg",size:32}),o(e(r),null,{default:t(()=>[l(n(e(a).events),1)]),_:1}),o(e(c),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",color:"var(--color-primary)",onClick:i[0]||(i[0]=()=>e(f).success(e(a).clickSuccess))}),o(e(r),null,{default:t(()=>[l(n(e(a).iconAnimation),1)]),_:1}),o(e(c),{class:"icon-example__animation-icon",color:"var(--color-primary)",size:30,transition:300,name:s.value,onClick:k},null,8,["name"]),o(e(c),{class:"icon-example__animation-icon",color:"var(--color-primary)",size:30,transition:300,"animation-class":"fade",name:s.value,onClick:k},null,8,["name"]),o(e(r),null,{default:t(()=>[l(n(e(a).iconList),1)]),_:1}),x("div",Q,[(d(!0),h(b,null,U(e(w),m=>$((d(),h("div",{class:"icon-example__icon var-elevation--2",style:T({background:_.value}),"data-clipboard-text":m,key:m},[o(e(c),{name:m},null,8,["name"]),x("div",H,n(m),1)],12,G)),[[e(S)]])),128))])],64))}},pe=I(J,[["__scopeId","data-v-182cdebc"]]);export{pe as default};
