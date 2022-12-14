import Theme from 'vitepress/dist/client/theme-default'
import SmartyUI from '../../../src/entry'

// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 插件的组件，主要是 demo 组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(SmartyUI)
    app.use(Demo)
    app.use(DemoBlock)
  }
}
