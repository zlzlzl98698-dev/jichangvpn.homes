<script setup lang="ts">
import { ref, computed } from 'vue';
import BrandCard from './BrandCard.vue';

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
  minPriceMonthly?: number;
  minPriceLabel?: string;
  coupon?: string;
  affUrl?: string;
  isCommercialPriority?: boolean;
  dataStatus?: string;
  overview?: string;
  aiSupport?: string;
  streamingSupport?: string;
}

const props = defineProps<{
  brands: Brand[];
}>();

const searchQuery = ref('');
const selectedLine = ref('all');
const selectedPrice = ref('all');
const selectedProtocol = ref('all');
const sortBy = ref('priority');

const filteredBrands = computed(() => {
  return props.brands.filter(b => {
    // Search
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase().trim();
      const matchName = b.name.toLowerCase().includes(q);
      const matchEn = (b.enName || '').toLowerCase().includes(q);
      const matchAlias = (b.aliases || []).some(a => a.toLowerCase().includes(q));
      const matchLines = (b.lines || '').toLowerCase().includes(q);
      if (!matchName && !matchEn && !matchAlias && !matchLines) return false;
    }

    // Line
    if (selectedLine.value === '专线') {
      if (!b.lines?.includes('专线') && !b.lines?.includes('IPLC') && !b.lines?.includes('IEPL')) return false;
    } else if (selectedLine.value === 'BGP') {
      if (!b.lines?.includes('BGP')) return false;
    }

    // Price
    if (selectedPrice.value === 'low') {
      if ((b.minPriceMonthly || 999) > 10) return false;
    } else if (selectedPrice.value === 'mid') {
      if ((b.minPriceMonthly || 999) <= 10 || (b.minPriceMonthly || 0) > 25) return false;
    } else if (selectedPrice.value === 'high') {
      if ((b.minPriceMonthly || 0) <= 25) return false;
    }

    // Protocol
    if (selectedProtocol.value !== 'all') {
      if (!b.protocols?.includes(selectedProtocol.value)) return false;
    }

    return true;
  }).sort((a, b) => {
    if (sortBy.value === 'priority') {
      if (a.isCommercialPriority && !b.isCommercialPriority) return -1;
      if (!a.isCommercialPriority && b.isCommercialPriority) return 1;
      if (a.dataStatus === 'measured' && b.dataStatus !== 'measured') return -1;
      if (a.dataStatus !== 'measured' && b.dataStatus === 'measured') return 1;
      return (a.minPriceMonthly || 0) - (b.minPriceMonthly || 0);
    }
    if (sortBy.value === 'price_asc') {
      return (a.minPriceMonthly || 0) - (b.minPriceMonthly || 0);
    }
    if (sortBy.value === 'price_desc') {
      return (b.minPriceMonthly || 0) - (a.minPriceMonthly || 0);
    }
    return 0;
  });
});
</script>

<template>
  <div class="brand-filter-system">
    <!-- Filter Bar -->
    <div class="filter-controls">
      <div class="search-box">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索品牌名称、别名、协议、线路特征..."
          class="input-search"
        />
      </div>

      <div class="select-group">
        <select v-model="selectedLine" class="filter-select">
          <option value="all">线路架构: 全部</option>
          <option value="专线">IEPL/IPLC 专线</option>
          <option value="BGP">BGP 智能中转</option>
        </select>

        <select v-model="selectedPrice" class="filter-select">
          <option value="all">价格区间: 全部</option>
          <option value="low">¥10/月以下 (平价入门)</option>
          <option value="mid">¥10 - ¥25/月 (主流性价比)</option>
          <option value="high">¥25/月以上 (高端高配)</option>
        </select>

        <select v-model="selectedProtocol" class="filter-select">
          <option value="all">核心协议: 全部</option>
          <option value="VLESS">VLESS 协议</option>
          <option value="Shadowsocks">Shadowsocks</option>
          <option value="Trojan">Trojan</option>
        </select>

        <select v-model="sortBy" class="filter-select">
          <option value="priority">排序: 综合推荐 / 实测优先</option>
          <option value="price_asc">价格: 从低到高</option>
          <option value="price_desc">价格: 从高到低</option>
        </select>
      </div>
    </div>

    <!-- Status counter -->
    <div class="results-meta">
      <span>已筛选出 <strong>{{ filteredBrands.length }}</strong> 个品牌服务商</span>
      <span v-if="filteredBrands.length < brands.length" class="reset-link" @click="searchQuery = ''; selectedLine = 'all'; selectedPrice = 'all'; selectedProtocol = 'all';">
        [重置筛选条件]
      </span>
    </div>

    <!-- Cards Grid -->
    <div v-if="filteredBrands.length > 0" class="brands-grid">
      <BrandCard
        v-for="brand in filteredBrands"
        :key="brand.id"
        :brand="brand"
      />
    </div>

    <!-- Empty State -->
    <div v-else class="empty-state">
      <div class="empty-icon">🔍</div>
      <div class="empty-title">未找到匹配的品牌信息</div>
      <div class="empty-desc">请尝试调整搜索关键词或重置筛选条件查看全部品牌库。</div>
    </div>
  </div>
</template>

<style scoped>
.brand-filter-system {
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.filter-controls {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.input-search {
  width: 100%;
  padding: 0.65rem 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 0.95rem;
  outline: none;
  background: #ffffff;
  transition: border-color 0.2s ease;
}

.input-search:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

.select-group {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}

.filter-select {
  padding: 0.55rem 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 0.85rem;
  background: #ffffff;
  color: #334155;
  outline: none;
}

.results-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.88rem;
  color: #64748b;
  padding: 0 0.25rem;
}

.results-meta strong {
  color: #2563eb;
}

.reset-link {
  color: #2563eb;
  cursor: pointer;
  text-decoration: underline;
}

.brands-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.empty-state {
  text-align: center;
  padding: 3rem 1.5rem;
  background: #f8fafc;
  border: 1px dashed #cbd5e1;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.empty-icon {
  font-size: 2.5rem;
}

.empty-title {
  font-weight: 600;
  color: #1e293b;
}

.empty-desc {
  font-size: 0.85rem;
  color: #64748b;
}

@media (max-width: 768px) {
  .select-group {
    grid-template-columns: 1fr 1fr;
  }
  .brands-grid {
    grid-template-columns: 1fr;
  }
}
</style>
