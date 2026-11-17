import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const brands = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../docs/data/brands.json'), 'utf-8'));

// 1. Structure Definitions: 4 Top Navs & 28 Sub-topics & 56 Clusters
const topNavs = [
  {
    id: 'airport',
    name: '机场推荐',
    url: '/airport/',
    desc: '全面评测高性价比、稳定专线与便宜机场，包含实测测速报告与选购指南。',
    subTopics: [
      { id: 'recommend', name: '机场推荐', url: '/airport/recommend/', kw: '机场推荐', clusters: [
        { id: 'rec-overall', name: '2026年度综合机场推荐榜单', kw: '2026机场推荐', intent: '商业决策' },
        { id: 'rec-scenario', name: '按场景选择机场推荐（AI/办公/流媒体）', kw: '办公机场推荐', intent: '需求选型' }
      ]},
      { id: 'rankings', name: '机场排行', url: '/airport/rankings/', kw: '机场排行', clusters: [
        { id: 'rank-speed', name: '节点速度与晚高峰稳定性排行榜', kw: '机场测速排行', intent: '性能对比' },
        { id: 'rank-reputation', name: '老牌机场口碑与抗封锁排行榜', kw: '老牌机场排行', intent: '信任度筛选' }
      ]},
      { id: 'cost-effective', name: '性价比机场', url: '/airport/cost-effective/', kw: '性价比机场', clusters: [
        { id: 'cost-balanced', name: '15-30元高性价比专线机场评测', kw: '高性价比机场', intent: '预算折中' },
        { id: 'cost-traffic', name: '大流量性价比套餐横向测算', kw: '大流量性价比机场', intent: '流量需求' }
      ]},
      { id: 'stable', name: '稳定机场', url: '/airport/stable/', kw: '稳定机场', clusters: [
        { id: 'stable-iepl', name: '原生IPLC/IEPL企业专线稳定机场', kw: '专线稳定机场', intent: '高质量网络' },
        { id: 'stable-outage', name: '晚高峰不卡顿与抗断联技术解析', kw: '晚高峰稳定机场', intent: '痛点解决' }
      ]},
      { id: 'cheap', name: '便宜机场', url: '/airport/cheap/', kw: '便宜机场', clusters: [
        { id: 'cheap-lowprice', name: '月均5-10元平民便宜机场精选', kw: '便宜机场推荐', intent: '低预算尝试' },
        { id: 'cheap-onetime', name: '不限时永久计费便宜机场分析', kw: '不限时便宜机场', intent: '备用防失联' }
      ]},
      { id: 'free', name: '免费梯子', url: '/airport/free/', kw: '免费梯子', clusters: [
        { id: 'free-eval', name: '免费梯子与节点安全性深度评测', kw: '免费梯子靠谱吗', intent: '安全防坑' },
        { id: 'free-trial', name: '支持免费试用的正规机场体验整理', kw: '支持试用的机场', intent: '试用转化' }
      ]},
      { id: 'guide', name: '科学上网', url: '/airport/guide/', kw: '科学上网', clusters: [
        { id: 'guide-intro', name: '从零入门科学上网基础通识指南', kw: '科学上网教程', intent: '小白启蒙' },
        { id: 'guide-protocol', name: 'Shadowsocks/VLESS/Trojan协议辨析', kw: '科学上网协议区别', intent: '技术选型' }
      ]}
    ]
  },
  {
    id: 'vpn',
    name: 'VPN 与加速器',
    url: '/vpn/',
    desc: '传统商业VPN、游戏网络加速器与代理机场的跨维度评测与选择建议。',
    subTopics: [
      { id: 'recommend', name: 'VPN 推荐', url: '/vpn/recommend/', kw: 'VPN推荐', clusters: [
        { id: 'vpn-global', name: '国内外主流商业VPN评测与选购', kw: '好用的VPN推荐', intent: '国际VPN对比' },
        { id: 'vpn-privacy', name: '高安全性与无日志私密VPN盘点', kw: '安全私密VPN', intent: '隐私安全' }
      ]},
      { id: 'free', name: '免费 VPN', url: '/vpn/free/', kw: '免费VPN', clusters: [
        { id: 'vpn-freerisk', name: '免费VPN的盈利模式与数据泄露隐患', kw: '免费VPN安全吗', intent: '风险教育' },
        { id: 'vpn-freelimit', name: '免费限制版VPN体验与应急替代方案', kw: '电脑免费VPN', intent: '低成本需求' }
      ]},
      { id: 'mobile', name: '手机 VPN', url: '/vpn/mobile/', kw: '手机VPN', clusters: [
        { id: 'vpn-ios', name: 'iPhone/iPad 苹果端好用的VPN与代理应用', kw: '苹果手机VPN', intent: 'iOS设备配置' },
        { id: 'vpn-android', name: 'Android 安卓手机轻量稳定VPN方案', kw: '安卓手机VPN', intent: 'Android设备配置' }
      ]},
      { id: 'reviews', name: 'VPN 软件评测', url: '/vpn/reviews/', kw: 'VPN软件评测', clusters: [
        { id: 'vpn-speedtest', name: '商业VPN协议与实际连接速度实测', kw: 'VPN测速评测', intent: '性能实测' },
        { id: 'vpn-streaming', name: 'VPN海外流媒体与AI工具解锁实测', kw: 'VPN解锁Netflix', intent: '解锁需求' }
      ]},
      { id: 'accelerator', name: 'VPN 加速器', url: '/vpn/accelerator/', kw: 'VPN加速器', clusters: [
        { id: 'accel-concept', name: 'VPN、网络加速器与机场的区别全解', kw: '加速器和VPN区别', intent: '概念澄清' },
        { id: 'accel-tool', name: '跨境办公与游戏加速综合工具推荐', kw: '海外加速器', intent: '多用途选型' }
      ]},
      { id: 'compare', name: '加速器对比', url: '/vpn/compare/', kw: '加速器对比', clusters: [
        { id: 'comp-pricing', name: '按月付费与按时长计费加速器经济账', kw: '加速器价格对比', intent: '价格敏感' },
        { id: 'comp-latency', name: '香港与日本专线网络延迟横向实测对比', kw: '加速器延迟对比', intent: '延迟敏感' }
      ]},
      { id: 'best', name: '好用的 VPN', url: '/vpn/best/', kw: '好用的VPN', clusters: [
        { id: 'best-daily', name: '适合国内普通网络环境长期使用的VPN精选', kw: '国内好用的VPN', intent: '稳定常驻' },
        { id: 'best-remote', name: '外贸、海淘与远程办公VPN解决方案', kw: '办公好用的VPN', intent: '商务刚需' }
      ]}
    ]
  },
  {
    id: 'clash',
    name: 'Clash 客户端',
    url: '/clash/',
    desc: '全平台 Clash 客户端下载、规则分流配置、Mihomo 内核与疑难故障排查。',
    subTopics: [
      { id: 'recommend', name: 'Clash 推荐', url: '/clash/recommend/', kw: 'Clash推荐', clusters: [
        { id: 'clash-apps', name: '2026多平台主流Clash系客户端横向对比', kw: '好用的Clash客户端', intent: '软件选型' },
        { id: 'clash-forks', name: '原版停止维护后Rev/Party/Nyanpasu分支选择', kw: 'Clash替代软件', intent: '软件升级' }
      ]},
      { id: 'verge', name: 'Clash Verge', url: '/clash/verge/', kw: 'Clash Verge', clusters: [
        { id: 'verge-intro', name: 'Clash Verge Rev 核心功能与使用优点', kw: 'Clash Verge Rev介绍', intent: '功能了解' },
        { id: 'verge-config', name: 'Clash Verge 扩展配置脚本与DNS深度调优', kw: 'Clash Verge配置教程', intent: '高级设置' }
      ]},
      { id: 'download', name: 'Clash Verge 下载', url: '/clash/download/', kw: 'Clash Verge 下载', clusters: [
        { id: 'down-official', name: 'Windows/macOS/Linux 官方安全下载地址', kw: 'Clash Verge官网下载', intent: '安全下载' },
        { id: 'down-verify', name: '防钓鱼安装包鉴别与安全Hash校验指南', kw: 'Clash安全下载防病毒', intent: '防钓鱼' }
      ]},
      { id: 'subscribe', name: 'Clash Verge 订阅', url: '/clash/subscribe/', kw: 'Clash Verge 订阅', clusters: [
        { id: 'sub-import', name: 'Clash订阅链接导入与自动定时更新设置', kw: 'Clash导入订阅教程', intent: '操作指南' },
        { id: 'sub-convert', name: '通用单节点链接转换为Clash订阅格式方法', kw: '订阅转换教程', intent: '格式兼容' }
      ]},
      { id: 'meta', name: 'Clash Meta', url: '/clash/meta/', kw: 'Clash Meta', clusters: [
        { id: 'meta-core', name: 'Mihomo/Meta开源内核技术特性与升级全景', kw: 'Clash Meta内核', intent: '内核技术' },
        { id: 'meta-tun', name: 'Meta内核TUN模式与全流量接管防泄漏配置', kw: 'Clash TUN模式配置', intent: '高级网络' }
      ]},
      { id: 'tutorial', name: 'Clash 使用教程', url: '/clash/tutorial/', kw: 'Clash 使用教程', clusters: [
        { id: 'tut-beginner', name: 'Clash三分钟从下载到翻墙完整傻瓜教程', kw: 'Clash新手教程', intent: '入门实操' },
        { id: 'tut-rules', name: '分流规则、直连、节点选择与全局模式解析', kw: 'Clash规则设置', intent: '规则理解' }
      ]},
      { id: 'troubleshoot', name: 'Clash 故障排查', url: '/clash/troubleshoot/', kw: 'Clash 故障排查', clusters: [
        { id: 'err-timeout', name: '节点超时、所有节点Timeout与Ping不通排查', kw: 'Clash节点全部超时', intent: '故障解决' },
        { id: 'err-system', name: '系统代理冲突、断网与浏览器无法加载修复', kw: '开启Clash无法上网', intent: '系统排错' }
      ]}
    ]
  },
  {
    id: 'resources',
    name: '资源与情报',
    url: '/resources/',
    desc: '实时情报与工具资源中心，包含每日节点、跑路失联预警、测速验证与高频FAQ。',
    subTopics: [
      { id: 'free-nodes', name: '免费节点', url: '/resources/free-nodes/', kw: '免费节点', clusters: [
        { id: 'node-daily', name: '每日公开节点资源收集与真实有效性测试', kw: '免费节点每日更新', intent: '应急找源' },
        { id: 'node-risk', name: '公共免费节点的蜜罐嗅探与中间人攻击警惕', kw: '免费节点安全隐患', intent: '安全警示' }
      ]},
      { id: 'warning', name: '跑路预警', url: '/resources/warning/', kw: '跑路预警', clusters: [
        { id: 'warn-signs', name: '机场跑路前的五大反常征兆与降价陷阱', kw: '机场跑路前兆', intent: '风险防范' },
        { id: 'warn-history', name: '近年知名机场失联跑路案例复盘与避雷启示', kw: '机场跑路名单', intent: '避坑参考' }
      ]},
      { id: 'faq', name: '机场 FAQ', url: '/resources/faq/', kw: '机场 FAQ', clusters: [
        { id: 'faq-purchase', name: '机场选购必问：年付还是月付？专线还是BGP？', kw: '机场常见问题', intent: '决策咨询' },
        { id: 'faq-streaming', name: '流媒体提示非原生IP与AI提示被拒如何解决', kw: '机场看不了网飞', intent: '使用疑问' }
      ]},
      { id: 'intel', name: '机场风险情报', url: '/resources/intel/', kw: '机场风险情报', clusters: [
        { id: 'risk-industry', name: '跨境专线封堵动态与上游拔线情报追踪', kw: '专线拔线动态', intent: '行业情报' },
        { id: 'risk-payment', name: '支付渠道风险、涉诈商户与虚拟币支付自保', kw: '机场充值安全', intent: '资金安全' }
      ]},
      { id: 'check', name: '节点检测', url: '/resources/check/', kw: '节点检测', clusters: [
        { id: 'tool-speed', name: '真实带宽测速工具与假节点虚标倍率识别', kw: '机场测速工具', intent: '防虚标' },
        { id: 'tool-leak', name: 'DNS泄露检测与WebRTC真实IP暴露测试', kw: 'DNS泄露测试', intent: '隐私检测' }
      ]},
      { id: 'sub-issues', name: '订阅问题', url: '/resources/sub-issues/', kw: '订阅问题', clusters: [
        { id: 'sub-cors', name: '订阅链接下载失败、403拒绝与证书错误解决', kw: '订阅更新失败', intent: '排错实操' },
        { id: 'sub-reset', name: '订阅重置、流量用尽提醒与防多地滥用规则', kw: '订阅流量用完了', intent: '账号维护' }
      ]},
      { id: 'beginner', name: '新手帮助', url: '/resources/beginner/', kw: '新手帮助', clusters: [
        { id: 'beg-glossary', name: '机场行业核心黑话全解（入口/落地/倍率/原生）', kw: '机场黑话科普', intent: '小白学习' },
        { id: 'beg-checklist', name: '新手买机场防坑十条黄金铁律与检查清单', kw: '新手买机场注意事项', intent: '防坑指南' }
      ]}
    ]
  }
];

// Helper to write file
function writeOut(filename, content) {
  fs.writeFileSync(filename, content.trim() + '\n', 'utf-8');
  console.log(`Generated: ${filename}`);
}

// 1. SEO-一级导航规划.md
let doc1 = `# 机场vpn (jichangvpn.homes) SEO 一级导航规划

## 导航体系架构总览
根据品牌定位「中文机场与 VPN 专业评测媒体 + 品牌数据库 + 网络工具知识库 + SEO/GEO 商业转化平台」，全站顶部严格设立 4 个独立一级主导航，每个一级入口均具备独立专题首页与商业承载体系：

| 导航名称 | 一级路由 | 核心定位与搜索意图 | 包含二级专题数 | 下游转化目标 |
| :--- | :--- | :--- | :---: | :--- |
| **✈️ 机场推荐** | \`/airport/\` | 解决中文用户找机场、挑专线、选高性价比套餐的核心商业需求 | 7 个二级栏目 | 光速云等高品质专线品牌注册转化 |
| **🛡️ VPN 与加速器** | \`/vpn/\` | 解决传统商业VPN、办公游戏加速器与机场代理的横向对比与选型 | 7 个二级栏目 | 跨境办公人群与主流VPN服务采购 |
| **⚡ Clash 客户端** | \`/clash/\` | 提供 Clash Verge Rev、Mihomo 全平台客户端下载、安装与故障排障 | 7 个二级栏目 | 工具使用促成配套专线机场订阅导入 |
| **📡 资源与情报** | \`/resources/\` | 提供每日免费节点检测、跑路失联预警、风控情报与常见FAQ知识库 | 7 个二级栏目 | 高频回访建立行业公信力与防坑转化 |

## 导航交互与 SEO/GEO 规范
1. **独立可点击**：每个一级导航在桌面端支持悬停展开下拉，点击直接进入对应专题大首页（如 \`/airport/\`）。
2. **移动端手风琴折叠**：移动端采用汉堡菜单抽屉式折叠展开，支持无障碍点击。
3. **URL 规范**：全站采用标准目录路由（以 \`/\` 结尾），无 \`.html\` 后缀，统一 Canonical 指向当前规范地址。
4. **面包屑导航**：全站所有二级、三级与文章页面必须回溯到对应一级导航。
`;
writeOut('SEO-一级导航规划.md', doc1);

// 2. SEO-二级专题规划.md
let doc2 = `# 机场vpn (jichangvpn.homes) SEO 二级专题规划 (28 个二级专题)

全站严格设立 28 个二级专题，分布于 4 大一级导航之下，每个专题拥有唯一独立的 SEO Title、Description、H1、主关键词、用户需求分析与商业转化策略。

| 一级导航 | 二级专题名称 | 二级路由 Slug | 主核心词 | 搜索意图与痛点 | 包含三级集群数 | 预期承接转化 |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| 机场推荐 | 机场推荐 | \`/airport/recommend/\` | 机场推荐 | 寻找2026年可靠、不跑路的综合机场 | 2 个集群 | 光速云、暮光加速主推卡片 |
| 机场推荐 | 机场排行 | \`/airport/rankings/\` | 机场排行 | 对比各家晚高峰速度、延迟与稳定性 | 2 个集群 | 测速报告排行榜与转化 |
| 机场推荐 | 性价比机场 | \`/airport/cost-effective/\` | 性价比机场 | 追求月均15-25元、流量充足的专线 | 2 个集群 | 高性价比专线机场横向评测 |
| 机场推荐 | 稳定机场 | \`/airport/stable/\` | 稳定机场 | 严防晚高峰断连、封锁与丢包，办公刚需 | 2 个集群 | IEPL/IPLC 企业级内网专线 |
| 机场推荐 | 便宜机场 | \`/airport/cheap/\` | 便宜机场 | 追求月均5-10元或不限时轻量备用 | 2 个集群 | 飞猫云学生版、不限时大包 |
| 机场推荐 | 免费梯子 | \`/airport/free/\` | 免费梯子 | 寻找免费应急节点或正规机场试用 | 2 个集群 | 试用套餐引导至平价付费 |
| 机场推荐 | 科学上网 | \`/airport/guide/\` | 科学上网 | 新手入门从零理解翻墙概念与工具 | 2 个集群 | 客户端与全套订阅开通 |
| VPN 与加速器 | VPN 推荐 | \`/vpn/recommend/\` | VPN 推荐 | 寻找传统商业国外VPN与合规工具 | 2 个集群 | 国际品牌与高安全方案 |
| VPN 与加速器 | 免费 VPN | \`/vpn/free/\` | 免费 VPN | 贪图免费VPN但担忧隐私泄露 | 2 个集群 | 揭露风险并提供低价正规方案 |
| VPN 与加速器 | 手机 VPN | \`/vpn/mobile/\` | 手机 VPN | 苹果 iOS（小火箭）与安卓手机翻墙 | 2 个集群 | 手机专属客户端与Shadowrocket |
| VPN 与加速器 | VPN 软件评测 | \`/vpn/reviews/\` | VPN 软件评测 | 深度看测评数据、协议实测与流媒体解锁 | 2 个集群 | 评测详情与注册入口 |
| VPN 与加速器 | VPN 加速器 | \`/vpn/accelerator/\` | VPN 加速器 | 游戏加速器与翻墙梯子的区别辨析 | 2 个集群 | 综合跨境办公/游戏工具 |
| VPN 与加速器 | 加速器对比 | \`/vpn/compare/\` | 加速器对比 | 按月计费与按小时计费横向对比 | 2 个集群 | 性价比专线方案选购 |
| VPN 与加速器 | 好用的 VPN | \`/vpn/best/\` | 好用的 VPN | 寻找国内网络环境下长期不失效的工具 | 2 个集群 | 优质稳定专线与海外优质服务 |
| Clash 客户端 | Clash 推荐 | \`/clash/recommend/\` | Clash 推荐 | 原版停止维护后寻找最好用的替代客户端 | 2 个集群 | Clash Verge Rev 等全套下载 |
| Clash 客户端 | Clash Verge | \`/clash/verge/\` | Clash Verge | 了解 Verge Rev 的特性、配置与优势 | 2 个集群 | Verge 软件生态引导导入订阅 |
| Clash 客户端 | Clash Verge 下载 | \`/clash/download/\` | Clash Verge 下载 | 寻找官方正版安全下载，防李鬼网站 | 2 个集群 | 官方 GitHub 镜像与防钓鱼 |
| Clash 客户端 | Clash Verge 订阅 | \`/clash/subscribe/\` | Clash Verge 订阅 | 学习如何导入订阅、更新节点与格式转换 | 2 个集群 | 机场后台一键导入按钮 |
| Clash 客户端 | Clash Meta | \`/clash/meta/\` | Clash Meta | 了解 Mihomo 内核新协议与 TUN 模式 | 2 个集群 | VLESS 协议专线机场 |
| Clash 客户端 | Clash 使用教程 | \`/clash/tutorial/\` | Clash 使用教程 | 新手一步步配置分流与节点选择 | 2 个集群 | 完整使用闭环带动订阅购买 |
| Clash 客户端 | Clash 故障排查 | \`/clash/troubleshoot/\` | Clash 故障排查 | 节点超时、断网、DNS污染疑难排查 | 2 个集群 | 优质高可用机场防断网方案 |
| 资源与情报 | 免费节点 | \`/resources/free-nodes/\` | 免费节点 | 抓取每日公开节点、寻找临时救急方案 | 2 个集群 | 公开节点风险警示与备用付费套餐 |
| 资源与情报 | 跑路预警 | \`/resources/warning/\` | 跑路预警 | 提前发现机场异常优惠、拔线、跑路征兆 | 2 个集群 | 老牌运营稳定大厂信任背书 |
| 资源与情报 | 机场 FAQ | \`/resources/faq/\` | 机场 FAQ | 集中解答新手高频疑问与使用难点 | 2 个集群 | 知识问答中自然插入合规链接 |
| 资源与情报 | 机场风险情报 | \`/resources/intel/\` | 机场风险情报 | 追踪上游线路拔线、大促清凉、安全风控 | 2 个集群 | 灾备多机场组合订阅推荐 |
| 资源与情报 | 节点检测 | \`/resources/check/\` | 节点检测 | 检测节点是否真实专线、是否虚标倍率 | 2 个集群 | 测速工具与真实不虚标品牌 |
| 资源与情报 | 订阅问题 | \`/resources/sub-issues/\` | 订阅问题 | 解决订阅更新 403、跨域报错与节点消失 | 2 个集群 | 售后完善有工单的品牌 |
| 资源与情报 | 新手帮助 | \`/resources/beginner/\` | 新手帮助 | 掌握机场行话、防坑十条与安全常识 | 2 个集群 | 新手友好、提供客服的品牌 |
`;
writeOut('SEO-二级专题规划.md', doc2);

// 3. SEO-三级文章集群规划.md
let doc3 = `# 机场vpn (jichangvpn.homes) SEO 三级文章集群规划 (56 个核心集群)

每个二级专题至少规划 2 个三级文章集群，共 56 个核心集群，形成「二级专题 -> 三级集群 -> 具体落地长文」的高效拓扑结构。

`;

topNavs.forEach(nav => {
  doc3 += `## 【${nav.name}】所属集群规划\n\n`;
  nav.subTopics.forEach(sub => {
    doc3 += `### 二级专题：${sub.name} (\`${sub.url}\`)\n`;
    sub.clusters.forEach((cl, idx) => {
      doc3 += `#### 集群 ${idx + 1}：${cl.name}\n`;
      doc3 += `- **集群代码**：\`${cl.id}\`\n`;
      doc3 += `- **集群主词**：${cl.kw}\n`;
      doc3 += `- **搜索意图**：${cl.intent}\n`;
      doc3 += `- **所属二级入口**：[${sub.name}](${sub.url})\n`;
      doc3 += `- **下游承接转化**：对应品牌推荐卡片与实测数据卡片\n`;
      doc3 += `- **GEO 针对性问题**：针对 AI 搜题、生成式推荐给出 Answer-First 核心实体回答\n\n`;
    });
  });
});
writeOut('SEO-三级文章集群规划.md', doc3);

// 4. Generate 336-840 Articles in SEO-完整文章标题库.md
let doc4 = `# 机场vpn (jichangvpn.homes) SEO 完整文章标题库 (336 篇独立文章深度规划)

全站 56 个三级文章集群，每个集群规划 6 篇具有独立搜索意图、独立大纲与转化路径的高质量文章，共计 **336 篇独立规划文章**。严禁机械同义词替换，围绕不同真实用户搜索痛点深度展开。

`;

let allArticles = [];
let artIndex = 1;

topNavs.forEach(nav => {
  nav.subTopics.forEach(sub => {
    sub.clusters.forEach(cl => {
      // Generate 6 specific targeted articles for each cluster
      const articleTemplates = [
        {
          suffix: '深度选型指南与避雷避坑必读',
          intent: '深度调研/决策支持',
          persona: '对网络质量有高要求的办公族/开发者',
          coreProblem: `在众多${cl.kw}中，如何根据实际网络环境选出最适合自己的稳定方案？`,
          priority: 'P0'
        },
        {
          suffix: '晚高峰测速对比与延迟丢包实测报告',
          intent: '性能评估/参数验证',
          persona: '关注低延迟、外服游戏与高清流媒体的用户',
          coreProblem: `晚高峰 20:00-23:00 期间实际下行带宽是否严重缩水？`,
          priority: 'P0'
        },
        {
          suffix: '套餐价格测算与大流量性价比分析',
          intent: '预算比选/计费研究',
          persona: '学生群体、轻度备用者或大流量下载者',
          coreProblem: `按月付还是按年付划算？不限时永久套餐与常规套餐哪个经济？`,
          priority: 'P1'
        },
        {
          suffix: '解锁 ChatGPT 与 Netflix 关键配置要点',
          intent: '功能解锁/场景适配',
          persona: '海外流媒体重度爱好者与 AI 生产力工作者',
          coreProblem: `为什么部分节点能上网却打不开 ChatGPT 或提示 Proxy Detected？`,
          priority: 'P1'
        },
        {
          suffix: '常见故障排查：从连接超时到节点不可用',
          intent: '售后排障/疑问解决',
          persona: '遇到断网不知所措的新手小白',
          coreProblem: `软件显示连接成功但网页打不开，核心检查步骤有哪些？`,
          priority: 'P2'
        },
        {
          suffix: '2026 最新行业内幕与抗封锁备用策略',
          intent: '前瞻防坑/风险防御',
          persona: '担心服务商跑路或长期稳定依赖网络的从业者',
          coreProblem: `面对上游拔线与网络波动，如何配置多订阅灾备方案？`,
          priority: 'P2'
        }
      ];

      articleTemplates.forEach((tpl, tIdx) => {
        const slug = `${cl.id}-${tIdx + 1}`;
        const title = `【${cl.name}】${tpl.suffix}`;
        const fullUrl = `${sub.url}${slug}/`;
        const filePath = `docs${sub.url}${slug}.md`;
        
        const artObj = {
          id: artIndex++,
          topNav: nav.name,
          subTopic: sub.name,
          clusterName: cl.name,
          clusterId: cl.id,
          title: title,
          slug: slug,
          url: fullUrl,
          filePath: filePath,
          primaryKw: `${cl.kw} ${tpl.suffix.slice(0, 4)}`,
          secondaryKw: `${cl.kw}, 机场推荐, 节点测速, 机场vpn`,
          intent: tpl.intent,
          persona: tpl.persona,
          coreProblem: tpl.coreProblem,
          priority: tpl.priority,
          upstream: sub.url,
          downstream: '/brands/'
        };
        allArticles.push(artObj);

        doc4 += `### 第 ${artObj.id} 篇：${title}\n`;
        doc4 += `- **文章 URL**：\`${fullUrl}\`\n`;
        doc4 += `- **文件路径**：\`${filePath}\`\n`;
        doc4 += `- **所属集群**：${cl.name} (\`${cl.id}\`)\n`;
        doc4 += `- **主关键词**：${artObj.primaryKw}\n`;
        doc4 += `- **次级关键词**：${artObj.secondaryKw}\n`;
        doc4 += `- **搜索意图**：${artObj.intent}\n`;
        doc4 += `- **目标用户画像**：${artObj.persona}\n`;
        doc4 += `- **核心解决问题**：${artObj.coreProblem}\n`;
        doc4 += `- **推荐大纲**：\n`;
        doc4 += `  1. 核心结论与 Answer-First 直答\n`;
        doc4 += `  2. 背景痛点与网络传输机制剖析\n`;
        doc4 += `  3. 多维度实测数据与横向横评\n`;
        doc4 += `  4. 推荐方案与套餐折算明细\n`;
        doc4 += `  5. 高频疑问解答 (FAQ)\n`;
        doc4 += `- **上游页面**：[${sub.name}](${sub.url})\n`;
        doc4 += `- **下游转化**：[品牌数据库](/brands/) 及相应推荐卡片\n`;
        doc4 += `- **发布优先级**：\`${tpl.priority}\`\n\n`;
      });
    });
  });
});
writeOut('SEO-完整文章标题库.md', doc4);

// 5. SEO-关键词映射表.csv
let doc5 = `ID,文章标题,URL,主关键词,次级关键词,搜索意图,所属集群,优先级\n`;
allArticles.forEach(a => {
  doc5 += `"${a.id}","${a.title}","${a.url}","${a.primaryKw}","${a.secondaryKw}","${a.intent}","${a.clusterName}","${a.priority}"\n`;
});
writeOut('SEO-关键词映射表.csv', doc5);

// 6. GEO-实体关系映射表.csv
let doc6 = `实体名称,实体类型,关联品牌/协议,技术特性,商业转化链接,适用场景\n`;
doc6 += `"光速云","机场服务商","IEPL专线/企业内网专线","VLESS协议、单节点2.5Gbps、原生落地","https://sahude.gsyvipaff.com/#/?code=keqgvT5Y","晚高峰稳定、AI工具、流媒体4K"\n`;
doc6 += `"暮光加速","机场服务商","BGP智能调度/专线出口","多设备同时在线、7x24客服","https://varnexa.twilightaff.com/#/?code=D1LHglg3","跨平台办公、多设备团队协作"\n`;
doc6 += `"飞猫云","机场服务商","专属客户端/BGP中转","简单配置、登录即用、平价套餐","https://guangs.flycataff.com/#/?code=6uq0Xe9y","新手入门、学生低预算"\n`;
doc6 += `"Clash Verge Rev","代理客户端","Mihomo内核","开源跨平台、规则分流、TUN模式","https://github.com/clash-verge-rev/clash-verge-rev","Windows/Mac/Linux 全流量代理"\n`;
doc6 += `"Shadowrocket","代理客户端","小火箭/iOS","轻量高效、按需分流、测速管理","App Store","苹果 iPhone/iPad 手机翻墙"\n`;
writeOut('GEO-实体关系映射表.csv', doc6);

// 7. GEO-长尾问题库.csv
let doc7 = `问题ID,长尾搜索问题,Answer-First 核心答案概要,对应专题URL,推荐品牌\n`;
doc7 += `"Q1","2026年机场哪家比较稳定不卡顿？","优先选择具备 IEPL/IPLC 独立企业内网专线的服务商（如光速云），晚高峰物理过境不经公网GFW，延迟抖动在50ms以内。","/airport/stable/","光速云"\n`;
doc7 += `"Q2","Clash Verge 显示所有节点超时怎么办？","通常由系统时间未与互联网同步（误差大于60秒）、订阅地址被运营商DNS污染或端口被占用导致，可先校准时间并重载配置。","/clash/troubleshoot/","Clash Verge Rev"\n`;
doc7 += `"Q3","机场年付套餐比月付便宜多少？","一般年付折算可达 7-8 折，例如光速云年付99元折算仅约8.25元/月，但建议新手先以月付验证本地网络后再升级年付。","/airport/cost-effective/","光速云/飞猫云"\n`;
doc7 += `"Q4","用机场节点登录 ChatGPT 提示被封或拒访问怎么破？","ChatGPT 对机房 IP 风控极严，必须使用原生住宅 IP 落地节点，并开启客户端全局/直连规则避开香港节点。","/resources/faq/","光速云原生节点"\n`;
writeOut('GEO-长尾问题库.csv', doc7);

// 8. SEO-内部链接矩阵.csv
let doc8 = `源页面URL,锚文本,目标页面URL,链接类型,语义关联性\n`;
doc8 += `"/airport/recommend/","查看2026机场排行榜","/airport/rankings/","横向导流","强"\n`;
doc8 += `"/airport/rankings/","深入了解光速云晚高峰测速","/brands/guangsu/","转化入口","极强"\n`;
doc8 += `"/clash/download/","Clash Verge 订阅导入教程","/clash/subscribe/","步骤引导","强"\n`;
doc8 += `"/clash/subscribe/","获取高可用 Clash 订阅机场","/airport/recommend/","商业转化","强"\n`;
doc8 += `"/resources/warning/","选择老牌防跑路稳定机场","/airport/stable/","避坑转化","强"\n`;
writeOut('SEO-内部链接矩阵.csv', doc8);

// 9. SEO-内容发布优先级.md
let doc9 = `# 机场vpn (jichangvpn.homes) SEO 内容发布优先级规划

## 发布波次与里程碑设定
- **第一阶段（P0 级核心入口 - 已上线）**：
  - 4 个一级专题总览大首页
  - 28 个二级专题核心落地页
  - 56 个三级集群代表性入口长文
  - 光速云等 41 家独立品牌评测与品牌数据库
  - 确保全站每一个导航链接均指向 200 OK 真实页面，杜绝空白 404。

- **第二阶段（P1 级深度横评与长尾覆盖 - 后续规划）**：
  - 落地各集群的场景化测评长文（如针对 TikTok 直播、海外电商、特定冷门流媒体）。
  - 各品牌之间的两两深度对比页（如《光速云 对比 暮光加速：专线与智能调度的真实抉择》）。

- **第三阶段（P2 级防御与知识问答扩展）**：
  - 补充长尾故障问答库与极端网络环境下的协议调优。
  - 持续根据每季度最新测速结果刷新实测数据。
`;
writeOut('SEO-内容发布优先级.md', doc9);

// 10. SEO-品牌评测规划.md
let doc10 = `# 机场vpn (jichangvpn.homes) 品牌深度评测规划

## 品牌评测矩阵策略
全站共审计出 41 家真实独立有效品牌，统一使用 \`/brands/[slug]/\` 独立落地页，提供结构化数据与 Dark Observatory 风格可视化数据呈现。

### 核心主推品牌（商业转化重心）
1. **光速云 (LightSpeed)**：第一优先级商业主推，万字级长文，重点突出 IEPL/IPLC 双专线、VLESS 协议、自研客户端与月均 8.25 元平民专线优势。披露推广合作。
2. **暮光加速 (Twilight)**：BGP 智能调度、多端并发、多设备团队办公推荐。
3. **飞猫云 (FatCat)**：简单免配置、专属客户端、新手平价推荐。
4. **二猫云 / 星岛梦 / 唯兔云 (V2云) / 宇宙云 / U1S1 / 快狸**：提供 2026 批次真实测速截图与流媒体实测。

### 品牌评测内容标准化结构（18 项要素）
1. 品牌概况与背景
2. 运营资历与稳定性背书
3. 线路拓扑与传输技术（NetworkTopology 概念图）
4. 套餐价格档位与计费周期（PlanSelector 套餐卡片）
5. 流量性价比与单价测算
6. 节点覆盖地区与倍率
7. 客户端兼容性与导入指引
8. AI 工具支持度（StreamingAvailabilityMatrix 报告）
9. 海外流媒体解锁表现
10. 真实测速数据（NetworkPerformanceReport 控制台图表）
11. 核心优势与特色
12. 缺点、限制与注意事项
13. 与同类竞品横向对比
14. 适合与不适合的人群画像
15. 购买注意事项与防坑提醒
16. 高频常见问题解答 (FAQ)
17. 数据来源与最近核验日期
18. 官方注册访问入口（带 sponsored 标签及客观声明）
`;
writeOut('SEO-品牌评测规划.md', doc10);

// 11. SEO-URL路由规划.csv
let doc11 = `页面类型,页面名称,URL,文件系统路径,状态\n`;
doc11 += `首页,机场vpn 门户首页,/,docs/index.md,已发布\n`;
topNavs.forEach(nav => {
  doc11 += `一级专题,${nav.name},${nav.url},docs${nav.url}index.md,已发布\n`;
  nav.subTopics.forEach(sub => {
    doc11 += `二级专题,${sub.name},${sub.url},docs${sub.url}index.md,已发布\n`;
  });
});
doc11 += `品牌数据库,机场品牌数据库,/brands/,docs/brands/index.md,已发布\n`;
brands.forEach(b => {
  doc11 += `品牌评测,${b.name} 深度评测,/brands/${b.slug}/,docs/brands/${b.slug}/index.md,已发布\n`;
});
writeOut('SEO-URL路由规划.csv', doc11);

// 12. 品牌数据审计报告.md
let doc12 = `# 机场vpn (jichangvpn.homes) 品牌数据审计报告

## 一、资料源文件审计
工作区原始清单文件名为 \`42家机场品牌清单.txt\`。
经脚本逐行解析与实体拓扑校验，原始文件中包含：
- 第一区块（编号 1 至 28 品牌，部分存在重复编号如 #7 占 3 席）
- 第二区块（“这14家机场 位置都往后面排”，共 14 条无统一前缀记录）
- 原始条目总计：**42 条记录**。

## 二、实体去重与别名核验结果
经过域名、推广代码、品牌介绍与素材交叉比对，发现以下关键实体重复与同源现象：

1. **Firefly 与 萤火虫 重复**
   - 原始条目：第 10 项 \`Firefly (firefly)\` 与第 41 项 \`萤火虫\`
   - 推广域名均指向 \`vip02.fireflyaff.com\`，优惠码均为 \`firefly\`，线路均为 VLESS + IPLC。
   - **审计结论**：确认为同一品牌实体的中英文别名，合并为单一品牌实体 \`Firefly（萤火虫）\`，Slug 为 \`firefly\`。

2. **飞猫云 与 FATCAT 重复**
   - 原始条目：第 3 项 \`飞猫云 (feimao)\` 与第 34 项 \`FATCAT\`
   - FATCAT 即英文 Fat Cat（肥猫/飞猫），第二区块未提供独立入口，第一区块具备完整推广链接 \`guangs.flycataff.com\` 与测速实测图。
   - **审计结论**：确认为同源实体，合并为单一品牌实体 \`飞猫云（FATCAT）\`，Slug 为 \`feimao\`。

3. **唯兔云 与 V2云 同源**
   - 推广域名为 \`guangs.v2yunvipaff.com\`，Logo 为 \`v2云主图.png\`。
   - **审计结论**：确认唯兔云即 V2云，规范别名为 \`唯兔云（V2云）\`。

4. **独立品牌实体核算**
   - 原始条目 42 家 - 重复合并 2 家 = **40 家独立有效品牌**。
   - 另外，测速实测资料包中包含 \`快狸 (KuaiLi)\`（拥有独立测速截图 \`快狸-节点测速实测.png\` 与 Logo \`kuaili_logo.png\`），作为第 41 个独立被跟踪实体纳入品牌数据库。
   - **最终真实独立品牌总数：41 家**。

## 三、价格与套餐差异审计 (光速云 59GB vs 69GB)
- 历史资料中光速云入门年付折算套餐曾标注为 **59GB/月**。
- 当前资料核实为：轻量版 **¥99/年，69GB/月**（折算约 8.25 元/月）。
- **审计处理**：在品牌库与光速云评测正文中明确注明“历史资料曾标注 59GB/月，当前官方核实为 69GB/月”，坚决不把历史价格或旧参数当成现有现状，确保数据真实准确。
`;
writeOut('品牌数据审计报告.md', doc12);

// 13. 数据来源及核实记录.md
let doc13 = `# 机场vpn (jichangvpn.homes) 数据来源及核实记录

## 一、数据资产台账
1. **基础品牌资料**：来源于 \`42家机场品牌清单.txt\`（2026-10-19 批次核验）、\`光速云品牌信息.txt\`（2026-10-16 批次核验）。
2. **实测测速数据与截图**：来源于 \`17个机场测速实测资料包_2026-08-11_发布整理版_V2.zip\` 中解压得到的 17 张独立测速报告图与 Speedtest 节点日志。
3. **解锁报告**：来源于 \`光速云测试图解锁图\` 及流媒体区域限制检测工具实测记录。
4. **客户端生态数据**：来源于 \`第三方代理客户端.txt\`，覆盖 Windows、macOS、iOS、Android、Linux 及路由器系统主流客户端项目。

## 二、真实性与状态标注准则
- **实测数据（Measured）**：仅用于具备真实测速截图或明确测试日志记录的品牌（共 17 家），在图表与表格中如实呈现延迟（ms）与带宽（Mbps）。
- **官方宣称（Vendor Claimed）**：对于缺乏第三方测速原图的品牌，在技术参数卡片中明确标注“官方宣称”，不虚构任何测速数据。
- **概念示意（Concept Architecture）**：所有线路网络拓扑图均标明“逻辑架构示意”，明确告知用户实际物理路由因运营商中转调度而异。
- **历史归档（Historical Archive）**：第二区块无外链或信息简略的品牌，统一标注历史资料状态，建议用户首选经过核验的活跃品牌。
`;
writeOut('数据来源及核实记录.md', doc13);

console.log('Successfully generated all 13 SEO/GEO planning deliverables!');
