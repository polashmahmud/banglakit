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
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/polashmahmud/php" },
      {
        icon: "facebook",
        link: "https://www.facebook.com/learnwithpolashmahmud",
      },
      { icon: "youtube", link: "https://www.youtube.com/polashmahmud4" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/polashmahmud4/" },
      { icon: "discord", link: "https://discord.gg/mktPP7n9xp" },
      { icon: "x", link: "https://twitter.com/polashmahmud4" },
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
