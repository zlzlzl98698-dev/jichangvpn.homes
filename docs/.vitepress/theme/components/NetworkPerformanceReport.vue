<script setup lang="ts">
interface SpeedNode {
  node: string;
  latency: string;
  download: string;
  upload?: string;
  loss?: string;
}

const props = withDefaults(
  defineProps<{
    brandName: string;
    testDate?: string;
    clientEnv?: string;
    nodes: SpeedNode[];
    isIllustration?: boolean;
  }>(),
  {
    testDate: '2026-10-19 非晚高峰实测',
    clientEnv: 'Clash Verge Rev v1.7.x / 1000M 联通专线',
    isIllustration: false
  }
);
</script>

<template>
  <div class="network-console">
    <!-- Header -->
    <div class="console-header">
      <div class="header-left">
        <span class="status-indicator"></span>
        <span class="console-title">{{ brandName }} 节点测速监控报告</span>
      </div>
      <div class="header-right">
        <span v-if="isIllustration" class="tag-warning">概念示意</span>
        <span v-else class="tag-verified">实测数据</span>
        <span class="console-date">{{ testDate }}</span>
      </div>
    </div>

    <!-- Sub Info -->
    <div class="console-subbar">
      <span>测试环境: {{ clientEnv }}</span>
      <span>基准服务器: Speedtest.net 骨干节点</span>
    </div>

    <!-- Node Rows -->
    <div class="console-body">
      <div v-for="(item, idx) in nodes" :key="idx" class="node-row">
        <div class="node-meta">
          <div class="node-name">
            <span class="node-dot"></span>
            <strong>{{ item.node }}</strong>
          </div>
          <div class="node-stats">
            <span class="stat-item">延迟: <em>{{ item.latency }}</em></span>
            <span class="stat-item">下行: <em>{{ item.download }}</em></span>
            <span v-if="item.upload" class="stat-item">上行: {{ item.upload }}</span>
          </div>
        </div>
        <!-- Speed Bar -->
        <div class="speed-bar-container">
          <div
            class="speed-bar"
            :style="{
              width: Math.min(100, Math.max(10, parseInt(item.download || '100') / 6)) + '%'
            }"
          ></div>
        </div>
      </div>
    </div>

    <!-- Footer Summary -->
    <div class="console-footer">
      <div class="summary-text">
        <span>* 注：实测表现受用户本地宽带运营商、路由节点负载及晚高峰 QoS 影响，数据仅供参考。</span>
      </div>
      <div class="console-watermark">
        [jichangvpn.homes]
      </div>
    </div>
  </div>
</template>

<style scoped>
.network-console {
  background: #0b1329;
  border: 1px solid #1e293b;
  border-radius: 8px;
  color: #e2e8f0;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  margin: 1.5rem 0;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}

.console-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem 1.25rem;
  background: #0f172a;
  border-bottom: 1px solid #1e293b;
  font-size: 0.95rem;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.status-indicator {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 8px #10b981;
}

.console-title {
  font-weight: 600;
  color: #f8fafc;
  letter-spacing: -0.01em;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.tag-verified {
  background: rgba(16, 185, 129, 0.15);
  color: #34d399;
  font-size: 0.75rem;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.tag-warning {
  background: rgba(245, 158, 11, 0.15);
  color: #fbbf24;
  font-size: 0.75rem;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.console-date {
  color: #64748b;
  font-size: 0.8rem;
}

.console-subbar {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1.25rem;
  background: #090e1d;
  font-size: 0.75rem;
  color: #64748b;
  border-bottom: 1px solid #1e293b;
}

.console-body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.node-row {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.node-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.88rem;
}

.node-name {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.node-dot {
  width: 6px;
  height: 6px;
  background: #38bdf8;
  border-radius: 50%;
}

.node-stats {
  display: flex;
  gap: 1rem;
  color: #94a3b8;
}

.stat-item em {
  font-style: normal;
  color: #38bdf8;
  font-weight: 600;
}

.speed-bar-container {
  height: 6px;
  background: #1e293b;
  border-radius: 3px;
  overflow: hidden;
}

.speed-bar {
  height: 100%;
  background: linear-gradient(90deg, #2563eb, #38bdf8);
  border-radius: 3px;
  transition: width 0.6s ease;
}

.console-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.25rem;
  background: #090e1d;
  border-top: 1px solid #1e293b;
  font-size: 0.75rem;
  color: #64748b;
}

.console-watermark {
  color: #475569;
  letter-spacing: 0.05em;
}

@media (max-width: 640px) {
  .console-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
  }
  .node-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2rem;
  }
}
</style>
