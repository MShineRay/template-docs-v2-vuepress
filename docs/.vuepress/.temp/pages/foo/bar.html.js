export const data = {
  "key": "v-7ccc7148",
  "path": "/foo/bar.html",
  "title": "foo/bar.md",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1647699571000,
    "contributors": [
      {
        "name": "msr",
        "email": "mshineray@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "foo/bar.md"
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
