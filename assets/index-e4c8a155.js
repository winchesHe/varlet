import{F as me,u as ce}from"./index-4fa56e4b.js";import{I as pe}from"./index-a551829b.js";import{P as ve}from"./index-3cdc8a91.js";import{I as Q}from"./index-949285a2.js";import{v as fe}from"./index-694a1082.js";import{d as y,i as ge,b as c,c as ye}from"./components-25275440.js";import{d as he,a as T,b as X,X as be,w as we,W as Z,r as w,n as Ve,Z as G,at as J,_ as Re,p as N,ag as Pe,f as v,h as f,M as B,F as Ce,ai as $e,D as K,N as i,Q as Be,ah as ke,q as k,j as S,R as Se,O as De,S as Fe}from"./vue-router.esm-bundler-10f05234.js";import{i as Y,a as _}from"./shared-5ff0af51.js";const Le={modelValue:{type:Array,default:()=>[]},accept:{type:String,default:"image/*"},capture:{type:[String,Boolean],default:void 0},multiple:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},removable:{type:Boolean,default:!0},maxlength:{type:[Number,String]},maxsize:{type:[Number,String]},previewed:{type:Boolean,default:!0},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onChange","onRemove"]},rules:{type:Array},hideList:{type:Boolean,default:!1},onBeforeRead:y(),onAfterRead:y(),onBeforeRemove:y(),onRemove:y(),onOversize:y(),"onUpdate:modelValue":y()},{n:Ue,classes:Te}=ye("uploader");let Ne=0;const ze=he({name:"VarUploader",directives:{Ripple:fe},components:{VarIcon:pe,VarPopup:ve,VarFormDetails:me},props:Le,setup(e){const d=T(null),V=T(!1),R=T(null),A=X(()=>{const{maxlength:a,modelValue:{length:o}}=e;return be(a)?`${o} / ${a}`:""}),{form:s,bindForm:P}=ce(),{errorMessage:D,validateWithTrigger:F,validate:C,resetValidation:l}=ge(),g=X(()=>{const{modelValue:a,hideList:o}=e;return o?[]:a}),x=a=>{const{disabled:o,readonly:n,previewed:t}=e;if(s!=null&&s.disabled.value||s!=null&&s.readonly.value||o||n||!t)return;const{url:r}=a;if(Z(r)&&_(r)){Q(r);return}Z(r)&&Y(r)&&(R.value=a,V.value=!0)},ee=a=>({id:Ne++,url:"",cover:"",name:a.name,file:a}),ae=a=>{const o=a.target,{files:n}=o;return Array.from(n)},le=a=>new Promise(o=>{const n=new FileReader;n.onload=()=>{const t=n.result;a.file.type.startsWith("image")&&(a.cover=t),a.url=t,o(a)},n.readAsDataURL(a.file)}),se=a=>a.map(le),oe=a=>{const{onBeforeRead:o}=e;return a.map(n=>new Promise(t=>{o||t({valid:!0,varFile:n});let r=c(o,w(n));r=J(r)?r:[r],Promise.all(r).then(h=>{t({valid:!h.some(b=>!b),varFile:n})})}))},ne=async a=>{const{maxsize:o,maxlength:n,modelValue:t,onOversize:r,onAfterRead:h,readonly:b,disabled:m}=e;if(s!=null&&s.disabled.value||s!=null&&s.readonly.value||m||b)return;const U=u=>u.filter($=>$.file.size>G(o)?(c(r,w($)),!1):!0),de=u=>{const $=Math.min(u.length,G(n)-t.length);return u.slice(0,$)};let p=ae(a).map(ee);p=o!=null?U(p):p,p=n!=null?de(p):p;const ue=await Promise.all(se(p)),q=(await Promise.all(oe(ue))).filter(({valid:u})=>u).map(({varFile:u})=>u);c(e["onUpdate:modelValue"],[...t,...q]),a.target.value="",q.forEach(u=>c(h,w(u)))},re=async a=>{const{disabled:o,readonly:n,modelValue:t,onBeforeRemove:r,onRemove:h}=e;if(s!=null&&s.disabled.value||s!=null&&s.readonly.value||o||n)return;if(r){let m=c(r,w(a));if(m=J(m)?m:[m],(await Promise.all(m)).some(U=>!U))return}const b=t.filter(m=>m!==a);c(h,w(a)),H("onRemove"),c(e["onUpdate:modelValue"],b)},M=()=>e.modelValue.filter(a=>a.state==="success"),I=()=>e.modelValue.filter(a=>a.state==="error"),W=()=>e.modelValue.filter(a=>a.state==="loading"),te=()=>{d.value.click()},ie=()=>{R.value=null,V.value=!1,Q.close()},E={getSuccess:M,getError:I,getLoading:W},H=a=>{Ve(()=>{const{validateTrigger:o,rules:n,modelValue:t}=e;F(o,a,n,t,E)})};let L=!1;const O=()=>C(e.rules,e.modelValue,E),j=()=>{L=!0,c(e["onUpdate:modelValue"],[]),l()};return c(P,{validate:O,resetValidation:l,reset:j}),we(()=>e.modelValue,()=>{!L&&H("onChange"),L=!1},{deep:!0}),{n:Ue,classes:Te,input:d,files:g,showPreview:V,currentPreview:R,errorMessage:D,maxlengthText:A,isHTMLSupportVideo:Y,isHTMLSupportImage:_,formDisabled:s==null?void 0:s.disabled,formReadonly:s==null?void 0:s.readonly,preview:x,handleChange:ne,handleRemove:re,getSuccess:M,getError:I,getLoading:W,validate:O,resetValidation:l,reset:j,chooseFile:te,closePreview:ie}}});const Ae=["onClick"],Me=["onClick"],Ie=["src","alt"],We=["multiple","accept","capture","disabled"],Ee=["src"];function He(e,d,V,R,A,s){const P=N("var-icon"),D=N("var-form-details"),F=N("var-popup"),C=Pe("ripple");return v(),f("div",{class:i(e.classes(e.n(),e.n("$--box")))},[B("div",{class:i(e.n("file-list"))},[(v(!0),f(Ce,null,$e(e.files,l=>K((v(),f("div",{class:i(e.classes(e.n("file"),e.n("$-elevation--2"),[l.state==="loading",e.n("--loading")])),key:l.id,onClick:g=>e.preview(l)},[B("div",{class:i(e.n("file-name"))},Be(l.name||l.url),3),e.removable?(v(),f("div",{key:0,class:i(e.n("file-close")),onClick:ke(g=>e.handleRemove(l),["stop"])},[k(P,{class:i(e.n("file-close-icon")),"var-uploader-cover":"",name:"delete"},null,8,["class"])],10,Me)):S("",!0),l.cover?(v(),f("img",{key:1,class:i(e.n("file-cover")),style:Se({objectFit:l.fit}),src:l.cover,alt:l.name},null,14,Ie)):S("",!0),B("div",{class:i(e.classes(e.n("file-indicator"),[l.state==="success",e.n("--success")],[l.state==="error",e.n("--error")]))},null,2)],10,Ae)),[[C,{disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly||!e.ripple}]])),128)),!e.maxlength||e.modelValue.length<e.maxlength?K((v(),f("div",{key:0,class:i(e.classes([!e.$slots.default,`${e.n("action")} ${e.n("$-elevation--2")}`],[e.disabled||e.formDisabled,e.n("--disabled")])),onClick:d[1]||(d[1]=(...l)=>e.chooseFile&&e.chooseFile(...l))},[B("input",{ref:"input",type:"file",class:i(e.n("action-input")),multiple:e.multiple,accept:e.accept,capture:e.capture,disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly,onChange:d[0]||(d[0]=(...l)=>e.handleChange&&e.handleChange(...l))},null,42,We),De(e.$slots,"default",{},()=>[k(P,{class:i(e.n("action-icon")),"var-uploader-cover":"",name:"plus"},null,8,["class"])])],2)),[[C,{disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly||!e.ripple||e.$slots.default}]]):S("",!0)],2),k(D,{"error-message":e.errorMessage,"extra-message":e.maxlengthText},null,8,["error-message","extra-message"]),k(F,{class:i(e.n("preview")),"var-uploader-cover":"",position:"center",show:e.showPreview,"onUpdate:show":d[2]||(d[2]=l=>e.showPreview=l),onClosed:d[3]||(d[3]=l=>e.currentPreview=null)},{default:Fe(()=>{var l,g;return[e.currentPreview&&e.isHTMLSupportVideo((l=e.currentPreview)==null?void 0:l.url)?(v(),f("video",{key:0,class:i(e.n("preview-video")),playsinline:"true","webkit-playsinline":"true","x5-playsinline":"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"false",controls:"",src:(g=e.currentPreview)==null?void 0:g.url},null,10,Ee)):S("",!0)]}),_:1},8,["class","show"])],2)}const z=Re(ze,[["render",He]]);z.install=function(e){e.component(z.name,z)};export{z as U};
