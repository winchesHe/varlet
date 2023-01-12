import{_ as U,f as s,h as c,M as _,d as W,a as i,g as p,c as r,a1 as ee,ak as ne,b as F,ab as G,a6 as ae,ad as K,k as I,p as L,ag as X,q as m,Q as C,j as M,S as E,D as b,H as D,R as B,F as V,ai as P,i as H,P as Q,N as A,E as Y,r as te,ao as j,al as se,am as oe,aa as ie,o as le,w as re,ap as J,z,n as ce}from"./vue-router.esm-bundler-596ad174.js";import{A as ue}from"./AnimationBox-33d409b8.js";import"./main-a6c8a4aa.js";import"./clipboard-750479b4.js";const de={name:"AppMobile",props:{componentName:{type:String},language:{type:String},replace:{type:String}}},pe={class:"varlet-site-mobile varlet-site-mobile--375"},me={class:"varlet-site-mobile-content"},ge=["src"];function ve(e,n,h,k,u,T){return s(),c("div",pe,[_("div",me,[_("iframe",{id:"mobile",src:`./mobile.html#/${h.componentName}?language=${h.language}&platform=pc&replace=${h.replace}`},null,8,ge)])])}const _e=U(de,[["render",ve],["__scopeId","data-v-4d6e488a"]]),he=W({name:"AppHeader",components:{AnimationBox:ue},props:{language:{type:String}},setup(){const e=i(p(r,"title")),n=i(p(r,"logo")),h=i(p(r,"pc.header.i18n")),k=i(p(r,"pc.header.version.current")),u=i(p(r,"pc.header.version.items")),T=i(p(r,"pc.header.playground")),f=i(p(r,"pc.header.github")),g=p(r,"pc.redirect"),l=i(p(r,"pc.header.darkMode")),t=i(ee()),o=i(!1),y=i(!1),$=ne(),a=F(()=>G(h.value)),d=F(()=>G(u.value)),w=()=>{const{language:v}=I();$.replace(`/${v}${g}`)},N=v=>{const{menuName:S}=I();$.replace(`/${v}/${S}`),o.value=!1},O=v=>{t.value=v,K(r,t.value),window.localStorage.setItem(p(r,"themeKey"),t.value)},q=()=>({action:"theme-change",from:"pc",data:t.value}),Z=()=>{O(t.value==="darkTheme"?"lightTheme":"darkTheme"),window.postMessage(q(),"*"),R("mobile")},R=v=>{(v==="window"?window:document.getElementById(v).contentWindow).postMessage(q(),"*")},x=v=>{setTimeout(()=>{window.location.href=v},350)};return ae((v,S)=>{S==="mobile"&&O(v),S==="playground"&&(O(v),R("mobile"))}),K(r,t.value),R("window"),{logo:n,title:e,currentVersion:k,languages:h,versionItems:u,nonEmptyLanguages:a,nonEmptyVersions:d,playground:T,github:f,isOpenLanguageMenu:o,isOpenVersionsMenu:y,darkMode:l,currentTheme:t,open:x,backRoot:w,handleLanguageChange:N,toggleTheme:Z}}});const ye={class:"varlet-site-header"},fe={class:"varlet-site-header__lead"},be={class:"varlet-site-header__tail"},Te={style:{"font-size":"14px"}},we=["href"],ke=["href"];function $e(e,n,h,k,u,T){const f=L("animation-box"),g=L("var-icon"),l=L("var-cell"),t=X("ripple");return s(),c("div",ye,[_("div",fe,[m(f,{class:"varlet-site-header__logo",onClick:e.backRoot},null,8,["onClick"]),e.title?(s(),c("div",{key:0,class:"varlet-site-header__title",onClick:n[0]||(n[0]=(...o)=>e.backRoot&&e.backRoot(...o))},C(e.title),1)):M("",!0)]),_("div",be,[e.nonEmptyVersions&&Object.keys(e.nonEmptyVersions).length?(s(),c("div",{key:0,class:"varlet-site-header__versions",onMouseenter:n[1]||(n[1]=o=>e.isOpenVersionsMenu=!0),onMouseleave:n[2]||(n[2]=o=>e.isOpenVersionsMenu=!1)},[_("span",Te,C(e.currentVersion),1),m(g,{name:"chevron-down"}),m(Y,{name:"fade"},{default:E(()=>[b(_("div",{class:"varlet-site-header__animation-list varlet-site-header__animation-versions var-site-elevation--5",style:B({pointerEvents:e.isOpenVersionsMenu?"auto":"none"})},[(s(!0),c(V,null,P(e.nonEmptyVersions,(o,y)=>b((s(),H(l,{key:y,class:A({"varlet-site-header__animation-list--active":e.currentVersion===y}),onClick:$=>e.open(o)},{default:E(()=>[Q(C(y),1)]),_:2},1032,["class","onClick"])),[[t]])),128))],4),[[D,e.isOpenVersionsMenu]])]),_:1})],32)):M("",!0),e.playground?b((s(),c("a",{key:1,class:"varlet-site-header__link",target:"_blank",href:e.playground},[m(g,{name:"code-json",size:24})],8,we)),[[t]]):M("",!0),e.github?b((s(),c("a",{key:2,class:"varlet-site-header__link",target:"_blank",href:e.github},[m(g,{name:"github",size:28})],8,ke)),[[t]]):M("",!0),e.darkMode?b((s(),c("div",{key:3,class:"varlet-site-header__theme",onClick:n[3]||(n[3]=(...o)=>e.toggleTheme&&e.toggleTheme(...o))},[m(g,{size:"26px",name:e.currentTheme==="lightTheme"?"white-balance-sunny":"weather-night",style:B({marginBottom:e.currentTheme==="darkTheme"&&"2px",marginTop:e.currentTheme==="lightTheme"&&"2px"})},null,8,["name","style"])])),[[t]]):M("",!0),e.languages?(s(),c("div",{key:4,class:"varlet-site-header__language",onMouseenter:n[4]||(n[4]=o=>e.isOpenLanguageMenu=!0),onMouseleave:n[5]||(n[5]=o=>e.isOpenLanguageMenu=!1)},[m(g,{name:"translate",size:"26px"}),m(g,{name:"chevron-down"}),m(Y,{name:"fade"},{default:E(()=>[b(_("div",{class:"varlet-site-header__animation-list var-site-elevation--5",style:B({pointerEvents:e.isOpenLanguageMenu?"auto":"none"})},[(s(!0),c(V,null,P(e.nonEmptyLanguages,(o,y)=>b((s(),H(l,{key:y,class:A({"varlet-site-header__animation-list--active":e.language===y}),onClick:$=>e.handleLanguageChange(y)},{default:E(()=>[Q(C(o),1)]),_:2},1032,["class","onClick"])),[[t]])),128))],4),[[D,e.isOpenLanguageMenu]])]),_:1})],32)):M("",!0)])])}const Me=U(he,[["render",$e],["__scopeId","data-v-8b392715"]]),Ce=W({name:"AppSidebar",props:{menu:{type:Array},menuName:{type:String},language:{type:String}},emits:["change"],setup(e,{emit:n}){return{menuTypes:te(j),changeRoute:u=>{u.type===j.TITLE||e.menuName===u.doc||n("change",u)}}}});const Ee=e=>(se("data-v-d3ae8392"),e=e(),oe(),e),Le={class:"varlet-site-sidebar var-elevation--3"},Ne=Ee(()=>_("span",{class:"varlet-site-sidebar__indicator"},null,-1)),Se={key:0,class:"varlet-site-sidebar__item--title"},Ie={key:1};function Ve(e,n,h,k,u,T){const f=L("var-cell"),g=X("ripple");return s(),c("div",Le,[(s(!0),c(V,null,P(e.menu,(l,t)=>b((s(),H(f,{class:A(["varlet-site-sidebar__item",{"varlet-site-sidebar__item--active":l.doc===e.menuName,"varlet-site-sidebar__link":l.type!==e.menuTypes.TITLE,"varlet-site-sidebar__title":l.type===e.menuTypes.TITLE}]),id:l.doc,key:t,onClick:o=>e.changeRoute(l)},{default:E(()=>[Ne,l.type===e.menuTypes.TITLE?(s(),c("span",Se,C(l.text[e.language]),1)):(s(),c("span",Ie,C(l.text[e.language]),1))]),_:2},1032,["id","class","onClick"])),[[g,{disabled:l.type===e.menuTypes.TITLE}]])),128))])}const Ae=U(Ce,[["render",Ve],["__scopeId","data-v-d3ae8392"]]),Oe={class:"varlet-site"},Re={class:"varlet-site-content"},Be={class:"varlet-site-playground-container"},ze=["src"],Ue=W({setup(e){const n=i(p(r,"pc.menu",[])),h=i(p(r,"useMobile")),k=p(r,"mobile.redirect"),u=i(""),T=i(null),f=i(""),g=i(null),l=ie(),t=a=>{const d=n.value.find(w=>w.doc===a);return(d==null?void 0:d.type)===j.COMPONENT?a:k.slice(1)},o=()=>{const{menuName:a}=I();ce(()=>{const d=document.querySelector(".varlet-site-sidebar").getElementsByClassName("var-site-cell"),w=n.value.findIndex(N=>N.doc===a);w!==-1&&d[w].scrollIntoView({block:"center",inline:"start"})})},y=a=>{g.value.scrollTop=0,T.value=t(a.doc),f.value=a.doc},$=()=>{const a="VARLET_UI_PLAYGROUND_HAS_BEEN_CLOSED";!localStorage.getItem(a)&&!window.confirm("The code will no longer be saved after closing. Are you sure you want to close?")||(localStorage.setItem(a,"true"),z.showPlayground=!1)};return le(()=>{o(),window.addEventListener("message",a=>{const{data:d}=a;d.action==="playground-close"&&$()})}),re(()=>l.path,()=>{const{language:a,menuName:d}=I();!a||!d||(T.value=t(d),f.value=d,u.value=a,document.title=p(r,"pc.title")[a])},{immediate:!0}),(a,d)=>{const w=L("router-view"),N=L("var-popup");return s(),c(V,null,[_("div",Oe,[m(Me,{language:u.value},null,8,["language"]),_("div",Re,[m(Ae,{language:u.value,menu:n.value,"menu-name":f.value,onChange:y},null,8,["language","menu","menu-name"]),_("div",{class:A(["varlet-site-doc-container",[!h.value&&"varlet-site-doc-container--pc-only"]]),ref_key:"doc",ref:g},[m(w)],2),b(m(_e,{"component-name":T.value,language:u.value,replace:f.value},null,8,["component-name","language","replace"]),[[D,h.value]])])]),m(N,{position:"right",show:J(z).showPlayground,onClickOverlay:$},{default:E(()=>[_("div",Be,[_("iframe",{id:"playground",class:"varlet-site-playground-iframe",src:J(z).playgroundURL,allow:"clipboard-write"},`
      `,8,ze)])]),_:1},8,["show"])],64)}}});export{Ue as default};
