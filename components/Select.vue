<template>
  <div class="select">
    <p class="select__ttl">
      {{ title }}
    </p>
    <div class="select__value">
      <p class="select__value-text">
        Все
      </p>
      <svg class="select__value-icon">
        <use xlink:href="@/assets/img/svg/sprite.svg#arrow_up" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      // required: false
    },
    options: {
      type: Array,
      // required: true
    }
  }
};
</script>

<style scoped>
  .select__value-icon {
    width: 10px;
    height: 10px;
  }
</style>
