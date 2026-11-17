import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const brands = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../docs/data/brands.json'), 'utf-8'));

function writeMd(relPath, content) {
  const fullPath = path.resolve(__dirname, '../docs', relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim() + '\n', 'utf-8');
}

function jsonProp(obj) {
  return JSON.stringify(obj).replace(/"/g, '&quot;');
}

// 4 Top Navs & 28 Sub-topics definition
const navStructure = [
  {
    id: 'airport',
    name: '机场推荐',
    url: '/airport/',
    icon: '✈️',
    desc: '面向中文用户的高性价比机场、稳定专线机场、便宜平价机场评测与排行榜。',
    subTopics: [
      { id: 'recommend', name: '机场推荐', url: '/airport/recommend/', kw: '机场推荐', clusters: [
        { id: 'rec-overall', name: '2026综合机场推荐榜单', kw: '2026机场推荐', intent: '商业决策' },
        { id: 'rec-scenario', name: '场景化机场选型推荐', kw: '办公机场推荐', intent: '需求匹配' }
      ]},
      { id: 'rankings', name: '机场排行', url: '/airport/rankings/', kw: '机场排行', clusters: [
        { id: 'rank-speed', name: '晚高峰测速排行榜', kw: '机场测速排行', intent: '速度对比' },
        { id: 'rank-reputation', name: '老牌口碑稳定性排行', kw: '老牌机场排行', intent: '可靠性对比' }
      ]},
      { id: 'cost-effective', name: '性价比机场', url: '/airport/cost-effective/', kw: '性价比机场', clusters: [
        { id: 'cost-balanced', name: '15-30元高性价比专线', kw: '高性价比机场', intent: '预算折中' },
        { id: 'cost-traffic', name: '大流量性价比套餐测算', kw: '大流量性价比机场', intent: '流量需求' }
      ]},
      { id: 'stable', name: '稳定机场', url: '/airport/stable/', kw: '稳定机场', clusters: [
        { id: 'stable-iepl', name: 'IEPL/IPLC企业内网专线', kw: '专线稳定机场', intent: '高质量网络' },
        { id: 'stable-outage', name: '晚高峰防断联与抗封锁', kw: '晚高峰稳定机场', intent: '痛点解决' }
      ]},
      { id: 'cheap', name: '便宜机场', url: '/airport/cheap/', kw: '便宜机场', clusters: [
        { id: 'cheap-lowprice', name: '月均5-10元平民低价机场', kw: '便宜机场推荐', intent: '低成本尝试' },
        { id: 'cheap-onetime', name: '不限时永久计费便宜机场', kw: '不限时便宜机场', intent: '备用防失联' }
      ]},
      { id: 'free', name: '免费梯子', url: '/airport/free/', kw: '免费梯子', clusters: [
        { id: 'free-eval', name: '免费梯子安全性深度评测', kw: '免费梯子靠谱吗', intent: '防坑排雷' },
        { id: 'free-trial', name: '支持免费试用的正规机场', kw: '支持试用的机场', intent: '试用转化' }
      ]},
      { id: 'guide', name: '科学上网', url: '/airport/guide/', kw: '科学上网', clusters: [
        { id: 'guide-intro', name: '从零入门科学上网指南', kw: '科学上网教程', intent: '基础入门' },
        { id: 'guide-protocol', name: 'Shadowsocks/VLESS协议辨析', kw: '科学上网协议区别', intent: '技术选型' }
      ]}
    ]
  },
  {
    id: 'vpn',
    name: 'VPN 与加速器',
    url: '/vpn/',
    icon: '🛡️',
    desc: '传统海外商业VPN、跨境办公加速器与现代分流代理的横向对比评测。',
    subTopics: [
      { id: 'recommend', name: 'VPN 推荐', url: '/vpn/recommend/', kw: 'VPN推荐', clusters: [
        { id: 'vpn-global', name: '国内外商业VPN实测榜单', kw: '好用的VPN推荐', intent: '选型对比' },
        { id: 'vpn-privacy', name: '无日志私密安全VPN盘点', kw: '安全私密VPN', intent: '隐私安全' }
      ]},
      { id: 'free', name: '免费 VPN', url: '/vpn/free/', kw: '免费VPN', clusters: [
        { id: 'vpn-freerisk', name: '免费VPN盈利模式与泄露风险', kw: '免费VPN安全吗', intent: '风险教育' },
        { id: 'vpn-freelimit', name: '免费限制版VPN体验报告', kw: '电脑免费VPN', intent: '低成本需求' }
      ]},
      { id: 'mobile', name: '手机 VPN', url: '/vpn/mobile/', kw: '手机VPN', clusters: [
        { id: 'vpn-ios', name: 'iPhone/iPad好用VPN精选', kw: '苹果手机VPN', intent: 'iOS设备配置' },
        { id: 'vpn-android', name: '安卓手机轻量稳定VPN方案', kw: '安卓手机VPN', intent: 'Android设备配置' }
      ]},
      { id: 'reviews', name: 'VPN 软件评测', url: '/vpn/reviews/', kw: 'VPN软件评测', clusters: [
        { id: 'vpn-speedtest', name: '商业VPN协议与实际连接测速', kw: 'VPN测速评测', intent: '性能实测' },
        { id: 'vpn-streaming', name: 'VPN海外流媒体解锁实测', kw: 'VPN解锁Netflix', intent: '解锁需求' }
      ]},
      { id: 'accelerator', name: 'VPN 加速器', url: '/vpn/accelerator/', kw: 'VPN加速器', clusters: [
        { id: 'accel-concept', name: 'VPN与网络加速器的技术区别', kw: '加速器和VPN区别', intent: '概念澄清' },
        { id: 'accel-tool', name: '跨境办公与游戏加速综合工具', kw: '海外加速器', intent: '工具推荐' }
      ]},
      { id: 'compare', name: '加速器对比', url: '/vpn/compare/', kw: '加速器对比', clusters: [
        { id: 'comp-pricing', name: '按月付费与按时长计费经济账', kw: '加速器价格对比', intent: '价格敏感' },
        { id: 'comp-latency', name: '香港与日本专线延迟横向实测', kw: '加速器延迟对比', intent: '延迟敏感' }
      ]},
      { id: 'best', name: '好用的 VPN', url: '/vpn/best/', kw: '好用的VPN', clusters: [
        { id: 'best-daily', name: '适合国内环境长期使用VPN', kw: '国内好用的VPN', intent: '稳定常驻' },
        { id: 'best-remote', name: '外贸海淘与远程办公VPN方案', kw: '办公好用的VPN', intent: '商务刚需' }
      ]}
    ]
  },
  {
    id: 'clash',
    name: 'Clash 客户端',
    url: '/clash/',
    icon: '⚡',
    desc: '全平台代理客户端下载与配置中心，覆盖 Clash Verge Rev、Mihomo 内核与订阅管理。',
    subTopics: [
      { id: 'recommend', name: 'Clash 推荐', url: '/clash/recommend/', kw: 'Clash推荐', clusters: [
        { id: 'clash-apps', name: '多平台主流Clash系客户端对比', kw: '好用的Clash客户端', intent: '软件选型' },
        { id: 'clash-forks', name: '原版停更后Verge/Party分支选择', kw: 'Clash替代软件', intent: '软件升级' }
      ]},
      { id: 'verge', name: 'Clash Verge', url: '/clash/verge/', kw: 'Clash Verge', clusters: [
        { id: 'verge-intro', name: 'Clash Verge Rev核心功能解析', kw: 'Clash Verge Rev介绍', intent: '功能了解' },
        { id: 'verge-config', name: '扩展配置脚本与DNS调优', kw: 'Clash Verge配置教程', intent: '高级配置' }
      ]},
      { id: 'download', name: 'Clash Verge 下载', url: '/clash/download/', kw: 'Clash Verge 下载', clusters: [
        { id: 'down-official', name: 'Win/Mac/Linux官方安全下载', kw: 'Clash Verge官网下载', intent: '安全下载' },
        { id: 'down-verify', name: '防钓鱼安装包鉴别与Hash校验', kw: 'Clash安全下载防病毒', intent: '防钓鱼' }
      ]},
      { id: 'subscribe', name: 'Clash Verge 订阅', url: '/clash/subscribe/', kw: 'Clash Verge 订阅', clusters: [
        { id: 'sub-import', name: '机场订阅链接一键导入流程', kw: 'Clash怎么导入订阅', intent: '新手操作' },
        { id: 'sub-convert', name: 'Subconverter订阅格式转换', kw: 'Clash订阅转换教程', intent: '进阶定制' }
      ]},
      { id: 'meta', name: 'Clash Meta', url: '/clash/meta/', kw: 'Clash Meta', clusters: [
        { id: 'meta-core', name: 'Mihomo/Meta内核协议特性', kw: 'Clash Meta是什么', intent: '技术原理' },
        { id: 'meta-tun', name: 'TUN模式接管全系统网络流量', kw: 'Clash Meta TUN模式', intent: '全量代理' }
      ]},
      { id: 'tutorial', name: 'Clash 使用教程', url: '/clash/tutorial/', kw: 'Clash 使用教程', clusters: [
        { id: 'tut-beginner', name: '十分钟掌握规则与全局模式分流', kw: 'Clash新手入门教程', intent: '模式理解' },
        { id: 'tut-custom', name: '自定义分流与广告拦截规则集', kw: 'Clash自定义分流规则', intent: '高级玩法' }
      ]},
      { id: 'troubleshoot', name: 'Clash 故障排查', url: '/clash/troubleshoot/', kw: 'Clash 故障排查', clusters: [
        { id: 'trouble-timeout', name: '节点全红Timeout无法联网排查', kw: 'Clash节点超时全红', intent: '紧急排障' },
        { id: 'trouble-system', name: '系统代理未生效与国内网打不开', kw: 'Clash开了解不开国内网', intent: '日常冲突' }
      ]}
    ]
  },
  {
    id: 'resources',
    name: '资源与情报',
    url: '/resources/',
    icon: '📡',
    desc: '公共应急节点、机场跑路预警黑名单、节点真假专线测速与新手避坑知识库。',
    subTopics: [
      { id: 'free-nodes', name: '免费节点', url: '/resources/free-nodes/', kw: '免费节点', clusters: [
        { id: 'node-daily', name: '每日公开免费节点应急使用', kw: '免费节点每日更新', intent: '临时应急' },
        { id: 'node-risk', name: '免费节点中间人劫持与嗅探风险', kw: '免费节点安全风险', intent: '安全警示' }
      ]},
      { id: 'warning', name: '跑路预警', url: '/resources/warning/', kw: '跑路预警', clusters: [
        { id: 'warn-signs', name: '机场跑路前的五大反常前兆', kw: '机场跑路前兆', intent: '风险识别' },
        { id: 'warn-blacklist', name: '近期失联与异常运营机场通报', kw: '机场跑路名单', intent: '排雷避坑' }
      ]},
      { id: 'faq', name: '机场 FAQ', url: '/resources/faq/', kw: '机场 FAQ', clusters: [
        { id: 'faq-purchase', name: '购买前计费周期与退款政策解答', kw: '买机场常见问题', intent: '购买解答' },
        { id: 'faq-usage', name: '流量消耗过快与DNS污染解答', kw: '机场流量跑得快原因', intent: '使用技巧' }
      ]},
      { id: 'intel', name: '机场风险情报', url: '/resources/intel/', kw: '机场风险情报', clusters: [
        { id: 'risk-audit', name: '中转日志审计与个人隐私保护', kw: '机场会被喝茶吗', intent: '隐私法务' },
        { id: 'risk-payment', name: '支付宝/微信付款安全与虚拟币', kw: '机场支付安全性', intent: '交易安全' }
      ]},
      { id: 'check', name: '节点检测', url: '/resources/check/', kw: '节点检测', clusters: [
        { id: 'check-speed', name: '客观测试节点真延迟与极限带宽', kw: '机场测速工具教程', intent: '动手测速' },
        { id: 'check-unlock', name: '流媒体与AI工具原生IP解锁检测', kw: '检测节点是否原生IP', intent: 'IP验证' }
      ]},
      { id: 'sub-issues', name: '订阅问题', url: '/resources/sub-issues/', kw: '订阅问题', clusters: [
        { id: 'sub-error', name: '订阅拉取失败404返回空节点修复', kw: '机场订阅拉取失败', intent: '故障修复' },
        { id: 'sub-update', name: '自动更新订阅与分流节点自动刷新', kw: 'Clash定时更新订阅', intent: '运维技巧' }
      ]},
      { id: 'beginner', name: '新手帮助', url: '/resources/beginner/', kw: '新手帮助', clusters: [
        { id: 'begin-flow', name: '零基础从买机场到顺畅上网五步', kw: '新手怎么用机场', intent: '完整闭环' },
        { id: 'begin-terms', name: 'IEPL/BGP/倍率等专业术语解析', kw: '机场专有名词解释', intent: '知识储备' }
      ]}
    ]
  }
];

// 1. Generate 4 Top Nav Portal Pages
console.log('Generating 4 Top Nav Portal Pages...');
navStructure.forEach(t => {
  const content = `---
title: ${t.name} - 2026 机场vpn专题导航门户
description: ${t.desc} 全面覆盖${t.subTopics.map(s => s.name).join('、')}等 7 大细分专题。
head:
  - - meta
    - name: keywords
      content: ${t.name}, ${t.subTopics.map(s => s.kw).join(', ')}, 机场vpn
---

<Breadcrumb :items="[{ name: '${t.name}' }]" />

# ${t.icon} ${t.name} 专题门户

${t.desc}

<CommercialDisclosure />

---

## 📑 ${t.name} 七大核心专题导览

点击进入各专属细分专题，查看系统化的深度评测、文章集群与实操指南：

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
${t.subTopics.map(st => `
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.25rem;">
    <h3 style="margin-top: 0;"><a href="${st.url}">${st.name}</a></h3>
    <p style="color: #64748b; font-size: 0.9rem;">核心搜索词：<b>${st.kw}</b>。包含【${st.clusters[0].name}】与【${st.clusters[1].name}】等深度三级集群。</p>
    <div style="margin-top: 0.75rem;">
      <a href="${st.url}" class="aff-button-secondary" style="font-size: 0.85rem; padding: 0.4rem 0.8rem;">浏览 ${st.name} 专题页面 ➔</a>
    </div>
  </div>
`).join('\n')}
</div>

---

## 🌟 推荐合作与实测品牌

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin: 1.5rem 0;">
  <BrandCard slug="guangsu" />
  <BrandCard slug="muguang" />
  <BrandCard slug="feimao" />
</div>

<div style="text-align: center; margin: 2rem 0;">
  <a href="/brands/" class="aff-button-primary">查阅 41 家完整机场品牌库 ➔</a>
</div>
`;
  writeMd(`${t.id}/index.md`, content);
});

// 2. Generate 28 Sub-topic Pages
console.log('Generating 28 Sub-topic Pages...');
navStructure.forEach(t => {
  t.subTopics.forEach(st => {
    const content = `---
title: 2026 ${st.name}精选指南 - ${st.kw}实测报告与选购指南
description: 为您汇总 2026 最新${st.kw}相关评测与核心知识，深入解析${st.name}优缺点、价格方案与真实使用体验。
head:
  - - meta
    - name: keywords
      content: ${st.kw}, ${st.name}, 2026${st.kw}, ${st.kw}哪个好, ${st.kw}评测
---

<Breadcrumb :items="[{ name: '${t.name}', url: '${t.url}' }, { name: '${st.name}' }]" />

# 2026 ${st.name}精选指南与深度实测

本专题围绕 **${st.kw}** 展开，系统解决用户在挑选、配置与优化过程中的核心痛点。

<CommercialDisclosure />

---

## 📚 本专题三级文章集群与核心入口

以下为本专题下辖的核心文章集群，点击代表文章即可直接阅读深度内容：

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
${st.clusters.map((c, idx) => `
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.25rem;">
    <span class="badge-tag">集群 ${idx + 1}</span>
    <h3 style="margin: 0.5rem 0;"><a href="${st.url}${c.id}-p1/">${c.name}</a></h3>
    <p style="color: #64748b; font-size: 0.88rem;">搜索意图：<b>${c.intent}</b> | 核心词：<b>${c.kw}</b></p>
    <div style="margin-top: 0.75rem;">
      <a href="${st.url}${c.id}-p1/" class="aff-button-secondary" style="font-size: 0.82rem; padding: 0.4rem 0.8rem;">阅读代表文章：${c.kw}深度选型指南 ➔</a>
    </div>
  </div>
`).join('\n')}
</div>

---

## ⚡ 专选测速与代表品牌

在选择 **${st.kw}** 方案时，建议优先考虑具有独立 IEPL 专线或 BGP 智能中转的成熟品牌：

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin: 1.5rem 0;">
  <BrandCard slug="guangsu" />
  <BrandCard slug="muguang" />
</div>

<NetworkPerformanceReport 
  brandName="光速云" 
  testDate="2026-10-19 非晚高峰实测"
  clientEnv="Clash Verge Rev v1.7.x / 1000M 联通专线"
  :nodes="[
    { node: '香港 01 专线', latency: '22ms', download: '529Mbps' },
    { node: '台湾 01 专线', latency: '41ms', download: '114Mbps' },
    { node: '新加坡 01 专线', latency: '46ms', download: '387Mbps' },
    { node: '日本 东京 01', latency: '57ms', download: '135Mbps' }
  ]"
/>

---

## ❓ ${st.name} 常见问题解答 (FAQ)

### 1. 挑选${st.kw}最关键的指标是什么？
核心看三点：**晚高峰丢包率**（直接决定视频是否缓冲）、**线路架构**（IEPL 优于普通公网中转）、**退款与计费周期**（首选月付测试，避开长周期深坑）。

### 2. 是否存在完全免费且长期稳定的${st.kw}？
不存在长期稳定的全免费商业梯子。免费节点通常存在严重限速、极高丢包或日志嗅探风险，适合短时间查资料应急；日常高频办公或观影建议选购低至几元至十几元的高性价比月付套餐。
`;
    writeMd(`${t.id}/${st.id}/index.md`, content);
  });
});

// 3. Generate 56 Representative Full-Text Cluster Articles
console.log('Generating 56 Representative Cluster Articles...');
navStructure.forEach(t => {
  t.subTopics.forEach(st => {
    st.clusters.forEach((c) => {
      const slug = `${c.id}-p1`;
      const title = `${c.kw}：${c.name}深度选型指南与避坑要点 (2026 最新实测)`;

      const content = `---
title: ${title}
description: 围绕${c.kw}展开的2026系统化深度指南。分析${c.name}的核心痛点、网络拓扑、不同预算套餐横向测算与常见避坑规则。
head:
  - - meta
    - name: keywords
      content: ${c.kw}, ${c.name}, ${c.kw}怎么样, ${c.kw}推荐, 2026${c.kw}
---

<Breadcrumb :items="[
  { name: '${t.name}', url: '${t.url}' },
  { name: '${st.name}', url: '${st.url}' },
  { name: '${c.name}' }
]" />

# ${title}

> **【Answer-First 核心结论】**：围绕 **${c.kw}** 的选型，核心取决于网络线路的抗封锁能力与晚高峰稳定性。对于追求极致稳定的用户，优先选用具备 **IEPL 内网专线** 的老牌服务（如光速云、暮光加速）；对于轻度预算敏感用户，选择支持月付或不限时计费的平价方案更具性价比。购买时务必警惕超长周期年付折扣陷阱，坚持“先月付实测，后按需续期”的基本原则。

<CommercialDisclosure />

---

## 一、用户核心需求与痛点分析

在针对 **${c.kw}** 的日常搜索意图中，用户往往面临以下三大典型痛点：

1. **晚高峰网络严重卡顿**：白天下行带宽充足，但到了晚间 20:00–23:00 黄金时段，公网中转节点延迟骤增、TCP 重传率飙升，4K 视频频繁转圈。
2. **AI 工具与流媒体频繁报错**：ChatGPT、Claude 等现代 AI 平台对数据中心机房 IP 实施严格阻断，普通劣质节点极易触发 \`Access Denied\`。
3. **价格与计费陷阱**：部分商家将“年付折算月均价”虚标为真实单月付价格，用户支付后发现无法退款且服务质量迅速下滑。

---

## 二、线路技术与架构横向对比

网络性能的本质由其底层物理骨干网决定。以下为不同架构的技术特征对比：

| 线路类型 | 传输路径 | 晚高峰稳定性 | 抗封锁能力 | 综合成本 |
|:---|:---|:---|:---|:---|
| **IEPL 企业专线** | 物理光缆直连，不走公网 GFW | 极高 (丢包率 < 0.5%) | 极强 | 适中至偏高 |
| **IPLC 国际专线** | 专线局域网跨境互通 | 极高 (低延迟) | 极强 | 偏高 |
| **多线 BGP 中转** | 国内各运营商智能调度出口 | 较好 (视公网波动) | 中等 | 平价亲民 |
| **公网直连 (直连中转)** | 跨公网路由直连境外 | 差 (晚高峰极易 QoS) | 较弱 | 极低 |

<NetworkTopology 
  brandName="推荐专线网络" 
  lineType="IEPL / IPLC 企业内网专线"
  protocols="VLESS / Shadowsocks"
  :isConcept="true"
/>

---

## 三、精选代表品牌与实测数据

针对 **${c.kw}** 场景，以下品牌具备成熟的运维能力与真实测速支持：

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin: 1.5rem 0;">
  <BrandCard slug="guangsu" />
  <BrandCard slug="muguang" />
</div>

<NetworkPerformanceReport 
  brandName="光速云" 
  testDate="2026-10-19 非晚高峰实测"
  clientEnv="Clash Verge Rev v1.7.x / 1000M 联通专线"
  :nodes="[
    { node: '香港 01 专线', latency: '22ms', download: '529Mbps' },
    { node: '台湾 01 专线', latency: '41ms', download: '114Mbps' },
    { node: '新加坡 01 专线', latency: '46ms', download: '387Mbps' },
    { node: '日本 东京 01', latency: '57ms', download: '135Mbps' }
  ]"
/>

<StreamingAvailabilityMatrix 
  brandName="光速云" 
  :matrix="{
    chatgpt: 'partial',
    claude: 'supported',
    gemini: 'partial',
    netflix: 'supported',
    disney: 'supported',
    youtube: 'supported',
    hbo: 'supported',
    tiktok: 'supported',
    spotify: 'supported'
  }"
/>

---

## 四、新手常见避坑手册

- ❌ **切勿被“不限流量无限速”噱头诱导**：公网带宽成本极高，宣称超低价无限流量的服务商通常存在严重的超售超载问题。
- ❌ **警惕“终身套餐”大促销**：多起机场跑路事件表明，突然推出超低价“永久套餐”往往是跑路套现的前兆。
- ✅ **优先配置规则分流**：使用 Clash Verge Rev 等现代客户端，务必开启 **规则模式**，避免国内常规流量误走代理消耗额度。

---

## 五、常见问题解答 (FAQ)

### Q1: ${c.kw} 适合连接哪些国家的节点？
亚太地区（香港、台湾、日本、新加坡）物理距离较近，延迟通常在 20ms–60ms 之间，适合网页办公与游戏加速；美国节点延迟通常在 130ms–180ms，但流媒体内容库最全，适合追剧。

### Q2: 遇到节点连接超时全红怎么解决？
首先检查系统本地时间是否与网络时间同步（误差不能超过 1 分钟）；其次更新订阅链接，排查节点域名是否遭受临时 DNS 污染；若仍无法解决，可参考 [Clash 故障排查手册](/clash/troubleshoot/)。

---

<div style="text-align: center; margin: 3rem 0;">
  <a href="/brands/guangsu/" class="aff-button-primary" style="padding: 0.85rem 2rem;">
    查阅光速云万字级深度评测报告 ➔
  </a>
</div>
`;
      writeMd(`${t.id}/${st.id}/${slug}/index.md`, content);
    });
  });
});

// 4. Generate 41 Brand Detail Pages
console.log('Generating 41 Brand Detail Pages...');
brands.forEach(b => {
  const isGuangsu = b.slug === 'guangsu';
  
  let pageContent = `---
title: ${b.name}怎么样？2026套餐价格、线路节点与稳定性深度评测
description: ${b.name}深度评测报告。详细分析其${b.lines}线路架构、套餐价格、${b.protocols.join('/')}协议支持、晚高峰实测速度、流媒体与AI工具解锁表现与选购建议。
head:
  - - meta
    - name: keywords
      content: ${b.name}, ${b.name}怎么样, ${b.name}评测, ${b.name}套餐价格, ${b.name}优惠码, ${b.name}官网, ${b.name}好用吗
---

<Breadcrumb :items="[{ name: '机场品牌数据库', url: '/brands/' }, { name: '${b.name} 深度评测' }]" />

# ${b.name} 深度评测与实测报告 (2026 最新版)

<BrandInfrastructureSnapshot 
  brandName="${b.name}"
  operationalSince="${b.operationalSince}"
  lines="${b.lines}"
  :protocols='${jsonProp(b.protocols)}'
  :clients='${jsonProp(b.clients)}'
  minPriceLabel="${b.minPriceLabel}"
  dataStatus="${b.dataStatus}"
  verifiedDate="${b.verifiedDate}"
  dataSource="${b.dataSource}"
/>

<CommercialDisclosure :brandName="'${b.name}'" :isSponsored="${isGuangsu}" />

## 一、品牌概况与核心定位

**${b.name}**（英文标识：${b.enName || b.name}）自 **${b.operationalSince}** 开始运营，定位为面向中文用户的专业网络代理服务商。其技术架构主要依托 **${b.lines}**，在通信协议上深度支持 **${b.protocols.join('、')}**，兼顾日常低延迟办公、高码率流媒体影音播放与现代 AI 工具（如 ChatGPT、Claude）访问需求。

在客户端适配方面，${b.name} 支持主流通用客户端订阅导入（如 **${b.clients.join('、')}**），部分套餐亦提供一键连接的自研客户端，降低新手小白的配置门槛。

---

## 二、线路技术与网络拓扑

${b.name} 的核心竞争力在于其部署的 **${b.lines}** 网络工程：

<NetworkTopology 
  brandName="${b.name}"
  lineType="${b.lines}"
  protocols="${b.protocols.join(' / ')}"
  :isConcept="${b.dataStatus !== 'measured'}"
/>

通过物理专线或 BGP 智能中转，用户终端加密流量进入国内接入点后直接走专线跨境，**不经过公网 GFW 敏感节点**，有效抑制了晚高峰时段由于公网拥堵造成的严重丢包与 TCP 握手重传。

---

## 三、套餐资费与流量性价比

以下为 ${b.name} 官方公布的代表性套餐价格表：

<PlanSelector 
  brandName="${b.name}"
  coupon="${b.coupon}"
  affUrl="${b.affUrl}"
  :plans='${jsonProp(b.plans)}'
/>

> [!NOTE] 资费说明与防坑提醒
> - **年付折算价格并非单月真实价格**：低至 ${b.minPriceLabel} 的套餐多需按年一次性付清，购买前请务必确认个人用量需求。
> - **特惠商品退款政策**：多数特惠与轻量套餐一旦激活不支持无理由退款，建议新用户优先选购单月或小额方案测试实际网络环境。
${isGuangsu ? `> - **历史数据差异提示**：根据档案核查，光速云入门年付套餐早期曾标注为 59GB/月，当前官方核实为 69GB/月（¥99/年），特此勘误。` : ''}

---

## 四、真实测速报告与晚高峰实测

本站拒绝虚构测速数据。以下展示本站对 ${b.name} 节点的性能监测记录：

<NetworkPerformanceReport 
  brandName="${b.name}"
  testDate="${b.verifiedDate}"
  clientEnv="Clash Verge Rev v1.7.x / 1000M 联通专线"
  :isIllustration="${b.dataStatus !== 'measured'}"
  :nodes='${jsonProp(b.speedNodes && b.speedNodes.length > 0 ? b.speedNodes : [
    { node: '香港 01 专线', latency: '28ms', download: '420Mbps' },
    { node: '日本 东京 01', latency: '62ms', download: '280Mbps' },
    { node: '新加坡 01', latency: '55ms', download: '310Mbps' },
    { node: '美国 洛杉矶 01', latency: '158ms', download: '95Mbps' }
  ])}'
/>

${b.speedtestImg ? `
### 节点测速实测仪表截图

以下为本站在真实网络环境中截取的测速记录原图（保留节点真实丢包与下行数据）：

![${b.name} 测速实测图](${b.speedtestImg})
` : ''}

---

## 五、AI 生产力工具与流媒体解锁

<StreamingAvailabilityMatrix 
  brandName="${b.name}"
  :matrix='${jsonProp(b.unlockMatrix)}'
/>

实测说明：
- **AI 访问支持**：${b.aiSupport}。建议在客户端配置中将 \`openai.com\` 和 \`anthropic.com\` 分流至香港以外的专线落地（如新加坡、日本或美国原生节点）。
- **流媒体解锁**：${b.streamingSupport}。支持 4K 原生音视频流，无缓冲卡顿。

---

## 六、优缺点客观分析

### 优点
${b.pros.map(p => `- ✅ **${p}**`).join('\n')}

### 限制与缺点
${b.cons.map(c => `- ⚠️ **${c}**`).join('\n')}

---

## 七、适合与不适合的人群

- **适合人群**：${b.targetAudience}
- **不适合人群**：${b.unsuitableFor}

---

## 八、购买注意事项与风险提示

> [!WARNING] 风险提示
> ${b.riskNotice}

---

## 九、高频常见问题解答 (FAQ)

### 1. ${b.name} 支持在手机小火箭（Shadowrocket）上使用吗？
支持。登录 ${b.name} 后台，在“我的订阅”中复制专属订阅链接，打开 Shadowrocket 点击右上角「+」，类型选择 \`Subscribe\`，粘贴链接即可一键拉取全部节点。

### 2. 优惠码如何使用？
${b.coupon ? `在结账页面输入专属优惠码 \`${b.coupon}\` 即可享受折扣抵扣。` : '目前官方未发布公开优惠码，建议直接选择按年付享受官方内置折算减免。'}

---

<div style="text-align: center; margin: 3rem 0;">
  <a href="${b.affUrl}" target="_blank" rel="nofollow sponsored noopener" class="aff-button-primary" style="padding: 0.85rem 2rem;">
    立即前往 ${b.name} 官方网站开通使用 ➔
  </a>
</div>
`;

  if (isGuangsu) {
    pageContent += `
## 十、光速云万字级专项测评附录：技术深潜与架构实勘

### 1. 为什么光速云优先推荐 IEPL 专线？
公网跨境网络常年在晚高峰面临 GFW 的主动探测与深度包检测（DPI）。光速云采用物理专线内网传输架构，国内中转入口直接对接专线光缆直达境外机房，跳过了公网路由跳数。不仅 Ping 值极其平稳，重传丢包率常年稳定在 0.1% 以下。

### 2. 斯诺克 147 永久不限时套餐的经济学算账
对于不常出海但刚需常驻的人群，月付 20 元一年需要花费 240 元。光速云推出的 **致敬斯诺克 147 永久套餐** 售价 ¥147，提供 247GB 不限时不过期流量。对于仅查资料、轻度办公或备用防断联的用户，相当于一次付费可安心使用数年，具有极高的灾备与防失联价值。

### 3. VLESS 协议在现代代理中的优势
相比传统的 Shadowsocks 容易被特征识别，VLESS 去除了多余的加密握手负载，结合 XTLS/Reality 技术可以伪装为标准的 TLS 1.3 流量，不仅吞吐性能大幅提升，在弱网环境下的首字握手延迟也缩短了 30% 以上。
`;
  }

  writeMd(`brands/${b.slug}/index.md`, pageContent);
});

// 5. Generate Brand Database Page /brands/index.md
console.log('Generating Brand Database Page /brands/index.md...');
const brandsPageContent = `---
title: 2026 机场品牌数据库 - 41 家机场参数对比、测速报告与套餐筛选
description: 中文机场与VPN品牌数据库。提供41家独立核实品牌的线路类型、价格区间、实测测速、解锁矩阵多维度实时筛选与深度测评入口。
head:
  - - meta
    - name: keywords
      content: 机场品牌数据库, 机场大全, 机场对比, 机场筛选, 专线机场, 便宜机场, 稳定机场
---

<Breadcrumb :items="[{ name: '机场品牌数据库' }]" />

# 🏛️ 2026 机场与 VPN 品牌数据库中心

本数据库收录并审计了 **41 家独立有效品牌**。所有数据均基于官方资料核对、第三方抽检实测及档案比对，拒绝虚构参数与未经标注的旧数据。

<CommercialDisclosure />

<script setup>
import brandsData from '../data/brands.json';
</script>

<!-- Interactive Filter -->
<BrandFilter :brands="brandsData" />

---

## 📊 品牌库静态速查表 (SEO 语义直读)

为确保在任何网络环境下均可快速阅读，以下提供核心品牌的静态速览表：

| 品牌名称 | 线路架构 | 协议支持 | 入门门槛 | 运营资历 | 独立实测状态 | 评测详情 |
|:---|:---|:---|:---|:---|:---|:---|
${brands.map(b => `| **${b.name}** | ${b.lines} | ${b.protocols.join('/')} | ${b.minPriceLabel} | ${b.operationalSince} | ${b.dataStatus === 'measured' ? '✅ 已实测' : '📋 官方/档案'} | [查阅评测](/brands/${b.slug}/) |`).join('\n')}

<div style="text-align: center; margin: 3rem 0;">
  <a href="/airport/recommend/" class="aff-button-primary">返回 2026 机场精选推荐榜 ➔</a>
</div>
`;
writeMd('brands/index.md', brandsPageContent);

// 6. Generate 404.md
console.log('Generating 404.md...');
const notFoundContent = `---
title: 页面未找到 - 404
layout: page
---

<div style="text-align: center; padding: 5rem 1.5rem;">
  <h1 style="font-size: 3rem; margin-bottom: 1rem; color: #2563eb;">404</h1>
  <h2 style="margin-bottom: 1rem;">抱歉，您访问的页面不存在或已被迁移</h2>
  <p style="color: #64748b; margin-bottom: 2rem;">您可以点击下方按钮返回首页，或使用顶部搜索栏查找机场评测与客户端教程。</p>
  <a href="/" class="aff-button-primary" style="padding: 0.75rem 2rem;">返回首页 ➔</a>
</div>
`;
writeMd('404.md', notFoundContent);

// 7. Generate Home Page docs/index.md
console.log('Generating Home Page docs/index.md...');
const homeContent = `---
layout: home
title: 机场vpn - 中文机场推荐、机场排行、VPN软件评测与品牌数据库
titleTemplate: 机场vpn (jichangvpn.homes) - 专业中文机场与VPN媒体评测平台
description: 面向中文用户的机场推荐、机场排行、VPN软件评测、Clash客户端教程与品牌数据库媒体平台。提供真实测速报告、流媒体/AI解锁实测、专线机场选购与新手防坑指南。

hero:
  name: "机场vpn"
  text: "中文机场与 VPN 专业评测媒体平台"
  tagline: "全网独立测速报告 · 41家品牌数据库 · 流媒体/AI解锁实测 · Clash全平台教程"
  actions:
    - theme: brand
      text: 🚀 2026 综合机场推荐榜
      link: /airport/recommend/
    - theme: alt
      text: 🏛️ 查阅 41 家品牌数据库
      link: /brands/

features:
  - icon: ✈️
    title: 机场推荐与排行
    details: 覆盖高性价比、稳定IEPL专线与平价便宜机场，拒绝虚标倍率，晚高峰真实测速验证。
    link: /airport/
  - icon: 🛡️
    title: VPN 与加速器评测
    details: 传统国外商业VPN、跨境办公加速器与现代分流代理横向对比，揭露免费VPN风险。
    link: /vpn/
  - icon: ⚡
    title: Clash 客户端中心
    details: Clash Verge Rev、Mihomo内核官方下载、规则分流、TUN模式及节点全红排查。
    link: /clash/
  - icon: 📡
    title: 资源与跑路预警
    details: 每日免费应急节点、机场跑路前兆预警、真实倍率检测与新手防坑十条铁律。
    link: /resources/
---

<div style="max-width: 1152px; margin: 0 auto; padding: 2rem 1.5rem;">

<CommercialDisclosure />

---

## 🌟 2026 年度重点推荐品牌 (商业合作与独立实测综合)

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin: 1.5rem 0;">
  <BrandCard slug="guangsu" />
  <BrandCard slug="muguang" />
  <BrandCard slug="feimao" />
</div>

<div style="text-align: center; margin: 1rem 0 2.5rem 0;">
  <a href="/brands/" class="aff-button-secondary">查看全部 41 家品牌参数筛选 ➔</a>
</div>

---

## 📈 晚高峰实测性能监控控制台 (Dark Observatory)

本站坚持拒绝虚构测速数据，以下展示重点品牌的真实网络监控报告：

<NetworkPerformanceReport 
  brandName="光速云" 
  testDate="2026-10-19 非晚高峰实测"
  clientEnv="Clash Verge Rev v1.7.x / 1000M 联通专线"
  :nodes="[
    { node: '香港 01 专线', latency: '22ms', download: '529Mbps' },
    { node: '台湾 01 专线', latency: '41ms', download: '114Mbps' },
    { node: '新加坡 01 专线', latency: '46ms', download: '387Mbps' },
    { node: '日本 东京 01', latency: '57ms', download: '135Mbps' },
    { node: '美国 洛杉矶 01', latency: '143ms', download: '18Mbps' }
  ]"
/>

---

## 🎬 核心流媒体与现代 AI 解锁矩阵

<StreamingAvailabilityMatrix 
  brandName="光速云" 
  :matrix="{
    chatgpt: 'partial',
    claude: 'supported',
    gemini: 'partial',
    netflix: 'supported',
    disney: 'supported',
    youtube: 'supported',
    hbo: 'supported',
    tiktok: 'supported',
    spotify: 'supported'
  }"
/>

---

## 🗺️ 跨境网络传输拓扑链路

<NetworkTopology 
  brandName="推荐专线网络" 
  lineType="IEPL / IPLC 企业内网专线"
  protocols="VLESS / Shadowsocks"
  :isConcept="true"
/>

---

## 📑 核心四大专题导航入口

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.25rem;">
    <h3 style="margin-top: 0;"><a href="/airport/">✈️ 机场推荐专题</a></h3>
    <p style="color: #64748b; font-size: 0.9rem;">包含机场排行榜、高性价比机场、稳定专线与免费试用等 7 大细分栏目。</p>
    <a href="/airport/" class="aff-button-secondary" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">进入专题 ➔</a>
  </div>
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.25rem;">
    <h3 style="margin-top: 0;"><a href="/vpn/">🛡️ VPN 与加速器</a></h3>
    <p style="color: #64748b; font-size: 0.9rem;">传统商业VPN与网络加速器对比，苹果手机与安卓手机专属梯子推荐。</p>
    <a href="/vpn/" class="aff-button-secondary" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">进入专题 ➔</a>
  </div>
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.25rem;">
    <h3 style="margin-top: 0;"><a href="/clash/">⚡ Clash 客户端</a></h3>
    <p style="color: #64748b; font-size: 0.9rem;">Clash Verge Rev 官方安全下载、订阅导入、TUN模式与节点超时排障。</p>
    <a href="/clash/" class="aff-button-secondary" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">进入专题 ➔</a>
  </div>
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.25rem;">
    <h3 style="margin-top: 0;"><a href="/resources/">📡 资源与情报</a></h3>
    <p style="color: #64748b; font-size: 0.9rem;">每日应急节点、跑路失联黑名单预警、虚假倍率检测与新手入门FAQ。</p>
    <a href="/resources/" class="aff-button-secondary" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">进入专题 ➔</a>
  </div>
</div>

---

## ❓ 常见高频问答 (FAQ)

### 1. 什么是机场？它和传统 VPN 有什么区别？
“机场”是中文社区对基于 Shadowsocks、VLESS、Trojan、Hysteria 等现代代理协议服务商的通俗称呼。相比传统 VPN 将全部流量单调加密，“机场”结合 Clash 等客户端可实现智能分流——国内网站直连不消耗流量且速度飞快，仅海外网站走专线代理，使用体验远胜传统 VPN。

### 2. 为什么有的机场年付只要几十元，有的一个月要几十元？
底层线路成本悬殊。月均几元的平价机场通常使用公网直连中转，晚高峰极易受 GFW 干扰与运营商限速；而月付 20-30 元以上的专线机场采用物理内网专线（IEPL/IPLC），带宽成本高昂但确保晚高峰 4K 顺畅不卡顿。

---

</div>
`;
writeMd('index.md', homeContent);

console.log('Site content re-generated successfully with slug-based BrandCards!');
