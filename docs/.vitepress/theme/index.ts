import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import './style.css';

import BrandCard from './components/BrandCard.vue';
import BrandFilter from './components/BrandFilter.vue';
import NetworkPerformanceReport from './components/NetworkPerformanceReport.vue';
import StreamingAvailabilityMatrix from './components/StreamingAvailabilityMatrix.vue';
import NetworkTopology from './components/NetworkTopology.vue';
import BrandInfrastructureSnapshot from './components/BrandInfrastructureSnapshot.vue';
import PlanSelector from './components/PlanSelector.vue';
import Breadcrumb from './components/Breadcrumb.vue';
import CommercialDisclosure from './components/CommercialDisclosure.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('BrandCard', BrandCard);
    app.component('BrandFilter', BrandFilter);
    app.component('NetworkPerformanceReport', NetworkPerformanceReport);
    app.component('StreamingAvailabilityMatrix', StreamingAvailabilityMatrix);
    app.component('NetworkTopology', NetworkTopology);
    app.component('BrandInfrastructureSnapshot', BrandInfrastructureSnapshot);
    app.component('PlanSelector', PlanSelector);
    app.component('Breadcrumb', Breadcrumb);
    app.component('CommercialDisclosure', CommercialDisclosure);
  }
} satisfies Theme;
