export const data = {
  "key": "v-7444d4f5",
  "path": "/bar/",
  "title": "bar/README.md",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1647701225000,
    "contributors": [
      {
        "name": "msr",
        "email": "mshineray@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "bar/README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
