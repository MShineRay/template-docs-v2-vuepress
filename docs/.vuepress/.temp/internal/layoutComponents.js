import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/mengxianrui/me/workspace/template-docs-v2-vuepress/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/mengxianrui/me/workspace/template-docs-v2-vuepress/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
