<template>
  <nuxt-link to="/" class="logo">
    <img src="@/assets/img/logo.png" alt="Лого" class="logo__img">
    <p v-if="type === 'default'" class="logo__txt">Чувашская Республика<br /> национальные проекты</p>
    <p v-else-if="type === 'ftr'" class="logo__txt">Реализация национальных проектов<br /> в Чувашской Республике</p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
};
</script>

<style scoped>
  .logo {
    display: flex;
    align-items: center;
  }
  .logo__img {
    height: 2.7rem;
    width: 2.7rem;
    margin-right: 9px;
  }
  .logo__txt {
    font-size: .8125rem;
    line-height: 1.125rem;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
  }
</style>
