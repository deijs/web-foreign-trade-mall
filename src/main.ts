import type { UserModule } from './types'
// @ts-expect-error i18n-jsautotranslate
import translate from 'i18n-jsautotranslate'
import { setupLayouts } from 'virtual:generated-layouts'
import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'

import App from './App.vue'
import '@unocss/reset/tailwind.css'
import './styles/main.css'

import 'uno.css'
// @ts-expect-error translate
window.translate = translate // 方便审核元素用控制台调试
translate.service.use('client.edge') // 翻译通道
translate.whole.enableAll() // 整体翻译
// 页面渲染完毕后触发执行 translate.execute();
nextTick(() => {
  // 网页ajax请求触发自动翻译
  translate.request.listener.start()
  translate.selectLanguageTag.show = false
  translate.execute()
  setTimeout(() => {
    // vue的input中的placeholder属性会在nextTick之后延迟渲染，而这个属性是没有别的方式来监听的，所以额外加一个定时器
    translate.execute()
  }, 500)
  translate.listener.start() // 开启html页面变化的监控
})
onUpdated(() => {
  translate.execute()
})

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {
    routes: setupLayouts(routes),
    base: import.meta.env.BASE_URL,
  },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    // ctx.app.use(Previewer)
  },
)
