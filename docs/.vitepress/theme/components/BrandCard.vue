<script setup lang="ts">
import { computed } from 'vue';
import brandsData from '../../../data/brands.json';

interface Brand {
  id: string;
  slug: string;
  name: string;
  enName?: string;
  aliases?: string[];
  logo?: string;
  brandColor?: string;
  operationalSince?: string;
  lines?: string;
  protocols?: string[];
  minPriceLabel?: string;
  coupon?: string;
  affUrl?: string;
  isCommercialPriority?: boolean;
  dataStatus?: string;
  overview?: string;
}

const props = defineProps<{
  brand?: Brand;
  slug?: string;
}>();

const currentBrand = computed<Brand | undefined>(() => {
  if (props.brand) return props.brand;
  if (props.slug) {
    return (brandsData as Brand[]).find(b => b.slug === props.slug);
  }
  return undefined;
});
</script>

<template>
  <div v-if="currentBrand" class="brand-card" :class="{ 'is-featured': currentBrand.isCommercialPriority }">
    <!-- Header -->
    <div class="card-head">
      <div class="logo-wrap">
        <img v-if="currentBrand.logo" :src="currentBrand.logo" :alt="currentBrand.name" class="brand-logo" />
        <div v-else class="logo-placeholder" :style="{ backgroundColor: currentBrand.brandColor || '#2563eb' }">
          {{ currentBrand.name.slice(0, 1) }}
        </div>
      </div>
      <div class="meta-wrap">
        <div class="name-row">
          <h3 class="brand-title">{{ currentBrand.name }}</h3>
          <span v-if="currentBrand.isCommercialPriority" class="badge-tag-sponsor">赞助合作推广</span>
          <span v-else-if="currentBrand.dataStatus === 'measured'" class="badge-tag-verified">已独立实测</span>
          <span v-else class="badge-tag-archive">档案待测</span>
        </div>
        <div class="sub-name">
          <span>{{ currentBrand.enName || '' }}</span>
          <span v-if="currentBrand.operationalSince"> · 运营于 {{ currentBrand.operationalSince }}</span>
        </div>
      </div>
    </div>

    <!-- Description -->
    <div class="card-desc">
      {{ currentBrand.overview || '提供多协议及专线分流服务，支持多平台客户端与流媒体解锁。' }}
    </div>

    <!-- Specs Grid -->
    <div class="specs-grid">
      <div class="spec-cell">
        <span class="spec-label">线路架构</span>
        <span class="spec-val">{{ currentBrand.lines || 'BGP优化 / 专线' }}</span>
      </div>
      <div class="spec-cell">
        <span class="spec-label">核心协议</span>
        <span class="spec-val">{{ (currentBrand.protocols || ['Shadowsocks']).join(' / ') }}</span>
      </div>
      <div class="spec-cell">
        <span class="spec-label">入门价格</span>
        <span class="spec-val price">{{ currentBrand.minPriceLabel || '¥20/月起' }}</span>
      </div>
      <div class="spec-cell">
        <span class="spec-label">专属优惠码</span>
        <span class="spec-val coupon">{{ currentBrand.coupon || '暂无专用优惠' }}</span>
      </div>
    </div>

    <!-- Footer Actions -->
    <div class="card-foot">
      <a :href="`/brands/${currentBrand.slug}/`" class="aff-button-secondary btn-detail">
        深度评测与测速报告 →
      </a>
      <a
        v-if="currentBrand.affUrl"
        :href="currentBrand.affUrl"
        target="_blank"
        rel="nofollow sponsored noopener"
        class="aff-button-primary btn-aff"
      >
        注册访问
      </a>
    </div>
  </div>
</template>

<style scoped>
.brand-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
}

.brand-card:hover {
  border-color: #cbd5e1;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.brand-card.is-featured {
  border: 2px solid #2563eb;
  background: #f8fafc;
}

.card-head {
  display: flex;
  gap: 0.85rem;
  align-items: center;
}

.logo-wrap {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  flex-shrink: 0;
}

.brand-logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.logo-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 1.2rem;
}

.meta-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.name-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.brand-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
}

.sub-name {
  font-size: 0.78rem;
  color: #64748b;
}

.badge-tag-sponsor {
  background: #eff6ff;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
}

.badge-tag-verified {
  background: #ecfdf5;
  color: #047857;
  border: 1px solid #a7f3d0;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
}

.badge-tag-archive {
  background: #f1f5f9;
  color: #64748b;
  border: 1px solid #e2e8f0;
  font-size: 0.7rem;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
}

.card-desc {
  font-size: 0.85rem;
  color: #475569;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  background: #f8fafc;
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #f1f5f9;
}

.spec-cell {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.spec-label {
  font-size: 0.7rem;
  color: #64748b;
}

.spec-val {
  font-size: 0.82rem;
  font-weight: 600;
  color: #1e293b;
}

.spec-val.price {
  color: #2563eb;
}

.spec-val.coupon {
  color: #059669;
  font-family: ui-monospace, monospace;
}

.card-foot {
  display: flex;
  gap: 0.6rem;
  margin-top: auto;
}

.btn-detail {
  flex: 1;
  font-size: 0.85rem;
  padding: 0.5rem 0.75rem;
}

.btn-aff {
  font-size: 0.85rem;
  padding: 0.5rem 1rem;
}
</style>
