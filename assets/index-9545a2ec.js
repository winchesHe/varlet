import{U as d}from"./index-150ab463.js";import{B as c}from"./index-2d956dae.js";import{S as z}from"./index-d1824a34.js";import{I as S}from"./index-5e9b1128.js";import{D as w}from"./index-c7e8291c.js";import{S as f}from"./index-fc8776dd.js";import{_ as L,r as M,ac as T,aB as B,f as v,h as g,q as l,S as s,ap as e,F as V,P as r,Q as u,aC as n,ai as C,al as k,am as N,M as D}from"./vue-router.esm-bundler-2ca71151.js";import{d as I}from"./index-59604d2c.js";import{u as A,c as E,a as h,_ as F,b as P}from"./index-1e358a5a.js";import"./provide-180ca459.js";import"./components-fe6f9a05.js";import"./index-5d54e2d0.js";import"./lock-8d9432a8.js";import"./index-9c02a7e3.js";import"./zIndex-3cf67761.js";/* empty css               */import"./index-5a877c57.js";import"./index-1dda92c8.js";import"./provide-765f1a1b.js";import"./elements-9a8e8a45.js";import"./shared-5e0af17c.js";import"./index-df21b099.js";import"./index-5db115f0.js";import"./index-e4fc01f7.js";import"./index-2b8b62c3.js";const O={basicUsage:"基本使用",preview:"文件预览",state:"上传状态",maxlength:"文件数量限制",maxsize:"文件大小限制",beforeRead:"上传预处理",disabled:"禁用",readonly:"只读",validate:"字段校验",validateMessage:"存在上传失败的文件",style:"自定义上传样式",upload:"上传",beforeRemove:"删除前处理",removeTitle:"是否删除?",removeMessage:"删除后无法撤回",fileSizeExceedsLimit:"文件大小超出限制",fileLessThen:"文件小于1M，上传成功",fileLargeThen:"文件大于1M，不能上传",customRender:"自定义渲染文件列表"},$={basicUsage:"Basic Usage",preview:"File Preview",state:"Upload State",maxlength:"File Maxlength",maxsize:"File Size Limit",beforeRead:"Upload Preprocessing",disabled:"Disabled",readonly:"Readonly",validate:"Validate",validateMessage:"There is a file that failed to upload",style:"Customize upload styles",upload:"Upload",beforeRemove:"Remove Preprocessing",removeTitle:"Delete or not?",removeMessage:"Cannot be withdrawn after deletion",fileSizeExceedsLimit:"file size exceeds limit",fileLessThen:"the file is less than 1M, the upload is successful",fileLargeThen:"the file is larger than 1M and cannot be uploaded",customRender:"Custom render file list"},{add:U,use:q,pack:i,packs:be,merge:xe}=A(),Q=m=>{E(m),q(m)};h("zh-CN",F);h("en-US",P);U("zh-CN",O);U("en-US",$);const G=m=>(k("data-v-7e6e79ce"),m=m(),N(),m),H=["src"],J=G(()=>D("div",{class:"space"},null,-1)),K={setup(m){const a=M({files:[],files2:[{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg"},{url:"https://www.runoob.com/try/demo_source/mov_bbb.mp4",cover:"https://varlet.gitee.io/varlet-ui/cover.jpg"}],files3:[{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"loading"},{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"success"},{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"error"}],files4:[],files5:[],files6:[],files7:[],files8:[],files9:[],files10:[{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"error"}],files11:[{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg"}],files12:[{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"loading"},{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"success"},{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"error"}]});function _(p){console.log(p)}function b(p){p.state="loading",setTimeout(()=>{p.state="success"},1e3)}function x(){f.warning(i.value.fileSizeExceedsLimit)}function y(p){return p.file.size<=1*1024*1024?(f.success(i.value.fileLessThen),!0):(f.warning(i.value.fileLargeThen),!1)}async function j(){return await w({title:i.value.removeTitle,message:i.value.removeMessage})==="confirm"}return T(Q),B(I),(p,o)=>(v(),g(V,null,[l(e(n),null,{default:s(()=>[r(u(e(i).basicUsage),1)]),_:1}),l(e(d),{modelValue:e(a).files,"onUpdate:modelValue":o[0]||(o[0]=t=>e(a).files=t),onAfterRead:_},null,8,["modelValue"]),l(e(n),null,{default:s(()=>[r(u(e(i).preview),1)]),_:1}),l(e(d),{modelValue:e(a).files2,"onUpdate:modelValue":o[1]||(o[1]=t=>e(a).files2=t)},null,8,["modelValue"]),l(e(n),null,{default:s(()=>[r(u(e(i).state),1)]),_:1}),l(e(d),{modelValue:e(a).files3,"onUpdate:modelValue":o[2]||(o[2]=t=>e(a).files3=t),onAfterRead:b},null,8,["modelValue"]),l(e(n),null,{default:s(()=>[r(u(e(i).maxlength),1)]),_:1}),l(e(d),{modelValue:e(a).files4,"onUpdate:modelValue":o[3]||(o[3]=t=>e(a).files4=t),maxlength:1},null,8,["modelValue"]),l(e(n),null,{default:s(()=>[r(u(e(i).maxsize),1)]),_:1}),l(e(d),{modelValue:e(a).files5,"onUpdate:modelValue":o[4]||(o[4]=t=>e(a).files5=t),maxsize:1024,onOversize:x},null,8,["modelValue"]),l(e(n),null,{default:s(()=>[r(u(e(i).beforeRead),1)]),_:1}),l(e(d),{modelValue:e(a).files7,"onUpdate:modelValue":o[5]||(o[5]=t=>e(a).files7=t),onBeforeRead:y},null,8,["modelValue"]),l(e(n),null,{default:s(()=>[r(u(e(i).disabled),1)]),_:1}),l(e(d),{disabled:"",modelValue:e(a).files8,"onUpdate:modelValue":o[6]||(o[6]=t=>e(a).files8=t)},null,8,["modelValue"]),l(e(n),null,{default:s(()=>[r(u(e(i).readonly),1)]),_:1}),l(e(d),{readonly:"",modelValue:e(a).files9,"onUpdate:modelValue":o[7]||(o[7]=t=>e(a).files9=t)},null,8,["modelValue"]),l(e(n),null,{default:s(()=>[r(u(e(i).beforeRemove),1)]),_:1}),l(e(d),{modelValue:e(a).files11,"onUpdate:modelValue":o[8]||(o[8]=t=>e(a).files11=t),onBeforeRemove:j},null,8,["modelValue"]),l(e(n),null,{default:s(()=>[r(u(e(i).style),1)]),_:1}),l(e(d),{modelValue:e(a).files6,"onUpdate:modelValue":o[9]||(o[9]=t=>e(a).files6=t)},{default:s(()=>[l(e(c),{type:"primary"},{default:s(()=>[r(u(e(i).upload),1)]),_:1})]),_:1},8,["modelValue"]),l(e(n),null,{default:s(()=>[r(u(e(i).validate),1)]),_:1}),l(e(d),{rules:[(t,R)=>R.getError().length===0||e(i).validateMessage],modelValue:e(a).files10,"onUpdate:modelValue":o[10]||(o[10]=t=>e(a).files10=t)},null,8,["rules","modelValue"]),l(e(n),null,{default:s(()=>[r(u(e(i).customRender),1)]),_:1}),l(e(z),null,{default:s(()=>[(v(!0),g(V,null,C(e(a).files12,t=>(v(),g("img",{class:"custom-uploader-file",key:t.id,src:t.cover},null,8,H))),128)),l(e(d),{"hide-list":"",modelValue:e(a).files12,"onUpdate:modelValue":o[11]||(o[11]=t=>e(a).files12=t)},{default:s(()=>[l(e(c),{round:"",type:"primary"},{default:s(()=>[l(e(S),{size:28,name:"upload"})]),_:1})]),_:1},8,["modelValue"])]),_:1}),J],64))}},ye=L(K,[["__scopeId","data-v-7e6e79ce"]]);export{ye as default};
