<script setup lang="ts">
const props = defineProps<{
  brandName: string;
  operationalSince: string;
  lines: string;
  protocols: string[];
  clients: string[];
  minPriceLabel: string;
  dataStatus: string;
  verifiedDate: string;
  dataSource: string;
}>();

function getStatusText(status: string) {
  if (status === 'measured') return { text: '已进行独立抽检', color: '#10b981' };
  if (status === 'historical_archive') return { text: '历史档案记录（待重新实测）', color: '#f59e0b' };
  return { text: '官方宣称（待独立实测）', color: '#3b82f6' };
}
</script>

<template>
  <div class="infra-card">
    <div class="infra-header">
      <div class="title-wrap">
        <span class="icon">⚙️</span>
        <span class="title">{{ brandName }} 基础设施与技术参数概览</span>
      </div>
      <div class="status-pill" :style="{ borderColor: getStatusText(dataStatus).color }">
        <span class="dot" :style="{ background: getStatusText(dataStatus).color }"></span>
        <span>{{ getStatusText(dataStatus).text }}</span>
      </div>
    </div>

    <div class="infra-grid">
      <div class="param-item">
        <div class="param-label">运营资历</div>
        <div class="param-value">{{ operationalSince || '近期上线' }}</div>
      </div>
      <div class="param-item">
        <div class="param-label">线路架构</div>
        <div class="param-value highlight">{{ lines }}</div>
      </div>
      <div class="param-item">
        <div class="param-label">核心协议</div>
        <div class="param-value">{{ protocols.join(' / ') }}</div>
      </div>
      <div class="param-item">
        <div class="param-label">客户端兼容</div>
        <div class="param-value">{{ clients.join('、') }}</div>
      </div>
      <div class="param-item">
        <div class="param-label">价格门槛</div>
        <div class="param-value highlight">{{ minPriceLabel }}</div>
      </div>
      <div class="param-item">
        <div class="param-label">核验日期</div>
        <div class="param-value">{{ verifiedDate }}</div>
      </div>
    </div>

    <div class="infra-footer">
      <span>数据来源: {{ dataSource }}</span>
      <span class="watermark">[jichangvpn.homes]</span>
    </div>
  </div>
</template>

<style scoped>
.infra-card {
  background: #0b1329;
  border: 1px solid #1e293b;
  border-radius: 8px;
  color: #e2e8f0;
  font-family: var(--vp-font-family-base);
  margin: 1.5rem 0;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}

.infra-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem 1.25rem;
  background: #0f172a;
  border-bottom: 1px solid #1e293b;
  font-size: 0.95rem;
}

.title-wrap {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #f8fafc;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid;
  font-family: ui-monospace, monospace;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.infra-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1.25rem;
}

.param-item {
  background: #111a36;
  border: 1px solid #1e293b;
  border-radius: 6px;
  padding: 0.85rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.param-label {
  font-size: 0.75rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: ui-monospace, monospace;
}

.param-value {
  font-size: 0.9rem;
  font-weight: 600;
  color: #f1f5f9;
}

.param-value.highlight {
  color: #38bdf8;
}

.infra-footer {
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

@media (max-width: 768px) {
  .infra-grid {
    grid-template-columns: 1fr;
  }
  .infra-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
  }
}
</style>
