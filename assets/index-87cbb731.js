import{a as f,ac as z,aC as w,f as C,h as v,q as a,S as l,ap as e,F as k,P as i,Q as t,aD as n,i as m,j as _}from"./vue-router.esm-bundler-1e250ce9.js";import{C as p}from"./index-97fb6f69.js";import{I as h}from"./index-ed7191f6.js";import{S as s}from"./index-900b9ef1.js";import{d as N}from"./index-59604d2c.js";import{u as R,c as b,a as g,_ as x,b as I}from"./index-5cbfee55.js";import"./components-092ce17a.js";import"./elements-13df10c1.js";import"./shared-ed6496a2.js";import"./logger-525ef361.js";/* empty css               */const A={chipType:"纸片类型",defaultChip:"默认纸片",primaryChip:"主要纸片",infoChip:"信息纸片",successChip:"成功纸片",warningChip:"警告纸片",dangerChip:"危险纸片",plainChip:"空心纸片",nonRoundChip:"非圆角纸片",chipSize:"纸片尺寸",largeChip:"大型纸片",normalChip:"常规纸片",smallChip:"小型纸片",miniChip:"迷你纸片",blockChip:"块级纸片",canCloseChip:"可关闭纸片",customCloseIcon:"自定义关闭图标",customColor:"自定义颜色",chip:"纸片",addSlot:"添加插槽",leftSlot:"左侧插槽",rightSlot:"右侧插槽",leftAndRightSlot:"左右两侧插槽"},T={chipType:"Chip Type",defaultChip:"Default Chip",primaryChip:"Primary Chip",infoChip:"Info Chip",successChip:"Success Chip",warningChip:"Warning Chip",dangerChip:"Danger Chip",plainChip:"Plain Chip",nonRoundChip:"Non Round Chip",chipSize:"Chip Size",largeChip:"Large Chip",normalChip:"Normal Chip",smallChip:"Small Chip",miniChip:"Mini Chip",blockChip:"Block Chip",canCloseChip:"Can Close Chip",customCloseIcon:"Custom Close Icon",customColor:"Custom Color",chip:"Chip",addSlot:"Add Slot",leftSlot:"Left Slot",rightSlot:"Right Slot",leftAndRightSlot:"Left And Right Slot"},{add:y,use:D,pack:o,packs:G,merge:H}=R(),L=u=>{b(u),D(u)};g("zh-CN",x);g("en-US",I);y("zh-CN",A);y("en-US",T);const J={setup(u){const c=f(!0),d=f(!0);return z(L),w(N),(B,r)=>(C(),v(k,null,[a(e(n),null,{default:l(()=>[i(t(e(o).chipType),1)]),_:1}),a(e(s),{size:["2.666vw","2.666vw"]},{default:l(()=>[a(e(p),null,{default:l(()=>[i(t(e(o).defaultChip),1)]),_:1}),a(e(p),{type:"primary"},{default:l(()=>[i(t(e(o).primaryChip),1)]),_:1}),a(e(p),{type:"success"},{default:l(()=>[i(t(e(o).successChip),1)]),_:1}),a(e(p),{type:"danger"},{default:l(()=>[i(t(e(o).dangerChip),1)]),_:1}),a(e(p),{type:"warning"},{default:l(()=>[i(t(e(o).warningChip),1)]),_:1}),a(e(p),{type:"info"},{default:l(()=>[i(t(e(o).infoChip),1)]),_:1})]),_:1},8,["size"]),a(e(n),null,{default:l(()=>[i(t(e(o).plainChip),1)]),_:1}),a(e(p),{plain:"",type:"primary"},{default:l(()=>[i(t(e(o).plainChip),1)]),_:1}),a(e(n),null,{default:l(()=>[i(t(e(o).nonRoundChip),1)]),_:1}),a(e(p),{round:!1,type:"primary"},{default:l(()=>[i(t(e(o).nonRoundChip),1)]),_:1}),a(e(n),null,{default:l(()=>[i(t(e(o).chipSize),1)]),_:1}),a(e(s),{align:"center",size:["2.666vw","2.666vw"]},{default:l(()=>[a(e(p),{type:"primary"},{default:l(()=>[i(t(e(o).normalChip),1)]),_:1}),a(e(p),{type:"success",size:"small"},{default:l(()=>[i(t(e(o).smallChip),1)]),_:1}),a(e(p),{type:"warning",size:"mini"},{default:l(()=>[i(t(e(o).miniChip),1)]),_:1}),a(e(p),{type:"danger",size:"large"},{default:l(()=>[i(t(e(o).largeChip),1)]),_:1})]),_:1},8,["size"]),a(e(n),null,{default:l(()=>[i(t(e(o).blockChip),1)]),_:1}),a(e(p),{type:"primary",block:""},{default:l(()=>[i(t(e(o).blockChip),1)]),_:1}),a(e(n),null,{default:l(()=>[i(t(e(o).canCloseChip),1)]),_:1}),a(e(s),{size:["2.666vw","2.666vw"]},{default:l(()=>[c.value?(C(),m(e(p),{key:0,closable:"",onClose:r[0]||(r[0]=S=>c.value=!1)},{default:l(()=>[i(t(e(o).canCloseChip),1)]),_:1})):_("",!0),d.value?(C(),m(e(p),{key:1,closable:"","icon-name":"delete",onClose:r[1]||(r[1]=S=>d.value=!1)},{default:l(()=>[i(t(e(o).customCloseIcon),1)]),_:1})):_("",!0)]),_:1},8,["size"]),a(e(n),null,{default:l(()=>[i(t(e(o).customColor),1)]),_:1}),a(e(s),{size:["2.666vw","2.666vw"]},{default:l(()=>[a(e(p),{color:"#009688","text-color":"#fff"},{default:l(()=>[i(t(e(o).chip),1)]),_:1}),a(e(p),{color:"#009688",plain:""},{default:l(()=>[i(t(e(o).chip),1)]),_:1}),a(e(p),{color:"#faecd8","text-color":"#e6a23c",plain:""},{default:l(()=>[i(t(e(o).chip),1)]),_:1}),a(e(p),{color:"#faecd8","text-color":"#e6a23c"},{default:l(()=>[i(t(e(o).chip),1)]),_:1})]),_:1},8,["size"]),a(e(n),null,{default:l(()=>[i(t(e(o).addSlot),1)]),_:1}),a(e(s),{size:["2.666vw","2.666vw"]},{default:l(()=>[a(e(p),null,{left:l(()=>[a(e(h),{name:"star"})]),default:l(()=>[i(t(e(o).leftSlot)+" ",1)]),_:1}),a(e(p),null,{right:l(()=>[a(e(h),{name:"fire"})]),default:l(()=>[i(t(e(o).rightSlot)+" ",1)]),_:1}),a(e(p),null,{left:l(()=>[a(e(h),{name:"account-circle"})]),right:l(()=>[a(e(h),{name:"cake-variant"})]),default:l(()=>[i(t(e(o).leftAndRightSlot)+" ",1)]),_:1})]),_:1},8,["size"])],64))}};export{J as default};
