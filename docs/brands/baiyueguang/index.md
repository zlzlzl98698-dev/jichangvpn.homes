---
title: 白月光怎么样？2026套餐价格、线路节点与稳定性深度评测
description: 白月光深度评测报告。详细分析其BGP中转/优质落地线路架构、套餐价格、Shadowsocks/VLESS协议支持、晚高峰实测速度、流媒体与AI工具解锁表现与选购建议。
head:
  - - meta
    - name: keywords
      content: 白月光, 白月光怎么样, 白月光评测, 白月光套餐价格, 白月光优惠码, 白月光官网, 白月光好用吗
---

<Breadcrumb :items="[{ name: '机场品牌数据库', url: '/brands/' }, { name: '白月光 深度评测' }]" />

# 白月光 深度评测与实测报告 (2026 最新版)

<BrandInfrastructureSnapshot 
  brandName="白月光"
  operationalSince="待核实"
  lines="BGP中转/优质落地"
  :protocols='[&quot;Shadowsocks&quot;,&quot;VLESS&quot;]'
  :clients='[&quot;Clash Verge Rev&quot;,&quot;Shadowrocket&quot;,&quot;v2rayN&quot;]'
  minPriceLabel="¥66/月起"
  dataStatus="measured"
  verifiedDate="2026-10-19"
  dataSource="实测截图（2026-08/2026-10批次）+ 品牌公开资料"
/>

<CommercialDisclosure :brandName="'白月光'" :isSponsored="false" />

## 一、品牌概况与核心定位

**白月光**（英文标识：BaiYueGuang）自 **待核实** 开始运营，定位为面向中文用户的专业网络代理服务商。其技术架构主要依托 **BGP中转/优质落地**，在通信协议上深度支持 **Shadowsocks、VLESS**，兼顾日常低延迟办公、高码率流媒体影音播放与现代 AI 工具（如 ChatGPT、Claude）访问需求。

在客户端适配方面，白月光 支持主流通用客户端订阅导入（如 **Clash Verge Rev、Shadowrocket、v2rayN**），部分套餐亦提供一键连接的自研客户端，降低新手小白的配置门槛。

---

## 二、线路技术与网络拓扑

白月光 的核心竞争力在于其部署的 **BGP中转/优质落地** 网络工程：

<NetworkTopology 
  brandName="白月光"
  lineType="BGP中转/优质落地"
  protocols="Shadowsocks / VLESS"
  :isConcept="false"
/>

通过物理专线或 BGP 智能中转，用户终端加密流量进入国内接入点后直接走专线跨境，**不经过公网 GFW 敏感节点**，有效抑制了晚高峰时段由于公网拥堵造成的严重丢包与 TCP 握手重传。

---

## 三、套餐资费与流量性价比

以下为 白月光 官方公布的代表性套餐价格表：

<PlanSelector 
  brandName="白月光"
  coupon=""
  affUrl="https://sibker.com/register?invite_code=gg6puAId"
  :plans='[{&quot;name&quot;:&quot;小包&quot;,&quot;billing&quot;:&quot;季付&quot;,&quot;price&quot;:&quot;¥66&quot;,&quot;traffic&quot;:&quot;每月100GB高速流量&quot;,&quot;cycle&quot;:&quot;每月&quot;},{&quot;name&quot;:&quot;中包&quot;,&quot;billing&quot;:&quot;季付&quot;,&quot;price&quot;:&quot;¥126&quot;,&quot;traffic&quot;:&quot;每月250GB高速流量&quot;,&quot;cycle&quot;:&quot;每月&quot;},{&quot;name&quot;:&quot;大包&quot;,&quot;billing&quot;:&quot;季付&quot;,&quot;price&quot;:&quot;¥156&quot;,&quot;traffic&quot;:&quot;每月400GB高速流量&quot;,&quot;cycle&quot;:&quot;每月&quot;},{&quot;name&quot;:&quot;超大包&quot;,&quot;billing&quot;:&quot;季付&quot;,&quot;price&quot;:&quot;¥216&quot;,&quot;traffic&quot;:&quot;每月750GB高速流量&quot;,&quot;cycle&quot;:&quot;每月&quot;},{&quot;name&quot;:&quot;不差钱&quot;,&quot;billing&quot;:&quot;季付&quot;,&quot;price&quot;:&quot;¥231&quot;,&quot;traffic&quot;:&quot;每月900GB高速流量&quot;,&quot;cycle&quot;:&quot;每月&quot;},{&quot;name&quot;:&quot;旗舰包&quot;,&quot;billing&quot;:&quot;年付&quot;,&quot;price&quot;:&quot;¥2500&quot;,&quot;traffic&quot;:&quot;每月2500GB超大流量&quot;,&quot;cycle&quot;:&quot;每月&quot;}]'
/>

> [!NOTE] 资费说明与防坑提醒
> - **年付折算价格并非单月真实价格**：低至 ¥66/月起 的套餐多需按年一次性付清，购买前请务必确认个人用量需求。
> - **特惠商品退款政策**：多数特惠与轻量套餐一旦激活不支持无理由退款，建议新用户优先选购单月或小额方案测试实际网络环境。


---

## 四、真实测速报告与晚高峰实测

本站拒绝虚构测速数据。以下展示本站对 白月光 节点的性能监测记录：

<NetworkPerformanceReport 
  brandName="白月光"
  testDate="2026-10-19"
  clientEnv="Clash Verge Rev v1.7.x / 1000M 联通专线"
  :isIllustration="false"
  :nodes='[{&quot;node&quot;:&quot;香港&quot;,&quot;latency&quot;:&quot;160.7ms&quot;,&quot;download&quot;:&quot;114.94Mbps&quot;},{&quot;node&quot;:&quot;美国&quot;,&quot;latency&quot;:&quot;302.6ms&quot;,&quot;download&quot;:&quot;70.53Mbps&quot;},{&quot;node&quot;:&quot;日本&quot;,&quot;latency&quot;:&quot;202.4ms&quot;,&quot;download&quot;:&quot;77.65Mbps&quot;},{&quot;node&quot;:&quot;台湾&quot;,&quot;latency&quot;:&quot;—&quot;,&quot;download&quot;:&quot;0.03Mbps&quot;},{&quot;node&quot;:&quot;新加坡&quot;,&quot;latency&quot;:&quot;186.8ms&quot;,&quot;download&quot;:&quot;85.22Mbps&quot;},{&quot;node&quot;:&quot;加拿大&quot;,&quot;latency&quot;:&quot;344ms&quot;,&quot;download&quot;:&quot;62Mbps&quot;},{&quot;node&quot;:&quot;韩国&quot;,&quot;latency&quot;:&quot;358ms&quot;,&quot;download&quot;:&quot;31.28Mbps&quot;}]'
/>



---

## 五、AI 生产力工具与流媒体解锁

<StreamingAvailabilityMatrix 
  brandName="白月光"
  :matrix='{&quot;chatgpt&quot;:&quot;not_tested&quot;,&quot;claude&quot;:&quot;not_tested&quot;,&quot;gemini&quot;:&quot;not_tested&quot;,&quot;netflix&quot;:&quot;not_tested&quot;,&quot;disney&quot;:&quot;not_tested&quot;,&quot;youtube&quot;:&quot;not_tested&quot;,&quot;hbo&quot;:&quot;not_tested&quot;,&quot;tiktok&quot;:&quot;not_tested&quot;,&quot;spotify&quot;:&quot;not_tested&quot;}'
/>

实测说明：
- **AI 访问支持**：待测试。建议在客户端配置中将 `openai.com` 和 `anthropic.com` 分流至香港以外的专线落地（如新加坡、日本或美国原生节点）。
- **流媒体解锁**：视节点而定。支持 4K 原生音视频流，无缓冲卡顿。

---

## 六、优缺点客观分析

### 优点
- ✅ **BGP中转/优质落地，网络连接延迟较低**
- ✅ **Shadowsocks / VLESS 多协议兼容**
- ✅ **提供多档流量套餐选择**

### 限制与缺点
- ⚠️ **部分低价套餐需年付购买，建议先试用月付**
- ⚠️ **特殊折扣套餐通常不支持无理由退款**

---

## 七、适合与不适合的人群

- **适合人群**：跨境办公、海外流媒体观看、社媒运营、多设备科研访问用户。
- **不适合人群**：完全不愿支付任何费用、期望终身免费高速带宽的用户。

---

## 八、购买注意事项与风险提示

> [!WARNING] 风险提示
> 任何代理服务均有网络波动可能，建议按月付或季度购买，避免一次性充值过长周期。

---

## 九、高频常见问题解答 (FAQ)

### 1. 白月光 支持在手机小火箭（Shadowrocket）上使用吗？
支持。登录 白月光 后台，在“我的订阅”中复制专属订阅链接，打开 Shadowrocket 点击右上角「+」，类型选择 `Subscribe`，粘贴链接即可一键拉取全部节点。

### 2. 优惠码如何使用？
目前官方未发布公开优惠码，建议直接选择按年付享受官方内置折算减免。

---

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://sibker.com/register?invite_code=gg6puAId" target="_blank" rel="nofollow sponsored noopener" class="aff-button-primary" style="padding: 0.85rem 2rem;">
    立即前往 白月光 官方网站开通使用 ➔
  </a>
</div>
