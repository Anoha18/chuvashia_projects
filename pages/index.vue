<script>
export default {
  head() {
    return {
      title: `Главная | ${process.env.APP_NAME}`
    };
  }
};
</script>

<template>
  <div class="container" />
</template>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
