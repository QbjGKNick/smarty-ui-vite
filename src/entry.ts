import { App } from 'vue'
import SButton from './button'
import SFCButton from './SFCButton.vue'
import JSXButton from './JSXButton'

// 导出单独组件
export { SButton, SFCButton, JSXButton }

// 编写一个插件，实现一个 install 方法

export default {
  install (app: App) {
    app.component(SButton.name, SButton)
    app.component(SFCButton.name, SFCButton)
    app.component(JSXButton.name, JSXButton)
  }
}