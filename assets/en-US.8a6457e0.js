import{_ as t}from"./elevation.83e98fef.js";import{e as a,o as c,c as i,a as e,i as n,j as o,m as s}from"./vendor.8243c41e.js";const r={components:{}},h={class:"varlet-site-doc"},d=e("h1",null,"Locale",-1),u=e("div",{class:"card"},[e("h3",null,"Intro"),e("p",null,[s("Component library uses Chinese as the default language, support multi-language switch, built-in support for "),e("code",null,"Chinese"),s(", "),e("code",null,"English"),s(".")])],-1),p={class:"card"},_=e("h3",null,"Multi-language switch",-1),g=e("p",null,[s("The "),e("code",null,"Locale"),s(" component is introduced to realize multi-language switching, and "),e("code",null,"Locale.add"),s(" is used for language extension.")],-1),m=e("pre",{class:"hljs"},[e("code",null,[e("link",{rel:"stylesheet",href:"./highlight.css"}),e("span",{class:"hljs-keyword"},"import"),s(" { Locale } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`),e("span",{class:"hljs-keyword"},"import"),s(" enUS "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'@varlet/ui/es/locale/en-US'"),s(`

Locale.add(`),e("span",{class:"hljs-string"},"'en-US'"),s(`, enUS)
`)])],-1),f=e("p",null,[s("Use "),e("code",null,"Locale.use"),s(" to switch languages.")],-1),j=e("pre",{class:"hljs"},[e("code",null,[e("link",{rel:"stylesheet",href:"./highlight.css"}),s("Locale.use("),e("span",{class:"hljs-string"},"'en-US'"),s(`)
`)])],-1),v=e("p",null,[s("Use "),e("code",null,"Locale.merge"),s(" to merge languages.")],-1),k=e("pre",{class:"hljs"},[e("code",null,[e("link",{rel:"stylesheet",href:"./highlight.css"}),s("Locale.merge("),e("span",{class:"hljs-string"},"'en-US'"),s(`, {
  `),e("span",{class:"hljs-attr"},"dialogTitle"),s(": "),e("span",{class:"hljs-string"},"'Hello'"),s(`
})
`)])],-1);function w(L,U,x,y,S,C){const l=a("var-site-code-example");return c(),i("div",h,[d,u,e("div",p,[_,g,n(l,null,{default:o(()=>[m]),_:1}),f,n(l,null,{default:o(()=>[j]),_:1}),v,n(l,null,{default:o(()=>[k]),_:1})])])}var N=t(r,[["render",w]]);export{N as default};
