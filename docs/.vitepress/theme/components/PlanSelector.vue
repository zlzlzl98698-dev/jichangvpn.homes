<script setup lang="ts">
import { ref } from 'vue';

interface Plan {
  name: string;
  billing: string;
  price: string;
  traffic: string;
  cycle: string;
}

const props = defineProps<{
  brandName: string;
  plans: Plan[];
  affUrl: string;
  coupon?: string;
}>();

const selectedIdx = ref(0);
</script>

<template>
  <div class="plan-selector">
    <div class="selector-header">
      <div class="title-area">
        <span class="icon">💳</span>
        <span class="title">{{ brandName }} 官方核准套餐档位分析</span>
      </div>
      <div v-if="coupon" class="coupon-tag">
        优惠码: <code>{{ coupon }}</code>
      </div>
    </div>

    <!-- Plan Tabs -->
    <div class="plan-tabs">
      <button
        v-for="(p, i) in plans"
        :key="i"
        class="tab-btn"
        :class="{ active: selectedIdx === i }"
        @click="selectedIdx = i"
      >
        <span class="tab-name">{{ p.name }}</span>
        <span class="tab-price">{{ p.price }}</span>
      </button>
    </div>

    <!-- Active Plan Detail -->
    <div v-if="plans[selectedIdx]" class="plan-detail-card">
      <div class="detail-row">
        <div class="metric">
          <span class="label">计费模式</span>
          <span class="value">{{ plans[selectedIdx].billing || '周期付' }}</span>
        </div>
        <div class="metric">
          <span class="label">套餐售价</span>
          <span class="value price-val">{{ plans[selectedIdx].price }}</span>
        </div>
        <div class="metric">
          <span class="label">流量额度</span>
          <span class="value highlight-val">{{ plans[selectedIdx].traffic }}</span>
        </div>
        <div class="metric">
          <span class="label">重置周期</span>
          <span class="value">{{ plans[selectedIdx].cycle || '到期重置/一次性' }}</span>
        </div>
      </div>

      <div class="cta-box">
        <div class="cta-tip">
          * 提示：根据品牌规定，不同结算周期享受差异化优惠（如年付折算）；购买前建议先选择小额套餐测试晚高峰。
        </div>
        <a
          :href="affUrl"
          target="_blank"
          rel="nofollow sponsored noopener"
          class="aff-button-primary"
        >
          前往 {{ brandName }} 官方注册开通 →
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.plan-selector {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin: 1.5rem 0;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.selector-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.title-area {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #0f172a;
}

.coupon-tag {
  background: #eff6ff;
  border: 1px dashed #3b82f6;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #1e40af;
}

.coupon-tag code {
  font-weight: 700;
  color: #2563eb;
}

.plan-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem 1.25rem;
  background: #fafbfd;
  border-bottom: 1px solid #e2e8f0;
}

.tab-btn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 0.85rem;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-btn:hover {
  border-color: #94a3b8;
}

.tab-btn.active {
  background: #eff6ff;
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}

.tab-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: #1e293b;
}

.tab-price {
  font-size: 0.78rem;
  color: #64748b;
  margin-top: 0.15rem;
}

.tab-btn.active .tab-price {
  color: #2563eb;
  font-weight: 600;
}

.plan-detail-card {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.detail-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.metric {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.label {
  font-size: 0.75rem;
  color: #64748b;
}

.value {
  font-size: 1rem;
  font-weight: 600;
  color: #0f172a;
}

.price-val {
  color: #2563eb;
}

.highlight-val {
  color: #0d9488;
}

.cta-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-top: 0.75rem;
  border-top: 1px dashed #e2e8f0;
}

.cta-tip {
  font-size: 0.8rem;
  color: #64748b;
  flex: 1;
}

@media (max-width: 640px) {
  .detail-row {
    grid-template-columns: repeat(2, 1fr);
  }
  .cta-box {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
