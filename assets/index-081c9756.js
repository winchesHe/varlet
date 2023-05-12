import{U as n}from"./index-dd3e4551.js";import{B as V}from"./index-780c9b5c.js";import{S as h}from"./index-d7c41126.js";import{I as F}from"./index-83a910b7.js";import{D as M}from"./index-dea9fb4d.js";import{S as v}from"./index-96345af7.js";import{d as T}from"./index-dd768cde.js";import{_ as B,r as C,ac as k,aE as A,u as P,f as g,h as c,q as l,S as s,ao as e,F as U,P as u,Q as d,ai as I}from"./vue-router-6d86b99d.js";import{u as N,a as b,_ as D,b as E,c as O}from"./index-3c1b9f16.js";import{A as m}from"./appType-593f66f3.js";import"./index-ffaf6c58.js";import"./components-d3c1de13.js";import"./provide-d9df1eae.js";import"./useChildren-e46981d6.js";import"./index-925194e4.js";import"./lock-6e75224c.js";import"./index-aa7c4fad.js";import"./zIndex-ec604ca2.js";/* empty css               */import"./index-28ed6466.js";import"./index-995e938d.js";import"./provide-75dabba5.js";import"./elements-ef5178c4.js";import"./shared-1843a447.js";import"./logger-525ef361.js";import"./index-3f3fb3a3.js";import"./index-a91d93ca.js";import"./index-65467f9f.js";import"./index-7174c92a.js";const $={basicUsage:"基本使用",preview:"文件预览",state:"上传状态",maxlength:"文件数量限制",maxsize:"文件大小限制",beforeRead:"上传预处理",disabled:"禁用",readonly:"只读",validate:"字段校验",validateMessage:"存在上传失败的文件",style:"自定义上传样式",upload:"上传",beforeRemove:"删除前处理",removeTitle:"是否删除?",removeMessage:"删除后无法撤回",fileSizeExceedsLimit:"文件大小超出限制",fileLessThen:"文件小于1M，上传成功",fileLargeThen:"文件大于1M，不能上传",customRender:"自定义渲染文件列表",useProgress:"使用进度条",beforeFilter:"文件列表过滤"},q={basicUsage:"Basic Usage",preview:"File Preview",state:"Upload State",maxlength:"File Maxlength",maxsize:"File Size Limit",beforeRead:"Upload Preprocessing",disabled:"Disabled",readonly:"Readonly",validate:"Validate",validateMessage:"There is a file that failed to upload",style:"Customize upload styles",upload:"Upload",beforeRemove:"Remove Preprocessing",removeTitle:"Delete or not?",removeMessage:"Cannot be withdrawn after deletion",fileSizeExceedsLimit:"file size exceeds limit",fileLessThen:"the file is less than 1M, the upload is successful",fileLargeThen:"the file is larger than 1M and cannot be uploaded",customRender:"Custom render file list",useProgress:"Use Progress",beforeFilter:"File List Filter"},{add:x,use:Q,pack:i,packs:ye,merge:_e}=N(),W=p=>{O(p),Q(p)};b("zh-CN",D);b("en-US",E);x("zh-CN",$);x("en-US",q);const G=["src"],H={__name:"index",setup(p){const o=C({files:[],files2:[{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg"},{url:"https://www.runoob.com/try/demo_source/mov_bbb.mp4",cover:"https://varlet.gitee.io/varlet-ui/cover.jpg"}],files3:[{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"loading"},{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"success"},{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"error"}],files4:[],files5:[],files6:[],files7:[],files8:[],files9:[],files10:[{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"error"}],files11:[{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg"}],files12:[{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"loading"},{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"success"},{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"error"}],files13:[],files14:[]});function w(r){console.log(r)}function R(r){r.state="loading",setInterval(()=>{r.state="success"},1e3)}let f;function y(r){r.state="loading",r.progress=0,f=window.setInterval(()=>{if(r.progress===100){window.clearInterval(f),r.state="success";return}r.progress+=10},250)}function _(){v.warning(i.value.fileSizeExceedsLimit)}function j(r){return r.file.size<=1*1024*1024?(v.success(i.value.fileLessThen),!0):(v.warning(i.value.fileLargeThen),!1)}async function z(){return await M({title:i.value.removeTitle,message:i.value.removeMessage})==="confirm"}function L(r){return r.filter(a=>a.name.endsWith("png"))}return k(W),A(T),P(()=>{window.clearInterval(f)}),(r,a)=>(g(),c(U,null,[l(e(m),null,{default:s(()=>[u(d(e(i).basicUsage),1)]),_:1}),l(e(n),{modelValue:o.files,"onUpdate:modelValue":a[0]||(a[0]=t=>o.files=t),onAfterRead:w},null,8,["modelValue"]),l(e(m),null,{default:s(()=>[u(d(e(i).preview),1)]),_:1}),l(e(n),{modelValue:o.files2,"onUpdate:modelValue":a[1]||(a[1]=t=>o.files2=t)},null,8,["modelValue"]),l(e(m),null,{default:s(()=>[u(d(e(i).state),1)]),_:1}),l(e(n),{modelValue:o.files3,"onUpdate:modelValue":a[2]||(a[2]=t=>o.files3=t),onAfterRead:R},null,8,["modelValue"]),l(e(m),null,{default:s(()=>[u(d(e(i).useProgress),1)]),_:1}),l(e(n),{modelValue:o.files13,"onUpdate:modelValue":a[3]||(a[3]=t=>o.files13=t),onAfterRead:y},null,8,["modelValue"]),l(e(m),null,{default:s(()=>[u(d(e(i).maxlength),1)]),_:1}),l(e(n),{modelValue:o.files4,"onUpdate:modelValue":a[4]||(a[4]=t=>o.files4=t),maxlength:1},null,8,["modelValue"]),l(e(m),null,{default:s(()=>[u(d(e(i).maxsize),1)]),_:1}),l(e(n),{modelValue:o.files5,"onUpdate:modelValue":a[5]||(a[5]=t=>o.files5=t),maxsize:1024,onOversize:_},null,8,["modelValue"]),l(e(m),null,{default:s(()=>[u(d(e(i).beforeFilter),1)]),_:1}),l(e(n),{modelValue:o.files14,"onUpdate:modelValue":a[6]||(a[6]=t=>o.files14=t),multiple:"",onBeforeFilter:L},null,8,["modelValue"]),l(e(m),null,{default:s(()=>[u(d(e(i).beforeRead),1)]),_:1}),l(e(n),{modelValue:o.files7,"onUpdate:modelValue":a[7]||(a[7]=t=>o.files7=t),onBeforeRead:j},null,8,["modelValue"]),l(e(m),null,{default:s(()=>[u(d(e(i).disabled),1)]),_:1}),l(e(n),{disabled:"",modelValue:o.files8,"onUpdate:modelValue":a[8]||(a[8]=t=>o.files8=t)},null,8,["modelValue"]),l(e(m),null,{default:s(()=>[u(d(e(i).readonly),1)]),_:1}),l(e(n),{readonly:"",modelValue:o.files9,"onUpdate:modelValue":a[9]||(a[9]=t=>o.files9=t)},null,8,["modelValue"]),l(e(m),null,{default:s(()=>[u(d(e(i).beforeRemove),1)]),_:1}),l(e(n),{modelValue:o.files11,"onUpdate:modelValue":a[10]||(a[10]=t=>o.files11=t),onBeforeRemove:z},null,8,["modelValue"]),l(e(m),null,{default:s(()=>[u(d(e(i).style),1)]),_:1}),l(e(n),{modelValue:o.files6,"onUpdate:modelValue":a[11]||(a[11]=t=>o.files6=t)},{default:s(()=>[l(e(V),{type:"primary"},{default:s(()=>[u(d(e(i).upload),1)]),_:1})]),_:1},8,["modelValue"]),l(e(m),null,{default:s(()=>[u(d(e(i).validate),1)]),_:1}),l(e(n),{rules:[(t,S)=>S.getError().length===0||e(i).validateMessage],modelValue:o.files10,"onUpdate:modelValue":a[12]||(a[12]=t=>o.files10=t)},null,8,["rules","modelValue"]),l(e(m),null,{default:s(()=>[u(d(e(i).customRender),1)]),_:1}),l(e(h),null,{default:s(()=>[(g(!0),c(U,null,I(o.files12,t=>(g(),c("img",{class:"custom-uploader-file",key:t.id,src:t.cover},null,8,G))),128)),l(e(n),{"hide-list":"",modelValue:o.files12,"onUpdate:modelValue":a[13]||(a[13]=t=>o.files12=t)},{default:s(()=>[l(e(V),{round:"",type:"primary"},{default:s(()=>[l(e(F),{size:28,name:"upload"})]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(e(h))],64))}},je=B(H,[["__scopeId","data-v-4791cf47"]]);export{je as default};
