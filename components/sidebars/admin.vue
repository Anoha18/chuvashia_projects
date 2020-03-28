<script>
import AppLogo from '~/components/Logo.vue';

export default {
  components: {
    AppLogo
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  сomputed: {
    route() {
      return this.$route;
    }
  },
  methods: {
    handleClick(e) {
      if (!e.key) {
        return;
      }

      this.$router.push(e.key);
    }
  }
}
</script>

<template>
  <a-layout-sider :trigger="null" collapsible v-model="collapsed">
    <div class="logo-wrapper">
      <app-logo />
      <transition name="logo-label">
        <div v-if="!collapsed" class="logo-label">
          Чувашская республика<br>
          Нацпроекты
        </div>
      </transition>
    </div>
    <a-menu @click="handleClick" theme="dark" mode="vertical">
      <a-menu-item key="/admin/">
        <a-icon type="user" />
        <span>Главная</span>
      </a-menu-item>
      <a-menu-item key="/admin/news">
        <a-icon type="file-text" />
        <span>Новости</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="upload" />
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<style lang="scss">
  .logo-label-enter-active, .logo-label-leave-active {
    transition: opacity .1s;
  }
  .logo-label-enter, .logo-label-leave-to {
    opacity: 0;
  }
</style>
