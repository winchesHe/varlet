import{_ as o,p as c,f as r,h,M as s,q as a,S as t,P as l,aq as d}from"./vue-router-c6b020dd.js";const p={components:{}},i={class:"varlet-site-doc"},j=s("h1",null,"下拉刷新",-1),u={class:"card"},m={id:"介绍"},f=s("p",null,"用于提供下拉刷新的交互操作。",-1),_={class:"card"},g={id:"基本使用"},v=s("p",null,[l("下拉到刷新位置时松开会触发 "),s("code",null,"refresh"),l(" 事件， 在事件开始时将 "),s("code",null,"v-model"),l(" 设置为 "),s("code",null,"true"),l(" 表示正在加载，完成后将 "),s("code",null,"v-model"),l(" 设置为 "),s("code",null,"false"),l(" 表示加载结束。")],-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"script"),l(),s("span",{class:"hljs-attr"},"setup"),l(">")]),s("span",{class:"javascript"},[l(`
`),s("span",{class:"hljs-keyword"},"import"),l(" { ref } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'vue'"),l(`

`),s("span",{class:"hljs-keyword"},"const"),l(" data1 = "),s("span",{class:"hljs-built_in"},"Array"),l("("),s("span",{class:"hljs-number"},"30"),l(").fill("),s("span",{class:"hljs-string"},"'List Item'"),l(`)
`),s("span",{class:"hljs-keyword"},"const"),l(" data2 = "),s("span",{class:"hljs-built_in"},"Array"),l("("),s("span",{class:"hljs-number"},"30"),l(").fill("),s("span",{class:"hljs-string"},"'This is new List Item'"),l(`)
`),s("span",{class:"hljs-keyword"},"const"),l(" isRefresh = ref("),s("span",{class:"hljs-literal"},"false"),l(`)
`),s("span",{class:"hljs-keyword"},"const"),l(` data = ref(data1)

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title"},"refresh"),l("("),s("span",{class:"hljs-params"}),l(") ")]),l(`{
  `),s("span",{class:"hljs-built_in"},"setTimeout"),l("("),s("span",{class:"hljs-function"},"() =>"),l(` {
    data.value = data.value[`),s("span",{class:"hljs-number"},"0"),l("] === "),s("span",{class:"hljs-string"},"'List Item'"),l(` ? data2 : data1
    isRefresh.value = `),s("span",{class:"hljs-literal"},"false"),l(`
  }, `),s("span",{class:"hljs-number"},"2000"),l(`)
}
`)]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"script"),l(">")]),l(`

`),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"template"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(),s("span",{class:"hljs-attr"},"v-model"),l("="),s("span",{class:"hljs-string"},'"isRefresh"'),l(" @"),s("span",{class:"hljs-attr"},"refresh"),l("="),s("span",{class:"hljs-string"},'"refresh"'),l(">")]),l(`
    `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-cell"),l(`
      `),s("span",{class:"hljs-attr"},"v-for"),l("="),s("span",{class:"hljs-string"},'"(item, index) in data"'),l(`
      `),s("span",{class:"hljs-attr"},":key"),l("="),s("span",{class:"hljs-string"},'"index"'),l(`
      `),s("span",{class:"hljs-attr"},"border"),l(`
    >`)]),l(`
      {{ item + ' ' + (index + 1) }}
    `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-cell"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(">")]),l(`
`),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"template"),l(">")]),l(`
`)])],-1),y={class:"card"},k={id:"组合"},w=s("p",null,[l("与 "),s("code",null,"List"),l(" 组件结合使用即可实现上拉加载和下拉刷新的功能，需保证 "),s("code",null,"PullRefresh"),l(" 容器高度不为 "),s("code",null,"0"),l("。")],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"script"),l(),s("span",{class:"hljs-attr"},"setup"),l(">")]),s("span",{class:"javascript"},[l(`
`),s("span",{class:"hljs-keyword"},"import"),l(" { ref } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'vue'"),l(`

`),s("span",{class:"hljs-keyword"},"const"),l(" refreshing = ref("),s("span",{class:"hljs-literal"},"false"),l(`)
`),s("span",{class:"hljs-keyword"},"const"),l(" loading = ref("),s("span",{class:"hljs-literal"},"false"),l(`)
`),s("span",{class:"hljs-keyword"},"const"),l(` list = ref([])

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title"},"refresh"),l("("),s("span",{class:"hljs-params"}),l(") ")]),l(`{
  `),s("span",{class:"hljs-built_in"},"setTimeout"),l("("),s("span",{class:"hljs-function"},"() =>"),l(` {
    `),s("span",{class:"hljs-built_in"},"console"),l(".log("),s("span",{class:"hljs-string"},"'refresh'"),l(`)
    refreshing.value = `),s("span",{class:"hljs-literal"},"false"),l(`
  }, `),s("span",{class:"hljs-number"},"2000"),l(`)
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title"},"load"),l("("),s("span",{class:"hljs-params"}),l(") ")]),l(`{
  `),s("span",{class:"hljs-built_in"},"setTimeout"),l("("),s("span",{class:"hljs-function"},"() =>"),l(` {
    `),s("span",{class:"hljs-keyword"},"for"),l(" ("),s("span",{class:"hljs-keyword"},"let"),l(" i = "),s("span",{class:"hljs-number"},"0"),l("; i < "),s("span",{class:"hljs-number"},"20"),l(`; i++) {
      list.value.push(list.value.length + `),s("span",{class:"hljs-number"},"1"),l(`)
    }
    
    loading.value = `),s("span",{class:"hljs-literal"},"false"),l(`
  }, `),s("span",{class:"hljs-number"},"1000"),l(`)
}
`)]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"script"),l(">")]),l(`

`),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"template"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(),s("span",{class:"hljs-attr"},"v-model"),l("="),s("span",{class:"hljs-string"},'"refreshing"'),l(" @"),s("span",{class:"hljs-attr"},"refresh"),l("="),s("span",{class:"hljs-string"},'"refresh"'),l(">")]),l(`
    `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-list"),l(),s("span",{class:"hljs-attr"},"v-model:loading"),l("="),s("span",{class:"hljs-string"},'"loading"'),l(" @"),s("span",{class:"hljs-attr"},"load"),l("="),s("span",{class:"hljs-string"},'"load"'),l(">")]),l(`
      `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-cell"),l(),s("span",{class:"hljs-attr"},":key"),l("="),s("span",{class:"hljs-string"},'"d"'),l(),s("span",{class:"hljs-attr"},"v-for"),l("="),s("span",{class:"hljs-string"},'"d in list"'),l(">")]),l("ListItem {{ d }}"),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-cell"),l(">")]),l(`
    `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-list"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(">")]),l(`
`),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"template"),l(">")]),l(`
`)])],-1),C={class:"card"},L={id:"注意"},N=s("p",null,[l("当 "),s("code",null,"PullRefresh"),l(" 容器高度为 "),s("code",null,"0"),l(" 时会导致下拉功能失效，所以需保证其子元素高度"),s("strong",null,"不为"),l(),s("code",null,"0"),l(" 或为 "),s("code",null,"PullRefresh"),l(" 容器设置高度:")],-1),P=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"template"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(">")]),l(`
    `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"div"),l(),s("span",{class:"hljs-attr"},"style"),l("="),s("span",{class:"hljs-string"},'"height: 200px"'),l(">")]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"div"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(">")]),l(`

  `),s("span",{class:"hljs-comment"},"<!-- 或 -->"),l(`
  
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(),s("span",{class:"hljs-attr"},"style"),l("="),s("span",{class:"hljs-string"},'"height: 200px"'),l(">")]),l(`
    `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"div"),l(">")]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"div"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(">")]),l(`
`),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"template"),l(">")]),l(`
`)])],-1),R=s("h2",null,"API",-1),T={class:"card"},A={id:"属性"},I=d("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>是否处于加载中状态</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用下拉刷新</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>target</code></td><td>触发滚动的对象，如果为 undefined 会监听距离最近的一个可滚动的祖先节点</td><td><em>string | HTMLElement</em></td><td><code>-</code></td></tr><tr><td><code>animation-duration</code></td><td>加载结束后回到初始位置的动画时长（ms）</td><td><em>string | number</em></td><td><code>300</code></td></tr><tr><td><code>success-duration</code></td><td>成功提示展示时长（ms）</td><td><em>string | number</em></td><td><code>2000</code></td></tr><tr><td><code>bg-color</code></td><td>control 的背景颜色</td><td><em>string</em></td><td><code>#005CAF</code></td></tr><tr><td><code>color</code></td><td>control 的颜色</td><td><em>string</em></td><td><code>#ffffff</code></td></tr><tr><td><code>success-bg-color</code></td><td>成功状态下 control 的背景颜色</td><td><em>string</em></td><td><code>#4CAF50</code></td></tr><tr><td><code>success-color</code></td><td>成功状态下 control 的颜色</td><td><em>string</em></td><td><code>ffffff</code></td></tr></tbody></table>",1),z={class:"card"},V={id:"事件"},$=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"事件名"),s("th",null,"说明"),s("th",null,"回调参数")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"refresh")]),s("td",null,"下拉刷新时触发"),s("td",null,[s("code",null,"-")])])])],-1),B={class:"card"},S={id:"插槽"},q=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"名称"),s("th",null,"说明"),s("th",null,"参数")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"default")]),s("td",null,"默认插槽"),s("td",null,[s("code",null,"-")])])])],-1),E={class:"card"},F={id:"样式变量"},M=d('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--pull-refresh-size</code></td><td><code>40px</code></td></tr><tr><td><code>--pull-refresh-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--pull-refresh-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pull-refresh-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--pull-refresh-icon-size</code></td><td><code>25px</code></td></tr></tbody></table>',2);function H(D,G,J,K,O,Q){const n=c("router-link"),e=c("var-site-code-example");return r(),h("div",i,[j,s("div",u,[s("h3",m,[a(n,{to:"#介绍"},{default:t(()=>[l("#")]),_:1}),l("介绍")]),f]),s("div",_,[s("h3",g,[a(n,{to:"#基本使用"},{default:t(()=>[l("#")]),_:1}),l("基本使用")]),v,a(e,null,{default:t(()=>[b]),_:1})]),s("div",y,[s("h3",k,[a(n,{to:"#组合"},{default:t(()=>[l("#")]),_:1}),l("组合")]),w,a(e,null,{default:t(()=>[x]),_:1})]),s("div",C,[s("h3",L,[a(n,{to:"#注意"},{default:t(()=>[l("#")]),_:1}),l("注意")]),N,a(e,{"playground-ignore":""},{default:t(()=>[P]),_:1})]),R,s("div",T,[s("h3",A,[a(n,{to:"#属性"},{default:t(()=>[l("#")]),_:1}),l("属性")]),I]),s("div",z,[s("h3",V,[a(n,{to:"#事件"},{default:t(()=>[l("#")]),_:1}),l("事件")]),$]),s("div",B,[s("h3",S,[a(n,{to:"#插槽"},{default:t(()=>[l("#")]),_:1}),l("插槽")]),q]),s("div",E,[s("h3",F,[a(n,{to:"#样式变量"},{default:t(()=>[l("#")]),_:1}),l("样式变量")]),M])])}const W=o(p,[["render",H]]);export{W as default};
