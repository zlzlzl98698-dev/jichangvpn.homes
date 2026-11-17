<script setup lang="ts">
import { computed, h } from 'vue';

interface CrumbItem {
  name: string;
  url?: string;
}

const props = defineProps<{
  items: CrumbItem[];
}>();

// Filter out initial '首页' if provided in props.items so we don't have duplicate '首页 / 首页'
const displayItems = computed(() => {
  const list = props.items || [];
  if (list.length > 0 && (list[0].name === '首页' || list[0].url === '/')) {
    return list.slice(1);
  }
  return list;
});

const schemaJson = computed(() => {
  const fullList = [
    { name: '首页', url: '/' },
    ...displayItems.value
  ];
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': fullList.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url ? (item.url.startsWith('http') ? item.url : `https://jichangvpn.homes${item.url}`) : undefined
    }))
  });
});

const SchemaScript = () => h('script', {
  type: 'application/ld+json',
  innerHTML: schemaJson.value
});
</script>

<template>
  <nav class="breadcrumb-nav" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
      <li class="crumb-item">
        <a href="/" class="crumb-link">首页</a>
      </li>
      <li v-for="(it, idx) in displayItems" :key="idx" class="crumb-item">
        <span class="crumb-separator">/</span>
        <a v-if="it.url && idx < displayItems.length - 1" :href="it.url" class="crumb-link">
          {{ it.name }}
        </a>
        <span v-else class="crumb-current" aria-current="page">
          {{ it.name }}
        </span>
      </li>
    </ol>
    <!-- Structured data -->
    <SchemaScript />
  </nav>
</template>

<style scoped>
.breadcrumb-nav {
  margin: 1rem 0 1.5rem 0;
  font-size: 0.85rem;
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 0.4rem;
}

.crumb-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.crumb-link {
  color: #64748b;
  text-decoration: none;
  transition: color 0.15s ease;
}

.crumb-link:hover {
  color: #2563eb;
}

.crumb-separator {
  color: #cbd5e1;
}

.crumb-current {
  color: #1e293b;
  font-weight: 500;
}
</style>
