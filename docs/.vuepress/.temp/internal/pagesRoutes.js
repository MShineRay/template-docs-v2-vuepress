import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"Hello VuePress"},["/index.html","/README.md"]],
  ["v-7ccc7148","/foo/bar.html",{"title":"foo/bar.md"},["/foo/bar","/foo/bar.md"]],
  ["v-7444d4f5","/bar/",{"title":"bar/README.md"},["/bar/index.html","/bar/README.md"]],
  ["v-fffb8e28","/guide/",{"title":"guide/README.md"},["/guide/index.html","/guide/README.md"]],
  ["v-fb0f0066","/guide/getting-started.html",{"title":"guide/getting-started.md"},["/guide/getting-started","/guide/getting-started.md"]],
  ["v-a951be94","/reference/cli.html",{"title":"reference/cli.md"},["/reference/cli","/reference/cli.md"]],
  ["v-b249668c","/reference/config.html",{"title":"reference/config.md"},["/reference/config","/reference/config.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
