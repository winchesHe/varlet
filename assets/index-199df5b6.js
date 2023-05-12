import{S as o}from"./index-caf4bbfe.js";import{O as u}from"./index-302b78d0.js";import{S as L}from"./index-d7c41126.js";import{I as s}from"./index-83a910b7.js";import{d as q}from"./index-dd768cde.js";import{_ as Q,a as i,aE as j,ac as G,f as H,h as J,q as l,S as d,ao as e,F as K,P as O,Q as r,M as p,N as h,al as W,am as X}from"./vue-router-6d86b99d.js";import{u as Z,a as F,_ as ee,b as le,c as ae}from"./index-3c1b9f16.js";import{A}from"./appType-593f66f3.js";import"./index-87698c7e.js";import"./components-d3c1de13.js";import"./usePopover-da2a1c71.js";import"./elements-ef5178c4.js";import"./shared-1843a447.js";import"./logger-525ef361.js";import"./zIndex-ec604ca2.js";import"./index-aa7c4fad.js";import"./index-f339af8f.js";import"./FieldDecorator-a69f214d.js";import"./provide-d9df1eae.js";import"./useChildren-e46981d6.js";import"./index-54086d00.js";import"./index-a91d93ca.js";/* empty css               */import"./index-65467f9f.js";import"./index-ffaf6c58.js";const ne={standard:"标准外观",outlined:"外边框外观",smallSize:"小尺寸",disabled:"禁用",readonly:"只读",clearable:"可清除",customIcon:"自定义图标",customIconSize:"自定义图标尺寸",validate:"单选值校验",multipleValidate:"多选值校验",placeholder:"请选择一个选项",multiplePlaceholder:"请选择多个选项",clearableText:"可清除文本",relation:"文本关联值",multiple:"多选",chipMultiple:"纸片风格的多选",eat:"吃饭",sleep:"睡觉",play:"打游戏",coding:"写代码",rest:"摸鱼",currentSelect:"当前选择的是:",mustSelectRest:"您一定得选择摸鱼",mustSelectMoreThan:"您至少选择两个选项"},ue={standard:"Standard Variant",outlined:"Outlined Variant",smallSize:"Small Size",disabled:"Disabled",readonly:"Readonly",clearable:"Clearable",customIcon:"Custom Icon",customIconSize:"Custom Icon Size",validate:"Validate",multipleValidate:"Multiple Validate",placeholder:"Please select one the options",multiplePlaceholder:"Please select multiple options",clearableText:"Clearable Text",relation:"Label relation value",multiple:"Multiple Selection",chipMultiple:"Multiple choice of paper style",eat:"Eat",sleep:"Sleep",play:"Play game",coding:"Coding",rest:"Rest",currentSelect:"The current selection is:",mustSelectRest:"You must choose to rest",mustSelectMoreThan:"You select at least two options"},{add:Y,use:de,pack:a,packs:Ee,merge:Le}=Z(),te=c=>{ae(c),de(c)};F("zh-CN",ee);F("en-US",le);Y("zh-CN",ne);Y("en-US",ue);const oe=c=>(W("data-v-d55620e4"),c=c(),X(),c),se={class:"relation"},ie={class:"relation"},re=oe(()=>p("div",{class:"space"},null,-1)),pe={__name:"index",setup(c){const S=i(void 0),w=i(void 0),g=i(void 0),U=i(void 0),y=i(void 0),b=i(void 0),z=i([]),_=i([]),I=i([]),V=i(void 0),k=i(void 0),m=i(void 0),x=i(void 0),M=i(void 0),C=i(void 0),T=i(void 0),N=i(void 0),v=i(void 0),P=i([]),R=i([]),B=i([]),f=i(void 0),D=i(void 0),$=i(void 0);return j(q),G(E=>{S.value=void 0,w.value=void 0,g.value=void 0,U.value=void 0,y.value=void 0,b.value=void 0,z.value=[],_.value=[],I.value=[],V.value=void 0,k.value=void 0,m.value=void 0,x.value=void 0,M.value=void 0,C.value=void 0,T.value=void 0,N.value=void 0,v.value=void 0,P.value=[],R.value=[],B.value=[],f.value=void 0,D.value=void 0,$.value=void 0,te(E)}),(E,t)=>(H(),J(K,null,[l(e(A),null,{default:d(()=>[O(r(e(a).standard),1)]),_:1}),l(e(L),{direction:"column",size:["3vw",0]},{default:d(()=>[l(e(o),{placeholder:e(a).placeholder,modelValue:S.value,"onUpdate:modelValue":t[0]||(t[0]=n=>S.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat},null,8,["label"]),l(e(u),{label:e(a).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),l(e(o),{placeholder:e(a).relation,modelValue:V.value,"onUpdate:modelValue":t[1]||(t[1]=n=>V.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat,value:1},null,8,["label"]),l(e(u),{label:e(a).sleep,value:2},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),p("div",se,r(e(a).currentSelect)+" "+r(V.value),1),l(e(o),{placeholder:e(a).readonly,readonly:"",modelValue:w.value,"onUpdate:modelValue":t[2]||(t[2]=n=>w.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat},null,8,["label"]),l(e(u),{label:e(a).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),l(e(o),{placeholder:e(a).disabled,disabled:"",modelValue:g.value,"onUpdate:modelValue":t[3]||(t[3]=n=>g.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat},null,8,["label"]),l(e(u),{label:e(a).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),l(e(o),{placeholder:e(a).clearable,clearable:"",modelValue:U.value,"onUpdate:modelValue":t[4]||(t[4]=n=>U.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat},null,8,["label"]),l(e(u),{label:e(a).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),l(e(o),{placeholder:e(a).customIcon,modelValue:b.value,"onUpdate:modelValue":t[5]||(t[5]=n=>b.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat},{default:d(()=>[l(e(s),{class:"selected-icon",name:"cake-variant"}),p("span",null,r(e(a).eat),1)]),_:1},8,["label"]),l(e(u),{label:e(a).sleep},{default:d(()=>[l(e(s),{class:"selected-icon",name:"weather-night"}),p("span",null,r(e(a).sleep),1)]),_:1},8,["label"])]),selected:d(()=>[l(e(s),{class:"selected-icon",name:b.value===e(a).eat?"cake-variant":"weather-night"},null,8,["name"]),p("span",null,r(b.value),1)]),"prepend-icon":d(()=>[l(e(s),{class:"prepend-icon",name:"github"})]),"append-icon":d(()=>[l(e(s),{class:"append-icon",name:"github"})]),"arrow-icon":d(({focus:n})=>[l(e(s),{name:"chevron-down",transition:300,class:h({"arrow-icon-rotate":n})},null,8,["class"])]),_:1},8,["placeholder","modelValue"]),l(e(o),{style:{"--field-decorator-middle-offset-y":"2.6vw"},placeholder:e(a).customIconSize,modelValue:m.value,"onUpdate:modelValue":t[6]||(t[6]=n=>m.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat},{default:d(()=>[l(e(s),{class:"selected-icon",name:"cake-variant"}),p("span",null,r(e(a).eat),1)]),_:1},8,["label"]),l(e(u),{label:e(a).sleep},{default:d(()=>[l(e(s),{class:"selected-icon",name:"weather-night"}),p("span",null,r(e(a).sleep),1)]),_:1},8,["label"])]),selected:d(()=>[l(e(s),{class:"selected-icon",name:m.value===e(a).eat?"cake-variant":"weather-night",size:"8vw"},null,8,["name"]),p("span",null,r(m.value),1)]),"prepend-icon":d(()=>[l(e(s),{class:"prepend-icon",name:"github",size:"8vw"})]),"append-icon":d(()=>[l(e(s),{class:"append-icon",name:"github",size:"12vw"})]),"arrow-icon":d(({focus:n})=>[l(e(s),{name:"chevron-down",transition:300,class:h({"arrow-icon-rotate":n})},null,8,["class"])]),_:1},8,["placeholder","modelValue"]),l(e(o),{placeholder:e(a).multiple,multiple:"",modelValue:z.value,"onUpdate:modelValue":t[7]||(t[7]=n=>z.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat},null,8,["label"]),l(e(u),{label:e(a).sleep},null,8,["label"]),l(e(u),{label:e(a).play},null,8,["label"]),l(e(u),{label:e(a).coding},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),l(e(o),{placeholder:e(a).chipMultiple,chip:"",multiple:"",modelValue:_.value,"onUpdate:modelValue":t[8]||(t[8]=n=>_.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat},null,8,["label"]),l(e(u),{label:e(a).sleep},null,8,["label"]),l(e(u),{label:e(a).play},null,8,["label"]),l(e(u),{label:e(a).coding},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),l(e(o),{placeholder:e(a).validate,rules:[n=>n===e(a).rest||e(a).mustSelectRest],modelValue:y.value,"onUpdate:modelValue":t[9]||(t[9]=n=>y.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat},null,8,["label"]),l(e(u),{label:e(a).sleep},null,8,["label"]),l(e(u),{label:e(a).rest},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),l(e(o),{multiple:"",placeholder:e(a).multipleValidate,rules:[n=>n.length>=2||e(a).mustSelectMoreThan],modelValue:I.value,"onUpdate:modelValue":t[10]||(t[10]=n=>I.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat},null,8,["label"]),l(e(u),{label:e(a).sleep},null,8,["label"]),l(e(u),{label:e(a).play},null,8,["label"]),l(e(u),{label:e(a).coding},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),l(e(o),{placeholder:e(a).smallSize,modelValue:k.value,"onUpdate:modelValue":t[11]||(t[11]=n=>k.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat},null,8,["label"]),l(e(u),{label:e(a).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"])]),_:1}),l(e(A),{style:{"margin-top":"10vw"}},{default:d(()=>[O(r(e(a).outlined),1)]),_:1}),l(e(L),{direction:"column",size:["6vw",0]},{default:d(()=>[l(e(o),{variant:"outlined",placeholder:e(a).placeholder,modelValue:x.value,"onUpdate:modelValue":t[12]||(t[12]=n=>x.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat},null,8,["label"]),l(e(u),{label:e(a).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),l(e(o),{variant:"outlined",placeholder:e(a).relation,modelValue:f.value,"onUpdate:modelValue":t[13]||(t[13]=n=>f.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat,value:1},null,8,["label"]),l(e(u),{label:e(a).sleep,value:2},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),p("div",ie,r(e(a).currentSelect)+" "+r(f.value),1),l(e(o),{variant:"outlined",placeholder:e(a).readonly,readonly:"",modelValue:M.value,"onUpdate:modelValue":t[14]||(t[14]=n=>M.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat},null,8,["label"]),l(e(u),{label:e(a).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),l(e(o),{variant:"outlined",placeholder:e(a).disabled,disabled:"",modelValue:C.value,"onUpdate:modelValue":t[15]||(t[15]=n=>C.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat},null,8,["label"]),l(e(u),{label:e(a).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),l(e(o),{variant:"outlined",placeholder:e(a).clearable,clearable:"",modelValue:T.value,"onUpdate:modelValue":t[16]||(t[16]=n=>T.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat},null,8,["label"]),l(e(u),{label:e(a).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),l(e(o),{variant:"outlined",placeholder:e(a).customIcon,modelValue:v.value,"onUpdate:modelValue":t[17]||(t[17]=n=>v.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat},{default:d(()=>[l(e(s),{class:"selected-icon",name:"cake-variant"}),p("span",null,r(e(a).eat),1)]),_:1},8,["label"]),l(e(u),{label:e(a).sleep},{default:d(()=>[l(e(s),{class:"selected-icon",name:"weather-night"}),p("span",null,r(e(a).sleep),1)]),_:1},8,["label"])]),selected:d(()=>[l(e(s),{class:"selected-icon",name:v.value===e(a).eat?"cake-variant":"weather-night"},null,8,["name"]),p("span",null,r(v.value),1)]),"prepend-icon":d(()=>[l(e(s),{class:"prepend-icon",name:"github"})]),"append-icon":d(()=>[l(e(s),{class:"append-icon",name:"github"})]),"arrow-icon":d(({focus:n})=>[l(e(s),{name:"chevron-down",transition:300,class:h({"arrow-icon-rotate":n})},null,8,["class"])]),_:1},8,["placeholder","modelValue"]),l(e(o),{variant:"outlined",style:{"--field-decorator-middle-offset-y":"2.6vw"},placeholder:e(a).customIconSize,modelValue:m.value,"onUpdate:modelValue":t[18]||(t[18]=n=>m.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat},{default:d(()=>[l(e(s),{class:"selected-icon",name:"cake-variant"}),p("span",null,r(e(a).eat),1)]),_:1},8,["label"]),l(e(u),{label:e(a).sleep},{default:d(()=>[l(e(s),{class:"selected-icon",name:"weather-night"}),p("span",null,r(e(a).sleep),1)]),_:1},8,["label"])]),selected:d(()=>[l(e(s),{class:"selected-icon",name:m.value===e(a).eat?"cake-variant":"weather-night",size:"8vw"},null,8,["name"]),p("span",null,r(m.value),1)]),"prepend-icon":d(()=>[l(e(s),{class:"prepend-icon",name:"github",size:"8vw"})]),"append-icon":d(()=>[l(e(s),{class:"append-icon",name:"github",size:"12vw"})]),"arrow-icon":d(({focus:n})=>[l(e(s),{name:"chevron-down",transition:300,class:h({"arrow-icon-rotate":n})},null,8,["class"])]),_:1},8,["placeholder","modelValue"]),l(e(o),{variant:"outlined",placeholder:e(a).multiple,multiple:"",modelValue:P.value,"onUpdate:modelValue":t[19]||(t[19]=n=>P.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat},null,8,["label"]),l(e(u),{label:e(a).sleep},null,8,["label"]),l(e(u),{label:e(a).play},null,8,["label"]),l(e(u),{label:e(a).coding},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),l(e(o),{variant:"outlined",placeholder:e(a).chipMultiple,chip:"",multiple:"",modelValue:R.value,"onUpdate:modelValue":t[20]||(t[20]=n=>R.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat},null,8,["label"]),l(e(u),{label:e(a).sleep},null,8,["label"]),l(e(u),{label:e(a).play},null,8,["label"]),l(e(u),{label:e(a).coding},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),l(e(o),{variant:"outlined",placeholder:e(a).validate,rules:[n=>n===e(a).rest||e(a).mustSelectRest],modelValue:N.value,"onUpdate:modelValue":t[21]||(t[21]=n=>N.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat},null,8,["label"]),l(e(u),{label:e(a).sleep},null,8,["label"]),l(e(u),{label:e(a).rest},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),l(e(o),{multiple:"",variant:"outlined",placeholder:e(a).multipleValidate,rules:[n=>n.length>=2||e(a).mustSelectMoreThan],modelValue:B.value,"onUpdate:modelValue":t[22]||(t[22]=n=>B.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat},null,8,["label"]),l(e(u),{label:e(a).sleep},null,8,["label"]),l(e(u),{label:e(a).play},null,8,["label"]),l(e(u),{label:e(a).coding},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),l(e(o),{variant:"outlined",size:"small",placeholder:e(a).smallSize,modelValue:D.value,"onUpdate:modelValue":t[23]||(t[23]=n=>D.value=n)},{default:d(()=>[l(e(u),{label:e(a).eat},null,8,["label"]),l(e(u),{label:e(a).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"])]),_:1}),re],64))}},Oe=Q(pe,[["__scopeId","data-v-d55620e4"]]);export{Oe as default};
