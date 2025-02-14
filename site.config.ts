import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'b952f310c30a462da270ad4b8b873224',
  parentPages: [
    'b952f310c30a462da270ad4b8b873224',
    '632735c8655b4a81a396f03748adf486'
  ],

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'posts',
  domain: 'qiuweihong.tech',
  author: 'Qiu Weihong',

  // open graph metadata (optional)
  description:
    'This page contains posts of my coding learning journey with some interesting take aways. It acts as a good point of reference for my future coding career and hopefully it might help some of you out! This page is created using Next.js Notion Starter Kit. It lets me served content typed using Notion into a Next.js webpage with Search engine optimisation. Additionally I am able to use a fantastic tool - notion, as my content management system. It definitely significantly saved me a a lot of time to code one out my own!',

  // social usernames (optional)
  github: 'weihong0827',
  linkedin: 'weihong0225',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/sutdfolio': 'ef02a32a4e3a4aae8418986905da9868',
    '/quizora': 'b7925f82310248328ec384309cbcd0f8',
    '/ascenda-loyalty-point-system': '4796ed9a2856489a9f6066f2075dc5a0',
    '/sutdfolio-android': 'edea7d25c1e94a96a93f17fd5e33e7cf'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    // {
    //   title: 'About',
    //   pageId: 'f1199d37579b41cbabfc0b5174f4256a'
    // },
    // {
    //   title: 'Contact',
    //   pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
    // }
  ]
})
