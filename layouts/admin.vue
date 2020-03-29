<script>
import AppSidebars from '~/components/sidebars/admin.vue';
import AppNavbars from '~/components/navbars/admin.vue';

export default {
  components: {
    AppSidebars,
    AppNavbars
  },
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <app-sidebars :collapsed="collapsed" />
    <a-layout style="height: 100vh">
      <app-navbars :collapsed="collapsed" @callback="() => collapsed = !collapsed" />
      <a-layout-content
        :style="{padding: '24px', minHeight: '280px' }"
      >
        <nuxt />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
