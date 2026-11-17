<script setup lang="ts">
interface UnlockStatus {
  chatgpt?: string;
  claude?: string;
  gemini?: string;
  netflix?: string;
  disney?: string;
  youtube?: string;
  hbo?: string;
  tiktok?: string;
  spotify?: string;
}

const props = withDefaults(
  defineProps<{
    brandName: string;
    matrix: UnlockStatus;
    testNode?: string;
    testTool?: string;
  }>(),
  {
    testNode: '香港 / 日本专线原生节点',
    testTool: 'RegionRestrictionCheck & Manual Client Test'
  }
);

function getStatusBadge(val?: string) {
  if (val === 'supported') return { label: '实测支持', cls: 'badge-supported', dot: '#10b981' };
  if (val === 'partial') return { label: '部分节点', cls: 'badge-partial', dot: '#f59e0b' };
  if (val === 'unsupported') return { label: '暂不支持', cls: 'badge-unsupported', dot: '#ef4444' };
  if (val === 'vendor_claimed') return { label: '官方宣称', cls: 'badge-claimed', dot: '#3b82f6' };
  return { label: '暂未实测', cls: 'badge-untested', dot: '#64748b' };
}
</script>

<template>
  <div class="matrix-card">
    <!-- Header -->
    <div class="matrix-header">
      <div class="header-title">
        <span class="icon-monitor">🎬</span>
        <span>{{ brandName }} AI 生产力与主流流媒体解锁报告</span>
      </div>
      <div class="header-meta">
        <span>测试范围: 核心落地节点</span>
      </div>
    </div>

    <!-- Sub Info -->
    <div class="matrix-subbar">
      <span>测试基准: {{ testNode }}</span>
      <span>验证工具: {{ testTool }}</span>
    </div>

    <!-- Matrix Grid -->
    <div class="matrix-content">
      <!-- AI Section -->
      <div class="section-block">
        <div class="section-title">AI 生产力工具</div>
        <div class="grid-container">
          <div class="service-box">
            <div class="service-name">ChatGPT (OpenAI)</div>
            <div class="service-desc">网页与移动端免降级</div>
            <div class="status-badge" :class="getStatusBadge(matrix.chatgpt).cls">
              <span class="dot" :style="{ background: getStatusBadge(matrix.chatgpt).dot }"></span>
              {{ getStatusBadge(matrix.chatgpt).label }}
            </div>
          </div>
          <div class="service-box">
            <div class="service-name">Claude 3.5 Sonnet</div>
            <div class="service-desc">原生住宅/数据中心IP</div>
            <div class="status-badge" :class="getStatusBadge(matrix.claude).cls">
              <span class="dot" :style="{ background: getStatusBadge(matrix.claude).dot }"></span>
              {{ getStatusBadge(matrix.claude).label }}
            </div>
          </div>
          <div class="service-box">
            <div class="service-name">Google Gemini</div>
            <div class="service-desc">区域限制检测与解析</div>
            <div class="status-badge" :class="getStatusBadge(matrix.gemini).cls">
              <span class="dot" :style="{ background: getStatusBadge(matrix.gemini).dot }"></span>
              {{ getStatusBadge(matrix.gemini).label }}
            </div>
          </div>
        </div>
      </div>

      <!-- Streaming Section -->
      <div class="section-block">
        <div class="section-title">海外流媒体与影音</div>
        <div class="grid-container">
          <div class="service-box">
            <div class="service-name">Netflix 网飞</div>
            <div class="service-desc">原生非自制剧全解锁</div>
            <div class="status-badge" :class="getStatusBadge(matrix.netflix).cls">
              <span class="dot" :style="{ background: getStatusBadge(matrix.netflix).dot }"></span>
              {{ getStatusBadge(matrix.netflix).label }}
            </div>
          </div>
          <div class="service-box">
            <div class="service-name">Disney+ 迪士尼</div>
            <div class="service-desc">全区高清与音轨支持</div>
            <div class="status-badge" :class="getStatusBadge(matrix.disney).cls">
              <span class="dot" :style="{ background: getStatusBadge(matrix.disney).dot }"></span>
              {{ getStatusBadge(matrix.disney).label }}
            </div>
          </div>
          <div class="service-box">
            <div class="service-name">YouTube Premium</div>
            <div class="service-desc">4K/8K 码率顺畅加载</div>
            <div class="status-badge" :class="getStatusBadge(matrix.youtube).cls">
              <span class="dot" :style="{ background: getStatusBadge(matrix.youtube).dot }"></span>
              {{ getStatusBadge(matrix.youtube).label }}
            </div>
          </div>
          <div class="service-box">
            <div class="service-name">Max (HBO Max)</div>
            <div class="service-desc">美区/欧区全库解锁</div>
            <div class="status-badge" :class="getStatusBadge(matrix.hbo).cls">
              <span class="dot" :style="{ background: getStatusBadge(matrix.hbo).dot }"></span>
              {{ getStatusBadge(matrix.hbo).label }}
            </div>
          </div>
          <div class="service-box">
            <div class="service-name">TikTok 国际版</div>
            <div class="service-desc">短视频流与直播推流</div>
            <div class="status-badge" :class="getStatusBadge(matrix.tiktok).cls">
              <span class="dot" :style="{ background: getStatusBadge(matrix.tiktok).dot }"></span>
              {{ getStatusBadge(matrix.tiktok).label }}
            </div>
          </div>
          <div class="service-box">
            <div class="service-name">Spotify 声田</div>
            <div class="service-desc">跨区登录与免验证</div>
            <div class="status-badge" :class="getStatusBadge(matrix.spotify).cls">
              <span class="dot" :style="{ background: getStatusBadge(matrix.spotify).dot }"></span>
              {{ getStatusBadge(matrix.spotify).label }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="matrix-footer">
      <span>* 提示：流媒体与 AI 服务风控策略变动频繁，偶发 IP 标记属于行业常态，可切换同地区备用节点访问。</span>
      <span class="watermark">[jichangvpn.homes]</span>
    </div>
  </div>
</template>

<style scoped>
.matrix-card {
  background: #0b1329;
  border: 1px solid #1e293b;
  border-radius: 8px;
  color: #e2e8f0;
  font-family: var(--vp-font-family-base);
  margin: 1.5rem 0;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}

.matrix-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem 1.25rem;
  background: #0f172a;
  border-bottom: 1px solid #1e293b;
  font-size: 0.95rem;
}

.header-title {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 600;
  color: #f8fafc;
}

.header-meta {
  font-size: 0.8rem;
  color: #64748b;
  font-family: ui-monospace, monospace;
}

.matrix-subbar {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1.25rem;
  background: #090e1d;
  font-size: 0.75rem;
  color: #64748b;
  border-bottom: 1px solid #1e293b;
  font-family: ui-monospace, monospace;
}

.matrix-content {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.section-title {
  font-size: 0.82rem;
  font-weight: 600;
  color: #94a3b8;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: ui-monospace, monospace;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.service-box {
  background: #111a36;
  border: 1px solid #1e293b;
  border-radius: 6px;
  padding: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.service-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: #f8fafc;
}

.service-desc {
  font-size: 0.75rem;
  color: #64748b;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  font-weight: 500;
  margin-top: 0.3rem;
  font-family: ui-monospace, monospace;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.badge-supported { color: #34d399; }
.badge-partial { color: #fbbf24; }
.badge-unsupported { color: #f87171; }
.badge-claimed { color: #60a5fa; }
.badge-untested { color: #94a3b8; }

.matrix-footer {
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
  .grid-container {
    grid-template-columns: 1fr;
  }
  .matrix-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3rem;
  }
}
</style>
