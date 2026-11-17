import { defineConfig } from 'vitepress';

export default defineConfig({
  title: '机场vpn',
  titleTemplate: ':title | 机场vpn (jichangvpn.homes)',
  description: '中文机场推荐、机场排行、VPN软件评测、Clash客户端教程与品牌数据库媒体平台。提供真实测速报告、流媒体/AI解锁实测、专线机场选购与新手防坑指南。',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.webp' }],
    ['meta', { name: 'keywords', content: '机场推荐, 机场排行, 性价比机场, 稳定机场, 便宜机场, 免费梯子, 科学上网, VPN推荐, 免费VPN, 手机VPN, VPN软件评测, VPN加速器, 加速器对比, Clash推荐, Clash Verge, Clash Meta, 免费节点, 机场FAQ, 跑路预警' }],
    ['meta', { name: 'author', content: '机场vpn评测团队' }],
    ['meta', { property: 'og:site_name', content: '机场vpn (jichangvpn.homes)' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': '机场vpn',
      'url': 'https://jichangvpn.homes',
      'description': '中文机场与VPN专业评测媒体、品牌数据库、网络工具知识库与SEO/GEO商业转化平台。',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://jichangvpn.homes/brands/?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    })],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': '机场vpn',
      'url': 'https://jichangvpn.homes',
      'logo': 'https://jichangvpn.homes/site-logo.webp'
    })],
    // 搜索引擎站长平台验证预留（支持环境变量注入或静态填入）
    ...(process.env.GOOGLE_SITE_VERIFICATION ? [['meta', { name: 'google-site-verification', content: process.env.GOOGLE_SITE_VERIFICATION }]] : []),
    ...(process.env.BING_SITE_VERIFICATION ? [['meta', { name: 'msvalidate.01', content: process.env.BING_SITE_VERIFICATION }]] : []),
    ...(process.env.SHENMA_SITE_VERIFICATION ? [['meta', { name: 'shenma-site-verification', content: process.env.SHENMA_SITE_VERIFICATION }]] : []),
    ...(process.env.BAIDU_SITE_VERIFICATION ? [['meta', { name: 'baidu-site-verification', content: process.env.BAIDU_SITE_VERIFICATION }]] : [])
  ],

  transformHead(context) {
    const pagePath = (context.pageData.relativePath || '').replace(/\\/g, '/');
    if (pagePath === '404.md' || pagePath.includes('404')) return;
    let cleanPath = pagePath
      .replace(/(^|\/)index\.md$/, '$1')
      .replace(/\.md$/, '/');
    if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
    if (!cleanPath.endsWith('/')) cleanPath = cleanPath + '/';
    const canonicalUrl = `https://jichangvpn.homes${cleanPath}`;

    const title = context.pageData.title
      ? `${context.pageData.title} | 机场vpn (jichangvpn.homes)`
      : '机场vpn (jichangvpn.homes)';
    const description = context.pageData.description || context.description || '';

    const headEntries: any[] = [
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['meta', { property: 'og:url', content: canonicalUrl }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:image', content: 'https://jichangvpn.homes/site-logo.webp' }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: 'https://jichangvpn.homes/site-logo.webp' }]
    ];

    // Schema per page type
    const depth = cleanPath.split('/').filter(Boolean).length;
    if (cleanPath === '/') {
      // 首页已有 WebSite & Organization
    } else if (cleanPath.endsWith('/') && depth === 1) {
      // 一级核心栏目门户 (/airport/, /vpn/, /clash/, /resources/, /brands/)
      headEntries.push(['script', { type: 'application/ld+json' }, JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        'name': context.pageData.title || title,
        'description': description,
        'url': canonicalUrl
      })]);
    } else if (cleanPath.includes('-p1/')) {
      // 深度测评/专题长尾文章
      headEntries.push(['script', { type: 'application/ld+json' }, JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': context.pageData.title || title,
        'description': description,
        'image': 'https://jichangvpn.homes/site-logo.webp',
        'datePublished': '2026-01-01T08:00:00+08:00',
        'dateModified': '2026-11-17T08:00:00+08:00',
        'author': {
          '@type': 'Organization',
          'name': '机场vpn评测团队',
          'url': 'https://jichangvpn.homes'
        },
        'publisher': {
          '@type': 'Organization',
          'name': '机场vpn',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://jichangvpn.homes/site-logo.webp'
          }
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': canonicalUrl
        }
      })]);
    }

    return headEntries;
  },

  sitemap: {
    hostname: 'https://jichangvpn.homes',
    transformItems(items) {
      return items.filter(item => !item.url.includes('draft') && !item.url.includes('404'));
    }
  },

  themeConfig: {
    siteTitle: '机场vpn',
    logo: '/site-logo.webp',

    // 4 Main Navigation Headers + Brand DB
    nav: [
      {
        text: '✈️ 机场推荐',
        link: '/airport/',
        items: [
          { text: '机场推荐', link: '/airport/recommend/' },
          { text: '机场排行', link: '/airport/rankings/' },
          { text: '性价比机场', link: '/airport/cost-effective/' },
          { text: '稳定机场', link: '/airport/stable/' },
          { text: '便宜机场', link: '/airport/cheap/' },
          { text: '免费梯子', link: '/airport/free/' },
          { text: '科学上网', link: '/airport/guide/' }
        ]
      },
      {
        text: '🛡️ VPN 与加速器',
        link: '/vpn/',
        items: [
          { text: 'VPN 推荐', link: '/vpn/recommend/' },
          { text: '免费 VPN', link: '/vpn/free/' },
          { text: '手机 VPN', link: '/vpn/mobile/' },
          { text: 'VPN 软件评测', link: '/vpn/reviews/' },
          { text: 'VPN 加速器', link: '/vpn/accelerator/' },
          { text: '加速器对比', link: '/vpn/compare/' },
          { text: '好用的 VPN', link: '/vpn/best/' }
        ]
      },
      {
        text: '⚡ Clash 客户端',
        link: '/clash/',
        items: [
          { text: 'Clash 推荐', link: '/clash/recommend/' },
          { text: 'Clash Verge', link: '/clash/verge/' },
          { text: 'Clash Verge 下载', link: '/clash/download/' },
          { text: 'Clash Verge 订阅', link: '/clash/subscribe/' },
          { text: 'Clash Meta', link: '/clash/meta/' },
          { text: 'Clash 使用教程', link: '/clash/tutorial/' },
          { text: 'Clash 故障排查', link: '/clash/troubleshoot/' }
        ]
      },
      {
        text: '📡 资源与情报',
        link: '/resources/',
        items: [
          { text: '免费节点', link: '/resources/free-nodes/' },
          { text: '跑路预警', link: '/resources/warning/' },
          { text: '机场 FAQ', link: '/resources/faq/' },
          { text: '机场风险情报', link: '/resources/intel/' },
          { text: '节点检测', link: '/resources/check/' },
          { text: '订阅问题', link: '/resources/sub-issues/' },
          { text: '新手帮助', link: '/resources/beginner/' }
        ]
      },
      {
        text: '🏛️ 品牌数据库',
        link: '/brands/'
      }
    ],

    sidebar: {
      '/airport/': [
        {
          text: '✈️ 机场推荐专题',
          items: [
            { text: '专题总览', link: '/airport/' },
            { text: '1. 机场推荐', link: '/airport/recommend/' },
            { text: '2. 机场排行', link: '/airport/rankings/' },
            { text: '3. 性价比机场', link: '/airport/cost-effective/' },
            { text: '4. 稳定机场', link: '/airport/stable/' },
            { text: '5. 便宜机场', link: '/airport/cheap/' },
            { text: '6. 免费梯子', link: '/airport/free/' },
            { text: '7. 科学上网', link: '/airport/guide/' }
          ]
        }
      ],
      '/vpn/': [
        {
          text: '🛡️ VPN 与加速器专题',
          items: [
            { text: '专题总览', link: '/vpn/' },
            { text: '1. VPN 推荐', link: '/vpn/recommend/' },
            { text: '2. 免费 VPN', link: '/vpn/free/' },
            { text: '3. 手机 VPN', link: '/vpn/mobile/' },
            { text: '4. VPN 软件评测', link: '/vpn/reviews/' },
            { text: '5. VPN 加速器', link: '/vpn/accelerator/' },
            { text: '6. 加速器对比', link: '/vpn/compare/' },
            { text: '7. 好用的 VPN', link: '/vpn/best/' }
          ]
        }
      ],
      '/clash/': [
        {
          text: '⚡ Clash 客户端专题',
          items: [
            { text: '专题总览', link: '/clash/' },
            { text: '1. Clash 推荐', link: '/clash/recommend/' },
            { text: '2. Clash Verge', link: '/clash/verge/' },
            { text: '3. Clash Verge 下载', link: '/clash/download/' },
            { text: '4. Clash Verge 订阅', link: '/clash/subscribe/' },
            { text: '5. Clash Meta', link: '/clash/meta/' },
            { text: '6. Clash 使用教程', link: '/clash/tutorial/' },
            { text: '7. Clash 故障排查', link: '/clash/troubleshoot/' }
          ]
        }
      ],
      '/resources/': [
        {
          text: '📡 资源与情报专题',
          items: [
            { text: '专题总览', link: '/resources/' },
            { text: '1. 免费节点', link: '/resources/free-nodes/' },
            { text: '2. 跑路预警', link: '/resources/warning/' },
            { text: '3. 机场 FAQ', link: '/resources/faq/' },
            { text: '4. 机场风险情报', link: '/resources/intel/' },
            { text: '5. 节点检测', link: '/resources/check/' },
            { text: '6. 订阅问题', link: '/resources/sub-issues/' },
            { text: '7. 新手帮助', link: '/resources/beginner/' }
          ]
        }
      ]
    },

    footer: {
      message: '机场vpn (jichangvpn.homes) - 专业中文机场评测媒体与品牌数据库 | 商业合作请联系商务邮箱',
      copyright: 'Copyright © 2026 机场vpn. All Rights Reserved.'
    },

    outline: {
      level: [2, 3],
      label: '本页导读与目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
});
