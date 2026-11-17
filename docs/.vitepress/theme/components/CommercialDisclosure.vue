<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    brandName?: string;
    isSponsored?: boolean;
  }>(),
  {
    isSponsored: false
  }
);
</script>

<template>
  <div class="disclosure-box" :class="{ 'is-sponsored': isSponsored }">
    <div class="disclosure-header">
      <span class="disclosure-icon">⚖️</span>
      <span class="disclosure-title">客观性与商业推广透明度声明</span>
    </div>
    <div class="disclosure-text">
      <span v-if="brandName && isSponsored">
        <strong>{{ brandName }}</strong> 与本站存在品牌推广或联盟返佣合作关系（已在醒目位置标注“赞助”标签）。
      </span>
      <span v-else>
        本站部分文章包含合规的联盟推广注册链接（Affiliate Links）。
      </span>
      本站所有测速数据、流媒体解锁报告及网络拓扑评测均坚持基于真实测试环境记录与官方核对规则，商业合作绝不干预独立实测数据与缺陷披露。购买前请充分结合自身运营商与试用体验理性决策。
    </div>
  </div>
</template>

<style scoped>
.disclosure-box {
  background: #f8fafc;
  border-left: 4px solid #94a3b8;
  border-radius: 0 6px 6px 0;
  padding: 0.85rem 1.25rem;
  margin: 1.5rem 0;
  font-size: 0.82rem;
  color: #475569;
  line-height: 1.6;
}

.disclosure-box.is-sponsored {
  background: #eff6ff;
  border-left-color: #2563eb;
  color: #1e3a8a;
}

.disclosure-header {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
}

.disclosure-icon {
  font-size: 1rem;
}
</style>
