import{_ as o,p as n,f as r,h as p,M as t,q as a,S as e,P as s,aq as c}from"./vue-router-c6b020dd.js";const h={components:{}},i={class:"varlet-site-doc"},j=t("h1",null,"文件上传",-1),u={class:"card"},g={id:"介绍"},m=t("p",null,[s("提供了文件读取、图片/视频预览能力。 通过监听 "),t("code",null,"after-read"),s(" 事件获取文件上传服务器。")],-1),f={class:"card"},_={id:"基本使用"},v=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleAfterRead"),s("("),t("span",{class:"hljs-params"},"file"),s(") ")]),s(`{ 
  `),t("span",{class:"hljs-built_in"},"console"),s(`.log(file)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(" @"),t("span",{class:"hljs-attr"},"after-read"),s("="),t("span",{class:"hljs-string"},'"handleAfterRead"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b={class:"card"},y={id:"文件预览"},w=t("p",null,"通过分析文件的 url 后缀名判断文件类型，支持图片和视频预览。",-1),k=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`
  },
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://www.runoob.com/try/demo_source/mov_bbb.mp4'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cover.jpg'"),s(`
  }
])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x={class:"card"},V={id:"上传状态"},F=t("p",null,[s("提供了 "),t("code",null,"loading"),s("、 "),t("code",null,"success"),s("、 "),t("code",null,"error"),s(" 三种上传状态，并提供了工具函数快速获取对应状态的文件。")],-1),z=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'loading'"),s(`
  },
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'success'"),s(`
  },
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'error'"),s(`
  }
])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleAfterRead"),s("("),t("span",{class:"hljs-params"},"file"),s(") ")]),s(`{
  file.state = `),t("span",{class:"hljs-string"},"'loading'"),s(`

  `),t("span",{class:"hljs-built_in"},"setTimeout"),s("("),t("span",{class:"hljs-function"},"() =>"),s(` {
    file.state = `),t("span",{class:"hljs-string"},"'success'"),s(`
  }, `),t("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(" @"),t("span",{class:"hljs-attr"},"after-read"),s("="),t("span",{class:"hljs-string"},'"handleAfterRead"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),R={class:"card"},S={id:"文件数量限制"},B=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(),t("span",{class:"hljs-attr"},":maxlength"),s("="),t("span",{class:"hljs-string"},'"1"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),A={class:"card"},C={id:"文件大小限制"},N=t("p",null,[s("超过限制会被阻止读取，可以通过监听 "),t("code",null,"oversize"),s(" 事件获取文件。")],-1),P=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(),t("span",{class:"hljs-attr"},":maxsize"),s("="),t("span",{class:"hljs-string"},'"1024"'),s(" @"),t("span",{class:"hljs-attr"},"oversize"),s("="),t("span",{class:"hljs-string"},`"Snackbar.warning('文件大小超出限制')"`),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),E={class:"card"},U={id:"上传预处理"},$=t("p",null,[s("通过注册 "),t("code",null,"before-read"),s(" 事件对文件进行操作，返回假值阻止文件读取。")],-1),M=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleBeforeRead"),s("("),t("span",{class:"hljs-params"},"file"),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"if"),s(" (file.file.size <= "),t("span",{class:"hljs-number"},"1"),s(" * "),t("span",{class:"hljs-number"},"1024"),s(" * "),t("span",{class:"hljs-number"},"1024"),s(`) {
    Snackbar.success(`),t("span",{class:"hljs-string"},"'文件小于1M，上传成功'"),s(`)
    `),t("span",{class:"hljs-keyword"},"return"),s(),t("span",{class:"hljs-literal"},"true"),s(`
  } `),t("span",{class:"hljs-keyword"},"else"),s(` {
    Snackbar.warning(`),t("span",{class:"hljs-string"},"'文件大于1M，不能上传'"),s(`)
    `),t("span",{class:"hljs-keyword"},"return"),s(),t("span",{class:"hljs-literal"},"false"),s(`
  }
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(" @"),t("span",{class:"hljs-attr"},"before-read"),s("="),t("span",{class:"hljs-string"},'"handleBeforeRead"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),T={class:"card"},q={id:"禁用"},D=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"disabled"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),L={class:"card"},I={id:"只读"},G=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"readonly"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),H={class:"card"},J={id:"删除前处理"},K=t("p",null,[s("删除文件之前会触发 "),t("code",null,"before-remove"),s(" 事件，返回假值阻止删除操作。")],-1),O=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Dialog } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`
  }
])

`),t("span",{class:"hljs-keyword"},"async"),s(),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleBeforeRemove"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"const"),s(" action = "),t("span",{class:"hljs-keyword"},"await"),s(` Dialog({
    `),t("span",{class:"hljs-attr"},"title"),s(": "),t("span",{class:"hljs-string"},"'是否删除?'"),s(`,
    `),t("span",{class:"hljs-attr"},"message"),s(": "),t("span",{class:"hljs-string"},"'删除后无法撤回'"),s(`
  })

  `),t("span",{class:"hljs-keyword"},"return"),s(" action === "),t("span",{class:"hljs-string"},"'confirm'"),s(`
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(" @"),t("span",{class:"hljs-attr"},"before-remove"),s("="),t("span",{class:"hljs-string"},'"handleBeforeRemove"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Q={class:"card"},W={id:"自定义上传样式"},X=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref()
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("上传"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-uploader"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Y={class:"card"},Z={id:"字段校验"},ss=t("p",null,[s("通过传入一个校验器数组可以对值进行校验，校验器返回 "),t("code",null,"true"),s(" 则为校验通过。 以外的值将转换为文本作为用户提示。 第二个参数是一个工具函数集合，可以快速获取符合状态的文件集合。")],-1),ts=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'error'"),s(`,
  },
])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(`
    `),t("span",{class:"hljs-attr"},":rules"),s("="),t("span",{class:"hljs-string"},`"[(v, u) => u.getError().length === 0 || '存在上传失败的文件']"`),s(`
    `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),as={class:"card"},es={id:"自定义渲染"},ls=t("p",null,[s("通过 "),t("code",null,"hide-list"),s(" 隐藏组件的文件列表，自定义文件列表的渲染逻辑。")],-1),ds=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'loading'"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'success'"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'error'"),s(`,
  },
])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"img"),s(`
      `),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"uploader-example-file"'),s(`
      `),t("span",{class:"hljs-attr"},"v-for"),s("="),t("span",{class:"hljs-string"},'"f in files"'),s(`
      `),t("span",{class:"hljs-attr"},":key"),s("="),t("span",{class:"hljs-string"},'"f.id"'),s(`
      `),t("span",{class:"hljs-attr"},":src"),s("="),t("span",{class:"hljs-string"},'"f.cover"'),s(`
    />`)]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"hide-list"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"round"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},":size"),s("="),t("span",{class:"hljs-string"},'"28"'),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"upload"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-uploader"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"style"),s(">")]),t("span",{class:"css"},[s(`
`),t("span",{class:"hljs-selector-class"},".uploader-example-file"),s(` {
  `),t("span",{class:"hljs-attribute"},"width"),s(": "),t("span",{class:"hljs-number"},"40px"),s(`;
  `),t("span",{class:"hljs-attribute"},"height"),s(": "),t("span",{class:"hljs-number"},"40px"),s(`;
  `),t("span",{class:"hljs-attribute"},"border-radius"),s(": "),t("span",{class:"hljs-number"},"50%"),s(`;
  `),t("span",{class:"hljs-attribute"},"font-size"),s(": "),t("span",{class:"hljs-number"},"12px"),s(`;
  `),t("span",{class:"hljs-attribute"},"object-fit"),s(`: cover;
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),cs=t("h2",null,"API",-1),ns={class:"card"},os={id:"属性"},rs=c("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>文件列表</td><td><em>VarFile[]</em></td><td><code>[]</code></td></tr><tr><td><code>accept</code></td><td>接受的文件类型，与原生属性一致</td><td><em>string</em></td><td><code>image/*</code></td></tr><tr><td><code>capture</code></td><td>获取文件方式，与原生属性一致</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>multiple</code></td><td>是否多选文件</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>elevation</code></td><td>海拔高度，可选值为 <code>true</code> <code>false</code> 和 <code>0-24</code> 的等级, 不为简单模式时生效</td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>removable</code></td><td>是否可以删除</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>maxlength</code></td><td>最大文件个数</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>maxsize</code></td><td>最大文件大小</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>previewed</code></td><td>是否允许预览</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>ripple</code></td><td>是否开启水波纹</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hide-list</code></td><td>是否隐藏文件列表</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>触发验证的时机， 可选值为 <code>onChange</code> <code>onRemove</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onChange&#39;, &#39;onRemove&#39;]</code></td></tr><tr><td><code>rules</code></td><td>验证规则，返回 <code>true</code> 表示验证通过，其余的值则转换为文本作为用户提示</td><td><em>Array&lt;(v: VarFile, u: VarFileUtils) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table>",1),ps={class:"card"},hs={id:"VarFile"},is=c("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>file</code></td><td>原生文件</td><td><em>File</em></td><td><code>-</code></td></tr><tr><td><code>name</code></td><td>文件名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>url</code></td><td>文件地址</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cover</code></td><td>封面图</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>fit</code></td><td>封面图填充模式，可选值为 <code>fill</code> <code>contain</code> <code>cover</code> <code>none</code> <code>scale-down</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>state</code></td><td>文件上传状态，可选值为 <code>loading</code> <code>success</code> <code>error</code></td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table>",1),js={class:"card"},us={id:"VarFileUtils"},gs=c("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>获取 <code>state</code> 等于 <code>loading</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>获取 <code>state</code> 等于 <code>success</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>获取 <code>state</code> 等于 <code>error</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr></tbody></table>",1),ms={class:"card"},fs={id:"方法"},_s=c("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>chooseFile</code></td><td>触发选择文件动作，显示文件列表</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>closePreview</code></td><td>关闭预览文件弹出层</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>getLoading</code></td><td>获取 <code>state</code> 等于 <code>loading</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>获取 <code>state</code> 等于 <code>success</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>获取 <code>state</code> 等于 <code>error</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>validate</code></td><td>触发校验</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>清空校验信息</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>清空绑定的值(设置为 <code>[]</code>)和校验信息</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",1),vs={class:"card"},bs={id:"事件"},ys=c("<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>before-read</code></td><td>文件读取前触发，返回假值阻止文件读取(支持 promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>after-read</code></td><td>文件读取后触发</td><td><code>file: VarFile</code></td></tr><tr><td><code>oversize</code></td><td>文件超过限制大小时触发</td><td><code>file: VarFile</code></td></tr><tr><td><code>before-remove</code></td><td>文件删除前触发，返回假值阻止文件删除(支持 promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>remove</code></td><td>文件删除时触发</td><td><code>file: VarFile</code></td></tr></tbody></table>",1),ws={class:"card"},ks={id:"插槽"},xs=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"插槽名"),t("th",null,"说明"),t("th",null,"参数")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"default")]),t("td",null,"上传按钮内容"),t("td",null,[t("code",null,"-")])])])],-1),Vs={class:"card"},Fs={id:"样式变量"},zs=c('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--uploader-action-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-action-icon-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-action-icon-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-action-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-size</code></td><td><code>80px</code></td></tr><tr><td><code>--uploader-file-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-name-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-file-name-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-file-name-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--uploader-file-name-padding</code></td><td><code>10px</code></td></tr><tr><td><code>--uploader-file-text-align</code></td><td><code>center</code></td></tr><tr><td><code>--uploader-file-close-background</code></td><td><code>rgba(0, 0, 0, 0.3)</code></td></tr><tr><td><code>--uploader-file-close-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-file-close-icon-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--uploader-file-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--uploader-file-cover-fit</code></td><td><code>cover</code></td></tr><tr><td><code>--uploader-file-cover-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-preview-video-width</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-preview-video-height</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-file-indicator-height</code></td><td><code>4px</code></td></tr><tr><td><code>--uploader-file-indicator-normal-color</code></td><td><code>var(--color-disabled)</code></td></tr><tr><td><code>--uploader-file-indicator-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--uploader-file-indicator-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--uploader-disabled-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--uploader-disabled-text-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--uploader-loading-background</code></td><td><code>linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))</code></td></tr></tbody></table>',2);function Rs(Ss,Bs,As,Cs,Ns,Ps){const l=n("router-link"),d=n("var-site-code-example");return r(),p("div",i,[j,t("div",u,[t("h3",g,[a(l,{to:"#介绍"},{default:e(()=>[s("#")]),_:1}),s("介绍")]),m]),t("div",f,[t("h3",_,[a(l,{to:"#基本使用"},{default:e(()=>[s("#")]),_:1}),s("基本使用")]),a(d,null,{default:e(()=>[v]),_:1})]),t("div",b,[t("h3",y,[a(l,{to:"#文件预览"},{default:e(()=>[s("#")]),_:1}),s("文件预览")]),w,a(d,null,{default:e(()=>[k]),_:1})]),t("div",x,[t("h3",V,[a(l,{to:"#上传状态"},{default:e(()=>[s("#")]),_:1}),s("上传状态")]),F,a(d,null,{default:e(()=>[z]),_:1})]),t("div",R,[t("h3",S,[a(l,{to:"#文件数量限制"},{default:e(()=>[s("#")]),_:1}),s("文件数量限制")]),a(d,null,{default:e(()=>[B]),_:1})]),t("div",A,[t("h3",C,[a(l,{to:"#文件大小限制"},{default:e(()=>[s("#")]),_:1}),s("文件大小限制")]),N,a(d,null,{default:e(()=>[P]),_:1})]),t("div",E,[t("h3",U,[a(l,{to:"#上传预处理"},{default:e(()=>[s("#")]),_:1}),s("上传预处理")]),$,a(d,null,{default:e(()=>[M]),_:1})]),t("div",T,[t("h3",q,[a(l,{to:"#禁用"},{default:e(()=>[s("#")]),_:1}),s("禁用")]),a(d,null,{default:e(()=>[D]),_:1})]),t("div",L,[t("h3",I,[a(l,{to:"#只读"},{default:e(()=>[s("#")]),_:1}),s("只读")]),a(d,null,{default:e(()=>[G]),_:1})]),t("div",H,[t("h3",J,[a(l,{to:"#删除前处理"},{default:e(()=>[s("#")]),_:1}),s("删除前处理")]),K,a(d,null,{default:e(()=>[O]),_:1})]),t("div",Q,[t("h3",W,[a(l,{to:"#自定义上传样式"},{default:e(()=>[s("#")]),_:1}),s("自定义上传样式")]),a(d,null,{default:e(()=>[X]),_:1})]),t("div",Y,[t("h3",Z,[a(l,{to:"#字段校验"},{default:e(()=>[s("#")]),_:1}),s("字段校验")]),ss,a(d,null,{default:e(()=>[ts]),_:1})]),t("div",as,[t("h3",es,[a(l,{to:"#自定义渲染"},{default:e(()=>[s("#")]),_:1}),s("自定义渲染")]),ls,a(d,null,{default:e(()=>[ds]),_:1})]),cs,t("div",ns,[t("h3",os,[a(l,{to:"#属性"},{default:e(()=>[s("#")]),_:1}),s("属性")]),rs]),t("div",ps,[t("h3",hs,[a(l,{to:"#VarFile"},{default:e(()=>[s("#")]),_:1}),s("VarFile")]),is]),t("div",js,[t("h3",us,[a(l,{to:"#VarFileUtils"},{default:e(()=>[s("#")]),_:1}),s("VarFileUtils")]),gs]),t("div",ms,[t("h3",fs,[a(l,{to:"#方法"},{default:e(()=>[s("#")]),_:1}),s("方法")]),_s]),t("div",vs,[t("h3",bs,[a(l,{to:"#事件"},{default:e(()=>[s("#")]),_:1}),s("事件")]),ys]),t("div",ws,[t("h3",ks,[a(l,{to:"#插槽"},{default:e(()=>[s("#")]),_:1}),s("插槽")]),xs]),t("div",Vs,[t("h3",Fs,[a(l,{to:"#样式变量"},{default:e(()=>[s("#")]),_:1}),s("样式变量")]),zs])])}const Us=o(h,[["render",Rs]]);export{Us as default};
