export const themeData = {
  "locales": {
    "/": {
      "selectLanguageName": "English"
    },
    "/zh/": {
      "selectLanguageName": "简体中文"
    }
  },
  "logo": "https://vuejs.org/images/logo.png",
  "navbar": [
    {
      "text": "Group",
      "children": [
        {
          "text": "SubGroup",
          "children": [
            "/group/sub/foo.md",
            "/group/sub/bar.md"
          ]
        }
      ]
    },
    {
      "text": "Group 2",
      "children": [
        {
          "text": "Always active",
          "link": "/",
          "activeMatch": "/"
        },
        {
          "text": "Active on /foo/",
          "link": "/not-foo/",
          "activeMatch": "^/foo/"
        }
      ]
    }
  ],
  "sidebar": [
    {
      "text": "Foo",
      "link": "/foo/",
      "children": [
        {
          "text": "github",
          "link": "https://github.com",
          "children": []
        },
        "/foo/bar.md"
      ]
    },
    "/bar/README.md"
  ],
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
