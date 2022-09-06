import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    { text: '通用',
      children: [
        { text: 'Button 按钮', link: '/components/button/' }
      ]
    },
    { text: '导航' },
    { text: '反馈' },
    { text: '数据录入' },
    { text: '数据展示' },
    { text: '布局' }
  ]
}
const config = {
  title: '🔨  Smarty-UI',
  themeConfig: {
    sidebar
  },
  markdown: {
    config: md => {
      // 添加 DemoBlock 插槽
      md.use(demoBlockPlugin)
    }
  }
}
export default config
