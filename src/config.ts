import type { Site, Ui, Features } from './types'

export const SITE: Site = {
  website: 'https://northzerod.github.io',
  base: '/',
  title: 'NorthZero',
  description:
    'NorthZero\'s Blog',
  author: 'NorthZeroD',
  lang: 'zh-Hans',
  ogLocale: 'zh_CN',
  imageDomains: ['cdn.bsky.app', 'images.unsplash.com'],
}

export const UI: Ui = {
  internalNavs: [
    {
      path: '/blog',
      title: '博客',
      displayMode: 'alwaysText',
      text: '博客',
    },
    {
      path: '/projects',
      title: '项目',
      displayMode: 'alwaysText',
      text: '项目',
    },
    // {
    //   path: '/highlights',
    //   title: 'Highlights',
    //   displayMode: 'iconToTextOnMobile',
    //   text: 'Highlights',
    //   icon: 'i-ri-screenshot-line',
    // },
    {
      path: '/friends',
      title: '友链',
      displayMode: 'iconToTextOnMobile',
      text: '友链',
      icon: 'i-icon-park-outline:friends-circle',
    },
    {
      path: '/photos',
      title: '图集',
      displayMode: 'iconToTextOnMobile',
      text: '图集',
      icon: 'i-material-symbols:photo-library-outline-rounded',
    },
    {
      path: '/shorts',
      title: '章节',
      displayMode: 'iconToTextOnMobile',
      text: '章节',
      icon: 'i-meteor-icons-grid',
    },
    // {
    //   path: '/changelog',
    //   title: 'Changelog',
    //   displayMode: 'iconToTextOnMobile',
    //   text: 'Changelog',
    //   icon: 'i-ri-draft-line',
    // },
  ],
  socialLinks: [
    {
      link: 'https://github.com/NorthZeroD',
      title: '前往我的Github主页',
      displayMode: 'alwaysIcon',
      icon: 'i-uil-github-alt',
    },
    {
      link: 'https://space.bilibili.com/1977584035',
      title: '前往我的Bilibili主页',
      displayMode: 'alwaysIcon',
      icon: 'i-ri-bilibili-fill',
    },
  ],
  navBarLayout: {
    left: [],
    right: [
      'internalNavs',
      'hr',
      'socialLinks',
      'hr',
      'searchButton',
      'themeButton',
      'rssLink',
    ],
    mergeOnMobile: true,
  },
  tabbedLayoutTabs: [
    { title: 'Changelog', path: '/changelog' },
    { title: 'AstroBlog', path: '/feeds' },
    { title: 'AstroStreams', path: '/streams' },
  ],
  groupView: {
    maxGroupColumns: 3,
    showGroupItemColorOnHover: true,
  },
  githubView: {
    monorepos: [
      'withastro/astro',
      'withastro/starlight',
      'lin-stephanie/astro-loaders',
    ],
    mainLogoOverrides: [
      [/starlight/, 'https://starlight.astro.build/favicon.svg'],
    ],
    subLogoMatches: [
      [/theme/, 'i-unjs-theme-colors'],
      [/github/, 'https://github.githubassets.com/favicons/favicon.svg'],
      [/tweet/, 'i-logos-twitter'],
      [/bluesky/, 'i-logos-bluesky'],
    ],
  },
  externalLink: {
    newTab: false,
    cursorType: '',
    showNewTabIcon: false,
  },
  postMetaStyle: 'icon',
}

/**
 * Configures whether to enable special features:
 *  - Set to `false` or `[false, {...}]` to disable the feature.
 *  - Set to `[true, {...}]` to enable and configure the feature.
 */
export const FEATURES: Features = {
  slideEnterAnim: [true, { enterStep: 60 }],
  ogImage: [
    true,
    {
      authorOrBrand: `${SITE.title}`,
      fallbackTitle: `${SITE.description}`,
      fallbackBgType: 'plum',
    },
  ],
  toc: [
    true,
    {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
      displayPosition: 'left',
      displayMode: 'content',
    },
  ],
  share: [
    true,
    {
      twitter: [true, '@ste7lin'],
      bluesky: [true, '@ste7lin.bsky.social'],
      mastodon: false,
      facebook: false,
      pinterest: false,
      reddit: false,
      telegram: false,
      whatsapp: false,
      email: false,
    },
  ],
  giscus: [
    true,
    {
      'data-repo': 'NorthZeroD/northzerod.github.io',
      'data-repo-id': 'R_kgDOPoF7dA',
      'data-category': 'Announcements',
      'data-category-id': 'DIC_kwDOPoF7dM4Cu2we',
      'data-mapping': 'title',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'top',
      'data-lang': 'zh-CN',
    },
  ],
}
