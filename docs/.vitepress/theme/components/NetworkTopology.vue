<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    brandName: string;
    lineType?: string;
    protocols?: string;
    isConcept?: boolean;
  }>(),
  {
    lineType: 'IEPL 企业内网专线',
    protocols: 'VLESS / Shadowsocks',
    isConcept: true
  }
);
</script>

<template>
  <div class="topo-card">
    <div class="topo-header">
      <div class="topo-title">
        <span class="icon-pulse">🗺️</span>
        <span>{{ brandName }} 传输链路与网络拓扑可视化</span>
      </div>
      <div class="topo-badge">
        <span v-if="isConcept" class="badge-concept">逻辑架构图 (非物理拓扑)</span>
        <span v-else class="badge-real">实测已知链路</span>
      </div>
    </div>

    <div class="topo-body">
      <!-- Node 1: Client -->
      <div class="topo-step">
        <div class="step-icon">💻</div>
        <div class="step-meta">
          <div class="step-title">用户终端设备</div>
          <div class="step-desc">Windows / Mac / iOS / Android</div>
          <div class="step-tag">分流模式 / TUN 内核</div>
        </div>
      </div>

      <div class="topo-arrow">
        <span class="line-data">本地加密流量</span>
        <span class="arrow-symbol">▼</span>
      </div>

      <!-- Node 2: Ingress -->
      <div class="topo-step">
        <div class="step-icon">🏢</div>
        <div class="step-meta">
          <div class="step-title">国内高防 BGP 接入点</div>
          <div class="step-desc">上海 / 广州 / 深圳 骨干网接入</div>
          <div class="step-tag">{{ protocols }}</div>
        </div>
      </div>

      <div class="topo-arrow highlight-link">
        <span class="line-data special">═══ {{ lineType }} (专线物理过境，不过 GFW) ═══</span>
        <span class="arrow-symbol">▼</span>
      </div>

      <!-- Node 3: Egress / Landing -->
      <div class="topo-step">
        <div class="step-icon">🌐</div>
        <div class="step-meta">
          <div class="step-title">海外优质落地集群</div>
          <div class="step-desc">香港 / 东京 / 新加坡 / 硅谷</div>
          <div class="step-tag">原生住宅 IP / 广播解锁</div>
        </div>
      </div>

      <div class="topo-arrow">
        <span class="line-data">原生访问</span>
        <span class="arrow-symbol">▼</span>
      </div>

      <!-- Node 4: Target -->
      <div class="topo-step destination">
        <div class="step-icon">🚀</div>
        <div class="step-meta">
          <div class="step-title">目标高要求互联网服务</div>
          <div class="step-desc">OpenAI / Claude / Netflix 4K / 跨境电商</div>
          <div class="step-tag">零封锁 / 极速响应</div>
        </div>
      </div>
    </div>

    <div class="topo-footer">
      <span>* 拓扑说明：专线架构有效避免公网干扰与高峰期 QoS 限速，提供高度一致的低抖动体验。</span>
      <span class="watermark">[jichangvpn.homes]</span>
    </div>
  </div>
</template>

<style scoped>
.topo-card {
  background: #0b1329;
  border: 1px solid #1e293b;
  border-radius: 8px;
  color: #e2e8f0;
  font-family: var(--vp-font-family-base);
  margin: 1.5rem 0;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}

.topo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem 1.25rem;
  background: #0f172a;
  border-bottom: 1px solid #1e293b;
  font-size: 0.95rem;
}

.topo-title {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 600;
  color: #f8fafc;
}

.badge-concept {
  background: rgba(245, 158, 11, 0.15);
  color: #fbbf24;
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  border: 1px solid rgba(245, 158, 11, 0.3);
  font-family: ui-monospace, monospace;
}

.badge-real {
  background: rgba(16, 185, 129, 0.15);
  color: #34d399;
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  border: 1px solid rgba(16, 185, 129, 0.3);
  font-family: ui-monospace, monospace;
}

.topo-body {
  padding: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

.topo-step {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #111a36;
  border: 1px solid #1e293b;
  border-radius: 6px;
  padding: 0.85rem 1.25rem;
  width: 100%;
  max-width: 520px;
}

.topo-step.destination {
  background: #0d2347;
  border-color: #2563eb;
}

.step-icon {
  font-size: 1.6rem;
}

.step-meta {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  flex: 1;
}

.step-title {
  font-weight: 600;
  font-size: 0.95rem;
  color: #f8fafc;
}

.step-desc {
  font-size: 0.78rem;
  color: #94a3b8;
}

.step-tag {
  display: inline-block;
  align-self: flex-start;
  font-size: 0.7rem;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.1);
  padding: 0.1rem 0.4rem;
  border-radius: 3px;
  font-family: ui-monospace, monospace;
  margin-top: 0.2rem;
}

.topo-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  color: #64748b;
  font-size: 0.75rem;
  font-family: ui-monospace, monospace;
  padding: 0.3rem 0;
}

.topo-arrow.highlight-link {
  color: #38bdf8;
  font-weight: 600;
}

.line-data.special {
  color: #60a5fa;
  font-size: 0.8rem;
}

.topo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.25rem;
  background: #090e1d;
  border-top: 1px solid #1e293b;
  font-size: 0.75rem;
  color: #64748b;
}

.watermark {
  color: #475569;
  font-family: ui-monospace, monospace;
}

@media (max-width: 640px) {
  .topo-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
  }
}
</style>
