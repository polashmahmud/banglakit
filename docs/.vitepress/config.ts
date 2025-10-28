import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  title: "বাংলা কিট",
  description: "একটি পূর্ণাঙ্গ বাংলা ডেভেলপমেন্ট কিট।",
  base: "/banglakit/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'হোম পেজ', link: '/' },
      { text: 'ডকুমেন্টেশন', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'ডকুমেন্টেশন',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
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
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap',
        rel: 'stylesheet'
      }
    ],
  ],
})
