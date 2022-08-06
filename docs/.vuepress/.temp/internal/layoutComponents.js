import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/wk/note/docs/.vuepress/theme/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/wk/note/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
