import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  title: "BanglaKit",
  description: "A Bengali UI toolkit for PHP developers.",
  base: "/banglakit/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/install' }
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Installation', link: '/install' },
          { text: 'Date & Time', link: '/date-and-time' },
          { text: 'Number Converter', link: '/number-converter' },
          { text: 'In Words', link: '/in-words' },
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/polashmahmud/" },
      {
        icon: "facebook",
        link: "https://www.facebook.com/polashmahmud4",
      },
      { icon: "youtube", link: "https://www.youtube.com/polashmahmud4" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/polashmahmud4/" }
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present Polash Mahmud",
    },

    search: {
      provider: "local",
    },
  },
})
